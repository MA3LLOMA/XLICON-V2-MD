const _0x3253a9=_0x1a03;(function(_0x2883a0,_0x4cc760){const _0x1d3391=_0x1a03,_0x3577b6=_0x2883a0();while(!![]){try{const _0x387220=-parseInt(_0x1d3391(0x1f0))/0x1+parseInt(_0x1d3391(0x1fb))/0x2+parseInt(_0x1d3391(0x1ec))/0x3*(-parseInt(_0x1d3391(0x207))/0x4)+parseInt(_0x1d3391(0x208))/0x5*(-parseInt(_0x1d3391(0x1f4))/0x6)+-parseInt(_0x1d3391(0x206))/0x7+parseInt(_0x1d3391(0x20d))/0x8+-parseInt(_0x1d3391(0x1f3))/0x9*(-parseInt(_0x1d3391(0x20c))/0xa);if(_0x387220===_0x4cc760)break;else _0x3577b6['push'](_0x3577b6['shift']());}catch(_0x2f7f22){_0x3577b6['push'](_0x3577b6['shift']());}}}(_0x5009,0x1d02e));import _0x50cda0 from'youtubedl-core';import _0x57ff77 from'youtube-yts';import _0x38e0ef from'fs';function _0x5009(){const _0x4dbfaf=['\x0a\x0a\x20\x20⬡▸\x20\x20Views:\x20','1716760ZlbOTY','1007680MpcORn','get','data','sendMessage','highestaudio','\x0a\x0a\x20\x20⬡▸\x20\x20Duration:\x20','tags','log','command','3hWcZQU','chat','unlink','play','59303tMIDav','/ytsearch?text=','exp','18WIThZl','6ieEJAI','Use\x20example\x20','createWriteStream','\x20<query>','audioonly','\x20Jesus\x20take\x20the\x20the\x20wheel','help','286810GGQCqf','\x0a\x0a\x20\x20⬡▸\x20\x20Link:\x20','.mp3','Video\x20Not\x20Found,\x20Try\x20Another\x20Title','audio/mpeg','error','An\x20error\x20occurred\x20while\x20searching\x20for\x20YouTube\x20videos.','⬡▸\x20\x20••๑⋯\x20⬡▸\x20\x20Y\x20O\x20U\x20T\x20U\x20B\x20E\x20⬡▸\x20\x20⋯⋅๑••\x20✼\x0a\x0a\x20\x20⬡▸\x20\x20Title:\x20','HERE\x20IS\x20YOUR\x20SONG\x20MADE\x20BY\x20XLICON-v2','map','getFile','1494038bAMPnx','151324FVDdTQ','916595mvWOtY','\x0a\x0a*تابع صاحب البوت في الإنستجرام ❤️* \n www.instagram.com/ovmar_1\x20','\x0a\x0a\x20\x20⬡▸\x20\x20Upload:\x20'];_0x5009=function(){return _0x4dbfaf;};return _0x5009();}import{pipeline}from'stream';import{promisify}from'util';import _0x3a2d8e from'os';import _0x3bc163 from'axios';const streamPipeline=promisify(pipeline);function _0x1a03(_0x1e299f,_0xa8c68d){const _0x50093b=_0x5009();return _0x1a03=function(_0x1a030c,_0x27fb0b){_0x1a030c=_0x1a030c-0x1e7;let _0x298cc7=_0x50093b[_0x1a030c];return _0x298cc7;},_0x1a03(_0x1e299f,_0xa8c68d);}let handler=async(_0x43906c,{conn:_0x26fee2,command:_0x354e95,text:_0x5cdfdf,usedPrefix:_0x573938})=>{const _0x197d79=_0x1a03;if(!_0x5cdfdf)throw _0x197d79(0x1f5)+_0x573938+_0x354e95+_0x197d79(0x1f9);await _0x43906c['react'](rwait);try{const _0x17e828=encodeURIComponent(_0x5cdfdf),_0x13f860=await _0x3bc163[_0x197d79(0x20e)](gurubot+_0x197d79(0x1f1)+_0x17e828),_0x75cc9e=_0x13f860[_0x197d79(0x20f)]['results'][0x0];if(!_0x75cc9e)throw _0x197d79(0x1fe);const {title:_0x58a8ba,thumbnail:_0x5aedc7,duration:_0x528127,views:_0x4bb1f8,uploaded:_0xebf7da,url:_0x41263a}=_0x75cc9e,_0x50e588=_0x197d79(0x202)+_0x58a8ba+_0x197d79(0x1e8)+_0x528127+_0x197d79(0x20b)+_0x4bb1f8+_0x197d79(0x20a)+_0xebf7da+_0x197d79(0x1fc)+_0x41263a+_0x197d79(0x209);_0x26fee2['sendMessage'](_0x43906c[_0x197d79(0x1ed)],{'image':{'url':_0x5aedc7},'caption':_0x50e588,'footer':author},{'quoted':_0x43906c});const _0x1bee45=_0x50cda0(_0x41263a,{'filter':_0x197d79(0x1f8),'quality':_0x197d79(0x1e7)}),_0x3110a4=_0x3a2d8e['tmpdir'](),_0x3fce7c=_0x38e0ef[_0x197d79(0x1f6)](_0x3110a4+'/'+_0x58a8ba+'.mp3');await streamPipeline(_0x1bee45,_0x3fce7c);const _0x4d6458={'audio':{'url':_0x3110a4+'/'+_0x58a8ba+_0x197d79(0x1fd)},'mimetype':_0x197d79(0x1ff),'ptt':![],'waveform':[0x64,0x0,0x0,0x0,0x0,0x0,0x64],'fileName':''+_0x58a8ba,'contextInfo':{'externalAdReply':{'showAdAttribution':!![],'mediaType':0x2,'mediaUrl':_0x41263a,'title':_0x58a8ba,'body':_0x197d79(0x203),'sourceUrl':_0x41263a,'thumbnail':await(await _0x26fee2[_0x197d79(0x205)](_0x5aedc7))[_0x197d79(0x20f)]}}};await _0x26fee2[_0x197d79(0x210)](_0x43906c[_0x197d79(0x1ed)],_0x4d6458,{'quoted':_0x43906c}),_0x38e0ef[_0x197d79(0x1ee)](_0x3110a4+'/'+_0x58a8ba+'.mp3',_0x489c76=>{const _0x3b11f8=_0x197d79;_0x489c76?console['error']('Failed\x20to\x20delete\x20audio\x20file:\x20'+_0x489c76):console[_0x3b11f8(0x1ea)]('Deleted\x20audio\x20file:\x20'+_0x3110a4+'/'+_0x58a8ba+_0x3b11f8(0x1fd));});}catch(_0x262440){console[_0x197d79(0x200)](_0x262440);throw _0x197d79(0x201);}};handler[_0x3253a9(0x1fa)]=[_0x3253a9(0x1ef)][_0x3253a9(0x204)](_0x43196a=>_0x43196a+_0x3253a9(0x1f7)),handler[_0x3253a9(0x1e9)]=['downloader'],handler[_0x3253a9(0x1eb)]=/^play$/i,handler[_0x3253a9(0x1f2)]=0x0;export default handler;