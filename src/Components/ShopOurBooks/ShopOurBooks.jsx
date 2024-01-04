import React, { useState } from 'react';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import filter from '../Assets/filter.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThLarge } from '@fortawesome/free-solid-svg-icons';
import menu_icon from '../Assets/menu_icon.svg'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import Helium_icon from '../Assets/Helium_icon.jpg'
import tiffany_icon from '../Assets/tiffany_icon.jpg'
import felix_icon from '../Assets/felix_icon.jpg'
import lobizona_icon from '../Assets/lobi_zona.jpg'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import shadow from '../Assets/shadow_icon.svg'


const ProductCard = ({ name, description, imageUrl, price }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isAddedToCart, setIsAddedToCart] = useState(false);

  const handleAddToCart = () => {
    setIsAddedToCart(true);
  };

  return (
    <div
      style={{
        width: '250px',
        height: '400px',
        marginBottom: '20px',
        borderRadius: '10px',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        boxShadow: isHovered ? '0 4px 8px rgba(0, 0, 0, 0.1)' : 'none',
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    > 
      <img src={imageUrl} alt={name} style={{ width: '100%', height: '250px', objectFit: 'cover', borderRadius: '10px' }} />
      <h4 style={{ textAlign: 'center', margin: '10px 0' }}>Helium</h4>
      <p style={{ textAlign: 'center', margin: '0 10px' }}>Candy Carson</p>
      <p style={{ color: '#CC2448', fontSize: '18px', textAlign: 'center', marginTop: '10px' }}>{`$6.00`}</p>

      {isHovered && !isAddedToCart && (
        <button
          onClick={handleAddToCart}
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            background: '#CC2448',
            color: 'white',
            borderRadius: '25px',
            padding: '10px',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            border: '2px solid #CC2448',
          }}
        >
          <ShoppingCartIcon style={{ marginRight: '5px' }} /> Add to Cart
        </button>
      )}
      {isAddedToCart && (
        <p style={{ position: 'absolute', bottom: '10px', left: '50%', transform: 'translateX(-50%)' }}>
          Added to Cart!
        </p>
      )}
    </div>
  );
};

  const ShopOurBooks = () => {
  const [showCategories, setShowCategories] = useState(false);
  const [selectedCategories, setSelectedCategories] = useState([]);

  const handleCategoriesClick = () => {
    setShowCategories(!showCategories);
  };
 
  
  const handleCategoryCheckboxChange = (category) => {
    const updatedCategories = [...selectedCategories];

    if (updatedCategories.includes(category)) {

      updatedCategories.splice(updatedCategories.indexOf(category), 1);
    } else {

      updatedCategories.push(category);
    }

    setSelectedCategories(updatedCategories);
  };


  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const containerStyle = {
    backgroundImage: 'url("https://asalapublishers.com/uploads/static_seo_pages/1600x360/asala_about4.jpg")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    padding: '185px',
    borderRadius: '10px',
    color: 'white',
  };

  const titleStyle = {
    fontSize: '30px',
    fontWeight: 'bold',
    marginBottom: '10px',
    textAlign: 'center',
    marginLeft: '70px',
  };

  const searchFieldContainerStyle = {
    display: 'flex',
    justifyContent: 'flex-end',
    marginTop: '20px',
    marginRight:'40px'
  };

  const categoryStyle = {
    display: 'flex',
    alignItems: 'center',
    marginLeft: '40px',
    marginTop: '10px',
    position:'relative',
  };

  const searchFieldStyle = {
    backgroundColor: '#E01F20',
    color: '#E9DEF3',
    padding: '10px',
    borderRadius: '30px',
    width: '200px',
    marginLeft: '10px', 
    border: 'none',
    outline: 'none',
  };

  const dropdownStyle = {
    position: 'absolute',
    top: '30px',
    left: '485px',
    background: 'white',
    padding: '10px',
    borderRadius: '5px',
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
    display: 'flex',
    flexDirection: 'column',
  };

	const productContainerStyle = {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
		gap: '5px', 
	};
	
	const upperProductContainerStyle = {
		display: 'grid',
		gridTemplateColumns: 'repeat(4, 1fr)',
		gap: '10px', 
		marginBottom: '20px',
		marginLeft: '35px',
		marginTop:'30px',
	};
	
	const lowerProductContainerStyle = {
		display: 'grid',
		gridTemplateColumns: 'repeat(4, 1fr)',
		gap: '10px', 
		marginBottom: '20px',
		marginLeft: '35px',
		marginTop:'30px',
	};
	const productImages = [
    Helium_icon,
  	tiffany_icon,
  	felix_icon,
  	lobizona_icon,
];

const paginationContainerStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  marginTop: '20px',
  marginLeft:'240px',
};

const paginationCircleStyle = {
  width: '30px',
  height: '30px',
  borderRadius: '50%',
  border: '2px solid white',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  margin: '0 5px',
  cursor: 'pointer',
};

const activePaginationStyle = {
  backgroundColor: '#CC2448',
  color: '#fff',
};

const paginationButtonStyle = {
  margin: '0 -1px',
  padding: '15px 15px',
  cursor: 'pointer',
  borderRadius: '25px',
  backgroundColor: '#E8E8E8',
  border: 'none',
};

const footerImageStyle = {
  position: 'relative',
  bottom: '-62px',
  left: '-19%',
  transform: 'translateX(-50%)',
  width: '394%',
  marginTop: '20px',
};


  return (
    <div>
      <div style={containerStyle} className="contact-us-container">
        <h2 style={titleStyle} className="title">
          Shop Our Books
        </h2>
        <div style={{ marginLeft: '730px', fontSize: '15px' }}>Home . Shop our Books</div>
      </div>
      <hr />

      <div style={searchFieldContainerStyle}>
        <SearchOutlinedIcon style={{ color: 'white', marginRight: '-215px', zIndex: '1', marginTop: '4px' }} />
        <input type="text" placeholder="Search for books" style={searchFieldStyle} />
      </div>
      <br />

      <div style={categoryStyle} onClick={handleCategoriesClick}>
        <img src={filter} alt="" style={{ marginLeft: '10px', marginRight: '10px', width: '20px', height: '20px' }} />
        <span style={{ color: 'black', marginRight: '10px' }}>Filter</span>
        <FontAwesomeIcon icon={faThLarge} style={{ marginRight: '10px' }} />
        <img src={menu_icon} alt="Menu" style={{ marginLeft: '10px', marginRight: '10px' }} />
        <div style={{ textAlign: 'center', margin: '0 auto' }}>

    <span style={{ color: 'black', marginRight: '10px' }}>Category</span>
    <FontAwesomeIcon icon={faAngleDown} style={{ marginRight: '10px' }} />

    <span style={{ color: 'black', marginRight: '10px' }}>Author</span>
    <FontAwesomeIcon icon={faAngleDown}  style={{ marginRight: '10px' }} />

    <span style={{ color: 'black', marginRight: '10px' }}>Illustrator</span>
    <FontAwesomeIcon icon={faAngleDown} style={{ marginRight: '10px' }} />

    <span style={{ color: 'black', marginRight: '10px' }}>Stages</span>
    <FontAwesomeIcon icon={faAngleDown}  style={{ marginRight: '10px' }} />

    <span style={{ color: 'black', marginRight: '10px' }}>Subject</span>
    <FontAwesomeIcon icon={faAngleDown}  style={{ marginRight: '10px' }} />

    <span style={{ color: 'black', marginRight: '10px' }}>Year</span>
    <FontAwesomeIcon icon={faAngleDown}  style={{ marginRight: '10px' }} />

    <span style={{ color: 'black', marginRight: '10px' }}>Arabi21</span>
    <FontAwesomeIcon icon={faAngleDown}  style={{ marginRight: '10px' }} />

    <span style={{ color: 'black', marginRight: '10px' }}>Serie Name</span>
    <FontAwesomeIcon icon={faAngleDown}  style={{ marginRight: '10px' }} />

    <span>|</span>

    <span style={{ marginLeft: '10px', color: 'black', opacity:'0.5'}}>Show 8 &nbsp;</span>


    {showCategories && (
   <div style={{ ...dropdownStyle, textAlign: 'left', padding: '0 10px' }}>
   <p style={{ fontWeight: 'bold', opacity: 0.3, fontSize: '13px', marginBottom: '5px' }}>Choose your favorite category:</p>
   <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '10px', textAlign: 'center' }}>
     <div>
        <label>
          <input
            type="checkbox"
            checked={selectedCategories.includes('Category 1')}
            onChange={() => handleCategoryCheckboxChange('Category 1')}
          />{' '}
          Category 1
        </label>
      </div>
      <div>
        <label>
          <input
            type="checkbox"
            checked={selectedCategories.includes('Category 2')}
            onChange={() => handleCategoryCheckboxChange('Category 2')}
          />{' '}
          Category 2
        </label>
      </div>
      <div>
        <label>
          <input
            type="checkbox"
            checked={selectedCategories.includes('Category 3')}
            onChange={() => handleCategoryCheckboxChange('Category 3')}
          />{' '}
          Category 3
        </label>
      </div>
      <div>
        <label>
          <input
            type="checkbox"
            checked={selectedCategories.includes('Category 4')}
            onChange={() => handleCategoryCheckboxChange('Category 4')}
          />{' '}
          Category 4
        </label>
      </div>
      <div>
        <label>
          <input
            type="checkbox"
            checked={selectedCategories.includes('Category 5')}
            onChange={() => handleCategoryCheckboxChange('Category 5')}
          />{' '}
          Category 5
        </label>
      </div>
      <div>
        <label>
          <input
            type="checkbox"
            checked={selectedCategories.includes('Category 6')}
            onChange={() => handleCategoryCheckboxChange('Category 6')}
          />{' '}
          Category 6
        </label>
      </div>
      <div>
        <label>
          <input
            type="checkbox"
            checked={selectedCategories.includes('Category 7')}
            onChange={() => handleCategoryCheckboxChange('Category 7')}
          />{' '}
          Category 7
        </label>
      </div>
      <div>
        <label>
          <input
            type="checkbox"
            checked={selectedCategories.includes('Category 8')}
            onChange={() => handleCategoryCheckboxChange('Category 8')}
          />{' '}
          Category 8
        </label>
      </div>
    </div>
  </div>
)}
     </div>
    </div>


<div style={{ ...productContainerStyle, ...upperProductContainerStyle }}>
        {[1, 2, 3, 4].map((product, index) => (
          <ProductCard
            key={product}
            name={`Product ${product}`}
            description={`Description for Product ${product}`}
            price={6.00 * product}
            imageUrl={productImages[index]}
          />
        ))}
      </div>

      <div style={{ ...productContainerStyle, ...lowerProductContainerStyle }}>
        {[5, 6, 7, 8].map((product, index) => (
          <ProductCard
            key={product}
            name={`Product ${product}`}
            description={`Description for Product ${product}`}
            price={6.00 * product}
            imageUrl={productImages[index]}
          />
        ))}

        <br/><br/> <br/><br/>

        <div style={paginationContainerStyle}>
  {[1, 2, 3].map((page) => (
    <div
      key={page}
      style={{
        ...paginationCircleStyle,
        ...(currentPage === page ? activePaginationStyle : {}),
        ...(page > 1 ? { borderRadius: '0' } : {}),
      }}
      onClick={() => handlePageChange(page)}
    >
      {page}
    </div>
  ))}
  <button
    onClick={() => handlePageChange(currentPage + 1)}
    disabled={currentPage === 3}
    style={paginationButtonStyle}
  >
    Next
  </button>
</div>

<img
      src={shadow}
      alt="Footer Image"
      style={footerImageStyle}
    />
  </div>
    </div>
  );
};

export default ShopOurBooks;
