import React from 'react'

const Contact = () => {
    return (
        <div class="container text-center mt-4">
            <div class="row">
                <div class="col mt-4">
                    <h2 className='mb-5'>Get in Touch</h2>
                    <p className='mb-4'>Do you need advice? Our specialists are ready to hold a free consultation with you. Contact us and get answers to all your questions.</p>
                    <img src="/chat-logo.svg" alt="chat" width={120} />
                </div>
                <div class="col mt-5">
                    <form action="">
                        <div class="form-group">
                            <input type="email" className="form-control mb-2" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                        </div>
                        <div class="form-group">
                            <input type="email" className="form-control mb-2" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                        </div>
                        <div class="form-group">
                            <input type="email" className="form-control mb-2" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                        </div>
                        <div class="form-group">
                            <label for="exampleFormControlSelect1">Service</label>
                            <select class="form-control" id="exampleFormControlSelect1">
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                            </select>
                        </div>
                        <button type="button" class="btn btn-primary">Primary</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact