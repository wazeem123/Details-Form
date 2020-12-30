import React, { Component } from 'react';

import logo from '../images/logo.png';

class Sinhala extends Component {
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
                    Sinhala
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
                  පුද්ගලික දත්ත එකතු කිරීමේ පෝරමය
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
              <h2>පුද්ගලික තොරතුරු</h2>
              <hr />
              <div class='form-group row'>
                <label for='title' class='col-sm-2 col-form-label '>
                  ආමන්ත්‍රණය:
                </label>
                <div class='col-sm-2'>
                  <input type='title' class='form-control' id='title' />
                </div>
              </div>
              <div class='form-group row'>
                <label for='firstName' class='col-sm-2 col-form-label'>
                  මුල් නම:
                </label>
                <div class='col-sm-10'>
                  <input type='title' class='form-control' id='firstName' />
                </div>
              </div>
              <div class='form-group row'>
                <label for='lastName' class='col-sm-2 col-form-label'>
                  අවසන් නම:
                </label>
                <div class='col-sm-10'>
                  <input type='title' class='form-control' id='lastName' />
                </div>
              </div>
              <div class='form-group row'>
                <label for='otherName' class='col-sm-2 col-form-label'>
                  වෙනත් නම:
                </label>
                <div class='col-sm-10'>
                  <input type='title' class='form-control' id='otherName' />
                </div>
              </div>
              <div class='form-group row'>
                <label for='Gender' class='col-sm-2 col-form-label'>
                  ස්ත්‍රී පුරුෂ භාවය:
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
                    ගැහැණු
                  </label>
                  <input
                    class='ml-5 form-check-input'
                    type='radio'
                    name='inlineRadioOptions1'
                    id='inlineRadio1'
                    value='option1'
                  />
                  <label class='form-check-label' for='inlineRadio1'>
                    පිරිමි
                  </label>
                </div>
              </div>
              <div class='form-group row'>
                <label for='Civil Status' class='col-sm-2 col-form-label'>
                  සිවිල් තත්වය:
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
                    අවිවාහක
                  </label>
                  <input
                    class='ml-5 form-check-input'
                    type='radio'
                    name='inlineRadioOptions2'
                    id='inlineRadio2'
                    value='option2'
                  />
                  <label class='form-check-label' for='inlineRadio1'>
                    විවාහක
                  </label>
                  <input
                    class='ml-5 form-check-input'
                    type='radio'
                    name='inlineRadioOptions2'
                    id='inlineRadio2'
                    value='option2'
                  />
                  <label class='form-check-label' for='inlineRadio1'>
                    වැන්දඹු
                  </label>
                  <input
                    class='ml-5 form-check-input'
                    type='radio'
                    name='inlineRadioOptions2'
                    id='inlineRadio2'
                    value='option2'
                  />
                  <label class='form-check-label' for='inlineRadio1'>
                    දික්කසාද
                  </label>
                </div>
              </div>
              <div class='form-group row'>
                <label for='firstName' class='col-sm-2 col-form-label'>
                  වෘත්තිය / තනතුර:
                </label>
                <div class='col-sm-10'>
                  <input type='title' class='form-control' id='firstName' />
                </div>
              </div>
              <div class='form-group row'>
                <label for='lastName' class='col-sm-2 col-form-label'>
                  ජාතික හැඳුනුම්පත් අංකය:
                </label>
                <div class='col-sm-10'>
                  <input type='title' class='form-control' id='lastName' />
                </div>
              </div>
            </div>

            <div
              style={{ backgroundColor: '#e6e6e6' }}
              class='container p-3 mb-4'>
              <h2>උපත් විස්තර</h2>
              <hr />
              <div class='form-inline d-flex justify-content-around p-4'>
                <div class='form-group row'>
                  <label class='' for='email'>
                    උපන් වර්ෂය:
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
                  <label for='inputState'>උපන් මාසය:</label>
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
                  <label for='inputZip'>උපන් දිනය:</label>
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
                  උප්පැන්න සහතික අංකය:
                </label>
                <div class='col-sm-10'>
                  <input type='title' class='form-control' id='title' />
                </div>
              </div>
              <div class='form-group row'>
                <label for='firstName' class='col-sm-2 col-form-label'>
                  උපන් නගරය / ගම:
                </label>
                <div class='col-sm-10'>
                  <input type='title' class='form-control' id='firstName' />
                </div>
              </div>
              <div class='form-group row'>
                <label for='lastName' class='col-sm-2 col-form-label'>
                  කොට්ඨාසය:
                </label>
                <div class='col-sm-10'>
                  <input type='title' class='form-control' id='lastName' />
                </div>
              </div>
              <div class='form-group row'>
                <label for='otherName' class='col-sm-2 col-form-label'>
                  දිස්ත්‍රික්කය:
                </label>
                <div class='col-sm-10'>
                  <input type='title' class='form-control' id='otherName' />
                </div>
              </div>
            </div>

            <div
              style={{ backgroundColor: '#e6e6e6' }}
              class='container p-3 mb-4'>
              <h2>නේවාසික විස්තර</h2>
              <hr />
              <div class='form-group row'>
                <label for='title' class='col-sm-2 col-form-label '>
                  නිවසේ අංකය:
                </label>
                <div class='col-sm-10'>
                  <input type='title' class='form-control' id='title' />
                </div>
              </div>
              <div class='form-group row'>
                <label for='firstName' class='col-sm-4 col-form-label'>
                  නිවසේ / නිවාස / නිවාස යෝජනා /නවාතැන හෝ වෙනත් පදිංචි ස්ථානයේ
                  නම:
                </label>
                <div class='col-sm-8'>
                  <input type='title' class='form-control' id='firstName' />
                </div>
              </div>
              <div class='form-group row'>
                <label for='lastName' class='col-sm-4 col-form-label'>
                  පාර / විදිය / පටුමග / පෙදෙස / උද්‍යානය නම:
                </label>
                <div class='col-sm-8'>
                  <input type='title' class='form-control' id='lastName' />
                </div>
              </div>
              <div class='form-group row'>
                <label for='otherName' class='col-sm-4 col-form-label'>
                  ගම / නගරය:
                </label>
                <div class='col-sm-8'>
                  <input type='title' class='form-control' id='otherName' />
                </div>
              </div>
              <div class='form-group row'>
                <label for='otherName' class='col-sm-4 col-form-label'>
                  තැපැල් කේතය:
                </label>
                <div class='col-sm-8'>
                  <input type='title' class='form-control' id='otherName' />
                </div>
              </div>
            </div>

            <div
              style={{ backgroundColor: '#e6e6e6' }}
              class='container p-3 mb-4'>
              <h2>ඇමතුම් විස්තර</h2>
              <hr />
              <div class='form-group row'>
                <label for='title' class='col-sm-2 col-form-label '>
                  දුරකථන අංකය:
                </label>
                <div class='col-sm-10'>
                  <input type='title' class='form-control' id='title' />
                </div>
              </div>
              <div class='form-group row'>
                <label for='firstName' class='col-sm-2 col-form-label'>
                  ජංගම දුරකථන අංකය:
                </label>
                <div class='col-sm-10'>
                  <input type='title' class='form-control' id='firstName' />
                </div>
              </div>
              <div class='form-group row'>
                <label for='lastName' class='col-sm-2 col-form-label'>
                  විද්‍යුත් තැපෑල:
                </label>
                <div class='col-sm-10'>
                  <input type='title' class='form-control' id='lastName' />
                </div>
              </div>
              <div class='form-group row'>
                <label for='lastName' class='col-sm-2 col-form-label'>
                  ඡායාරූපය අමුණන්න:
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

export default Sinhala;
