import React, { useState, useEffect, useMemo, useCallback } from 'react';
import color from '../components/styles/color';
//styles
import StyledLoading from '../components/styles/StyledLoading';
import StyledElement from '../components/styles/StyledElement';
import StyledRow from '../components/styles/StyledRow';

function Average({ average }) {
  const [num, setNum] = useState(0);
  useEffect(() => {
    console.log('Average component re-render');
    setNum(average());
  }, [average]);
  return (
    <StyledElement color={color['purple']}> Average Ids: {num}</StyledElement>
  );
}

export default function Posts() {
  const [posts, setPosts] = useState([]);
  const [currentPost, setCurrentPost] = useState(null);
  const [loading, setLoading] = useState(false);
  const ids = posts.map((p) => p.d);

  //dummy values to illustrate the useMemo hook
  const sumIds = useMemo(() => {
    sum(ids);
  }, [posts]);

  //dummy function to illustrate useCallback
  const averageIds = useCallback(() => {
    return average(1, 2, 3, 4);
  }, [posts]);

  useEffect(() => {
    console.log('Run on mounted');
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((allPosts) => {
        const randomNum = Math.floor(Math.random() * 96);
        const posts = allPosts.slice(randomNum, randomNum + 4);
        setPosts(posts);
        setCurrentPost(posts[0]);
      });

    return () => {
      console.log('Clean up function for setting up posts');
      setPosts([]);
    };
  }, []);

  useEffect(() => {
    console.log('run on re-render');
  });

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 700);
  }, [currentPost]);
  function changePost(id) {
    const selectedPost = posts.find((post) => post.id === id);
    setLoading(true);
    setCurrentPost(selectedPost);
  }
  return (
    <>
      {loading ? (
        <StyledLoading />
      ) : (
        <StyledElement color={color['brown']}>
          {currentPost ? currentPost.body : ''}
        </StyledElement>
      )}
      <StyledRow>
        {posts.map((post) => {
          return (
            <StyledElement
              style={{
                cursor: 'pointer',
                border: `${
                  currentPost && currentPost.id === post.id ? '4px' : '0px'
                } solid #afacb0`,
              }}
              onClick={() => changePost(post.id)}
              key={post.id}
              color={color['green']}
            >
              <div
                style={{
                  padding: '0.5em',
                  background: `${color['red']}`,
                  borderRadius: '5px',
                  marginBottom: '1em',
                }}
              >
                {post.title.slice(0, 12) + '...'}
              </div>
              {post.body.slice(0, 50) + '...'}
            </StyledElement>
          );
        })}
        <Average average={averageIds} />
      </StyledRow>
    </>
  );
}

function sum(...args) {
  console.log('function sum called');
  sleep(200);
  let sum = 0;
  args.forEach((i) => (sum += parseInt(i)));
  return sum;
}

function average(...args) {
  console.log('function average called');
  sleep(200);
  let sum = 0;
  args.forEach((i) => (sum += parseInt(i)));
  return sum / args.length;
}
function sleep(ms) {
  const start = new Date().getTime();
  while (new Date().getTime() < start + ms) {}
}
