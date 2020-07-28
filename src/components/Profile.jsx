import React from 'react';
import mainSt from '../css_modules/main.module.css';

const Profile = () => {
  return (
    <main className={mainSt.main}>
      <div className={`${mainSt.profile} ${mainSt.profileInfo}`}>
        <a className={mainSt.avatar} href='/'></a>
        <div className={mainSt.details}>
          <h3 className={mainSt.name}>
            <a className={mainSt.link} href="/">
              Sasha P.
            </a>
          </h3>
          <ul className={mainSt.infoList}>
            <li className={mainSt.ite}>
              Date of Birth:
                <span className={mainSt.data}>April 11th</span>
            </li>
            <li className={mainSt.ite}>
              City:
                <span className={mainSt.data}>Kherson</span>
            </li>
            <li className={mainSt.ite}>
              Education:
              <span className={mainSt.data}>no information given</span>
            </li>
            <li className={mainSt.ite}>
              Web Site:
                <span className={mainSt.data}>no information given</span>
            </li>
          </ul>
        </div>
      </div>
      <div className={mainSt.createPost}>
        <h2 className={mainSt.title}>What's new?</h2>
        <p contentEditable='true' className={mainSt.newText}></p>
        <button className={mainSt.createButton}>Send</button>
      </div>
      <div className={mainSt.posts}>
        <div className={mainSt.postItem}></div>
        <div className={mainSt.postItem}></div>
        <div className={mainSt.postItem}></div>
      </div>
    </main>
  );
}

export default Profile;