import React, { Component } from 'react'
import "./scss/app.css"
import CustomInput from './cpmponents/CustomInput';
import CustomTextArea from './cpmponents/CustomTextArea';
import MultiTagInput from './cpmponents/MultiTagInput';
import ResumeLayout from './cpmponents/ResumeLayout';

export default class ResumBuilder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isResumeReady:false,
      name: "",
      birthDate: "",
      email: "",
      about: "",
      expireince: [
        {
          company_name: "",
          job: "",
          location: "",
          description: "",
          isCurrent: false,
          from: "",
          to: ""
        }
      ],
      education: [
        {
          name: "",
          location: "",
          about: "",
          from: "",
          to: "",

        }
      ],
      project: [
        {
          name: "",
          description: "",
          role: ""
        }

      ],
      skils: [],
      languges: []
    };
  }
  // form onchange onput hanlder
  inputHandler = (e) => {
    let { name, value } = e.target;
    this.setState((prevState) => {
      return {
        ...prevState,
        [name]: value
      }
    })
  }
  handleKeyDown = (e) => {
    if (e.key !== 'Enter') return
    const { name, value } = e.target

    if (!value.trim()) return
    this.setState((prevState) => {
      if (name === "skils") {
        return {
          ...prevState,
          skils: [...prevState.skils, value]
        }
      }
      if (name === "languges") {
        return {
          ...prevState,
          languges: [...prevState.languges, value]
        }
      }
    })
    e.target.value = ''
  }
  expireinceInputHandler = (e, index) => {
    const { name, value } = e.target
    let list = [...this.state.expireince];
    if (name === "isCurrent") {
      list[index][name] = !this.state.expireince[index].isCurrent;
    } else {
      list[index][name] = value;
    }
    this.setState((prevState) => {
      return {
        ...prevState,
        expireince: list
      }
    })
  }
  educationInputHandler = (e, index) => {
    const { name, value } = e.target
    let list = [...this.state.education];
    list[index][name] = value;
    this.setState((prevState) => {
      return {
        ...prevState,
        education: list
      }
    })
  }
  projectsInputHandler = (e, index) => {
    const { name, value } = e.target
    let list = [...this.state.project];
    list[index][name] = value;
    this.setState((prevState) => {
      return {
        ...prevState,
        project: list
      }
    })
  }
  handelEducationAddClick = (e) => {
    e.preventDefault();
    this.setState((prevState) => {
      return {
        ...prevState,
        education: [...this.state.education, {
          name: "",
          location: "",
          about: "",
          from: "",
          to: "",
        }]
      }
    })
  }
  handeleProjectAddClick=(e)=>{
    e.preventDefault();
    this.setState((prevState) => {
      return {
        ...prevState,
        project: [...this.state.project, {
          name: "",
          description: "",
          role: ""
        }]
      }
    })
  }
  handleExpireinceAddClick = (e) => {
    e.preventDefault();
    this.setState((prevState) => {
      return {
        ...prevState,
        expireince: [...this.state.expireince, {
          company_name: "",
          job: "",
          location: "",
          description: "",
          isCurrent: false,
          from: "",
          to: ""
        }]
      }
    })
  };
  submit=()=>{
   this.setState((prev)=>{
    return {
      ...prev,
      isResumeReady:true
    }
   })
  }
  render() {
    const { expireince, education,project,isResumeReady } = this.state
    return (
      <div className='resume-bulder-wrapper'>
      {
        isResumeReady?<ResumeLayout data={this.state}/>
        : <div className='form-fileds'>
          <p className='title'>Personal information</p>
          <CustomInput
            className="form-input"
            placeholder="Enter Name"
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.inputHandler}
          />
          <CustomInput
            className="form-input"
            placeholder="Enter BirthDate"
            type="date"
            name="birthDate"
            value={this.state.birthDate}
            onChange={this.inputHandler}
          />
          <CustomInput
            className="form-input"
            placeholder="Enter email"
            type="email"
            name="email"
            value={this.state.email}
            onChange={this.inputHandler}
          />
          <CustomTextArea
            className="form-input"
            placeholder="Enter About"
            name="about"
            value={this.state.about}
            onChange={this.inputHandler}
          />
          <p className='title'>Expireince</p>
          {
            expireince?.map((cv, index) => {
              return<div key={index}>
                <CustomInput
                  className="form-input"
                  type="text"
                  placeholder={`Enter Company name`}
                  name={`company_name`}
                  value={this.state.expireince[cv.company_name]}
                  onChange={(e) => this.expireinceInputHandler(e, index)}

                />
                <CustomInput
                  className="form-input"
                  type="text"
                  placeholder={`Enter job`}
                  name={`job`}
                  value={this.state.expireince[cv.job]}
                  onChange={(e) => this.expireinceInputHandler(e, index)}

                />
                <CustomInput
                  className="form-input"
                  type="text"
                  placeholder={`Enter location`}
                  name={`location`}
                  value={this.state.expireince[cv.location]}
                  onChange={(e) => this.expireinceInputHandler(e, index)}


                />
                <CustomInput
                  className="form-input"
                  type="text"
                  placeholder={`Enter description`}
                  name={`description`}
                  value={this.state.expireince[cv.description]}
                  onChange={(e) => this.expireinceInputHandler(e, index)}


                />
                <CustomInput
                  className="form-input"
                  type="checkbox"
                  placeholder={`Enter isCurrent`}
                  name={`isCurrent`}
                  value={this.state.expireince[cv.isCurrent]}
                  onChange={(e) => this.expireinceInputHandler(e, index)}

                />
                <CustomInput
                  className="form-input"
                  type="date"
                  placeholder={`from`}
                  name={`from`}
                  value={this.state.expireince[cv.from]}
                  onChange={(e) => this.expireinceInputHandler(e, index)}


                />
                <CustomInput
                  className="form-input"
                  type="date"
                  placeholder={`to`}
                  name={`to`}
                  value={this.state.expireince[cv.to]}
                  onChange={(e) => this.expireinceInputHandler(e, index)}
                />

              </div>
            })

          }
          <button onClick={this.handleExpireinceAddClick} className="btn">+</button>
          <p className='title'>Educations</p>
          {
            education?.map((cv, index) => {

              return <div key={index}>
                <CustomInput
                  className="form-input"
                  type="text"
                  placeholder={`Enter name`}
                  name={`name`}
                  value={this.state.education[cv.name]}
                  onChange={(e) => this.educationInputHandler(e, index)}

                />
                <CustomInput
                  className="form-input"
                  type="text"
                  placeholder={`Enter location`}
                  name={`location`}
                  value={this.state.education[cv.location]}
                  onChange={(e) => this.educationInputHandler(e, index)}

                />
                <CustomInput
                  className="form-input"
                  type="text"
                  placeholder={`Enter location`}
                  name={`location`}
                  value={this.state.education[cv.location]}
                  onChange={(e) => this.educationInputHandler(e, index)}


                />
                <CustomTextArea
                  className="form-input"
                  placeholder="Enter About"
                  name="about"
                  value={this.state.education[cv.about]}
                  onChange={(e)=>this.educationInputHandler(e,index)}
                />
                <CustomInput
                  className="form-input"
                  type="date"
                  placeholder={`from`}
                  name={`from`}
                  value={this.state.education[cv.from]}
                  onChange={(e) => this.educationInputHandler(e, index)}
                />
                <CustomInput
                  className="form-input"
                  type="date"
                  placeholder={`to`}
                  name={`to`}
                  value={this.state.education[cv.to]}
                  onChange={(e) => this.educationInputHandler(e, index)}
                />
              </div>
            })

          }
          <button onClick={this.handelEducationAddClick} className="btn">+</button>
          <p className='title'>Skils</p>
          <MultiTagInput tags={this.state.skils} name="skils" handleKeyDown={this.handleKeyDown} />
          <p className='title'>Languges</p>
          <MultiTagInput tags={this.state.languges} name="languges" handleKeyDown={this.handleKeyDown} />
          <p className='title'>Projects</p>
          {
            project?.map((cv, index) => {
              return <div key={index}>
                <CustomInput
                  className="form-input"
                  type="text"
                  placeholder={`Enter name`}
                  name={`name`}
                  value={this.state.project[cv.name]}
                  onChange={(e) => this.projectsInputHandler(e, index)}

                />
                <CustomTextArea
                  className="form-input"
                  placeholder="Enter description"
                  name="description"
                  value={this.state.project[cv.description]}
                  onChange={(e)=>this.projectsInputHandler(e,index)}
                />
                <CustomInput
                  className="form-input"
                  type="text"
                  placeholder={`Enter role`}
                  name={`role`}
                  value={this.state.project[cv.role]}
                  onChange={(e) => this.projectsInputHandler(e, index)}
                />
              </div>
            })

          }
          <button onClick={this.handeleProjectAddClick} className="btn">+</button>
          <br/>
          <hr/>
          <button onClick={this.submit} className="btn">Create resume</button>
        </div>
      }
      </div>
    )
  }
}
