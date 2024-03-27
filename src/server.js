import { connect } from 'socket.io-client';
const socketUrl = 'http://159.89.164.11:3535';
// const socketUrl = 'http://192.168.1.15:3132'; 
export const socket = connect(socketUrl);