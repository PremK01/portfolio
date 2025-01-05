import React, { useEffect } from "react";
import { Container, Button } from "react-bootstrap";

function Education() {
  useEffect(() => {
    document.title = "Education"; 
  }, []);

  return (
    <Container fluid className="education-section">
      <h1 className="education-heading">Education Timeline</h1>

      <div className="timeline">
        <div className="timeline-item">
          <div className="timeline-year">2023</div>
          <div className="timeline-details">
            <p><strong>B.E in Computer Science at SRM Valliammai Engineering College</strong></p>
            <p>Location: Chennai</p>
            <p><span className="highlight">CGPA: 8.24/10</span></p>
          </div>
        </div>

        <div className="timeline-item">
          <div className="timeline-year">2019</div>
          <div className="timeline-details">
            <p><strong>HSC, Computer Science at SBOA Matric & Higher Sec School</strong></p>
            <p>Location: Chennai</p>
            <p><span className="highlight">Percentage: 73.8%</span></p>
          </div>
        </div>

        <div className="timeline-item">
          <div className="timeline-year">2017</div>
          <div className="timeline-details">
            <p><strong>SSLC at SBOA School & Junior College</strong></p>
            <p>Location: Chennai</p>
            <p><span className="highlight">CGPA: 9.4/10</span></p>
          </div>
        </div>
      </div>

      {/* Coursework Section */}
      <div className="coursework-section">
        <h2 className="coursework-heading">Courses Completed</h2>
        <ul className="coursework-list">
          <li>
            <p><strong>IBM Full Stack Software Developer</strong></p>
            <p className="course-description">
              In this course, I built a strong foundation in both front-end and back-end development.<br />
              I learned to use HTML, CSS, and JavaScript to create dynamic and responsive web pages.<br />
              On the back-end, I explored technologies like Python and Django, which allowed me<br />
              to build server-side applications and connect them to databases.<br />
              By integrating both front-end and back-end skills, I developed fully functional<br />
              web applications, gaining hands-on experience in full-stack development.
            </p>
            <Button 
              href="https://coursera.org/share/c95d464168b84eb946ee57a3fd713113" 
              target="_blank" 
              className="view-button"
            >
              View
            </Button>
          </li>
          <li>
            <p><strong>IBM Data Science</strong></p>
            <p className="course-description">
              Throughout the IBM Data Science course, I gained comprehensive knowledge<br />
              in data analysis and machine learning. I learned to use Python for data analysis<br />
              with powerful libraries like Pandas and Numpy. The course covered essential topics<br />
              in data wrangling, exploratory data analysis, and statistical analysis.<br />
              I also learned how to visualize data using tools like Matplotlib and Seaborn,<br />
              and got hands-on experience with machine learning algorithms such as<br />
              classification and regression. This course equipped me with the skills<br />
              to tackle data-driven problems and apply machine learning techniques<br />
              to real-world datasets.
            </p>
            <Button 
              href="https://coursera.org/share/3d2457caddb258119966436f1a79a803" 
              target="_blank" 
              className="view-button"
            >
              View
            </Button>
          </li>
          <li>
            <p><strong>Data Structures and Algorithms</strong></p>
            <p className="course-description">
              The Data Structures and Algorithms course helped me develop a solid understanding<br />
              of key data structures such as arrays, linked lists, stacks, queues, and graphs.<br />
              I learned how to efficiently store and manipulate data using these structures<br />
              and explored the importance of algorithms in optimizing problem-solving.<br />
              Topics such as sorting, searching, and dynamic programming were covered in depth,<br />
              and I gained practical skills in implementing algorithms that solve real-world problems.<br />
              This course also prepared me for coding interviews by enhancing my ability<br />
              to think algorithmically and write efficient code.
            </p>
            <Button 
              href="https://coursera.org/share/c182b0331fc76e69ede31032a7875033" 
              target="_blank" 
              className="view-button"
            >
              View
            </Button>
          </li>
        </ul>
      </div>
    </Container>
  );
}

export default Education;
