import './courseDetails.scss';

const CourseDetails = ({course}) => {
    const {educationId, courseName, grade, desc} = course;
    return (
        

    <div className={ educationId.toString() === "1" ? 'courseDetails' : 'cd2'}>
        { educationId.toString() === "1" ? 
        <div className="card-1">
            <div className="courseName">
                <span>{courseName}</span>
            </div>

            <div className="grades">
                <div className="gradeTxt">{grade}</div>
                <div className="gradeBarDiv">
                    <div className="bgBar">
                        <div className="frontBar" style={{width: `${grade}`}}></div>
                    </div>
                </div>
            </div>
        </div> 
        :
        <div className="card-2">
            <div className="courseName">
                <h3>{courseName}</h3>
                <span>{desc}</span>
            </div>
        </div>
        }
    </div>
        

    )
}

export default CourseDetails
