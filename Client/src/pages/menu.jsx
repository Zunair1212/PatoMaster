import React from 'react'
import Navbar from '../components/allnavbar';
import Menucrd1 from './../components/menucard1';
import Menucrd2 from './../components/menucard2';
import Menucrd3 from './../components/menucard3';
import Menucrd4 from './../components/menucard4';

const Menu = () => {
  return (
    <>
    <Navbar/>
    <div className="menu">
      <div className="menusec">
        <h1>MENU</h1>
      </div>
    </div>
    <div className="mainmenu">
      <div className="mainmenu1">
        <h1>STARTERS</h1>
        <h6>Pine nut sbrisalona . . . . . . . . . . . . . .  $29.79</h6>
        <p>Sed fermentum eros vitae eros</p> <br />
        <h6>Aenean eu . . . . . . . . . . . . . .   $19.35</h6>
        <p>Feugiat maximus neque pharetra</p> <br />
        <h6>Sed feugiat . . . . . . . . . . . . . .   $12.19 </h6>
        <p>Proin lacinia nisl ut ultricies posuere nulla</p> <br />
        <h6>Consectetur . . . . . . . . . . . . . .   $21.89</h6>
        <p>Etiam cursus facilisis tortor</p> <br /> <br />
        <h1>Drinks</h1>
        <h6>Vivamus pretium. . . . . . . . . . . . . .   $29.79</h6>
        <p>Sed fermentum eros vitae eros</p><br />
        <h6>Duis pharetra ligula . . . . . . . . . . . . . .   $19.35</h6>
        <p>Feugiat maximus neque pharetra</p><br />
        <h6>In eu dolor . . . . . . . . . . . . . .   $53.34</h6>
        <p>Proin lacinia nisl ut ultricies posuere nulla</p><br />
        <h6>Feugiat maximus . . . . . . . . . . . . . .   $62.45 </h6>
        <p>Sed fermentum eros vitae eros</p>
      </div>
      <div className="mainmenu2">
      <h1>Main</h1>
        <h6> Duis sed aliquet . . . . . . . . . . . . . .   $31.18</h6>
        <p>Proin lacinia nisl ut ultricies posuere nulla</p> <br />
        <h6>Suspendisse . . . . . . . . . . . . . .   $70.25</h6>
        <p>Feugiat maximus neque pharetra</p> <br />
        <h6>Scelerisque sed . . . . . . . . . . . . . .   $36.19</h6>
        <p>Etiam cursus facilisis tortor</p> <br />
        <h6>Mollis nulla . . . . . . . . . . . . . .   $19.50</h6>
        <p>Proin lacinia nisl ut ultricies posuere nulla</p><br />
        <h6>Convallis augue  . . . . . . . . . . . . . .  $29.15</h6>
        <p>Sed fermentum eros vitae eros</p><br />
        <h6>Maecenas tristique . . . . . . . . . . . . . .   $29.79</h6>
        <p>Feugiat maximus neque pharetra</p><br />
        <h6>Duis tincidunt . . . . . . . . . . . . . .   $19.35</h6>
        <p>Proin lacinia nisl ut ultricies posuere nulla</p> <br /> <br />
        <h1>Dessert</h1>
        <h6>tempus aliquet. . . . . . . . . . . . . .   $9.79</h6>
        <p>Proin lacinia nisl ut ultricies posuere nulla</p><br />
        <h6>scelerisque . . . . . . . . . . . . . .   $19.35</h6>
        <p>Sed fermentum eros vitae eros</p><br />
        <h6>Cras maximus . . . . . . . . . . . . . .   $5.79</h6>
        <p>Duis pharetra ligula at urna dignissim</p>
      </div>
    </div>
    <div className="lunch">
      <h1>LUNCH</h1>
    </div>
    <div className="menucard">
      <div className="menucard1">
        <Menucrd1/>
      </div>
      <div className="menucard2">
        <Menucrd2/>
      </div>
    </div>
    <div className="dinner">
      <h1>DINNER</h1>
    </div>
    <div className="menuucard">
      <div className="menucard3">
        <Menucrd3/>
      </div>
      <div className="menucard4">
        <Menucrd4/>
      </div>
    </div>
    </>
  )
}
export default Menu;
