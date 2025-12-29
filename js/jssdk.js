"use strict";
var trueurl, _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
	return typeof e
} : function(e) {
	return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
};

function setupWebViewJavascriptBridge(e) {
	if (window.WebViewJavascriptBridge) return e(WebViewJavascriptBridge);
	if (window.WVJBCallbacks) return window.WVJBCallbacks.push(e);
	window.WVJBCallbacks = [e];
	var t = window.navigator.userAgent;
	if (/MiniProgram/.test(t));
	else {
		var i = document.createElement("iframe");
		i.style.display = "none", i.src = "ddjsscheme://__bridge_loaded__", document.documentElement.appendChild(i),
			setTimeout(function() {
				document.documentElement.removeChild(i)
			}, 0)
	}
}

function networkType(e) {
	_executeFuction("networkType", e)
}

function getUserID(e) {
	_executeFuction("getUserID", e)
}

function getUserInfo(e) {
	_executeFuction("getUserInfo", e)
}

function registerUser(e) {
	_executeFuction("registerUser", e)
}

function modifyPassword(e) {
	_executeFuction("modifyPassword", e)
}

function loginApp(e) {
	_executeFuction("loginApp", e)
}

function logout(e) {
	_executeFuction("logout", e)
}

function loginQQ(e) {
	_executeFuction("loginQQ", e)
}

function logoutQQ(e) {
	_executeFuction("logoutQQ", e)
}

function loginTencentWeibo(e) {
	_executeFuction("loginTencentWeibo", e)
}

function logoutTencentWeibo() {
	_executeFuction("loginTencentWeibo", options)
}

function loginSinaWeibo(e) {
	_executeFuction("loginSinaWeibo", e)
}

function logoutSinaWeibo(e) {
	_executeFuction("logoutSinaWeibo", e)
}

function getUUID(e) {
	_executeFuction("getUUID", e)
}

function getDistance(e) {
	_executeFuction("getDistance", e)
}

function getlocation(e) {
	_executeFuction("getLocation", e)
}

function getLocation(e) {
	_executeFuction("getLocation", e)
}

function chooseImage(e) {
	_executeFuction("chooseImage", e)
}

function chooseVideo(e) {
	_executeFuction("chooseVideo", e)
}

function chooseVideoAndPic(e) {
	_executeFuction("chooseVideoAndPic", e)
}

function startVoice(e) {
	_executeFuction("startVoice", e)
}

function stopVoice(e) {
	_executeFuction("stopVoice", e)
}

function playVoice(e) {
	_executeFuction("playVoice", e)
}

function stopPlayVoice(e) {
	_executeFuction("stopPlayVoice", e)
}

function getQRCode(e) {
	_executeFuction("getQRCode", e)
}

function share(e) {
	_executeFuction("share", e)
}

function pay(e) {
	_executeFuction("pay", e)
}

function setItem(e) {
	_executeFuction("setItem", e)
}

function getItem(e) {
	_executeFuction("getItem", e)
}

function removeItem(e) {
	_executeFuction("removeItem", e)
}

function showOrHiddenNav(e) {
	_executeFuction("showOrHiddenNav", e)
}

function submit(e) {
	_executeFuction("submit", e)
}

function callPhone(e) {
	_executeFuction("callPhone", e)
}

function sendMessage(e) {
	_executeFuction("sendMessage", e)
}

function sendEmail(e) {
	_executeFuction("sendEmail", e)
}

function faceIdentification(e) {
	_executeFuction("faceIdentification", e)
}

function alipayIdentification(e) {
	_executeFuction("alipayIdentification", e)
}

function closeWindow(e) {
	_executeFuction("closeWindow", e)
}

function onShowOrHiddenNav(e) {
	_executeFuction("onShowOrHiddenNav", e)
}

function _executeFuction(e, t) {
	dd.isInit ? window["_" + e] && window["_" + e](t) : dd && setupWebViewJavascriptBridge(function() {
		window.WebViewJavascriptBridge.init && (dd.isInit || window.WebViewJavascriptBridge.init(function(e, t) {})), dd.isInit = !
			0, setTimeout(function() {
				window["_" + e] && window["_" + e](t)
			}, 100)
	})
}

function _networkType(t) {
	dd.device.connection.getNetworkType({
		onSuccess: function(e) {
			t && t.success && t.success(JSON.stringify(e))
		},
		onFail: function(e) {
			t && t.fail && t.fail(e)
		}
	})
}

function _getUserID(i) {
	dd.biz.user.getUserInfo({
		onSuccess: function(e) {
			var t = {
				userid: e.userid
			};
			e.appConEntUniCode && (t.appConEntUniCode = e.appConEntUniCode, t.uniscid = e.uniscid), i && i.success && i.success(
				JSON.stringify(t))
		},
		onFail: function(e) {
			i && i.fail && i.fail(e)
		}
	})
}

function _getUserInfo(i) {
	dd.biz.user.getUserInfo({
		onSuccess: function(e) {
			var t = e.sex;
			e.sex = "濂�" == t ? "2" : "1", i && i.success && i.success(JSON.stringify(e))
		},
		onFail: function(e) {
			i && i.fail && i.fail(e)
		}
	})
}

function _registerUser(e) {
	alert("registerUser method not realize in [dd] environment!")
}

function _modifyPassword(e) {
	alert("modifyPassword method not realize in [dd] environment!")
}

function _loginApp(e) {
	alert("loginApp method not realize in [dd] environment!")
}

function _logout(e) {
	alert("logout method not realize in [dd] environment!")
}

function _loginQQ(e) {
	alert("loginQQ method not realize in [dd] environment!")
}

function _logoutQQ(e) {
	alert("logoutQQ method not realize in [dd] environment!")
}

function _loginTencentWeibo(e) {
	alert("loginTencentWeibo method not realize in [dd] environment!")
}

function _logoutTencentWeibo(e) {
	alert("logoutTencentWeibo method not realize in [dd] environment!")
}

function _loginSinaWeibo(e) {
	alert("loginSinaWeibo method not realize in [dd] environment!")
}

function _logoutSinaWeibo(e) {
	alert("logoutSinaWeibo method not realize in [dd] environment!")
}

function _getUUID(t) {
	dd.device.base.getUUID({
		onSuccess: function(e) {
			t && t.success && t.success(e)
		},
		onFail: function(e) {
			t && t.fail && t.fail(e)
		}
	})
}

function _getDistance(e) {
	alert("getDistance method not realize in [dd] environment!")
}

function _getLocation(t) {
	dd.device.location.get({
		onSuccess: function(e) {
			t && t.success && t.success(e)
		},
		onFail: function(e) {
			t && t.fail && t.fail(e)
		}
	})
}

function _chooseImage(i) {
	dd.device.notification.chooseImage({
		size: i.arg,
		onSuccess: function(e) {
			var t = {
				result: "true",
				picPath: e.picPath
			};
			i && i.success && i.success(t)
		},
		onFail: function(e) {
			i && i.fail && i.fail(e)
		}
	})
}

function _chooseVideo(e) {
	alert("chooseVideo method not realize in [dd] environment!")
}

function _chooseVideoAndPic(i) {
	dd.device.notification.chooseImage({
		size: i.arg,
		onSuccess: function(e) {
			var t = {
				result: "true",
				picPath: e.picPath,
				videoPath: ""
			};
			i && i.success && i.success(t)
		},
		onFail: function(e) {
			i && i.fail && i.fail(e)
		}
	})
}

function _startVoice(t) {
	dd.device.audio.startRecord({
		localAudioId: "localAudioId",
		onSuccess: function(e) {
			t && t.success && t.success(JSON.stringify(e))
		},
		onFail: function(e) {
			t && t.fail && t.fail(e)
		}
	})
}

function _stopVoice(t) {
	dd.device.audio.stopRecord({
		onSuccess: function(e) {
			t && t.success && t.success(JSON.stringify(e))
		},
		onFail: function(e) {
			t && t.fail && t.fail(e)
		}
	})
}

function _playVoice(t) {
	dd.device.audio.play({
		localAudioId: "localAudioId",
		onSuccess: function(e) {
			t && t.success && t.success(JSON.stringify(e))
		},
		onFail: function(e) {
			t && t.fail && t.fail(e)
		}
	})
}

function _stopPlayVoice(t) {
	dd.device.audio.stop({
		localAudioId: "localAudioId",
		onSuccess: function(e) {
			t && t.success && t.success(JSON.stringify(e))
		},
		onFail: function(e) {
			t && t.fail && t.fail(e)
		}
	})
}

function _getQRCode(t) {
	dd.biz.util.scan({
		type: "qrCode",
		onSuccess: function(e) {
			t && t.success && t.success(e.qrcode)
		},
		onFail: function(e) {
			t && t.fail && t.fail(e)
		}
	})
}

function _share(t) {
	dd.biz.util.share({
		arg: t.arg,
		onSuccess: function(e) {
			t && t.success && t.success(JSON.stringify(e))
		},
		onFail: function(e) {
			t && t.fail && t.fail(e)
		}
	})
}

function _pay(e) {
	alert("pay method not realize in [dd] environment!")
}

function _setItem(t) {
	var i = setTimeout(function() {
		t && t.success && t.success(t.key)
	}, 500);
	dd.util.localStorage.setItem({
		key: t.key,
		value: t.value,
		onSuccess: function(e) {
			clearTimeout(i), t && t.success && t.success(JSON.stringify(e))
		},
		onFail: function(e) {
			t && t.fail && t.fail(e)
		}
	})
}

function _getItem(t) {
	dd.util.localStorage.getItem({
		key: t.key,
		onSuccess: function(e) {
			t && t.success && t.success(e[t.key])
		},
		onFail: function(e) {
			t && t.fail && t.fail(e)
		}
	})
}

function _removeItem(t) {
	var i = setTimeout(function() {
		t && t.success && t.success(t.key)
	}, 500);
	dd.util.localStorage.removeItem({
		key: t.key,
		onSuccess: function(e) {
			clearTimeout(i), t && t.success && t.success(JSON.stringify(e))
		},
		onFail: function(e) {
			t && t.fail && t.fail(e)
		}
	})
}

function _showOrHiddenNav(e) {}

function _submit(e) {
	alert("submit method not realize in [dd] environment!")
}

function _callPhone(t) {
	dd.biz.telephone.call({
		users: ["101", "102"],
		corpId: t.phone,
		onSuccess: function(e) {
			t && t.success && t.success(JSON.stringify(e))
		},
		onFail: function(e) {
			t && t.fail && t.fail(e)
		}
	})
}

function _sendMessage() {
	alert("sendMessage method not realize in [dd] environment!")
}

function _sendEmail() {
	alert("sendEmail method not realize in [dd] environment!")
}

function _faceIdentification() {
	alert("faceIdentification method not realize in [dd] environment!")
}

function _alipayIdentification() {
	alert("alipayIdentification method not realize in [dd] environment!")
}

function _closeWindow() {
	dd.biz.navigation.close({
		onSuccess: function(e) {
			options && options.success && options.success(JSON.stringify(e))
		},
		onFail: function(e) {
			options && options.fail && options.fail(e)
		}
	})
}

function _onShowOrHiddenNav() {}

function config(e, t) {
	alert("config called");
	var i = window.location.href;
	$.ajax("http://app.zjzwfw.gov.cn/jmopen/interfaces/checklightvalid.do", {
		data: {
			urlString: i,
			key: e,
			secret: t
		},
		dataType: "json",
		type: "post",
		async: !1,
		timeout: 1e4,
		success: function(e) {
			alert("success called" + e), "false" == e.isvalid || (trueurl = e.urldomain)
		},
		error: function(e) {}
	})
}

function containerType() {
	var e = navigator.userAgent.toLowerCase(),
		t = (e.match(/ipad/i), e.match(/iphone os/i), e.match(/midp/i), e.match(/rv:1.2.3.4/i), e.match(/ucweb/i), e.match(
			/android/i), e.match(/windows ce/i), e.match(/windows mobile/i), -1 < e.indexOf("hanweb")),
		i = -1 < e.indexOf("micromessenger"),
		n = -1 < e.indexOf("alipayclient");
	return t ? "hanweb" : i ? "wetchat" : n ? "Alipay" : "web"
}

function getUserInfoString(e, t) {
	_executeFuction("getUserInfoString", {
		success: e,
		fail: t
	})
}

function getQRCodeString(e, t) {
	_executeFuction("getQRCode", {
		success: e,
		fail: t
	})
}

function _getUserInfoString(t) {
	dd.biz.user.getUserInfo({
		onSuccess: function(e) {
			t && t.success && t.success(JSON.stringify(e))
		},
		onFail: function(e) {
			t && t.fail && t.fail(e)
		}
	})
}

function getUserType(e) {
	_executeFuction("getUserType", e)
}

function _getUserType(i) {
	dd.biz.user.getUserInfo({
		onSuccess: function(e) {
			var t = {
				userType: 1
			};
			e.appConEntUniCode && (t.userType = 2), i && i.success && i.success(JSON.stringify(t))
		},
		onFail: function(e) {
			i && i.fail && i.fail(e)
		}
	})
}

function ddBridge() {
	if (window.dd = {}, function(e) {
			function v(e, t, i) {
				for (var n in t) e[n] = i ? t[n] : void 0 !== e[n] ? e[n] : t[n]
			}
			var t = e.navigator.userAgent,
				i = t.match(/AliApp\(\w+\/([a-zA-Z0-9.-]+)\)/);
			null === i && (i = t.match(/DingTalk\/([a-zA-Z0-9.-]+)/));
			var n = i && i[1],
				h = null,
				y = {
					isInit: !1,
					ios: !0,
					android: !1,
					version: n,
					support: "1.2.2" === n || "1.3.2" === n,
					ability: "",
					config: function(e) {
						e && (h = {
							corpId: e.corpId,
							appId: e.appId || -1,
							timeStamp: e.timeStamp,
							nonceStr: e.nonceStr,
							signature: e.signature,
							jsApiList: e.jsApiList
						}, e.agentId && (h.agentId = e.agentId))
					},
					error: function(e) {
						e
					},
					type: function(e) {
						return Object.prototype.toString.call(e).match(/^\[object\s(.*)\]$/)[1]
					},
					compareVersion: function(e, t, i) {
						if ("string" != typeof e || "string" != typeof t) return !1;
						for (var n, o, c = e.split("."), a = t.split("."); n === o && 0 < a.length;) n = c.shift(), o = a.shift();
						return i ? (0 | n) <= (0 | o) : (0 | n) < (0 | o)
					}
				},
				o = function(e, t) {
					for (var i = e.split("."), n = y, o = 0, c = i.length; o < c; o++) o === c - 1 && (n[i[o]] = t), void 0 === n[i[o]] &&
						(n[i[o]] = {}), n = n[i[o]]
				};
			["device.notification.alert", "device.notification.confirm", "device.notification.prompt",
				"device.notification.vibrate", "device.accelerometer.watchShake", "device.accelerometer.clearShake",
				"biz.util.open", "biz.util.openLink", "biz.util.share", "biz.util.ut", "biz.util.datepicker", "biz.util.timepicker",
				"biz.user.get", "biz.navigation.setLeft", "biz.navigation.setRight", "biz.navigation.setTitle",
				"biz.navigation.setMenu", "biz.navigation.back", "device.notification.toast", "device.notification.showPreloader",
				"device.notification.hidePreloader", "device.location.get", "biz.util.uploadImage", "biz.util.previewImage",
				"ui.input.plain", "device.notification.actionSheet", "biz.util.qrcode", "device.connection.getNetworkType",
				"runtime.info", "biz.ding.post", "biz.telephone.call", "biz.telephone.sms", "biz.chat.chooseConversation",
				"biz.contact.createGroup", "biz.util.datetimepicker", "biz.util.chosen", "device.base.getUUID",
				"device.base.getInterface", "device.launcher.checkInstalledApps", "device.launcher.launchApp",
				"ui.progressBar.setColors", "runtime.permission.requestAuthCode", "runtime.permission.requestJsApis",
				"ui.pullToRefresh.enable", "ui.pullToRefresh.stop", "ui.pullToRefresh.disable", "ui.webViewBounce.enable",
				"ui.webViewBounce.disable", "biz.chat.getConversationInfo", "biz.map.search", "biz.map.locate", "biz.util.scan",
				"biz.contact.choose", "biz.contact.complexChoose", "util.localStorage.getItem", "util.localStorage.setItem",
				"util.localStorage.removeItem", "biz.navigation.createEditor", "biz.navigation.finishEditor",
				"biz.chat.pickConversation", "device.notification.modal", "biz.navigation.setIcon", "biz.navigation.close",
				"biz.util.uploadImageFromCamera", "internal.lwp.call", "device.geolocation.openGps", "biz.util.test",
				"internal.microapp.checkInstalled", "internal.user.getRole", "device.notification.extendModal",
				"internal.request.lwp", "biz.user.secretID", "internal.util.encryData", "biz.customContact.choose",
				"biz.customContact.multipleChoose", "biz.util.encrypt", "biz.util.decrypt", "device.audio.startRecord",
				"device.audio.stopRecord", "device.audio.onRecordEnd", "device.audio.play", "device.audio.pause",
				"device.audio.resume", "device.audio.stop", "device.audio.onPlayEnd", "device.audio.translateVoice",
				"device.audio.download", "biz.user.getUserInfo", "biz.util.selectLocalCity", "biz.util.selectCity",
				"device.notification.selectImg", "device.notification.toast", "device.notification.chooseImage",
				"biz.util.selectFiveRegionDivision", "biz.user.realAuthentication", "biz.zwfw.openPage", "biz.app.open",
				"biz.app.isSubscribe", "biz.app.addSubscribe", "biz.app.deleteSubscribe", "biz.util.search", "biz.map.zjnavi",
				"biz.navigation.setSegmentedTitle", "biz.navigation.setRightBtn", "biz.util.pay", "biz.util.sign",
				"device.notification.notify", "biz.navigation.hide", "biz.navigation.show", "biz.navigation.setBackground",
				"biz.navigation.setLeftBtn", "biz.util.request", "biz.map.getLocation", "biz.controller.push", "biz.map.navigation",
				"biz.order.alipay", "biz.user.checkLogin", "biz.controller.resume", "biz.util.directShare", "biz.user.login",
				"biz.clipboardData.setData", "biz.user.zmCertification", "device.audio.voicedictation",
				"biz.user.realAuthentication", "device.video.recordVideo", "biz.busCard.detail", "biz.busCard.auth",
				"biz.busCard.unAuth", "biz.busCard.cities", "biz.busCard.receive", "biz.busCard.allList", "biz.busCard.list",
				"biz.busCard.first", "device.notification.saveImage", "biz.user.getUserType", "biz.user.policeRealAuthentication",
				"biz.util.analysis", "biz.user.netVoucherAuth", "biz.user.getNetVoucherPwd", "biz.util.pictureWatermark"
			].forEach(function(t) {
					o(t, function(e) {
						console.log(t),
							function(c, e) {
								if (void 0 === window.WebViewJavascriptBridge) return console.log("WebViewJavascriptBridge 鏈畾涔�");
								var t = e || {},
									a = function(e) {
										console.log("榛樿鎴愬姛鍥炶皟", c, e)
									},
									s = function(e) {
										console.log("榛樿澶辫触鍥炶皟", c, e)
									},
									r = function() {};
								t.onSuccess && (a = t.onSuccess, delete t.onSuccess), t.onFail && (s = t.onFail, delete t.onFail), t.onCancel &&
									(r = t.onCancel, delete t.onCancel);
								var i = function(e) {
										var t = JSON.parse(e || ""),
											i = t.errorCode,
											n = t.result,
											o = t.errorMessage;
										"biz.user.realAuthentication" == c && (n.auditId || (n.auditId = n.passId), n.status || (!1 !== n.pass ? n
											.status = "true" : n.status = "false"), -1 == i && (i = "0", n.pass = 1)), "0" === i ? a && a.call(null,
											n) : "-1" === i ? r && r.call(null, o) : s && s.call(null, o, i)
									},
									n = !1;
								switch (c) {
									case "device.notification.alert":
										v(t, {
											title: "",
											buttonName: "纭畾"
										});
										break;
									case "device.notification.confirm":
									case "device.notification.prompt":
										v(t, {
											title: "",
											buttonLabels: ["纭畾", "鍙栨秷"]
										});
										break;
									case "device.notification.vibrate":
										v(t, {
											duration: 300
										});
										break;
									case "device.accelerometer.watchShake":
										y.ios && (n = !0, t.sensitivity = 3.2);
										break;
									case "biz.util.openLink":
										v(t, {
											credible: !0,
											showMenuBar: !0
										});
										var o = navigator.userAgent.toLowerCase(); - 1 < o.indexOf("android") && -1 < o.indexOf("4.3.0") &&
											/^zhengwt:.*$/.test(t.url) && (t.url = "schema://openApp?Android=com.dtdream.zwhelper&param=" + escape(t.url) +
												"&userType=0&serviceCode=smapp");
										break;
									case "biz.contact.choose":
										v(t, {
											multiple: !0,
											startWithDepartmentId: 0,
											users: [],
											corpId: h && h.corpId || ""
										});
										break;
									case "biz.contact.complexChoose":
										v(t, {
											startWithDepartmentId: 0,
											selectedUsers: [],
											selectedDepartments: [],
											corpId: h && h.corpId || ""
										});
										break;
									case "biz.navigation.setSegmentedTitle":
									case "biz.navigation.setRightBtn":
									case "biz.navigation.setLeftBtn":
									case "biz.navigation.setMenu":
									case "biz.controller.resume":
										y.ios && (n = !0);
										break;
									case "biz.navigation.setLeft":
									case "biz.navigation.setRight":
										y.ios && (n = !0), v(t, {
											show: !0,
											control: !1,
											showIcon: !0,
											text: ""
										});
										break;
									case "ui.pullToRefresh.enable":
										y.ios && (n = !0);
										break;
									case "device.notification.toast":
										v(t, {
											text: "toast",
											duration: y.android ? (0 < y.duration - 3) + 0 : 3,
											delay: 0
										});
										break;
									case "device.notification.showPreloader":
										v(t, {
											text: "鍔犺浇涓�...",
											showIcon: !0
										});
										break;
									case "biz.util.uploadImage":
										v(t, {
											multiple: !1
										});
										break;
									case "device.notification.chooseImage":
										v(t, {
											upload: !0
										});
										break;
									case "biz.util.scan":
										v(t, {
											type: "qrCode"
										});
										break;
									case "biz.map.search":
										v(t, {
											scope: 500
										});
										break;
									case "biz.util.ut":
										var d = t.value;
										if (d && "Object" == y.type(d) && window.JSON) {
											if (y.ios) d = JSON.stringify(d);
											else if (y.android) {
												for (var u in d) l.push(u + "=" + d[u]);
												d = l.join(",")
											}
										} else window.JSON || (d = "");
										v(t, {
											value: d
										}, !0);
										break;
									case "internal.util.encryData":
										var l, p = t.data;
										if ("Object" == y.type(p)) {
											for (var u in p) l.push(u + "=" + p[u]);
											p = l.json("&")
										}
										v(t, {
											data: p
										}, !0);
										break;
									case "biz.navigation.setIcon":
										y.ios && (n = !0), v(t, {
											showIcon: !0,
											iconIndex: "1"
										});
										break;
									case "dd.biz.util.encrypt":
										v(t, {
											corpId: "test",
											data: {
												h: "hello",
												w: "world"
											}
										});
										break;
									case "dd.biz.util.decrypt":
										v(t, {
											orpId: "test",
											data: {
												h: "1_1_29ae62f3a655aecd14b639a5aa50d3408e21c1ff668c71ea78f3d5cc340a9880",
												w: "1_1_62983a28e92e59e2d889eb6bbba872cc141dd7b495e7a076847125fe70472e1e"
											}
										});
										break;
									case "biz.customContact.multipleChoose":
									case "biz.customContact.choose":
										v(t, {
											isShowCompanyName: !1
										})
								}
								var f = {
									handlerName: c,
									params: t
								};
								if (y.android) {
									var m = c.split("."),
										g = m.pop(),
										b = m.join(".");
									WebViewJavascriptBridgeAndroid(a, s, b, g, f)
								} else y.ios && (n ? (WebViewJavascriptBridge.registerHandler(c, function(e, t) {
									i(e), t && t({
										errorCode: "0",
										errorMessage: "鎴愬姛"
									})
								}), WebViewJavascriptBridge.callHandler("dd.native.call", f)) : WebViewJavascriptBridge.callHandler(
									"dd.native.call", f, i))
							}(t, e)
					})
				}), y.__ns = o, "object" == ("undefined" == typeof module ? "undefined" : _typeof(module)) && module && "object" ==
				_typeof(module.exports) ? module.exports = y : "function" == typeof define && (define.amd || define.cmd) ? define(
					"dd", [],
					function() {
						return y
					}) : e.dd = y
		}(window), "undefined" == typeof jQuery) {
		var e = window.location.host;
		"jhsbmxcx.yyhj.zjzwfw.gov.cn" == e || "118.178.118.33" == e || "120.27.194.121:8080" == e || "120.27.194.121" == e ||
			document.write(
				'<script type="text/javascript" src="//app.zjzwfw.gov.cn/client/jssdkcheck/js/jquery-1.8.3.min.js"><\/script>')
	}
	dd && !dd.isInit && dd && setupWebViewJavascriptBridge(function() {})
}

function alipayBridge() {
	window.dd = {};
	var s = {
		"device.notification.alert": function(e) {
			AlipayJSBridge.call("alert", {
				title: e.title,
				message: e.message,
				button: e.buttonName
			}, function() {
				e.onSuccess()
			})
		},
		"device.notification.confirm": function(i) {
			AlipayJSBridge.call("confirm", {
				title: i.title,
				message: i.message,
				okButton: i.buttonLabels[0],
				cancelButton: i.buttonLabels[1]
			}, function(e) {
				var t = {
					buttonIndex: e.ok ? 1 : 0
				};
				i.onSuccess(t)
			})
		},
		"device.notification.prompt": function(i) {
			AlipayJSBridge.call("prompt", {
				title: i.title,
				message: i.message,
				okButton: i.otherButtons,
				cancelButton: i.cancelButton
			}, function(e) {
				var t = {
					buttonIndex: e.ok ? 1 : 0,
					value: e.ok ? e.inputValue : ""
				};
				i.onSuccess(t)
			})
		},
		"device.notification.showPreloader": function(e) {
			AlipayJSBridge.call("showLoading", {
				text: e.text
			})
		},
		"biz.util.openLink": function(e) {
			AlipayJSBridge.call("pushWindow", {
				url: e.url,
				param: {
					readTitle: !0,
					showOptionMenu: e.showMenuBar
				}
			})
		},
		"device.notification.hidePreloader": function(e) {
			AlipayJSBridge.call("hideLoading")
		},
		"device.notification.toast": function(e) {
			AlipayJSBridge.call("toast", {
				content: e.message,
				duration: 1e3 * e.duration
			}, function() {
				e.onSuccess()
			})
		},
		"device.notification.actionSheet": function(i) {
			AlipayJSBridge.call("actionSheet", {
				title: i.title,
				btns: i.otherButtons,
				cancelBtn: i.cancelButton
			}, function(e) {
				if (-1 !== e.index) {
					var t = {
						buttonIndex: e.index
					};
					i.onSuccess(t)
				}
			})
		},
		"biz.util.selectLocalCity": function(i) {
			AlipayJSBridge.call("getCurrentLocation", {
				requestType: 1,
				bizType: "didi"
			}, function(e) {
				var t = {
					cityId: e.districtAdcode ? e.districtAdcode + "999" : e.cityAdcode + "999",
					orgCode: "001008999",
					webId: "",
					cityName: e.district ? e.district : e.city
				};
				i.onSuccess(t)
			})
		},
		"device.location.get": function(i) {
			AlipayJSBridge.call("getCurrentLocation", {
				requestType: 2,
				bizType: "didi"
			}, function(e) {
				var t = {
					longitude: e.longitude,
					latitude: e.latitude,
					detailAddress: e.streetNumber != {} ? e.streetNumber.street + e.streetNumber.number : "",
					cityName: e.city,
					region: e.district
				};
				i.onSuccess(t)
			})
		},
		"device.connection.getNetworkType": function(i) {
			AlipayJSBridge.call("getNetworkType", function(e) {
				var t = {
					result: e.networkType
				};
				i.onSuccess(t)
			})
		},
		"device.notification.chooseImage": function(d) {
			AlipayJSBridge.call("chooseImage", {
				sourceType: ["camera", "album"],
				count: 1
			}, function(e) {
				function t(e, n) {
					var o, c, a, s;
					o = e, c = function(e) {
						console.log(e.length / 1024, "KB");
						var t = new FormData,
							i = function(e, t) {
								for (var i = e.split(","), n = i[0].match(/:(.*?);/)[1], o = atob(i[1]), c = o.length, a = new Uint8Array(
										c); c--;) a[c] = o.charCodeAt(c);
								return t = (new Date).valueOf() + r.suffix, new File([a], t, {
									type: n
								})
							}(e);
						t.append("imgsfile", i), null != t.appendData && (t.appendData[0].fileName = (new Date).valueOf() + n.suffix),
							$.ajax({
								url: "https://unibase.zjzwfw.gov.cn:7002/img/add",
								type: "post",
								contentType: !1,
								data: t,
								processData: !1,
								success: function(e) {
									var t = {
											result: "true",
											picPath: []
										},
										i = e.data;
									"https:" == document.location.protocol && (i = i.replace("http", "https")), t.picPath.push(i),
										AlipayJSBridge.call("hideLoading"), d.onSuccess(t)
								},
								error: function(e) {
									AlipayJSBridge.call("hideLoading"), d.onFail({
										result: "false"
									})
								}
							})
					}, a = n, (s = new Image).crossOrigin = "anonymous", s.onload = function() {
						var e = document.createElement("CANVAS"),
							t = e.getContext("2d");
						e.height = s.height, e.width = s.width, console.log("height * width", e.height, e.width), t.drawImage(s, 0,
							0);
						try {
							var i = e.toDataURL(a.type, [.4, .6, .8, 1][a.compress]);
							c(i)
						} catch (e) {
							c(o)
						}
						e = null
					}, s.src = o
				}
				if (!e.error) {
					var r, i = e.apFilePathsV2[0];
					AlipayJSBridge.call("showLoading", {
						text: "涓婁紶涓�",
						delay: 1e3
					}), setTimeout(function() {
						AlipayJSBridge.call("hideLoading")
					}, 3e4), r = !d.compress || isNaN(d.compress) || 3 < d.compress ? {
						type: "image/jpeg",
						suffix: ".jpeg",
						compress: 2
					} : 3 == d.compress ? {
						type: "image/png",
						suffix: ".png",
						compress: 3
					} : {
						type: "image/jpeg",
						suffix: ".jpeg",
						compress: d.compress
					}, console.log("compress:", r), "undefined" == typeof $ ? loadScript(
						"//unibase.zjzwfw.gov.cn/DTHybirdEngine/DtDream/resource/jquery-3.3.1.min.js",
						function() {
							t(i, r)
						}) : t(i, r)
				}
			})
		},
		"device.accelerometer.watchShake": function(t) {
			AlipayJSBridge.call("watchShake", function(e) {
				t.onSuccess({
					result: "success"
				})
			})
		},
		"device.notification.vibrate": function(e) {
			AlipayJSBridge.call("vibrate")
		},
		"biz.util.scan": function(t) {
			AlipayJSBridge.call("scan", {
				type: "qrCode" == t.type ? "qr" : "bar"
			}, function(e) {
				t.onSuccess({
					text: e.codeContent
				})
			})
		},
		"biz.telephone.call": function(e) {
			var t = document.createElement("a");
			document.documentElement.appendChild(t), t.style.opacity = 0, t.addEventListener("click", function() {
				location.href = "tel:" + e.corpId
			}), t.click()
		},
		"biz.util.share": function(t) {
			AlipayJSBridge.call("startShare", {
				onlySelectChannel: ["Weixin", "WeixinTimeLine", "Weibo", "ALPContact"]
			}, function(e) {
				AlipayJSBridge.call("shareToChannel", {
					name: e.channelName,
					param: {
						contentType: "auto",
						title: t.titleStr,
						content: t.contentStr,
						imageUrl: t.imageStr,
						captureScreen: !1,
						url: t.shareUrlStr
					}
				}, function(e) {
					console.log(e)
				})
			})
		},
		"biz.navigation.setTitle": function(e) {
			AlipayJSBridge.call("setTitle", {
				title: e.title
			})
		},
		"biz.navigation.close": function(e) {
			AlipayJSBridge.call("popWindow")
		}
	};
	if (function(e) {
			function c(e, t, i) {
				for (var n in t) e[n] = i ? t[n] : void 0 !== e[n] ? e[n] : t[n]
			}
			var a = {},
				i = function(e, t) {
					for (var i = e.split("."), n = a, o = 0, c = i.length; o < c; o++) o === c - 1 && (n[i[o]] = t), void 0 === n[i[o]] &&
						(n[i[o]] = {}), n = n[i[o]]
				};
			["device.notification.alert", "device.notification.confirm", "device.notification.prompt",
				"device.notification.vibrate", "device.accelerometer.watchShake", "device.accelerometer.clearShake",
				"biz.util.open", "biz.util.openLink", "biz.util.share", "biz.util.ut", "biz.util.datepicker", "biz.util.timepicker",
				"biz.user.get", "biz.navigation.setLeft", "biz.navigation.setRight", "biz.navigation.setTitle",
				"biz.navigation.setMenu", "biz.navigation.back", "device.notification.toast", "device.notification.showPreloader",
				"device.notification.hidePreloader", "device.location.get", "biz.util.uploadImage", "biz.util.previewImage",
				"ui.input.plain", "device.notification.actionSheet", "biz.util.qrcode", "device.connection.getNetworkType",
				"runtime.info", "biz.ding.post", "biz.telephone.call", "biz.telephone.sms", "biz.chat.chooseConversation",
				"biz.contact.createGroup", "biz.util.datetimepicker", "biz.util.chosen", "device.base.getUUID",
				"device.base.getInterface", "device.launcher.checkInstalledApps", "device.launcher.launchApp",
				"ui.progressBar.setColors", "runtime.permission.requestAuthCode", "runtime.permission.requestJsApis",
				"ui.pullToRefresh.enable", "ui.pullToRefresh.stop", "ui.pullToRefresh.disable", "ui.webViewBounce.enable",
				"ui.webViewBounce.disable", "biz.chat.getConversationInfo", "biz.map.search", "biz.map.locate", "biz.util.scan",
				"biz.contact.choose", "biz.contact.complexChoose", "util.localStorage.getItem", "util.localStorage.setItem",
				"util.localStorage.removeItem", "biz.navigation.createEditor", "biz.navigation.finishEditor",
				"biz.chat.pickConversation", "device.notification.modal", "biz.navigation.setIcon", "biz.navigation.close",
				"biz.util.uploadImageFromCamera", "internal.lwp.call", "device.geolocation.openGps", "biz.util.test",
				"internal.microapp.checkInstalled", "internal.user.getRole", "device.notification.extendModal",
				"internal.request.lwp", "biz.user.secretID", "internal.util.encryData", "biz.customContact.choose",
				"biz.customContact.multipleChoose", "biz.util.encrypt", "biz.util.decrypt", "device.audio.startRecord",
				"device.audio.stopRecord", "device.audio.onRecordEnd", "device.audio.play", "device.audio.pause",
				"device.audio.resume", "device.audio.stop", "device.audio.onPlayEnd", "device.audio.translateVoice",
				"device.audio.download", "biz.user.getUserInfo", "biz.util.selectLocalCity", "biz.util.selectCity",
				"device.notification.selectImg", "device.notification.toast", "device.notification.chooseImage",
				"biz.util.selectFiveRegionDivision", "biz.user.realAuthentication", "biz.zwfw.openPage", "biz.app.open",
				"biz.app.isSubscribe", "biz.app.addSubscribe", "biz.app.deleteSubscribe", "biz.util.search", "biz.map.zjnavi",
				"biz.navigation.setSegmentedTitle", "biz.navigation.setRightBtn", "biz.util.pay", "biz.util.sign",
				"device.notification.notify", "biz.navigation.hide", "biz.navigation.show", "biz.navigation.setBackground",
				"biz.navigation.setLeftBtn", "biz.util.request", "biz.map.getLocation", "biz.controller.push", "biz.map.navigation",
				"biz.order.alipay", "biz.user.checkLogin", "biz.controller.resume", "biz.util.directShare", "biz.user.login",
				"biz.clipboardData.setData", "biz.user.zmCertification", "device.audio.voicedictation",
				"biz.user.realAuthentication", "device.video.recordVideo", "biz.busCard.detail", "biz.busCard.auth",
				"biz.busCard.unAuth", "biz.busCard.cities", "biz.busCard.receive", "biz.busCard.allList", "biz.busCard.list",
				"biz.busCard.first", "device.notification.saveImage", "biz.user.getUserType", "biz.user.policeRealAuthentication",
				"biz.util.analysis", "biz.user.netVoucherAuth", "biz.user.getNetVoucherPwd", "biz.util.pictureWatermark"
			].forEach(function(t) {
					i(t, function(e) {
						! function(e, t) {
							var i = t || {};
							switch (e) {
								case "device.notification.alert":
									c(i, {
										title: "",
										buttonName: "纭畾"
									});
									break;
								case "device.notification.confirm":
								case "device.notification.prompt":
									c(i, {
										title: "",
										buttonLabels: ["纭畾", "鍙栨秷"]
									});
									break;
								case "device.notification.vibrate":
									c(i, {
										duration: 300
									});
									break;
								case "device.accelerometer.watchShake":
									a.ios && (registered = !0, i.sensitivity = 3.2);
									break;
								case "biz.util.openLink":
									c(i, {
										credible: !0,
										showMenuBar: !0
									});
									var n = navigator.userAgent.toLowerCase(); - 1 < n.indexOf("android") && -1 < n.indexOf("4.3.0") &&
										/^zhengwt:.*$/.test(i.url) && (i.url = "schema://openApp?Android=com.dtdream.zwhelper&param=" + escape(i.url) +
											"&userType=0&serviceCode=smapp");
									break;
								case "device.notification.toast":
									c(i, {
										text: "toast",
										duration: a.android ? (0 < a.duration - 3) + 0 : 3,
										delay: 0
									});
									break;
								case "device.notification.showPreloader":
									c(i, {
										text: "鍔犺浇涓�...",
										showIcon: !0
									});
									break;
								case "biz.util.uploadImage":
									c(i, {
										multiple: !1
									});
									break;
								case "biz.util.scan":
									c(i, {
										type: "qrCode"
									});
									break;
								case "biz.navigation.setIcon":
									a.ios && (registered = !0), c(i, {
										showIcon: !0,
										iconIndex: "1"
									});
									break;
								case "biz.customContact.choose":
									c(i, {
										isShowCompanyName: !1
									})
							}
							var o = s[e];
							o ? o(i) : console.log("alipayApi 鏈畾涔�")
						}(t, e)
					})
				}), a.__ns = i, "object" == ("undefined" == typeof module ? "undefined" : _typeof(module)) && module && "object" ==
				_typeof(module.exports) ? module.exports = a : "function" == typeof define && (define.amd || define.cmd) ? define(
					"dd", [],
					function() {
						return a
					}) : e.dd = a
		}(window), "undefined" == typeof jQuery) {
		var e = window.location.host;
		"jhsbmxcx.yyhj.zjzwfw.gov.cn" == e || "118.178.118.33" == e || "120.27.194.121:8080" == e || "120.27.194.121" == e ||
			document.write(
				'<script type="text/javascript" src="//app.zjzwfw.gov.cn/client/jssdkcheck/js/jquery-1.8.3.min.js"><\/script>')
	}
	dd && !dd.isInit && dd && setupWebViewJavascriptBridge(function() {})
}

function getUrlParam(e, t) {
	var i = e.indexOf("?"),
		n = e.substr(i + 1, e.length),
		o = new RegExp("(^|&)" + t + "=([^&]*)(&|$)", "i"),
		c = n.match(o);
	return null != c ? unescape(c[2]) : null
}
window.loadScript = function(e, t, i) {
	var n = document.createElement("script");
	n.type = "text/javascript", n.src = e, n.readyState ? n.onreadystatechange = function() {
		"loaded" != n.readyState && "complete" != n.readyState || (n.onreadystatechange = null, t(e))
	} : n.onload = function() {
		t(e)
	}, (i = i || document.getElementsByTagName("head")[0]).insertBefore(n, i.firstChild)
}, window.setupWebViewJavascriptBridge = setupWebViewJavascriptBridge, window.onerror = function(e, t, i) {}, window.jmportal = {
	login: {
		getUserInfo: getUserInfoString
	},
	QRCode: {
		getQRCode: getQRCodeString
	}
};
var Debugger = getUrlParam(window.location.search, "DtDreamDebugger");
Debugger && loadScript("//unibase.zjzwfw.gov.cn/DTHybirdEngine/DtDream/resource/vconsole.min.js", function() {});
var userAgent = window.navigator.userAgent;
if (/AlipayClient/.test(userAgent)) document.addEventListener("AlipayJSBridgeReady", alipayBridge(), !1);
else if (/dtdream/.test(userAgent)) ddBridge();
else if (/hanweb/.test(userAgent)) {
	var _containerType = function() {
			var e = navigator.userAgent.toLowerCase(),
				t = (e.match(/ipad/i), e.match(/iphone os/i), e.match(/midp/i), e.match(/rv:1.2.3.4/i), e.match(/ucweb/i), e.match(
					/android/i), e.match(/windows ce/i), e.match(/windows mobile/i), -1 < e.indexOf("hanweb")),
				i = -1 < e.indexOf("dingtalk"),
				n = -1 < e.indexOf("micromessenger"),
				o = -1 < e.indexOf("alipayclient");
			return t ? "hanweb" : n ? "wechat" : o ? "Alipay" : i ? "dingtalk" : "web"
		},
		urldomain = "112.35.18.165:8084/jmopen",
		container = _containerType(),
		tmpTag = "https:" == document.location.protocol;
	"hanweb" == container ? 1 == tmpTag ? ("undefined" == typeof $ && document.write(
			'<script type="text/javascript" src="https://' + urldomain + '/jssdk/jquery-1.8.3.min.js"><\/script>'), document.write(
			'<script type="text/javascript" src="https://' + urldomain + '/jssdk/md5.js"><\/script>'), document.write(
			'<script type="text/javascript" src="https://' + urldomain + '/jssdk/sha1.js"><\/script>'), document.write(
			'<script type="text/javascript" src="https://' + urldomain + '/jssdk/js/indexnew.js"><\/script>'), document.write(
			'<script type="text/javascript" src="https://' + urldomain + '/jssdk/jmportal_SDK.js"><\/script>')) : ("undefined" ==
			typeof $ && document.write('<script type="text/javascript" src="http://' + urldomain +
				'/jssdk/jquery-1.8.3.min.js"><\/script>'), document.write('<script type="text/javascript" src="http://' + urldomain +
				'/jssdk/md5.js"><\/script>'), document.write('<script type="text/javascript" src="http://' + urldomain +
				'/jssdk/sha1.js"><\/script>'), document.write('<script type="text/javascript" src="http://' + urldomain +
				'/jssdk/js/indexnew.js"><\/script>'), document.write('<script type="text/javascript" src="http://' + urldomain +
				'/jssdk/jmportal_SDK.js"><\/script>')) : "wechat" == container ? 1 == tmpTag ? ("undefined" == typeof $ && document
			.write('<script type="text/javascript" src="https://' + urldomain + '/jssdk/jquery-1.8.3.min.js"><\/script>'),
			document.write('<script src="https://res.wx.qq.com/open/js/jweixin-1.0.0.js"><\/script>'), document.write(
				'<script type="text/javascript" src="https://api.map.baidu.com/api?v=2.0&ak=xOWZlWcTZPK84VcK3Ixzqq9wQ6arTUry"><\/script>'
			), document.write('<script type="text/javascript" src="https://' + urldomain + '/jssdk/sha1.js"><\/script>'),
			document.write('<script type="text/javascript" src="https://' + urldomain + '/jssdk/md5.js"><\/script>'), document.write(
				'<script type="text/javascript" src="https://' + urldomain + '/jssdk/alipayjs/aes.js"><\/script>'), document.write(
				'<script type="text/javascript" src="https://' + urldomain + '/jssdk/alipayjs/pad-nopadding.js"><\/script>'),
			document.write('<script type="text/javascript" src="https://' + urldomain +
				'/jssdk/wechatjs/indexnew.js"><\/script>')) : ("undefined" == typeof $ && document.write(
				'<script type="text/javascript" src="http://' + urldomain + '/jssdk/jquery-1.8.3.min.js"><\/script>'), document.write(
				'<script type="text/javascript" src="http://api.map.baidu.com/api?v=2.0&ak=xOWZlWcTZPK84VcK3Ixzqq9wQ6arTUry"><\/script>'
			), document.write('<script src="http://res.wx.qq.com/open/js/jweixin-1.0.0.js"><\/script>'), document.write(
				'<script type="text/javascript" src="http://' + urldomain + '/jssdk/sha1.js"><\/script>'), document.write(
				'<script type="text/javascript" src="http://' + urldomain + '/jssdk/md5.js"><\/script>'), document.write(
				'<script type="text/javascript" src="http://' + urldomain + '/jssdk/alipayjs/aes.js"><\/script>'), document.write(
				'<script type="text/javascript" src="http://' + urldomain + '/jssdk/alipayjs/pad-nopadding.js"><\/script>'),
			document.write('<script type="text/javascript" src="http://' + urldomain + '/jssdk/wechatjs/indexnew.js"><\/script>'),
			document.write('<script type="text/javascript" src="http://' + urldomain + '/jssdk/alipayjs/md5.js"><\/script>')) :
		"dingtalk" == container ? 1 == tmpTag ? ("undefined" == typeof $ && document.write(
			'<script type="text/javascript" src="https://' + urldomain + '/jssdk/jquery-1.8.3.min.js"><\/script>'), document.write(
			'<script type="text/javascript" src="https://' + urldomain + '/jssdk/md5.js"><\/script>'), document.write(
			'<script type="text/javascript" src="https://' + urldomain + '/jssdk/sha1.js"><\/script>'), document.write(
			'<script src="https://g.alicdn.com/dingding/open-develop/1.6.9/dingtalk.js"><\/script>'), document.write(
			'<script type="text/javascript" src="https://api.map.baidu.com/api?v=2.0&ak=xOWZlWcTZPK84VcK3Ixzqq9wQ6arTUry"><\/script>'
		), document.write('<script type="text/javascript" src="https://' + urldomain +
			'/jssdk/dingtalkjs/indexnew.js"><\/script>')) : ("undefined" == typeof $ && document.write(
			'<script type="text/javascript" src="http://' + urldomain + '/jssdk/jquery-1.8.3.min.js"><\/script>'), document.write(
			'<script type="text/javascript" src="http://' + urldomain + '/jssdk/md5.js"><\/script>'), document.write(
			'<script type="text/javascript" src="http://' + urldomain + '/jssdk/sha1.js"><\/script>'), document.write(
			'<script type="text/javascript" src="http://api.map.baidu.com/api?v=2.0&ak=xOWZlWcTZPK84VcK3Ixzqq9wQ6arTUry"><\/script>'
		), document.write('<script src="http://g.alicdn.com/dingding/open-develop/1.6.9/dingtalk.js"><\/script>'), document.write(
			'<script type="text/javascript" src="http://' + urldomain + '/jssdk/dingtalkjs/indexnew.js"><\/script>')) : "Alipay" ==
		container ? 1 == tmpTag ? ("undefined" == typeof $ && document.write('<script type="text/javascript" src="https://' +
				urldomain + '/jssdk/jquery-1.8.3.min.js"><\/script>'), document.write(
				'<script type="text/javascript" src="https://api.map.baidu.com/api?v=2.0&ak=xOWZlWcTZPK84VcK3Ixzqq9wQ6arTUry"><\/script>'
			), document.write('<script type="text/javascript" src="https://' + urldomain + '/jssdk/alipayjs/aes.js"><\/script>'),
			document.write('<script type="text/javascript" src="https://' + urldomain + '/jssdk/md5.js"><\/script>'), document.write(
				'<script type="text/javascript" src="https://' + urldomain + '/jssdk/sha1.js"><\/script>'), document.write(
				'<script type="text/javascript" src="https://' + urldomain + '/jssdk/alipayjs/pad-nopadding.js"><\/script>'),
			document.write('<script type="text/javascript" src="https://' + urldomain +
				'/jssdk/alipayjs/indexnew.js"><\/script>')) : ("undefined" == typeof $ && document.write(
				'<script type="text/javascript" src="http://' + urldomain + '/jssdk/jquery-1.8.3.min.js"><\/script>'), document.write(
				'<script type="text/javascript" src="http://api.map.baidu.com/api?v=2.0&ak=xOWZlWcTZPK84VcK3Ixzqq9wQ6arTUry"><\/script>'
			), document.write('<script type="text/javascript" src="http://' + urldomain + '/jssdk/alipayjs/aes.js"><\/script>'),
			document.write('<script type="text/javascript" src="http://' + urldomain + '/jssdk/md5.js"><\/script>'), document.write(
				'<script type="text/javascript" src="http://' + urldomain + '/jssdk/sha1.js"><\/script>'), document.write(
				'<script type="text/javascript" src="http://' + urldomain + '/jssdk/alipayjs/pad-nopadding.js"><\/script>'),
			document.write('<script type="text/javascript" src="http://' + urldomain + '/jssdk/alipayjs/indexnew.js"><\/script>')
		) : 1 == tmpTag ? ("undefined" == typeof $ && document.write('<script type="text/javascript" src="https://' +
				urldomain + '/jssdk/jquery-1.8.3.min.js"><\/script>'), document.write(
				'<script type="text/javascript" src="https://api.map.baidu.com/api?v=2.0&ak=xOWZlWcTZPK84VcK3Ixzqq9wQ6arTUry"><\/script>'
			), document.write('<script type="text/javascript" src="https://' + urldomain + '/jssdk/md5.js"><\/script>'),
			document.write('<script type="text/javascript" src="https://' + urldomain + '/jssdk/sha1.js"><\/script>'), document.write(
				'<script type="text/javascript" src="https://' + urldomain + '/jssdk/wechatjs/brower.js"><\/script>')) : (
			"undefined" == typeof $ && document.write('<script type="text/javascript" src="http://' + urldomain +
				'/jssdk/jquery-1.8.3.min.js"><\/script>'), document.write(
				'<script type="text/javascript" src="http://api.map.baidu.com/api?v=2.0&ak=xOWZlWcTZPK84VcK3Ixzqq9wQ6arTUry"><\/script>'
			), document.write('<script type="text/javascript" src="http://' + urldomain + '/jssdk/md5.js"><\/script>'), document
			.write('<script type="text/javascript" src="http://' + urldomain + '/jssdk/sha1.js"><\/script>'), document.write(
				'<script type="text/javascript" src="http://' + urldomain + '/jssdk/wechatjs/brower.js"><\/script>')), loadScript(
			"//unibase.zjzwfw.gov.cn/DTHybirdEngine/DtDream/adaptation/gbApi.js",
			function() {})
}
