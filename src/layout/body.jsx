import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { Icon, Input, TransitionablePortal, Segment, Header } from 'semantic-ui-react'
import { stateSidebar } from 'actions/sidebar'

import Footer from './footer'

class Body extends Component {
  state = {
    item1: false,
    item2: false,
    item3: false,
    item4: false,
    item5: false,
  }

  componentDidMount() {
    console.log('Body1')
  }

  handleClickShow = (name) => {
    this.setState(prevState => (
      {
        [name]: !prevState[name],
      }
    ))
  }

  handleClickClose = (name) => {
    this.setState({
      [name]: false,
    })
  }

  render() {
    const { item1, item2, item3, item4, item5 } = this.state
    const { children } = this.props
    return (
      <Fragment>
        <div className="body">
          <div className="head-body">
            <div className="head-body-left">
              <Input
                loading
                icon="user"
                placeholder="Search..."
                className="input-search"
              />
            </div>
            <div className="head-body-right">
              <span onClick={() => this.handleClickShow('item1')}>
                <Icon name="home head-items" />&nbsp;
                <TransitionablePortal
                  onClose={() => this.handleClickClose('item1')}
                  transition={{
                    animation: 'fade down',
                    duration: 500,
                  }}
                  open={item1}
                >
                  <Segment className="header-items-show">
                    <Header>This is a controlled portal</Header>
                    <p>1</p>
                  </Segment>
                </TransitionablePortal>
              </span>
              <span onClick={() => this.handleClickShow('item2')}>
                <Icon name="comment alternate outline head-items" />&nbsp;
                <TransitionablePortal
                  onClose={() => this.handleClickClose('item2')}
                  transition={{
                    animation: 'fade down',
                    duration: 500,
                  }}
                  open={item2}
                >
                  <Segment className="header-items-show">
                    <Header>This is a controlled portal</Header>
                    <p>2</p>
                  </Segment>
                </TransitionablePortal>
              </span>
              <span onClick={() => this.handleClickShow('item3')}>
                <Icon name="bell outline head-items" />&nbsp;
                <TransitionablePortal
                  onClose={() => this.handleClickClose('item3')}
                  transition={{
                    animation: 'fade down',
                    duration: 500,
                  }}
                  open={item3}
                >
                  <Segment className="header-items-show">
                    <Header>This is a controlled portal</Header>
                    <p>3</p>
                  </Segment>
                </TransitionablePortal>
              </span>
              <span onClick={() => this.handleClickShow('item4')}>
                <Icon name="settings head-items" />&nbsp;
                <TransitionablePortal
                  onClose={() => this.handleClickClose('item4')}
                  transition={{
                    animation: 'fade down',
                    duration: 500,
                  }}
                  open={item4}
                >
                  <Segment className="header-items-show">
                    <Header>This is a controlled portal</Header>
                    <p>4</p>
                  </Segment>
                </TransitionablePortal>
              </span>
              <span onClick={() => this.handleClickShow('item5')}>
                <Icon name="question head-items" />&nbsp;
                <TransitionablePortal
                  onClose={() => this.handleClickClose('item5')}
                  transition={{
                    animation: 'fade down',
                    duration: 500,
                  }}
                  open={item5}
                >
                  <Segment className="header-items-show">
                    <Header>This is a controlled portal</Header>
                    <p>5</p>
                  </Segment>
                </TransitionablePortal>
              </span>
            </div>
          </div>
          <div className="body-content">
            {children}
          </div>
        </div>
        <Footer />
      </Fragment>
    )
  }
}
const mapStateToProps = state => ({
  side: state,
})

const mapDispatchToProps = dispatch => ({
  setStateSide: value => dispatch(stateSidebar(value)),
})

const Main = connect(mapStateToProps, mapDispatchToProps)(Body)

export default Main
