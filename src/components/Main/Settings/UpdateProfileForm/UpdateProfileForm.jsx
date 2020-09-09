import React from 'react';
import styles from './updateprofileform.module.css';
import { reduxForm, Field } from 'redux-form';
import { UpdateProfileInput, UpdateProfileTextarea, UpdateProfileCheckbox }
  from '../../../../forms/UpdateProfileFields/UpdateProfileFields';
import { required } from '../../../../forms/validation';
import ContactsInfo from './ContactsInfo/ContactsInfo';

const nameIsRequired = required('name');

const UpdateProfile = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <Field
        component={UpdateProfileInput}
        name="fullName"
        inputName="Name:"
        id="fullName"
        type="text"
        validate={[nameIsRequired]}
      />
      <Field
        maxLength="200"
        component={UpdateProfileTextarea}
        name="aboutMe"
        areaName="About me:"
      />
      <Field
        maxLength="200"
        component={UpdateProfileTextarea}
        name="lookingForAJobDescription"
        areaName="Professional skills:"
      />
      <Field
        checked={props.userInfo.lookingForAJob}
        component={UpdateProfileCheckbox}
        name="lookingForAJob"
        id="lookingForAJob"
        label="Looking for a job:"
      />
      <ContactsInfo contacts={props.userInfo.contacts}/>
      <button
        className={styles.save}
        onClick={props.onClick}
      >
        Save
      </button>
    </form>
  )
}

const UpdateProfileForm = reduxForm({ form: 'updateProfile' })(UpdateProfile); 

export default UpdateProfileForm;