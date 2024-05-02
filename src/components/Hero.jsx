import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import { Button } from 'react-bootstrap';
import { IoIosArrowRoundForward } from 'react-icons/io';

const Hero = () => {
	return (
		<div className='hero'>
			<Container className='custom-container'>
				<Col sm={6} className=''>
					<h1 className='text-warning' size='xl'>
						We build beautiful and reliable web solutions
					</h1>
					<p className='text-danger'>
						We strongly believe that communication, trust and transparency are
						the essential elements of successful business relationship.
						<br />
						Ready for the journey?
					</p>
					<div className='buttons'>
						<Button
							className=''
							variant='outline-secondary'
							style={{ paddingInline: '30px', borderRadius: 3 }}>
							Learn more{'       '}
						</Button>
						<Button
							className='mx-4'
							variant='primary'
							style={{ paddingInline: '30px', borderRadius: 3 }}>
							Our Projects{'     '}
							<IoIosArrowRoundForward />
						</Button>
					</div>
				</Col>
			</Container>
		</div>
	);
};
export default Hero;
