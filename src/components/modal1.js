import React from 'react';
import Modal from 'react-bootstrap/Modal';
import RoadBros from "../images/phone2.png";
import Img from "../images/makeup-store.png"

export const Modal1 = (props) => {
    return (
        <Modal
            {...props}
            centered
        >
            <Modal.Body>
                <div className='d-flex justify-content-end'>
                    <div onClick={props.onHide} className="cursor"><i class="fa-solid fa-xmark fa-3x mt-1 me-3"></i></div>
                </div>

                <div className='text-center'>
                    <div className='mb-3'>
                        <h1>
                            The Beauty Store
                        </h1>
                        <span className="fs-3">
                            React, Bootstrap, REST API
                        </span>
                    </div>

                    <div className="m-3 my-4">
                        <img className="img-fluid rounded shadow" src={Img} alt="Thumbnail for an online makeup store" />
                    </div>

                    <div className='m-3 d-flex inline-flex justify-content-around'>
                        <a
                            href="https://github.com/paola-codes/Makeup-Store"
                            style={{ textDecoration: "none", color: "black" }}
                        >
                            <h3 className="">
                                <i className="fa-brands fa-github fs-4 me-2" />
                                GitHub repo
                            </h3>
                        </a>
                        <a
                            href="https://thebeautystore.netlify.app/"
                            style={{ textDecoration: "none", color: "black" }}
                        >
                            <h3 className="">
                                <i className="fas fa-play fs-6 me-2" />
                                Try it out!
                            </h3>
                        </a>
                    </div>
                </div>
            </Modal.Body >
        </Modal >
    );
}

/*

Optional: Close button in a footer

import Button from 'react-bootstrap/Button';

<Modal.Footer>
    <Button variant="dark" onClick={props.onHide}><h5 className='pt-1 px-1'>Close</h5></Button>
</Modal.Footer>

*/