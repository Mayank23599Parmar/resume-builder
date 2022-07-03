import React from 'react'

export default function ResumeLayout(props) {
    const {name,birthDate,email,about,expireince,education,project,skils,languges}=props.data
    return (
        <div classNameName='resume-layout'>
            <div className="container">
                <div className="header">
                    <div className="full-name">
                        <span className="first-name">{name}</span>
                    </div>
                    <div className="contact-info">
                        <span className="email">Email: </span>
                        <span className="email-val">{email}</span>
                        <span className="separator"></span>
                        <span className="birthDate">Birthdate: </span>
                        <span className="birthDate-val">{birthDate}</span>
                    </div>

                    <div className="about">
                        <span className="desc">
                          {about}
                        </span>
                    </div>
                </div>
                <div className="details">
                    <div className="section">
                        <div className="section__title">Experience</div>
                        <div className="section__list">
                        {
                            expireince.map((cv,index)=>{
                            return <div className="section__list-item" key={index}>
                                <div className="left">
                                    <div >Company name: {cv.company_name}</div>
                                    <div>Job : {cv.job}</div>
                                    <div>Location : {cv.location}</div>
                                    <div >description : {cv.description}</div>
                                    <div >isCurrent : {cv.isCurrent?"yes":"no"}</div>
                                    <div >from to : {`${cv.from} to ${cv.to}`}</div>
                                </div>
                            </div>
                            })
                        }
                        </div>
                    </div>
                    <div className="section">
                        <div className="section__title">Education</div>
                        <div className="section__list">
                        {
                            education.map((cv,index)=>{
                            return <div className="section__list-item" key={index}>
                                <div className="left">
                                    <div >Name: {cv.name}</div>
                                    <div>Location : {cv.location}</div>
                                    <div >about : {cv.about}</div>
                                    <div >From to : {`${cv.from} to ${cv.to}`}</div>
                                </div>
                            </div>
                            })
                        }

                        </div>

                    </div>
                    <div className="section">
                        <div className="section__title">Projects</div>
                        <div className="section__list">
                        {
                            project.map((cv,index)=>{
                            return <div className="section__list-item" key={index}>
                                <div className="left">
                                    <div >Name: {cv.name}</div>
                                    <div>Description : {cv.description}</div>
                                    <div >Role : {cv.role}</div>
                                    
                                </div>
                            </div>
                            })
                        }
                        </div>
                    </div>
                    <div className="section">
                        <div className="section__title">Skills</div>
                        <div className="skills">
                        {
                            skils.map((cv,index)=>{
                            return  <div className="skills__item" key={index}>
                                <div className="left"><div className="name">
                                    {cv}
                                </div></div>
                            </div>
                            })
                        }
                            

                        </div>
                    

                    </div>
                    <div className="section">
                        <div className="section__title">languges</div>
                        <div className="skills">
                        {
                            languges.map((cv,index)=>{
                            return  <div className="skills__item" key={index}>
                                <div className="left"><div className="name">
                                    {cv}
                                </div></div>
                            </div>
                            })
                        }
                            

                        </div>
                    

                    </div>
                </div>
            </div>
        </div>
    )
}
