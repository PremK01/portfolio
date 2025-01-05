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
      <div className="coursework-section" style={{ textAlign: "center" }}>
        <h2 className="coursework-heading">Courses Completed</h2>
        <ul className="coursework-list" style={{ listStyle: "none", padding: 0, margin: "0 auto", display: "inline-block", textAlign: "left", maxWidth: "800px" }}>
          <li style={{ marginBottom: "2rem" }}>
            <p><strong>IBM Full Stack Software Developer</strong></p>
            <p className="course-description" style={{ marginTop: "1rem", lineHeight: "1.6", textAlign: "justify" }}>
              In this course, I built a strong foundation in both front-end and back-end development.
              I learned to use HTML, CSS, and JavaScript to create dynamic and responsive web pages.
              On the back-end, I explored technologies like Python and Django, which allowed me
              to build server-side applications and connect them to databases.
              By integrating both front-end and back-end skills, I developed fully functional
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
          <li style={{ marginBottom: "2rem" }}>
            <p><strong>IBM Data Science</strong></p>
            <p className="course-description" style={{ marginTop: "1rem", lineHeight: "1.6", textAlign: "justify" }}>
              Throughout the IBM Data Science course, I gained comprehensive knowledge in data analysis
              and machine learning. I learned to use Python for data analysis with powerful libraries like
              Pandas and Numpy. The course covered essential topics in data wrangling, exploratory data
              analysis, and statistical analysis. I also learned how to visualize data using tools like
              Matplotlib and Seaborn, and got hands-on experience with machine learning algorithms such as
              classification and regression. This course equipped me with the skills to tackle data-driven
              problems and apply machine learning techniques to real-world datasets.
            </p>
            <Button 
              href="https://coursera.org/share/3d2457caddb258119966436f1a79a803" 
              target="_blank" 
              className="view-button"
            >
              View
            </Button>
          </li>
          <li style={{ marginBottom: "2rem" }}>
            <p><strong>Data Structures and Algorithms</strong></p>
            <p className="course-description" style={{ marginTop: "1rem", lineHeight: "1.6", textAlign: "justify" }}>
              The Data Structures and Algorithms course helped me develop a solid understanding of key data
              structures such as arrays, linked lists, stacks, queues, and graphs. I learned how to efficiently
              store and manipulate data using these structures and explored the importance of algorithms in
              optimizing problem-solving. Topics such as sorting, searching, and dynamic programming were
              covered in depth, and I gained practical skills in implementing algorithms that solve real-world
              problems. This course also prepared me for coding interviews by enhancing my ability to think
              algorithmically and write efficient code.
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
