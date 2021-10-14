import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import db from '../firebase/config'

const AboutInfo = () => {
	const [portfolios, setPortfolios] = useState([])

	useEffect(() => {
		db.collection('portfolio').onSnapshot(snapshot =>
			setPortfolios(snapshot.docs.map(doc => doc.data()))
		)
	}, [])

	return (
		<div className='aboutInfo'>
			{portfolios.map(portfolio => (
				<>
					<div className='side2'>
						<img src={portfolio.image} alt='myImg' />
					</div>
					<div className='side1'>
						<h1>{portfolio.title}</h1>
						<p>{portfolio.description}</p>
						<div className='buttons'>
							<Link className='linkBtn' to='/'>
								About me
							</Link>
							<Link className='linkBtn' to='/'>
								Portfolio
							</Link>
						</div>
						<div className='socialNet'>
							<a href=''></a>
							<a href=''></a>
							<a href=''></a>
							<a href=''></a>
						</div>
					</div>
				</>
			))}
		</div>
	)
}

export default AboutInfo
