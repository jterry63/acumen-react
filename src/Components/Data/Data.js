import React, { Component } from "react";
import "./Data.css";
import Range from '../../Components/Range/Range';
import { ProgressBar } from "mx-react-components";
import { TextArea } from "mx-react-components";
import { Button } from "mx-react-components";
import { MessageBox } from "mx-react-components";




class Data extends Component {

  constructor(props) {
    super(props);
    this.state = {
      rangeVal: 3,
      backgroundColor: "white",
      imgSrc: "../images/acumen2.png",
      color: "darkcyan",
      border: "1px solid white",
      width: "10%",
      percentage: 50,
      visibility: "hidden"
    }
    this.updateRange = this.updateRange.bind(this);
  }
  
  updateRange(val) {
    this.setState({
      rangeVal: val
    })
  } 


  componentDidMount = () => {
    window.addEventListener("scroll", this.handleScroll);
  };

  handleScroll = e => {
    if (window.scrollY > 10) {
      this.setState({ backgroundColor: "rgba(71,71,71,.9)",
        imgSrc: "../images/acumen-white.png",
        color: "white"
    
    });
      
    } else {
      this.setState({
        backgroundColor: "white",
        imgSrc: "../images/acumen2.png",
        color: "darkcyan",
        border: "1px solid white"
      });
    }
  };

  handleMessageClick = () => {
    this.setState({ visibility: "visible",
  
});

  }

  render() {
    const { rangeVal } = this.state;
    return (
        <div>
               <nav
          className="nav-master-survey" style={{ backgroundColor: this.state.backgroundColor }}>
          <div className="navbar-fixed">
            <a className="navbar-brand" href="#">
            <img src={this.state.imgSrc} />
            </a>
            
            <div className="container" id="progressBar">
        <p className="center" id="progressText" style={{ color: this.state.color }}>Progress 0/8</p>
        <ProgressBar
          baseColor='#ACB0B3'
          percentage={this.state.percentage}
          progressColor="#529aca"
          styles={{ component: { width: '100%' } }}
        />
      </div>
            </div>
         
        </nav>
    
        {/*Survey Header*/}
        <div className="section" id="surveyHeader">
          <br /><br />
          <h2 className="center light" style={{ color: "white" }} id="helloHeader">Hello.</h2>
          <div className="row">
            <div className="col s3 m3" />
            <div className="col s6 m6">
              <div className="center">
                <h4 className="center light" id="surveyIntro" style={{ color: "white" }}> Welcome to the Acumen Pulse for August. Please take a minute to
                  answer the questions below. Your participation will help us get a real pulse on life at Example Inc.
                  So, thanks for taking part.
                </h4>
              </div>
            </div>
            <div className="col s3 m3" />
          </div>
          <div className="row">
            <div className="col s4 m4" />
            <div className="col s4 m4">
              <div className="center">
                {/* Dropdown Trigger */}
                <a className="dropdown-trigger light" data-target="dropdown1" style={{ color: "white" }}>English <i className="material-icons" style={{fontSize: 12}}>keyboard_arrow_down</i>
                </a>
                {/* Dropdown Structure */}
                <ul id="dropdown1" className="dropdown-content">
                  <li><a href="#!">Español</a></li>
                </ul>
              </div>
            </div>
            <div className="col s4 m4" />
          </div>
          <br />
          <p className="center light" id="surveyWarning" style={{ color: "white" }}>Your responses are confidential and reported to managers and Example Inc
            <br /> in aggregate groups. For more information view the: Data Protection Summary.<br /> Take care not to identify
            yourself in the comments.</p>
          <br />
        </div>
        <div className="row">
          <div className="col s4 m4" />
          <div className="col s4 m4">
            <div className="center">
              <i className="material-icons center" id="dropDownIcon">keyboard_arrow_down</i>
            </div>
          </div>
          <div className="col s4 m4" />
        </div>
        {/*Question 1 Start*/}
        
        <div className="section" id="question_one">
          <h2 className="center light">01.</h2>
          <h4 className="center light">How happy are you working at Example Inc?
          </h4>
          <br /><br />
          <div className="row">
            <div className="col s3 m3" />
            <div className="col s6 m6">
              <div className="row" id="surveyTags">
                <div className="col s3 m3">
                  <div className="left-align light">
                    <p>Not at all</p>
                  </div>
                </div>
                <div className="col s6 m6" />
                <div className="col s3 m3">
                  <div className="right-align light">
                    <p>Completely happy</p>
                  </div>
                </div>
              </div>
              {/*Range Slider*/}
              <div className="center">
              <Range range={rangeVal} updateRange={this.updateRange}/>
                {/* <form class="center" id="test1">

                        <div class="col s1 m1">
                            <p>
                                <label>
                                    <input class="with-gap" name="group1" type="radio" />1
                                    <span id="radio1"></span>
                                </label>
                            </p>
                        </div>


                        <div class="col s1 m1">
                            <p>
                                <label>
                                    <input class="with-gap" name="group1" type="radio" />2
                                    <span></span>
                                </label>
                            </p>
                        </div>

                        <div class="col s1 m1">
                            <p>
                                <label>
                                    <input class="with-gap" name="group1" type="radio" />3
                                    <span></span>
                                </label>
                            </p>
                        </div>

                        <div class="col s1 m1">
                            <p>
                                <label>
                                    <input class="with-gap" name="group1" type="radio" />4
                                    <span></span>
                                </label>
                            </p>
                        </div>

                        <div class="col s1 m1">
                            <p>
                                <label>
                                    <input class="with-gap" name="group1" type="radio" />5
                                    <span></span>
                                </label>
                            </p>
                        </div>

                    </form> */}
              </div>
              <div className="col s3 m3" />
            </div>
          </div>
        </div>
        {/*Comment Field*/}
        <div className="row">
          <div className="col s3 m3" />
          <div className="col s6 m6">
            <div className="input-field" id="comment1">
            <TextArea
          elementProps={{
            placeholder: 'Comment'
          }}
          rows={5}
          valid={true}
        />
        <br />
              <Button className="right" id="save1" aria-label='Submit Form' elementProps={{ 'data-my-attribute': 'my attribute data here' }} theme={{ Colors: { PRIMARY: '#333333' } }} type='secondary'>Save</Button>
              <Button className="right" id="skip1" aria-label='Submit Form' elementProps={{ 'data-my-attribute': 'my attribute data here' }} theme={{ Colors: { PRIMARY: '#333333' } }} type='secondary'>Skip</Button>
            </div>
          </div>
        </div>
        <div className="col s3 m3" />
        <div>
          <br /><br /><br /><br />
          {/*Question 1 End*/}
          {/*Question Hint 1 Start*/}
          <div id="message-box" style={{ visibility: this.state.visibility }}>
          <MessageBox
          icon='attention-solid'
          title='This is a MessageBox title with no message, only a title.'
        />
        </div>
          <div className="section" id="question_hint1">
            <div className="row">
              <div className="col s4 m4" />
              <div className="col s4 m4">
                <div className="center">
                  <i className="material-icons center" onClick={this.handleMessageClick} id="dropDownHint">keyboard_arrow_down</i>
                </div>
              </div>
              <div className="col s4 m4" />
            </div>
          </div>
          {/*Question Hint 1 End*/}
          {/*Question 2 Start*/}
          <div className="section" id="question_two">
            <div className="row">
              <div className="col s4 m4" />
              <div className="col s4 m4">
                <div className="center">
                  <i className="material-icons center tooltipped" data-position="top" data-tooltip="This question is required" id="dropDownIcon2">keyboard_arrow_down</i>
                </div>
              </div>
              <div className="col s4 m4" />
            </div>
            <h2 className="center" style={{color: 'black', fontWeight: 'bolder'}}>02.</h2>
            <h4 className="center">I frequently receive recognition for my work.
            </h4>
            <div className="row">
              <div className="col s3 m3" />
              <div className="col s6 m6">
                <br />
                {/*Range Slider*/}
                <div className="center">
                <Range range={rangeVal} updateRange={this.updateRange}/>
                </div>
                {/*Comment Field*/}
                <div className="input-field" id="comment2">
                  <textarea id="textarea2" className="materialize-textarea" style={{padding: 10}} defaultValue={""} />
                  <label htmlFor="textarea2" style={{textIndent: 10, fontFamily: '"proxima nova"'}}>Please free to add
                    your comments here
                  </label>
                  <a className="waves-effect waves-light btn right" id="save2" style={{marginLeft: 10, backgroundColor: 'whitesmoke', color: 'grey'}}>Save</a>
                  <a className="waves-effect waves-light btn right" id="skip2" style={{backgroundColor: 'whitesmoke', color: 'grey'}}>Skip</a>
                </div>
              </div>
              <div className="col s3 m3" />
            </div>
            <br /><br /><br /><br />
          </div>
          {/*Question 2 End*/}
          {/*Question Hint 2 Start*/}
          <div className="section" id="question_hint2">
            <div className="row">
              <div className="col s4 m4" />
              <div className="col s4 m4">
                <div className="center">
                  <i className="material-icons center" onclick="M.toast({html: 'This question is required', classes: 'rounded', displayLength: '1000'})" id="dropDownHint">keyboard_arrow_down</i> </div>
              </div>
              <div className="col s4 m4" />
            </div>
          </div>
          {/*Question Hint 2 End*/}
          {/*Question 3 Start*/}
          <div className="section" id="question_three">
            <div className="row">
              <div className="col s4 m4" />
              <div className="col s4 m4">
                <div className="center">
                  <i className="material-icons center tooltipped" data-position="top" data-tooltip="This question is required" id="dropDownIcon3">keyboard_arrow_down</i>
                </div>
              </div>
              <div className="col s4 m4" />
            </div>
            <h2 className="center" style={{color: 'black', fontWeight: 'bolder'}}>03.</h2>
            <h4 className="center">I have the resources I need to do my job well.
            </h4>
            <div className="row">
              <div className="col s3 m3" />
              <div className="col s6 m6">
                <br />
                {/*Range Slider*/}
                <div className="center">
                  <form action="#">
                    <p className="range-field">
                      <input type="range" id="test3" min={1} max={5} />
                    </p>
                  </form>
                </div>
                {/*Comment Field*/}
                <div className="input-field" id="comment3">
                  <textarea id="textarea3" className="materialize-textarea" style={{padding: 10}} defaultValue={""} />
                  <label htmlFor="textarea3" style={{textIndent: 10, fontFamily: '"proxima nova"'}}>Please free to add
                    your comments here
                  </label>
                  <a className="waves-effect waves-light btn right" id="save3" style={{marginLeft: 10, backgroundColor: 'whitesmoke', color: 'grey'}}>Save</a>
                  <a className="waves-effect waves-light btn right" id="skip3" style={{backgroundColor: 'whitesmoke', color: 'grey'}}>Skip</a>
                </div>
              </div>
              <div className="col s3 m3" />
            </div>
            <br /><br /><br /><br />
          </div>
          {/*Question 3 End*/}
          {/*Question Hint 4 Start*/}
          <div className="section" id="question_hint3">
            <div className="row">
              <div className="col s4 m4" />
              <div className="col s4 m4">
                <div className="center">
                  <i className="material-icons center" onclick="M.toast({html: 'This question is required', classes: 'rounded', displayLength: '1000'})" id="dropDownHint">keyboard_arrow_down</i> </div>
              </div>
              <div className="col s4 m4" />
            </div>
          </div>
          {/*Question Hint 4 End*/}
          {/*Question 4 Start*/}
          <div className="section" id="question_four">
            <div className="row">
              <div className="col s4 m4" />
              <div className="col s4 m4">
                <div className="center">
                  <i className="material-icons center tooltipped" data-position="top" data-tooltip="This question is required" id="dropDownIcon4">keyboard_arrow_down</i>
                </div>
              </div>
              <div className="col s4 m4" />
            </div>
            <h2 className="center" style={{color: 'black', fontWeight: 'bolder'}}>04.</h2>
            <h4 className="center">My manager provides me with feedback about my performance to help me do my job better.
            </h4>
            <div className="row">
              <div className="col s3 m3" />
              <div className="col s6 m6">
                <br />
                {/*Range Slider*/}
                <div className="center">
                  <form action="#">
                    <p className="range-field">
                      <input type="range" id="test4" min={1} max={5} />
                    </p>
                  </form>
                </div>
                {/*Comment Field*/}
                <div className="input-field" id="comment4">
                  <textarea id="textarea4" className="materialize-textarea" style={{padding: 10}} defaultValue={""} />
                  <label htmlFor="textarea4" style={{textIndent: 10, fontFamily: '"proxima nova"'}}>Please free to add
                    your comments here
                  </label>
                  <a className="waves-effect waves-light btn right" id="save4" style={{marginLeft: 10, backgroundColor: 'whitesmoke', color: 'grey'}}>Save</a>
                  <a className="waves-effect waves-light btn right" id="skip4" style={{backgroundColor: 'whitesmoke', color: 'grey'}}>Skip</a>
                </div>
              </div>
              <div className="col s3 m3" />
            </div>
            <br /><br /><br /><br />
          </div>
          {/*Question 4 End*/}
          {/*Question Hint 5 Start*/}
          <div className="section" id="question_hint4">
            <div className="row">
              <div className="col s4 m4" />
              <div className="col s4 m4">
                <div className="center">
                  <i className="material-icons center" onclick="M.toast({html: 'This question is required', classes: 'rounded', displayLength: '1000'})" id="dropDownHint">keyboard_arrow_down</i> </div>
              </div>
              <div className="col s4 m4" />
            </div>
          </div>
          {/*Question Hint 5 End*/}
          {/*Question 5 Start*/}
          <div className="section" id="question_five">
            <div className="row">
              <div className="col s4 m4" />
              <div className="col s4 m4">
                <div className="center">
                  <i className="material-icons center tooltipped" data-position="top" data-tooltip="This question is required" id="dropDownIcon5">keyboard_arrow_down</i>
                </div>
              </div>
              <div className="col s4 m4" />
            </div>
            <h2 className="center" style={{color: 'black', fontWeight: 'bolder'}}>05.</h2>
            <h4 className="center">I feel empowered to make decisions regarding my work.
            </h4>
            <div className="row">
              <div className="col s3 m3" />
              <div className="col s6 m6">
                <br />
                {/*Range Slider*/}
                <div className="center">
                  <form action="#">
                    <p className="range-field">
                      <input type="range" id="test5" min={1} max={5} />
                    </p>
                  </form>
                </div>
                {/*Comment Field*/}
                <div className="input-field" id="comment5">
                  <textarea id="textarea5" className="materialize-textarea" style={{padding: 10}} defaultValue={""} />
                  <label htmlFor="textarea5" style={{textIndent: 10, fontFamily: '"proxima nova"'}}>Please free to add
                    your comments here
                  </label>
                  <a className="waves-effect waves-light btn right" id="save5" style={{marginLeft: 10, backgroundColor: 'whitesmoke', color: 'grey'}}>Save</a>
                  <a className="waves-effect waves-light btn right" id="skip5" style={{backgroundColor: 'whitesmoke', color: 'grey'}}>Skip</a>
                </div>
              </div>
              <div className="col s3 m3" />
            </div>
            <br /><br /><br /><br />
          </div>
          {/*Question 5 End*/}
          {/*Question Hint 5 Start*/}
          <div className="section" id="question_hint5">
            <div className="row">
              <div className="col s4 m4" />
              <div className="col s4 m4">
                <div className="center">
                  <i className="material-icons center" onclick="M.toast({html: 'This question is required', classes: 'rounded', displayLength: '1000'})" id="dropDownHint">keyboard_arrow_down</i> </div>
              </div>
              <div className="col s4 m4" />
            </div>
          </div>
          {/*Question Hint 5 End*/}
          {/*Question 6 Start*/}
          <div className="section" id="question_six">
            <div className="row">
              <div className="col s4 m4" />
              <div className="col s4 m4">
                <div className="center">
                  <i className="material-icons center tooltipped" data-position="top" data-tooltip="This question is required" id="dropDownIcon6">keyboard_arrow_down</i>
                </div>
              </div>
              <div className="col s4 m4" />
            </div>
            <h2 className="center" style={{color: 'black', fontWeight: 'bolder'}}>06.</h2>
            <h4 className="center">I would highly recommend my manager to others.
            </h4>
            <div className="row">
              <div className="col s3 m3" />
              <div className="col s6 m6">
                <br />
                {/*Range Slider*/}
                <div className="center">
                  <form action="#">
                    <p className="range-field">
                      <input type="range" id="test6" min={1} max={5} />
                    </p>
                  </form>
                </div>
                {/*Comment Field*/}
                <div className="input-field" id="comment6">
                  <textarea id="textarea6" className="materialize-textarea" style={{padding: 10}} defaultValue={""} />
                  <label htmlFor="textarea6" style={{textIndent: 10, fontFamily: '"proxima nova"'}}>Please free to add
                    your comments here
                  </label>
                  <a className="waves-effect waves-light btn right" id="save6" style={{marginLeft: 10, backgroundColor: 'whitesmoke', color: 'grey'}}>Save</a>
                  <a className="waves-effect waves-light btn right" id="skip6" style={{backgroundColor: 'whitesmoke', color: 'grey'}}>Skip</a>
                </div>
              </div>
              <div className="col s3 m3" />
            </div>
            <br /><br /><br /><br />
          </div>
          {/*Question 6 End*/}
          {/*Question Hint 6 Start*/}
          <div className="section" id="question_hint6">
            <div className="row">
              <div className="col s4 m4" />
              <div className="col s4 m4">
                <div className="center">
                  <i className="material-icons center" onclick="M.toast({html: 'This question is required', classes: 'rounded', displayLength: '1000'})" id="dropDownHint">keyboard_arrow_down</i> </div>
              </div>
              <div className="col s4 m4" />
            </div>
          </div>
          {/*Question Hint 6 End*/}
          {/*Question 7 Start*/}
          <div className="section" id="question_seven">
            <div className="row">
              <div className="col s4 m4" />
              <div className="col s4 m4">
                <div className="center">
                  <i className="material-icons center tooltipped" data-position="top" data-tooltip="This question is required" id="dropDownIcon7">keyboard_arrow_down</i>
                </div>
              </div>
              <div className="col s4 m4" />
            </div>
            <h2 className="center" style={{color: 'black', fontWeight: 'bolder'}}>07.</h2>
            <h4 className="center">I feel confident that my manager is the right person for the job.
            </h4>
            <div className="row">
              <div className="col s3 m3" />
              <div className="col s6 m6">
                <br />
                {/*Range Slider*/}
                <div className="center">
                  <form action="#">
                    <p className="range-field">
                      <input type="range" id="test7" min={1} max={5} />
                    </p>
                  </form>
                </div>
                {/*Comment Field*/}
                <div className="input-field" id="comment7">
                  <textarea id="textarea7" className="materialize-textarea" style={{padding: 10}} defaultValue={""} />
                  <label htmlFor="textarea7" style={{textIndent: 10, fontFamily: '"proxima nova"'}}>Please free to add
                    your comments here
                  </label>
                  <a className="waves-effect waves-light btn right" id="save7" style={{marginLeft: 10, backgroundColor: 'whitesmoke', color: 'grey'}}>Save</a>
                  <a className="waves-effect waves-light btn right" id="skip7" style={{backgroundColor: 'whitesmoke', color: 'grey'}}>Skip</a>
                </div>
              </div>
              <div className="col s3 m3" />
            </div>
            <br /><br /><br /><br />
          </div>
          {/*Question 7 End*/}
          {/*Question Hint 7 Start*/}
          <div className="section" id="question_hint7">
            <div className="row">
              <div className="col s4 m4" />
              <div className="col s4 m4">
                <div className="center">
                  <i className="material-icons center" onclick="M.toast({html: 'This question is required', classes: 'rounded', displayLength: '1000'})" id="dropDownHint">keyboard_arrow_down</i> </div>
              </div>
              <div className="col s4 m4" />
            </div>
          </div>
          {/*Question Hint 7 End*/}
          {/*Question 8 Start*/}
          <div className="section" id="question_eight">
            <div className="row">
              <div className="col s4 m4" />
              <div className="col s4 m4">
                <div className="center">
                  <i className="material-icons center tooltipped" data-position="top" data-tooltip="This question is required" id="dropDownIcon8">keyboard_arrow_down</i>
                </div>
              </div>
              <div className="col s4 m4" />
            </div>
            <h2 className="center" style={{color: 'black', fontWeight: 'bolder'}}>08.</h2>
            <h4 className="center">What else is on your mind?
            </h4>
            <div className="row">
              <div className="col s3 m3" />
              <div className="col s6 m6">
                <br />
                {/*Comment Field*/}
                <div className="input-field" id="comment8">
                  <textarea id="textarea8" className="materialize-textarea" style={{padding: 10}} defaultValue={""} />
                  <label htmlFor="textarea8" style={{textIndent: 10, fontFamily: '"proxima nova"'}}>Please free to add
                    your comments here
                  </label>
                </div>
              </div>
              <div className="col s3 m3" />
            </div>
          </div>
          {/*Question 8 End*/}
        </div>
        <div className="center" id="submitBtn">
          <button type="submit" data-target="modal1" className="waves-effect waves-light btn modal-trigger" id="submit" style={{backgroundColor: 'darkcyan'}}>
            Submit Responses</button>
          <br />
          <br />
        </div>
      </div>

    );
  }
}

export default Data;