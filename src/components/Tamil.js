import React, { Component } from 'react';

import logo from '../images/logo.png';

class Tamil extends Component {
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
                    Tamil
                  </button>
                  <div class='dropdown-menu'>
                    <a class='dropdown-item ' href='/English'>
                      English
                    </a>
                    <a class='dropdown-item disabled' href='/Sinhala'>
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
                  தனிப்பட்ட தரவு சேகரிப்பு படிவம்
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
              <h2>தனிப்பட்ட விபரங்கள்</h2>
              <hr />
              <div class='form-group row'>
                <label for='title' class='col-sm-2 col-form-label '>
                  தலைப்பு:
                </label>
                <div class='col-sm-2'>
                  <input type='title' class='form-control' id='title' />
                </div>
              </div>
              <div class='form-group row'>
                <label for='firstName' class='col-sm-2 col-form-label'>
                  முதல் பெயர்:
                </label>
                <div class='col-sm-10'>
                  <input type='title' class='form-control' id='firstName' />
                </div>
              </div>
              <div class='form-group row'>
                <label for='lastName' class='col-sm-2 col-form-label'>
                  கடைசி பெயர்:
                </label>
                <div class='col-sm-10'>
                  <input type='title' class='form-control' id='lastName' />
                </div>
              </div>
              <div class='form-group row'>
                <label for='otherName' class='col-sm-2 col-form-label'>
                  வேறு பெயர்:
                </label>
                <div class='col-sm-10'>
                  <input type='title' class='form-control' id='otherName' />
                </div>
              </div>
              <div class='form-group row'>
                <label for='Gender' class='col-sm-2 col-form-label'>
                  பால்:
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
                    ஆண்
                  </label>
                  <input
                    class='ml-5 form-check-input'
                    type='radio'
                    name='inlineRadioOptions1'
                    id='inlineRadio1'
                    value='option1'
                  />
                  <label class='form-check-label' for='inlineRadio1'>
                    பெண்
                  </label>
                </div>
              </div>
              <div class='form-group row'>
                <label for='Civil Status' class='col-sm-2 col-form-label'>
                  குடியியல் அந்தஸ்து:
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
                    திருமணமாகாதவர்
                  </label>
                  <input
                    class='ml-5 form-check-input'
                    type='radio'
                    name='inlineRadioOptions2'
                    id='inlineRadio2'
                    value='option2'
                  />
                  <label class='form-check-label' for='inlineRadio1'>
                    திருமணமானவர்
                  </label>
                  <input
                    class='ml-5 form-check-input'
                    type='radio'
                    name='inlineRadioOptions2'
                    id='inlineRadio2'
                    value='option2'
                  />
                  <label class='form-check-label' for='inlineRadio1'>
                    விதவை
                  </label>
                  <input
                    class='ml-5 form-check-input'
                    type='radio'
                    name='inlineRadioOptions2'
                    id='inlineRadio2'
                    value='option2'
                  />
                  <label class='form-check-label' for='inlineRadio1'>
                    விவாகரத்து
                  </label>
                </div>
              </div>
              <div class='form-group row'>
                <label for='firstName' class='col-sm-2 col-form-label'>
                  உயர்தொழில்/ தொழில்:
                </label>
                <div class='col-sm-10'>
                  <input type='title' class='form-control' id='firstName' />
                </div>
              </div>
              <div class='form-group row'>
                <label for='lastName' class='col-sm-2 col-form-label'>
                  தேசிய அடையாள அட்டை இலக்கம்:
                </label>
                <div class='col-sm-10'>
                  <input type='title' class='form-control' id='lastName' />
                </div>
              </div>
            </div>

            <div
              style={{ backgroundColor: '#e6e6e6' }}
              class='container p-3 mb-4'>
              <h2>பிறப்பு விபரங்கள்</h2>
              <hr />
              <div class='form-inline d-flex justify-content-around p-4'>
                <div class='form-group row'>
                  <label class='' for='email'>
                    பிறந்த ஆண்டு:
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
                  <label for='inputState'>பிறந்த மாதம்:</label>
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
                  <label for='inputZip'>பிறந்த திகதி:</label>
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
                  பிறப்பு சான்றிதழ் இலக்கம்:
                </label>
                <div class='col-sm-10'>
                  <input type='title' class='form-control' id='title' />
                </div>
              </div>
              <div class='form-group row'>
                <label for='firstName' class='col-sm-2 col-form-label'>
                  பிறந்த நகரம்:
                </label>
                <div class='col-sm-10'>
                  <input type='title' class='form-control' id='firstName' />
                </div>
              </div>
              <div class='form-group row'>
                <label for='lastName' class='col-sm-2 col-form-label'>
                  பிரிவு:
                </label>
                <div class='col-sm-10'>
                  <input type='title' class='form-control' id='lastName' />
                </div>
              </div>
              <div class='form-group row'>
                <label for='otherName' class='col-sm-2 col-form-label'>
                  மாவட்டம்:
                </label>
                <div class='col-sm-10'>
                  <input type='title' class='form-control' id='otherName' />
                </div>
              </div>
            </div>

            <div
              style={{ backgroundColor: '#e6e6e6' }}
              class='container p-3 mb-4'>
              <h2>வதிவிட விபரங்கள்</h2>
              <hr />
              <div class='form-group row'>
                <label for='title' class='col-sm-2 col-form-label '>
                  வீட்டு இலக்கம்:
                </label>
                <div class='col-sm-10'>
                  <input type='title' class='form-control' id='title' />
                </div>
              </div>
              <div class='form-group row'>
                <label for='firstName' class='col-sm-4 col-form-label'>
                  கூட்டாட்சியாதனத்தின் அடுக்கு வீட்டின், வீடமைப்பு திட்டத்தின்,
                  குடிமனையின், தோட்டத்தின் அல்லது வேறேதேனும் கட்டிடத்தின் பெயர்:
                </label>
                <div class='col-sm-8'>
                  <input type='title' class='form-control' id='firstName' />
                </div>
              </div>
              <div class='form-group row'>
                <label for='lastName' class='col-sm-4 col-form-label'>
                  வீதி/ தெரு/ஒழுங்கை/இடம்/தோட்டம்:
                </label>
                <div class='col-sm-8'>
                  <input type='title' class='form-control' id='lastName' />
                </div>
              </div>
              <div class='form-group row'>
                <label for='otherName' class='col-sm-4 col-form-label'>
                  கிராமம் / நகரம்:
                </label>
                <div class='col-sm-8'>
                  <input type='title' class='form-control' id='otherName' />
                </div>
              </div>
              <div class='form-group row'>
                <label for='otherName' class='col-sm-4 col-form-label'>
                  அஞ்சற்குறியீடு:
                </label>
                <div class='col-sm-8'>
                  <input type='title' class='form-control' id='otherName' />
                </div>
              </div>
            </div>

            <div
              style={{ backgroundColor: '#e6e6e6' }}
              class='container p-3 mb-4'>
              <h2>தொடர்பு விபரங்கள்</h2>
              <hr />
              <div class='form-group row'>
                <label for='title' class='col-sm-2 col-form-label '>
                  தொலைபேசி இலக்கம்:
                </label>
                <div class='col-sm-10'>
                  <input type='title' class='form-control' id='title' />
                </div>
              </div>
              <div class='form-group row'>
                <label for='firstName' class='col-sm-2 col-form-label'>
                  கையடக்க தொலைபேசி இலக்கம்:
                </label>
                <div class='col-sm-10'>
                  <input type='title' class='form-control' id='firstName' />
                </div>
              </div>
              <div class='form-group row'>
                <label for='lastName' class='col-sm-2 col-form-label'>
                  மின்னஞ்சல் முகவரி:
                </label>
                <div class='col-sm-10'>
                  <input type='title' class='form-control' id='lastName' />
                </div>
              </div>
              <div class='form-group row'>
                <label for='lastName' class='col-sm-2 col-form-label'>
                  புகைப்படத்தை இணைக்கவும்:
                </label>
                <div class='col-sm-10'>
                  <input
                    type='file'
                    class='form-control-file'
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

export default Tamil;
