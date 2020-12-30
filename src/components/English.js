import React, { Component } from 'react';

import logo from '../images/logo.png';

class English extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className='container mt-5 mb-5 bg-light text-dark border border-light  '>
        <header className=' mt-5 '>
          <div className=''>
            <b>
              <p className='mb-0 d-flex justify-content-center'>
                මෙම ඩිජිටල් අයදුම්පත සම්පූර්ණ කිරීමට කරුණාකර ඔබේ භාෂාව තෝරන්න.
              </p>
            </b>
            <b>
              <p className='mb-0 d-flex justify-content-center'>
                Please select your language to complete this digital application
                form.
              </p>
            </b>
            <b>
              <p className='mb-0 d-flex justify-content-center'>
                இந்த டிஜிட்டல் விண்ணப்ப படிவத்தை பூர்த்தி செய்ய உங்கள் மொழியைத்
                தேர்ந்தெடுக்கவும்.
              </p>
            </b>
          </div>

          <div className='row mx-5 mt-3'>
            <div className='col-sm-4'>
              <img style={{ width: '85px' }} src={logo} />
            </div>
            <div className='col-sm-8'>
              <div className='d-flex justify-content-end'>
                <div class='dropdown'>
                  <button
                    class='btn btn-light border border-secondary dropdown-toggle'
                    type='button'
                    id='dropdownMenuButton'
                    data-toggle='dropdown'
                    aria-haspopup='true'
                    aria-expanded='false'>
                    English
                  </button>
                  <div class='dropdown-menu'>
                    <a class='dropdown-item disabled' href='/English'>
                      English
                    </a>
                    <a class='dropdown-item ' href='/Sinhala'>
                      Sinhala
                    </a>
                    <a class='dropdown-item' href='/Tamil'>
                      Tamil
                    </a>
                  </div>
                </div>
                <a
                  href='/English'
                  class='btn btn-primary btn-lg btn-sm ml-1 active'
                  role='button'
                  aria-pressed='true'>
                  NEW
                </a>
              </div>
              <div className='d-flex justify-content-end'>
                <p style={{ fontSize: '1.4em', marginTop: '8%' }}>
                  PERSONAL DATA COLLECTION FORM
                </p>
              </div>
            </div>
          </div>
        </header>

        <div class='container mb-5'>
          <form>
            <div
              style={{ backgroundColor: '#e6e6e6' }}
              class='container p-3 mb-4'>
              <h2>Personal Details</h2>
              <hr />
              <div class='form-group row'>
                <label for='title' class='col-sm-2 col-form-label '>
                  Title:
                </label>
                <div class='col-sm-2'>
                  <input type='title' class='form-control' id='title' />
                </div>
              </div>
              <div class='form-group row'>
                <label for='firstName' class='col-sm-2 col-form-label'>
                  First Name:
                </label>
                <div class='col-sm-10'>
                  <input type='title' class='form-control' id='firstName' />
                </div>
              </div>
              <div class='form-group row'>
                <label for='lastName' class='col-sm-2 col-form-label'>
                  Last Name:
                </label>
                <div class='col-sm-10'>
                  <input type='title' class='form-control' id='lastName' />
                </div>
              </div>
              <div class='form-group row'>
                <label for='otherName' class='col-sm-2 col-form-label'>
                  Other Name:
                </label>
                <div class='col-sm-10'>
                  <input type='title' class='form-control' id='otherName' />
                </div>
              </div>
              <div class='form-group row'>
                <label for='Gender' class='col-sm-2 col-form-label'>
                  Gender:
                </label>
                <div class='col-sm-4 ml-3 form-check form-check-inline'>
                  <input
                    class='form-check-input'
                    type='radio'
                    name='inlineRadioOptions1'
                    id='inlineRadio1'
                    value='option1'
                  />
                  <label class='form-check-label' for='inlineRadio1'>
                    Male
                  </label>
                  <input
                    class='ml-5 form-check-input'
                    type='radio'
                    name='inlineRadioOptions1'
                    id='inlineRadio1'
                    value='option1'
                  />
                  <label class='form-check-label' for='inlineRadio1'>
                    Female
                  </label>
                </div>
              </div>
              <div class='form-group row'>
                <label for='Civil Status' class='col-sm-2 col-form-label'>
                  Civil Status:
                </label>
                <div class='col-sm-4 ml-3 form-check form-check-inline'>
                  <input
                    class=' form-check-input'
                    type='radio'
                    name='inlineRadioOptions2'
                    id='inlineRadio2'
                    value='option2'
                  />
                  <label class='form-check-label' for='inlineRadio1'>
                    Single
                  </label>
                  <input
                    class='ml-5 form-check-input'
                    type='radio'
                    name='inlineRadioOptions2'
                    id='inlineRadio2'
                    value='option2'
                  />
                  <label class='form-check-label' for='inlineRadio1'>
                    Married
                  </label>
                  <input
                    class='ml-5 form-check-input'
                    type='radio'
                    name='inlineRadioOptions2'
                    id='inlineRadio2'
                    value='option2'
                  />
                  <label class='form-check-label' for='inlineRadio1'>
                    Widowed
                  </label>
                  <input
                    class='ml-5 form-check-input'
                    type='radio'
                    name='inlineRadioOptions2'
                    id='inlineRadio2'
                    value='option2'
                  />
                  <label class='form-check-label' for='inlineRadio1'>
                    Divorced
                  </label>
                </div>
              </div>
              <div class='form-group row'>
                <label for='firstName' class='col-sm-2 col-form-label'>
                  Profession/Occupation:
                </label>
                <div class='col-sm-10'>
                  <input type='title' class='form-control' id='firstName' />
                </div>
              </div>
              <div class='form-group row'>
                <label for='lastName' class='col-sm-2 col-form-label'>
                  NIC No:
                </label>
                <div class='col-sm-10'>
                  <input type='title' class='form-control' id='lastName' />
                </div>
              </div>
            </div>

            <div
              style={{ backgroundColor: '#e6e6e6' }}
              class='container p-3 mb-4'>
              <h2>Birth Details</h2>
              <hr />
              <div class='form-inline d-flex justify-content-around p-4'>
                <div class='form-group row'>
                  <label class='' for='email'>
                    Year of Birth:
                  </label>
                  <input
                    style={{ width: '100px' }}
                    type='email'
                    class=' form-control ml-2'
                    id='email'
                    name='email'
                  />
                </div>

                <div class='form-group '>
                  <label for='inputState'>Month of Birth:</label>
                  <select id='inputState' class='form-control ml-2'>
                    <option>Choose...</option>
                    <option>January</option>
                    <option>February</option>
                    <option>March</option>
                    <option>April</option>
                    <option>May</option>
                    <option>June</option>
                    <option>July</option>
                    <option>August</option>
                    <option>September</option>
                    <option>October</option>
                    <option>November</option>
                    <option>December</option>
                  </select>
                </div>
                <div class='form-group'>
                  <label for='inputZip'>Day of Birth:</label>
                  <input
                    style={{ width: '100px' }}
                    type='text'
                    class='form-control ml-2'
                    id='inputZip'
                  />
                </div>
              </div>
              <div class='form-group row'>
                <label for='title' class='col-sm-2 col-form-label '>
                  Birth Certificate No:
                </label>
                <div class='col-sm-10'>
                  <input type='title' class='form-control' id='title' />
                </div>
              </div>
              <div class='form-group row'>
                <label for='firstName' class='col-sm-2 col-form-label'>
                  City of Birth:
                </label>
                <div class='col-sm-10'>
                  <input type='title' class='form-control' id='firstName' />
                </div>
              </div>
              <div class='form-group row'>
                <label for='lastName' class='col-sm-2 col-form-label'>
                  Division:
                </label>
                <div class='col-sm-10'>
                  <input type='title' class='form-control' id='lastName' />
                </div>
              </div>
              <div class='form-group row'>
                <label for='otherName' class='col-sm-2 col-form-label'>
                  District:
                </label>
                <div class='col-sm-10'>
                  <input type='title' class='form-control' id='otherName' />
                </div>
              </div>
            </div>

            <div
              style={{ backgroundColor: '#e6e6e6' }}
              class='container p-3 mb-4'>
              <h2>Residential Details</h2>
              <hr />
              <div class='form-group row'>
                <label for='title' class='col-sm-2 col-form-label '>
                  House No:
                </label>
                <div class='col-sm-10'>
                  <input type='title' class='form-control' id='title' />
                </div>
              </div>
              <div class='form-group row'>
                <label for='firstName' class='col-sm-4 col-form-label'>
                  Name of House, Condominium, Flat, Scheme, Quarters, Estate or
                  Other Building:
                </label>
                <div class='col-sm-8'>
                  <input type='title' class='form-control' id='firstName' />
                </div>
              </div>
              <div class='form-group row'>
                <label for='lastName' class='col-sm-4 col-form-label'>
                  Name of Road/Street/Lane/Place/Garden:
                </label>
                <div class='col-sm-8'>
                  <input type='title' class='form-control' id='lastName' />
                </div>
              </div>
              <div class='form-group row'>
                <label for='otherName' class='col-sm-4 col-form-label'>
                  Name of Village/City:
                </label>
                <div class='col-sm-8'>
                  <input type='title' class='form-control' id='otherName' />
                </div>
              </div>
              <div class='form-group row'>
                <label for='otherName' class='col-sm-4 col-form-label'>
                  Postal Code:
                </label>
                <div class='col-sm-8'>
                  <input type='title' class='form-control' id='otherName' />
                </div>
              </div>
            </div>

            <div
              style={{ backgroundColor: '#e6e6e6' }}
              class='container p-3 mb-4'>
              <h2>Contact Details</h2>
              <hr />
              <div class='form-group row'>
                <label for='title' class='col-sm-2 col-form-label '>
                  Telephone Number:
                </label>
                <div class='col-sm-10'>
                  <input type='title' class='form-control' id='title' />
                </div>
              </div>
              <div class='form-group row'>
                <label for='firstName' class='col-sm-2 col-form-label'>
                  Mobile Number:
                </label>
                <div class='col-sm-10'>
                  <input type='title' class='form-control' id='firstName' />
                </div>
              </div>
              <div class='form-group row'>
                <label for='lastName' class='col-sm-2 col-form-label'>
                  Email Address:
                </label>
                <div class='col-sm-10'>
                  <input type='title' class='form-control' id='lastName' />
                </div>
              </div>
              <div class='form-group row'>
                <label for='lastName' class='col-sm-2 col-form-label'>
                  Attach Photograph:
                </label>
                <div class='col-sm-10'>
                  <input
                    style={{ size: '80px' }}
                    type='file'
                    class='form-control-file rounded'
                    id='exampleFormControlFile1'
                  />
                </div>
              </div>
              <button type='submit' class='btn btn-primary btn-lg btn-block'>
                SUBMIT FORM
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default English;
