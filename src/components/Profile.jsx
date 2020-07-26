import React from 'react';

const Profile = () => {
  return (
    <main className='main'>
      <div className='main__intro-img' />
      <div className='main__profile-info profile'>
        <a className='profile__avatar'></a>
        <div className='profile__details'>
          <h3 className='profile__name'>Sasha P.</h3>
          <ul className='profile__info-list'>
            <li className='profile__info-item'>
              Date of Birth:
                <span className='profile__info-data'>April 11th</span>
            </li>
            <li className='profile__info-item'>
              City:
                <span className='profile__info-data'>Kherson</span>
            </li>
            <li className='profile__info-item'>
              Education:
                <span className='profile__info-data'>no information given</span>
            </li>
            <li className='profile__info-item'>
              Web Site:
                <span className='profile__info-data'>no information given</span>
            </li>
          </ul>
        </div>
      </div>
      <div className='main__create-post create-post'>
        <h2 className='create-post__title'>What's new?</h2>
        <p contentEditable='true' className='create-post__new-text'></p>
        <button className='create-post__create-button'>Send</button>
      </div>
      <div className='main__posts-section posts'>
        <div className='posts__posts-item'></div>
        <div className='posts__posts-item'></div>
        <div className='posts__posts-item'></div>
      </div>
    </main>
  );
}

export default Profile;