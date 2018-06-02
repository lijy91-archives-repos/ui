import React, { Component } from 'react';
import {
  HyperlinkButton,
  Modal,
  Text,
  View,
} from '@blankapp/ui';
import DemoScreen from '../../components/DemoScreen';

class DemoModal extends Component {
  static navigationOptions = {
    title: 'Modal',
  };

  constructor(props) {
    super(props);

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);

    this.state = {
      modalVisible: false,
    };
  }

  openModal() {
    this.setState({ modalVisible: true });
  }

  closeModal() {
    this.setState({ modalVisible: false });
  }

  renderHeader() {
    return (
      <View>
        <HyperlinkButton
          text="Open"
          onPress={this.openModal}
        />
        <Modal
          visible={this.state.modalVisible}
        >
          <View>
            <HyperlinkButton
              text="Close"
              onPress={this.closeModal}
            />
          </View>
        </Modal>
      </View>
    );
  }

  renderContent() {
    return (
      <View>
        <Text>No demos</Text>
      </View>
    );
  }

  render() {
    return (
      <DemoScreen
        HeaderComponent={() => this.renderHeader()}
        ContentComponent={() => this.renderContent()}
      />
    );
  }
}

export default DemoModal;
