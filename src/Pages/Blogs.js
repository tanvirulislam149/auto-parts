import React from 'react';

const Blogs = () => {
    return (
        <div>
            <p className='text-4xl text-center text-accent-focus'>Question & Answer</p>
            <p>1) Que:  How will you improve the performance of a React Application?</p>
            <p>Ans: React compares the actual changes with virtual DOM which is saved in a state. So when the state is changed the children components re-renders. This makes an app slower. so we should use siblings components instead of children to optimize performance. Beside this, we can use React.memo() to memoizing a component. That means any component which is not need rendering will use previous rendered value to optimize performance.</p>
            <p>2) Que: What are the different ways to manage a state in a React application?</p>
            <p>Ans: There are 4 kinds of state in react and they are needed to manage differently. To manage local state, we can use simply useState. It is so easy and can be send to any child component easily. State that can be accessed from any component is global and to manage this, we can use Context API, Although it is not a state manager.  </p>
        </div>
    );
};

export default Blogs;