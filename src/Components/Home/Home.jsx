import React, { Component } from 'react'

export default class Home extends Component {
  render() {
    return (
      <div className="container mt-3">
        <div className="card-deck">
          <div className="card">
            <img src="https://i.pinimg.com/originals/3e/a4/15/3ea415a1e6fbe45492dbfe4a2b4a88f0.jpg" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            </div>
            <div className="card-footer">
              <button className="btn btn-primary">Add</button>
              <button className="btn btn-danger ml-2">Delete</button>
            </div>
          </div>
          <div className="card">
            <img src="https://3.bp.blogspot.com/-YPAqACPCByg/VyDlEHbUDxI/AAAAAAAAGZc/_OzftD5HNwoHaq7i9ov4ElkdT1UtgLlkACKgB/s1600/a27aa7ab38dd3b9ce471be72017cf1eb1459128889_full.jpg" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
            </div>
            <div className="card-footer">
              <button className="btn btn-primary">Add</button>
              <button className="btn btn-danger ml-2">Delete</button>
            </div>
          </div>
          <div className="card">
            <img src="https://i.pinimg.com/originals/01/17/ae/0117aed5c4b426530dfeb53bf585559e.jpg" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
            </div>
            <div className="card-footer">
              <button className="btn btn-primary">Add</button>
              <button className="btn btn-danger ml-2">Delete</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
