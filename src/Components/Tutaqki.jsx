import React from 'react';

function Tutaqki() {
  const sor = ['HTML', 'CSS', 'JavaScript'];
  return (
    <form style={{ fontSize: '40px' }}>
      {sor.map(sorres => {
        return (
          <div>
            <input type="radio" id={sorres} value={sorres} />
            <label htmlFor="">{sorres}</label>
          </div>
        );
      })}

      <div>
        <input type="radio" id="html" name="fav_language" value="HTML" />
        <label>HTML</label>
      </div>

      <div>
        <input type="radio" id="css" name="fav_language" value="CSS" />
        <label>CSS</label>
      </div>

      <div>
        <input
          type="radio"
          id="javascript"
          name="fav_language"
          value="JavaScript"
        />
        <label>JavaScript</label>
      </div>
    </form>
  );
}

export default Tutaqki;
