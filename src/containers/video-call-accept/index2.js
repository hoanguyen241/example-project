import React, { Component } from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity, ImageBackground  } from 'react-native';
import Button from '../../components/Button';
import Loading from '../../components/Loading';
import NewsItem from '../../components/NewsItem';
import SwitchComponent from '../../components/Switch';
import styles from './styles';
import { connect } from 'react-redux';
import Sound from 'react-native-sound';
import Video from 'react-native-video';
import { AudioRecorder, AudioUtils } from 'react-native-audio';

class VideoCallAcceptScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {  };
  }

  render() {
    const img1 = 'https://www.thesprucepets.com/thmb/jbD_0GJnIVGmnLve7QDe9hCDbPU=/960x0/filters:no_upscale():max_bytes(150000):strip_icc()/Stocksy_txp33a24e10lxw100_Medium_214761-5af9d6d7875db900360440a7.jpg';
    const img2 = 'https://img.icons8.com/windows/64/000000/no-mobile-devices--v2.png';
    const img3 = 'https://img.icons8.com/metro/52/000000/high-volume.png';
    const img4 = 'https://img.icons8.com/ios/50/000000/send-comment.png';
    const img5 = 'https://img.icons8.com/metro/26/000000/micro.png';

 // Enable playback in silence mode
Sound.setCategory('Playback');

// Load the sound file 'whoosh.mp3' from the app bundle
// See notes below about preloading sounds within initialization code below.
var whoosh = new Sound(require('./testMp3.mp3'), Sound.MAIN_BUNDLE, (error) => {
  if (error) {
    console.log('failed to load the sound', error);
    return;
  }
  // loaded successfully
  console.log('duration in seconds: ' + whoosh.getDuration() + 'number of channels: ' + whoosh.getNumberOfChannels());

  // Play the sound with an onEnd callback
  whoosh.play((success) => {
    if (success) {
      console.log('successfully finished playing');
    } else {
      console.log('playback failed due to audio decoding errors');
    }
  });
});

// Reduce the volume by half
whoosh.setVolume(0.5);

// Position the sound to the full right in a stereo field
whoosh.setPan(1);

// Loop indefinitely until stop() is called
whoosh.setNumberOfLoops(-1);

// Get properties of the player instance
console.log('volume: ' + whoosh.getVolume());
console.log('pan: ' + whoosh.getPan());
console.log('loops: ' + whoosh.getNumberOfLoops());

// Seek to a specific point in seconds
whoosh.setCurrentTime(2.5);

// Get the current playback point in seconds
whoosh.getCurrentTime((seconds) => console.log('at ' + seconds));

// Pause the sound
whoosh.pause();

// Stop the sound and rewind to the beginning
whoosh.stop(() => {
  // Note: If you want to play a sound after stopping and rewinding it,
  // it is important to call play() in a callback.
  whoosh.play();
});

// Release the audio player resource
whoosh.release();

    return (
      <View style={styles.container}>
        <View style={styles.viewName}>
          <Text style={styles.txtName}>Sergey The Cat</Text>
          <Text style={styles.txtToCall}>00:05</Text>
        </View>
        <View style={styles.imgUser}>
          {/* <Image source={{uri: img1}} style={styles.img1} /> */}
          {/* <Video source={require('./test.mp4')}   // Can be a URL or a local file.
            ref={(ref) => {
              this.player = ref
            }}                                      // Store reference
            rate={1.0}                              // 0 is paused, 1 is normal.
            volume={1.0}                            // 0 is muted, 1 is normal.
            muted={false}                           // Mutes the audio entirely.
            paused={false}                          // Pauses playback entirely.
            resizeMode="cover"                      // Fill the whole screen at aspect ratio.*
            repeat={true}                           // Repeat forever.
            playInBackground={false}                // Audio continues to play when app entering background.
            playWhenInactive={false}                // [iOS] Video continues to play when control or notification center are shown.
            ignoreSilentSwitch={"ignore"}           // [iOS] ignore | obey - When 'ignore', audio will still play with the iOS hard silent switch set to silent. When 'obey', audio will toggle with the switch. When not specified, will inherit audio settings as usual.
            progressUpdateInterval={250.0}          // [iOS] Interval to fire onProgress (default to ~250ms)
            onLoadStart={this.loadStart}            // Callback when video starts to load
            onLoad={this.setDuration}               // Callback when video loads
            onProgress={this.setTime}               // Callback every ~250ms with currentTime
            onEnd={this.onEnd}                      // Callback when playback finishes
            onError={this.videoError}               // Callback when video cannot be loaded
            onBuffer={this.onBuffer}                // Callback when remote video is buffering
            onTimedMetadata={this.onTimedMetadata}  // Callback when the stream receive some metadata
            style={styles.backgroundVideo} /> */}
        </View>
        <View style={styles.btns}>
          <View  style={styles.btns2}>
            <TouchableOpacity style={styles.btnCancel2} onPress={()=>{this.player.presentFullscreenPlayer()}}>
              <Image source={{uri: img5}} style={styles.imgCancel2} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.btnCancel2} onPress={()=>{this.player.seek(0)}}>
              <Image source={{uri: img4}} style={styles.imgCancel2} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.btnCancel2} onPress={()=>{}}>
              <Image source={{uri: img3}} style={styles.imgCancel2} />
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={styles.btnCancel}>
            <Image source={{uri: img2}} style={styles.imgCancel2} />
          </TouchableOpacity>
        </View>
      </View >
    );
  }
}

export default VideoCallAcceptScreen;