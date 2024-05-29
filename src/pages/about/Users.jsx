import React from 'react'
import { userData } from '../../data/usersData'

function Users() {
  return (
    <section className="users">
        <div className="container">
            <div className="users-content">
                <div className="users-cards">
                    {
                        userData.map((item, key) => (
                            <div className="users-card" key={key}>
                                <div className="users-image">
                                    <img src={item.img} className='users-img' alt="" />
                                </div>
                                <div className="users-items">
                                    <h1 className='users-name'>{item.name}</h1>
                                    <h2 className='users-job'>{item.job}</h2>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    </section>
  )
}

export default Users