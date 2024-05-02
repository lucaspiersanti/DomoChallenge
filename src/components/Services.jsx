import './services.css';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';

import busisnesIcon from '../assets/icons/business.svg';

const Services = () => {
	return (
		<div className='services'>
			<Row>
				<Col></Col>
				<Col lg={12}>
					<h1 className='texto'>Our Services</h1>
				</Col>
				<Col></Col>
			</Row>
			<Row>
				{' '}
				<Col></Col>
				<Col lg={6}>
					<p className='text-danger texto'>
						We feel very strong about our skills when it comes to planning,
						designing and coding applications. here is what we love to do!
					</p>
				</Col>
				<Col></Col>
			</Row>
			<div className='container text-center justify-content-md-center'>
				<Row className='justify-content-md-center'>
					<Col className='justify-content-md-center'>
						<Card style={{ width: '18rem' }} className='cards'>
							<div className='iconContainer'>
								<img src={busisnesIcon} />
							</div>
							<Card.Body className='cardBody'>
								<Card.Title>Business & Product Concept</Card.Title>
								<Card.Text>
									Some quick example text to build on the card title and make up
									the bulk of the cards content.
								</Card.Text>
							</Card.Body>
						</Card>
					</Col>
					<Col>
						{' '}
						<Card style={{ width: '18rem' }} className='cards'>
							<div className='iconContainer'>
								<img src={busisnesIcon} />
							</div>
							<Card.Body className='cardBody'>
								<Card.Title>Business & Product Concept</Card.Title>
								<Card.Text>
									Some quick example text to build on the card title and make up
									the bulk of the cards content.
								</Card.Text>
							</Card.Body>
						</Card>
					</Col>
					<Col>
						{' '}
						<Card style={{ width: '18rem' }} className='cards'>
							<div className='iconContainer'>
								<img src={busisnesIcon} />
							</div>
							<Card.Body className='cardBody'>
								<Card.Title>Business & Product Concept</Card.Title>
								<Card.Text>
									Some quick example text to build on the card title and make up
									the bulk of the cards content.
								</Card.Text>
							</Card.Body>
						</Card>
					</Col>
				</Row>
			</div>
		</div>
	);
};
export default Services;
