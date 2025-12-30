import React from 'react';
import b1 from '../assets/blog1.jpg'; // Path check pannunga b1, b2, b3
import b2 from '../assets/blog2.jpg';
import b3 from '../assets/blog3.jpg';

const Blog = () => {
  const posts = [
    { 
      title: "Hypertension And Lifestyle: From Smoking To Exercise", 
      img: b1, 
      date: "December 20, 2023",
      desc: "Adopting a healthy lifestyle is key to managing high blood pressure..." 
    },
    { 
      title: "7 Lifestyle Habits For A Constipation-Free Existence", 
      img: b2, 
      date: "December 22, 2023",
      desc: "Diet and activity play a major role in your digestive health..." 
    },
    { 
      title: "Osteoporosis And Bone Health: Strategies For Stronger Bones", 
      img: b3, 
      date: "December 25, 2023",
      desc: "Learn how to keep your bones strong as you age with these tips..." 
    }
  ];

  return (
    <div className="blog-section" id="blog" style={{padding: '80px 0', background: '#f9f9f9'}}>
      <div style={{textAlign: 'center', marginBottom: '50px'}}>
        <h2 style={{color: '#1a2b56', fontSize: '32px'}}>Our Blog</h2>
        <p style={{color: '#008148', fontWeight: 'bold'}}>Health And Personal Wellness</p>
      </div>

      <div className="blog-grid">
        {posts.map((post, index) => (
          <div key={index} style={{background: '#fff', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 5px 15px rgba(0,0,0,0.05)'}}>
            <img src={post.img} alt={post.title} style={{width: '100%', height: '220px', objectFit: 'cover'}} />
            <div style={{padding: '25px'}}>
              <p style={{fontSize: '12px', color: '#999', marginBottom: '10px'}}>{post.date}</p>
              <h4 style={{color: '#1a2b56', fontSize: '16px', marginBottom: '15px', height: '45px', overflow: 'hidden'}}>{post.title}</h4>
              <p style={{fontSize: '13px', color: '#666', marginBottom: '20px'}}>{post.desc}</p>
              <button style={{background: 'none', border: '1px solid #008148', color: '#008148', padding: '8px 15px', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold', fontSize: '12px'}}>
                READ MORE
              </button>
            </div>
          </div>
        ))}
      </div>
      <div style={{textAlign: 'center', marginTop: '40px'}}>
        <button style={{background: '#008148', color: '#fff', border: 'none', padding: '12px 30px', borderRadius: '4px', cursor: 'pointer'}}>VIEW ALL</button>
      </div>
    </div>
  );
};
export default Blog;