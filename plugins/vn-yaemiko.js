import util from "util";
import path from "path";

let handler = async (m, { conn }) => {
	let vn = "./mp3/kenapa.mp3";
	conn.sendFile(m.chat, vn, "kenapa.mp3", null, m, true, {
		type: "audioMessage",
		ptt: true,
	});
};
handler.customPrefix =
	/^(xel|sel|xell|sell|axel|axell|Sell|sell|Xell|Xel|Axel|Axell)$/i;
handler.command = new RegExp();

export default handler;
