import util from "util";
import path from "path";

let handler = async (m, { conn }) => {
	conn.sendFile(m.chat, `${salam.getRandom()}`, "salam.mp3", null, m, true, {
		type: "audioMessage",
		ptt: true,
	});
};
handler.customPrefix =
	/^(assalamualaikum|salam|asalamualaikum|assalam|asalam|salam|salom|shalom)$/i;
handler.command = new RegExp();

export default handler;

const salam = [
"./mp3/salam.mp3",
"./mp3/salam1.mp3"
]