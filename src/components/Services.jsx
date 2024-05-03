import './services.css';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';

import busisnesIcon from '../assets/icons/business.svg';
import { Button, Container } from 'react-bootstrap';

const Services = () => {
	return (
		<Container>
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
				<Row className='d-flex justify-content-between '>
					<Col className='d-flex my-2  '>
						<Card style={{ width: '20rem' }} className='cards px-1 '>
							<div className='iconContainer'>
								<img src={busisnesIcon} />
							</div>
							<Card.Body className='cardBody'>
								<Card.Title className='my-3 text-center'>
									Business & Product Concept
								</Card.Title>
								<Card.Text className='text-center text-danger fs-6'>
									{
										"Analyse business and product concepts at Start-up Workshops or Ongoing Projects' Audits and prepare a viable and sensible product roadmap for achieving a perfect market fit."
									}
								</Card.Text>
								<div className='d-flex justify-content-center'>
									<Button variant='outline-danger rounded-0 text-center'>
										{' '}
										Learn more{' '}
									</Button>
								</div>
							</Card.Body>
						</Card>
					</Col>
					<Col className='d-flex my-2 justify-content-center'>
						{' '}
						<Card style={{ width: '20rem' }} className='cards px-1'>
							<div className='iconContainer'>
								<img src={busisnesIcon} />
							</div>
							<Card.Body className='cardBody'>
								<Card.Title className='my-3 text-center'>
									Web & Mobile Development
								</Card.Title>
								<Card.Text className='text-center text-danger fs-6'>
									Plan, develop and test high-quality web-applications using
									AngularJs, NodeJs, JavaScript, Typescript, HTML5 and SASS/CSS3
									frameworks and native mobile languages.
								</Card.Text>
								<div className='d-flex justify-content-center'>
									<Button variant='outline-danger rounded-0 text-center'>
										{' '}
										Learn more{' '}
									</Button>
								</div>
							</Card.Body>
						</Card>
					</Col>
					<Col className='d-flex my-2 justify-content-end'>
						{' '}
						<Card style={{ width: '20rem' }} className='cards px-1'>
							<div className='iconContainer'>
								<img src={busisnesIcon} />
							</div>
							<Card.Body className='cardBody'>
								<Card.Title className='my-3 text-center'>
									UX & UI Design
								</Card.Title>
								<Card.Text className='text-center text-danger fs-6'>
									Sketch information architecture and simple mock-ups, convert
									them into clickable prototypes and finish with usable
									interface designs to deliver a good and reliable user
									experience.
								</Card.Text>
								<div className='d-flex justify-content-center'>
									<Button variant='outline-danger rounded-0 text-center'>
										{' '}
										Learn more{' '}
									</Button>
								</div>
							</Card.Body>
						</Card>
					</Col>
				</Row>
			</div>
		</Container>
	);
};
export default Services;
