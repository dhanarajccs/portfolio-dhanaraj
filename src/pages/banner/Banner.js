const Banner = () => {
  return (
    <div>
      <div className="bg-base-200 p-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-5 gap-3">
          <div>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsVUx9QvlEi_jfvD3q0AAY6m1X2KE0XS997w&usqp=CAU"
              className="max-w-sm rounded-lg shadow-2xl"
              alt=""
            />
          </div>
          <div className="w-[300px] lg:w-full flex flex-col justify-center items-enter">
            <h1 className="lg:text-5xl text-secondary font-bold">Dhanaraj Narasimmareddy!</h1>
            <p className="py-6 lg:text-lg text-sm text-center">
                Hi, I'm Dhanaraj, a skilled and enthusiastic React web developer with 5 years of experience. I am passionate about creating intuitive, user-friendly, and visually appealing web applications that meet the needs of both businesses and users.
            <br /><br />    
                I have a strong foundation in React, HTML, CSS, JavaScript, and other relevant technologies. I take pride in writing clean, maintainable, and well-documented code, and I am always looking for ways to improve my skills and stay up-to-date with the latest trends in web development.
            </p>            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
