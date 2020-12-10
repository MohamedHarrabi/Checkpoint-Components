import React from 'react';

import {Card} from 'react-bootstrap';

import imgpro from '../img/imgprofile.jpg';

const Profilephoto = () =>{ return(<Card>
<Card.Img variant="top"  className="ClassA" src={imgpro}/>
</Card>);

}
export default Profilephoto;