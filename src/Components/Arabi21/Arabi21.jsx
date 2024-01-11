import React from 'react';
import creative_icon from '../Assets/creative_icon.png'
import creative_right from '../Assets/creative_right.png'
import shadow from '../Assets/shadow_icon.svg'

const imageContainerStyle = {
  position: 'relative',
  backgroundImage: 'url("https://asalapublishers.com/uploads/static_seo_pages/1600x360/asala_about4.jpg")',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  padding: '185px',
  borderRadius: '10px',
  color: 'white',
  marginBottom: '20px', 
};

const titleStyle = {
  fontSize: '30px',
  fontWeight: 'bold',
  marginBottom: '10px',
  textAlign: 'center',
};

const textUnderImageStyle = {
  fontSize: '35px',
  textAlign: 'center',
  marginTop: '30px',
};

const secondImageContainerStyle = {
  borderRadius: '20px',
  overflow: 'hidden', 
  marginTop: '30px',

};

const roundedBoxStyle = {
  background: 'white',
  borderRadius: '15px',
  padding: '20px',
  textAlign: 'center',
  marginTop: '20px',
  borderColor: '#C4BFBF', 
  borderWidth: '2px', 
  borderStyle: 'solid', 
  fontSize: '16px',
};

const additionalDivStyle = {
  background: '#F4F8FF',
  borderRadius: '20px',
  padding: '20px',
  textAlign: 'center',
  borderColor: '#C4BFBF', 
  borderWidth: '2px', 
  borderStyle: 'solid', 
  fontSize: '16px',
};

const leftAlignedTextStyle = {
  textAlign: 'left',
};

const purpleCircleStyle = {
  display: 'inline-block',
  width: '30px',
  height: '30px',
  backgroundColor: '#B31942',
  borderRadius: '25px',
  color: 'white',
  textAlign: 'center',
  lineHeight: '30px',
  marginRight: '11px',
  fontSize:'25px',
};

const smallText = {
  fontSize: '17px', 
};

const additionalsDivStyle = {
  background: '#F4F9FF',
  borderRadius: '20px',
  padding: '5px', 
  textAlign: 'center',
  borderColor: 'white',
  borderWidth: '2px',
  borderStyle: 'solid',
  fontSize: '14px', 
  marginTop: '10px', 
  marginLeft: '20px',
};

const mainActivitiesStyle = {
  background: '#F4F9FF',
  borderRadius: '20px',
  padding: '20px',
  textAlign: 'center',
  borderColor: 'white',
  borderWidth: '2px',
  borderStyle: 'solid',
  fontSize: '16px',
  marginTop: '20px',
};

const mainActivitiesImageStyle = {
  float: 'left',
  marginRight: '-91px',
  marginBottom: '30px',
  borderRadius: '10px',
  height: '200px', 
};

const arabThoughtFoundationImageStyle = {
  float: 'right',
  marginLeft: '20px',
  marginBottom: '30px',
  borderRadius: '10px',
  height: '165px', 
};



const Arabi21 = () => {
  return (
    <div>
      <div style={imageContainerStyle} className="contact-us-container">
        <h2 style={titleStyle} className="title">
          عربي 21
        </h2>
        <div style={{ marginLeft: '720px', fontSize: '15px' }}>Home .  عربي 21
      </div>
      </div>

      <div style={textUnderImageStyle}>
        <p>We Commit To Give You</p>
        <p> The Best Experience</p>
        
          <div style={secondImageContainerStyle}>
        <img
          src="https://asalapublishers.com/uploads/about_us/About_04.jpg" 
          alt="Second Image"
          style={{ width: '100%', height: 'auto', borderRadius: '20px' }}
        />
      </div>

       <div style={roundedBoxStyle}>
        <p>
        <div style={leftAlignedTextStyle}>
          <strong style={{fontSize:'26px',color:'#494949'}}>Arab Thought Foundation</strong>
          </div>
          <br /><br/>
       <p>
          The Arab Thought Foundation is an independent, international civil institution that has no links
          with regimes, or with political, partisan or sectarian affiliations. Since its establishment in the year
          2000 at the initiative of His Royal Highness Prince Khaled Al-Faisal, and with the support of a
          group of intellectuals, financiers and businessmen who believed in the message of
          enlightenment, development and development that it carried out, and the approach of
          responsible freedom that it adopted, the Foundation has been committed to promoting the
          Arabic language and culture, and the call for solidarity The Arab and the pan-Arab identity,
          which embraces the richness of diversity and pluralism, and upholds the values of dialogue and
          openness to the world's languages and cultures.</p>
          <br/>
          <p> Through the poneerin initiatives, programs and projects launcehd by the Foundation, though reports,books,and translations it issues,conferences, forums and symposiums,and awards it awards, the Foundation has sought to spread knowledge,stimulte creativity and innovation,develop structures and mentalities, enpower youth and achieve comprehensive and sustaible development goals.. </p>
          <br/>
          <p>As part of its contribution to intellectual, cultural and educational efforts,the Foundation has adopted the approach of partnership, cooperation, and integration with relevant organizations, institutions, research center and studies.</p>
       </p>
      </div>

      <img
        src={creative_right}
        alt="Arab Thought Foundation Image"
        style={arabThoughtFoundationImageStyle}
      />

     
      <div style={additionalDivStyle}>
      <p>
      <div style={leftAlignedTextStyle}>
          <strong style={{fontSize:'26px',color:'#494949'}}>Arab Project 21</strong>
          </div>
          </p>
          <br /><br/>
          <p> The Arab Though Foundation pais a special attention to the educational sector, its reform workshop, and the proccess of developing it, which was mainly manifested in its "Arabi 21" project</p>
          <br /><br/>
          <p> The vision of the "Arabi 21" project is top repare an Arab who is able to think and communicate in the Arabic language to learn, work and live accoording to what all aspects of life require, and also make him able to preserve his identity. The main objective of the project is to contribute to the modernization of methods of learning and teaching the Arabic langauge</p>
          <br /><br/>
          <p>The project targets students at all levels of education. It also targets, in some aspects, Arab publishing houses, foreign publishing houses that print in the Arabic langauge, authors and illustrators of Arabic childrens' literatue books, educational aand cultural institutios and assosciations conerned with encouraging reading, teachers of education in educational stages, and librarians.
          </p>
      </div>
      <br/><br/>
      <div style={mainActivitiesStyle}>
  <h2>Main activities of the project include:</h2>
  <img
    src={creative_icon}
    alt="Main Activities Image"
    style={mainActivitiesImageStyle}
  />
  <div>
    <hr style={{ marginTop: '20px', width: '37%', marginLeft: 'auto', marginRight: 'auto' }} />
    <ol style={{ listStyle: 'none', padding: 0, margin: 0 }}>
          <li style={{marginLeft:'-75px'}}>
            <div style={purpleCircleStyle}>1</div> <span style={smallText}> Designing an early reading assessment tool in the Arabic langauge "Bakar"</span>
          </li>
          <hr style={{marginTop:'20px', width:'37%', marginLeft:'580px'}}/>
          <li style={{marginLeft:'-330px'}}>
            <div style={purpleCircleStyle}>2</div> <span style={smallText}> The "Short Story With Their Pens" competition</span>
          </li>
          <hr style={{marginTop:'20px' , width:'37%', marginLeft:'580px'}}/>
          <li style={{marginLeft:'-413px'}}>
            <div style={purpleCircleStyle}>3</div><span style={smallText}> Online Directory of Classified Books</span>
          </li>
          <hr style={{marginTop:'20px' , width:'37%', marginLeft:'580px'}}/>
          <li style={{marginLeft:'-565px'}}>
            <div style={purpleCircleStyle}>4</div> <span style={smallText}>My Book Award </span>
          </li>
          <hr style={{marginTop:'20px' , width:'37%', marginLeft:'580px'}}/>
          <li style={{marginLeft:'-515px'}}>
            <div style={purpleCircleStyle}>5</div> <span style={smallText}> Education Conference</span>
          </li>
        </ol>
        <hr style={{marginTop:'20px' , width:'37%', marginLeft:'580px'}}/>
      </div>

      <div style={additionalsDivStyle}>
        <p>
          <div style={leftAlignedTextStyle}>
            <strong style={{ fontSize: '26px', color: '#494949' }}>Objectives</strong>
          </div>
        </p>
        <ul style={{ paddingInlineStart: '20px', textAlign: 'left', marginTop: '20px' }}>
          <li style={{ marginBottom: '10px' }}>
            <span style={smallText}>
            Organizing a number of educational conferences on themes related to promoting the use of the Arabic language. 
            </span>
          </li>
          <li style={{ marginBottom: '10px' }}>
            <span style={smallText}>
            Publishing a number of interactive videos on educational best practices and other topics of interest to educators and academics
            </span>
          </li>
          <li style={{ marginBottom: '10px' }}>
            <span style={smallText}>
            Work on designing an exam based on international standards to test the abilities of the Arab student in the Arabic language.
            </span>
          </li>
          <li style={{ marginBottom: '10px' }}>
            <span style={smallText}>
            Launching a number of initiatives to encourage children and young people to read and write in the Arabic language
            </span>
          </li>
          <li style={{ marginBottom: '10px' }}>
            <span style={smallText}>
            Organizing the "My Book Award" to select the best children's and young adult books in the Arabic language.
            </span>
          </li>
          <li style={{ marginBottom: '10px' }}>
            <span style={smallText}>
            Drafting and adopting appropriate standards related to both the Arabic language curricula and the classification of children's literature books.
            </span>
          </li>
          <li style={{ marginBottom: '10px' }}>
            <span style={smallText}>
            Urging the largest number of Arab and international publishing houses to use the Hanada Taha and Arabi 21 criteria to classify children's literature books that they publish
            </span>
          </li>
          <li style={{ marginBottom: '10px' }}>
            <span style={smallText}>
            Creating a website that includes an electronic guide for children's books classified according to the reading level and internationally approved classification standards, where the user can read book summaries and choose the appropriate ones.
            </span>
          </li>
        </ul>

        <div>
      <div style={{ textAlign: 'left',marginLeft: '3px' }}>
        <img src={shadow} alt="Shadow Image" style={{ width: '1000px', borderRadius: '15px' }} />
        </div>
        </div>
       </div>
      </div>
     </div>
    </div>
  );
};

export default Arabi21;