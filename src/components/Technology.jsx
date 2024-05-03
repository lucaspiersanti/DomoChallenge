import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import {
	FaPython,
	FaHtml5,
	FaCss3Alt,
	FaSass,
	FaNodeJs,
	FaAngular,
} from 'react-icons/fa';

import './technology.css';

const Technology = () => {
	return (
		<>
			<div className='technology'>
				<div className='container'>
					<Row className=''>
						<Col className='text-warning mx-20 '>
							{' '}
							<h2 className='fs-1 my-2'>We use cutting edge technology</h2>
							<p className='fs-5 my-4' style={{ color: '#82A6FF' }}>
								Nulla porro quis nihil. Nam ipsa id saepe atque, cupiditate
								voluptate porro natus accusamus deserunt minima, illo numquam
								laudantium iusto tenetur laboriosam voluptatum omnis commodi
								provident assumenda rerum cum maiores. Eligendi hic cumque ad.
								Ducimus, fugit quis? Laborum adipisci dolor rem quidem
								voluptatum, odio nobis quia sequi esse ipsam maiores iure iste
								tempora magnam perferendis doloribus facere provident at quod,
								magni animi rerum excepturi!
							</p>
						</Col>
						<Col className='icons'>
							<div className='col-6'>
								<FaPython />
								<FaHtml5 />
							</div>
							<div className='col-6'>
								<FaCss3Alt />
								<FaSass />
							</div>
							<div className='col-6'>
								<FaNodeJs />
								<FaAngular />
							</div>
						</Col>
					</Row>
				</div>
			</div>
		</>
	);
};
export default Technology;
