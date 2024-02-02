(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [5499], {
        30392: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var i = r(19109);

            function n(e, t, r) {
                return void 0 === t && (t = new Uint8Array(2)), void 0 === r && (r = 0), t[r + 0] = e >>> 8, t[r + 1] = e >>> 0, t
            }

            function s(e, t, r) {
                return void 0 === t && (t = new Uint8Array(2)), void 0 === r && (r = 0), t[r + 0] = e >>> 0, t[r + 1] = e >>> 8, t
            }

            function o(e, t) {
                return void 0 === t && (t = 0), e[t] << 24 | e[t + 1] << 16 | e[t + 2] << 8 | e[t + 3]
            }

            function a(e, t) {
                return void 0 === t && (t = 0), (e[t] << 24 | e[t + 1] << 16 | e[t + 2] << 8 | e[t + 3]) >>> 0
            }

            function c(e, t) {
                return void 0 === t && (t = 0), e[t + 3] << 24 | e[t + 2] << 16 | e[t + 1] << 8 | e[t]
            }

            function u(e, t) {
                return void 0 === t && (t = 0), (e[t + 3] << 24 | e[t + 2] << 16 | e[t + 1] << 8 | e[t]) >>> 0
            }

            function l(e, t, r) {
                return void 0 === t && (t = new Uint8Array(4)), void 0 === r && (r = 0), t[r + 0] = e >>> 24, t[r + 1] = e >>> 16, t[r + 2] = e >>> 8, t[r + 3] = e >>> 0, t
            }

            function h(e, t, r) {
                return void 0 === t && (t = new Uint8Array(4)), void 0 === r && (r = 0), t[r + 0] = e >>> 0, t[r + 1] = e >>> 8, t[r + 2] = e >>> 16, t[r + 3] = e >>> 24, t
            }

            function f(e, t, r) {
                return void 0 === t && (t = new Uint8Array(8)), void 0 === r && (r = 0), l(e / 4294967296 >>> 0, t, r), l(e >>> 0, t, r + 4), t
            }

            function p(e, t, r) {
                return void 0 === t && (t = new Uint8Array(8)), void 0 === r && (r = 0), h(e >>> 0, t, r), h(e / 4294967296 >>> 0, t, r + 4), t
            }
            t.readInt16BE = function(e, t) {
                return void 0 === t && (t = 0), (e[t + 0] << 8 | e[t + 1]) << 16 >> 16
            }, t.readUint16BE = function(e, t) {
                return void 0 === t && (t = 0), (e[t + 0] << 8 | e[t + 1]) >>> 0
            }, t.readInt16LE = function(e, t) {
                return void 0 === t && (t = 0), (e[t + 1] << 8 | e[t]) << 16 >> 16
            }, t.readUint16LE = function(e, t) {
                return void 0 === t && (t = 0), (e[t + 1] << 8 | e[t]) >>> 0
            }, t.writeUint16BE = n, t.writeInt16BE = n, t.writeUint16LE = s, t.writeInt16LE = s, t.readInt32BE = o, t.readUint32BE = a, t.readInt32LE = c, t.readUint32LE = u, t.writeUint32BE = l, t.writeInt32BE = l, t.writeUint32LE = h, t.writeInt32LE = h, t.readInt64BE = function(e, t) {
                void 0 === t && (t = 0);
                var r = o(e, t),
                    i = o(e, t + 4);
                return 4294967296 * r + i - (i >> 31) * 4294967296
            }, t.readUint64BE = function(e, t) {
                return void 0 === t && (t = 0), 4294967296 * a(e, t) + a(e, t + 4)
            }, t.readInt64LE = function(e, t) {
                void 0 === t && (t = 0);
                var r = c(e, t);
                return 4294967296 * c(e, t + 4) + r - (r >> 31) * 4294967296
            }, t.readUint64LE = function(e, t) {
                void 0 === t && (t = 0);
                var r = u(e, t);
                return 4294967296 * u(e, t + 4) + r
            }, t.writeUint64BE = f, t.writeInt64BE = f, t.writeUint64LE = p, t.writeInt64LE = p, t.readUintBE = function(e, t, r) {
                if (void 0 === r && (r = 0), e % 8 != 0) throw Error("readUintBE supports only bitLengths divisible by 8");
                if (e / 8 > t.length - r) throw Error("readUintBE: array is too short for the given bitLength");
                for (var i = 0, n = 1, s = e / 8 + r - 1; s >= r; s--) i += t[s] * n, n *= 256;
                return i
            }, t.readUintLE = function(e, t, r) {
                if (void 0 === r && (r = 0), e % 8 != 0) throw Error("readUintLE supports only bitLengths divisible by 8");
                if (e / 8 > t.length - r) throw Error("readUintLE: array is too short for the given bitLength");
                for (var i = 0, n = 1, s = r; s < r + e / 8; s++) i += t[s] * n, n *= 256;
                return i
            }, t.writeUintBE = function(e, t, r, n) {
                if (void 0 === r && (r = new Uint8Array(e / 8)), void 0 === n && (n = 0), e % 8 != 0) throw Error("writeUintBE supports only bitLengths divisible by 8");
                if (!i.isSafeInteger(t)) throw Error("writeUintBE value must be an integer");
                for (var s = 1, o = e / 8 + n - 1; o >= n; o--) r[o] = t / s & 255, s *= 256;
                return r
            }, t.writeUintLE = function(e, t, r, n) {
                if (void 0 === r && (r = new Uint8Array(e / 8)), void 0 === n && (n = 0), e % 8 != 0) throw Error("writeUintLE supports only bitLengths divisible by 8");
                if (!i.isSafeInteger(t)) throw Error("writeUintLE value must be an integer");
                for (var s = 1, o = n; o < n + e / 8; o++) r[o] = t / s & 255, s *= 256;
                return r
            }, t.readFloat32BE = function(e, t) {
                return void 0 === t && (t = 0), new DataView(e.buffer, e.byteOffset, e.byteLength).getFloat32(t)
            }, t.readFloat32LE = function(e, t) {
                return void 0 === t && (t = 0), new DataView(e.buffer, e.byteOffset, e.byteLength).getFloat32(t, !0)
            }, t.readFloat64BE = function(e, t) {
                return void 0 === t && (t = 0), new DataView(e.buffer, e.byteOffset, e.byteLength).getFloat64(t)
            }, t.readFloat64LE = function(e, t) {
                return void 0 === t && (t = 0), new DataView(e.buffer, e.byteOffset, e.byteLength).getFloat64(t, !0)
            }, t.writeFloat32BE = function(e, t, r) {
                return void 0 === t && (t = new Uint8Array(4)), void 0 === r && (r = 0), new DataView(t.buffer, t.byteOffset, t.byteLength).setFloat32(r, e), t
            }, t.writeFloat32LE = function(e, t, r) {
                return void 0 === t && (t = new Uint8Array(4)), void 0 === r && (r = 0), new DataView(t.buffer, t.byteOffset, t.byteLength).setFloat32(r, e, !0), t
            }, t.writeFloat64BE = function(e, t, r) {
                return void 0 === t && (t = new Uint8Array(8)), void 0 === r && (r = 0), new DataView(t.buffer, t.byteOffset, t.byteLength).setFloat64(r, e), t
            }, t.writeFloat64LE = function(e, t, r) {
                return void 0 === t && (t = new Uint8Array(8)), void 0 === r && (r = 0), new DataView(t.buffer, t.byteOffset, t.byteLength).setFloat64(r, e, !0), t
            }
        },
        94589: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var i = r(30392),
                n = r(90820);

            function s(e, t, r, s, o) {
                if (void 0 === o && (o = 0), 32 !== e.length) throw Error("ChaCha: key size must be 32 bytes");
                if (s.length < r.length) throw Error("ChaCha: destination is shorter than source");
                if (0 === o) {
                    if (8 !== t.length && 12 !== t.length) throw Error("ChaCha nonce must be 8 or 12 bytes");
                    c = (a = new Uint8Array(16)).length - t.length, a.set(t, c)
                } else {
                    if (16 !== t.length) throw Error("ChaCha nonce with counter must be 16 bytes");
                    a = t, c = o
                }
                for (var a, c, u = new Uint8Array(64), l = 0; l < r.length; l += 64) {
                    ! function(e, t, r) {
                        for (var n = r[3] << 24 | r[2] << 16 | r[1] << 8 | r[0], s = r[7] << 24 | r[6] << 16 | r[5] << 8 | r[4], o = r[11] << 24 | r[10] << 16 | r[9] << 8 | r[8], a = r[15] << 24 | r[14] << 16 | r[13] << 8 | r[12], c = r[19] << 24 | r[18] << 16 | r[17] << 8 | r[16], u = r[23] << 24 | r[22] << 16 | r[21] << 8 | r[20], l = r[27] << 24 | r[26] << 16 | r[25] << 8 | r[24], h = r[31] << 24 | r[30] << 16 | r[29] << 8 | r[28], f = t[3] << 24 | t[2] << 16 | t[1] << 8 | t[0], p = t[7] << 24 | t[6] << 16 | t[5] << 8 | t[4], d = t[11] << 24 | t[10] << 16 | t[9] << 8 | t[8], g = t[15] << 24 | t[14] << 16 | t[13] << 8 | t[12], y = 1634760805, v = 857760878, _ = 2036477234, m = 1797285236, b = n, w = s, E = o, D = a, S = c, I = u, O = l, P = h, C = f, A = p, x = d, N = g, R = 0; R < 20; R += 2) C ^= y = y + b | 0, b ^= S = S + (C = C >>> 16 | C << 16) | 0, b = b >>> 20 | b << 12, A ^= v = v + w | 0, w ^= I = I + (A = A >>> 16 | A << 16) | 0, w = w >>> 20 | w << 12, x ^= _ = _ + E | 0, E ^= O = O + (x = x >>> 16 | x << 16) | 0, E = E >>> 20 | E << 12, N ^= m = m + D | 0, D ^= P = P + (N = N >>> 16 | N << 16) | 0, D = D >>> 20 | D << 12, x ^= _ = _ + E | 0, E ^= O = O + (x = x >>> 24 | x << 8) | 0, E = E >>> 25 | E << 7, N ^= m = m + D | 0, D ^= P = P + (N = N >>> 24 | N << 8) | 0, D = D >>> 25 | D << 7, A ^= v = v + w | 0, w ^= I = I + (A = A >>> 24 | A << 8) | 0, w = w >>> 25 | w << 7, C ^= y = y + b | 0, b ^= S = S + (C = C >>> 24 | C << 8) | 0, b = b >>> 25 | b << 7, N ^= y = y + w | 0, w ^= O = O + (N = N >>> 16 | N << 16) | 0, w = w >>> 20 | w << 12, C ^= v = v + E | 0, E ^= P = P + (C = C >>> 16 | C << 16) | 0, E = E >>> 20 | E << 12, A ^= _ = _ + D | 0, D ^= S = S + (A = A >>> 16 | A << 16) | 0, D = D >>> 20 | D << 12, x ^= m = m + b | 0, b ^= I = I + (x = x >>> 16 | x << 16) | 0, b = b >>> 20 | b << 12, A ^= _ = _ + D | 0, D ^= S = S + (A = A >>> 24 | A << 8) | 0, D = D >>> 25 | D << 7, x ^= m = m + b | 0, b ^= I = I + (x = x >>> 24 | x << 8) | 0, b = b >>> 25 | b << 7, C ^= v = v + E | 0, E ^= P = P + (C = C >>> 24 | C << 8) | 0, E = E >>> 25 | E << 7, N ^= y = y + w | 0, w ^= O = O + (N = N >>> 24 | N << 8) | 0, w = w >>> 25 | w << 7;
                        i.writeUint32LE(y + 1634760805 | 0, e, 0), i.writeUint32LE(v + 857760878 | 0, e, 4), i.writeUint32LE(_ + 2036477234 | 0, e, 8), i.writeUint32LE(m + 1797285236 | 0, e, 12), i.writeUint32LE(b + n | 0, e, 16), i.writeUint32LE(w + s | 0, e, 20), i.writeUint32LE(E + o | 0, e, 24), i.writeUint32LE(D + a | 0, e, 28), i.writeUint32LE(S + c | 0, e, 32), i.writeUint32LE(I + u | 0, e, 36), i.writeUint32LE(O + l | 0, e, 40), i.writeUint32LE(P + h | 0, e, 44), i.writeUint32LE(C + f | 0, e, 48), i.writeUint32LE(A + p | 0, e, 52), i.writeUint32LE(x + d | 0, e, 56), i.writeUint32LE(N + g | 0, e, 60)
                    }(u, a, e);
                    for (var h = l; h < l + 64 && h < r.length; h++) s[h] = r[h] ^ u[h - l];
                    ! function(e, t, r) {
                        for (var i = 1; r--;) i = i + (255 & e[t]) | 0, e[t] = 255 & i, i >>>= 8, t++;
                        if (i > 0) throw Error("ChaCha: counter overflow")
                    }(a, 0, c)
                }
                return n.wipe(u), 0 === o && n.wipe(a), s
            }
            t.streamXOR = s, t.stream = function(e, t, r, i) {
                return void 0 === i && (i = 0), n.wipe(r), s(e, t, r, r, i)
            }
        },
        29424: function(e, t, r) {
            "use strict";
            var i = r(94589),
                n = r(44125),
                s = r(90820),
                o = r(30392),
                a = r(99722);
            t.Cv = 32, t.WH = 12, t.pg = 16;
            var c = new Uint8Array(16),
                u = function() {
                    function e(e) {
                        if (this.nonceLength = t.WH, this.tagLength = t.pg, e.length !== t.Cv) throw Error("ChaCha20Poly1305 needs 32-byte key");
                        this._key = new Uint8Array(e)
                    }
                    return e.prototype.seal = function(e, t, r, n) {
                        if (e.length > 16) throw Error("ChaCha20Poly1305: incorrect nonce length");
                        var o, a = new Uint8Array(16);
                        a.set(e, a.length - e.length);
                        var c = new Uint8Array(32);
                        i.stream(this._key, a, c, 4);
                        var u = t.length + this.tagLength;
                        if (n) {
                            if (n.length !== u) throw Error("ChaCha20Poly1305: incorrect destination length");
                            o = n
                        } else o = new Uint8Array(u);
                        return i.streamXOR(this._key, a, t, o, 4), this._authenticate(o.subarray(o.length - this.tagLength, o.length), c, o.subarray(0, o.length - this.tagLength), r), s.wipe(a), o
                    }, e.prototype.open = function(e, t, r, n) {
                        if (e.length > 16) throw Error("ChaCha20Poly1305: incorrect nonce length");
                        if (t.length < this.tagLength) return null;
                        var o, c = new Uint8Array(16);
                        c.set(e, c.length - e.length);
                        var u = new Uint8Array(32);
                        i.stream(this._key, c, u, 4);
                        var l = new Uint8Array(this.tagLength);
                        if (this._authenticate(l, u, t.subarray(0, t.length - this.tagLength), r), !a.equal(l, t.subarray(t.length - this.tagLength, t.length))) return null;
                        var h = t.length - this.tagLength;
                        if (n) {
                            if (n.length !== h) throw Error("ChaCha20Poly1305: incorrect destination length");
                            o = n
                        } else o = new Uint8Array(h);
                        return i.streamXOR(this._key, c, t.subarray(0, t.length - this.tagLength), o, 4), s.wipe(c), o
                    }, e.prototype.clean = function() {
                        return s.wipe(this._key), this
                    }, e.prototype._authenticate = function(e, t, r, i) {
                        var a = new n.Poly1305(t);
                        i && (a.update(i), i.length % 16 > 0 && a.update(c.subarray(i.length % 16))), a.update(r), r.length % 16 > 0 && a.update(c.subarray(r.length % 16));
                        var u = new Uint8Array(8);
                        i && o.writeUint64LE(i.length, u), a.update(u), o.writeUint64LE(r.length, u), a.update(u);
                        for (var l = a.digest(), h = 0; h < l.length; h++) e[h] = l[h];
                        a.clean(), s.wipe(l), s.wipe(u)
                    }, e
                }();
            t.OK = u
        },
        99722: function(e, t) {
            "use strict";

            function r(e, t) {
                if (e.length !== t.length) return 0;
                for (var r = 0, i = 0; i < e.length; i++) r |= e[i] ^ t[i];
                return 1 & r - 1 >>> 8
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.select = function(e, t, r) {
                return ~(e - 1) & t | e - 1 & r
            }, t.lessOrEqual = function(e, t) {
                return (0 | e) - (0 | t) - 1 >>> 31 & 1
            }, t.compare = r, t.equal = function(e, t) {
                return 0 !== e.length && 0 !== t.length && 0 !== r(e, t)
            }
        },
        62113: function(e, t, r) {
            "use strict";
            t.Xx = t._w = t.aP = t.KS = t.jQ = void 0, r(77379);
            let i = r(73342);

            function n(e) {
                let t = new Float64Array(16);
                if (e)
                    for (let r = 0; r < e.length; r++) t[r] = e[r];
                return t
            }
            r(90820), t.jQ = 64, t.KS = 64, t.aP = 32, new Uint8Array(32)[0] = 9;
            let s = n(),
                o = n([1]),
                a = (n([30883, 4953, 19914, 30187, 55467, 16705, 2637, 112, 59544, 30585, 16505, 36039, 65139, 11119, 27886, 20995]), n([61785, 9906, 39828, 60374, 45398, 33411, 5274, 224, 53552, 61171, 33010, 6542, 64743, 22239, 55772, 9222])),
                c = n([54554, 36645, 11616, 51542, 42930, 38181, 51040, 26924, 56412, 64982, 57905, 49316, 21502, 52590, 14035, 8553]),
                u = n([26200, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214]);

            function l(e, t) {
                for (let r = 0; r < 16; r++) e[r] = 0 | t[r]
            }

            function h(e) {
                let t = 1;
                for (let r = 0; r < 16; r++) {
                    let i = e[r] + t + 65535;
                    t = Math.floor(i / 65536), e[r] = i - 65536 * t
                }
                e[0] += t - 1 + 37 * (t - 1)
            }

            function f(e, t, r) {
                let i = ~(r - 1);
                for (let r = 0; r < 16; r++) {
                    let n = i & (e[r] ^ t[r]);
                    e[r] ^= n, t[r] ^= n
                }
            }

            function p(e, t) {
                let r = n(),
                    i = n();
                for (let e = 0; e < 16; e++) i[e] = t[e];
                h(i), h(i), h(i);
                for (let e = 0; e < 2; e++) {
                    r[0] = i[0] - 65517;
                    for (let e = 1; e < 15; e++) r[e] = i[e] - 65535 - (r[e - 1] >> 16 & 1), r[e - 1] &= 65535;
                    r[15] = i[15] - 32767 - (r[14] >> 16 & 1);
                    let e = r[15] >> 16 & 1;
                    r[14] &= 65535, f(i, r, 1 - e)
                }
                for (let t = 0; t < 16; t++) e[2 * t] = 255 & i[t], e[2 * t + 1] = i[t] >> 8
            }
            n([41136, 18958, 6951, 50414, 58488, 44335, 6150, 12099, 55207, 15867, 153, 11085, 57099, 20417, 9344, 11139]);

            function d(e, t, r) {
                for (let i = 0; i < 16; i++) e[i] = t[i] + r[i]
            }

            function g(e, t, r) {
                for (let i = 0; i < 16; i++) e[i] = t[i] - r[i]
            }

            function y(e, t, r) {
                let i, n, s = 0,
                    o = 0,
                    a = 0,
                    c = 0,
                    u = 0,
                    l = 0,
                    h = 0,
                    f = 0,
                    p = 0,
                    d = 0,
                    g = 0,
                    y = 0,
                    v = 0,
                    _ = 0,
                    m = 0,
                    b = 0,
                    w = 0,
                    E = 0,
                    D = 0,
                    S = 0,
                    I = 0,
                    O = 0,
                    P = 0,
                    C = 0,
                    A = 0,
                    x = 0,
                    N = 0,
                    R = 0,
                    T = 0,
                    j = 0,
                    U = 0,
                    L = r[0],
                    M = r[1],
                    k = r[2],
                    z = r[3],
                    $ = r[4],
                    q = r[5],
                    H = r[6],
                    F = r[7],
                    V = r[8],
                    K = r[9],
                    B = r[10],
                    G = r[11],
                    W = r[12],
                    J = r[13],
                    Y = r[14],
                    Z = r[15];
                s += (i = t[0]) * L, o += i * M, a += i * k, c += i * z, u += i * $, l += i * q, h += i * H, f += i * F, p += i * V, d += i * K, g += i * B, y += i * G, v += i * W, _ += i * J, m += i * Y, b += i * Z, o += (i = t[1]) * L, a += i * M, c += i * k, u += i * z, l += i * $, h += i * q, f += i * H, p += i * F, d += i * V, g += i * K, y += i * B, v += i * G, _ += i * W, m += i * J, b += i * Y, w += i * Z, a += (i = t[2]) * L, c += i * M, u += i * k, l += i * z, h += i * $, f += i * q, p += i * H, d += i * F, g += i * V, y += i * K, v += i * B, _ += i * G, m += i * W, b += i * J, w += i * Y, E += i * Z, c += (i = t[3]) * L, u += i * M, l += i * k, h += i * z, f += i * $, p += i * q, d += i * H, g += i * F, y += i * V, v += i * K, _ += i * B, m += i * G, b += i * W, w += i * J, E += i * Y, D += i * Z, u += (i = t[4]) * L, l += i * M, h += i * k, f += i * z, p += i * $, d += i * q, g += i * H, y += i * F, v += i * V, _ += i * K, m += i * B, b += i * G, w += i * W, E += i * J, D += i * Y, S += i * Z, l += (i = t[5]) * L, h += i * M, f += i * k, p += i * z, d += i * $, g += i * q, y += i * H, v += i * F, _ += i * V, m += i * K, b += i * B, w += i * G, E += i * W, D += i * J, S += i * Y, I += i * Z, h += (i = t[6]) * L, f += i * M, p += i * k, d += i * z, g += i * $, y += i * q, v += i * H, _ += i * F, m += i * V, b += i * K, w += i * B, E += i * G, D += i * W, S += i * J, I += i * Y, O += i * Z, f += (i = t[7]) * L, p += i * M, d += i * k, g += i * z, y += i * $, v += i * q, _ += i * H, m += i * F, b += i * V, w += i * K, E += i * B, D += i * G, S += i * W, I += i * J, O += i * Y, P += i * Z, p += (i = t[8]) * L, d += i * M, g += i * k, y += i * z, v += i * $, _ += i * q, m += i * H, b += i * F, w += i * V, E += i * K, D += i * B, S += i * G, I += i * W, O += i * J, P += i * Y, C += i * Z, d += (i = t[9]) * L, g += i * M, y += i * k, v += i * z, _ += i * $, m += i * q, b += i * H, w += i * F, E += i * V, D += i * K, S += i * B, I += i * G, O += i * W, P += i * J, C += i * Y, A += i * Z, g += (i = t[10]) * L, y += i * M, v += i * k, _ += i * z, m += i * $, b += i * q, w += i * H, E += i * F, D += i * V, S += i * K, I += i * B, O += i * G, P += i * W, C += i * J, A += i * Y, x += i * Z, y += (i = t[11]) * L, v += i * M, _ += i * k, m += i * z, b += i * $, w += i * q, E += i * H, D += i * F, S += i * V, I += i * K, O += i * B, P += i * G, C += i * W, A += i * J, x += i * Y, N += i * Z, v += (i = t[12]) * L, _ += i * M, m += i * k, b += i * z, w += i * $, E += i * q, D += i * H, S += i * F, I += i * V, O += i * K, P += i * B, C += i * G, A += i * W, x += i * J, N += i * Y, R += i * Z, _ += (i = t[13]) * L, m += i * M, b += i * k, w += i * z, E += i * $, D += i * q, S += i * H, I += i * F, O += i * V, P += i * K, C += i * B, A += i * G, x += i * W, N += i * J, R += i * Y, T += i * Z, m += (i = t[14]) * L, b += i * M, w += i * k, E += i * z, D += i * $, S += i * q, I += i * H, O += i * F, P += i * V, C += i * K, A += i * B, x += i * G, N += i * W, R += i * J, T += i * Y, j += i * Z, b += (i = t[15]) * L, w += i * M, E += i * k, D += i * z, S += i * $, I += i * q, O += i * H, P += i * F, C += i * V, A += i * K, x += i * B, N += i * G, R += i * W, T += i * J, j += i * Y, U += i * Z, s += 38 * w, o += 38 * E, a += 38 * D, c += 38 * S, u += 38 * I, l += 38 * O, h += 38 * P, f += 38 * C, p += 38 * A, d += 38 * x, g += 38 * N, y += 38 * R, v += 38 * T, _ += 38 * j, m += 38 * U, n = Math.floor((i = s + (n = 1) + 65535) / 65536), s = i - 65536 * n, n = Math.floor((i = o + n + 65535) / 65536), o = i - 65536 * n, n = Math.floor((i = a + n + 65535) / 65536), a = i - 65536 * n, n = Math.floor((i = c + n + 65535) / 65536), c = i - 65536 * n, n = Math.floor((i = u + n + 65535) / 65536), u = i - 65536 * n, n = Math.floor((i = l + n + 65535) / 65536), l = i - 65536 * n, n = Math.floor((i = h + n + 65535) / 65536), h = i - 65536 * n, n = Math.floor((i = f + n + 65535) / 65536), f = i - 65536 * n, n = Math.floor((i = p + n + 65535) / 65536), p = i - 65536 * n, n = Math.floor((i = d + n + 65535) / 65536), d = i - 65536 * n, n = Math.floor((i = g + n + 65535) / 65536), g = i - 65536 * n, n = Math.floor((i = y + n + 65535) / 65536), y = i - 65536 * n, n = Math.floor((i = v + n + 65535) / 65536), v = i - 65536 * n, n = Math.floor((i = _ + n + 65535) / 65536), _ = i - 65536 * n, n = Math.floor((i = m + n + 65535) / 65536), m = i - 65536 * n, n = Math.floor((i = b + n + 65535) / 65536), b = i - 65536 * n, s += n - 1 + 37 * (n - 1), n = Math.floor((i = s + (n = 1) + 65535) / 65536), s = i - 65536 * n, n = Math.floor((i = o + n + 65535) / 65536), o = i - 65536 * n, n = Math.floor((i = a + n + 65535) / 65536), a = i - 65536 * n, n = Math.floor((i = c + n + 65535) / 65536), c = i - 65536 * n, n = Math.floor((i = u + n + 65535) / 65536), u = i - 65536 * n, n = Math.floor((i = l + n + 65535) / 65536), l = i - 65536 * n, n = Math.floor((i = h + n + 65535) / 65536), h = i - 65536 * n, n = Math.floor((i = f + n + 65535) / 65536), f = i - 65536 * n, n = Math.floor((i = p + n + 65535) / 65536), p = i - 65536 * n, n = Math.floor((i = d + n + 65535) / 65536), d = i - 65536 * n, n = Math.floor((i = g + n + 65535) / 65536), g = i - 65536 * n, n = Math.floor((i = y + n + 65535) / 65536), y = i - 65536 * n, n = Math.floor((i = v + n + 65535) / 65536), v = i - 65536 * n, n = Math.floor((i = _ + n + 65535) / 65536), _ = i - 65536 * n, n = Math.floor((i = m + n + 65535) / 65536), m = i - 65536 * n, n = Math.floor((i = b + n + 65535) / 65536), b = i - 65536 * n, s += n - 1 + 37 * (n - 1), e[0] = s, e[1] = o, e[2] = a, e[3] = c, e[4] = u, e[5] = l, e[6] = h, e[7] = f, e[8] = p, e[9] = d, e[10] = g, e[11] = y, e[12] = v, e[13] = _, e[14] = m, e[15] = b
            }

            function v(e, t) {
                let r = n(),
                    i = n(),
                    s = n(),
                    o = n(),
                    c = n(),
                    u = n(),
                    l = n(),
                    h = n(),
                    f = n();
                g(r, e[1], e[0]), g(f, t[1], t[0]), y(r, r, f), d(i, e[0], e[1]), d(f, t[0], t[1]), y(i, i, f), y(s, e[3], t[3]), y(s, s, a), y(o, e[2], t[2]), d(o, o, o), g(c, i, r), g(u, o, s), d(l, o, s), d(h, i, r), y(e[0], c, u), y(e[1], h, l), y(e[2], l, u), y(e[3], c, h)
            }

            function _(e, t, r) {
                for (let i = 0; i < 4; i++) f(e[i], t[i], r)
            }

            function m(e, t) {
                let r = n(),
                    i = n(),
                    s = n();
                (function(e, t) {
                    let r;
                    let i = n();
                    for (r = 0; r < 16; r++) i[r] = t[r];
                    for (r = 253; r >= 0; r--) y(i, i, i), 2 !== r && 4 !== r && y(i, i, t);
                    for (r = 0; r < 16; r++) e[r] = i[r]
                })(s, t[2]), y(r, t[0], s), y(i, t[1], s), p(e, i), e[31] ^= function(e) {
                    let t = new Uint8Array(32);
                    return p(t, e), 1 & t[0]
                }(r) << 7
            }

            function b(e, t) {
                let r = [n(), n(), n(), n()];
                l(r[0], c), l(r[1], u), l(r[2], o), y(r[3], c, u),
                    function(e, t, r) {
                        l(e[0], s), l(e[1], o), l(e[2], o), l(e[3], s);
                        for (let i = 255; i >= 0; --i) {
                            let n = r[i / 8 | 0] >> (7 & i) & 1;
                            _(e, t, n), v(t, e), v(e, e), _(e, t, n)
                        }
                    }(e, r, t)
            }
            t._w = function(e) {
                if (e.length !== t.aP) throw Error(`ed25519: seed must be ${t.aP} bytes`);
                let r = (0, i.hash)(e);
                r[0] &= 248, r[31] &= 127, r[31] |= 64;
                let s = new Uint8Array(32),
                    o = [n(), n(), n(), n()];
                b(o, r), m(s, o);
                let a = new Uint8Array(64);
                return a.set(e), a.set(s, 32), {
                    publicKey: s,
                    secretKey: a
                }
            };
            let w = new Float64Array([237, 211, 245, 92, 26, 99, 18, 88, 214, 156, 247, 162, 222, 249, 222, 20, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 16]);

            function E(e, t) {
                let r, i, n, s;
                for (i = 63; i >= 32; --i) {
                    for (r = 0, n = i - 32, s = i - 12; n < s; ++n) t[n] += r - 16 * t[i] * w[n - (i - 32)], r = Math.floor((t[n] + 128) / 256), t[n] -= 256 * r;
                    t[n] += r, t[i] = 0
                }
                for (n = 0, r = 0; n < 32; n++) t[n] += r - (t[31] >> 4) * w[n], r = t[n] >> 8, t[n] &= 255;
                for (n = 0; n < 32; n++) t[n] -= r * w[n];
                for (i = 0; i < 32; i++) t[i + 1] += t[i] >> 8, e[i] = 255 & t[i]
            }

            function D(e) {
                let t = new Float64Array(64);
                for (let r = 0; r < 64; r++) t[r] = e[r];
                for (let t = 0; t < 64; t++) e[t] = 0;
                E(e, t)
            }
            t.Xx = function(e, t) {
                let r = new Float64Array(64),
                    s = [n(), n(), n(), n()],
                    o = (0, i.hash)(e.subarray(0, 32));
                o[0] &= 248, o[31] &= 127, o[31] |= 64;
                let a = new Uint8Array(64);
                a.set(o.subarray(32), 32);
                let c = new i.SHA512;
                c.update(a.subarray(32)), c.update(t);
                let u = c.digest();
                c.clean(), D(u), b(s, u), m(a, s), c.reset(), c.update(a.subarray(0, 32)), c.update(e.subarray(32)), c.update(t);
                let l = c.digest();
                D(l);
                for (let e = 0; e < 32; e++) r[e] = u[e];
                for (let e = 0; e < 32; e++)
                    for (let t = 0; t < 32; t++) r[e + t] += l[e] * o[t];
                return E(a.subarray(32), r), a
            }
        },
        59758: function(e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.isSerializableHash = function(e) {
                return void 0 !== e.saveState && void 0 !== e.restoreState && void 0 !== e.cleanSavedState
            }
        },
        373: function(e, t, r) {
            "use strict";
            var i = r(7284),
                n = r(90820),
                s = function() {
                    function e(e, t, r, n) {
                        void 0 === r && (r = new Uint8Array(0)), this._counter = new Uint8Array(1), this._hash = e, this._info = n;
                        var s = i.hmac(this._hash, r, t);
                        this._hmac = new i.HMAC(e, s), this._buffer = new Uint8Array(this._hmac.digestLength), this._bufpos = this._buffer.length
                    }
                    return e.prototype._fillBuffer = function() {
                        this._counter[0]++;
                        var e = this._counter[0];
                        if (0 === e) throw Error("hkdf: cannot expand more");
                        this._hmac.reset(), e > 1 && this._hmac.update(this._buffer), this._info && this._hmac.update(this._info), this._hmac.update(this._counter), this._hmac.finish(this._buffer), this._bufpos = 0
                    }, e.prototype.expand = function(e) {
                        for (var t = new Uint8Array(e), r = 0; r < t.length; r++) this._bufpos === this._buffer.length && this._fillBuffer(), t[r] = this._buffer[this._bufpos++];
                        return t
                    }, e.prototype.clean = function() {
                        this._hmac.clean(), n.wipe(this._buffer), n.wipe(this._counter), this._bufpos = 0
                    }, e
                }();
            t.t = s
        },
        7284: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var i = r(59758),
                n = r(99722),
                s = r(90820),
                o = function() {
                    function e(e, t) {
                        this._finished = !1, this._inner = new e, this._outer = new e, this.blockSize = this._outer.blockSize, this.digestLength = this._outer.digestLength;
                        var r = new Uint8Array(this.blockSize);
                        t.length > this.blockSize ? this._inner.update(t).finish(r).clean() : r.set(t);
                        for (var n = 0; n < r.length; n++) r[n] ^= 54;
                        this._inner.update(r);
                        for (var n = 0; n < r.length; n++) r[n] ^= 106;
                        this._outer.update(r), i.isSerializableHash(this._inner) && i.isSerializableHash(this._outer) && (this._innerKeyedState = this._inner.saveState(), this._outerKeyedState = this._outer.saveState()), s.wipe(r)
                    }
                    return e.prototype.reset = function() {
                        if (!i.isSerializableHash(this._inner) || !i.isSerializableHash(this._outer)) throw Error("hmac: can't reset() because hash doesn't implement restoreState()");
                        return this._inner.restoreState(this._innerKeyedState), this._outer.restoreState(this._outerKeyedState), this._finished = !1, this
                    }, e.prototype.clean = function() {
                        i.isSerializableHash(this._inner) && this._inner.cleanSavedState(this._innerKeyedState), i.isSerializableHash(this._outer) && this._outer.cleanSavedState(this._outerKeyedState), this._inner.clean(), this._outer.clean()
                    }, e.prototype.update = function(e) {
                        return this._inner.update(e), this
                    }, e.prototype.finish = function(e) {
                        return this._finished ? this._outer.finish(e) : (this._inner.finish(e), this._outer.update(e.subarray(0, this.digestLength)).finish(e), this._finished = !0), this
                    }, e.prototype.digest = function() {
                        var e = new Uint8Array(this.digestLength);
                        return this.finish(e), e
                    }, e.prototype.saveState = function() {
                        if (!i.isSerializableHash(this._inner)) throw Error("hmac: can't saveState() because hash doesn't implement it");
                        return this._inner.saveState()
                    }, e.prototype.restoreState = function(e) {
                        if (!i.isSerializableHash(this._inner) || !i.isSerializableHash(this._outer)) throw Error("hmac: can't restoreState() because hash doesn't implement it");
                        return this._inner.restoreState(e), this._outer.restoreState(this._outerKeyedState), this._finished = !1, this
                    }, e.prototype.cleanSavedState = function(e) {
                        if (!i.isSerializableHash(this._inner)) throw Error("hmac: can't cleanSavedState() because hash doesn't implement it");
                        this._inner.cleanSavedState(e)
                    }, e
                }();
            t.HMAC = o, t.hmac = function(e, t, r) {
                var i = new o(e, t);
                i.update(r);
                var n = i.digest();
                return i.clean(), n
            }, t.equal = n.equal
        },
        19109: function(e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.mul = Math.imul || function(e, t) {
                var r = 65535 & e,
                    i = 65535 & t;
                return r * i + ((e >>> 16 & 65535) * i + r * (t >>> 16 & 65535) << 16 >>> 0) | 0
            }, t.add = function(e, t) {
                return e + t | 0
            }, t.sub = function(e, t) {
                return e - t | 0
            }, t.rotl = function(e, t) {
                return e << t | e >>> 32 - t
            }, t.rotr = function(e, t) {
                return e << 32 - t | e >>> t
            }, t.isInteger = Number.isInteger || function(e) {
                return "number" == typeof e && isFinite(e) && Math.floor(e) === e
            }, t.MAX_SAFE_INTEGER = 9007199254740991, t.isSafeInteger = function(e) {
                return t.isInteger(e) && e >= -t.MAX_SAFE_INTEGER && e <= t.MAX_SAFE_INTEGER
            }
        },
        44125: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var i = r(99722),
                n = r(90820);
            t.DIGEST_LENGTH = 16;
            var s = function() {
                function e(e) {
                    this.digestLength = t.DIGEST_LENGTH, this._buffer = new Uint8Array(16), this._r = new Uint16Array(10), this._h = new Uint16Array(10), this._pad = new Uint16Array(8), this._leftover = 0, this._fin = 0, this._finished = !1;
                    var r = e[0] | e[1] << 8;
                    this._r[0] = 8191 & r;
                    var i = e[2] | e[3] << 8;
                    this._r[1] = (r >>> 13 | i << 3) & 8191;
                    var n = e[4] | e[5] << 8;
                    this._r[2] = (i >>> 10 | n << 6) & 7939;
                    var s = e[6] | e[7] << 8;
                    this._r[3] = (n >>> 7 | s << 9) & 8191;
                    var o = e[8] | e[9] << 8;
                    this._r[4] = (s >>> 4 | o << 12) & 255, this._r[5] = o >>> 1 & 8190;
                    var a = e[10] | e[11] << 8;
                    this._r[6] = (o >>> 14 | a << 2) & 8191;
                    var c = e[12] | e[13] << 8;
                    this._r[7] = (a >>> 11 | c << 5) & 8065;
                    var u = e[14] | e[15] << 8;
                    this._r[8] = (c >>> 8 | u << 8) & 8191, this._r[9] = u >>> 5 & 127, this._pad[0] = e[16] | e[17] << 8, this._pad[1] = e[18] | e[19] << 8, this._pad[2] = e[20] | e[21] << 8, this._pad[3] = e[22] | e[23] << 8, this._pad[4] = e[24] | e[25] << 8, this._pad[5] = e[26] | e[27] << 8, this._pad[6] = e[28] | e[29] << 8, this._pad[7] = e[30] | e[31] << 8
                }
                return e.prototype._blocks = function(e, t, r) {
                    for (var i = this._fin ? 0 : 2048, n = this._h[0], s = this._h[1], o = this._h[2], a = this._h[3], c = this._h[4], u = this._h[5], l = this._h[6], h = this._h[7], f = this._h[8], p = this._h[9], d = this._r[0], g = this._r[1], y = this._r[2], v = this._r[3], _ = this._r[4], m = this._r[5], b = this._r[6], w = this._r[7], E = this._r[8], D = this._r[9]; r >= 16;) {
                        var S, I = e[t + 0] | e[t + 1] << 8;
                        n += 8191 & I;
                        var O = e[t + 2] | e[t + 3] << 8;
                        s += (I >>> 13 | O << 3) & 8191;
                        var P = e[t + 4] | e[t + 5] << 8;
                        o += (O >>> 10 | P << 6) & 8191;
                        var C = e[t + 6] | e[t + 7] << 8;
                        a += (P >>> 7 | C << 9) & 8191;
                        var A = e[t + 8] | e[t + 9] << 8;
                        c += (C >>> 4 | A << 12) & 8191, u += A >>> 1 & 8191;
                        var x = e[t + 10] | e[t + 11] << 8;
                        l += (A >>> 14 | x << 2) & 8191;
                        var N = e[t + 12] | e[t + 13] << 8;
                        h += (x >>> 11 | N << 5) & 8191;
                        var R = e[t + 14] | e[t + 15] << 8;
                        f += (N >>> 8 | R << 8) & 8191, p += R >>> 5 | i;
                        var T = 0;
                        T = (S = 0 + n * d + 5 * D * s + 5 * E * o + 5 * w * a + 5 * b * c) >>> 13, S &= 8191, S += 5 * m * u + 5 * _ * l + 5 * v * h + 5 * y * f + 5 * g * p, T += S >>> 13, S &= 8191;
                        var j = T;
                        j += n * g + s * d + 5 * D * o + 5 * E * a + 5 * w * c, T = j >>> 13, j &= 8191, j += 5 * b * u + 5 * m * l + 5 * _ * h + 5 * v * f + 5 * y * p, T += j >>> 13, j &= 8191;
                        var U = T;
                        U += n * y + s * g + o * d + 5 * D * a + 5 * E * c, T = U >>> 13, U &= 8191, U += 5 * w * u + 5 * b * l + 5 * m * h + 5 * _ * f + 5 * v * p, T += U >>> 13, U &= 8191;
                        var L = T;
                        L += n * v + s * y + o * g + a * d + 5 * D * c, T = L >>> 13, L &= 8191, L += 5 * E * u + 5 * w * l + 5 * b * h + 5 * m * f + 5 * _ * p, T += L >>> 13, L &= 8191;
                        var M = T;
                        M += n * _ + s * v + o * y + a * g + c * d, T = M >>> 13, M &= 8191, M += 5 * D * u + 5 * E * l + 5 * w * h + 5 * b * f + 5 * m * p, T += M >>> 13, M &= 8191;
                        var k = T;
                        k += n * m + s * _ + o * v + a * y + c * g, T = k >>> 13, k &= 8191, k += u * d + 5 * D * l + 5 * E * h + 5 * w * f + 5 * b * p, T += k >>> 13, k &= 8191;
                        var z = T;
                        z += n * b + s * m + o * _ + a * v + c * y, T = z >>> 13, z &= 8191, z += u * g + l * d + 5 * D * h + 5 * E * f + 5 * w * p, T += z >>> 13, z &= 8191;
                        var $ = T;
                        $ += n * w + s * b + o * m + a * _ + c * v, T = $ >>> 13, $ &= 8191, $ += u * y + l * g + h * d + 5 * D * f + 5 * E * p, T += $ >>> 13, $ &= 8191;
                        var q = T;
                        q += n * E + s * w + o * b + a * m + c * _, T = q >>> 13, q &= 8191, q += u * v + l * y + h * g + f * d + 5 * D * p, T += q >>> 13, q &= 8191;
                        var H = T;
                        H += n * D + s * E + o * w + a * b + c * m, T = H >>> 13, H &= 8191, H += u * _ + l * v + h * y + f * g + p * d, T += H >>> 13, H &= 8191, S = 8191 & (T = (T = (T << 2) + T | 0) + S | 0), T >>>= 13, j += T, n = S, s = j, o = U, a = L, c = M, u = k, l = z, h = $, f = q, p = H, t += 16, r -= 16
                    }
                    this._h[0] = n, this._h[1] = s, this._h[2] = o, this._h[3] = a, this._h[4] = c, this._h[5] = u, this._h[6] = l, this._h[7] = h, this._h[8] = f, this._h[9] = p
                }, e.prototype.finish = function(e, t) {
                    void 0 === t && (t = 0);
                    var r, i, n, s, o = new Uint16Array(10);
                    if (this._leftover) {
                        for (s = this._leftover, this._buffer[s++] = 1; s < 16; s++) this._buffer[s] = 0;
                        this._fin = 1, this._blocks(this._buffer, 0, 16)
                    }
                    for (r = this._h[1] >>> 13, this._h[1] &= 8191, s = 2; s < 10; s++) this._h[s] += r, r = this._h[s] >>> 13, this._h[s] &= 8191;
                    for (this._h[0] += 5 * r, r = this._h[0] >>> 13, this._h[0] &= 8191, this._h[1] += r, r = this._h[1] >>> 13, this._h[1] &= 8191, this._h[2] += r, o[0] = this._h[0] + 5, r = o[0] >>> 13, o[0] &= 8191, s = 1; s < 10; s++) o[s] = this._h[s] + r, r = o[s] >>> 13, o[s] &= 8191;
                    for (o[9] -= 8192, i = (1 ^ r) - 1, s = 0; s < 10; s++) o[s] &= i;
                    for (s = 0, i = ~i; s < 10; s++) this._h[s] = this._h[s] & i | o[s];
                    for (s = 1, this._h[0] = (this._h[0] | this._h[1] << 13) & 65535, this._h[1] = (this._h[1] >>> 3 | this._h[2] << 10) & 65535, this._h[2] = (this._h[2] >>> 6 | this._h[3] << 7) & 65535, this._h[3] = (this._h[3] >>> 9 | this._h[4] << 4) & 65535, this._h[4] = (this._h[4] >>> 12 | this._h[5] << 1 | this._h[6] << 14) & 65535, this._h[5] = (this._h[6] >>> 2 | this._h[7] << 11) & 65535, this._h[6] = (this._h[7] >>> 5 | this._h[8] << 8) & 65535, this._h[7] = (this._h[8] >>> 8 | this._h[9] << 5) & 65535, n = this._h[0] + this._pad[0], this._h[0] = 65535 & n; s < 8; s++) n = (this._h[s] + this._pad[s] | 0) + (n >>> 16) | 0, this._h[s] = 65535 & n;
                    return e[t + 0] = this._h[0] >>> 0, e[t + 1] = this._h[0] >>> 8, e[t + 2] = this._h[1] >>> 0, e[t + 3] = this._h[1] >>> 8, e[t + 4] = this._h[2] >>> 0, e[t + 5] = this._h[2] >>> 8, e[t + 6] = this._h[3] >>> 0, e[t + 7] = this._h[3] >>> 8, e[t + 8] = this._h[4] >>> 0, e[t + 9] = this._h[4] >>> 8, e[t + 10] = this._h[5] >>> 0, e[t + 11] = this._h[5] >>> 8, e[t + 12] = this._h[6] >>> 0, e[t + 13] = this._h[6] >>> 8, e[t + 14] = this._h[7] >>> 0, e[t + 15] = this._h[7] >>> 8, this._finished = !0, this
                }, e.prototype.update = function(e) {
                    var t, r = 0,
                        i = e.length;
                    if (this._leftover) {
                        (t = 16 - this._leftover) > i && (t = i);
                        for (var n = 0; n < t; n++) this._buffer[this._leftover + n] = e[r + n];
                        if (i -= t, r += t, this._leftover += t, this._leftover < 16) return this;
                        this._blocks(this._buffer, 0, 16), this._leftover = 0
                    }
                    if (i >= 16 && (t = i - i % 16, this._blocks(e, r, t), r += t, i -= t), i) {
                        for (var n = 0; n < i; n++) this._buffer[this._leftover + n] = e[r + n];
                        this._leftover += i
                    }
                    return this
                }, e.prototype.digest = function() {
                    if (this._finished) throw Error("Poly1305 was finished");
                    var e = new Uint8Array(16);
                    return this.finish(e), e
                }, e.prototype.clean = function() {
                    return n.wipe(this._buffer), n.wipe(this._r), n.wipe(this._h), n.wipe(this._pad), this._leftover = 0, this._fin = 0, this._finished = !0, this
                }, e
            }();
            t.Poly1305 = s, t.oneTimeAuth = function(e, t) {
                var r = new s(e);
                r.update(t);
                var i = r.digest();
                return r.clean(), i
            }, t.equal = function(e, r) {
                return e.length === t.DIGEST_LENGTH && r.length === t.DIGEST_LENGTH && i.equal(e, r)
            }
        },
        77379: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.randomStringForEntropy = t.randomString = t.randomUint32 = t.randomBytes = t.defaultRandomSource = void 0;
            let i = r(57570),
                n = r(30392),
                s = r(90820);

            function o(e, r = t.defaultRandomSource) {
                return r.randomBytes(e)
            }
            t.defaultRandomSource = new i.SystemRandomSource, t.randomBytes = o, t.randomUint32 = function(e = t.defaultRandomSource) {
                let r = o(4, e),
                    i = (0, n.readUint32LE)(r);
                return (0, s.wipe)(r), i
            };
            let a = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

            function c(e, r = a, i = t.defaultRandomSource) {
                if (r.length < 2) throw Error("randomString charset is too short");
                if (r.length > 256) throw Error("randomString charset is too long");
                let n = "",
                    c = r.length,
                    u = 256 - 256 % c;
                for (; e > 0;) {
                    let t = o(Math.ceil(256 * e / u), i);
                    for (let i = 0; i < t.length && e > 0; i++) {
                        let s = t[i];
                        s < u && (n += r.charAt(s % c), e--)
                    }(0, s.wipe)(t)
                }
                return n
            }
            t.randomString = c, t.randomStringForEntropy = function(e, r = a, i = t.defaultRandomSource) {
                return c(Math.ceil(e / (Math.log(r.length) / Math.LN2)), r, i)
            }
        },
        54378: function(e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.BrowserRandomSource = void 0;
            class r {
                constructor() {
                    this.isAvailable = !1, this.isInstantiated = !1;
                    let e = "undefined" != typeof self ? self.crypto || self.msCrypto : null;
                    e && void 0 !== e.getRandomValues && (this._crypto = e, this.isAvailable = !0, this.isInstantiated = !0)
                }
                randomBytes(e) {
                    if (!this.isAvailable || !this._crypto) throw Error("Browser random byte generator is not available.");
                    let t = new Uint8Array(e);
                    for (let e = 0; e < t.length; e += 65536) this._crypto.getRandomValues(t.subarray(e, e + Math.min(t.length - e, 65536)));
                    return t
                }
            }
            t.BrowserRandomSource = r
        },
        63402: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.NodeRandomSource = void 0;
            let i = r(90820);
            class n {
                constructor() {
                    this.isAvailable = !1, this.isInstantiated = !1; {
                        let e = r(12553);
                        e && e.randomBytes && (this._crypto = e, this.isAvailable = !0, this.isInstantiated = !0)
                    }
                }
                randomBytes(e) {
                    if (!this.isAvailable || !this._crypto) throw Error("Node.js random byte generator is not available.");
                    let t = this._crypto.randomBytes(e);
                    if (t.length !== e) throw Error("NodeRandomSource: got fewer bytes than requested");
                    let r = new Uint8Array(e);
                    for (let e = 0; e < r.length; e++) r[e] = t[e];
                    return (0, i.wipe)(t), r
                }
            }
            t.NodeRandomSource = n
        },
        57570: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.SystemRandomSource = void 0;
            let i = r(54378),
                n = r(63402);
            class s {
                constructor() {
                    if (this.isAvailable = !1, this.name = "", this._source = new i.BrowserRandomSource, this._source.isAvailable) {
                        this.isAvailable = !0, this.name = "Browser";
                        return
                    }
                    if (this._source = new n.NodeRandomSource, this._source.isAvailable) {
                        this.isAvailable = !0, this.name = "Node";
                        return
                    }
                }
                randomBytes(e) {
                    if (!this.isAvailable) throw Error("System random byte generator is not available.");
                    return this._source.randomBytes(e)
                }
            }
            t.SystemRandomSource = s
        },
        94689: function(e, t, r) {
            "use strict";
            var i = r(30392),
                n = r(90820);
            t.k = 32, t.cn = 64;
            var s = function() {
                function e() {
                    this.digestLength = t.k, this.blockSize = t.cn, this._state = new Int32Array(8), this._temp = new Int32Array(64), this._buffer = new Uint8Array(128), this._bufferLength = 0, this._bytesHashed = 0, this._finished = !1, this.reset()
                }
                return e.prototype._initState = function() {
                    this._state[0] = 1779033703, this._state[1] = 3144134277, this._state[2] = 1013904242, this._state[3] = 2773480762, this._state[4] = 1359893119, this._state[5] = 2600822924, this._state[6] = 528734635, this._state[7] = 1541459225
                }, e.prototype.reset = function() {
                    return this._initState(), this._bufferLength = 0, this._bytesHashed = 0, this._finished = !1, this
                }, e.prototype.clean = function() {
                    n.wipe(this._buffer), n.wipe(this._temp), this.reset()
                }, e.prototype.update = function(e, t) {
                    if (void 0 === t && (t = e.length), this._finished) throw Error("SHA256: can't update because hash was finished.");
                    var r = 0;
                    if (this._bytesHashed += t, this._bufferLength > 0) {
                        for (; this._bufferLength < this.blockSize && t > 0;) this._buffer[this._bufferLength++] = e[r++], t--;
                        this._bufferLength === this.blockSize && (a(this._temp, this._state, this._buffer, 0, this.blockSize), this._bufferLength = 0)
                    }
                    for (t >= this.blockSize && (r = a(this._temp, this._state, e, r, t), t %= this.blockSize); t > 0;) this._buffer[this._bufferLength++] = e[r++], t--;
                    return this
                }, e.prototype.finish = function(e) {
                    if (!this._finished) {
                        var t = this._bytesHashed,
                            r = this._bufferLength,
                            n = t % 64 < 56 ? 64 : 128;
                        this._buffer[r] = 128;
                        for (var s = r + 1; s < n - 8; s++) this._buffer[s] = 0;
                        i.writeUint32BE(t / 536870912 | 0, this._buffer, n - 8), i.writeUint32BE(t << 3, this._buffer, n - 4), a(this._temp, this._state, this._buffer, 0, n), this._finished = !0
                    }
                    for (var s = 0; s < this.digestLength / 4; s++) i.writeUint32BE(this._state[s], e, 4 * s);
                    return this
                }, e.prototype.digest = function() {
                    var e = new Uint8Array(this.digestLength);
                    return this.finish(e), e
                }, e.prototype.saveState = function() {
                    if (this._finished) throw Error("SHA256: cannot save finished state");
                    return {
                        state: new Int32Array(this._state),
                        buffer: this._bufferLength > 0 ? new Uint8Array(this._buffer) : void 0,
                        bufferLength: this._bufferLength,
                        bytesHashed: this._bytesHashed
                    }
                }, e.prototype.restoreState = function(e) {
                    return this._state.set(e.state), this._bufferLength = e.bufferLength, e.buffer && this._buffer.set(e.buffer), this._bytesHashed = e.bytesHashed, this._finished = !1, this
                }, e.prototype.cleanSavedState = function(e) {
                    n.wipe(e.state), e.buffer && n.wipe(e.buffer), e.bufferLength = 0, e.bytesHashed = 0
                }, e
            }();
            t.mE = s;
            var o = new Int32Array([1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298]);

            function a(e, t, r, n, s) {
                for (; s >= 64;) {
                    for (var a = t[0], c = t[1], u = t[2], l = t[3], h = t[4], f = t[5], p = t[6], d = t[7], g = 0; g < 16; g++) {
                        var y = n + 4 * g;
                        e[g] = i.readUint32BE(r, y)
                    }
                    for (var g = 16; g < 64; g++) {
                        var v = e[g - 2],
                            _ = (v >>> 17 | v << 15) ^ (v >>> 19 | v << 13) ^ v >>> 10,
                            m = ((v = e[g - 15]) >>> 7 | v << 25) ^ (v >>> 18 | v << 14) ^ v >>> 3;
                        e[g] = (_ + e[g - 7] | 0) + (m + e[g - 16] | 0)
                    }
                    for (var g = 0; g < 64; g++) {
                        var _ = (((h >>> 6 | h << 26) ^ (h >>> 11 | h << 21) ^ (h >>> 25 | h << 7)) + (h & f ^ ~h & p) | 0) + (d + (o[g] + e[g] | 0) | 0) | 0,
                            m = ((a >>> 2 | a << 30) ^ (a >>> 13 | a << 19) ^ (a >>> 22 | a << 10)) + (a & c ^ a & u ^ c & u) | 0;
                        d = p, p = f, f = h, h = l + _ | 0, l = u, u = c, c = a, a = _ + m | 0
                    }
                    t[0] += a, t[1] += c, t[2] += u, t[3] += l, t[4] += h, t[5] += f, t[6] += p, t[7] += d, n += 64, s -= 64
                }
                return n
            }
            t.vp = function(e) {
                var t = new s;
                t.update(e);
                var r = t.digest();
                return t.clean(), r
            }
        },
        73342: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var i = r(30392),
                n = r(90820);
            t.DIGEST_LENGTH = 64, t.BLOCK_SIZE = 128;
            var s = function() {
                function e() {
                    this.digestLength = t.DIGEST_LENGTH, this.blockSize = t.BLOCK_SIZE, this._stateHi = new Int32Array(8), this._stateLo = new Int32Array(8), this._tempHi = new Int32Array(16), this._tempLo = new Int32Array(16), this._buffer = new Uint8Array(256), this._bufferLength = 0, this._bytesHashed = 0, this._finished = !1, this.reset()
                }
                return e.prototype._initState = function() {
                    this._stateHi[0] = 1779033703, this._stateHi[1] = 3144134277, this._stateHi[2] = 1013904242, this._stateHi[3] = 2773480762, this._stateHi[4] = 1359893119, this._stateHi[5] = 2600822924, this._stateHi[6] = 528734635, this._stateHi[7] = 1541459225, this._stateLo[0] = 4089235720, this._stateLo[1] = 2227873595, this._stateLo[2] = 4271175723, this._stateLo[3] = 1595750129, this._stateLo[4] = 2917565137, this._stateLo[5] = 725511199, this._stateLo[6] = 4215389547, this._stateLo[7] = 327033209
                }, e.prototype.reset = function() {
                    return this._initState(), this._bufferLength = 0, this._bytesHashed = 0, this._finished = !1, this
                }, e.prototype.clean = function() {
                    n.wipe(this._buffer), n.wipe(this._tempHi), n.wipe(this._tempLo), this.reset()
                }, e.prototype.update = function(e, r) {
                    if (void 0 === r && (r = e.length), this._finished) throw Error("SHA512: can't update because hash was finished.");
                    var i = 0;
                    if (this._bytesHashed += r, this._bufferLength > 0) {
                        for (; this._bufferLength < t.BLOCK_SIZE && r > 0;) this._buffer[this._bufferLength++] = e[i++], r--;
                        this._bufferLength === this.blockSize && (a(this._tempHi, this._tempLo, this._stateHi, this._stateLo, this._buffer, 0, this.blockSize), this._bufferLength = 0)
                    }
                    for (r >= this.blockSize && (i = a(this._tempHi, this._tempLo, this._stateHi, this._stateLo, e, i, r), r %= this.blockSize); r > 0;) this._buffer[this._bufferLength++] = e[i++], r--;
                    return this
                }, e.prototype.finish = function(e) {
                    if (!this._finished) {
                        var t = this._bytesHashed,
                            r = this._bufferLength,
                            n = t % 128 < 112 ? 128 : 256;
                        this._buffer[r] = 128;
                        for (var s = r + 1; s < n - 8; s++) this._buffer[s] = 0;
                        i.writeUint32BE(t / 536870912 | 0, this._buffer, n - 8), i.writeUint32BE(t << 3, this._buffer, n - 4), a(this._tempHi, this._tempLo, this._stateHi, this._stateLo, this._buffer, 0, n), this._finished = !0
                    }
                    for (var s = 0; s < this.digestLength / 8; s++) i.writeUint32BE(this._stateHi[s], e, 8 * s), i.writeUint32BE(this._stateLo[s], e, 8 * s + 4);
                    return this
                }, e.prototype.digest = function() {
                    var e = new Uint8Array(this.digestLength);
                    return this.finish(e), e
                }, e.prototype.saveState = function() {
                    if (this._finished) throw Error("SHA256: cannot save finished state");
                    return {
                        stateHi: new Int32Array(this._stateHi),
                        stateLo: new Int32Array(this._stateLo),
                        buffer: this._bufferLength > 0 ? new Uint8Array(this._buffer) : void 0,
                        bufferLength: this._bufferLength,
                        bytesHashed: this._bytesHashed
                    }
                }, e.prototype.restoreState = function(e) {
                    return this._stateHi.set(e.stateHi), this._stateLo.set(e.stateLo), this._bufferLength = e.bufferLength, e.buffer && this._buffer.set(e.buffer), this._bytesHashed = e.bytesHashed, this._finished = !1, this
                }, e.prototype.cleanSavedState = function(e) {
                    n.wipe(e.stateHi), n.wipe(e.stateLo), e.buffer && n.wipe(e.buffer), e.bufferLength = 0, e.bytesHashed = 0
                }, e
            }();
            t.SHA512 = s;
            var o = new Int32Array([1116352408, 3609767458, 1899447441, 602891725, 3049323471, 3964484399, 3921009573, 2173295548, 961987163, 4081628472, 1508970993, 3053834265, 2453635748, 2937671579, 2870763221, 3664609560, 3624381080, 2734883394, 310598401, 1164996542, 607225278, 1323610764, 1426881987, 3590304994, 1925078388, 4068182383, 2162078206, 991336113, 2614888103, 633803317, 3248222580, 3479774868, 3835390401, 2666613458, 4022224774, 944711139, 264347078, 2341262773, 604807628, 2007800933, 770255983, 1495990901, 1249150122, 1856431235, 1555081692, 3175218132, 1996064986, 2198950837, 2554220882, 3999719339, 2821834349, 766784016, 2952996808, 2566594879, 3210313671, 3203337956, 3336571891, 1034457026, 3584528711, 2466948901, 113926993, 3758326383, 338241895, 168717936, 666307205, 1188179964, 773529912, 1546045734, 1294757372, 1522805485, 1396182291, 2643833823, 1695183700, 2343527390, 1986661051, 1014477480, 2177026350, 1206759142, 2456956037, 344077627, 2730485921, 1290863460, 2820302411, 3158454273, 3259730800, 3505952657, 3345764771, 106217008, 3516065817, 3606008344, 3600352804, 1432725776, 4094571909, 1467031594, 275423344, 851169720, 430227734, 3100823752, 506948616, 1363258195, 659060556, 3750685593, 883997877, 3785050280, 958139571, 3318307427, 1322822218, 3812723403, 1537002063, 2003034995, 1747873779, 3602036899, 1955562222, 1575990012, 2024104815, 1125592928, 2227730452, 2716904306, 2361852424, 442776044, 2428436474, 593698344, 2756734187, 3733110249, 3204031479, 2999351573, 3329325298, 3815920427, 3391569614, 3928383900, 3515267271, 566280711, 3940187606, 3454069534, 4118630271, 4000239992, 116418474, 1914138554, 174292421, 2731055270, 289380356, 3203993006, 460393269, 320620315, 685471733, 587496836, 852142971, 1086792851, 1017036298, 365543100, 1126000580, 2618297676, 1288033470, 3409855158, 1501505948, 4234509866, 1607167915, 987167468, 1816402316, 1246189591]);

            function a(e, t, r, n, s, a, c) {
                for (var u, l, h, f, p, d, g, y, v = r[0], _ = r[1], m = r[2], b = r[3], w = r[4], E = r[5], D = r[6], S = r[7], I = n[0], O = n[1], P = n[2], C = n[3], A = n[4], x = n[5], N = n[6], R = n[7]; c >= 128;) {
                    for (var T = 0; T < 16; T++) {
                        var j = 8 * T + a;
                        e[T] = i.readUint32BE(s, j), t[T] = i.readUint32BE(s, j + 4)
                    }
                    for (var T = 0; T < 80; T++) {
                        var U = v,
                            L = _,
                            M = m,
                            k = b,
                            z = w,
                            $ = E,
                            q = D,
                            H = S,
                            F = I,
                            V = O,
                            K = P,
                            B = C,
                            G = A,
                            W = x,
                            J = N,
                            Y = R;
                        if (u = S, p = 65535 & (l = R), d = l >>> 16, g = 65535 & u, y = u >>> 16, u = (w >>> 14 | A << 18) ^ (w >>> 18 | A << 14) ^ (A >>> 9 | w << 23), p += 65535 & (l = (A >>> 14 | w << 18) ^ (A >>> 18 | w << 14) ^ (w >>> 9 | A << 23)), d += l >>> 16, g += 65535 & u, y += u >>> 16, u = w & E ^ ~w & D, p += 65535 & (l = A & x ^ ~A & N), d += l >>> 16, g += 65535 & u, y += u >>> 16, u = o[2 * T], p += 65535 & (l = o[2 * T + 1]), d += l >>> 16, g += 65535 & u, y += u >>> 16, u = e[T % 16], p += 65535 & (l = t[T % 16]), d += l >>> 16, g += 65535 & u, y += u >>> 16, d += p >>> 16, g += d >>> 16, y += g >>> 16, h = 65535 & g | y << 16, f = 65535 & p | d << 16, u = h, p = 65535 & (l = f), d = l >>> 16, g = 65535 & u, y = u >>> 16, u = (v >>> 28 | I << 4) ^ (I >>> 2 | v << 30) ^ (I >>> 7 | v << 25), p += 65535 & (l = (I >>> 28 | v << 4) ^ (v >>> 2 | I << 30) ^ (v >>> 7 | I << 25)), d += l >>> 16, g += 65535 & u, y += u >>> 16, u = v & _ ^ v & m ^ _ & m, p += 65535 & (l = I & O ^ I & P ^ O & P), d += l >>> 16, g += 65535 & u, y += u >>> 16, d += p >>> 16, g += d >>> 16, y += g >>> 16, H = 65535 & g | y << 16, Y = 65535 & p | d << 16, u = k, p = 65535 & (l = B), d = l >>> 16, g = 65535 & u, y = u >>> 16, u = h, p += 65535 & (l = f), d += l >>> 16, g += 65535 & u, y += u >>> 16, d += p >>> 16, g += d >>> 16, y += g >>> 16, k = 65535 & g | y << 16, B = 65535 & p | d << 16, _ = U, m = L, b = M, w = k, E = z, D = $, S = q, v = H, O = F, P = V, C = K, A = B, x = G, N = W, R = J, I = Y, T % 16 == 15)
                            for (var j = 0; j < 16; j++) u = e[j], p = 65535 & (l = t[j]), d = l >>> 16, g = 65535 & u, y = u >>> 16, u = e[(j + 9) % 16], p += 65535 & (l = t[(j + 9) % 16]), d += l >>> 16, g += 65535 & u, y += u >>> 16, u = ((h = e[(j + 1) % 16]) >>> 1 | (f = t[(j + 1) % 16]) << 31) ^ (h >>> 8 | f << 24) ^ h >>> 7, p += 65535 & (l = (f >>> 1 | h << 31) ^ (f >>> 8 | h << 24) ^ (f >>> 7 | h << 25)), d += l >>> 16, g += 65535 & u, y += u >>> 16, u = ((h = e[(j + 14) % 16]) >>> 19 | (f = t[(j + 14) % 16]) << 13) ^ (f >>> 29 | h << 3) ^ h >>> 6, p += 65535 & (l = (f >>> 19 | h << 13) ^ (h >>> 29 | f << 3) ^ (f >>> 6 | h << 26)), d += l >>> 16, g += 65535 & u, y += u >>> 16, d += p >>> 16, g += d >>> 16, y += g >>> 16, e[j] = 65535 & g | y << 16, t[j] = 65535 & p | d << 16
                    }
                    u = v, p = 65535 & (l = I), d = l >>> 16, g = 65535 & u, y = u >>> 16, u = r[0], p += 65535 & (l = n[0]), d += l >>> 16, g += 65535 & u, y += u >>> 16, d += p >>> 16, g += d >>> 16, y += g >>> 16, r[0] = v = 65535 & g | y << 16, n[0] = I = 65535 & p | d << 16, u = _, p = 65535 & (l = O), d = l >>> 16, g = 65535 & u, y = u >>> 16, u = r[1], p += 65535 & (l = n[1]), d += l >>> 16, g += 65535 & u, y += u >>> 16, d += p >>> 16, g += d >>> 16, y += g >>> 16, r[1] = _ = 65535 & g | y << 16, n[1] = O = 65535 & p | d << 16, u = m, p = 65535 & (l = P), d = l >>> 16, g = 65535 & u, y = u >>> 16, u = r[2], p += 65535 & (l = n[2]), d += l >>> 16, g += 65535 & u, y += u >>> 16, d += p >>> 16, g += d >>> 16, y += g >>> 16, r[2] = m = 65535 & g | y << 16, n[2] = P = 65535 & p | d << 16, u = b, p = 65535 & (l = C), d = l >>> 16, g = 65535 & u, y = u >>> 16, u = r[3], p += 65535 & (l = n[3]), d += l >>> 16, g += 65535 & u, y += u >>> 16, d += p >>> 16, g += d >>> 16, y += g >>> 16, r[3] = b = 65535 & g | y << 16, n[3] = C = 65535 & p | d << 16, u = w, p = 65535 & (l = A), d = l >>> 16, g = 65535 & u, y = u >>> 16, u = r[4], p += 65535 & (l = n[4]), d += l >>> 16, g += 65535 & u, y += u >>> 16, d += p >>> 16, g += d >>> 16, y += g >>> 16, r[4] = w = 65535 & g | y << 16, n[4] = A = 65535 & p | d << 16, u = E, p = 65535 & (l = x), d = l >>> 16, g = 65535 & u, y = u >>> 16, u = r[5], p += 65535 & (l = n[5]), d += l >>> 16, g += 65535 & u, y += u >>> 16, d += p >>> 16, g += d >>> 16, y += g >>> 16, r[5] = E = 65535 & g | y << 16, n[5] = x = 65535 & p | d << 16, u = D, p = 65535 & (l = N), d = l >>> 16, g = 65535 & u, y = u >>> 16, u = r[6], p += 65535 & (l = n[6]), d += l >>> 16, g += 65535 & u, y += u >>> 16, d += p >>> 16, g += d >>> 16, y += g >>> 16, r[6] = D = 65535 & g | y << 16, n[6] = N = 65535 & p | d << 16, u = S, p = 65535 & (l = R), d = l >>> 16, g = 65535 & u, y = u >>> 16, u = r[7], p += 65535 & (l = n[7]), d += l >>> 16, g += 65535 & u, y += u >>> 16, d += p >>> 16, g += d >>> 16, y += g >>> 16, r[7] = S = 65535 & g | y << 16, n[7] = R = 65535 & p | d << 16, a += 128, c -= 128
                }
                return a
            }
            t.hash = function(e) {
                var t = new s;
                t.update(e);
                var r = t.digest();
                return t.clean(), r
            }
        },
        90820: function(e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.wipe = function(e) {
                for (var t = 0; t < e.length; t++) e[t] = 0;
                return e
            }
        },
        93347: function(e, t, r) {
            "use strict";
            t.gi = t.Au = t.KS = t.kz = void 0;
            let i = r(77379),
                n = r(90820);

            function s(e) {
                let t = new Float64Array(16);
                if (e)
                    for (let r = 0; r < e.length; r++) t[r] = e[r];
                return t
            }
            t.kz = 32, t.KS = 32;
            let o = new Uint8Array(32);
            o[0] = 9;
            let a = s([56129, 1]);

            function c(e) {
                let t = 1;
                for (let r = 0; r < 16; r++) {
                    let i = e[r] + t + 65535;
                    t = Math.floor(i / 65536), e[r] = i - 65536 * t
                }
                e[0] += t - 1 + 37 * (t - 1)
            }

            function u(e, t, r) {
                let i = ~(r - 1);
                for (let r = 0; r < 16; r++) {
                    let n = i & (e[r] ^ t[r]);
                    e[r] ^= n, t[r] ^= n
                }
            }

            function l(e, t, r) {
                for (let i = 0; i < 16; i++) e[i] = t[i] + r[i]
            }

            function h(e, t, r) {
                for (let i = 0; i < 16; i++) e[i] = t[i] - r[i]
            }

            function f(e, t, r) {
                let i, n, s = 0,
                    o = 0,
                    a = 0,
                    c = 0,
                    u = 0,
                    l = 0,
                    h = 0,
                    f = 0,
                    p = 0,
                    d = 0,
                    g = 0,
                    y = 0,
                    v = 0,
                    _ = 0,
                    m = 0,
                    b = 0,
                    w = 0,
                    E = 0,
                    D = 0,
                    S = 0,
                    I = 0,
                    O = 0,
                    P = 0,
                    C = 0,
                    A = 0,
                    x = 0,
                    N = 0,
                    R = 0,
                    T = 0,
                    j = 0,
                    U = 0,
                    L = r[0],
                    M = r[1],
                    k = r[2],
                    z = r[3],
                    $ = r[4],
                    q = r[5],
                    H = r[6],
                    F = r[7],
                    V = r[8],
                    K = r[9],
                    B = r[10],
                    G = r[11],
                    W = r[12],
                    J = r[13],
                    Y = r[14],
                    Z = r[15];
                s += (i = t[0]) * L, o += i * M, a += i * k, c += i * z, u += i * $, l += i * q, h += i * H, f += i * F, p += i * V, d += i * K, g += i * B, y += i * G, v += i * W, _ += i * J, m += i * Y, b += i * Z, o += (i = t[1]) * L, a += i * M, c += i * k, u += i * z, l += i * $, h += i * q, f += i * H, p += i * F, d += i * V, g += i * K, y += i * B, v += i * G, _ += i * W, m += i * J, b += i * Y, w += i * Z, a += (i = t[2]) * L, c += i * M, u += i * k, l += i * z, h += i * $, f += i * q, p += i * H, d += i * F, g += i * V, y += i * K, v += i * B, _ += i * G, m += i * W, b += i * J, w += i * Y, E += i * Z, c += (i = t[3]) * L, u += i * M, l += i * k, h += i * z, f += i * $, p += i * q, d += i * H, g += i * F, y += i * V, v += i * K, _ += i * B, m += i * G, b += i * W, w += i * J, E += i * Y, D += i * Z, u += (i = t[4]) * L, l += i * M, h += i * k, f += i * z, p += i * $, d += i * q, g += i * H, y += i * F, v += i * V, _ += i * K, m += i * B, b += i * G, w += i * W, E += i * J, D += i * Y, S += i * Z, l += (i = t[5]) * L, h += i * M, f += i * k, p += i * z, d += i * $, g += i * q, y += i * H, v += i * F, _ += i * V, m += i * K, b += i * B, w += i * G, E += i * W, D += i * J, S += i * Y, I += i * Z, h += (i = t[6]) * L, f += i * M, p += i * k, d += i * z, g += i * $, y += i * q, v += i * H, _ += i * F, m += i * V, b += i * K, w += i * B, E += i * G, D += i * W, S += i * J, I += i * Y, O += i * Z, f += (i = t[7]) * L, p += i * M, d += i * k, g += i * z, y += i * $, v += i * q, _ += i * H, m += i * F, b += i * V, w += i * K, E += i * B, D += i * G, S += i * W, I += i * J, O += i * Y, P += i * Z, p += (i = t[8]) * L, d += i * M, g += i * k, y += i * z, v += i * $, _ += i * q, m += i * H, b += i * F, w += i * V, E += i * K, D += i * B, S += i * G, I += i * W, O += i * J, P += i * Y, C += i * Z, d += (i = t[9]) * L, g += i * M, y += i * k, v += i * z, _ += i * $, m += i * q, b += i * H, w += i * F, E += i * V, D += i * K, S += i * B, I += i * G, O += i * W, P += i * J, C += i * Y, A += i * Z, g += (i = t[10]) * L, y += i * M, v += i * k, _ += i * z, m += i * $, b += i * q, w += i * H, E += i * F, D += i * V, S += i * K, I += i * B, O += i * G, P += i * W, C += i * J, A += i * Y, x += i * Z, y += (i = t[11]) * L, v += i * M, _ += i * k, m += i * z, b += i * $, w += i * q, E += i * H, D += i * F, S += i * V, I += i * K, O += i * B, P += i * G, C += i * W, A += i * J, x += i * Y, N += i * Z, v += (i = t[12]) * L, _ += i * M, m += i * k, b += i * z, w += i * $, E += i * q, D += i * H, S += i * F, I += i * V, O += i * K, P += i * B, C += i * G, A += i * W, x += i * J, N += i * Y, R += i * Z, _ += (i = t[13]) * L, m += i * M, b += i * k, w += i * z, E += i * $, D += i * q, S += i * H, I += i * F, O += i * V, P += i * K, C += i * B, A += i * G, x += i * W, N += i * J, R += i * Y, T += i * Z, m += (i = t[14]) * L, b += i * M, w += i * k, E += i * z, D += i * $, S += i * q, I += i * H, O += i * F, P += i * V, C += i * K, A += i * B, x += i * G, N += i * W, R += i * J, T += i * Y, j += i * Z, b += (i = t[15]) * L, w += i * M, E += i * k, D += i * z, S += i * $, I += i * q, O += i * H, P += i * F, C += i * V, A += i * K, x += i * B, N += i * G, R += i * W, T += i * J, j += i * Y, U += i * Z, s += 38 * w, o += 38 * E, a += 38 * D, c += 38 * S, u += 38 * I, l += 38 * O, h += 38 * P, f += 38 * C, p += 38 * A, d += 38 * x, g += 38 * N, y += 38 * R, v += 38 * T, _ += 38 * j, m += 38 * U, n = Math.floor((i = s + (n = 1) + 65535) / 65536), s = i - 65536 * n, n = Math.floor((i = o + n + 65535) / 65536), o = i - 65536 * n, n = Math.floor((i = a + n + 65535) / 65536), a = i - 65536 * n, n = Math.floor((i = c + n + 65535) / 65536), c = i - 65536 * n, n = Math.floor((i = u + n + 65535) / 65536), u = i - 65536 * n, n = Math.floor((i = l + n + 65535) / 65536), l = i - 65536 * n, n = Math.floor((i = h + n + 65535) / 65536), h = i - 65536 * n, n = Math.floor((i = f + n + 65535) / 65536), f = i - 65536 * n, n = Math.floor((i = p + n + 65535) / 65536), p = i - 65536 * n, n = Math.floor((i = d + n + 65535) / 65536), d = i - 65536 * n, n = Math.floor((i = g + n + 65535) / 65536), g = i - 65536 * n, n = Math.floor((i = y + n + 65535) / 65536), y = i - 65536 * n, n = Math.floor((i = v + n + 65535) / 65536), v = i - 65536 * n, n = Math.floor((i = _ + n + 65535) / 65536), _ = i - 65536 * n, n = Math.floor((i = m + n + 65535) / 65536), m = i - 65536 * n, n = Math.floor((i = b + n + 65535) / 65536), b = i - 65536 * n, s += n - 1 + 37 * (n - 1), n = Math.floor((i = s + (n = 1) + 65535) / 65536), s = i - 65536 * n, n = Math.floor((i = o + n + 65535) / 65536), o = i - 65536 * n, n = Math.floor((i = a + n + 65535) / 65536), a = i - 65536 * n, n = Math.floor((i = c + n + 65535) / 65536), c = i - 65536 * n, n = Math.floor((i = u + n + 65535) / 65536), u = i - 65536 * n, n = Math.floor((i = l + n + 65535) / 65536), l = i - 65536 * n, n = Math.floor((i = h + n + 65535) / 65536), h = i - 65536 * n, n = Math.floor((i = f + n + 65535) / 65536), f = i - 65536 * n, n = Math.floor((i = p + n + 65535) / 65536), p = i - 65536 * n, n = Math.floor((i = d + n + 65535) / 65536), d = i - 65536 * n, n = Math.floor((i = g + n + 65535) / 65536), g = i - 65536 * n, n = Math.floor((i = y + n + 65535) / 65536), y = i - 65536 * n, n = Math.floor((i = v + n + 65535) / 65536), v = i - 65536 * n, n = Math.floor((i = _ + n + 65535) / 65536), _ = i - 65536 * n, n = Math.floor((i = m + n + 65535) / 65536), m = i - 65536 * n, n = Math.floor((i = b + n + 65535) / 65536), b = i - 65536 * n, s += n - 1 + 37 * (n - 1), e[0] = s, e[1] = o, e[2] = a, e[3] = c, e[4] = u, e[5] = l, e[6] = h, e[7] = f, e[8] = p, e[9] = d, e[10] = g, e[11] = y, e[12] = v, e[13] = _, e[14] = m, e[15] = b
            }

            function p(e, t) {
                let r = new Uint8Array(32),
                    i = new Float64Array(80),
                    n = s(),
                    o = s(),
                    p = s(),
                    d = s(),
                    g = s(),
                    y = s();
                for (let t = 0; t < 31; t++) r[t] = e[t];
                r[31] = 127 & e[31] | 64, r[0] &= 248,
                    function(e, t) {
                        for (let r = 0; r < 16; r++) e[r] = t[2 * r] + (t[2 * r + 1] << 8);
                        e[15] &= 32767
                    }(i, t);
                for (let e = 0; e < 16; e++) o[e] = i[e];
                n[0] = d[0] = 1;
                for (let e = 254; e >= 0; --e) {
                    let t = r[e >>> 3] >>> (7 & e) & 1;
                    u(n, o, t), u(p, d, t), l(g, n, p), h(n, n, p), l(p, o, d), h(o, o, d), f(d, g, g), f(y, n, n), f(n, p, n), f(p, o, g), l(g, n, p), h(n, n, p), f(o, n, n), h(p, d, y), f(n, p, a), l(n, n, d), f(p, p, n), f(n, d, y), f(d, o, i), f(o, g, g), u(n, o, t), u(p, d, t)
                }
                for (let e = 0; e < 16; e++) i[e + 16] = n[e], i[e + 32] = p[e], i[e + 48] = o[e], i[e + 64] = d[e];
                let v = i.subarray(32),
                    _ = i.subarray(16);
                ! function(e, t) {
                    let r = s();
                    for (let e = 0; e < 16; e++) r[e] = t[e];
                    for (let e = 253; e >= 0; e--) f(r, r, r), 2 !== e && 4 !== e && f(r, r, t);
                    for (let t = 0; t < 16; t++) e[t] = r[t]
                }(v, v), f(_, _, v);
                let m = new Uint8Array(32);
                return ! function(e, t) {
                    let r = s(),
                        i = s();
                    for (let e = 0; e < 16; e++) i[e] = t[e];
                    c(i), c(i), c(i);
                    for (let e = 0; e < 2; e++) {
                        r[0] = i[0] - 65517;
                        for (let e = 1; e < 15; e++) r[e] = i[e] - 65535 - (r[e - 1] >> 16 & 1), r[e - 1] &= 65535;
                        r[15] = i[15] - 32767 - (r[14] >> 16 & 1);
                        let e = r[15] >> 16 & 1;
                        r[14] &= 65535, u(i, r, 1 - e)
                    }
                    for (let t = 0; t < 16; t++) e[2 * t] = 255 & i[t], e[2 * t + 1] = i[t] >> 8
                }(m, _), m
            }
            t.Au = function(e) {
                let r = (0, i.randomBytes)(32, e),
                    s = function(e) {
                        if (e.length !== t.KS) throw Error(`x25519: seed must be ${t.KS} bytes`);
                        let r = new Uint8Array(e);
                        return {
                            publicKey: p(r, o),
                            secretKey: r
                        }
                    }(r);
                return (0, n.wipe)(r), s
            }, t.gi = function(e, r, i = !1) {
                if (e.length !== t.kz) throw Error("X25519: incorrect secret key length");
                if (r.length !== t.kz) throw Error("X25519: incorrect public key length");
                let n = p(e, r);
                if (i) {
                    let e = 0;
                    for (let t = 0; t < n.length; t++) e |= n[t];
                    if (0 === e) throw Error("X25519: invalid shared key")
                }
                return n
            }
        },
        15499: function(e, t, r) {
            "use strict";
            r.d(t, {
                OPTIONAL_EVENTS: function() {
                    return sy
                },
                OPTIONAL_METHODS: function() {
                    return sd
                },
                default: function() {
                    return sC
                }
            });
            var i = {};
            r.r(i), r.d(i, {
                identity: function() {
                    return H
                }
            });
            var n = {};
            r.r(n), r.d(n, {
                base2: function() {
                    return F
                }
            });
            var s = {};
            r.r(s), r.d(s, {
                base8: function() {
                    return V
                }
            });
            var o = {};
            r.r(o), r.d(o, {
                base10: function() {
                    return K
                }
            });
            var a = {};
            r.r(a), r.d(a, {
                base16: function() {
                    return B
                },
                base16upper: function() {
                    return G
                }
            });
            var c = {};
            r.r(c), r.d(c, {
                base32: function() {
                    return W
                },
                base32hex: function() {
                    return X
                },
                base32hexpad: function() {
                    return ee
                },
                base32hexpadupper: function() {
                    return et
                },
                base32hexupper: function() {
                    return Q
                },
                base32pad: function() {
                    return Y
                },
                base32padupper: function() {
                    return Z
                },
                base32upper: function() {
                    return J
                },
                base32z: function() {
                    return er
                }
            });
            var u = {};
            r.r(u), r.d(u, {
                base36: function() {
                    return ei
                },
                base36upper: function() {
                    return en
                }
            });
            var l = {};
            r.r(l), r.d(l, {
                base58btc: function() {
                    return es
                },
                base58flickr: function() {
                    return eo
                }
            });
            var h = {};
            r.r(h), r.d(h, {
                base64: function() {
                    return ea
                },
                base64pad: function() {
                    return ec
                },
                base64url: function() {
                    return eu
                },
                base64urlpad: function() {
                    return el
                }
            });
            var f = {};
            r.r(f), r.d(f, {
                base256emoji: function() {
                    return ed
                }
            });
            var p = {};
            r.r(p), r.d(p, {
                sha256: function() {
                    return eO
                },
                sha512: function() {
                    return eP
                }
            });
            var d = {};
            r.r(d), r.d(d, {
                identity: function() {
                    return eC
                }
            });
            var g = {};
            r.r(g), r.d(g, {
                code: function() {
                    return ex
                },
                decode: function() {
                    return eR
                },
                encode: function() {
                    return eN
                },
                name: function() {
                    return eA
                }
            });
            var y = {};
            r.r(y), r.d(y, {
                code: function() {
                    return eL
                },
                decode: function() {
                    return ek
                },
                encode: function() {
                    return eM
                },
                name: function() {
                    return eU
                }
            });
            var v = r(97531),
                _ = r.n(v),
                m = r(29424),
                b = r(373),
                w = r(77379),
                E = r(94689),
                D = r(93347);

            function S(e) {
                return null != globalThis.Buffer ? new Uint8Array(e.buffer, e.byteOffset, e.byteLength) : e
            }

            function I(e = 0) {
                return null != globalThis.Buffer && null != globalThis.Buffer.allocUnsafe ? S(globalThis.Buffer.allocUnsafe(e)) : new Uint8Array(e)
            }

            function O(e, t) {
                t || (t = e.reduce((e, t) => e + t.length, 0));
                let r = I(t),
                    i = 0;
                for (let t of e) r.set(t, i), i += t.length;
                return S(r)
            }
            var P = function(e, t) {
                if (e.length >= 255) throw TypeError("Alphabet too long");
                for (var r = new Uint8Array(256), i = 0; i < r.length; i++) r[i] = 255;
                for (var n = 0; n < e.length; n++) {
                    var s = e.charAt(n),
                        o = s.charCodeAt(0);
                    if (255 !== r[o]) throw TypeError(s + " is ambiguous");
                    r[o] = n
                }
                var a = e.length,
                    c = e.charAt(0),
                    u = Math.log(a) / Math.log(256),
                    l = Math.log(256) / Math.log(a);

                function h(e) {
                    if ("string" != typeof e) throw TypeError("Expected String");
                    if (0 === e.length) return new Uint8Array;
                    var t = 0;
                    if (" " !== e[0]) {
                        for (var i = 0, n = 0; e[t] === c;) i++, t++;
                        for (var s = (e.length - t) * u + 1 >>> 0, o = new Uint8Array(s); e[t];) {
                            var l = r[e.charCodeAt(t)];
                            if (255 === l) return;
                            for (var h = 0, f = s - 1;
                                (0 !== l || h < n) && -1 !== f; f--, h++) l += a * o[f] >>> 0, o[f] = l % 256 >>> 0, l = l / 256 >>> 0;
                            if (0 !== l) throw Error("Non-zero carry");
                            n = h, t++
                        }
                        if (" " !== e[t]) {
                            for (var p = s - n; p !== s && 0 === o[p];) p++;
                            for (var d = new Uint8Array(i + (s - p)), g = i; p !== s;) d[g++] = o[p++];
                            return d
                        }
                    }
                }
                return {
                    encode: function(t) {
                        if (t instanceof Uint8Array || (ArrayBuffer.isView(t) ? t = new Uint8Array(t.buffer, t.byteOffset, t.byteLength) : Array.isArray(t) && (t = Uint8Array.from(t))), !(t instanceof Uint8Array)) throw TypeError("Expected Uint8Array");
                        if (0 === t.length) return "";
                        for (var r = 0, i = 0, n = 0, s = t.length; n !== s && 0 === t[n];) n++, r++;
                        for (var o = (s - n) * l + 1 >>> 0, u = new Uint8Array(o); n !== s;) {
                            for (var h = t[n], f = 0, p = o - 1;
                                (0 !== h || f < i) && -1 !== p; p--, f++) h += 256 * u[p] >>> 0, u[p] = h % a >>> 0, h = h / a >>> 0;
                            if (0 !== h) throw Error("Non-zero carry");
                            i = f, n++
                        }
                        for (var d = o - i; d !== o && 0 === u[d];) d++;
                        for (var g = c.repeat(r); d < o; ++d) g += e.charAt(u[d]);
                        return g
                    },
                    decodeUnsafe: h,
                    decode: function(e) {
                        var r = h(e);
                        if (r) return r;
                        throw Error(`Non-${t} character`)
                    }
                }
            };
            new Uint8Array(0);
            let C = (e, t) => {
                    if (e === t) return !0;
                    if (e.byteLength !== t.byteLength) return !1;
                    for (let r = 0; r < e.byteLength; r++)
                        if (e[r] !== t[r]) return !1;
                    return !0
                },
                A = e => {
                    if (e instanceof Uint8Array && "Uint8Array" === e.constructor.name) return e;
                    if (e instanceof ArrayBuffer) return new Uint8Array(e);
                    if (ArrayBuffer.isView(e)) return new Uint8Array(e.buffer, e.byteOffset, e.byteLength);
                    throw Error("Unknown type, must be binary type")
                },
                x = e => new TextEncoder().encode(e),
                N = e => new TextDecoder().decode(e);
            class R {
                constructor(e, t, r) {
                    this.name = e, this.prefix = t, this.baseEncode = r
                }
                encode(e) {
                    if (e instanceof Uint8Array) return `${this.prefix}${this.baseEncode(e)}`;
                    throw Error("Unknown type, must be binary type")
                }
            }
            class T {
                constructor(e, t, r) {
                    if (this.name = e, this.prefix = t, void 0 === t.codePointAt(0)) throw Error("Invalid prefix character");
                    this.prefixCodePoint = t.codePointAt(0), this.baseDecode = r
                }
                decode(e) {
                    if ("string" == typeof e) {
                        if (e.codePointAt(0) !== this.prefixCodePoint) throw Error(`Unable to decode multibase string ${JSON.stringify(e)}, ${this.name} decoder only supports inputs prefixed with ${this.prefix}`);
                        return this.baseDecode(e.slice(this.prefix.length))
                    }
                    throw Error("Can only multibase decode strings")
                }
                or(e) {
                    return U(this, e)
                }
            }
            class j {
                constructor(e) {
                    this.decoders = e
                }
                or(e) {
                    return U(this, e)
                }
                decode(e) {
                    let t = e[0],
                        r = this.decoders[t];
                    if (r) return r.decode(e);
                    throw RangeError(`Unable to decode multibase string ${JSON.stringify(e)}, only inputs prefixed with ${Object.keys(this.decoders)} are supported`)
                }
            }
            let U = (e, t) => new j({ ...e.decoders || {
                    [e.prefix]: e
                },
                ...t.decoders || {
                    [t.prefix]: t
                }
            });
            class L {
                constructor(e, t, r, i) {
                    this.name = e, this.prefix = t, this.baseEncode = r, this.baseDecode = i, this.encoder = new R(e, t, r), this.decoder = new T(e, t, i)
                }
                encode(e) {
                    return this.encoder.encode(e)
                }
                decode(e) {
                    return this.decoder.decode(e)
                }
            }
            let M = ({
                    name: e,
                    prefix: t,
                    encode: r,
                    decode: i
                }) => new L(e, t, r, i),
                k = ({
                    prefix: e,
                    name: t,
                    alphabet: r
                }) => {
                    let {
                        encode: i,
                        decode: n
                    } = P(r, t);
                    return M({
                        prefix: e,
                        name: t,
                        encode: i,
                        decode: e => A(n(e))
                    })
                },
                z = (e, t, r, i) => {
                    let n = {};
                    for (let e = 0; e < t.length; ++e) n[t[e]] = e;
                    let s = e.length;
                    for (;
                        "=" === e[s - 1];) --s;
                    let o = new Uint8Array(s * r / 8 | 0),
                        a = 0,
                        c = 0,
                        u = 0;
                    for (let t = 0; t < s; ++t) {
                        let s = n[e[t]];
                        if (void 0 === s) throw SyntaxError(`Non-${i} character`);
                        c = c << r | s, (a += r) >= 8 && (a -= 8, o[u++] = 255 & c >> a)
                    }
                    if (a >= r || 255 & c << 8 - a) throw SyntaxError("Unexpected end of data");
                    return o
                },
                $ = (e, t, r) => {
                    let i = "=" === t[t.length - 1],
                        n = (1 << r) - 1,
                        s = "",
                        o = 0,
                        a = 0;
                    for (let i = 0; i < e.length; ++i)
                        for (a = a << 8 | e[i], o += 8; o > r;) o -= r, s += t[n & a >> o];
                    if (o && (s += t[n & a << r - o]), i)
                        for (; s.length * r & 7;) s += "=";
                    return s
                },
                q = ({
                    name: e,
                    prefix: t,
                    bitsPerChar: r,
                    alphabet: i
                }) => M({
                    prefix: t,
                    name: e,
                    encode: e => $(e, i, r),
                    decode: t => z(t, i, r, e)
                }),
                H = M({
                    prefix: "\x00",
                    name: "identity",
                    encode: e => N(e),
                    decode: e => x(e)
                }),
                F = q({
                    prefix: "0",
                    name: "base2",
                    alphabet: "01",
                    bitsPerChar: 1
                }),
                V = q({
                    prefix: "7",
                    name: "base8",
                    alphabet: "01234567",
                    bitsPerChar: 3
                }),
                K = k({
                    prefix: "9",
                    name: "base10",
                    alphabet: "0123456789"
                }),
                B = q({
                    prefix: "f",
                    name: "base16",
                    alphabet: "0123456789abcdef",
                    bitsPerChar: 4
                }),
                G = q({
                    prefix: "F",
                    name: "base16upper",
                    alphabet: "0123456789ABCDEF",
                    bitsPerChar: 4
                }),
                W = q({
                    prefix: "b",
                    name: "base32",
                    alphabet: "abcdefghijklmnopqrstuvwxyz234567",
                    bitsPerChar: 5
                }),
                J = q({
                    prefix: "B",
                    name: "base32upper",
                    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567",
                    bitsPerChar: 5
                }),
                Y = q({
                    prefix: "c",
                    name: "base32pad",
                    alphabet: "abcdefghijklmnopqrstuvwxyz234567=",
                    bitsPerChar: 5
                }),
                Z = q({
                    prefix: "C",
                    name: "base32padupper",
                    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567=",
                    bitsPerChar: 5
                }),
                X = q({
                    prefix: "v",
                    name: "base32hex",
                    alphabet: "0123456789abcdefghijklmnopqrstuv",
                    bitsPerChar: 5
                }),
                Q = q({
                    prefix: "V",
                    name: "base32hexupper",
                    alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV",
                    bitsPerChar: 5
                }),
                ee = q({
                    prefix: "t",
                    name: "base32hexpad",
                    alphabet: "0123456789abcdefghijklmnopqrstuv=",
                    bitsPerChar: 5
                }),
                et = q({
                    prefix: "T",
                    name: "base32hexpadupper",
                    alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV=",
                    bitsPerChar: 5
                }),
                er = q({
                    prefix: "h",
                    name: "base32z",
                    alphabet: "ybndrfg8ejkmcpqxot1uwisza345h769",
                    bitsPerChar: 5
                }),
                ei = k({
                    prefix: "k",
                    name: "base36",
                    alphabet: "0123456789abcdefghijklmnopqrstuvwxyz"
                }),
                en = k({
                    prefix: "K",
                    name: "base36upper",
                    alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ"
                }),
                es = k({
                    name: "base58btc",
                    prefix: "z",
                    alphabet: "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz"
                }),
                eo = k({
                    name: "base58flickr",
                    prefix: "Z",
                    alphabet: "123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ"
                }),
                ea = q({
                    prefix: "m",
                    name: "base64",
                    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
                    bitsPerChar: 6
                }),
                ec = q({
                    prefix: "M",
                    name: "base64pad",
                    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
                    bitsPerChar: 6
                }),
                eu = q({
                    prefix: "u",
                    name: "base64url",
                    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_",
                    bitsPerChar: 6
                }),
                el = q({
                    prefix: "U",
                    name: "base64urlpad",
                    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_=",
                    bitsPerChar: 6
                }),
                eh = Array.from("\uD83D\uDE80\uD83E\uDE90☄\uD83D\uDEF0\uD83C\uDF0C\uD83C\uDF11\uD83C\uDF12\uD83C\uDF13\uD83C\uDF14\uD83C\uDF15\uD83C\uDF16\uD83C\uDF17\uD83C\uDF18\uD83C\uDF0D\uD83C\uDF0F\uD83C\uDF0E\uD83D\uDC09☀\uD83D\uDCBB\uD83D\uDDA5\uD83D\uDCBE\uD83D\uDCBF\uD83D\uDE02❤\uD83D\uDE0D\uD83E\uDD23\uD83D\uDE0A\uD83D\uDE4F\uD83D\uDC95\uD83D\uDE2D\uD83D\uDE18\uD83D\uDC4D\uD83D\uDE05\uD83D\uDC4F\uD83D\uDE01\uD83D\uDD25\uD83E\uDD70\uD83D\uDC94\uD83D\uDC96\uD83D\uDC99\uD83D\uDE22\uD83E\uDD14\uD83D\uDE06\uD83D\uDE44\uD83D\uDCAA\uD83D\uDE09☺\uD83D\uDC4C\uD83E\uDD17\uD83D\uDC9C\uD83D\uDE14\uD83D\uDE0E\uD83D\uDE07\uD83C\uDF39\uD83E\uDD26\uD83C\uDF89\uD83D\uDC9E✌✨\uD83E\uDD37\uD83D\uDE31\uD83D\uDE0C\uD83C\uDF38\uD83D\uDE4C\uD83D\uDE0B\uD83D\uDC97\uD83D\uDC9A\uD83D\uDE0F\uD83D\uDC9B\uD83D\uDE42\uD83D\uDC93\uD83E\uDD29\uD83D\uDE04\uD83D\uDE00\uD83D\uDDA4\uD83D\uDE03\uD83D\uDCAF\uD83D\uDE48\uD83D\uDC47\uD83C\uDFB6\uD83D\uDE12\uD83E\uDD2D❣\uD83D\uDE1C\uD83D\uDC8B\uD83D\uDC40\uD83D\uDE2A\uD83D\uDE11\uD83D\uDCA5\uD83D\uDE4B\uD83D\uDE1E\uD83D\uDE29\uD83D\uDE21\uD83E\uDD2A\uD83D\uDC4A\uD83E\uDD73\uD83D\uDE25\uD83E\uDD24\uD83D\uDC49\uD83D\uDC83\uD83D\uDE33✋\uD83D\uDE1A\uD83D\uDE1D\uD83D\uDE34\uD83C\uDF1F\uD83D\uDE2C\uD83D\uDE43\uD83C\uDF40\uD83C\uDF37\uD83D\uDE3B\uD83D\uDE13⭐✅\uD83E\uDD7A\uD83C\uDF08\uD83D\uDE08\uD83E\uDD18\uD83D\uDCA6✔\uD83D\uDE23\uD83C\uDFC3\uD83D\uDC90☹\uD83C\uDF8A\uD83D\uDC98\uD83D\uDE20☝\uD83D\uDE15\uD83C\uDF3A\uD83C\uDF82\uD83C\uDF3B\uD83D\uDE10\uD83D\uDD95\uD83D\uDC9D\uD83D\uDE4A\uD83D\uDE39\uD83D\uDDE3\uD83D\uDCAB\uD83D\uDC80\uD83D\uDC51\uD83C\uDFB5\uD83E\uDD1E\uD83D\uDE1B\uD83D\uDD34\uD83D\uDE24\uD83C\uDF3C\uD83D\uDE2B⚽\uD83E\uDD19☕\uD83C\uDFC6\uD83E\uDD2B\uD83D\uDC48\uD83D\uDE2E\uD83D\uDE46\uD83C\uDF7B\uD83C\uDF43\uD83D\uDC36\uD83D\uDC81\uD83D\uDE32\uD83C\uDF3F\uD83E\uDDE1\uD83C\uDF81⚡\uD83C\uDF1E\uD83C\uDF88❌✊\uD83D\uDC4B\uD83D\uDE30\uD83E\uDD28\uD83D\uDE36\uD83E\uDD1D\uD83D\uDEB6\uD83D\uDCB0\uD83C\uDF53\uD83D\uDCA2\uD83E\uDD1F\uD83D\uDE41\uD83D\uDEA8\uD83D\uDCA8\uD83E\uDD2C✈\uD83C\uDF80\uD83C\uDF7A\uD83E\uDD13\uD83D\uDE19\uD83D\uDC9F\uD83C\uDF31\uD83D\uDE16\uD83D\uDC76\uD83E\uDD74▶➡❓\uD83D\uDC8E\uD83D\uDCB8⬇\uD83D\uDE28\uD83C\uDF1A\uD83E\uDD8B\uD83D\uDE37\uD83D\uDD7A⚠\uD83D\uDE45\uD83D\uDE1F\uD83D\uDE35\uD83D\uDC4E\uD83E\uDD32\uD83E\uDD20\uD83E\uDD27\uD83D\uDCCC\uD83D\uDD35\uD83D\uDC85\uD83E\uDDD0\uD83D\uDC3E\uD83C\uDF52\uD83D\uDE17\uD83E\uDD11\uD83C\uDF0A\uD83E\uDD2F\uD83D\uDC37☎\uD83D\uDCA7\uD83D\uDE2F\uD83D\uDC86\uD83D\uDC46\uD83C\uDFA4\uD83D\uDE47\uD83C\uDF51❄\uD83C\uDF34\uD83D\uDCA3\uD83D\uDC38\uD83D\uDC8C\uD83D\uDCCD\uD83E\uDD40\uD83E\uDD22\uD83D\uDC45\uD83D\uDCA1\uD83D\uDCA9\uD83D\uDC50\uD83D\uDCF8\uD83D\uDC7B\uD83E\uDD10\uD83E\uDD2E\uD83C\uDFBC\uD83E\uDD75\uD83D\uDEA9\uD83C\uDF4E\uD83C\uDF4A\uD83D\uDC7C\uD83D\uDC8D\uD83D\uDCE3\uD83E\uDD42"),
                ef = eh.reduce((e, t, r) => (e[r] = t, e), []),
                ep = eh.reduce((e, t, r) => (e[t.codePointAt(0)] = r, e), []),
                ed = M({
                    prefix: "\uD83D\uDE80",
                    name: "base256emoji",
                    encode: function(e) {
                        return e.reduce((e, t) => e += ef[t], "")
                    },
                    decode: function(e) {
                        let t = [];
                        for (let r of e) {
                            let e = ep[r.codePointAt(0)];
                            if (void 0 === e) throw Error(`Non-base256emoji character: ${r}`);
                            t.push(e)
                        }
                        return new Uint8Array(t)
                    }
                });
            var eg = {
                encode: function e(t, r, i) {
                    r = r || [];
                    for (var n = i = i || 0; t >= 2147483648;) r[i++] = 255 & t | 128, t /= 128;
                    for (; - 128 & t;) r[i++] = 255 & t | 128, t >>>= 7;
                    return r[i] = 0 | t, e.bytes = i - n + 1, r
                },
                decode: function e(t, r) {
                    var i, n = 0,
                        r = r || 0,
                        s = 0,
                        o = r,
                        a = t.length;
                    do {
                        if (o >= a) throw e.bytes = 0, RangeError("Could not decode varint");
                        i = t[o++], n += s < 28 ? (127 & i) << s : (127 & i) * Math.pow(2, s), s += 7
                    } while (i >= 128);
                    return e.bytes = o - r, n
                },
                encodingLength: function(e) {
                    return e < 128 ? 1 : e < 16384 ? 2 : e < 2097152 ? 3 : e < 268435456 ? 4 : e < 34359738368 ? 5 : e < 4398046511104 ? 6 : e < 562949953421312 ? 7 : e < 72057594037927940 ? 8 : e < 0x7fffffffffffffff ? 9 : 10
                }
            };
            let ey = (e, t = 0) => [eg.decode(e, t), eg.decode.bytes],
                ev = (e, t, r = 0) => (eg.encode(e, t, r), t),
                e_ = e => eg.encodingLength(e),
                em = (e, t) => {
                    let r = t.byteLength,
                        i = e_(e),
                        n = i + e_(r),
                        s = new Uint8Array(n + r);
                    return ev(e, s, 0), ev(r, s, i), s.set(t, n), new eE(e, r, t, s)
                },
                eb = e => {
                    let t = A(e),
                        [r, i] = ey(t),
                        [n, s] = ey(t.subarray(i)),
                        o = t.subarray(i + s);
                    if (o.byteLength !== n) throw Error("Incorrect length");
                    return new eE(r, n, o, t)
                },
                ew = (e, t) => e === t || e.code === t.code && e.size === t.size && C(e.bytes, t.bytes);
            class eE {
                constructor(e, t, r, i) {
                    this.code = e, this.size = t, this.digest = r, this.bytes = i
                }
            }
            let eD = ({
                name: e,
                code: t,
                encode: r
            }) => new eS(e, t, r);
            class eS {
                constructor(e, t, r) {
                    this.name = e, this.code = t, this.encode = r
                }
                digest(e) {
                    if (e instanceof Uint8Array) {
                        let t = this.encode(e);
                        return t instanceof Uint8Array ? em(this.code, t) : t.then(e => em(this.code, e))
                    }
                    throw Error("Unknown type, must be binary type")
                }
            }
            let eI = e => async t => new Uint8Array(await crypto.subtle.digest(e, t)),
                eO = eD({
                    name: "sha2-256",
                    code: 18,
                    encode: eI("SHA-256")
                }),
                eP = eD({
                    name: "sha2-512",
                    code: 19,
                    encode: eI("SHA-512")
                }),
                eC = {
                    code: 0,
                    name: "identity",
                    encode: A,
                    digest: e => em(0, A(e))
                },
                eA = "raw",
                ex = 85,
                eN = e => A(e),
                eR = e => A(e),
                eT = new TextEncoder,
                ej = new TextDecoder,
                eU = "json",
                eL = 512,
                eM = e => eT.encode(JSON.stringify(e)),
                ek = e => JSON.parse(ej.decode(e));
            class ez {
                constructor(e, t, r, i) {
                    this.code = t, this.version = e, this.multihash = r, this.bytes = i, this.byteOffset = i.byteOffset, this.byteLength = i.byteLength, this.asCID = this, this._baseCache = new Map, Object.defineProperties(this, {
                        byteOffset: eW,
                        byteLength: eW,
                        code: eG,
                        version: eG,
                        multihash: eG,
                        bytes: eG,
                        _baseCache: eW,
                        asCID: eW
                    })
                }
                toV0() {
                    if (0 === this.version) return this; {
                        let {
                            code: e,
                            multihash: t
                        } = this;
                        if (e !== eF) throw Error("Cannot convert a non dag-pb CID to CIDv0");
                        if (t.code !== eV) throw Error("Cannot convert non sha2-256 multihash CID to CIDv0");
                        return ez.createV0(t)
                    }
                }
                toV1() {
                    switch (this.version) {
                        case 0:
                            {
                                let {
                                    code: e,
                                    digest: t
                                } = this.multihash,
                                r = em(e, t);
                                return ez.createV1(this.code, r)
                            }
                        case 1:
                            return this;
                        default:
                            throw Error(`Can not convert CID version ${this.version} to version 0. This is a bug please report`)
                    }
                }
                equals(e) {
                    return e && this.code === e.code && this.version === e.version && ew(this.multihash, e.multihash)
                }
                toString(e) {
                    let {
                        bytes: t,
                        version: r,
                        _baseCache: i
                    } = this;
                    return 0 === r ? eq(t, i, e || es.encoder) : eH(t, i, e || W.encoder)
                }
                toJSON() {
                    return {
                        code: this.code,
                        version: this.version,
                        hash: this.multihash.bytes
                    }
                }
                get[Symbol.toStringTag]() {
                    return "CID"
                }[Symbol.for("nodejs.util.inspect.custom")]() {
                    return "CID(" + this.toString() + ")"
                }
                static isCID(e) {
                    return eJ(/^0\.0/, eY), !!(e && (e[eB] || e.asCID === e))
                }
                get toBaseEncodedString() {
                    throw Error("Deprecated, use .toString()")
                }
                get codec() {
                    throw Error('"codec" property is deprecated, use integer "code" property instead')
                }
                get buffer() {
                    throw Error("Deprecated .buffer property, use .bytes to get Uint8Array instead")
                }
                get multibaseName() {
                    throw Error('"multibaseName" property is deprecated')
                }
                get prefix() {
                    throw Error('"prefix" property is deprecated')
                }
                static asCID(e) {
                    if (e instanceof ez) return e;
                    if (null != e && e.asCID === e) {
                        let {
                            version: t,
                            code: r,
                            multihash: i,
                            bytes: n
                        } = e;
                        return new ez(t, r, i, n || eK(t, r, i.bytes))
                    }
                    if (null == e || !0 !== e[eB]) return null; {
                        let {
                            version: t,
                            multihash: r,
                            code: i
                        } = e, n = eb(r);
                        return ez.create(t, i, n)
                    }
                }
                static create(e, t, r) {
                    if ("number" != typeof t) throw Error("String codecs are no longer supported");
                    switch (e) {
                        case 0:
                            if (t === eF) return new ez(e, t, r, r.bytes);
                            throw Error(`Version 0 CID must use dag-pb (code: ${eF}) block encoding`);
                        case 1:
                            {
                                let i = eK(e, t, r.bytes);
                                return new ez(e, t, r, i)
                            }
                        default:
                            throw Error("Invalid version")
                    }
                }
                static createV0(e) {
                    return ez.create(0, eF, e)
                }
                static createV1(e, t) {
                    return ez.create(1, e, t)
                }
                static decode(e) {
                    let [t, r] = ez.decodeFirst(e);
                    if (r.length) throw Error("Incorrect length");
                    return t
                }
                static decodeFirst(e) {
                    let t = ez.inspectBytes(e),
                        r = t.size - t.multihashSize,
                        i = A(e.subarray(r, r + t.multihashSize));
                    if (i.byteLength !== t.multihashSize) throw Error("Incorrect length");
                    let n = i.subarray(t.multihashSize - t.digestSize),
                        s = new eE(t.multihashCode, t.digestSize, n, i);
                    return [0 === t.version ? ez.createV0(s) : ez.createV1(t.codec, s), e.subarray(t.size)]
                }
                static inspectBytes(e) {
                    let t = 0,
                        r = () => {
                            let [r, i] = ey(e.subarray(t));
                            return t += i, r
                        },
                        i = r(),
                        n = eF;
                    if (18 === i ? (i = 0, t = 0) : 1 === i && (n = r()), 0 !== i && 1 !== i) throw RangeError(`Invalid CID version ${i}`);
                    let s = t,
                        o = r(),
                        a = r(),
                        c = t + a;
                    return {
                        version: i,
                        codec: n,
                        multihashCode: o,
                        digestSize: a,
                        multihashSize: c - s,
                        size: c
                    }
                }
                static parse(e, t) {
                    let [r, i] = e$(e, t), n = ez.decode(i);
                    return n._baseCache.set(r, e), n
                }
            }
            let e$ = (e, t) => {
                    switch (e[0]) {
                        case "Q":
                            return [es.prefix, (t || es).decode(`${es.prefix}${e}`)];
                        case es.prefix:
                            return [es.prefix, (t || es).decode(e)];
                        case W.prefix:
                            return [W.prefix, (t || W).decode(e)];
                        default:
                            if (null == t) throw Error("To parse non base32 or base58btc encoded CID multibase decoder must be provided");
                            return [e[0], t.decode(e)]
                    }
                },
                eq = (e, t, r) => {
                    let {
                        prefix: i
                    } = r;
                    if (i !== es.prefix) throw Error(`Cannot string encode V0 in ${r.name} encoding`);
                    let n = t.get(i);
                    if (null != n) return n; {
                        let n = r.encode(e).slice(1);
                        return t.set(i, n), n
                    }
                },
                eH = (e, t, r) => {
                    let {
                        prefix: i
                    } = r, n = t.get(i);
                    if (null != n) return n; {
                        let n = r.encode(e);
                        return t.set(i, n), n
                    }
                },
                eF = 112,
                eV = 18,
                eK = (e, t, r) => {
                    let i = e_(e),
                        n = i + e_(t),
                        s = new Uint8Array(n + r.byteLength);
                    return ev(e, s, 0), ev(t, s, i), s.set(r, n), s
                },
                eB = Symbol.for("@ipld/js-cid/CID"),
                eG = {
                    writable: !1,
                    configurable: !1,
                    enumerable: !0
                },
                eW = {
                    writable: !1,
                    enumerable: !1,
                    configurable: !1
                },
                eJ = (e, t) => {
                    if (e.test("0.0.0-dev")) console.warn(t);
                    else throw Error(t)
                },
                eY = `CID.isCID(v) is deprecated and will be removed in the next major release.
Following code pattern:

if (CID.isCID(value)) {
  doSomethingWithCID(value)
}

Is replaced with:

const cid = CID.asCID(value)
if (cid) {
  // Make sure to use cid instead of value
  doSomethingWithCID(cid)
}
`,
                eZ = { ...i,
                    ...n,
                    ...s,
                    ...o,
                    ...a,
                    ...c,
                    ...u,
                    ...l,
                    ...h,
                    ...f
                };

            function eX(e, t, r, i) {
                return {
                    name: e,
                    prefix: t,
                    encoder: {
                        name: e,
                        prefix: t,
                        encode: r
                    },
                    decoder: {
                        decode: i
                    }
                }
            }({ ...p,
                ...d
            });
            let eQ = eX("utf8", "u", e => "u" + new TextDecoder("utf8").decode(e), e => new TextEncoder().encode(e.substring(1))),
                e0 = eX("ascii", "a", e => {
                    let t = "a";
                    for (let r = 0; r < e.length; r++) t += String.fromCharCode(e[r]);
                    return t
                }, e => {
                    let t = I((e = e.substring(1)).length);
                    for (let r = 0; r < e.length; r++) t[r] = e.charCodeAt(r);
                    return t
                }),
                e1 = {
                    utf8: eQ,
                    "utf-8": eQ,
                    hex: eZ.base16,
                    latin1: e0,
                    ascii: e0,
                    binary: e0,
                    ...eZ
                };

            function e5(e, t = "utf8") {
                let r = e1[t];
                if (!r) throw Error(`Unsupported encoding "${t}"`);
                return ("utf8" === t || "utf-8" === t) && null != globalThis.Buffer && null != globalThis.Buffer.from ? S(globalThis.Buffer.from(e, "utf-8")) : r.decoder.decode(`${r.prefix}${e}`)
            }

            function e3(e, t = "utf8") {
                let r = e1[t];
                if (!r) throw Error(`Unsupported encoding "${t}"`);
                return ("utf8" === t || "utf-8" === t) && null != globalThis.Buffer && null != globalThis.Buffer.from ? globalThis.Buffer.from(e.buffer, e.byteOffset, e.byteLength).toString("utf8") : r.encoder.encode(e).substring(1)
            }
            var e6 = r(50928),
                e2 = r(71951),
                e8 = r(91920),
                e4 = r(20414),
                e9 = r(83041);
            r(19434);
            let e7 = {
                waku: {
                    publish: "waku_publish",
                    batchPublish: "waku_batchPublish",
                    subscribe: "waku_subscribe",
                    batchSubscribe: "waku_batchSubscribe",
                    subscription: "waku_subscription",
                    unsubscribe: "waku_unsubscribe",
                    batchUnsubscribe: "waku_batchUnsubscribe"
                },
                irn: {
                    publish: "irn_publish",
                    batchPublish: "irn_batchPublish",
                    subscribe: "irn_subscribe",
                    batchSubscribe: "irn_batchSubscribe",
                    subscription: "irn_subscription",
                    unsubscribe: "irn_unsubscribe",
                    batchUnsubscribe: "irn_batchUnsubscribe"
                },
                iridium: {
                    publish: "iridium_publish",
                    batchPublish: "iridium_batchPublish",
                    subscribe: "iridium_subscribe",
                    batchSubscribe: "iridium_batchSubscribe",
                    subscription: "iridium_subscription",
                    unsubscribe: "iridium_unsubscribe",
                    batchUnsubscribe: "iridium_batchUnsubscribe"
                }
            };
            var te = r(13158);

            function tt(e, t) {
                return e.includes(":") ? [e] : t.chains || []
            }
            let tr = "base10",
                ti = "base16",
                tn = "base64pad",
                ts = "utf8";

            function to() {
                return e3((0, w.randomBytes)(32), ti)
            }

            function ta(e) {
                return e3((0, E.vp)(e5(e, ts)), ti)
            }

            function tc(e) {
                return Number(e3(e, tr))
            }

            function tu(e) {
                let t = e5(e, tn),
                    r = t.slice(0, 1);
                if (1 === tc(r)) {
                    let e = t.slice(1, 33),
                        i = t.slice(33, 45);
                    return {
                        type: r,
                        sealed: t.slice(45),
                        iv: i,
                        senderPublicKey: e
                    }
                }
                let i = t.slice(1, 13);
                return {
                    type: r,
                    sealed: t.slice(13),
                    iv: i
                }
            }

            function tl(e) {
                let t = e ? .type || 0;
                if (1 === t) {
                    if (typeof e ? .senderPublicKey > "u") throw Error("missing sender public key");
                    if (typeof e ? .receiverPublicKey > "u") throw Error("missing receiver public key")
                }
                return {
                    type: t,
                    senderPublicKey: e ? .senderPublicKey,
                    receiverPublicKey: e ? .receiverPublicKey
                }
            }

            function th(e) {
                return 1 === e.type && "string" == typeof e.senderPublicKey && "string" == typeof e.receiverPublicKey
            }
            var tf = Object.defineProperty,
                tp = Object.getOwnPropertySymbols,
                td = Object.prototype.hasOwnProperty,
                tg = Object.prototype.propertyIsEnumerable,
                ty = (e, t, r) => t in e ? tf(e, t, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: r
                }) : e[t] = r,
                tv = (e, t) => {
                    for (var r in t || (t = {})) td.call(t, r) && ty(e, r, t[r]);
                    if (tp)
                        for (var r of tp(t)) tg.call(t, r) && ty(e, r, t[r]);
                    return e
                };
            let t_ = {
                reactNative: "react-native",
                node: "node",
                browser: "browser",
                unknown: "unknown"
            };

            function tm() {
                return "u" > typeof te && "u" > typeof te.versions && "u" > typeof te.versions.node
            }

            function tb() {
                return !(0, e8.getDocument)() && !!(0, e8.getNavigator)() && "ReactNative" === navigator.product
            }

            function tw() {
                return !tm() && !!(0, e8.getNavigator)()
            }

            function tE() {
                return tb() ? t_.reactNative : tm() ? t_.node : tw() ? t_.browser : t_.unknown
            }

            function tD(e, t) {
                return e.filter(e => t.includes(e)).length === e.length
            }

            function tS(e) {
                return Object.fromEntries(e.entries())
            }

            function tI(e) {
                return new Map(Object.entries(e))
            }

            function tO(e = e2.FIVE_MINUTES, t) {
                let r, i, n;
                let s = (0, e2.toMiliseconds)(e || e2.FIVE_MINUTES);
                return {
                    resolve: e => {
                        n && r && (clearTimeout(n), r(e))
                    },
                    reject: e => {
                        n && i && (clearTimeout(n), i(e))
                    },
                    done: () => new Promise((e, o) => {
                        n = setTimeout(() => {
                            o(Error(t))
                        }, s), r = e, i = o
                    })
                }
            }

            function tP(e, t, r) {
                return new Promise(async (i, n) => {
                    let s = setTimeout(() => n(Error(r)), t);
                    try {
                        let t = await e;
                        i(t)
                    } catch (e) {
                        n(e)
                    }
                    clearTimeout(s)
                })
            }

            function tC(e, t) {
                if ("string" == typeof t && t.startsWith(`${e}:`)) return t;
                if ("topic" === e.toLowerCase()) {
                    if ("string" != typeof t) throw Error('Value must be "string" for expirer target type: topic');
                    return `topic:${t}`
                }
                if ("id" === e.toLowerCase()) {
                    if ("number" != typeof t) throw Error('Value must be "number" for expirer target type: id');
                    return `id:${t}`
                }
                throw Error(`Unknown expirer target type: ${e}`)
            }

            function tA(e) {
                let [t, r] = e.split(":"), i = {
                    id: void 0,
                    topic: void 0
                };
                if ("topic" === t && "string" == typeof r) i.topic = r;
                else if ("id" === t && Number.isInteger(Number(r))) i.id = Number(r);
                else throw Error(`Invalid target, expected id:number or topic:string, got ${t}:${r}`);
                return i
            }

            function tx(e, t) {
                return (0, e2.fromMiliseconds)((t || Date.now()) + (0, e2.toMiliseconds)(e))
            }

            function tN(e) {
                return Date.now() >= (0, e2.toMiliseconds)(e)
            }

            function tR(e, t) {
                return `${e}${t?`:${t}`:""}`
            }

            function tT(e = [], t = []) {
                return [...new Set([...e, ...t])]
            }
            async function tj({
                id: e,
                topic: t,
                wcDeepLink: i
            }) {
                try {
                    if (!i) return;
                    let n = "string" == typeof i ? JSON.parse(i) : i,
                        s = n ? .href;
                    if ("string" != typeof s) return;
                    s.endsWith("/") && (s = s.slice(0, -1));
                    let o = `${s}/wc?requestId=${e}&sessionTopic=${t}`,
                        a = tE();
                    a === t_.browser ? o.startsWith("https://") ? window.open(o, "_blank", "noreferrer noopener") : window.open(o, "_self", "noreferrer noopener") : a === t_.reactNative && "u" > typeof(null == r.g ? void 0 : r.g.Linking) && await r.g.Linking.openURL(o)
                } catch (e) {
                    console.error(e)
                }
            }

            function tU(e) {
                return e ? .relay || {
                    protocol: "irn"
                }
            }

            function tL(e) {
                let t = e7[e];
                if (typeof t > "u") throw Error(`Relay Protocol not supported: ${e}`);
                return t
            }
            var tM = Object.defineProperty,
                tk = Object.getOwnPropertySymbols,
                tz = Object.prototype.hasOwnProperty,
                t$ = Object.prototype.propertyIsEnumerable,
                tq = (e, t, r) => t in e ? tM(e, t, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: r
                }) : e[t] = r,
                tH = (e, t) => {
                    for (var r in t || (t = {})) tz.call(t, r) && tq(e, r, t[r]);
                    if (tk)
                        for (var r of tk(t)) t$.call(t, r) && tq(e, r, t[r]);
                    return e
                };

            function tF(e) {
                let t = [];
                return e.forEach(e => {
                    let [r, i] = e.split(":");
                    t.push(`${r}:${i}`)
                }), t
            }

            function tV(e) {
                return e.includes(":")
            }

            function tK(e) {
                return tV(e) ? e.split(":")[0] : e
            }
            Object.prototype.hasOwnProperty, Object.prototype.propertyIsEnumerable;
            let tB = {
                    INVALID_METHOD: {
                        message: "Invalid method.",
                        code: 1001
                    },
                    INVALID_EVENT: {
                        message: "Invalid event.",
                        code: 1002
                    },
                    INVALID_UPDATE_REQUEST: {
                        message: "Invalid update request.",
                        code: 1003
                    },
                    INVALID_EXTEND_REQUEST: {
                        message: "Invalid extend request.",
                        code: 1004
                    },
                    INVALID_SESSION_SETTLE_REQUEST: {
                        message: "Invalid session settle request.",
                        code: 1005
                    },
                    UNAUTHORIZED_METHOD: {
                        message: "Unauthorized method.",
                        code: 3001
                    },
                    UNAUTHORIZED_EVENT: {
                        message: "Unauthorized event.",
                        code: 3002
                    },
                    UNAUTHORIZED_UPDATE_REQUEST: {
                        message: "Unauthorized update request.",
                        code: 3003
                    },
                    UNAUTHORIZED_EXTEND_REQUEST: {
                        message: "Unauthorized extend request.",
                        code: 3004
                    },
                    USER_REJECTED: {
                        message: "User rejected.",
                        code: 5e3
                    },
                    USER_REJECTED_CHAINS: {
                        message: "User rejected chains.",
                        code: 5001
                    },
                    USER_REJECTED_METHODS: {
                        message: "User rejected methods.",
                        code: 5002
                    },
                    USER_REJECTED_EVENTS: {
                        message: "User rejected events.",
                        code: 5003
                    },
                    UNSUPPORTED_CHAINS: {
                        message: "Unsupported chains.",
                        code: 5100
                    },
                    UNSUPPORTED_METHODS: {
                        message: "Unsupported methods.",
                        code: 5101
                    },
                    UNSUPPORTED_EVENTS: {
                        message: "Unsupported events.",
                        code: 5102
                    },
                    UNSUPPORTED_ACCOUNTS: {
                        message: "Unsupported accounts.",
                        code: 5103
                    },
                    UNSUPPORTED_NAMESPACE_KEY: {
                        message: "Unsupported namespace key.",
                        code: 5104
                    },
                    USER_DISCONNECTED: {
                        message: "User disconnected.",
                        code: 6e3
                    },
                    SESSION_SETTLEMENT_FAILED: {
                        message: "Session settlement failed.",
                        code: 7e3
                    },
                    WC_METHOD_UNSUPPORTED: {
                        message: "Unsupported wc_ method.",
                        code: 10001
                    }
                },
                tG = {
                    NOT_INITIALIZED: {
                        message: "Not initialized.",
                        code: 1
                    },
                    NO_MATCHING_KEY: {
                        message: "No matching key.",
                        code: 2
                    },
                    RESTORE_WILL_OVERRIDE: {
                        message: "Restore will override.",
                        code: 3
                    },
                    RESUBSCRIBED: {
                        message: "Resubscribed.",
                        code: 4
                    },
                    MISSING_OR_INVALID: {
                        message: "Missing or invalid.",
                        code: 5
                    },
                    EXPIRED: {
                        message: "Expired.",
                        code: 6
                    },
                    UNKNOWN_TYPE: {
                        message: "Unknown type.",
                        code: 7
                    },
                    MISMATCHED_TOPIC: {
                        message: "Mismatched topic.",
                        code: 8
                    },
                    NON_CONFORMING_NAMESPACES: {
                        message: "Non conforming namespaces.",
                        code: 9
                    }
                };

            function tW(e, t) {
                let {
                    message: r,
                    code: i
                } = tG[e];
                return {
                    message: t ? `${r} ${t}` : r,
                    code: i
                }
            }

            function tJ(e, t) {
                let {
                    message: r,
                    code: i
                } = tB[e];
                return {
                    message: t ? `${r} ${t}` : r,
                    code: i
                }
            }

            function tY(e, t) {
                return !!Array.isArray(e) && (!("u" > typeof t) || !e.length || e.every(t))
            }

            function tZ(e) {
                return Object.getPrototypeOf(e) === Object.prototype && Object.keys(e).length
            }

            function tX(e) {
                return typeof e > "u"
            }

            function tQ(e, t) {
                return !!(t && tX(e)) || "string" == typeof e && !!e.trim().length
            }

            function t0(e, t) {
                return !!(t && tX(e)) || "number" == typeof e && !isNaN(e)
            }

            function t1(e) {
                return !!(tQ(e, !1) && e.includes(":")) && 2 === e.split(":").length
            }

            function t5(e) {
                let t = !0;
                return tY(e) ? e.length && (t = e.every(e => tQ(e, !1))) : t = !1, t
            }

            function t3(e, t) {
                let r = null;
                return Object.values(e).forEach(e => {
                    var i;
                    let n;
                    if (r) return;
                    let s = (i = `${t}, namespace`, n = null, t5(e ? .methods) ? t5(e ? .events) || (n = tJ("UNSUPPORTED_EVENTS", `${i}, events should be an array of strings or empty array for no events`)) : n = tJ("UNSUPPORTED_METHODS", `${i}, methods should be an array of strings or empty array for no methods`), n);
                    s && (r = s)
                }), r
            }

            function t6(e, t) {
                let r = null;
                if (e && tZ(e)) {
                    let i;
                    let n = t3(e, t);
                    n && (r = n);
                    let s = (i = null, Object.values(e).forEach(e => {
                        var r, n;
                        let s;
                        if (i) return;
                        let o = (r = e ? .accounts, n = `${t} namespace`, s = null, tY(r) ? r.forEach(e => {
                            s || function(e) {
                                if (tQ(e, !1) && e.includes(":")) {
                                    let t = e.split(":");
                                    if (3 === t.length) {
                                        let e = t[0] + ":" + t[1];
                                        return !!t[2] && t1(e)
                                    }
                                }
                                return !1
                            }(e) || (s = tJ("UNSUPPORTED_ACCOUNTS", `${n}, account ${e} should be a string and conform to "namespace:chainId:address" format`))
                        }) : s = tJ("UNSUPPORTED_ACCOUNTS", `${n}, accounts should be an array of strings conforming to "namespace:chainId:address" format`), s);
                        o && (i = o)
                    }), i);
                    s && (r = s)
                } else r = tW("MISSING_OR_INVALID", `${t}, namespaces should be an object with data`);
                return r
            }

            function t2(e) {
                return tQ(e.protocol, !0)
            }

            function t8(e) {
                return "u" > typeof e
            }

            function t4(e, t) {
                return !(!t1(t) || !(function(e) {
                    let t = [];
                    return Object.values(e).forEach(e => {
                        t.push(...tF(e.accounts))
                    }), t
                })(e).includes(t))
            }

            function t9(e, t, r) {
                let i = null,
                    n = function(e) {
                        let t = {};
                        return Object.keys(e).forEach(r => {
                            var i;
                            r.includes(":") ? t[r] = e[r] : null == (i = e[r].chains) || i.forEach(i => {
                                t[i] = {
                                    methods: e[r].methods,
                                    events: e[r].events
                                }
                            })
                        }), t
                    }(e),
                    s = function(e) {
                        let t = {};
                        return Object.keys(e).forEach(r => {
                            if (r.includes(":")) t[r] = e[r];
                            else {
                                let i = tF(e[r].accounts);
                                i ? .forEach(i => {
                                    t[i] = {
                                        accounts: e[r].accounts.filter(e => e.includes(`${i}:`)),
                                        methods: e[r].methods,
                                        events: e[r].events
                                    }
                                })
                            }
                        }), t
                    }(t),
                    o = Object.keys(n),
                    a = Object.keys(s),
                    c = t7(Object.keys(e)),
                    u = t7(Object.keys(t)),
                    l = c.filter(e => !u.includes(e));
                return l.length && (i = tW("NON_CONFORMING_NAMESPACES", `${r} namespaces keys don't satisfy requiredNamespaces.
      Required: ${l.toString()}
      Received: ${Object.keys(t).toString()}`)), tD(o, a) || (i = tW("NON_CONFORMING_NAMESPACES", `${r} namespaces chains don't satisfy required namespaces.
      Required: ${o.toString()}
      Approved: ${a.toString()}`)), Object.keys(t).forEach(e => {
                    if (!e.includes(":") || i) return;
                    let n = tF(t[e].accounts);
                    n.includes(e) || (i = tW("NON_CONFORMING_NAMESPACES", `${r} namespaces accounts don't satisfy namespace accounts for ${e}
        Required: ${e}
        Approved: ${n.toString()}`))
                }), o.forEach(e => {
                    i || (tD(n[e].methods, s[e].methods) ? tD(n[e].events, s[e].events) || (i = tW("NON_CONFORMING_NAMESPACES", `${r} namespaces events don't satisfy namespace events for ${e}`)) : i = tW("NON_CONFORMING_NAMESPACES", `${r} namespaces methods don't satisfy namespace methods for ${e}`))
                }), i
            }

            function t7(e) {
                return [...new Set(e.map(e => e.includes(":") ? e.split(":")[0] : e))]
            }
            var re = r(53414),
                rt = r(10663),
                rr = r(1234),
                ri = r(3142);
            class rn extends ri.q {
                constructor(e) {
                    super(), this.opts = e, this.protocol = "wc", this.version = 2
                }
            }
            class rs extends ri.q {
                constructor(e, t) {
                    super(), this.core = e, this.logger = t, this.records = new Map
                }
            }
            class ro {
                constructor(e, t) {
                    this.logger = e, this.core = t
                }
            }
            class ra extends ri.q {
                constructor(e, t) {
                    super(), this.relayer = e, this.logger = t
                }
            }
            class rc extends ri.q {
                constructor(e) {
                    super()
                }
            }
            class ru {
                constructor(e, t, r, i) {
                    this.core = e, this.logger = t, this.name = r
                }
            }
            class rl extends ri.q {
                constructor(e, t) {
                    super(), this.relayer = e, this.logger = t
                }
            }
            class rh extends ri.q {
                constructor(e, t) {
                    super(), this.core = e, this.logger = t
                }
            }
            class rf {
                constructor(e, t) {
                    this.projectId = e, this.logger = t
                }
            }
            class rp {
                constructor(e) {
                    this.opts = e, this.protocol = "wc", this.version = 2
                }
            }
            class rd {
                constructor(e) {
                    this.client = e
                }
            }
            var rg = r(82872),
                ry = r(62113);
            let rv = "base64url",
                r_ = "base58btc";

            function rm(e) {
                return e3(e5((0, rg.u)(e), "utf8"), rv)
            }

            function rb(e) {
                return ["did", "key", "z" + e3(O([e5("K36", r_), e]), r_)].join(":")
            }

            function rw(e = (0, w.randomBytes)(32)) {
                return ry._w(e)
            }
            async function rE(e, t, r, i, n = (0, e2.fromMiliseconds)(Date.now())) {
                var s, o;
                let a = {
                        alg: "EdDSA",
                        typ: "JWT"
                    },
                    c = {
                        iss: rb(i.publicKey),
                        sub: e,
                        aud: t,
                        iat: n,
                        exp: n + r
                    },
                    u = e5([rm((s = {
                        header: a,
                        payload: c
                    }).header), rm(s.payload)].join("."), "utf8");
                return [rm((o = {
                    header: a,
                    payload: c,
                    signature: ry.Xx(i.secretKey, u)
                }).header), rm(o.payload), e3(o.signature, rv)].join(".")
            }
            r(74844);
            var rD = r(34021),
                rS = r(61512);
            let rI = () => "undefined" != typeof window,
                rO = e => e.split("?")[0],
                rP = void 0 !== r.g && void 0 !== r.g.WebSocket ? r.g.WebSocket : "undefined" != typeof window && void 0 !== window.WebSocket ? window.WebSocket : r(88430);
            class rC {
                constructor(e) {
                    if (this.url = e, this.events = new v.EventEmitter, this.registering = !1, !(0, rS.isWsUrl)(e)) throw Error(`Provided URL is not compatible with WebSocket connection: ${e}`);
                    this.url = e
                }
                get connected() {
                    return void 0 !== this.socket
                }
                get connecting() {
                    return this.registering
                }
                on(e, t) {
                    this.events.on(e, t)
                }
                once(e, t) {
                    this.events.once(e, t)
                }
                off(e, t) {
                    this.events.off(e, t)
                }
                removeListener(e, t) {
                    this.events.removeListener(e, t)
                }
                async open(e = this.url) {
                    await this.register(e)
                }
                async close() {
                    return new Promise((e, t) => {
                        if (void 0 === this.socket) {
                            t(Error("Connection already closed"));
                            return
                        }
                        this.socket.onclose = t => {
                            this.onClose(t), e()
                        }, this.socket.close()
                    })
                }
                async send(e, t) {
                    void 0 === this.socket && (this.socket = await this.register());
                    try {
                        this.socket.send((0, rg.u)(e))
                    } catch (t) {
                        this.onError(e.id, t)
                    }
                }
                register(e = this.url) {
                    if (!(0, rS.isWsUrl)(e)) throw Error(`Provided URL is not compatible with WebSocket connection: ${e}`);
                    if (this.registering) {
                        let e = this.events.getMaxListeners();
                        return (this.events.listenerCount("register_error") >= e || this.events.listenerCount("open") >= e) && this.events.setMaxListeners(e + 1), new Promise((e, t) => {
                            this.events.once("register_error", e => {
                                this.resetMaxListeners(), t(e)
                            }), this.events.once("open", () => {
                                if (this.resetMaxListeners(), void 0 === this.socket) return t(Error("WebSocket connection is missing or invalid"));
                                e(this.socket)
                            })
                        })
                    }
                    return this.url = e, this.registering = !0, new Promise((t, r) => {
                        let i = (0, rS.isReactNative)() ? void 0 : {
                                rejectUnauthorized: !(0, rS.isLocalhostUrl)(e)
                            },
                            n = new rP(e, [], i);
                        rI() ? n.onerror = e => {
                            r(this.emitError(e.error))
                        } : n.on("error", e => {
                            r(this.emitError(e))
                        }), n.onopen = () => {
                            this.onOpen(n), t(n)
                        }
                    })
                }
                onOpen(e) {
                    e.onmessage = e => this.onPayload(e), e.onclose = e => this.onClose(e), this.socket = e, this.registering = !1, this.events.emit("open")
                }
                onClose(e) {
                    this.socket = void 0, this.registering = !1, this.events.emit("close", e)
                }
                onPayload(e) {
                    if (void 0 === e.data) return;
                    let t = "string" == typeof e.data ? (0, rg.D)(e.data) : e.data;
                    this.events.emit("payload", t)
                }
                onError(e, t) {
                    let r = this.parseError(t),
                        i = r.message || r.toString(),
                        n = (0, rS.formatJsonRpcError)(e, i);
                    this.events.emit("payload", n)
                }
                parseError(e, t = this.url) {
                    return (0, rS.parseConnectionError)(e, rO(t), "WS")
                }
                resetMaxListeners() {
                    this.events.getMaxListeners() > 10 && this.events.setMaxListeners(10)
                }
                emitError(e) {
                    let t = this.parseError(Error((null == e ? void 0 : e.message) || `WebSocket connection failed for host: ${rO(this.url)}`));
                    return this.events.emit("register_error", t), t
                }
            }
            var rA = r(68652),
                rx = r.n(rA),
                rN = r(13158),
                rR = function(e, t) {
                    if (e.length >= 255) throw TypeError("Alphabet too long");
                    for (var r = new Uint8Array(256), i = 0; i < r.length; i++) r[i] = 255;
                    for (var n = 0; n < e.length; n++) {
                        var s = e.charAt(n),
                            o = s.charCodeAt(0);
                        if (255 !== r[o]) throw TypeError(s + " is ambiguous");
                        r[o] = n
                    }
                    var a = e.length,
                        c = e.charAt(0),
                        u = Math.log(a) / Math.log(256),
                        l = Math.log(256) / Math.log(a);

                    function h(e) {
                        if ("string" != typeof e) throw TypeError("Expected String");
                        if (0 === e.length) return new Uint8Array;
                        var t = 0;
                        if (" " !== e[0]) {
                            for (var i = 0, n = 0; e[t] === c;) i++, t++;
                            for (var s = (e.length - t) * u + 1 >>> 0, o = new Uint8Array(s); e[t];) {
                                var l = r[e.charCodeAt(t)];
                                if (255 === l) return;
                                for (var h = 0, f = s - 1;
                                    (0 !== l || h < n) && -1 !== f; f--, h++) l += a * o[f] >>> 0, o[f] = l % 256 >>> 0, l = l / 256 >>> 0;
                                if (0 !== l) throw Error("Non-zero carry");
                                n = h, t++
                            }
                            if (" " !== e[t]) {
                                for (var p = s - n; p !== s && 0 === o[p];) p++;
                                for (var d = new Uint8Array(i + (s - p)), g = i; p !== s;) d[g++] = o[p++];
                                return d
                            }
                        }
                    }
                    return {
                        encode: function(t) {
                            if (t instanceof Uint8Array || (ArrayBuffer.isView(t) ? t = new Uint8Array(t.buffer, t.byteOffset, t.byteLength) : Array.isArray(t) && (t = Uint8Array.from(t))), !(t instanceof Uint8Array)) throw TypeError("Expected Uint8Array");
                            if (0 === t.length) return "";
                            for (var r = 0, i = 0, n = 0, s = t.length; n !== s && 0 === t[n];) n++, r++;
                            for (var o = (s - n) * l + 1 >>> 0, u = new Uint8Array(o); n !== s;) {
                                for (var h = t[n], f = 0, p = o - 1;
                                    (0 !== h || f < i) && -1 !== p; p--, f++) h += 256 * u[p] >>> 0, u[p] = h % a >>> 0, h = h / a >>> 0;
                                if (0 !== h) throw Error("Non-zero carry");
                                i = f, n++
                            }
                            for (var d = o - i; d !== o && 0 === u[d];) d++;
                            for (var g = c.repeat(r); d < o; ++d) g += e.charAt(u[d]);
                            return g
                        },
                        decodeUnsafe: h,
                        decode: function(e) {
                            var r = h(e);
                            if (r) return r;
                            throw Error(`Non-${t} character`)
                        }
                    }
                };
            let rT = e => {
                    if (e instanceof Uint8Array && "Uint8Array" === e.constructor.name) return e;
                    if (e instanceof ArrayBuffer) return new Uint8Array(e);
                    if (ArrayBuffer.isView(e)) return new Uint8Array(e.buffer, e.byteOffset, e.byteLength);
                    throw Error("Unknown type, must be binary type")
                },
                rj = e => new TextEncoder().encode(e),
                rU = e => new TextDecoder().decode(e);
            class rL {
                constructor(e, t, r) {
                    this.name = e, this.prefix = t, this.baseEncode = r
                }
                encode(e) {
                    if (e instanceof Uint8Array) return `${this.prefix}${this.baseEncode(e)}`;
                    throw Error("Unknown type, must be binary type")
                }
            }
            class rM {
                constructor(e, t, r) {
                    if (this.name = e, this.prefix = t, void 0 === t.codePointAt(0)) throw Error("Invalid prefix character");
                    this.prefixCodePoint = t.codePointAt(0), this.baseDecode = r
                }
                decode(e) {
                    if ("string" == typeof e) {
                        if (e.codePointAt(0) !== this.prefixCodePoint) throw Error(`Unable to decode multibase string ${JSON.stringify(e)}, ${this.name} decoder only supports inputs prefixed with ${this.prefix}`);
                        return this.baseDecode(e.slice(this.prefix.length))
                    }
                    throw Error("Can only multibase decode strings")
                }
                or(e) {
                    return rz(this, e)
                }
            }
            class rk {
                constructor(e) {
                    this.decoders = e
                }
                or(e) {
                    return rz(this, e)
                }
                decode(e) {
                    let t = e[0],
                        r = this.decoders[t];
                    if (r) return r.decode(e);
                    throw RangeError(`Unable to decode multibase string ${JSON.stringify(e)}, only inputs prefixed with ${Object.keys(this.decoders)} are supported`)
                }
            }
            let rz = (e, t) => new rk({ ...e.decoders || {
                    [e.prefix]: e
                },
                ...t.decoders || {
                    [t.prefix]: t
                }
            });
            class r$ {
                constructor(e, t, r, i) {
                    this.name = e, this.prefix = t, this.baseEncode = r, this.baseDecode = i, this.encoder = new rL(e, t, r), this.decoder = new rM(e, t, i)
                }
                encode(e) {
                    return this.encoder.encode(e)
                }
                decode(e) {
                    return this.decoder.decode(e)
                }
            }
            let rq = ({
                    name: e,
                    prefix: t,
                    encode: r,
                    decode: i
                }) => new r$(e, t, r, i),
                rH = ({
                    prefix: e,
                    name: t,
                    alphabet: r
                }) => {
                    let {
                        encode: i,
                        decode: n
                    } = rR(r, t);
                    return rq({
                        prefix: e,
                        name: t,
                        encode: i,
                        decode: e => rT(n(e))
                    })
                },
                rF = (e, t, r, i) => {
                    let n = {};
                    for (let e = 0; e < t.length; ++e) n[t[e]] = e;
                    let s = e.length;
                    for (;
                        "=" === e[s - 1];) --s;
                    let o = new Uint8Array(s * r / 8 | 0),
                        a = 0,
                        c = 0,
                        u = 0;
                    for (let t = 0; t < s; ++t) {
                        let s = n[e[t]];
                        if (void 0 === s) throw SyntaxError(`Non-${i} character`);
                        c = c << r | s, (a += r) >= 8 && (a -= 8, o[u++] = 255 & c >> a)
                    }
                    if (a >= r || 255 & c << 8 - a) throw SyntaxError("Unexpected end of data");
                    return o
                },
                rV = (e, t, r) => {
                    let i = "=" === t[t.length - 1],
                        n = (1 << r) - 1,
                        s = "",
                        o = 0,
                        a = 0;
                    for (let i = 0; i < e.length; ++i)
                        for (a = a << 8 | e[i], o += 8; o > r;) o -= r, s += t[n & a >> o];
                    if (o && (s += t[n & a << r - o]), i)
                        for (; s.length * r & 7;) s += "=";
                    return s
                },
                rK = ({
                    name: e,
                    prefix: t,
                    bitsPerChar: r,
                    alphabet: i
                }) => rq({
                    prefix: t,
                    name: e,
                    encode: e => rV(e, i, r),
                    decode: t => rF(t, i, r, e)
                });
            var rB = Object.freeze({
                    __proto__: null,
                    identity: rq({
                        prefix: "\x00",
                        name: "identity",
                        encode: e => rU(e),
                        decode: e => rj(e)
                    })
                }),
                rG = Object.freeze({
                    __proto__: null,
                    base2: rK({
                        prefix: "0",
                        name: "base2",
                        alphabet: "01",
                        bitsPerChar: 1
                    })
                }),
                rW = Object.freeze({
                    __proto__: null,
                    base8: rK({
                        prefix: "7",
                        name: "base8",
                        alphabet: "01234567",
                        bitsPerChar: 3
                    })
                }),
                rJ = Object.freeze({
                    __proto__: null,
                    base10: rH({
                        prefix: "9",
                        name: "base10",
                        alphabet: "0123456789"
                    })
                }),
                rY = Object.freeze({
                    __proto__: null,
                    base16: rK({
                        prefix: "f",
                        name: "base16",
                        alphabet: "0123456789abcdef",
                        bitsPerChar: 4
                    }),
                    base16upper: rK({
                        prefix: "F",
                        name: "base16upper",
                        alphabet: "0123456789ABCDEF",
                        bitsPerChar: 4
                    })
                });
            let rZ = rK({
                    prefix: "b",
                    name: "base32",
                    alphabet: "abcdefghijklmnopqrstuvwxyz234567",
                    bitsPerChar: 5
                }),
                rX = rK({
                    prefix: "B",
                    name: "base32upper",
                    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567",
                    bitsPerChar: 5
                }),
                rQ = rK({
                    prefix: "c",
                    name: "base32pad",
                    alphabet: "abcdefghijklmnopqrstuvwxyz234567=",
                    bitsPerChar: 5
                }),
                r0 = rK({
                    prefix: "C",
                    name: "base32padupper",
                    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567=",
                    bitsPerChar: 5
                }),
                r1 = rK({
                    prefix: "v",
                    name: "base32hex",
                    alphabet: "0123456789abcdefghijklmnopqrstuv",
                    bitsPerChar: 5
                }),
                r5 = rK({
                    prefix: "V",
                    name: "base32hexupper",
                    alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV",
                    bitsPerChar: 5
                });
            var r3 = Object.freeze({
                    __proto__: null,
                    base32: rZ,
                    base32upper: rX,
                    base32pad: rQ,
                    base32padupper: r0,
                    base32hex: r1,
                    base32hexupper: r5,
                    base32hexpad: rK({
                        prefix: "t",
                        name: "base32hexpad",
                        alphabet: "0123456789abcdefghijklmnopqrstuv=",
                        bitsPerChar: 5
                    }),
                    base32hexpadupper: rK({
                        prefix: "T",
                        name: "base32hexpadupper",
                        alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV=",
                        bitsPerChar: 5
                    }),
                    base32z: rK({
                        prefix: "h",
                        name: "base32z",
                        alphabet: "ybndrfg8ejkmcpqxot1uwisza345h769",
                        bitsPerChar: 5
                    })
                }),
                r6 = Object.freeze({
                    __proto__: null,
                    base36: rH({
                        prefix: "k",
                        name: "base36",
                        alphabet: "0123456789abcdefghijklmnopqrstuvwxyz"
                    }),
                    base36upper: rH({
                        prefix: "K",
                        name: "base36upper",
                        alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ"
                    })
                }),
                r2 = Object.freeze({
                    __proto__: null,
                    base58btc: rH({
                        name: "base58btc",
                        prefix: "z",
                        alphabet: "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz"
                    }),
                    base58flickr: rH({
                        name: "base58flickr",
                        prefix: "Z",
                        alphabet: "123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ"
                    })
                });
            let r8 = rK({
                prefix: "m",
                name: "base64",
                alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
                bitsPerChar: 6
            });
            var r4 = Object.freeze({
                __proto__: null,
                base64: r8,
                base64pad: rK({
                    prefix: "M",
                    name: "base64pad",
                    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
                    bitsPerChar: 6
                }),
                base64url: rK({
                    prefix: "u",
                    name: "base64url",
                    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_",
                    bitsPerChar: 6
                }),
                base64urlpad: rK({
                    prefix: "U",
                    name: "base64urlpad",
                    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_=",
                    bitsPerChar: 6
                })
            });
            let r9 = Array.from("\uD83D\uDE80\uD83E\uDE90☄\uD83D\uDEF0\uD83C\uDF0C\uD83C\uDF11\uD83C\uDF12\uD83C\uDF13\uD83C\uDF14\uD83C\uDF15\uD83C\uDF16\uD83C\uDF17\uD83C\uDF18\uD83C\uDF0D\uD83C\uDF0F\uD83C\uDF0E\uD83D\uDC09☀\uD83D\uDCBB\uD83D\uDDA5\uD83D\uDCBE\uD83D\uDCBF\uD83D\uDE02❤\uD83D\uDE0D\uD83E\uDD23\uD83D\uDE0A\uD83D\uDE4F\uD83D\uDC95\uD83D\uDE2D\uD83D\uDE18\uD83D\uDC4D\uD83D\uDE05\uD83D\uDC4F\uD83D\uDE01\uD83D\uDD25\uD83E\uDD70\uD83D\uDC94\uD83D\uDC96\uD83D\uDC99\uD83D\uDE22\uD83E\uDD14\uD83D\uDE06\uD83D\uDE44\uD83D\uDCAA\uD83D\uDE09☺\uD83D\uDC4C\uD83E\uDD17\uD83D\uDC9C\uD83D\uDE14\uD83D\uDE0E\uD83D\uDE07\uD83C\uDF39\uD83E\uDD26\uD83C\uDF89\uD83D\uDC9E✌✨\uD83E\uDD37\uD83D\uDE31\uD83D\uDE0C\uD83C\uDF38\uD83D\uDE4C\uD83D\uDE0B\uD83D\uDC97\uD83D\uDC9A\uD83D\uDE0F\uD83D\uDC9B\uD83D\uDE42\uD83D\uDC93\uD83E\uDD29\uD83D\uDE04\uD83D\uDE00\uD83D\uDDA4\uD83D\uDE03\uD83D\uDCAF\uD83D\uDE48\uD83D\uDC47\uD83C\uDFB6\uD83D\uDE12\uD83E\uDD2D❣\uD83D\uDE1C\uD83D\uDC8B\uD83D\uDC40\uD83D\uDE2A\uD83D\uDE11\uD83D\uDCA5\uD83D\uDE4B\uD83D\uDE1E\uD83D\uDE29\uD83D\uDE21\uD83E\uDD2A\uD83D\uDC4A\uD83E\uDD73\uD83D\uDE25\uD83E\uDD24\uD83D\uDC49\uD83D\uDC83\uD83D\uDE33✋\uD83D\uDE1A\uD83D\uDE1D\uD83D\uDE34\uD83C\uDF1F\uD83D\uDE2C\uD83D\uDE43\uD83C\uDF40\uD83C\uDF37\uD83D\uDE3B\uD83D\uDE13⭐✅\uD83E\uDD7A\uD83C\uDF08\uD83D\uDE08\uD83E\uDD18\uD83D\uDCA6✔\uD83D\uDE23\uD83C\uDFC3\uD83D\uDC90☹\uD83C\uDF8A\uD83D\uDC98\uD83D\uDE20☝\uD83D\uDE15\uD83C\uDF3A\uD83C\uDF82\uD83C\uDF3B\uD83D\uDE10\uD83D\uDD95\uD83D\uDC9D\uD83D\uDE4A\uD83D\uDE39\uD83D\uDDE3\uD83D\uDCAB\uD83D\uDC80\uD83D\uDC51\uD83C\uDFB5\uD83E\uDD1E\uD83D\uDE1B\uD83D\uDD34\uD83D\uDE24\uD83C\uDF3C\uD83D\uDE2B⚽\uD83E\uDD19☕\uD83C\uDFC6\uD83E\uDD2B\uD83D\uDC48\uD83D\uDE2E\uD83D\uDE46\uD83C\uDF7B\uD83C\uDF43\uD83D\uDC36\uD83D\uDC81\uD83D\uDE32\uD83C\uDF3F\uD83E\uDDE1\uD83C\uDF81⚡\uD83C\uDF1E\uD83C\uDF88❌✊\uD83D\uDC4B\uD83D\uDE30\uD83E\uDD28\uD83D\uDE36\uD83E\uDD1D\uD83D\uDEB6\uD83D\uDCB0\uD83C\uDF53\uD83D\uDCA2\uD83E\uDD1F\uD83D\uDE41\uD83D\uDEA8\uD83D\uDCA8\uD83E\uDD2C✈\uD83C\uDF80\uD83C\uDF7A\uD83E\uDD13\uD83D\uDE19\uD83D\uDC9F\uD83C\uDF31\uD83D\uDE16\uD83D\uDC76\uD83E\uDD74▶➡❓\uD83D\uDC8E\uD83D\uDCB8⬇\uD83D\uDE28\uD83C\uDF1A\uD83E\uDD8B\uD83D\uDE37\uD83D\uDD7A⚠\uD83D\uDE45\uD83D\uDE1F\uD83D\uDE35\uD83D\uDC4E\uD83E\uDD32\uD83E\uDD20\uD83E\uDD27\uD83D\uDCCC\uD83D\uDD35\uD83D\uDC85\uD83E\uDDD0\uD83D\uDC3E\uD83C\uDF52\uD83D\uDE17\uD83E\uDD11\uD83C\uDF0A\uD83E\uDD2F\uD83D\uDC37☎\uD83D\uDCA7\uD83D\uDE2F\uD83D\uDC86\uD83D\uDC46\uD83C\uDFA4\uD83D\uDE47\uD83C\uDF51❄\uD83C\uDF34\uD83D\uDCA3\uD83D\uDC38\uD83D\uDC8C\uD83D\uDCCD\uD83E\uDD40\uD83E\uDD22\uD83D\uDC45\uD83D\uDCA1\uD83D\uDCA9\uD83D\uDC50\uD83D\uDCF8\uD83D\uDC7B\uD83E\uDD10\uD83E\uDD2E\uD83C\uDFBC\uD83E\uDD75\uD83D\uDEA9\uD83C\uDF4E\uD83C\uDF4A\uD83D\uDC7C\uD83D\uDC8D\uD83D\uDCE3\uD83E\uDD42"),
                r7 = r9.reduce((e, t, r) => (e[r] = t, e), []),
                ie = r9.reduce((e, t, r) => (e[t.codePointAt(0)] = r, e), []);
            var it = Object.freeze({
                    __proto__: null,
                    base256emoji: rq({
                        prefix: "\uD83D\uDE80",
                        name: "base256emoji",
                        encode: function(e) {
                            return e.reduce((e, t) => e += r7[t], "")
                        },
                        decode: function(e) {
                            let t = [];
                            for (let r of e) {
                                let e = ie[r.codePointAt(0)];
                                if (void 0 === e) throw Error(`Non-base256emoji character: ${r}`);
                                t.push(e)
                            }
                            return new Uint8Array(t)
                        }
                    })
                }),
                ir = {
                    encode: function e(t, r, i) {
                        r = r || [], i = i || 0;
                        for (var n = i; t >= 2147483648;) r[i++] = 255 & t | 128, t /= 128;
                        for (; - 128 & t;) r[i++] = 255 & t | 128, t >>>= 7;
                        return r[i] = 0 | t, e.bytes = i - n + 1, r
                    },
                    decode: function e(t, r) {
                        var i, n = 0,
                            r = r || 0,
                            s = 0,
                            o = r,
                            a = t.length;
                        do {
                            if (o >= a) throw e.bytes = 0, RangeError("Could not decode varint");
                            i = t[o++], n += s < 28 ? (127 & i) << s : (127 & i) * Math.pow(2, s), s += 7
                        } while (i >= 128);
                        return e.bytes = o - r, n
                    },
                    encodingLength: function(e) {
                        return e < 128 ? 1 : e < 16384 ? 2 : e < 2097152 ? 3 : e < 268435456 ? 4 : e < 34359738368 ? 5 : e < 4398046511104 ? 6 : e < 562949953421312 ? 7 : e < 72057594037927940 ? 8 : e < 0x7fffffffffffffff ? 9 : 10
                    }
                };
            let ii = (e, t, r = 0) => (ir.encode(e, t, r), t),
                is = e => ir.encodingLength(e),
                io = (e, t) => {
                    let r = t.byteLength,
                        i = is(e),
                        n = i + is(r),
                        s = new Uint8Array(n + r);
                    return ii(e, s, 0), ii(r, s, i), s.set(t, n), new ia(e, r, t, s)
                };
            class ia {
                constructor(e, t, r, i) {
                    this.code = e, this.size = t, this.digest = r, this.bytes = i
                }
            }
            let ic = ({
                name: e,
                code: t,
                encode: r
            }) => new iu(e, t, r);
            class iu {
                constructor(e, t, r) {
                    this.name = e, this.code = t, this.encode = r
                }
                digest(e) {
                    if (e instanceof Uint8Array) {
                        let t = this.encode(e);
                        return t instanceof Uint8Array ? io(this.code, t) : t.then(e => io(this.code, e))
                    }
                    throw Error("Unknown type, must be binary type")
                }
            }
            let il = e => async t => new Uint8Array(await crypto.subtle.digest(e, t));
            var ih = Object.freeze({
                    __proto__: null,
                    sha256: ic({
                        name: "sha2-256",
                        code: 18,
                        encode: il("SHA-256")
                    }),
                    sha512: ic({
                        name: "sha2-512",
                        code: 19,
                        encode: il("SHA-512")
                    })
                }),
                ip = Object.freeze({
                    __proto__: null,
                    identity: {
                        code: 0,
                        name: "identity",
                        encode: rT,
                        digest: e => io(0, rT(e))
                    }
                });
            new TextEncoder, new TextDecoder;
            let id = { ...rB,
                ...rG,
                ...rW,
                ...rJ,
                ...rY,
                ...r3,
                ...r6,
                ...r2,
                ...r4,
                ...it
            };

            function ig(e) {
                return null != globalThis.Buffer ? new Uint8Array(e.buffer, e.byteOffset, e.byteLength) : e
            }

            function iy(e, t, r, i) {
                return {
                    name: e,
                    prefix: t,
                    encoder: {
                        name: e,
                        prefix: t,
                        encode: r
                    },
                    decoder: {
                        decode: i
                    }
                }
            }({ ...ih,
                ...ip
            });
            let iv = iy("utf8", "u", e => "u" + new TextDecoder("utf8").decode(e), e => new TextEncoder().encode(e.substring(1))),
                i_ = iy("ascii", "a", e => {
                    let t = "a";
                    for (let r = 0; r < e.length; r++) t += String.fromCharCode(e[r]);
                    return t
                }, e => {
                    let t = function(e = 0) {
                        return null != globalThis.Buffer && null != globalThis.Buffer.allocUnsafe ? ig(globalThis.Buffer.allocUnsafe(e)) : new Uint8Array(e)
                    }((e = e.substring(1)).length);
                    for (let r = 0; r < e.length; r++) t[r] = e.charCodeAt(r);
                    return t
                }),
                im = {
                    utf8: iv,
                    "utf-8": iv,
                    hex: id.base16,
                    latin1: i_,
                    ascii: i_,
                    binary: i_,
                    ...id
                },
                ib = "core",
                iw = `wc@2:${ib}:`,
                iE = {
                    logger: "error"
                },
                iD = {
                    database: ":memory:"
                },
                iS = "client_ed25519_seed",
                iI = e2.ONE_DAY,
                iO = e2.SIX_HOURS,
                iP = "wss://relay.walletconnect.com",
                iC = "wss://relay.walletconnect.org",
                iA = {
                    message: "relayer_message",
                    message_ack: "relayer_message_ack",
                    connect: "relayer_connect",
                    disconnect: "relayer_disconnect",
                    error: "relayer_error",
                    connection_stalled: "relayer_connection_stalled",
                    transport_closed: "relayer_transport_closed",
                    publish: "relayer_publish"
                },
                ix = {
                    payload: "payload",
                    connect: "connect",
                    disconnect: "disconnect",
                    error: "error"
                },
                iN = e2.ONE_SECOND / 2,
                iR = {
                    created: "subscription_created",
                    deleted: "subscription_deleted",
                    sync: "subscription_sync",
                    resubscribed: "subscription_resubscribed"
                },
                iT = 1e3 * e2.FIVE_SECONDS,
                ij = {
                    wc_pairingDelete: {
                        req: {
                            ttl: e2.ONE_DAY,
                            prompt: !1,
                            tag: 1e3
                        },
                        res: {
                            ttl: e2.ONE_DAY,
                            prompt: !1,
                            tag: 1001
                        }
                    },
                    wc_pairingPing: {
                        req: {
                            ttl: e2.THIRTY_SECONDS,
                            prompt: !1,
                            tag: 1002
                        },
                        res: {
                            ttl: e2.THIRTY_SECONDS,
                            prompt: !1,
                            tag: 1003
                        }
                    },
                    unregistered_method: {
                        req: {
                            ttl: e2.ONE_DAY,
                            prompt: !1,
                            tag: 0
                        },
                        res: {
                            ttl: e2.ONE_DAY,
                            prompt: !1,
                            tag: 0
                        }
                    }
                },
                iU = {
                    created: "history_created",
                    updated: "history_updated",
                    deleted: "history_deleted",
                    sync: "history_sync"
                },
                iL = {
                    created: "expirer_created",
                    deleted: "expirer_deleted",
                    expired: "expirer_expired",
                    sync: "expirer_sync"
                },
                iM = "verify-api",
                ik = "https://verify.walletconnect.com";
            class iz {
                constructor(e, t) {
                    this.core = e, this.logger = t, this.keychain = new Map, this.name = "keychain", this.version = "0.3", this.initialized = !1, this.storagePrefix = iw, this.init = async () => {
                        if (!this.initialized) {
                            let e = await this.getKeyChain();
                            "u" > typeof e && (this.keychain = e), this.initialized = !0
                        }
                    }, this.has = e => (this.isInitialized(), this.keychain.has(e)), this.set = async (e, t) => {
                        this.isInitialized(), this.keychain.set(e, t), await this.persist()
                    }, this.get = e => {
                        this.isInitialized();
                        let t = this.keychain.get(e);
                        if (typeof t > "u") {
                            let {
                                message: t
                            } = tW("NO_MATCHING_KEY", `${this.name}: ${e}`);
                            throw Error(t)
                        }
                        return t
                    }, this.del = async e => {
                        this.isInitialized(), this.keychain.delete(e), await this.persist()
                    }, this.core = e, this.logger = (0, rr.generateChildLogger)(t, this.name)
                }
                get context() {
                    return (0, rr.getLoggerContext)(this.logger)
                }
                get storageKey() {
                    return this.storagePrefix + this.version + "//" + this.name
                }
                async setKeyChain(e) {
                    await this.core.storage.setItem(this.storageKey, tS(e))
                }
                async getKeyChain() {
                    let e = await this.core.storage.getItem(this.storageKey);
                    return "u" > typeof e ? tI(e) : void 0
                }
                async persist() {
                    await this.setKeyChain(this.keychain)
                }
                isInitialized() {
                    if (!this.initialized) {
                        let {
                            message: e
                        } = tW("NOT_INITIALIZED", this.name);
                        throw Error(e)
                    }
                }
            }
            class i$ {
                constructor(e, t, r) {
                    this.core = e, this.logger = t, this.name = "crypto", this.initialized = !1, this.init = async () => {
                        this.initialized || (await this.keychain.init(), this.initialized = !0)
                    }, this.hasKeys = e => (this.isInitialized(), this.keychain.has(e)), this.getClientId = async () => (this.isInitialized(), rb(rw(await this.getClientSeed()).publicKey)), this.generateKeyPair = () => {
                        this.isInitialized();
                        let e = function() {
                            let e = D.Au();
                            return {
                                privateKey: e3(e.secretKey, ti),
                                publicKey: e3(e.publicKey, ti)
                            }
                        }();
                        return this.setPrivateKey(e.publicKey, e.privateKey)
                    }, this.signJWT = async e => {
                        this.isInitialized();
                        let t = rw(await this.getClientSeed()),
                            r = to();
                        return await rE(r, e, iI, t)
                    }, this.generateSharedKey = (e, t, r) => {
                        this.isInitialized();
                        let i = function(e, t) {
                            let r = D.gi(e5(e, ti), e5(t, ti));
                            return e3(new b.t(E.mE, r).expand(32), ti)
                        }(this.getPrivateKey(e), t);
                        return this.setSymKey(i, r)
                    }, this.setSymKey = async (e, t) => {
                        this.isInitialized();
                        let r = t || e3((0, E.vp)(e5(e, ti)), ti);
                        return await this.keychain.set(r, e), r
                    }, this.deleteKeyPair = async e => {
                        this.isInitialized(), await this.keychain.del(e)
                    }, this.deleteSymKey = async e => {
                        this.isInitialized(), await this.keychain.del(e)
                    }, this.encode = async (e, t, r) => {
                        this.isInitialized();
                        let i = tl(r),
                            n = (0, rg.u)(t);
                        if (th(i)) {
                            let t = i.senderPublicKey,
                                r = i.receiverPublicKey;
                            e = await this.generateSharedKey(t, r)
                        }
                        let s = this.getSymKey(e),
                            {
                                type: o,
                                senderPublicKey: a
                            } = i;
                        return function(e) {
                            var t;
                            let r = (t = "u" > typeof e.type ? e.type : 0, e5(`${t}`, tr));
                            if (1 === tc(r) && typeof e.senderPublicKey > "u") throw Error("Missing sender public key for type 1 envelope");
                            let i = "u" > typeof e.senderPublicKey ? e5(e.senderPublicKey, ti) : void 0,
                                n = "u" > typeof e.iv ? e5(e.iv, ti) : (0, w.randomBytes)(12);
                            return function(e) {
                                if (1 === tc(e.type)) {
                                    if (typeof e.senderPublicKey > "u") throw Error("Missing sender public key for type 1 envelope");
                                    return e3(O([e.type, e.senderPublicKey, e.iv, e.sealed]), tn)
                                }
                                return e3(O([e.type, e.iv, e.sealed]), tn)
                            }({
                                type: r,
                                sealed: new m.OK(e5(e.symKey, ti)).seal(n, e5(e.message, ts)),
                                iv: n,
                                senderPublicKey: i
                            })
                        }({
                            type: o,
                            symKey: s,
                            message: n,
                            senderPublicKey: a
                        })
                    }, this.decode = async (e, t, r) => {
                        this.isInitialized();
                        let i = function(e, t) {
                            let r = tu(e);
                            return tl({
                                type: tc(r.type),
                                senderPublicKey: "u" > typeof r.senderPublicKey ? e3(r.senderPublicKey, ti) : void 0,
                                receiverPublicKey: t ? .receiverPublicKey
                            })
                        }(t, r);
                        if (th(i)) {
                            let t = i.receiverPublicKey,
                                r = i.senderPublicKey;
                            e = await this.generateSharedKey(t, r)
                        }
                        let n = function(e) {
                            let t = new m.OK(e5(e.symKey, ti)),
                                {
                                    sealed: r,
                                    iv: i
                                } = tu(e.encoded),
                                n = t.open(i, r);
                            if (null === n) throw Error("Failed to decrypt");
                            return e3(n, ts)
                        }({
                            symKey: this.getSymKey(e),
                            encoded: t
                        });
                        return (0, rg.D)(n)
                    }, this.getPayloadType = e => tc(tu(e).type), this.getPayloadSenderPublicKey = e => {
                        let t = tu(e);
                        return t.senderPublicKey ? e3(t.senderPublicKey, ti) : void 0
                    }, this.core = e, this.logger = (0, rr.generateChildLogger)(t, this.name), this.keychain = r || new iz(this.core, this.logger)
                }
                get context() {
                    return (0, rr.getLoggerContext)(this.logger)
                }
                async setPrivateKey(e, t) {
                    return await this.keychain.set(e, t), e
                }
                getPrivateKey(e) {
                    return this.keychain.get(e)
                }
                async getClientSeed() {
                    let e = "";
                    try {
                        e = this.keychain.get(iS)
                    } catch {
                        e = to(), await this.keychain.set(iS, e)
                    }
                    return function(e, t = "utf8") {
                        let r = im[t];
                        if (!r) throw Error(`Unsupported encoding "${t}"`);
                        return ("utf8" === t || "utf-8" === t) && null != globalThis.Buffer && null != globalThis.Buffer.from ? ig(globalThis.Buffer.from(e, "utf-8")) : r.decoder.decode(`${r.prefix}${e}`)
                    }(e, "base16")
                }
                getSymKey(e) {
                    return this.keychain.get(e)
                }
                isInitialized() {
                    if (!this.initialized) {
                        let {
                            message: e
                        } = tW("NOT_INITIALIZED", this.name);
                        throw Error(e)
                    }
                }
            }
            class iq extends ro {
                constructor(e, t) {
                    super(e, t), this.logger = e, this.core = t, this.messages = new Map, this.name = "messages", this.version = "0.3", this.initialized = !1, this.storagePrefix = iw, this.init = async () => {
                        if (!this.initialized) {
                            this.logger.trace("Initialized");
                            try {
                                let e = await this.getRelayerMessages();
                                "u" > typeof e && (this.messages = e), this.logger.debug(`Successfully Restored records for ${this.name}`), this.logger.trace({
                                    type: "method",
                                    method: "restore",
                                    size: this.messages.size
                                })
                            } catch (e) {
                                this.logger.debug(`Failed to Restore records for ${this.name}`), this.logger.error(e)
                            } finally {
                                this.initialized = !0
                            }
                        }
                    }, this.set = async (e, t) => {
                        this.isInitialized();
                        let r = ta(t),
                            i = this.messages.get(e);
                        return typeof i > "u" && (i = {}), "u" > typeof i[r] || (i[r] = t, this.messages.set(e, i), await this.persist()), r
                    }, this.get = e => {
                        this.isInitialized();
                        let t = this.messages.get(e);
                        return typeof t > "u" && (t = {}), t
                    }, this.has = (e, t) => (this.isInitialized(), "u" > typeof this.get(e)[ta(t)]), this.del = async e => {
                        this.isInitialized(), this.messages.delete(e), await this.persist()
                    }, this.logger = (0, rr.generateChildLogger)(e, this.name), this.core = t
                }
                get context() {
                    return (0, rr.getLoggerContext)(this.logger)
                }
                get storageKey() {
                    return this.storagePrefix + this.version + "//" + this.name
                }
                async setRelayerMessages(e) {
                    await this.core.storage.setItem(this.storageKey, tS(e))
                }
                async getRelayerMessages() {
                    let e = await this.core.storage.getItem(this.storageKey);
                    return "u" > typeof e ? tI(e) : void 0
                }
                async persist() {
                    await this.setRelayerMessages(this.messages)
                }
                isInitialized() {
                    if (!this.initialized) {
                        let {
                            message: e
                        } = tW("NOT_INITIALIZED", this.name);
                        throw Error(e)
                    }
                }
            }
            class iH extends ra {
                constructor(e, t) {
                    super(e, t), this.relayer = e, this.logger = t, this.events = new v.EventEmitter, this.name = "publisher", this.queue = new Map, this.publishTimeout = (0, e2.toMiliseconds)(e2.TEN_SECONDS), this.queueTimeout = (0, e2.toMiliseconds)(e2.FIVE_SECONDS), this.needsTransportRestart = !1, this.publish = async (e, t, r) => {
                        this.logger.debug("Publishing Payload"), this.logger.trace({
                            type: "method",
                            method: "publish",
                            params: {
                                topic: e,
                                message: t,
                                opts: r
                            }
                        });
                        try {
                            let i = r ? .ttl || iO,
                                n = tU(r),
                                s = r ? .prompt || !1,
                                o = r ? .tag || 0,
                                a = r ? .id || (0, rS.getBigIntRpcId)().toString(),
                                c = {
                                    topic: e,
                                    message: t,
                                    opts: {
                                        ttl: i,
                                        relay: n,
                                        prompt: s,
                                        tag: o,
                                        id: a
                                    }
                                },
                                u = setTimeout(() => this.queue.set(a, c), this.queueTimeout);
                            try {
                                await await tP(this.rpcPublish(e, t, i, n, s, o, a), this.publishTimeout), clearTimeout(u), this.relayer.events.emit(iA.publish, c)
                            } catch {
                                this.logger.debug("Publishing Payload stalled"), this.needsTransportRestart = !0;
                                return
                            }
                            this.logger.debug("Successfully Published Payload"), this.logger.trace({
                                type: "method",
                                method: "publish",
                                params: {
                                    topic: e,
                                    message: t,
                                    opts: r
                                }
                            })
                        } catch (e) {
                            throw this.logger.debug("Failed to Publish Payload"), this.logger.error(e), e
                        }
                    }, this.on = (e, t) => {
                        this.events.on(e, t)
                    }, this.once = (e, t) => {
                        this.events.once(e, t)
                    }, this.off = (e, t) => {
                        this.events.off(e, t)
                    }, this.removeListener = (e, t) => {
                        this.events.removeListener(e, t)
                    }, this.relayer = e, this.logger = (0, rr.generateChildLogger)(t, this.name), this.registerEventListeners()
                }
                get context() {
                    return (0, rr.getLoggerContext)(this.logger)
                }
                rpcPublish(e, t, r, i, n, s, o) {
                    var a, c, u, l;
                    let h = {
                        method: tL(i.protocol).publish,
                        params: {
                            topic: e,
                            message: t,
                            ttl: r,
                            prompt: n,
                            tag: s
                        },
                        id: o
                    };
                    return tX(null == (a = h.params) ? void 0 : a.prompt) && (null == (c = h.params) || delete c.prompt), tX(null == (u = h.params) ? void 0 : u.tag) && (null == (l = h.params) || delete l.tag), this.logger.debug("Outgoing Relay Payload"), this.logger.trace({
                        type: "message",
                        direction: "outgoing",
                        request: h
                    }), this.relayer.request(h)
                }
                onPublish(e) {
                    this.queue.delete(e)
                }
                checkQueue() {
                    this.queue.forEach(async e => {
                        let {
                            topic: t,
                            message: r,
                            opts: i
                        } = e;
                        await this.publish(t, r, i)
                    })
                }
                registerEventListeners() {
                    this.relayer.core.heartbeat.on(rt.HEARTBEAT_EVENTS.pulse, () => {
                        if (this.needsTransportRestart) {
                            this.needsTransportRestart = !1, this.relayer.events.emit(iA.connection_stalled);
                            return
                        }
                        this.checkQueue()
                    }), this.relayer.on(iA.message_ack, e => {
                        this.onPublish(e.id.toString())
                    })
                }
            }
            class iF {
                constructor() {
                    this.map = new Map, this.set = (e, t) => {
                        let r = this.get(e);
                        this.exists(e, t) || this.map.set(e, [...r, t])
                    }, this.get = e => this.map.get(e) || [], this.exists = (e, t) => this.get(e).includes(t), this.delete = (e, t) => {
                        if (typeof t > "u") {
                            this.map.delete(e);
                            return
                        }
                        if (!this.map.has(e)) return;
                        let r = this.get(e);
                        if (!this.exists(e, t)) return;
                        let i = r.filter(e => e !== t);
                        if (!i.length) {
                            this.map.delete(e);
                            return
                        }
                        this.map.set(e, i)
                    }, this.clear = () => {
                        this.map.clear()
                    }
                }
                get topics() {
                    return Array.from(this.map.keys())
                }
            }
            var iV = Object.defineProperty,
                iK = Object.defineProperties,
                iB = Object.getOwnPropertyDescriptors,
                iG = Object.getOwnPropertySymbols,
                iW = Object.prototype.hasOwnProperty,
                iJ = Object.prototype.propertyIsEnumerable,
                iY = (e, t, r) => t in e ? iV(e, t, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: r
                }) : e[t] = r,
                iZ = (e, t) => {
                    for (var r in t || (t = {})) iW.call(t, r) && iY(e, r, t[r]);
                    if (iG)
                        for (var r of iG(t)) iJ.call(t, r) && iY(e, r, t[r]);
                    return e
                },
                iX = (e, t) => iK(e, iB(t));
            class iQ extends rl {
                constructor(e, t) {
                    super(e, t), this.relayer = e, this.logger = t, this.subscriptions = new Map, this.topicMap = new iF, this.events = new v.EventEmitter, this.name = "subscription", this.version = "0.3", this.pending = new Map, this.cached = [], this.initialized = !1, this.pendingSubscriptionWatchLabel = "pending_sub_watch_label", this.pollingInterval = 20, this.storagePrefix = iw, this.subscribeTimeout = 1e4, this.restartInProgress = !1, this.batchSubscribeTopicsLimit = 500, this.init = async () => {
                        this.initialized || (this.logger.trace("Initialized"), await this.restart(), this.registerEventListeners(), this.onEnable(), this.clientId = await this.relayer.core.crypto.getClientId())
                    }, this.subscribe = async (e, t) => {
                        await this.restartToComplete(), this.isInitialized(), this.logger.debug("Subscribing Topic"), this.logger.trace({
                            type: "method",
                            method: "subscribe",
                            params: {
                                topic: e,
                                opts: t
                            }
                        });
                        try {
                            let r = tU(t),
                                i = {
                                    topic: e,
                                    relay: r
                                };
                            this.pending.set(e, i);
                            let n = await this.rpcSubscribe(e, r);
                            return this.onSubscribe(n, i), this.logger.debug("Successfully Subscribed Topic"), this.logger.trace({
                                type: "method",
                                method: "subscribe",
                                params: {
                                    topic: e,
                                    opts: t
                                }
                            }), n
                        } catch (e) {
                            throw this.logger.debug("Failed to Subscribe Topic"), this.logger.error(e), e
                        }
                    }, this.unsubscribe = async (e, t) => {
                        await this.restartToComplete(), this.isInitialized(), "u" > typeof t ? .id ? await this.unsubscribeById(e, t.id, t) : await this.unsubscribeByTopic(e, t)
                    }, this.isSubscribed = async e => !!this.topics.includes(e) || await new Promise((t, r) => {
                        let i = new e2.Watch;
                        i.start(this.pendingSubscriptionWatchLabel);
                        let n = setInterval(() => {
                            !this.pending.has(e) && this.topics.includes(e) && (clearInterval(n), i.stop(this.pendingSubscriptionWatchLabel), t(!0)), i.elapsed(this.pendingSubscriptionWatchLabel) >= iT && (clearInterval(n), i.stop(this.pendingSubscriptionWatchLabel), r(Error("Subscription resolution timeout")))
                        }, this.pollingInterval)
                    }).catch(() => !1), this.on = (e, t) => {
                        this.events.on(e, t)
                    }, this.once = (e, t) => {
                        this.events.once(e, t)
                    }, this.off = (e, t) => {
                        this.events.off(e, t)
                    }, this.removeListener = (e, t) => {
                        this.events.removeListener(e, t)
                    }, this.restart = async () => {
                        this.restartInProgress = !0, await this.restore(), await this.reset(), this.restartInProgress = !1
                    }, this.relayer = e, this.logger = (0, rr.generateChildLogger)(t, this.name), this.clientId = ""
                }
                get context() {
                    return (0, rr.getLoggerContext)(this.logger)
                }
                get storageKey() {
                    return this.storagePrefix + this.version + "//" + this.name
                }
                get length() {
                    return this.subscriptions.size
                }
                get ids() {
                    return Array.from(this.subscriptions.keys())
                }
                get values() {
                    return Array.from(this.subscriptions.values())
                }
                get topics() {
                    return this.topicMap.topics
                }
                hasSubscription(e, t) {
                    let r = !1;
                    try {
                        r = this.getSubscription(e).topic === t
                    } catch {}
                    return r
                }
                onEnable() {
                    this.cached = [], this.initialized = !0
                }
                onDisable() {
                    this.cached = this.values, this.subscriptions.clear(), this.topicMap.clear()
                }
                async unsubscribeByTopic(e, t) {
                    let r = this.topicMap.get(e);
                    await Promise.all(r.map(async r => await this.unsubscribeById(e, r, t)))
                }
                async unsubscribeById(e, t, r) {
                    this.logger.debug("Unsubscribing Topic"), this.logger.trace({
                        type: "method",
                        method: "unsubscribe",
                        params: {
                            topic: e,
                            id: t,
                            opts: r
                        }
                    });
                    try {
                        let i = tU(r);
                        await this.rpcUnsubscribe(e, t, i);
                        let n = tJ("USER_DISCONNECTED", `${this.name}, ${e}`);
                        await this.onUnsubscribe(e, t, n), this.logger.debug("Successfully Unsubscribed Topic"), this.logger.trace({
                            type: "method",
                            method: "unsubscribe",
                            params: {
                                topic: e,
                                id: t,
                                opts: r
                            }
                        })
                    } catch (e) {
                        throw this.logger.debug("Failed to Unsubscribe Topic"), this.logger.error(e), e
                    }
                }
                async rpcSubscribe(e, t) {
                    let r = {
                        method: tL(t.protocol).subscribe,
                        params: {
                            topic: e
                        }
                    };
                    this.logger.debug("Outgoing Relay Payload"), this.logger.trace({
                        type: "payload",
                        direction: "outgoing",
                        request: r
                    });
                    try {
                        await await tP(this.relayer.request(r), this.subscribeTimeout)
                    } catch {
                        this.logger.debug("Outgoing Relay Subscribe Payload stalled"), this.relayer.events.emit(iA.connection_stalled)
                    }
                    return ta(e + this.clientId)
                }
                async rpcBatchSubscribe(e) {
                    if (!e.length) return;
                    let t = {
                        method: tL(e[0].relay.protocol).batchSubscribe,
                        params: {
                            topics: e.map(e => e.topic)
                        }
                    };
                    this.logger.debug("Outgoing Relay Payload"), this.logger.trace({
                        type: "payload",
                        direction: "outgoing",
                        request: t
                    });
                    try {
                        return await await tP(this.relayer.request(t), this.subscribeTimeout)
                    } catch {
                        this.logger.debug("Outgoing Relay Payload stalled"), this.relayer.events.emit(iA.connection_stalled)
                    }
                }
                rpcUnsubscribe(e, t, r) {
                    let i = {
                        method: tL(r.protocol).unsubscribe,
                        params: {
                            topic: e,
                            id: t
                        }
                    };
                    return this.logger.debug("Outgoing Relay Payload"), this.logger.trace({
                        type: "payload",
                        direction: "outgoing",
                        request: i
                    }), this.relayer.request(i)
                }
                onSubscribe(e, t) {
                    this.setSubscription(e, iX(iZ({}, t), {
                        id: e
                    })), this.pending.delete(t.topic)
                }
                onBatchSubscribe(e) {
                    e.length && e.forEach(e => {
                        this.setSubscription(e.id, iZ({}, e)), this.pending.delete(e.topic)
                    })
                }
                async onUnsubscribe(e, t, r) {
                    this.events.removeAllListeners(t), this.hasSubscription(t, e) && this.deleteSubscription(t, r), await this.relayer.messages.del(e)
                }
                async setRelayerSubscriptions(e) {
                    await this.relayer.core.storage.setItem(this.storageKey, e)
                }
                async getRelayerSubscriptions() {
                    return await this.relayer.core.storage.getItem(this.storageKey)
                }
                setSubscription(e, t) {
                    this.subscriptions.has(e) || (this.logger.debug("Setting subscription"), this.logger.trace({
                        type: "method",
                        method: "setSubscription",
                        id: e,
                        subscription: t
                    }), this.addSubscription(e, t))
                }
                addSubscription(e, t) {
                    this.subscriptions.set(e, iZ({}, t)), this.topicMap.set(t.topic, e), this.events.emit(iR.created, t)
                }
                getSubscription(e) {
                    this.logger.debug("Getting subscription"), this.logger.trace({
                        type: "method",
                        method: "getSubscription",
                        id: e
                    });
                    let t = this.subscriptions.get(e);
                    if (!t) {
                        let {
                            message: t
                        } = tW("NO_MATCHING_KEY", `${this.name}: ${e}`);
                        throw Error(t)
                    }
                    return t
                }
                deleteSubscription(e, t) {
                    this.logger.debug("Deleting subscription"), this.logger.trace({
                        type: "method",
                        method: "deleteSubscription",
                        id: e,
                        reason: t
                    });
                    let r = this.getSubscription(e);
                    this.subscriptions.delete(e), this.topicMap.delete(r.topic, e), this.events.emit(iR.deleted, iX(iZ({}, r), {
                        reason: t
                    }))
                }
                async persist() {
                    await this.setRelayerSubscriptions(this.values), this.events.emit(iR.sync)
                }
                async reset() {
                    if (this.cached.length) {
                        let e = Math.ceil(this.cached.length / this.batchSubscribeTopicsLimit);
                        for (let t = 0; t < e; t++) {
                            let e = this.cached.splice(0, this.batchSubscribeTopicsLimit);
                            await this.batchSubscribe(e)
                        }
                    }
                    this.events.emit(iR.resubscribed)
                }
                async restore() {
                    try {
                        let e = await this.getRelayerSubscriptions();
                        if (typeof e > "u" || !e.length) return;
                        if (this.subscriptions.size) {
                            let {
                                message: e
                            } = tW("RESTORE_WILL_OVERRIDE", this.name);
                            throw this.logger.error(e), this.logger.error(`${this.name}: ${JSON.stringify(this.values)}`), Error(e)
                        }
                        this.cached = e, this.logger.debug(`Successfully Restored subscriptions for ${this.name}`), this.logger.trace({
                            type: "method",
                            method: "restore",
                            subscriptions: this.values
                        })
                    } catch (e) {
                        this.logger.debug(`Failed to Restore subscriptions for ${this.name}`), this.logger.error(e)
                    }
                }
                async batchSubscribe(e) {
                    if (!e.length) return;
                    let t = await this.rpcBatchSubscribe(e);
                    tY(t) && this.onBatchSubscribe(t.map((t, r) => iX(iZ({}, e[r]), {
                        id: t
                    })))
                }
                async onConnect() {
                    this.restartInProgress || (await this.restart(), this.onEnable())
                }
                onDisconnect() {
                    this.onDisable()
                }
                async checkPending() {
                    if (this.relayer.transportExplicitlyClosed) return;
                    let e = [];
                    this.pending.forEach(t => {
                        e.push(t)
                    }), await this.batchSubscribe(e)
                }
                registerEventListeners() {
                    this.relayer.core.heartbeat.on(rt.HEARTBEAT_EVENTS.pulse, async () => {
                        await this.checkPending()
                    }), this.relayer.on(iA.connect, async () => {
                        await this.onConnect()
                    }), this.relayer.on(iA.disconnect, () => {
                        this.onDisconnect()
                    }), this.events.on(iR.created, async e => {
                        let t = iR.created;
                        this.logger.info(`Emitting ${t}`), this.logger.debug({
                            type: "event",
                            event: t,
                            data: e
                        }), await this.persist()
                    }), this.events.on(iR.deleted, async e => {
                        let t = iR.deleted;
                        this.logger.info(`Emitting ${t}`), this.logger.debug({
                            type: "event",
                            event: t,
                            data: e
                        }), await this.persist()
                    })
                }
                isInitialized() {
                    if (!this.initialized) {
                        let {
                            message: e
                        } = tW("NOT_INITIALIZED", this.name);
                        throw Error(e)
                    }
                }
                async restartToComplete() {
                    this.restartInProgress && await new Promise(e => {
                        let t = setInterval(() => {
                            this.restartInProgress || (clearInterval(t), e())
                        }, this.pollingInterval)
                    })
                }
            }
            var i0 = Object.defineProperty,
                i1 = Object.getOwnPropertySymbols,
                i5 = Object.prototype.hasOwnProperty,
                i3 = Object.prototype.propertyIsEnumerable,
                i6 = (e, t, r) => t in e ? i0(e, t, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: r
                }) : e[t] = r,
                i2 = (e, t) => {
                    for (var r in t || (t = {})) i5.call(t, r) && i6(e, r, t[r]);
                    if (i1)
                        for (var r of i1(t)) i3.call(t, r) && i6(e, r, t[r]);
                    return e
                };
            class i8 extends rc {
                constructor(e) {
                    super(e), this.protocol = "wc", this.version = 2, this.events = new v.EventEmitter, this.name = "relayer", this.transportExplicitlyClosed = !1, this.initialized = !1, this.reconnecting = !1, this.connectionStatusPollingInterval = 20, this.staleConnectionErrors = ["socket hang up", "socket stalled"], this.request = async e => {
                        this.logger.debug("Publishing Request Payload");
                        try {
                            return await this.toEstablishConnection(), await this.provider.request(e)
                        } catch (e) {
                            throw this.logger.debug("Failed to Publish Request"), this.logger.error(e), e
                        }
                    }, this.core = e.core, this.logger = "u" > typeof e.logger && "string" != typeof e.logger ? (0, rr.generateChildLogger)(e.logger, this.name) : (0, rr.pino)((0, rr.getDefaultLoggerOptions)({
                        level: e.logger || "error"
                    })), this.messages = new iq(this.logger, e.core), this.subscriber = new iQ(this, this.logger), this.publisher = new iH(this, this.logger), this.relayUrl = e ? .relayUrl || iP, this.projectId = e.projectId, this.provider = {}
                }
                async init() {
                    this.logger.trace("Initialized"), await this.createProvider(), await Promise.all([this.messages.init(), this.subscriber.init()]);
                    try {
                        await this.transportOpen()
                    } catch {
                        this.logger.warn(`Connection via ${this.relayUrl} failed, attempting to connect via failover domain ${iC}...`), await this.restartTransport(iC)
                    }
                    this.registerEventListeners(), this.initialized = !0, setTimeout(async () => {
                        0 === this.subscriber.topics.length && (this.logger.info("No topics subscribed to after init, closing transport"), await this.transportClose(), this.transportExplicitlyClosed = !1)
                    }, 1e4)
                }
                get context() {
                    return (0, rr.getLoggerContext)(this.logger)
                }
                get connected() {
                    return this.provider.connection.connected
                }
                get connecting() {
                    return this.provider.connection.connecting
                }
                async publish(e, t, r) {
                    this.isInitialized(), await this.publisher.publish(e, t, r), await this.recordMessageEvent({
                        topic: e,
                        message: t,
                        publishedAt: Date.now()
                    })
                }
                async subscribe(e, t) {
                    var r;
                    this.isInitialized();
                    let i = (null == (r = this.subscriber.topicMap.get(e)) ? void 0 : r[0]) || "";
                    return i || (await Promise.all([new Promise(t => {
                        this.subscriber.once(iR.created, r => {
                            r.topic === e && t()
                        })
                    }), new Promise(async r => {
                        i = await this.subscriber.subscribe(e, t), r()
                    })]), i)
                }
                async unsubscribe(e, t) {
                    this.isInitialized(), await this.subscriber.unsubscribe(e, t)
                }
                on(e, t) {
                    this.events.on(e, t)
                }
                once(e, t) {
                    this.events.once(e, t)
                }
                off(e, t) {
                    this.events.off(e, t)
                }
                removeListener(e, t) {
                    this.events.removeListener(e, t)
                }
                async transportClose() {
                    this.transportExplicitlyClosed = !0, this.connected && (await this.provider.disconnect(), this.events.emit(iA.transport_closed))
                }
                async transportOpen(e) {
                    if (this.transportExplicitlyClosed = !1, !this.reconnecting) {
                        this.relayUrl = e || this.relayUrl, this.reconnecting = !0;
                        try {
                            await Promise.all([new Promise(e => {
                                this.initialized || e(), this.subscriber.once(iR.resubscribed, () => {
                                    e()
                                })
                            }), await Promise.race([new Promise(async (e, t) => {
                                await tP(this.provider.connect(), 5e3, `Socket stalled when trying to connect to ${this.relayUrl}`).catch(e => t(e)).then(() => e()).finally(() => this.removeListener(iA.transport_closed, this.rejectTransportOpen))
                            }), new Promise(e => this.once(iA.transport_closed, this.rejectTransportOpen))])])
                        } catch (e) {
                            if (this.logger.error(e), !this.isConnectionStalled(e.message)) throw e;
                            this.events.emit(iA.transport_closed)
                        } finally {
                            this.reconnecting = !1
                        }
                    }
                }
                async restartTransport(e) {
                    this.transportExplicitlyClosed || this.reconnecting || (this.relayUrl = e || this.relayUrl, this.connected && await Promise.all([new Promise(e => {
                        this.provider.once(ix.disconnect, () => {
                            e()
                        })
                    }), this.transportClose()]), await this.createProvider(), await this.transportOpen())
                }
                isConnectionStalled(e) {
                    return this.staleConnectionErrors.some(t => e.includes(t))
                }
                rejectTransportOpen() {
                    throw Error("Attempt to connect to relay via `transportOpen` has stalled. Retrying...")
                }
                async createProvider() {
                    let e = await this.core.crypto.signJWT(this.relayUrl);
                    this.provider = new rD.r(new rC(function({
                        protocol: e,
                        version: t,
                        relayUrl: i,
                        sdkVersion: n,
                        auth: s,
                        projectId: o,
                        useOnCloseEvent: a
                    }) {
                        var c;
                        let u;
                        let l = i.split("?"),
                            h = function(e, t, i) {
                                let n = function() {
                                        if (tE() === t_.reactNative && "u" > typeof r.g && "u" > typeof(null == r.g ? void 0 : r.g.Platform)) {
                                            let {
                                                OS: e,
                                                Version: t
                                            } = r.g.Platform;
                                            return [e, t].join("-")
                                        }
                                        let e = (0, e6.qY)();
                                        if (null === e) return "unknown";
                                        let t = e.os ? e.os.replace(" ", "").toLowerCase() : "unknown";
                                        return "browser" === e.type ? [t, e.name, e.version].join("-") : [t, e.version].join("-")
                                    }(),
                                    s = function() {
                                        var e;
                                        let t = tE();
                                        return t === t_.browser ? [t, (null == (e = (0, e8.getLocation)()) ? void 0 : e.host) || "unknown"].join(":") : t
                                    }();
                                return [
                                    [e, t].join("-"), ["js", i].join("-"), n, s
                                ].join("/")
                            }(e, t, n),
                            f = (c = l[1] || "", u = tv(tv({}, u = e9.parse(c)), {
                                auth: s,
                                ua: h,
                                projectId: o,
                                useOnCloseEvent: a || void 0
                            }), c = e9.stringify(u));
                        return l[0] + "?" + f
                    }({
                        sdkVersion: "2.9.0",
                        protocol: this.protocol,
                        version: this.version,
                        relayUrl: this.relayUrl,
                        projectId: this.projectId,
                        auth: e,
                        useOnCloseEvent: !0
                    }))), this.registerProviderListeners()
                }
                async recordMessageEvent(e) {
                    let {
                        topic: t,
                        message: r
                    } = e;
                    await this.messages.set(t, r)
                }
                async shouldIgnoreMessageEvent(e) {
                    let {
                        topic: t,
                        message: r
                    } = e;
                    return !await this.subscriber.isSubscribed(t) || this.messages.has(t, r)
                }
                async onProviderPayload(e) {
                    if (this.logger.debug("Incoming Relay Payload"), this.logger.trace({
                            type: "payload",
                            direction: "incoming",
                            payload: e
                        }), (0, rS.isJsonRpcRequest)(e)) {
                        if (!e.method.endsWith("_subscription")) return;
                        let t = e.params,
                            {
                                topic: r,
                                message: i,
                                publishedAt: n
                            } = t.data,
                            s = {
                                topic: r,
                                message: i,
                                publishedAt: n
                            };
                        this.logger.debug("Emitting Relayer Payload"), this.logger.trace(i2({
                            type: "event",
                            event: t.id
                        }, s)), this.events.emit(t.id, s), await this.acknowledgePayload(e), await this.onMessageEvent(s)
                    } else(0, rS.isJsonRpcResponse)(e) && this.events.emit(iA.message_ack, e)
                }
                async onMessageEvent(e) {
                    await this.shouldIgnoreMessageEvent(e) || (this.events.emit(iA.message, e), await this.recordMessageEvent(e))
                }
                async acknowledgePayload(e) {
                    let t = (0, rS.formatJsonRpcResult)(e.id, !0);
                    await this.provider.connection.send(t)
                }
                registerProviderListeners() {
                    this.provider.on(ix.payload, e => this.onProviderPayload(e)), this.provider.on(ix.connect, () => {
                        this.events.emit(iA.connect)
                    }), this.provider.on(ix.disconnect, () => {
                        this.onProviderDisconnect()
                    }), this.provider.on(ix.error, e => {
                        this.logger.error(e), this.events.emit(iA.error, e)
                    })
                }
                registerEventListeners() {
                    this.events.on(iA.connection_stalled, async () => {
                        await this.restartTransport()
                    })
                }
                onProviderDisconnect() {
                    this.events.emit(iA.disconnect), this.attemptToReconnect()
                }
                attemptToReconnect() {
                    this.transportExplicitlyClosed || setTimeout(async () => {
                        await this.restartTransport()
                    }, (0, e2.toMiliseconds)(iN))
                }
                isInitialized() {
                    if (!this.initialized) {
                        let {
                            message: e
                        } = tW("NOT_INITIALIZED", this.name);
                        throw Error(e)
                    }
                }
                async toEstablishConnection() {
                    if (!this.connected) {
                        if (this.connecting) return await new Promise(e => {
                            let t = setInterval(() => {
                                this.connected && (clearInterval(t), e())
                            }, this.connectionStatusPollingInterval)
                        });
                        await this.restartTransport()
                    }
                }
            }
            var i4 = Object.defineProperty,
                i9 = Object.getOwnPropertySymbols,
                i7 = Object.prototype.hasOwnProperty,
                ne = Object.prototype.propertyIsEnumerable,
                nt = (e, t, r) => t in e ? i4(e, t, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: r
                }) : e[t] = r,
                nr = (e, t) => {
                    for (var r in t || (t = {})) i7.call(t, r) && nt(e, r, t[r]);
                    if (i9)
                        for (var r of i9(t)) ne.call(t, r) && nt(e, r, t[r]);
                    return e
                };
            class ni extends ru {
                constructor(e, t, r, i = iw, n) {
                    super(e, t, r, i), this.core = e, this.logger = t, this.name = r, this.map = new Map, this.version = "0.3", this.cached = [], this.initialized = !1, this.storagePrefix = iw, this.init = async () => {
                        this.initialized || (this.logger.trace("Initialized"), await this.restore(), this.cached.forEach(e => {
                            var t;
                            this.getKey && null !== e && !tX(e) ? this.map.set(this.getKey(e), e) : (null == (t = e ? .proposer) ? void 0 : t.publicKey) ? this.map.set(e.id, e) : e ? .topic && this.map.set(e.topic, e)
                        }), this.cached = [], this.initialized = !0)
                    }, this.set = async (e, t) => {
                        this.isInitialized(), this.map.has(e) ? await this.update(e, t) : (this.logger.debug("Setting value"), this.logger.trace({
                            type: "method",
                            method: "set",
                            key: e,
                            value: t
                        }), this.map.set(e, t), await this.persist())
                    }, this.get = e => (this.isInitialized(), this.logger.debug("Getting value"), this.logger.trace({
                        type: "method",
                        method: "get",
                        key: e
                    }), this.getData(e)), this.getAll = e => (this.isInitialized(), e ? this.values.filter(t => Object.keys(e).every(r => rx()(t[r], e[r]))) : this.values), this.update = async (e, t) => {
                        this.isInitialized(), this.logger.debug("Updating value"), this.logger.trace({
                            type: "method",
                            method: "update",
                            key: e,
                            update: t
                        });
                        let r = nr(nr({}, this.getData(e)), t);
                        this.map.set(e, r), await this.persist()
                    }, this.delete = async (e, t) => {
                        this.isInitialized(), this.map.has(e) && (this.logger.debug("Deleting value"), this.logger.trace({
                            type: "method",
                            method: "delete",
                            key: e,
                            reason: t
                        }), this.map.delete(e), await this.persist())
                    }, this.logger = (0, rr.generateChildLogger)(t, this.name), this.storagePrefix = i, this.getKey = n
                }
                get context() {
                    return (0, rr.getLoggerContext)(this.logger)
                }
                get storageKey() {
                    return this.storagePrefix + this.version + "//" + this.name
                }
                get length() {
                    return this.map.size
                }
                get keys() {
                    return Array.from(this.map.keys())
                }
                get values() {
                    return Array.from(this.map.values())
                }
                async setDataStore(e) {
                    await this.core.storage.setItem(this.storageKey, e)
                }
                async getDataStore() {
                    return await this.core.storage.getItem(this.storageKey)
                }
                getData(e) {
                    let t = this.map.get(e);
                    if (!t) {
                        let {
                            message: t
                        } = tW("NO_MATCHING_KEY", `${this.name}: ${e}`);
                        throw this.logger.error(t), Error(t)
                    }
                    return t
                }
                async persist() {
                    await this.setDataStore(this.values)
                }
                async restore() {
                    try {
                        let e = await this.getDataStore();
                        if (typeof e > "u" || !e.length) return;
                        if (this.map.size) {
                            let {
                                message: e
                            } = tW("RESTORE_WILL_OVERRIDE", this.name);
                            throw this.logger.error(e), Error(e)
                        }
                        this.cached = e, this.logger.debug(`Successfully Restored value for ${this.name}`), this.logger.trace({
                            type: "method",
                            method: "restore",
                            value: this.values
                        })
                    } catch (e) {
                        this.logger.debug(`Failed to Restore value for ${this.name}`), this.logger.error(e)
                    }
                }
                isInitialized() {
                    if (!this.initialized) {
                        let {
                            message: e
                        } = tW("NOT_INITIALIZED", this.name);
                        throw Error(e)
                    }
                }
            }
            class nn {
                constructor(e, t) {
                    this.core = e, this.logger = t, this.name = "pairing", this.version = "0.3", this.events = new(_()), this.initialized = !1, this.storagePrefix = iw, this.ignoredPayloadTypes = [1], this.registeredMethods = [], this.init = async () => {
                        this.initialized || (await this.pairings.init(), await this.cleanup(), this.registerRelayerEvents(), this.registerExpirerEvents(), this.initialized = !0, this.logger.trace("Initialized"))
                    }, this.register = ({
                        methods: e
                    }) => {
                        this.isInitialized(), this.registeredMethods = [...new Set([...this.registeredMethods, ...e])]
                    }, this.create = async () => {
                        var e;
                        this.isInitialized();
                        let t = to(),
                            r = await this.core.crypto.setSymKey(t),
                            i = tx(e2.FIVE_MINUTES),
                            n = {
                                protocol: "irn"
                            },
                            s = (e = {
                                protocol: this.core.protocol,
                                version: this.core.version,
                                topic: r,
                                symKey: t,
                                relay: n
                            }, `${e.protocol}:${e.topic}@${e.version}?` + e9.stringify(tH({
                                symKey: e.symKey
                            }, function(e, t = "-") {
                                let r = {};
                                return Object.keys(e).forEach(i => {
                                    e[i] && (r["relay" + t + i] = e[i])
                                }), r
                            }(e.relay))));
                        return await this.pairings.set(r, {
                            topic: r,
                            expiry: i,
                            relay: n,
                            active: !1
                        }), await this.core.relayer.subscribe(r), this.core.expirer.set(r, i), {
                            topic: r,
                            uri: s
                        }
                    }, this.pair = async e => {
                        this.isInitialized(), this.isValidPair(e);
                        let {
                            topic: t,
                            symKey: r,
                            relay: i
                        } = function(e) {
                            var t;
                            let r = e.indexOf(":"),
                                i = -1 !== e.indexOf("?") ? e.indexOf("?") : void 0,
                                n = e.substring(0, r),
                                s = e.substring(r + 1, i).split("@"),
                                o = "u" > typeof i ? e.substring(i) : "",
                                a = e9.parse(o);
                            return {
                                protocol: n,
                                topic: (t = s[0]).startsWith("//") ? t.substring(2) : t,
                                version: parseInt(s[1], 10),
                                symKey: a.symKey,
                                relay: function(e, t = "-") {
                                    let r = {},
                                        i = "relay" + t;
                                    return Object.keys(e).forEach(t => {
                                        if (t.startsWith(i)) {
                                            let n = t.replace(i, ""),
                                                s = e[t];
                                            r[n] = s
                                        }
                                    }), r
                                }(a)
                            }
                        }(e.uri);
                        if (this.pairings.keys.includes(t)) throw Error(`Pairing already exists: ${t}`);
                        if (this.core.crypto.hasKeys(t)) throw Error(`Keychain already exists: ${t}`);
                        let n = tx(e2.FIVE_MINUTES),
                            s = {
                                topic: t,
                                relay: i,
                                expiry: n,
                                active: !1
                            };
                        return await this.pairings.set(t, s), await this.core.crypto.setSymKey(r, t), await this.core.relayer.subscribe(t, {
                            relay: i
                        }), this.core.expirer.set(t, n), e.activatePairing && await this.activate({
                            topic: t
                        }), s
                    }, this.activate = async ({
                        topic: e
                    }) => {
                        this.isInitialized();
                        let t = tx(e2.THIRTY_DAYS);
                        await this.pairings.update(e, {
                            active: !0,
                            expiry: t
                        }), this.core.expirer.set(e, t)
                    }, this.ping = async e => {
                        this.isInitialized(), await this.isValidPing(e);
                        let {
                            topic: t
                        } = e;
                        if (this.pairings.keys.includes(t)) {
                            let e = await this.sendRequest(t, "wc_pairingPing", {}),
                                {
                                    done: r,
                                    resolve: i,
                                    reject: n
                                } = tO();
                            this.events.once(tR("pairing_ping", e), ({
                                error: e
                            }) => {
                                e ? n(e) : i()
                            }), await r()
                        }
                    }, this.updateExpiry = async ({
                        topic: e,
                        expiry: t
                    }) => {
                        this.isInitialized(), await this.pairings.update(e, {
                            expiry: t
                        })
                    }, this.updateMetadata = async ({
                        topic: e,
                        metadata: t
                    }) => {
                        this.isInitialized(), await this.pairings.update(e, {
                            peerMetadata: t
                        })
                    }, this.getPairings = () => (this.isInitialized(), this.pairings.values), this.disconnect = async e => {
                        this.isInitialized(), await this.isValidDisconnect(e);
                        let {
                            topic: t
                        } = e;
                        this.pairings.keys.includes(t) && (await this.sendRequest(t, "wc_pairingDelete", tJ("USER_DISCONNECTED")), await this.deletePairing(t))
                    }, this.sendRequest = async (e, t, r) => {
                        let i = (0, rS.formatJsonRpcRequest)(t, r),
                            n = await this.core.crypto.encode(e, i),
                            s = ij[t].req;
                        return this.core.history.set(e, i), this.core.relayer.publish(e, n, s), i.id
                    }, this.sendResult = async (e, t, r) => {
                        let i = (0, rS.formatJsonRpcResult)(e, r),
                            n = await this.core.crypto.encode(t, i),
                            s = ij[(await this.core.history.get(t, e)).request.method].res;
                        await this.core.relayer.publish(t, n, s), await this.core.history.resolve(i)
                    }, this.sendError = async (e, t, r) => {
                        let i = (0, rS.formatJsonRpcError)(e, r),
                            n = await this.core.crypto.encode(t, i),
                            s = await this.core.history.get(t, e),
                            o = ij[s.request.method] ? ij[s.request.method].res : ij.unregistered_method.res;
                        await this.core.relayer.publish(t, n, o), await this.core.history.resolve(i)
                    }, this.deletePairing = async (e, t) => {
                        await this.core.relayer.unsubscribe(e), await Promise.all([this.pairings.delete(e, tJ("USER_DISCONNECTED")), this.core.crypto.deleteSymKey(e), t ? Promise.resolve() : this.core.expirer.del(e)])
                    }, this.cleanup = async () => {
                        let e = this.pairings.getAll().filter(e => tN(e.expiry));
                        await Promise.all(e.map(e => this.deletePairing(e.topic)))
                    }, this.onRelayEventRequest = e => {
                        let {
                            topic: t,
                            payload: r
                        } = e, i = r.method;
                        if (this.pairings.keys.includes(t)) switch (i) {
                            case "wc_pairingPing":
                                return this.onPairingPingRequest(t, r);
                            case "wc_pairingDelete":
                                return this.onPairingDeleteRequest(t, r);
                            default:
                                return this.onUnknownRpcMethodRequest(t, r)
                        }
                    }, this.onRelayEventResponse = async e => {
                        let {
                            topic: t,
                            payload: r
                        } = e, i = (await this.core.history.get(t, r.id)).request.method;
                        if (this.pairings.keys.includes(t)) return "wc_pairingPing" === i ? this.onPairingPingResponse(t, r) : this.onUnknownRpcMethodResponse(i)
                    }, this.onPairingPingRequest = async (e, t) => {
                        let {
                            id: r
                        } = t;
                        try {
                            this.isValidPing({
                                topic: e
                            }), await this.sendResult(r, e, !0), this.events.emit("pairing_ping", {
                                id: r,
                                topic: e
                            })
                        } catch (t) {
                            await this.sendError(r, e, t), this.logger.error(t)
                        }
                    }, this.onPairingPingResponse = (e, t) => {
                        let {
                            id: r
                        } = t;
                        setTimeout(() => {
                            (0, rS.isJsonRpcResult)(t) ? this.events.emit(tR("pairing_ping", r), {}): (0, rS.isJsonRpcError)(t) && this.events.emit(tR("pairing_ping", r), {
                                error: t.error
                            })
                        }, 500)
                    }, this.onPairingDeleteRequest = async (e, t) => {
                        let {
                            id: r
                        } = t;
                        try {
                            this.isValidDisconnect({
                                topic: e
                            }), await this.deletePairing(e), this.events.emit("pairing_delete", {
                                id: r,
                                topic: e
                            })
                        } catch (t) {
                            await this.sendError(r, e, t), this.logger.error(t)
                        }
                    }, this.onUnknownRpcMethodRequest = async (e, t) => {
                        let {
                            id: r,
                            method: i
                        } = t;
                        try {
                            if (this.registeredMethods.includes(i)) return;
                            let t = tJ("WC_METHOD_UNSUPPORTED", i);
                            await this.sendError(r, e, t), this.logger.error(t)
                        } catch (t) {
                            await this.sendError(r, e, t), this.logger.error(t)
                        }
                    }, this.onUnknownRpcMethodResponse = e => {
                        this.registeredMethods.includes(e) || this.logger.error(tJ("WC_METHOD_UNSUPPORTED", e))
                    }, this.isValidPair = e => {
                        if (!t8(e)) {
                            let {
                                message: t
                            } = tW("MISSING_OR_INVALID", `pair() params: ${e}`);
                            throw Error(t)
                        }
                        if (! function(e) {
                                if (tQ(e, !1)) try {
                                    return "u" > typeof new URL(e)
                                } catch {}
                                return !1
                            }(e.uri)) {
                            let {
                                message: t
                            } = tW("MISSING_OR_INVALID", `pair() uri: ${e.uri}`);
                            throw Error(t)
                        }
                    }, this.isValidPing = async e => {
                        if (!t8(e)) {
                            let {
                                message: t
                            } = tW("MISSING_OR_INVALID", `ping() params: ${e}`);
                            throw Error(t)
                        }
                        let {
                            topic: t
                        } = e;
                        await this.isValidPairingTopic(t)
                    }, this.isValidDisconnect = async e => {
                        if (!t8(e)) {
                            let {
                                message: t
                            } = tW("MISSING_OR_INVALID", `disconnect() params: ${e}`);
                            throw Error(t)
                        }
                        let {
                            topic: t
                        } = e;
                        await this.isValidPairingTopic(t)
                    }, this.isValidPairingTopic = async e => {
                        if (!tQ(e, !1)) {
                            let {
                                message: t
                            } = tW("MISSING_OR_INVALID", `pairing topic should be a string: ${e}`);
                            throw Error(t)
                        }
                        if (!this.pairings.keys.includes(e)) {
                            let {
                                message: t
                            } = tW("NO_MATCHING_KEY", `pairing topic doesn't exist: ${e}`);
                            throw Error(t)
                        }
                        if (tN(this.pairings.get(e).expiry)) {
                            await this.deletePairing(e);
                            let {
                                message: t
                            } = tW("EXPIRED", `pairing topic: ${e}`);
                            throw Error(t)
                        }
                    }, this.core = e, this.logger = (0, rr.generateChildLogger)(t, this.name), this.pairings = new ni(this.core, this.logger, this.name, this.storagePrefix)
                }
                get context() {
                    return (0, rr.getLoggerContext)(this.logger)
                }
                isInitialized() {
                    if (!this.initialized) {
                        let {
                            message: e
                        } = tW("NOT_INITIALIZED", this.name);
                        throw Error(e)
                    }
                }
                registerRelayerEvents() {
                    this.core.relayer.on(iA.message, async e => {
                        let {
                            topic: t,
                            message: r
                        } = e;
                        if (this.ignoredPayloadTypes.includes(this.core.crypto.getPayloadType(r))) return;
                        let i = await this.core.crypto.decode(t, r);
                        (0, rS.isJsonRpcRequest)(i) ? (this.core.history.set(t, i), this.onRelayEventRequest({
                            topic: t,
                            payload: i
                        })) : (0, rS.isJsonRpcResponse)(i) && (await this.core.history.resolve(i), await this.onRelayEventResponse({
                            topic: t,
                            payload: i
                        }), this.core.history.delete(t, i.id))
                    })
                }
                registerExpirerEvents() {
                    this.core.expirer.on(iL.expired, async e => {
                        let {
                            topic: t
                        } = tA(e.target);
                        t && this.pairings.keys.includes(t) && (await this.deletePairing(t, !0), this.events.emit("pairing_expire", {
                            topic: t
                        }))
                    })
                }
            }
            class ns extends rs {
                constructor(e, t) {
                    super(e, t), this.core = e, this.logger = t, this.records = new Map, this.events = new v.EventEmitter, this.name = "history", this.version = "0.3", this.cached = [], this.initialized = !1, this.storagePrefix = iw, this.init = async () => {
                        this.initialized || (this.logger.trace("Initialized"), await this.restore(), this.cached.forEach(e => this.records.set(e.id, e)), this.cached = [], this.registerEventListeners(), this.initialized = !0)
                    }, this.set = (e, t, r) => {
                        if (this.isInitialized(), this.logger.debug("Setting JSON-RPC request history record"), this.logger.trace({
                                type: "method",
                                method: "set",
                                topic: e,
                                request: t,
                                chainId: r
                            }), this.records.has(t.id)) return;
                        let i = {
                            id: t.id,
                            topic: e,
                            request: {
                                method: t.method,
                                params: t.params || null
                            },
                            chainId: r,
                            expiry: tx(e2.THIRTY_DAYS)
                        };
                        this.records.set(i.id, i), this.events.emit(iU.created, i)
                    }, this.resolve = async e => {
                        if (this.isInitialized(), this.logger.debug("Updating JSON-RPC response history record"), this.logger.trace({
                                type: "method",
                                method: "update",
                                response: e
                            }), !this.records.has(e.id)) return;
                        let t = await this.getRecord(e.id);
                        typeof t.response > "u" && (t.response = (0, rS.isJsonRpcError)(e) ? {
                            error: e.error
                        } : {
                            result: e.result
                        }, this.records.set(t.id, t), this.events.emit(iU.updated, t))
                    }, this.get = async (e, t) => (this.isInitialized(), this.logger.debug("Getting record"), this.logger.trace({
                        type: "method",
                        method: "get",
                        topic: e,
                        id: t
                    }), await this.getRecord(t)), this.delete = (e, t) => {
                        this.isInitialized(), this.logger.debug("Deleting record"), this.logger.trace({
                            type: "method",
                            method: "delete",
                            id: t
                        }), this.values.forEach(r => {
                            r.topic !== e || "u" > typeof t && r.id !== t || (this.records.delete(r.id), this.events.emit(iU.deleted, r))
                        })
                    }, this.exists = async (e, t) => (this.isInitialized(), !!this.records.has(t) && (await this.getRecord(t)).topic === e), this.on = (e, t) => {
                        this.events.on(e, t)
                    }, this.once = (e, t) => {
                        this.events.once(e, t)
                    }, this.off = (e, t) => {
                        this.events.off(e, t)
                    }, this.removeListener = (e, t) => {
                        this.events.removeListener(e, t)
                    }, this.logger = (0, rr.generateChildLogger)(t, this.name)
                }
                get context() {
                    return (0, rr.getLoggerContext)(this.logger)
                }
                get storageKey() {
                    return this.storagePrefix + this.version + "//" + this.name
                }
                get size() {
                    return this.records.size
                }
                get keys() {
                    return Array.from(this.records.keys())
                }
                get values() {
                    return Array.from(this.records.values())
                }
                get pending() {
                    let e = [];
                    return this.values.forEach(t => {
                        if ("u" > typeof t.response) return;
                        let r = {
                            topic: t.topic,
                            request: (0, rS.formatJsonRpcRequest)(t.request.method, t.request.params, t.id),
                            chainId: t.chainId
                        };
                        return e.push(r)
                    }), e
                }
                async setJsonRpcRecords(e) {
                    await this.core.storage.setItem(this.storageKey, e)
                }
                async getJsonRpcRecords() {
                    return await this.core.storage.getItem(this.storageKey)
                }
                getRecord(e) {
                    this.isInitialized();
                    let t = this.records.get(e);
                    if (!t) {
                        let {
                            message: t
                        } = tW("NO_MATCHING_KEY", `${this.name}: ${e}`);
                        throw Error(t)
                    }
                    return t
                }
                async persist() {
                    await this.setJsonRpcRecords(this.values), this.events.emit(iU.sync)
                }
                async restore() {
                    try {
                        let e = await this.getJsonRpcRecords();
                        if (typeof e > "u" || !e.length) return;
                        if (this.records.size) {
                            let {
                                message: e
                            } = tW("RESTORE_WILL_OVERRIDE", this.name);
                            throw this.logger.error(e), Error(e)
                        }
                        this.cached = e, this.logger.debug(`Successfully Restored records for ${this.name}`), this.logger.trace({
                            type: "method",
                            method: "restore",
                            records: this.values
                        })
                    } catch (e) {
                        this.logger.debug(`Failed to Restore records for ${this.name}`), this.logger.error(e)
                    }
                }
                registerEventListeners() {
                    this.events.on(iU.created, e => {
                        let t = iU.created;
                        this.logger.info(`Emitting ${t}`), this.logger.debug({
                            type: "event",
                            event: t,
                            record: e
                        }), this.persist()
                    }), this.events.on(iU.updated, e => {
                        let t = iU.updated;
                        this.logger.info(`Emitting ${t}`), this.logger.debug({
                            type: "event",
                            event: t,
                            record: e
                        }), this.persist()
                    }), this.events.on(iU.deleted, e => {
                        let t = iU.deleted;
                        this.logger.info(`Emitting ${t}`), this.logger.debug({
                            type: "event",
                            event: t,
                            record: e
                        }), this.persist()
                    }), this.core.heartbeat.on(rt.HEARTBEAT_EVENTS.pulse, () => {
                        this.cleanup()
                    })
                }
                cleanup() {
                    try {
                        this.records.forEach(e => {
                            (0, e2.toMiliseconds)(e.expiry || 0) - Date.now() <= 0 && (this.logger.info(`Deleting expired history log: ${e.id}`), this.delete(e.topic, e.id))
                        })
                    } catch (e) {
                        this.logger.warn(e)
                    }
                }
                isInitialized() {
                    if (!this.initialized) {
                        let {
                            message: e
                        } = tW("NOT_INITIALIZED", this.name);
                        throw Error(e)
                    }
                }
            }
            class no extends rh {
                constructor(e, t) {
                    super(e, t), this.core = e, this.logger = t, this.expirations = new Map, this.events = new v.EventEmitter, this.name = "expirer", this.version = "0.3", this.cached = [], this.initialized = !1, this.storagePrefix = iw, this.init = async () => {
                        this.initialized || (this.logger.trace("Initialized"), await this.restore(), this.cached.forEach(e => this.expirations.set(e.target, e)), this.cached = [], this.registerEventListeners(), this.initialized = !0)
                    }, this.has = e => {
                        try {
                            let t = this.formatTarget(e);
                            return "u" > typeof this.getExpiration(t)
                        } catch {
                            return !1
                        }
                    }, this.set = (e, t) => {
                        this.isInitialized();
                        let r = this.formatTarget(e),
                            i = {
                                target: r,
                                expiry: t
                            };
                        this.expirations.set(r, i), this.checkExpiry(r, i), this.events.emit(iL.created, {
                            target: r,
                            expiration: i
                        })
                    }, this.get = e => {
                        this.isInitialized();
                        let t = this.formatTarget(e);
                        return this.getExpiration(t)
                    }, this.del = e => {
                        if (this.isInitialized(), this.has(e)) {
                            let t = this.formatTarget(e),
                                r = this.getExpiration(t);
                            this.expirations.delete(t), this.events.emit(iL.deleted, {
                                target: t,
                                expiration: r
                            })
                        }
                    }, this.on = (e, t) => {
                        this.events.on(e, t)
                    }, this.once = (e, t) => {
                        this.events.once(e, t)
                    }, this.off = (e, t) => {
                        this.events.off(e, t)
                    }, this.removeListener = (e, t) => {
                        this.events.removeListener(e, t)
                    }, this.logger = (0, rr.generateChildLogger)(t, this.name)
                }
                get context() {
                    return (0, rr.getLoggerContext)(this.logger)
                }
                get storageKey() {
                    return this.storagePrefix + this.version + "//" + this.name
                }
                get length() {
                    return this.expirations.size
                }
                get keys() {
                    return Array.from(this.expirations.keys())
                }
                get values() {
                    return Array.from(this.expirations.values())
                }
                formatTarget(e) {
                    if ("string" == typeof e) return tC("topic", e);
                    if ("number" == typeof e) return tC("id", e);
                    let {
                        message: t
                    } = tW("UNKNOWN_TYPE", `Target type: ${typeof e}`);
                    throw Error(t)
                }
                async setExpirations(e) {
                    await this.core.storage.setItem(this.storageKey, e)
                }
                async getExpirations() {
                    return await this.core.storage.getItem(this.storageKey)
                }
                async persist() {
                    await this.setExpirations(this.values), this.events.emit(iL.sync)
                }
                async restore() {
                    try {
                        let e = await this.getExpirations();
                        if (typeof e > "u" || !e.length) return;
                        if (this.expirations.size) {
                            let {
                                message: e
                            } = tW("RESTORE_WILL_OVERRIDE", this.name);
                            throw this.logger.error(e), Error(e)
                        }
                        this.cached = e, this.logger.debug(`Successfully Restored expirations for ${this.name}`), this.logger.trace({
                            type: "method",
                            method: "restore",
                            expirations: this.values
                        })
                    } catch (e) {
                        this.logger.debug(`Failed to Restore expirations for ${this.name}`), this.logger.error(e)
                    }
                }
                getExpiration(e) {
                    let t = this.expirations.get(e);
                    if (!t) {
                        let {
                            message: t
                        } = tW("NO_MATCHING_KEY", `${this.name}: ${e}`);
                        throw this.logger.error(t), Error(t)
                    }
                    return t
                }
                checkExpiry(e, t) {
                    let {
                        expiry: r
                    } = t;
                    (0, e2.toMiliseconds)(r) - Date.now() <= 0 && this.expire(e, t)
                }
                expire(e, t) {
                    this.expirations.delete(e), this.events.emit(iL.expired, {
                        target: e,
                        expiration: t
                    })
                }
                checkExpirations() {
                    this.core.relayer.connected && this.expirations.forEach((e, t) => this.checkExpiry(t, e))
                }
                registerEventListeners() {
                    this.core.heartbeat.on(rt.HEARTBEAT_EVENTS.pulse, () => this.checkExpirations()), this.events.on(iL.created, e => {
                        let t = iL.created;
                        this.logger.info(`Emitting ${t}`), this.logger.debug({
                            type: "event",
                            event: t,
                            data: e
                        }), this.persist()
                    }), this.events.on(iL.expired, e => {
                        let t = iL.expired;
                        this.logger.info(`Emitting ${t}`), this.logger.debug({
                            type: "event",
                            event: t,
                            data: e
                        }), this.persist()
                    }), this.events.on(iL.deleted, e => {
                        let t = iL.deleted;
                        this.logger.info(`Emitting ${t}`), this.logger.debug({
                            type: "event",
                            event: t,
                            data: e
                        }), this.persist()
                    })
                }
                isInitialized() {
                    if (!this.initialized) {
                        let {
                            message: e
                        } = tW("NOT_INITIALIZED", this.name);
                        throw Error(e)
                    }
                }
            }
            class na extends rf {
                constructor(e, t) {
                    super(e, t), this.projectId = e, this.logger = t, this.name = iM, this.initialized = !1, this.init = async e => {
                        tb() || !tw() || (this.verifyUrl = e ? .verifyUrl || ik, await this.createIframe())
                    }, this.register = async e => {
                        var t;
                        if (this.initialized || await this.init(), this.iframe) try {
                            null == (t = this.iframe.contentWindow) || t.postMessage(e.attestationId, this.verifyUrl), this.logger.info(`postMessage sent: ${e.attestationId} ${this.verifyUrl}`)
                        } catch {}
                    }, this.resolve = async e => {
                        var t;
                        if (this.isDevEnv) return "";
                        this.logger.info(`resolving attestation: ${e.attestationId}`);
                        let r = this.startAbortTimer(e2.FIVE_SECONDS),
                            i = await fetch(`${this.verifyUrl}/attestation/${e.attestationId}`, {
                                signal: this.abortController.signal
                            });
                        return clearTimeout(r), 200 === i.status ? null == (t = await i.json()) ? void 0 : t.origin : ""
                    }, this.createIframe = async () => {
                        try {
                            await Promise.race([new Promise((e, t) => {
                                if (document.getElementById(iM)) return e();
                                let r = document.createElement("iframe");
                                r.setAttribute("id", iM), r.setAttribute("src", `${this.verifyUrl}/${this.projectId}`), r.style.display = "none", r.addEventListener("load", () => {
                                    this.initialized = !0, e()
                                }), r.addEventListener("error", e => {
                                    t(e)
                                }), document.body.append(r), this.iframe = r
                            }), new Promise(e => {
                                setTimeout(() => e("iframe load timeout"), (0, e2.toMiliseconds)(e2.ONE_SECOND / 2))
                            })])
                        } catch (e) {
                            this.logger.error(`Verify iframe failed to load: ${this.verifyUrl}`), this.logger.error(e)
                        }
                    }, this.logger = (0, rr.generateChildLogger)(t, this.name), this.verifyUrl = ik, this.abortController = new AbortController, this.isDevEnv = tm() && rN.env.IS_VITEST
                }
                get context() {
                    return (0, rr.getLoggerContext)(this.logger)
                }
                startAbortTimer(e) {
                    return setTimeout(() => this.abortController.abort(), (0, e2.toMiliseconds)(e))
                }
            }
            var nc = Object.defineProperty,
                nu = Object.getOwnPropertySymbols,
                nl = Object.prototype.hasOwnProperty,
                nh = Object.prototype.propertyIsEnumerable,
                nf = (e, t, r) => t in e ? nc(e, t, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: r
                }) : e[t] = r,
                np = (e, t) => {
                    for (var r in t || (t = {})) nl.call(t, r) && nf(e, r, t[r]);
                    if (nu)
                        for (var r of nu(t)) nh.call(t, r) && nf(e, r, t[r]);
                    return e
                };
            class nd extends rn {
                constructor(e) {
                    super(e), this.protocol = "wc", this.version = 2, this.name = ib, this.events = new v.EventEmitter, this.initialized = !1, this.on = (e, t) => this.events.on(e, t), this.once = (e, t) => this.events.once(e, t), this.off = (e, t) => this.events.off(e, t), this.removeListener = (e, t) => this.events.removeListener(e, t), this.projectId = e ? .projectId, this.relayUrl = e ? .relayUrl || iP;
                    let t = "u" > typeof e ? .logger && "string" != typeof e ? .logger ? e.logger : (0, rr.pino)((0, rr.getDefaultLoggerOptions)({
                        level: e ? .logger || iE.logger
                    }));
                    this.logger = (0, rr.generateChildLogger)(t, this.name), this.heartbeat = new rt.HeartBeat, this.crypto = new i$(this, this.logger, e ? .keychain), this.history = new ns(this, this.logger), this.expirer = new no(this, this.logger), this.storage = null != e && e.storage ? e.storage : new re.ZP(np(np({}, iD), e ? .storageOptions)), this.relayer = new i8({
                        core: this,
                        logger: this.logger,
                        relayUrl: this.relayUrl,
                        projectId: this.projectId
                    }), this.pairing = new nn(this, this.logger), this.verify = new na(this.projectId || "", this.logger)
                }
                static async init(e) {
                    let t = new nd(e);
                    await t.initialize();
                    let r = await t.crypto.getClientId();
                    return await t.storage.setItem("WALLETCONNECT_CLIENT_ID", r), t
                }
                get context() {
                    return (0, rr.getLoggerContext)(this.logger)
                }
                async start() {
                    this.initialized || await this.initialize()
                }
                async initialize() {
                    this.logger.trace("Initialized");
                    try {
                        await this.crypto.init(), await this.history.init(), await this.expirer.init(), await this.relayer.init(), await this.heartbeat.init(), await this.pairing.init(), this.initialized = !0, this.logger.info("Core Initialization Success")
                    } catch (e) {
                        throw this.logger.warn(`Core Initialization Failure at epoch ${Date.now()}`, e), this.logger.error(e.message), e
                    }
                }
            }
            let ng = "client",
                ny = `wc@2:${ng}:`,
                nv = {
                    name: ng,
                    logger: "error"
                },
                n_ = "Proposal expired",
                nm = e2.SEVEN_DAYS,
                nb = {
                    wc_sessionPropose: {
                        req: {
                            ttl: e2.FIVE_MINUTES,
                            prompt: !0,
                            tag: 1100
                        },
                        res: {
                            ttl: e2.FIVE_MINUTES,
                            prompt: !1,
                            tag: 1101
                        }
                    },
                    wc_sessionSettle: {
                        req: {
                            ttl: e2.FIVE_MINUTES,
                            prompt: !1,
                            tag: 1102
                        },
                        res: {
                            ttl: e2.FIVE_MINUTES,
                            prompt: !1,
                            tag: 1103
                        }
                    },
                    wc_sessionUpdate: {
                        req: {
                            ttl: e2.ONE_DAY,
                            prompt: !1,
                            tag: 1104
                        },
                        res: {
                            ttl: e2.ONE_DAY,
                            prompt: !1,
                            tag: 1105
                        }
                    },
                    wc_sessionExtend: {
                        req: {
                            ttl: e2.ONE_DAY,
                            prompt: !1,
                            tag: 1106
                        },
                        res: {
                            ttl: e2.ONE_DAY,
                            prompt: !1,
                            tag: 1107
                        }
                    },
                    wc_sessionRequest: {
                        req: {
                            ttl: e2.FIVE_MINUTES,
                            prompt: !0,
                            tag: 1108
                        },
                        res: {
                            ttl: e2.FIVE_MINUTES,
                            prompt: !1,
                            tag: 1109
                        }
                    },
                    wc_sessionEvent: {
                        req: {
                            ttl: e2.FIVE_MINUTES,
                            prompt: !0,
                            tag: 1110
                        },
                        res: {
                            ttl: e2.FIVE_MINUTES,
                            prompt: !1,
                            tag: 1111
                        }
                    },
                    wc_sessionDelete: {
                        req: {
                            ttl: e2.ONE_DAY,
                            prompt: !1,
                            tag: 1112
                        },
                        res: {
                            ttl: e2.ONE_DAY,
                            prompt: !1,
                            tag: 1113
                        }
                    },
                    wc_sessionPing: {
                        req: {
                            ttl: e2.THIRTY_SECONDS,
                            prompt: !1,
                            tag: 1114
                        },
                        res: {
                            ttl: e2.THIRTY_SECONDS,
                            prompt: !1,
                            tag: 1115
                        }
                    }
                },
                nw = {
                    min: e2.FIVE_MINUTES,
                    max: e2.SEVEN_DAYS
                },
                nE = ["wc_sessionPropose", "wc_sessionRequest", "wc_authRequest"];
            var nD = Object.defineProperty,
                nS = Object.defineProperties,
                nI = Object.getOwnPropertyDescriptors,
                nO = Object.getOwnPropertySymbols,
                nP = Object.prototype.hasOwnProperty,
                nC = Object.prototype.propertyIsEnumerable,
                nA = (e, t, r) => t in e ? nD(e, t, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: r
                }) : e[t] = r,
                nx = (e, t) => {
                    for (var r in t || (t = {})) nP.call(t, r) && nA(e, r, t[r]);
                    if (nO)
                        for (var r of nO(t)) nC.call(t, r) && nA(e, r, t[r]);
                    return e
                },
                nN = (e, t) => nS(e, nI(t));
            class nR extends rd {
                constructor(e) {
                    super(e), this.name = "engine", this.events = new(_()), this.initialized = !1, this.ignoredPayloadTypes = [1], this.init = async () => {
                        this.initialized || (await this.cleanup(), this.registerRelayerEvents(), this.registerExpirerEvents(), this.client.core.pairing.register({
                            methods: Object.keys(nb)
                        }), this.initialized = !0)
                    }, this.connect = async e => {
                        this.isInitialized();
                        let t = nN(nx({}, e), {
                            requiredNamespaces: e.requiredNamespaces || {},
                            optionalNamespaces: e.optionalNamespaces || {}
                        });
                        await this.isValidConnect(t);
                        let {
                            pairingTopic: r,
                            requiredNamespaces: i,
                            optionalNamespaces: n,
                            sessionProperties: s,
                            relays: o
                        } = t, a = r, c, u = !1;
                        if (a && (u = this.client.core.pairing.pairings.get(a).active), !a || !u) {
                            let {
                                topic: e,
                                uri: t
                            } = await this.client.core.pairing.create();
                            a = e, c = t
                        }
                        let l = await this.client.core.crypto.generateKeyPair(),
                            h = nx({
                                requiredNamespaces: i,
                                optionalNamespaces: n,
                                relays: o ? ? [{
                                    protocol: "irn"
                                }],
                                proposer: {
                                    publicKey: l,
                                    metadata: this.client.metadata
                                }
                            }, s && {
                                sessionProperties: s
                            }),
                            {
                                reject: f,
                                resolve: p,
                                done: d
                            } = tO(e2.FIVE_MINUTES, n_);
                        if (this.events.once(tR("session_connect"), async ({
                                error: e,
                                session: t
                            }) => {
                                if (e) f(e);
                                else if (t) {
                                    t.self.publicKey = l;
                                    let e = nN(nx({}, t), {
                                        requiredNamespaces: t.requiredNamespaces,
                                        optionalNamespaces: t.optionalNamespaces
                                    });
                                    await this.client.session.set(t.topic, e), await this.setExpiry(t.topic, t.expiry), a && await this.client.core.pairing.updateMetadata({
                                        topic: a,
                                        metadata: t.peer.metadata
                                    }), p(e)
                                }
                            }), !a) {
                            let {
                                message: e
                            } = tW("NO_MATCHING_KEY", `connect() pairing topic: ${a}`);
                            throw Error(e)
                        }
                        let g = await this.sendRequest(a, "wc_sessionPropose", h),
                            y = tx(e2.FIVE_MINUTES);
                        return await this.setProposal(g, nx({
                            id: g,
                            expiry: y
                        }, h)), {
                            uri: c,
                            approval: d
                        }
                    }, this.pair = async e => (this.isInitialized(), await this.client.core.pairing.pair(e)), this.approve = async e => {
                        this.isInitialized(), await this.isValidApprove(e);
                        let {
                            id: t,
                            relayProtocol: r,
                            namespaces: i,
                            sessionProperties: n
                        } = e, {
                            pairingTopic: s,
                            proposer: o,
                            requiredNamespaces: a,
                            optionalNamespaces: c
                        } = this.client.proposal.get(t);
                        s = s || "", tZ(a) || (a = function(e, t) {
                            let r = t6(e, t);
                            if (r) throw Error(r.message);
                            let i = {};
                            for (let [t, r] of Object.entries(e)) i[t] = {
                                methods: r.methods,
                                events: r.events,
                                chains: r.accounts.map(e => `${e.split(":")[0]}:${e.split(":")[1]}`)
                            };
                            return i
                        }(i, "approve()"));
                        let u = await this.client.core.crypto.generateKeyPair(),
                            l = o.publicKey,
                            h = await this.client.core.crypto.generateSharedKey(u, l);
                        s && t && (await this.client.core.pairing.updateMetadata({
                            topic: s,
                            metadata: o.metadata
                        }), await this.sendResult(t, s, {
                            relay: {
                                protocol: r ? ? "irn"
                            },
                            responderPublicKey: u
                        }), await this.client.proposal.delete(t, tJ("USER_DISCONNECTED")), await this.client.core.pairing.activate({
                            topic: s
                        }));
                        let f = nx({
                            relay: {
                                protocol: r ? ? "irn"
                            },
                            namespaces: i,
                            requiredNamespaces: a,
                            optionalNamespaces: c,
                            pairingTopic: s,
                            controller: {
                                publicKey: u,
                                metadata: this.client.metadata
                            },
                            expiry: tx(nm)
                        }, n && {
                            sessionProperties: n
                        });
                        await this.client.core.relayer.subscribe(h), await this.sendRequest(h, "wc_sessionSettle", f);
                        let p = nN(nx({}, f), {
                            topic: h,
                            pairingTopic: s,
                            acknowledged: !1,
                            self: f.controller,
                            peer: {
                                publicKey: o.publicKey,
                                metadata: o.metadata
                            },
                            controller: u
                        });
                        return await this.client.session.set(h, p), await this.setExpiry(h, tx(nm)), {
                            topic: h,
                            acknowledged: () => new Promise(e => setTimeout(() => e(this.client.session.get(h)), 500))
                        }
                    }, this.reject = async e => {
                        this.isInitialized(), await this.isValidReject(e);
                        let {
                            id: t,
                            reason: r
                        } = e, {
                            pairingTopic: i
                        } = this.client.proposal.get(t);
                        i && (await this.sendError(t, i, r), await this.client.proposal.delete(t, tJ("USER_DISCONNECTED")))
                    }, this.update = async e => {
                        this.isInitialized(), await this.isValidUpdate(e);
                        let {
                            topic: t,
                            namespaces: r
                        } = e, i = await this.sendRequest(t, "wc_sessionUpdate", {
                            namespaces: r
                        }), {
                            done: n,
                            resolve: s,
                            reject: o
                        } = tO();
                        return this.events.once(tR("session_update", i), ({
                            error: e
                        }) => {
                            e ? o(e) : s()
                        }), await this.client.session.update(t, {
                            namespaces: r
                        }), {
                            acknowledged: n
                        }
                    }, this.extend = async e => {
                        this.isInitialized(), await this.isValidExtend(e);
                        let {
                            topic: t
                        } = e, r = await this.sendRequest(t, "wc_sessionExtend", {}), {
                            done: i,
                            resolve: n,
                            reject: s
                        } = tO();
                        return this.events.once(tR("session_extend", r), ({
                            error: e
                        }) => {
                            e ? s(e) : n()
                        }), await this.setExpiry(t, tx(nm)), {
                            acknowledged: i
                        }
                    }, this.request = async e => {
                        this.isInitialized(), await this.isValidRequest(e);
                        let {
                            chainId: t,
                            request: r,
                            topic: i,
                            expiry: n
                        } = e, s = await this.sendRequest(i, "wc_sessionRequest", {
                            request: r,
                            chainId: t
                        }, n), {
                            done: o,
                            resolve: a,
                            reject: c
                        } = tO(n);
                        return this.events.once(tR("session_request", s), ({
                            error: e,
                            result: t
                        }) => {
                            e ? c(e) : a(t)
                        }), this.client.events.emit("session_request_sent", {
                            topic: i,
                            request: r,
                            chainId: t,
                            id: s
                        }), tj({
                            id: s,
                            topic: i,
                            wcDeepLink: await this.client.core.storage.getItem("WALLETCONNECT_DEEPLINK_CHOICE")
                        }), await o()
                    }, this.respond = async e => {
                        this.isInitialized(), await this.isValidRespond(e);
                        let {
                            topic: t,
                            response: r
                        } = e, {
                            id: i
                        } = r;
                        (0, rS.isJsonRpcResult)(r) ? await this.sendResult(i, t, r.result): (0, rS.isJsonRpcError)(r) && await this.sendError(i, t, r.error), this.deletePendingSessionRequest(e.response.id, {
                            message: "fulfilled",
                            code: 0
                        })
                    }, this.ping = async e => {
                        this.isInitialized(), await this.isValidPing(e);
                        let {
                            topic: t
                        } = e;
                        if (this.client.session.keys.includes(t)) {
                            let e = await this.sendRequest(t, "wc_sessionPing", {}),
                                {
                                    done: r,
                                    resolve: i,
                                    reject: n
                                } = tO();
                            this.events.once(tR("session_ping", e), ({
                                error: e
                            }) => {
                                e ? n(e) : i()
                            }), await r()
                        } else this.client.core.pairing.pairings.keys.includes(t) && await this.client.core.pairing.ping({
                            topic: t
                        })
                    }, this.emit = async e => {
                        this.isInitialized(), await this.isValidEmit(e);
                        let {
                            topic: t,
                            event: r,
                            chainId: i
                        } = e;
                        await this.sendRequest(t, "wc_sessionEvent", {
                            event: r,
                            chainId: i
                        })
                    }, this.disconnect = async e => {
                        this.isInitialized(), await this.isValidDisconnect(e);
                        let {
                            topic: t
                        } = e;
                        if (this.client.session.keys.includes(t)) {
                            let e;
                            let r = (0, rS.getBigIntRpcId)().toString(),
                                i = t => {
                                    t ? .id.toString() === r && (this.client.core.relayer.events.removeListener(iA.message_ack, i), e())
                                };
                            await Promise.all([new Promise(t => {
                                e = t, this.client.core.relayer.on(iA.message_ack, i)
                            }), this.sendRequest(t, "wc_sessionDelete", tJ("USER_DISCONNECTED"), void 0, r)]), await this.deleteSession(t)
                        } else await this.client.core.pairing.disconnect({
                            topic: t
                        })
                    }, this.find = e => (this.isInitialized(), this.client.session.getAll().filter(t => (function(e, t) {
                        let {
                            requiredNamespaces: r
                        } = t, i = Object.keys(e.namespaces), n = Object.keys(r), s = !0;
                        return !!tD(n, i) && (i.forEach(t => {
                            let {
                                accounts: i,
                                methods: n,
                                events: o
                            } = e.namespaces[t], a = tF(i), c = r[t];
                            tD(tt(t, c), a) && tD(c.methods, n) && tD(c.events, o) || (s = !1)
                        }), s)
                    })(t, e))), this.getPendingSessionRequests = () => (this.isInitialized(), this.client.pendingRequest.getAll()), this.cleanupDuplicatePairings = async e => {
                        if (e.pairingTopic) try {
                            let t = this.client.core.pairing.pairings.get(e.pairingTopic),
                                r = this.client.core.pairing.pairings.getAll().filter(r => {
                                    var i, n;
                                    return (null == (i = r.peerMetadata) ? void 0 : i.url) && (null == (n = r.peerMetadata) ? void 0 : n.url) === e.peer.metadata.url && r.topic && r.topic !== t.topic
                                });
                            if (0 === r.length) return;
                            this.client.logger.info(`Cleaning up ${r.length} duplicate pairing(s)`), await Promise.all(r.map(e => this.client.core.pairing.disconnect({
                                topic: e.topic
                            }))), this.client.logger.info("Duplicate pairings clean up finished")
                        } catch (e) {
                            this.client.logger.error(e)
                        }
                    }, this.deleteSession = async (e, t) => {
                        let {
                            self: r
                        } = this.client.session.get(e);
                        await this.client.core.relayer.unsubscribe(e), this.client.session.delete(e, tJ("USER_DISCONNECTED")), this.client.core.crypto.keychain.has(r.publicKey) && await this.client.core.crypto.deleteKeyPair(r.publicKey), this.client.core.crypto.keychain.has(e) && await this.client.core.crypto.deleteSymKey(e), t || this.client.core.expirer.del(e)
                    }, this.deleteProposal = async (e, t) => {
                        await Promise.all([this.client.proposal.delete(e, tJ("USER_DISCONNECTED")), t ? Promise.resolve() : this.client.core.expirer.del(e)])
                    }, this.deletePendingSessionRequest = async (e, t, r = !1) => {
                        await Promise.all([this.client.pendingRequest.delete(e, t), r ? Promise.resolve() : this.client.core.expirer.del(e)])
                    }, this.setExpiry = async (e, t) => {
                        this.client.session.keys.includes(e) && await this.client.session.update(e, {
                            expiry: t
                        }), this.client.core.expirer.set(e, t)
                    }, this.setProposal = async (e, t) => {
                        await this.client.proposal.set(e, t), this.client.core.expirer.set(e, t.expiry)
                    }, this.setPendingSessionRequest = async e => {
                        let t = nb.wc_sessionRequest.req.ttl,
                            {
                                id: r,
                                topic: i,
                                params: n
                            } = e;
                        await this.client.pendingRequest.set(r, {
                            id: r,
                            topic: i,
                            params: n
                        }), t && this.client.core.expirer.set(r, tx(t))
                    }, this.sendRequest = async (e, t, r, i, n) => {
                        let s = (0, rS.formatJsonRpcRequest)(t, r);
                        if (tw() && nE.includes(t)) {
                            let e = ta(JSON.stringify(s));
                            await this.client.core.verify.register({
                                attestationId: e
                            })
                        }
                        let o = await this.client.core.crypto.encode(e, s),
                            a = nb[t].req;
                        return i && (a.ttl = i), n && (a.id = n), this.client.core.history.set(e, s), this.client.core.relayer.publish(e, o, a), s.id
                    }, this.sendResult = async (e, t, r) => {
                        let i = (0, rS.formatJsonRpcResult)(e, r),
                            n = await this.client.core.crypto.encode(t, i),
                            s = nb[(await this.client.core.history.get(t, e)).request.method].res;
                        this.client.core.relayer.publish(t, n, s), await this.client.core.history.resolve(i)
                    }, this.sendError = async (e, t, r) => {
                        let i = (0, rS.formatJsonRpcError)(e, r),
                            n = await this.client.core.crypto.encode(t, i),
                            s = nb[(await this.client.core.history.get(t, e)).request.method].res;
                        this.client.core.relayer.publish(t, n, s), await this.client.core.history.resolve(i)
                    }, this.cleanup = async () => {
                        let e = [],
                            t = [];
                        this.client.session.getAll().forEach(t => {
                            tN(t.expiry) && e.push(t.topic)
                        }), this.client.proposal.getAll().forEach(e => {
                            tN(e.expiry) && t.push(e.id)
                        }), await Promise.all([...e.map(e => this.deleteSession(e)), ...t.map(e => this.deleteProposal(e))])
                    }, this.onRelayEventRequest = e => {
                        let {
                            topic: t,
                            payload: r
                        } = e, i = r.method;
                        switch (i) {
                            case "wc_sessionPropose":
                                return this.onSessionProposeRequest(t, r);
                            case "wc_sessionSettle":
                                return this.onSessionSettleRequest(t, r);
                            case "wc_sessionUpdate":
                                return this.onSessionUpdateRequest(t, r);
                            case "wc_sessionExtend":
                                return this.onSessionExtendRequest(t, r);
                            case "wc_sessionPing":
                                return this.onSessionPingRequest(t, r);
                            case "wc_sessionDelete":
                                return this.onSessionDeleteRequest(t, r);
                            case "wc_sessionRequest":
                                return this.onSessionRequest(t, r);
                            case "wc_sessionEvent":
                                return this.onSessionEventRequest(t, r);
                            default:
                                return this.client.logger.info(`Unsupported request method ${i}`)
                        }
                    }, this.onRelayEventResponse = async e => {
                        let {
                            topic: t,
                            payload: r
                        } = e, i = (await this.client.core.history.get(t, r.id)).request.method;
                        switch (i) {
                            case "wc_sessionPropose":
                                return this.onSessionProposeResponse(t, r);
                            case "wc_sessionSettle":
                                return this.onSessionSettleResponse(t, r);
                            case "wc_sessionUpdate":
                                return this.onSessionUpdateResponse(t, r);
                            case "wc_sessionExtend":
                                return this.onSessionExtendResponse(t, r);
                            case "wc_sessionPing":
                                return this.onSessionPingResponse(t, r);
                            case "wc_sessionRequest":
                                return this.onSessionRequestResponse(t, r);
                            default:
                                return this.client.logger.info(`Unsupported response method ${i}`)
                        }
                    }, this.onRelayEventUnknownPayload = e => {
                        let {
                            topic: t
                        } = e, {
                            message: r
                        } = tW("MISSING_OR_INVALID", `Decoded payload on topic ${t} is not identifiable as a JSON-RPC request or a response.`);
                        throw Error(r)
                    }, this.onSessionProposeRequest = async (e, t) => {
                        let {
                            params: r,
                            id: i
                        } = t;
                        try {
                            this.isValidConnect(nx({}, t.params));
                            let n = tx(e2.FIVE_MINUTES),
                                s = nx({
                                    id: i,
                                    pairingTopic: e,
                                    expiry: n
                                }, r);
                            await this.setProposal(i, s);
                            let o = ta(JSON.stringify(t)),
                                a = await this.getVerifyContext(o, s.proposer.metadata);
                            this.client.events.emit("session_proposal", {
                                id: i,
                                params: s,
                                verifyContext: a
                            })
                        } catch (t) {
                            await this.sendError(i, e, t), this.client.logger.error(t)
                        }
                    }, this.onSessionProposeResponse = async (e, t) => {
                        let {
                            id: r
                        } = t;
                        if ((0, rS.isJsonRpcResult)(t)) {
                            let {
                                result: i
                            } = t;
                            this.client.logger.trace({
                                type: "method",
                                method: "onSessionProposeResponse",
                                result: i
                            });
                            let n = this.client.proposal.get(r);
                            this.client.logger.trace({
                                type: "method",
                                method: "onSessionProposeResponse",
                                proposal: n
                            });
                            let s = n.proposer.publicKey;
                            this.client.logger.trace({
                                type: "method",
                                method: "onSessionProposeResponse",
                                selfPublicKey: s
                            });
                            let o = i.responderPublicKey;
                            this.client.logger.trace({
                                type: "method",
                                method: "onSessionProposeResponse",
                                peerPublicKey: o
                            });
                            let a = await this.client.core.crypto.generateSharedKey(s, o);
                            this.client.logger.trace({
                                type: "method",
                                method: "onSessionProposeResponse",
                                sessionTopic: a
                            });
                            let c = await this.client.core.relayer.subscribe(a);
                            this.client.logger.trace({
                                type: "method",
                                method: "onSessionProposeResponse",
                                subscriptionId: c
                            }), await this.client.core.pairing.activate({
                                topic: e
                            })
                        } else(0, rS.isJsonRpcError)(t) && (await this.client.proposal.delete(r, tJ("USER_DISCONNECTED")), this.events.emit(tR("session_connect"), {
                            error: t.error
                        }))
                    }, this.onSessionSettleRequest = async (e, t) => {
                        let {
                            id: r,
                            params: i
                        } = t;
                        try {
                            this.isValidSessionSettleRequest(i);
                            let {
                                relay: r,
                                controller: n,
                                expiry: s,
                                namespaces: o,
                                requiredNamespaces: a,
                                optionalNamespaces: c,
                                sessionProperties: u,
                                pairingTopic: l
                            } = t.params, h = nx({
                                topic: e,
                                relay: r,
                                expiry: s,
                                namespaces: o,
                                acknowledged: !0,
                                pairingTopic: l,
                                requiredNamespaces: a,
                                optionalNamespaces: c,
                                controller: n.publicKey,
                                self: {
                                    publicKey: "",
                                    metadata: this.client.metadata
                                },
                                peer: {
                                    publicKey: n.publicKey,
                                    metadata: n.metadata
                                }
                            }, u && {
                                sessionProperties: u
                            });
                            await this.sendResult(t.id, e, !0), this.events.emit(tR("session_connect"), {
                                session: h
                            }), this.cleanupDuplicatePairings(h)
                        } catch (t) {
                            await this.sendError(r, e, t), this.client.logger.error(t)
                        }
                    }, this.onSessionSettleResponse = async (e, t) => {
                        let {
                            id: r
                        } = t;
                        (0, rS.isJsonRpcResult)(t) ? (await this.client.session.update(e, {
                            acknowledged: !0
                        }), this.events.emit(tR("session_approve", r), {})) : (0, rS.isJsonRpcError)(t) && (await this.client.session.delete(e, tJ("USER_DISCONNECTED")), this.events.emit(tR("session_approve", r), {
                            error: t.error
                        }))
                    }, this.onSessionUpdateRequest = async (e, t) => {
                        let {
                            params: r,
                            id: i
                        } = t;
                        try {
                            this.isValidUpdate(nx({
                                topic: e
                            }, r)), await this.client.session.update(e, {
                                namespaces: r.namespaces
                            }), await this.sendResult(i, e, !0), this.client.events.emit("session_update", {
                                id: i,
                                topic: e,
                                params: r
                            })
                        } catch (t) {
                            await this.sendError(i, e, t), this.client.logger.error(t)
                        }
                    }, this.onSessionUpdateResponse = (e, t) => {
                        let {
                            id: r
                        } = t;
                        (0, rS.isJsonRpcResult)(t) ? this.events.emit(tR("session_update", r), {}): (0, rS.isJsonRpcError)(t) && this.events.emit(tR("session_update", r), {
                            error: t.error
                        })
                    }, this.onSessionExtendRequest = async (e, t) => {
                        let {
                            id: r
                        } = t;
                        try {
                            this.isValidExtend({
                                topic: e
                            }), await this.setExpiry(e, tx(nm)), await this.sendResult(r, e, !0), this.client.events.emit("session_extend", {
                                id: r,
                                topic: e
                            })
                        } catch (t) {
                            await this.sendError(r, e, t), this.client.logger.error(t)
                        }
                    }, this.onSessionExtendResponse = (e, t) => {
                        let {
                            id: r
                        } = t;
                        (0, rS.isJsonRpcResult)(t) ? this.events.emit(tR("session_extend", r), {}): (0, rS.isJsonRpcError)(t) && this.events.emit(tR("session_extend", r), {
                            error: t.error
                        })
                    }, this.onSessionPingRequest = async (e, t) => {
                        let {
                            id: r
                        } = t;
                        try {
                            this.isValidPing({
                                topic: e
                            }), await this.sendResult(r, e, !0), this.client.events.emit("session_ping", {
                                id: r,
                                topic: e
                            })
                        } catch (t) {
                            await this.sendError(r, e, t), this.client.logger.error(t)
                        }
                    }, this.onSessionPingResponse = (e, t) => {
                        let {
                            id: r
                        } = t;
                        setTimeout(() => {
                            (0, rS.isJsonRpcResult)(t) ? this.events.emit(tR("session_ping", r), {}): (0, rS.isJsonRpcError)(t) && this.events.emit(tR("session_ping", r), {
                                error: t.error
                            })
                        }, 500)
                    }, this.onSessionDeleteRequest = async (e, t) => {
                        let {
                            id: r
                        } = t;
                        try {
                            this.isValidDisconnect({
                                topic: e,
                                reason: t.params
                            }), await Promise.all([new Promise(t => {
                                this.client.core.relayer.once(iA.publish, async () => {
                                    t(await this.deleteSession(e))
                                })
                            }), this.sendResult(r, e, !0)]), this.client.events.emit("session_delete", {
                                id: r,
                                topic: e
                            })
                        } catch (e) {
                            this.client.logger.error(e)
                        }
                    }, this.onSessionRequest = async (e, t) => {
                        let {
                            id: r,
                            params: i
                        } = t;
                        try {
                            this.isValidRequest(nx({
                                topic: e
                            }, i)), await this.setPendingSessionRequest({
                                id: r,
                                topic: e,
                                params: i
                            });
                            let n = ta(JSON.stringify(t)),
                                s = this.client.session.get(e),
                                o = await this.getVerifyContext(n, s.peer.metadata);
                            this.client.events.emit("session_request", {
                                id: r,
                                topic: e,
                                params: i,
                                verifyContext: o
                            })
                        } catch (t) {
                            await this.sendError(r, e, t), this.client.logger.error(t)
                        }
                    }, this.onSessionRequestResponse = (e, t) => {
                        let {
                            id: r
                        } = t;
                        (0, rS.isJsonRpcResult)(t) ? this.events.emit(tR("session_request", r), {
                            result: t.result
                        }): (0, rS.isJsonRpcError)(t) && this.events.emit(tR("session_request", r), {
                            error: t.error
                        })
                    }, this.onSessionEventRequest = async (e, t) => {
                        let {
                            id: r,
                            params: i
                        } = t;
                        try {
                            this.isValidEmit(nx({
                                topic: e
                            }, i)), this.client.events.emit("session_event", {
                                id: r,
                                topic: e,
                                params: i
                            })
                        } catch (t) {
                            await this.sendError(r, e, t), this.client.logger.error(t)
                        }
                    }, this.isValidConnect = async e => {
                        let t;
                        if (!t8(e)) {
                            let {
                                message: t
                            } = tW("MISSING_OR_INVALID", `connect() params: ${JSON.stringify(e)}`);
                            throw Error(t)
                        }
                        let {
                            pairingTopic: r,
                            requiredNamespaces: i,
                            optionalNamespaces: n,
                            sessionProperties: s,
                            relays: o
                        } = e;
                        if (tX(r) || await this.isValidPairingTopic(r), t = !1, o ? o && tY(o) && o.length && o.forEach(e => {
                                t = t2(e)
                            }) : t = !0, !t) {
                            let {
                                message: e
                            } = tW("MISSING_OR_INVALID", `connect() relays: ${o}`);
                            throw Error(e)
                        }
                        tX(i) || 0 === tZ(i) || this.validateNamespaces(i, "requiredNamespaces"), tX(n) || 0 === tZ(n) || this.validateNamespaces(n, "optionalNamespaces"), tX(s) || this.validateSessionProps(s, "sessionProperties")
                    }, this.validateNamespaces = (e, t) => {
                        let r = function(e, t, r) {
                            let i = null;
                            if (e && tZ(e)) {
                                let n;
                                let s = t3(e, t);
                                s && (i = s);
                                let o = (n = null, Object.entries(e).forEach(([e, i]) => {
                                    var s, o;
                                    let a;
                                    if (n) return;
                                    let c = (s = tt(e, i), o = `${t} ${r}`, a = null, tY(s) && s.length ? s.forEach(e => {
                                        a || t1(e) || (a = tJ("UNSUPPORTED_CHAINS", `${o}, chain ${e} should be a string and conform to "namespace:chainId" format`))
                                    }) : t1(e) || (a = tJ("UNSUPPORTED_CHAINS", `${o}, chains must be defined as "namespace:chainId" e.g. "eip155:1": {...} in the namespace key OR as an array of CAIP-2 chainIds e.g. eip155: { chains: ["eip155:1", "eip155:5"] }`)), a);
                                    c && (n = c)
                                }), n);
                                o && (i = o)
                            } else i = tW("MISSING_OR_INVALID", `${t}, ${r} should be an object with data`);
                            return i
                        }(e, "connect()", t);
                        if (r) throw Error(r.message)
                    }, this.isValidApprove = async e => {
                        if (!t8(e)) throw Error(tW("MISSING_OR_INVALID", `approve() params: ${e}`).message);
                        let {
                            id: t,
                            namespaces: r,
                            relayProtocol: i,
                            sessionProperties: n
                        } = e;
                        await this.isValidProposalId(t);
                        let s = this.client.proposal.get(t),
                            o = t6(r, "approve()");
                        if (o) throw Error(o.message);
                        let a = t9(s.requiredNamespaces, r, "approve()");
                        if (a) throw Error(a.message);
                        if (!tQ(i, !0)) {
                            let {
                                message: e
                            } = tW("MISSING_OR_INVALID", `approve() relayProtocol: ${i}`);
                            throw Error(e)
                        }
                        tX(n) || this.validateSessionProps(n, "sessionProperties")
                    }, this.isValidReject = async e => {
                        if (!t8(e)) {
                            let {
                                message: t
                            } = tW("MISSING_OR_INVALID", `reject() params: ${e}`);
                            throw Error(t)
                        }
                        let {
                            id: t,
                            reason: r
                        } = e;
                        if (await this.isValidProposalId(t), !r || "object" != typeof r || !r.code || !t0(r.code, !1) || !r.message || !tQ(r.message, !1)) {
                            let {
                                message: e
                            } = tW("MISSING_OR_INVALID", `reject() reason: ${JSON.stringify(r)}`);
                            throw Error(e)
                        }
                    }, this.isValidSessionSettleRequest = e => {
                        let t;
                        if (!t8(e)) {
                            let {
                                message: t
                            } = tW("MISSING_OR_INVALID", `onSessionSettleRequest() params: ${e}`);
                            throw Error(t)
                        }
                        let {
                            relay: r,
                            controller: i,
                            namespaces: n,
                            expiry: s
                        } = e;
                        if (!t2(r)) {
                            let {
                                message: e
                            } = tW("MISSING_OR_INVALID", "onSessionSettleRequest() relay protocol should be a string");
                            throw Error(e)
                        }
                        let o = (t = null, tQ(i ? .publicKey, !1) || (t = tW("MISSING_OR_INVALID", "onSessionSettleRequest() controller public key should be a string")), t);
                        if (o) throw Error(o.message);
                        let a = t6(n, "onSessionSettleRequest()");
                        if (a) throw Error(a.message);
                        if (tN(s)) {
                            let {
                                message: e
                            } = tW("EXPIRED", "onSessionSettleRequest()");
                            throw Error(e)
                        }
                    }, this.isValidUpdate = async e => {
                        if (!t8(e)) {
                            let {
                                message: t
                            } = tW("MISSING_OR_INVALID", `update() params: ${e}`);
                            throw Error(t)
                        }
                        let {
                            topic: t,
                            namespaces: r
                        } = e;
                        await this.isValidSessionTopic(t);
                        let i = this.client.session.get(t),
                            n = t6(r, "update()");
                        if (n) throw Error(n.message);
                        let s = t9(i.requiredNamespaces, r, "update()");
                        if (s) throw Error(s.message)
                    }, this.isValidExtend = async e => {
                        if (!t8(e)) {
                            let {
                                message: t
                            } = tW("MISSING_OR_INVALID", `extend() params: ${e}`);
                            throw Error(t)
                        }
                        let {
                            topic: t
                        } = e;
                        await this.isValidSessionTopic(t)
                    }, this.isValidRequest = async e => {
                        var t;
                        if (!t8(e)) {
                            let {
                                message: t
                            } = tW("MISSING_OR_INVALID", `request() params: ${e}`);
                            throw Error(t)
                        }
                        let {
                            topic: r,
                            request: i,
                            chainId: n,
                            expiry: s
                        } = e;
                        await this.isValidSessionTopic(r);
                        let {
                            namespaces: o
                        } = this.client.session.get(r);
                        if (!t4(o, n)) {
                            let {
                                message: e
                            } = tW("MISSING_OR_INVALID", `request() chainId: ${n}`);
                            throw Error(e)
                        }
                        if (tX(i) || !tQ(i.method, !1)) {
                            let {
                                message: e
                            } = tW("MISSING_OR_INVALID", `request() ${JSON.stringify(i)}`);
                            throw Error(e)
                        }
                        if (!(tQ(t = i.method, !1) && (function(e, t) {
                                let r = [];
                                return Object.values(e).forEach(e => {
                                    tF(e.accounts).includes(t) && r.push(...e.methods)
                                }), r
                            })(o, n).includes(t))) {
                            let {
                                message: e
                            } = tW("MISSING_OR_INVALID", `request() method: ${i.method}`);
                            throw Error(e)
                        }
                        if (s && (!t0(s, !1) || !(s <= nw.max) || !(s >= nw.min))) {
                            let {
                                message: e
                            } = tW("MISSING_OR_INVALID", `request() expiry: ${s}. Expiry must be a number (in seconds) between ${nw.min} and ${nw.max}`);
                            throw Error(e)
                        }
                    }, this.isValidRespond = async e => {
                        if (!t8(e)) {
                            let {
                                message: t
                            } = tW("MISSING_OR_INVALID", `respond() params: ${e}`);
                            throw Error(t)
                        }
                        let {
                            topic: t,
                            response: r
                        } = e;
                        if (await this.isValidSessionTopic(t), tX(r) || tX(r.result) && tX(r.error) || !t0(r.id, !1) || !tQ(r.jsonrpc, !1)) {
                            let {
                                message: e
                            } = tW("MISSING_OR_INVALID", `respond() response: ${JSON.stringify(r)}`);
                            throw Error(e)
                        }
                    }, this.isValidPing = async e => {
                        if (!t8(e)) {
                            let {
                                message: t
                            } = tW("MISSING_OR_INVALID", `ping() params: ${e}`);
                            throw Error(t)
                        }
                        let {
                            topic: t
                        } = e;
                        await this.isValidSessionOrPairingTopic(t)
                    }, this.isValidEmit = async e => {
                        var t;
                        if (!t8(e)) {
                            let {
                                message: t
                            } = tW("MISSING_OR_INVALID", `emit() params: ${e}`);
                            throw Error(t)
                        }
                        let {
                            topic: r,
                            event: i,
                            chainId: n
                        } = e;
                        await this.isValidSessionTopic(r);
                        let {
                            namespaces: s
                        } = this.client.session.get(r);
                        if (!t4(s, n)) {
                            let {
                                message: e
                            } = tW("MISSING_OR_INVALID", `emit() chainId: ${n}`);
                            throw Error(e)
                        }
                        if (tX(i) || !tQ(i.name, !1)) {
                            let {
                                message: e
                            } = tW("MISSING_OR_INVALID", `emit() event: ${JSON.stringify(i)}`);
                            throw Error(e)
                        }
                        if (!(tQ(t = i.name, !1) && (function(e, t) {
                                let r = [];
                                return Object.values(e).forEach(e => {
                                    tF(e.accounts).includes(t) && r.push(...e.events)
                                }), r
                            })(s, n).includes(t))) {
                            let {
                                message: e
                            } = tW("MISSING_OR_INVALID", `emit() event: ${JSON.stringify(i)}`);
                            throw Error(e)
                        }
                    }, this.isValidDisconnect = async e => {
                        if (!t8(e)) {
                            let {
                                message: t
                            } = tW("MISSING_OR_INVALID", `disconnect() params: ${e}`);
                            throw Error(t)
                        }
                        let {
                            topic: t
                        } = e;
                        await this.isValidSessionOrPairingTopic(t)
                    }, this.getVerifyContext = async (e, t) => {
                        let r = {
                            verified: {
                                verifyUrl: t.verifyUrl || "",
                                validation: "UNKNOWN",
                                origin: t.url || ""
                            }
                        };
                        try {
                            let i = await this.client.core.verify.resolve({
                                attestationId: e,
                                verifyUrl: t.verifyUrl
                            });
                            i && (r.verified.origin = i, r.verified.validation = i === t.url ? "VALID" : "INVALID")
                        } catch (e) {
                            this.client.logger.error(e)
                        }
                        return this.client.logger.info(`Verify context: ${JSON.stringify(r)}`), r
                    }, this.validateSessionProps = (e, t) => {
                        Object.values(e).forEach(e => {
                            if (!tQ(e, !1)) {
                                let {
                                    message: r
                                } = tW("MISSING_OR_INVALID", `${t} must be in Record<string, string> format. Received: ${JSON.stringify(e)}`);
                                throw Error(r)
                            }
                        })
                    }
                }
                isInitialized() {
                    if (!this.initialized) {
                        let {
                            message: e
                        } = tW("NOT_INITIALIZED", this.name);
                        throw Error(e)
                    }
                }
                registerRelayerEvents() {
                    this.client.core.relayer.on(iA.message, async e => {
                        let {
                            topic: t,
                            message: r
                        } = e;
                        if (this.ignoredPayloadTypes.includes(this.client.core.crypto.getPayloadType(r))) return;
                        let i = await this.client.core.crypto.decode(t, r);
                        (0, rS.isJsonRpcRequest)(i) ? (this.client.core.history.set(t, i), this.onRelayEventRequest({
                            topic: t,
                            payload: i
                        })) : (0, rS.isJsonRpcResponse)(i) ? (await this.client.core.history.resolve(i), await this.onRelayEventResponse({
                            topic: t,
                            payload: i
                        }), this.client.core.history.delete(t, i.id)) : this.onRelayEventUnknownPayload({
                            topic: t,
                            payload: i
                        })
                    })
                }
                registerExpirerEvents() {
                    this.client.core.expirer.on(iL.expired, async e => {
                        let {
                            topic: t,
                            id: r
                        } = tA(e.target);
                        if (r && this.client.pendingRequest.keys.includes(r)) return await this.deletePendingSessionRequest(r, tW("EXPIRED"), !0);
                        t ? this.client.session.keys.includes(t) && (await this.deleteSession(t, !0), this.client.events.emit("session_expire", {
                            topic: t
                        })) : r && (await this.deleteProposal(r, !0), this.client.events.emit("proposal_expire", {
                            id: r
                        }))
                    })
                }
                isValidPairingTopic(e) {
                    if (!tQ(e, !1)) {
                        let {
                            message: t
                        } = tW("MISSING_OR_INVALID", `pairing topic should be a string: ${e}`);
                        throw Error(t)
                    }
                    if (!this.client.core.pairing.pairings.keys.includes(e)) {
                        let {
                            message: t
                        } = tW("NO_MATCHING_KEY", `pairing topic doesn't exist: ${e}`);
                        throw Error(t)
                    }
                    if (tN(this.client.core.pairing.pairings.get(e).expiry)) {
                        let {
                            message: t
                        } = tW("EXPIRED", `pairing topic: ${e}`);
                        throw Error(t)
                    }
                }
                async isValidSessionTopic(e) {
                    if (!tQ(e, !1)) {
                        let {
                            message: t
                        } = tW("MISSING_OR_INVALID", `session topic should be a string: ${e}`);
                        throw Error(t)
                    }
                    if (!this.client.session.keys.includes(e)) {
                        let {
                            message: t
                        } = tW("NO_MATCHING_KEY", `session topic doesn't exist: ${e}`);
                        throw Error(t)
                    }
                    if (tN(this.client.session.get(e).expiry)) {
                        await this.deleteSession(e);
                        let {
                            message: t
                        } = tW("EXPIRED", `session topic: ${e}`);
                        throw Error(t)
                    }
                }
                async isValidSessionOrPairingTopic(e) {
                    if (this.client.session.keys.includes(e)) await this.isValidSessionTopic(e);
                    else if (this.client.core.pairing.pairings.keys.includes(e)) this.isValidPairingTopic(e);
                    else if (tQ(e, !1)) {
                        let {
                            message: t
                        } = tW("NO_MATCHING_KEY", `session or pairing topic doesn't exist: ${e}`);
                        throw Error(t)
                    } else {
                        let {
                            message: t
                        } = tW("MISSING_OR_INVALID", `session or pairing topic should be a string: ${e}`);
                        throw Error(t)
                    }
                }
                async isValidProposalId(e) {
                    if ("number" != typeof e) {
                        let {
                            message: t
                        } = tW("MISSING_OR_INVALID", `proposal id should be a number: ${e}`);
                        throw Error(t)
                    }
                    if (!this.client.proposal.keys.includes(e)) {
                        let {
                            message: t
                        } = tW("NO_MATCHING_KEY", `proposal id doesn't exist: ${e}`);
                        throw Error(t)
                    }
                    if (tN(this.client.proposal.get(e).expiry)) {
                        await this.deleteProposal(e);
                        let {
                            message: t
                        } = tW("EXPIRED", `proposal id: ${e}`);
                        throw Error(t)
                    }
                }
            }
            class nT extends ni {
                constructor(e, t) {
                    super(e, t, "proposal", ny), this.core = e, this.logger = t
                }
            }
            class nj extends ni {
                constructor(e, t) {
                    super(e, t, "session", ny), this.core = e, this.logger = t
                }
            }
            class nU extends ni {
                constructor(e, t) {
                    super(e, t, "request", ny, e => e.id), this.core = e, this.logger = t
                }
            }
            class nL extends rp {
                constructor(e) {
                    super(e), this.protocol = "wc", this.version = 2, this.name = nv.name, this.events = new v.EventEmitter, this.on = (e, t) => this.events.on(e, t), this.once = (e, t) => this.events.once(e, t), this.off = (e, t) => this.events.off(e, t), this.removeListener = (e, t) => this.events.removeListener(e, t), this.removeAllListeners = e => this.events.removeAllListeners(e), this.connect = async e => {
                        try {
                            return await this.engine.connect(e)
                        } catch (e) {
                            throw this.logger.error(e.message), e
                        }
                    }, this.pair = async e => {
                        try {
                            return await this.engine.pair(e)
                        } catch (e) {
                            throw this.logger.error(e.message), e
                        }
                    }, this.approve = async e => {
                        try {
                            return await this.engine.approve(e)
                        } catch (e) {
                            throw this.logger.error(e.message), e
                        }
                    }, this.reject = async e => {
                        try {
                            return await this.engine.reject(e)
                        } catch (e) {
                            throw this.logger.error(e.message), e
                        }
                    }, this.update = async e => {
                        try {
                            return await this.engine.update(e)
                        } catch (e) {
                            throw this.logger.error(e.message), e
                        }
                    }, this.extend = async e => {
                        try {
                            return await this.engine.extend(e)
                        } catch (e) {
                            throw this.logger.error(e.message), e
                        }
                    }, this.request = async e => {
                        try {
                            return await this.engine.request(e)
                        } catch (e) {
                            throw this.logger.error(e.message), e
                        }
                    }, this.respond = async e => {
                        try {
                            return await this.engine.respond(e)
                        } catch (e) {
                            throw this.logger.error(e.message), e
                        }
                    }, this.ping = async e => {
                        try {
                            return await this.engine.ping(e)
                        } catch (e) {
                            throw this.logger.error(e.message), e
                        }
                    }, this.emit = async e => {
                        try {
                            return await this.engine.emit(e)
                        } catch (e) {
                            throw this.logger.error(e.message), e
                        }
                    }, this.disconnect = async e => {
                        try {
                            return await this.engine.disconnect(e)
                        } catch (e) {
                            throw this.logger.error(e.message), e
                        }
                    }, this.find = e => {
                        try {
                            return this.engine.find(e)
                        } catch (e) {
                            throw this.logger.error(e.message), e
                        }
                    }, this.getPendingSessionRequests = () => {
                        try {
                            return this.engine.getPendingSessionRequests()
                        } catch (e) {
                            throw this.logger.error(e.message), e
                        }
                    }, this.name = e ? .name || nv.name, this.metadata = e ? .metadata || (0, e4.D)() || {
                        name: "",
                        description: "",
                        url: "",
                        icons: [""]
                    };
                    let t = "u" > typeof e ? .logger && "string" != typeof e ? .logger ? e.logger : (0, rr.pino)((0, rr.getDefaultLoggerOptions)({
                        level: e ? .logger || nv.logger
                    }));
                    this.core = e ? .core || new nd(e), this.logger = (0, rr.generateChildLogger)(t, this.name), this.session = new nj(this.core, this.logger), this.proposal = new nT(this.core, this.logger), this.pendingRequest = new nU(this.core, this.logger), this.engine = new nR(this)
                }
                static async init(e) {
                    let t = new nL(e);
                    return await t.initialize(), t
                }
                get context() {
                    return (0, rr.getLoggerContext)(this.logger)
                }
                get pairing() {
                    return this.core.pairing.pairings
                }
                async initialize() {
                    this.logger.trace("Initialized");
                    try {
                        await this.core.start(), await this.session.init(), await this.proposal.init(), await this.pendingRequest.init(), await this.engine.init(), this.core.verify.init({
                            verifyUrl: this.metadata.verifyUrl
                        }), this.logger.info("SignClient Initialization Success")
                    } catch (e) {
                        throw this.logger.info("SignClient Initialization Failure"), this.logger.error(e.message), e
                    }
                }
            }
            var nM = r(85383);
            let nk = "error",
                nz = "wc@2:universal_provider:",
                n$ = {
                    DEFAULT_CHAIN_CHANGED: "default_chain_changed"
                };
            var nq = "u" > typeof globalThis ? globalThis : "u" > typeof window ? window : "u" > typeof r.g ? r.g : "u" > typeof self ? self : {},
                nH = {
                    exports: {}
                };
            ! function(e, t) {
                (function() {
                    var r, i = "Expected a function",
                        n = "__lodash_hash_undefined__",
                        s = "__lodash_placeholder__",
                        o = 1 / 0,
                        a = 0 / 0,
                        c = [
                            ["ary", 128],
                            ["bind", 1],
                            ["bindKey", 2],
                            ["curry", 8],
                            ["curryRight", 16],
                            ["flip", 512],
                            ["partial", 32],
                            ["partialRight", 64],
                            ["rearg", 256]
                        ],
                        u = "[object Arguments]",
                        l = "[object Array]",
                        h = "[object Boolean]",
                        f = "[object Date]",
                        p = "[object Error]",
                        d = "[object Function]",
                        g = "[object GeneratorFunction]",
                        y = "[object Map]",
                        v = "[object Number]",
                        _ = "[object Object]",
                        m = "[object Promise]",
                        b = "[object RegExp]",
                        w = "[object Set]",
                        E = "[object String]",
                        D = "[object Symbol]",
                        S = "[object WeakMap]",
                        I = "[object ArrayBuffer]",
                        O = "[object DataView]",
                        P = "[object Float32Array]",
                        C = "[object Float64Array]",
                        A = "[object Int8Array]",
                        x = "[object Int16Array]",
                        N = "[object Int32Array]",
                        R = "[object Uint8Array]",
                        T = "[object Uint8ClampedArray]",
                        j = "[object Uint16Array]",
                        U = "[object Uint32Array]",
                        L = /\b__p \+= '';/g,
                        M = /\b(__p \+=) '' \+/g,
                        k = /(__e\(.*?\)|\b__t\)) \+\n'';/g,
                        z = /&(?:amp|lt|gt|quot|#39);/g,
                        $ = /[&<>"']/g,
                        q = RegExp(z.source),
                        H = RegExp($.source),
                        F = /<%-([\s\S]+?)%>/g,
                        V = /<%([\s\S]+?)%>/g,
                        K = /<%=([\s\S]+?)%>/g,
                        B = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
                        G = /^\w*$/,
                        W = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
                        J = /[\\^$.*+?()[\]{}|]/g,
                        Y = RegExp(J.source),
                        Z = /^\s+/,
                        X = /\s/,
                        Q = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,
                        ee = /\{\n\/\* \[wrapped with (.+)\] \*/,
                        et = /,? & /,
                        er = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,
                        ei = /[()=,{}\[\]\/\s]/,
                        en = /\\(\\)?/g,
                        es = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,
                        eo = /\w*$/,
                        ea = /^[-+]0x[0-9a-f]+$/i,
                        ec = /^0b[01]+$/i,
                        eu = /^\[object .+?Constructor\]$/,
                        el = /^0o[0-7]+$/i,
                        eh = /^(?:0|[1-9]\d*)$/,
                        ef = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,
                        ep = /($^)/,
                        ed = /['\n\r\u2028\u2029\\]/g,
                        eg = "\ud800-\udfff",
                        ey = "\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff",
                        ev = "\\u2700-\\u27bf",
                        e_ = "a-z\\xdf-\\xf6\\xf8-\\xff",
                        em = "A-Z\\xc0-\\xd6\\xd8-\\xde",
                        eb = "\\ufe0e\\ufe0f",
                        ew = "\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",
                        eE = "['’]",
                        eD = "[" + ew + "]",
                        eS = "[" + ey + "]",
                        eI = "[" + e_ + "]",
                        eO = "[^" + eg + ew + "\\d+" + ev + e_ + em + "]",
                        eP = "\ud83c[\udffb-\udfff]",
                        eC = "[^" + eg + "]",
                        eA = "(?:\ud83c[\udde6-\uddff]){2}",
                        ex = "[\ud800-\udbff][\udc00-\udfff]",
                        eN = "[" + em + "]",
                        eR = "\\u200d",
                        eT = "(?:" + eI + "|" + eO + ")",
                        ej = "(?:" + eE + "(?:d|ll|m|re|s|t|ve))?",
                        eU = "(?:" + eE + "(?:D|LL|M|RE|S|T|VE))?",
                        eL = "(?:" + eS + "|" + eP + ")?",
                        eM = "[" + eb + "]?",
                        ek = "(?:" + eR + "(?:" + [eC, eA, ex].join("|") + ")" + eM + eL + ")*",
                        ez = eM + eL + ek,
                        e$ = "(?:" + ["[" + ev + "]", eA, ex].join("|") + ")" + ez,
                        eq = "(?:" + [eC + eS + "?", eS, eA, ex, "[" + eg + "]"].join("|") + ")",
                        eH = RegExp(eE, "g"),
                        eF = RegExp(eS, "g"),
                        eV = RegExp(eP + "(?=" + eP + ")|" + eq + ez, "g"),
                        eK = RegExp([eN + "?" + eI + "+" + ej + "(?=" + [eD, eN, "$"].join("|") + ")", "(?:" + eN + "|" + eO + ")+" + eU + "(?=" + [eD, eN + eT, "$"].join("|") + ")", eN + "?" + eT + "+" + ej, eN + "+" + eU, "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", "\\d+", e$].join("|"), "g"),
                        eB = RegExp("[" + eR + eg + ey + eb + "]"),
                        eG = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,
                        eW = ["Array", "Buffer", "DataView", "Date", "Error", "Float32Array", "Float64Array", "Function", "Int8Array", "Int16Array", "Int32Array", "Map", "Math", "Object", "Promise", "RegExp", "Set", "String", "Symbol", "TypeError", "Uint8Array", "Uint8ClampedArray", "Uint16Array", "Uint32Array", "WeakMap", "_", "clearTimeout", "isFinite", "parseInt", "setTimeout"],
                        eJ = -1,
                        eY = {};
                    eY[P] = eY[C] = eY[A] = eY[x] = eY[N] = eY[R] = eY[T] = eY[j] = eY[U] = !0, eY[u] = eY[l] = eY[I] = eY[h] = eY[O] = eY[f] = eY[p] = eY[d] = eY[y] = eY[v] = eY[_] = eY[b] = eY[w] = eY[E] = eY[S] = !1;
                    var eZ = {};
                    eZ[u] = eZ[l] = eZ[I] = eZ[O] = eZ[h] = eZ[f] = eZ[P] = eZ[C] = eZ[A] = eZ[x] = eZ[N] = eZ[y] = eZ[v] = eZ[_] = eZ[b] = eZ[w] = eZ[E] = eZ[D] = eZ[R] = eZ[T] = eZ[j] = eZ[U] = !0, eZ[p] = eZ[d] = eZ[S] = !1;
                    var eX = {
                            "\\": "\\",
                            "'": "'",
                            "\n": "n",
                            "\r": "r",
                            "\u2028": "u2028",
                            "\u2029": "u2029"
                        },
                        eQ = parseFloat,
                        e0 = parseInt,
                        e1 = "object" == typeof nq && nq && nq.Object === Object && nq,
                        e5 = "object" == typeof self && self && self.Object === Object && self,
                        e3 = e1 || e5 || Function("return this")(),
                        e6 = t && !t.nodeType && t,
                        e2 = e6 && e && !e.nodeType && e,
                        e8 = e2 && e2.exports === e6,
                        e4 = e8 && e1.process,
                        e9 = function() {
                            try {
                                return e2 && e2.require && e2.require("util").types || e4 && e4.binding && e4.binding("util")
                            } catch {}
                        }(),
                        e7 = e9 && e9.isArrayBuffer,
                        te = e9 && e9.isDate,
                        tt = e9 && e9.isMap,
                        tr = e9 && e9.isRegExp,
                        ti = e9 && e9.isSet,
                        tn = e9 && e9.isTypedArray;

                    function ts(e, t, r) {
                        switch (r.length) {
                            case 0:
                                return e.call(t);
                            case 1:
                                return e.call(t, r[0]);
                            case 2:
                                return e.call(t, r[0], r[1]);
                            case 3:
                                return e.call(t, r[0], r[1], r[2])
                        }
                        return e.apply(t, r)
                    }

                    function to(e, t, r, i) {
                        for (var n = -1, s = null == e ? 0 : e.length; ++n < s;) {
                            var o = e[n];
                            t(i, o, r(o), e)
                        }
                        return i
                    }

                    function ta(e, t) {
                        for (var r = -1, i = null == e ? 0 : e.length; ++r < i && !1 !== t(e[r], r, e););
                        return e
                    }

                    function tc(e, t) {
                        for (var r = -1, i = null == e ? 0 : e.length; ++r < i;)
                            if (!t(e[r], r, e)) return !1;
                        return !0
                    }

                    function tu(e, t) {
                        for (var r = -1, i = null == e ? 0 : e.length, n = 0, s = []; ++r < i;) {
                            var o = e[r];
                            t(o, r, e) && (s[n++] = o)
                        }
                        return s
                    }

                    function tl(e, t) {
                        return !!(null == e ? 0 : e.length) && tb(e, t, 0) > -1
                    }

                    function th(e, t, r) {
                        for (var i = -1, n = null == e ? 0 : e.length; ++i < n;)
                            if (r(t, e[i])) return !0;
                        return !1
                    }

                    function tf(e, t) {
                        for (var r = -1, i = null == e ? 0 : e.length, n = Array(i); ++r < i;) n[r] = t(e[r], r, e);
                        return n
                    }

                    function tp(e, t) {
                        for (var r = -1, i = t.length, n = e.length; ++r < i;) e[n + r] = t[r];
                        return e
                    }

                    function td(e, t, r, i) {
                        var n = -1,
                            s = null == e ? 0 : e.length;
                        for (i && s && (r = e[++n]); ++n < s;) r = t(r, e[n], n, e);
                        return r
                    }

                    function tg(e, t, r, i) {
                        var n = null == e ? 0 : e.length;
                        for (i && n && (r = e[--n]); n--;) r = t(r, e[n], n, e);
                        return r
                    }

                    function ty(e, t) {
                        for (var r = -1, i = null == e ? 0 : e.length; ++r < i;)
                            if (t(e[r], r, e)) return !0;
                        return !1
                    }
                    var tv = tS("length");

                    function t_(e, t, r) {
                        var i;
                        return r(e, function(e, r, n) {
                            if (t(e, r, n)) return i = r, !1
                        }), i
                    }

                    function tm(e, t, r, i) {
                        for (var n = e.length, s = r + (i ? 1 : -1); i ? s-- : ++s < n;)
                            if (t(e[s], s, e)) return s;
                        return -1
                    }

                    function tb(e, t, r) {
                        return t == t ? function(e, t, r) {
                            for (var i = r - 1, n = e.length; ++i < n;)
                                if (e[i] === t) return i;
                            return -1
                        }(e, t, r) : tm(e, tE, r)
                    }

                    function tw(e, t, r, i) {
                        for (var n = r - 1, s = e.length; ++n < s;)
                            if (i(e[n], t)) return n;
                        return -1
                    }

                    function tE(e) {
                        return e != e
                    }

                    function tD(e, t) {
                        var r = null == e ? 0 : e.length;
                        return r ? tP(e, t) / r : a
                    }

                    function tS(e) {
                        return function(t) {
                            return null == t ? r : t[e]
                        }
                    }

                    function tI(e) {
                        return function(t) {
                            return null == e ? r : e[t]
                        }
                    }

                    function tO(e, t, r, i, n) {
                        return n(e, function(e, n, s) {
                            r = i ? (i = !1, e) : t(r, e, n, s)
                        }), r
                    }

                    function tP(e, t) {
                        for (var i, n = -1, s = e.length; ++n < s;) {
                            var o = t(e[n]);
                            o !== r && (i = i === r ? o : i + o)
                        }
                        return i
                    }

                    function tC(e, t) {
                        for (var r = -1, i = Array(e); ++r < e;) i[r] = t(r);
                        return i
                    }

                    function tA(e) {
                        return e && e.slice(0, tK(e) + 1).replace(Z, "")
                    }

                    function tx(e) {
                        return function(t) {
                            return e(t)
                        }
                    }

                    function tN(e, t) {
                        return tf(t, function(t) {
                            return e[t]
                        })
                    }

                    function tR(e, t) {
                        return e.has(t)
                    }

                    function tT(e, t) {
                        for (var r = -1, i = e.length; ++r < i && tb(t, e[r], 0) > -1;);
                        return r
                    }

                    function tj(e, t) {
                        for (var r = e.length; r-- && tb(t, e[r], 0) > -1;);
                        return r
                    }
                    var tU = tI({
                            À: "A",
                            Á: "A",
                            Â: "A",
                            Ã: "A",
                            Ä: "A",
                            Å: "A",
                            à: "a",
                            á: "a",
                            â: "a",
                            ã: "a",
                            ä: "a",
                            å: "a",
                            Ç: "C",
                            ç: "c",
                            Ð: "D",
                            ð: "d",
                            È: "E",
                            É: "E",
                            Ê: "E",
                            Ë: "E",
                            è: "e",
                            é: "e",
                            ê: "e",
                            ë: "e",
                            Ì: "I",
                            Í: "I",
                            Î: "I",
                            Ï: "I",
                            ì: "i",
                            í: "i",
                            î: "i",
                            ï: "i",
                            Ñ: "N",
                            ñ: "n",
                            Ò: "O",
                            Ó: "O",
                            Ô: "O",
                            Õ: "O",
                            Ö: "O",
                            Ø: "O",
                            ò: "o",
                            ó: "o",
                            ô: "o",
                            õ: "o",
                            ö: "o",
                            ø: "o",
                            Ù: "U",
                            Ú: "U",
                            Û: "U",
                            Ü: "U",
                            ù: "u",
                            ú: "u",
                            û: "u",
                            ü: "u",
                            Ý: "Y",
                            ý: "y",
                            ÿ: "y",
                            Æ: "Ae",
                            æ: "ae",
                            Þ: "Th",
                            þ: "th",
                            ß: "ss",
                            Ā: "A",
                            Ă: "A",
                            Ą: "A",
                            ā: "a",
                            ă: "a",
                            ą: "a",
                            Ć: "C",
                            Ĉ: "C",
                            Ċ: "C",
                            Č: "C",
                            ć: "c",
                            ĉ: "c",
                            ċ: "c",
                            č: "c",
                            Ď: "D",
                            Đ: "D",
                            ď: "d",
                            đ: "d",
                            Ē: "E",
                            Ĕ: "E",
                            Ė: "E",
                            Ę: "E",
                            Ě: "E",
                            ē: "e",
                            ĕ: "e",
                            ė: "e",
                            ę: "e",
                            ě: "e",
                            Ĝ: "G",
                            Ğ: "G",
                            Ġ: "G",
                            Ģ: "G",
                            ĝ: "g",
                            ğ: "g",
                            ġ: "g",
                            ģ: "g",
                            Ĥ: "H",
                            Ħ: "H",
                            ĥ: "h",
                            ħ: "h",
                            Ĩ: "I",
                            Ī: "I",
                            Ĭ: "I",
                            Į: "I",
                            İ: "I",
                            ĩ: "i",
                            ī: "i",
                            ĭ: "i",
                            į: "i",
                            ı: "i",
                            Ĵ: "J",
                            ĵ: "j",
                            Ķ: "K",
                            ķ: "k",
                            ĸ: "k",
                            Ĺ: "L",
                            Ļ: "L",
                            Ľ: "L",
                            Ŀ: "L",
                            Ł: "L",
                            ĺ: "l",
                            ļ: "l",
                            ľ: "l",
                            ŀ: "l",
                            ł: "l",
                            Ń: "N",
                            Ņ: "N",
                            Ň: "N",
                            Ŋ: "N",
                            ń: "n",
                            ņ: "n",
                            ň: "n",
                            ŋ: "n",
                            Ō: "O",
                            Ŏ: "O",
                            Ő: "O",
                            ō: "o",
                            ŏ: "o",
                            ő: "o",
                            Ŕ: "R",
                            Ŗ: "R",
                            Ř: "R",
                            ŕ: "r",
                            ŗ: "r",
                            ř: "r",
                            Ś: "S",
                            Ŝ: "S",
                            Ş: "S",
                            Š: "S",
                            ś: "s",
                            ŝ: "s",
                            ş: "s",
                            š: "s",
                            Ţ: "T",
                            Ť: "T",
                            Ŧ: "T",
                            ţ: "t",
                            ť: "t",
                            ŧ: "t",
                            Ũ: "U",
                            Ū: "U",
                            Ŭ: "U",
                            Ů: "U",
                            Ű: "U",
                            Ų: "U",
                            ũ: "u",
                            ū: "u",
                            ŭ: "u",
                            ů: "u",
                            ű: "u",
                            ų: "u",
                            Ŵ: "W",
                            ŵ: "w",
                            Ŷ: "Y",
                            ŷ: "y",
                            Ÿ: "Y",
                            Ź: "Z",
                            Ż: "Z",
                            Ž: "Z",
                            ź: "z",
                            ż: "z",
                            ž: "z",
                            Ĳ: "IJ",
                            ĳ: "ij",
                            Œ: "Oe",
                            œ: "oe",
                            ŉ: "'n",
                            ſ: "s"
                        }),
                        tL = tI({
                            "&": "&amp;",
                            "<": "&lt;",
                            ">": "&gt;",
                            '"': "&quot;",
                            "'": "&#39;"
                        });

                    function tM(e) {
                        return "\\" + eX[e]
                    }

                    function tk(e) {
                        return eB.test(e)
                    }

                    function tz(e) {
                        var t = -1,
                            r = Array(e.size);
                        return e.forEach(function(e, i) {
                            r[++t] = [i, e]
                        }), r
                    }

                    function t$(e, t) {
                        return function(r) {
                            return e(t(r))
                        }
                    }

                    function tq(e, t) {
                        for (var r = -1, i = e.length, n = 0, o = []; ++r < i;) {
                            var a = e[r];
                            (a === t || a === s) && (e[r] = s, o[n++] = r)
                        }
                        return o
                    }

                    function tH(e) {
                        var t = -1,
                            r = Array(e.size);
                        return e.forEach(function(e) {
                            r[++t] = e
                        }), r
                    }

                    function tF(e) {
                        return tk(e) ? function(e) {
                            for (var t = eV.lastIndex = 0; eV.test(e);) ++t;
                            return t
                        }(e) : tv(e)
                    }

                    function tV(e) {
                        return tk(e) ? e.match(eV) || [] : e.split("")
                    }

                    function tK(e) {
                        for (var t = e.length; t-- && X.test(e.charAt(t)););
                        return t
                    }
                    var tB = tI({
                            "&amp;": "&",
                            "&lt;": "<",
                            "&gt;": ">",
                            "&quot;": '"',
                            "&#39;": "'"
                        }),
                        tG = function e(t) {
                            var X, eg, ey, ev, e_ = (t = null == t ? e3 : tG.defaults(e3.Object(), t, tG.pick(e3, eW))).Array,
                                em = t.Date,
                                eb = t.Error,
                                ew = t.Function,
                                eE = t.Math,
                                eD = t.Object,
                                eS = t.RegExp,
                                eI = t.String,
                                eO = t.TypeError,
                                eP = e_.prototype,
                                eC = ew.prototype,
                                eA = eD.prototype,
                                ex = t["__core-js_shared__"],
                                eN = eC.toString,
                                eR = eA.hasOwnProperty,
                                eT = 0,
                                ej = (X = /[^.]+$/.exec(ex && ex.keys && ex.keys.IE_PROTO || "")) ? "Symbol(src)_1." + X : "",
                                eU = eA.toString,
                                eL = eN.call(eD),
                                eM = e3._,
                                ek = eS("^" + eN.call(eR).replace(J, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"),
                                ez = e8 ? t.Buffer : r,
                                e$ = t.Symbol,
                                eq = t.Uint8Array,
                                eV = ez ? ez.allocUnsafe : r,
                                eB = t$(eD.getPrototypeOf, eD),
                                eX = eD.create,
                                e1 = eA.propertyIsEnumerable,
                                e5 = eP.splice,
                                e6 = e$ ? e$.isConcatSpreadable : r,
                                e2 = e$ ? e$.iterator : r,
                                e4 = e$ ? e$.toStringTag : r,
                                e9 = function() {
                                    try {
                                        var e = nd(eD, "defineProperty");
                                        return e({}, "", {}), e
                                    } catch {}
                                }(),
                                tv = t.clearTimeout !== e3.clearTimeout && t.clearTimeout,
                                tI = em && em.now !== e3.Date.now && em.now,
                                tW = t.setTimeout !== e3.setTimeout && t.setTimeout,
                                tJ = eE.ceil,
                                tY = eE.floor,
                                tZ = eD.getOwnPropertySymbols,
                                tX = ez ? ez.isBuffer : r,
                                tQ = t.isFinite,
                                t0 = eP.join,
                                t1 = t$(eD.keys, eD),
                                t5 = eE.max,
                                t3 = eE.min,
                                t6 = em.now,
                                t2 = t.parseInt,
                                t8 = eE.random,
                                t4 = eP.reverse,
                                t9 = nd(t, "DataView"),
                                t7 = nd(t, "Map"),
                                re = nd(t, "Promise"),
                                rt = nd(t, "Set"),
                                rr = nd(t, "WeakMap"),
                                ri = nd(eD, "create"),
                                rn = rr && new rr,
                                rs = {},
                                ro = nz(t9),
                                ra = nz(t7),
                                rc = nz(re),
                                ru = nz(rt),
                                rl = nz(rr),
                                rh = e$ ? e$.prototype : r,
                                rf = rh ? rh.valueOf : r,
                                rp = rh ? rh.toString : r;

                            function rd(e) {
                                if (sB(e) && !sU(e) && !(e instanceof r_)) {
                                    if (e instanceof rv) return e;
                                    if (eR.call(e, "__wrapped__")) return n$(e)
                                }
                                return new rv(e)
                            }
                            var rg = function() {
                                function e() {}
                                return function(t) {
                                    if (!sK(t)) return {};
                                    if (eX) return eX(t);
                                    e.prototype = t;
                                    var i = new e;
                                    return e.prototype = r, i
                                }
                            }();

                            function ry() {}

                            function rv(e, t) {
                                this.__wrapped__ = e, this.__actions__ = [], this.__chain__ = !!t, this.__index__ = 0, this.__values__ = r
                            }

                            function r_(e) {
                                this.__wrapped__ = e, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = !1, this.__iteratees__ = [], this.__takeCount__ = 4294967295, this.__views__ = []
                            }

                            function rm(e) {
                                var t = -1,
                                    r = null == e ? 0 : e.length;
                                for (this.clear(); ++t < r;) {
                                    var i = e[t];
                                    this.set(i[0], i[1])
                                }
                            }

                            function rb(e) {
                                var t = -1,
                                    r = null == e ? 0 : e.length;
                                for (this.clear(); ++t < r;) {
                                    var i = e[t];
                                    this.set(i[0], i[1])
                                }
                            }

                            function rw(e) {
                                var t = -1,
                                    r = null == e ? 0 : e.length;
                                for (this.clear(); ++t < r;) {
                                    var i = e[t];
                                    this.set(i[0], i[1])
                                }
                            }

                            function rE(e) {
                                var t = -1,
                                    r = null == e ? 0 : e.length;
                                for (this.__data__ = new rw; ++t < r;) this.add(e[t])
                            }

                            function rD(e) {
                                var t = this.__data__ = new rb(e);
                                this.size = t.size
                            }

                            function rS(e, t) {
                                var r = sU(e),
                                    i = !r && sj(e),
                                    n = !r && !i && sz(e),
                                    s = !r && !i && !n && s0(e),
                                    o = r || i || n || s,
                                    a = o ? tC(e.length, eI) : [],
                                    c = a.length;
                                for (var u in e)(t || eR.call(e, u)) && !(o && ("length" == u || n && ("offset" == u || "parent" == u) || s && ("buffer" == u || "byteLength" == u || "byteOffset" == u) || nw(u, c))) && a.push(u);
                                return a
                            }

                            function rI(e) {
                                var t = e.length;
                                return t ? e[il(0, t - 1)] : r
                            }

                            function rO(e, t, i) {
                                (i === r || sN(e[t], i)) && (i !== r || t in e) || rN(e, t, i)
                            }

                            function rP(e, t, i) {
                                var n = e[t];
                                eR.call(e, t) && sN(n, i) && (i !== r || t in e) || rN(e, t, i)
                            }

                            function rC(e, t) {
                                for (var r = e.length; r--;)
                                    if (sN(e[r][0], t)) return r;
                                return -1
                            }

                            function rA(e, t, r, i) {
                                return rk(e, function(e, n, s) {
                                    t(i, e, r(e), s)
                                }), i
                            }

                            function rx(e, t) {
                                return e && iF(t, of (t), e)
                            }

                            function rN(e, t, r) {
                                "__proto__" == t && e9 ? e9(e, t, {
                                    configurable: !0,
                                    enumerable: !0,
                                    value: r,
                                    writable: !0
                                }) : e[t] = r
                            }

                            function rR(e, t) {
                                for (var i = -1, n = t.length, s = e_(n), o = null == e; ++i < n;) s[i] = o ? r : oa(e, t[i]);
                                return s
                            }

                            function rT(e, t, i) {
                                return e == e && (i !== r && (e = e <= i ? e : i), t !== r && (e = e >= t ? e : t)), e
                            }

                            function rj(e, t, i, n, s, o) {
                                var a, c = 1 & t,
                                    l = 2 & t,
                                    p = 4 & t;
                                if (i && (a = s ? i(e, n, s, o) : i(e)), a !== r) return a;
                                if (!sK(e)) return e;
                                var m = sU(e);
                                if (m) {
                                    if (S = e.length, L = new e.constructor(S), S && "string" == typeof e[0] && eR.call(e, "index") && (L.index = e.index, L.input = e.input), a = L, !c) return iH(e, a)
                                } else {
                                    var S, L, M, k, z, $ = nv(e),
                                        q = $ == d || $ == g;
                                    if (sz(e)) return iL(e, c);
                                    if ($ == _ || $ == u || q && !s) {
                                        if (a = l || q ? {} : nm(e), !c) return l ? (M = (z = a) && iF(e, op(e), z), iF(e, ny(e), M)) : (k = rx(a, e), iF(e, ng(e), k))
                                    } else {
                                        if (!eZ[$]) return s ? e : {};
                                        a = function(e, t, r) {
                                            var i, n, s = e.constructor;
                                            switch (t) {
                                                case I:
                                                    return iM(e);
                                                case h:
                                                case f:
                                                    return new s(+e);
                                                case O:
                                                    return i = r ? iM(e.buffer) : e.buffer, new e.constructor(i, e.byteOffset, e.byteLength);
                                                case P:
                                                case C:
                                                case A:
                                                case x:
                                                case N:
                                                case R:
                                                case T:
                                                case j:
                                                case U:
                                                    return ik(e, r);
                                                case y:
                                                    return new s;
                                                case v:
                                                case E:
                                                    return new s(e);
                                                case b:
                                                    return (n = new e.constructor(e.source, eo.exec(e))).lastIndex = e.lastIndex, n;
                                                case w:
                                                    return new s;
                                                case D:
                                                    return rf ? eD(rf.call(e)) : {}
                                            }
                                        }(e, $, c)
                                    }
                                }
                                o || (o = new rD);
                                var H = o.get(e);
                                if (H) return H;
                                o.set(e, a), sZ(e) ? e.forEach(function(r) {
                                    a.add(rj(r, t, i, r, e, o))
                                }) : sG(e) && e.forEach(function(r, n) {
                                    a.set(n, rj(r, t, i, n, e, o))
                                });
                                var F = p ? l ? na : no : l ? op : of ,
                                    V = m ? r : F(e);
                                return ta(V || e, function(r, n) {
                                    V && (r = e[n = r]), rP(a, n, rj(r, t, i, n, e, o))
                                }), a
                            }

                            function rU(e, t, i) {
                                var n = i.length;
                                if (null == e) return !n;
                                for (e = eD(e); n--;) {
                                    var s = i[n],
                                        o = t[s],
                                        a = e[s];
                                    if (a === r && !(s in e) || !o(a)) return !1
                                }
                                return !0
                            }

                            function rL(e, t, n) {
                                if ("function" != typeof e) throw new eO(i);
                                return nR(function() {
                                    e.apply(r, n)
                                }, t)
                            }

                            function rM(e, t, r, i) {
                                var n = -1,
                                    s = tl,
                                    o = !0,
                                    a = e.length,
                                    c = [],
                                    u = t.length;
                                if (!a) return c;
                                r && (t = tf(t, tx(r))), i ? (s = th, o = !1) : t.length >= 200 && (s = tR, o = !1, t = new rE(t));
                                e: for (; ++n < a;) {
                                    var l = e[n],
                                        h = null == r ? l : r(l);
                                    if (l = i || 0 !== l ? l : 0, o && h == h) {
                                        for (var f = u; f--;)
                                            if (t[f] === h) continue e;
                                        c.push(l)
                                    } else s(t, h, i) || c.push(l)
                                }
                                return c
                            }
                            rd.templateSettings = {
                                escape: F,
                                evaluate: V,
                                interpolate: K,
                                variable: "",
                                imports: {
                                    _: rd
                                }
                            }, rd.prototype = ry.prototype, rd.prototype.constructor = rd, rv.prototype = rg(ry.prototype), rv.prototype.constructor = rv, r_.prototype = rg(ry.prototype), r_.prototype.constructor = r_, rm.prototype.clear = function() {
                                this.__data__ = ri ? ri(null) : {}, this.size = 0
                            }, rm.prototype.delete = function(e) {
                                var t = this.has(e) && delete this.__data__[e];
                                return this.size -= t ? 1 : 0, t
                            }, rm.prototype.get = function(e) {
                                var t = this.__data__;
                                if (ri) {
                                    var i = t[e];
                                    return i === n ? r : i
                                }
                                return eR.call(t, e) ? t[e] : r
                            }, rm.prototype.has = function(e) {
                                var t = this.__data__;
                                return ri ? t[e] !== r : eR.call(t, e)
                            }, rm.prototype.set = function(e, t) {
                                var i = this.__data__;
                                return this.size += this.has(e) ? 0 : 1, i[e] = ri && t === r ? n : t, this
                            }, rb.prototype.clear = function() {
                                this.__data__ = [], this.size = 0
                            }, rb.prototype.delete = function(e) {
                                var t = this.__data__,
                                    r = rC(t, e);
                                return !(r < 0) && (r == t.length - 1 ? t.pop() : e5.call(t, r, 1), --this.size, !0)
                            }, rb.prototype.get = function(e) {
                                var t = this.__data__,
                                    i = rC(t, e);
                                return i < 0 ? r : t[i][1]
                            }, rb.prototype.has = function(e) {
                                return rC(this.__data__, e) > -1
                            }, rb.prototype.set = function(e, t) {
                                var r = this.__data__,
                                    i = rC(r, e);
                                return i < 0 ? (++this.size, r.push([e, t])) : r[i][1] = t, this
                            }, rw.prototype.clear = function() {
                                this.size = 0, this.__data__ = {
                                    hash: new rm,
                                    map: new(t7 || rb),
                                    string: new rm
                                }
                            }, rw.prototype.delete = function(e) {
                                var t = nf(this, e).delete(e);
                                return this.size -= t ? 1 : 0, t
                            }, rw.prototype.get = function(e) {
                                return nf(this, e).get(e)
                            }, rw.prototype.has = function(e) {
                                return nf(this, e).has(e)
                            }, rw.prototype.set = function(e, t) {
                                var r = nf(this, e),
                                    i = r.size;
                                return r.set(e, t), this.size += r.size == i ? 0 : 1, this
                            }, rE.prototype.add = rE.prototype.push = function(e) {
                                return this.__data__.set(e, n), this
                            }, rE.prototype.has = function(e) {
                                return this.__data__.has(e)
                            }, rD.prototype.clear = function() {
                                this.__data__ = new rb, this.size = 0
                            }, rD.prototype.delete = function(e) {
                                var t = this.__data__,
                                    r = t.delete(e);
                                return this.size = t.size, r
                            }, rD.prototype.get = function(e) {
                                return this.__data__.get(e)
                            }, rD.prototype.has = function(e) {
                                return this.__data__.has(e)
                            }, rD.prototype.set = function(e, t) {
                                var r = this.__data__;
                                if (r instanceof rb) {
                                    var i = r.__data__;
                                    if (!t7 || i.length < 199) return i.push([e, t]), this.size = ++r.size, this;
                                    r = this.__data__ = new rw(i)
                                }
                                return r.set(e, t), this.size = r.size, this
                            };
                            var rk = iB(rB),
                                rz = iB(rG, !0);

                            function r$(e, t) {
                                var r = !0;
                                return rk(e, function(e, i, n) {
                                    return r = !!t(e, i, n)
                                }), r
                            }

                            function rq(e, t, i) {
                                for (var n = -1, s = e.length; ++n < s;) {
                                    var o = e[n],
                                        a = t(o);
                                    if (null != a && (c === r ? a == a && !sQ(a) : i(a, c))) var c = a,
                                        u = o
                                }
                                return u
                            }

                            function rH(e, t) {
                                var r = [];
                                return rk(e, function(e, i, n) {
                                    t(e, i, n) && r.push(e)
                                }), r
                            }

                            function rF(e, t, r, i, n) {
                                var s = -1,
                                    o = e.length;
                                for (r || (r = nb), n || (n = []); ++s < o;) {
                                    var a = e[s];
                                    t > 0 && r(a) ? t > 1 ? rF(a, t - 1, r, i, n) : tp(n, a) : i || (n[n.length] = a)
                                }
                                return n
                            }
                            var rV = iG(),
                                rK = iG(!0);

                            function rB(e, t) {
                                return e && rV(e, t, of )
                            }

                            function rG(e, t) {
                                return e && rK(e, t, of )
                            }

                            function rW(e, t) {
                                return tu(t, function(t) {
                                    return sH(e[t])
                                })
                            }

                            function rJ(e, t) {
                                t = iT(t, e);
                                for (var i = 0, n = t.length; null != e && i < n;) e = e[nk(t[i++])];
                                return i && i == n ? e : r
                            }

                            function rY(e, t, r) {
                                var i = t(e);
                                return sU(e) ? i : tp(i, r(e))
                            }

                            function rZ(e) {
                                return null == e ? e === r ? "[object Undefined]" : "[object Null]" : e4 && e4 in eD(e) ? function(e) {
                                    var t = eR.call(e, e4),
                                        i = e[e4];
                                    try {
                                        e[e4] = r;
                                        var n = !0
                                    } catch {}
                                    var s = eU.call(e);
                                    return n && (t ? e[e4] = i : delete e[e4]), s
                                }(e) : eU.call(e)
                            }

                            function rX(e, t) {
                                return e > t
                            }

                            function rQ(e, t) {
                                return null != e && eR.call(e, t)
                            }

                            function r0(e, t) {
                                return null != e && t in eD(e)
                            }

                            function r1(e, t, i) {
                                for (var n = i ? th : tl, s = e[0].length, o = e.length, a = o, c = e_(o), u = 1 / 0, l = []; a--;) {
                                    var h = e[a];
                                    a && t && (h = tf(h, tx(t))), u = t3(h.length, u), c[a] = !i && (t || s >= 120 && h.length >= 120) ? new rE(a && h) : r
                                }
                                h = e[0];
                                var f = -1,
                                    p = c[0];
                                e: for (; ++f < s && l.length < u;) {
                                    var d = h[f],
                                        g = t ? t(d) : d;
                                    if (d = i || 0 !== d ? d : 0, !(p ? tR(p, g) : n(l, g, i))) {
                                        for (a = o; --a;) {
                                            var y = c[a];
                                            if (!(y ? tR(y, g) : n(e[a], g, i))) continue e
                                        }
                                        p && p.push(g), l.push(d)
                                    }
                                }
                                return l
                            }

                            function r5(e, t, i) {
                                t = iT(t, e);
                                var n = null == (e = nA(e, t)) ? e : e[nk(nZ(t))];
                                return null == n ? r : ts(n, e, i)
                            }

                            function r3(e) {
                                return sB(e) && rZ(e) == u
                            }

                            function r6(e, t, i, n, s) {
                                return e === t || (null != e && null != t && (sB(e) || sB(t)) ? function(e, t, i, n, s, o) {
                                    var a = sU(e),
                                        c = sU(t),
                                        d = a ? l : nv(e),
                                        g = c ? l : nv(t);
                                    d = d == u ? _ : d, g = g == u ? _ : g;
                                    var m = d == _,
                                        S = g == _,
                                        P = d == g;
                                    if (P && sz(e)) {
                                        if (!sz(t)) return !1;
                                        a = !0, m = !1
                                    }
                                    if (P && !m) return o || (o = new rD), a || s0(e) ? nn(e, t, i, n, s, o) : function(e, t, r, i, n, s, o) {
                                        switch (r) {
                                            case O:
                                                if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset) break;
                                                e = e.buffer, t = t.buffer;
                                            case I:
                                                return !(e.byteLength != t.byteLength || !s(new eq(e), new eq(t)));
                                            case h:
                                            case f:
                                            case v:
                                                return sN(+e, +t);
                                            case p:
                                                return e.name == t.name && e.message == t.message;
                                            case b:
                                            case E:
                                                return e == t + "";
                                            case y:
                                                var a = tz;
                                            case w:
                                                var c = 1 & i;
                                                if (a || (a = tH), e.size != t.size && !c) break;
                                                var u = o.get(e);
                                                if (u) return u == t;
                                                i |= 2, o.set(e, t);
                                                var l = nn(a(e), a(t), i, n, s, o);
                                                return o.delete(e), l;
                                            case D:
                                                if (rf) return rf.call(e) == rf.call(t)
                                        }
                                        return !1
                                    }(e, t, d, i, n, s, o);
                                    if (!(1 & i)) {
                                        var C = m && eR.call(e, "__wrapped__"),
                                            A = S && eR.call(t, "__wrapped__");
                                        if (C || A) {
                                            var x = C ? e.value() : e,
                                                N = A ? t.value() : t;
                                            return o || (o = new rD), s(x, N, i, n, o)
                                        }
                                    }
                                    return !!P && (o || (o = new rD), function(e, t, i, n, s, o) {
                                        var a = 1 & i,
                                            c = no(e),
                                            u = c.length;
                                        if (u != no(t).length && !a) return !1;
                                        for (var l = u; l--;) {
                                            var h = c[l];
                                            if (!(a ? h in t : eR.call(t, h))) return !1
                                        }
                                        var f = o.get(e),
                                            p = o.get(t);
                                        if (f && p) return f == t && p == e;
                                        var d = !0;
                                        o.set(e, t), o.set(t, e);
                                        for (var g = a; ++l < u;) {
                                            var y = e[h = c[l]],
                                                v = t[h];
                                            if (n) var _ = a ? n(v, y, h, t, e, o) : n(y, v, h, e, t, o);
                                            if (!(_ === r ? y === v || s(y, v, i, n, o) : _)) {
                                                d = !1;
                                                break
                                            }
                                            g || (g = "constructor" == h)
                                        }
                                        if (d && !g) {
                                            var m = e.constructor,
                                                b = t.constructor;
                                            m != b && "constructor" in e && "constructor" in t && !("function" == typeof m && m instanceof m && "function" == typeof b && b instanceof b) && (d = !1)
                                        }
                                        return o.delete(e), o.delete(t), d
                                    }(e, t, i, n, s, o))
                                }(e, t, i, n, r6, s) : e != e && t != t)
                            }

                            function r2(e, t, i, n) {
                                var s = i.length,
                                    o = s,
                                    a = !n;
                                if (null == e) return !o;
                                for (e = eD(e); s--;) {
                                    var c = i[s];
                                    if (a && c[2] ? c[1] !== e[c[0]] : !(c[0] in e)) return !1
                                }
                                for (; ++s < o;) {
                                    var u = (c = i[s])[0],
                                        l = e[u],
                                        h = c[1];
                                    if (a && c[2]) {
                                        if (l === r && !(u in e)) return !1
                                    } else {
                                        var f = new rD;
                                        if (n) var p = n(l, h, u, e, t, f);
                                        if (!(p === r ? r6(h, l, 3, n, f) : p)) return !1
                                    }
                                }
                                return !0
                            }

                            function r8(e) {
                                return !(!sK(e) || ej && ej in e) && (sH(e) ? ek : eu).test(nz(e))
                            }

                            function r4(e) {
                                return "function" == typeof e ? e : null == e ? ok : "object" == typeof e ? sU(e) ? ir(e[0], e[1]) : it(e) : oG(e)
                            }

                            function r9(e) {
                                if (!nO(e)) return t1(e);
                                var t = [];
                                for (var r in eD(e)) eR.call(e, r) && "constructor" != r && t.push(r);
                                return t
                            }

                            function r7(e, t) {
                                return e < t
                            }

                            function ie(e, t) {
                                var r = -1,
                                    i = sM(e) ? e_(e.length) : [];
                                return rk(e, function(e, n, s) {
                                    i[++r] = t(e, n, s)
                                }), i
                            }

                            function it(e) {
                                var t = np(e);
                                return 1 == t.length && t[0][2] ? nP(t[0][0], t[0][1]) : function(r) {
                                    return r === e || r2(r, e, t)
                                }
                            }

                            function ir(e, t) {
                                var i;
                                return nD(e) && (i = t) == i && !sK(i) ? nP(nk(e), t) : function(i) {
                                    var n = oa(i, e);
                                    return n === r && n === t ? oc(i, e) : r6(t, n, 3)
                                }
                            }

                            function ii(e, t, i, n, s) {
                                e !== t && rV(t, function(o, a) {
                                    if (s || (s = new rD), sK(o)) ! function(e, t, i, n, s, o, a) {
                                        var c = nx(e, i),
                                            u = nx(t, i),
                                            l = a.get(u);
                                        if (l) {
                                            rO(e, i, l);
                                            return
                                        }
                                        var h = o ? o(c, u, i + "", e, t, a) : r,
                                            f = h === r;
                                        if (f) {
                                            var p = sU(u),
                                                d = !p && sz(u),
                                                g = !p && !d && s0(u);
                                            h = u, p || d || g ? sU(c) ? h = c : sk(c) ? h = iH(c) : d ? (f = !1, h = iL(u, !0)) : g ? (f = !1, h = ik(u, !0)) : h = [] : sJ(u) || sj(u) ? (h = c, sj(c) ? h = s9(c) : (!sK(c) || sH(c)) && (h = nm(u))) : f = !1
                                        }
                                        f && (a.set(u, h), s(h, u, n, o, a), a.delete(u)), rO(e, i, h)
                                    }(e, t, a, i, ii, n, s);
                                    else {
                                        var c = n ? n(nx(e, a), o, a + "", e, t, s) : r;
                                        c === r && (c = o), rO(e, a, c)
                                    }
                                }, op)
                            }

                            function is(e, t) {
                                var i = e.length;
                                if (i) return nw(t += t < 0 ? i : 0, i) ? e[t] : r
                            }

                            function io(e, t, r) {
                                t = t.length ? tf(t, function(e) {
                                    return sU(e) ? function(t) {
                                        return rJ(t, 1 === e.length ? e[0] : e)
                                    } : e
                                }) : [ok];
                                var i = -1;
                                return t = tf(t, tx(nh())),
                                    function(e, t) {
                                        var r = e.length;
                                        for (e.sort(t); r--;) e[r] = e[r].value;
                                        return e
                                    }(ie(e, function(e, r, n) {
                                        return {
                                            criteria: tf(t, function(t) {
                                                return t(e)
                                            }),
                                            index: ++i,
                                            value: e
                                        }
                                    }), function(e, t) {
                                        return function(e, t, r) {
                                            for (var i = -1, n = e.criteria, s = t.criteria, o = n.length, a = r.length; ++i < o;) {
                                                var c = iz(n[i], s[i]);
                                                if (c) {
                                                    if (i >= a) return c;
                                                    return c * ("desc" == r[i] ? -1 : 1)
                                                }
                                            }
                                            return e.index - t.index
                                        }(e, t, r)
                                    })
                            }

                            function ia(e, t, r) {
                                for (var i = -1, n = t.length, s = {}; ++i < n;) {
                                    var o = t[i],
                                        a = rJ(e, o);
                                    r(a, o) && id(s, iT(o, e), a)
                                }
                                return s
                            }

                            function ic(e, t, r, i) {
                                var n = i ? tw : tb,
                                    s = -1,
                                    o = t.length,
                                    a = e;
                                for (e === t && (t = iH(t)), r && (a = tf(e, tx(r))); ++s < o;)
                                    for (var c = 0, u = t[s], l = r ? r(u) : u;
                                        (c = n(a, l, c, i)) > -1;) a !== e && e5.call(a, c, 1), e5.call(e, c, 1);
                                return e
                            }

                            function iu(e, t) {
                                for (var r = e ? t.length : 0, i = r - 1; r--;) {
                                    var n = t[r];
                                    if (r == i || n !== s) {
                                        var s = n;
                                        nw(n) ? e5.call(e, n, 1) : iI(e, n)
                                    }
                                }
                                return e
                            }

                            function il(e, t) {
                                return e + tY(t8() * (t - e + 1))
                            }

                            function ih(e, t) {
                                var r = "";
                                if (!e || t < 1 || t > 9007199254740991) return r;
                                do t % 2 && (r += e), (t = tY(t / 2)) && (e += e); while (t);
                                return r
                            }

                            function ip(e, t) {
                                return nT(nC(e, t, ok), e + "")
                            }

                            function id(e, t, i, n) {
                                if (!sK(e)) return e;
                                t = iT(t, e);
                                for (var s = -1, o = t.length, a = o - 1, c = e; null != c && ++s < o;) {
                                    var u = nk(t[s]),
                                        l = i;
                                    if ("__proto__" === u || "constructor" === u || "prototype" === u) break;
                                    if (s != a) {
                                        var h = c[u];
                                        (l = n ? n(h, u, c) : r) === r && (l = sK(h) ? h : nw(t[s + 1]) ? [] : {})
                                    }
                                    rP(c, u, l), c = c[u]
                                }
                                return e
                            }
                            var ig = rn ? function(e, t) {
                                    return rn.set(e, t), e
                                } : ok,
                                iy = e9 ? function(e, t) {
                                    return e9(e, "toString", {
                                        configurable: !0,
                                        enumerable: !1,
                                        value: oU(t),
                                        writable: !0
                                    })
                                } : ok;

                            function iv(e, t, r) {
                                var i = -1,
                                    n = e.length;
                                t < 0 && (t = -t > n ? 0 : n + t), (r = r > n ? n : r) < 0 && (r += n), n = t > r ? 0 : r - t >>> 0, t >>>= 0;
                                for (var s = e_(n); ++i < n;) s[i] = e[i + t];
                                return s
                            }

                            function i_(e, t) {
                                var r;
                                return rk(e, function(e, i, n) {
                                    return !(r = t(e, i, n))
                                }), !!r
                            }

                            function im(e, t, r) {
                                var i = 0,
                                    n = null == e ? i : e.length;
                                if ("number" == typeof t && t == t && n <= 2147483647) {
                                    for (; i < n;) {
                                        var s = i + n >>> 1,
                                            o = e[s];
                                        null !== o && !sQ(o) && (r ? o <= t : o < t) ? i = s + 1 : n = s
                                    }
                                    return n
                                }
                                return ib(e, t, ok, r)
                            }

                            function ib(e, t, i, n) {
                                var s = 0,
                                    o = null == e ? 0 : e.length;
                                if (0 === o) return 0;
                                t = i(t);
                                for (var a = t != t, c = null === t, u = sQ(t), l = t === r; s < o;) {
                                    var h = tY((s + o) / 2),
                                        f = i(e[h]),
                                        p = f !== r,
                                        d = null === f,
                                        g = f == f,
                                        y = sQ(f);
                                    if (a) var v = n || g;
                                    else v = l ? g && (n || p) : c ? g && p && (n || !d) : u ? g && p && !d && (n || !y) : !d && !y && (n ? f <= t : f < t);
                                    v ? s = h + 1 : o = h
                                }
                                return t3(o, 4294967294)
                            }

                            function iw(e, t) {
                                for (var r = -1, i = e.length, n = 0, s = []; ++r < i;) {
                                    var o = e[r],
                                        a = t ? t(o) : o;
                                    if (!r || !sN(a, c)) {
                                        var c = a;
                                        s[n++] = 0 === o ? 0 : o
                                    }
                                }
                                return s
                            }

                            function iE(e) {
                                return "number" == typeof e ? e : sQ(e) ? a : +e
                            }

                            function iD(e) {
                                if ("string" == typeof e) return e;
                                if (sU(e)) return tf(e, iD) + "";
                                if (sQ(e)) return rp ? rp.call(e) : "";
                                var t = e + "";
                                return "0" == t && 1 / e == -o ? "-0" : t
                            }

                            function iS(e, t, r) {
                                var i = -1,
                                    n = tl,
                                    s = e.length,
                                    o = !0,
                                    a = [],
                                    c = a;
                                if (r) o = !1, n = th;
                                else if (s >= 200) {
                                    var u = t ? null : i9(e);
                                    if (u) return tH(u);
                                    o = !1, n = tR, c = new rE
                                } else c = t ? [] : a;
                                e: for (; ++i < s;) {
                                    var l = e[i],
                                        h = t ? t(l) : l;
                                    if (l = r || 0 !== l ? l : 0, o && h == h) {
                                        for (var f = c.length; f--;)
                                            if (c[f] === h) continue e;
                                        t && c.push(h), a.push(l)
                                    } else n(c, h, r) || (c !== a && c.push(h), a.push(l))
                                }
                                return a
                            }

                            function iI(e, t) {
                                return t = iT(t, e), null == (e = nA(e, t)) || delete e[nk(nZ(t))]
                            }

                            function iO(e, t, r, i) {
                                return id(e, t, r(rJ(e, t)), i)
                            }

                            function iP(e, t, r, i) {
                                for (var n = e.length, s = i ? n : -1;
                                    (i ? s-- : ++s < n) && t(e[s], s, e););
                                return r ? iv(e, i ? 0 : s, i ? s + 1 : n) : iv(e, i ? s + 1 : 0, i ? n : s)
                            }

                            function iC(e, t) {
                                var r = e;
                                return r instanceof r_ && (r = r.value()), td(t, function(e, t) {
                                    return t.func.apply(t.thisArg, tp([e], t.args))
                                }, r)
                            }

                            function iA(e, t, r) {
                                var i = e.length;
                                if (i < 2) return i ? iS(e[0]) : [];
                                for (var n = -1, s = e_(i); ++n < i;)
                                    for (var o = e[n], a = -1; ++a < i;) a != n && (s[n] = rM(s[n] || o, e[a], t, r));
                                return iS(rF(s, 1), t, r)
                            }

                            function ix(e, t, i) {
                                for (var n = -1, s = e.length, o = t.length, a = {}; ++n < s;) {
                                    var c = n < o ? t[n] : r;
                                    i(a, e[n], c)
                                }
                                return a
                            }

                            function iN(e) {
                                return sk(e) ? e : []
                            }

                            function iR(e) {
                                return "function" == typeof e ? e : ok
                            }

                            function iT(e, t) {
                                return sU(e) ? e : nD(e, t) ? [e] : nM(s7(e))
                            }

                            function ij(e, t, i) {
                                var n = e.length;
                                return i = i === r ? n : i, !t && i >= n ? e : iv(e, t, i)
                            }
                            var iU = tv || function(e) {
                                return e3.clearTimeout(e)
                            };

                            function iL(e, t) {
                                if (t) return e.slice();
                                var r = e.length,
                                    i = eV ? eV(r) : new e.constructor(r);
                                return e.copy(i), i
                            }

                            function iM(e) {
                                var t = new e.constructor(e.byteLength);
                                return new eq(t).set(new eq(e)), t
                            }

                            function ik(e, t) {
                                var r = t ? iM(e.buffer) : e.buffer;
                                return new e.constructor(r, e.byteOffset, e.length)
                            }

                            function iz(e, t) {
                                if (e !== t) {
                                    var i = e !== r,
                                        n = null === e,
                                        s = e == e,
                                        o = sQ(e),
                                        a = t !== r,
                                        c = null === t,
                                        u = t == t,
                                        l = sQ(t);
                                    if (!c && !l && !o && e > t || o && a && u && !c && !l || n && a && u || !i && u || !s) return 1;
                                    if (!n && !o && !l && e < t || l && i && s && !n && !o || c && i && s || !a && s || !u) return -1
                                }
                                return 0
                            }

                            function i$(e, t, r, i) {
                                for (var n = -1, s = e.length, o = r.length, a = -1, c = t.length, u = t5(s - o, 0), l = e_(c + u), h = !i; ++a < c;) l[a] = t[a];
                                for (; ++n < o;)(h || n < s) && (l[r[n]] = e[n]);
                                for (; u--;) l[a++] = e[n++];
                                return l
                            }

                            function iq(e, t, r, i) {
                                for (var n = -1, s = e.length, o = -1, a = r.length, c = -1, u = t.length, l = t5(s - a, 0), h = e_(l + u), f = !i; ++n < l;) h[n] = e[n];
                                for (var p = n; ++c < u;) h[p + c] = t[c];
                                for (; ++o < a;)(f || n < s) && (h[p + r[o]] = e[n++]);
                                return h
                            }

                            function iH(e, t) {
                                var r = -1,
                                    i = e.length;
                                for (t || (t = e_(i)); ++r < i;) t[r] = e[r];
                                return t
                            }

                            function iF(e, t, i, n) {
                                var s = !i;
                                i || (i = {});
                                for (var o = -1, a = t.length; ++o < a;) {
                                    var c = t[o],
                                        u = n ? n(i[c], e[c], c, i, e) : r;
                                    u === r && (u = e[c]), s ? rN(i, c, u) : rP(i, c, u)
                                }
                                return i
                            }

                            function iV(e, t) {
                                return function(r, i) {
                                    var n = sU(r) ? to : rA,
                                        s = t ? t() : {};
                                    return n(r, e, nh(i, 2), s)
                                }
                            }

                            function iK(e) {
                                return ip(function(t, i) {
                                    var n = -1,
                                        s = i.length,
                                        o = s > 1 ? i[s - 1] : r,
                                        a = s > 2 ? i[2] : r;
                                    for (o = e.length > 3 && "function" == typeof o ? (s--, o) : r, a && nE(i[0], i[1], a) && (o = s < 3 ? r : o, s = 1), t = eD(t); ++n < s;) {
                                        var c = i[n];
                                        c && e(t, c, n, o)
                                    }
                                    return t
                                })
                            }

                            function iB(e, t) {
                                return function(r, i) {
                                    if (null == r) return r;
                                    if (!sM(r)) return e(r, i);
                                    for (var n = r.length, s = t ? n : -1, o = eD(r);
                                        (t ? s-- : ++s < n) && !1 !== i(o[s], s, o););
                                    return r
                                }
                            }

                            function iG(e) {
                                return function(t, r, i) {
                                    for (var n = -1, s = eD(t), o = i(t), a = o.length; a--;) {
                                        var c = o[e ? a : ++n];
                                        if (!1 === r(s[c], c, s)) break
                                    }
                                    return t
                                }
                            }

                            function iW(e) {
                                return function(t) {
                                    var i = tk(t = s7(t)) ? tV(t) : r,
                                        n = i ? i[0] : t.charAt(0),
                                        s = i ? ij(i, 1).join("") : t.slice(1);
                                    return n[e]() + s
                                }
                            }

                            function iJ(e) {
                                return function(t) {
                                    return td(oR(oS(t).replace(eH, "")), e, "")
                                }
                            }

                            function iY(e) {
                                return function() {
                                    var t = arguments;
                                    switch (t.length) {
                                        case 0:
                                            return new e;
                                        case 1:
                                            return new e(t[0]);
                                        case 2:
                                            return new e(t[0], t[1]);
                                        case 3:
                                            return new e(t[0], t[1], t[2]);
                                        case 4:
                                            return new e(t[0], t[1], t[2], t[3]);
                                        case 5:
                                            return new e(t[0], t[1], t[2], t[3], t[4]);
                                        case 6:
                                            return new e(t[0], t[1], t[2], t[3], t[4], t[5]);
                                        case 7:
                                            return new e(t[0], t[1], t[2], t[3], t[4], t[5], t[6])
                                    }
                                    var r = rg(e.prototype),
                                        i = e.apply(r, t);
                                    return sK(i) ? i : r
                                }
                            }

                            function iZ(e) {
                                return function(t, i, n) {
                                    var s = eD(t);
                                    if (!sM(t)) {
                                        var o = nh(i, 3);
                                        t = of (t), i = function(e) {
                                            return o(s[e], e, s)
                                        }
                                    }
                                    var a = e(t, i, n);
                                    return a > -1 ? s[o ? t[a] : a] : r
                                }
                            }

                            function iX(e) {
                                return ns(function(t) {
                                    var n = t.length,
                                        s = n,
                                        o = rv.prototype.thru;
                                    for (e && t.reverse(); s--;) {
                                        var a = t[s];
                                        if ("function" != typeof a) throw new eO(i);
                                        if (o && !c && "wrapper" == nu(a)) var c = new rv([], !0)
                                    }
                                    for (s = c ? s : n; ++s < n;) {
                                        var u = nu(a = t[s]),
                                            l = "wrapper" == u ? nc(a) : r;
                                        c = l && nS(l[0]) && 424 == l[1] && !l[4].length && 1 == l[9] ? c[nu(l[0])].apply(c, l[3]) : 1 == a.length && nS(a) ? c[u]() : c.thru(a)
                                    }
                                    return function() {
                                        var e = arguments,
                                            r = e[0];
                                        if (c && 1 == e.length && sU(r)) return c.plant(r).value();
                                        for (var i = 0, s = n ? t[i].apply(this, e) : r; ++i < n;) s = t[i].call(this, s);
                                        return s
                                    }
                                })
                            }

                            function iQ(e, t, i, n, s, o, a, c, u, l) {
                                var h = 128 & t,
                                    f = 1 & t,
                                    p = 2 & t,
                                    d = 24 & t,
                                    g = 512 & t,
                                    y = p ? r : iY(e);
                                return function v() {
                                    for (var _ = arguments.length, m = e_(_), b = _; b--;) m[b] = arguments[b];
                                    if (d) var w = nl(v),
                                        E = function(e, t) {
                                            for (var r = e.length, i = 0; r--;) e[r] === t && ++i;
                                            return i
                                        }(m, w);
                                    if (n && (m = i$(m, n, s, d)), o && (m = iq(m, o, a, d)), _ -= E, d && _ < l) {
                                        var D = tq(m, w);
                                        return i8(e, t, iQ, v.placeholder, i, m, D, c, u, l - _)
                                    }
                                    var S = f ? i : this,
                                        I = p ? S[e] : e;
                                    return _ = m.length, c ? m = function(e, t) {
                                        for (var i = e.length, n = t3(t.length, i), s = iH(e); n--;) {
                                            var o = t[n];
                                            e[n] = nw(o, i) ? s[o] : r
                                        }
                                        return e
                                    }(m, c) : g && _ > 1 && m.reverse(), h && u < _ && (m.length = u), this && this !== e3 && this instanceof v && (I = y || iY(I)), I.apply(S, m)
                                }
                            }

                            function i0(e, t) {
                                return function(r, i) {
                                    var n, s;
                                    return n = t(i), s = {}, rB(r, function(t, r, i) {
                                        e(s, n(t), r, i)
                                    }), s
                                }
                            }

                            function i1(e, t) {
                                return function(i, n) {
                                    var s;
                                    if (i === r && n === r) return t;
                                    if (i !== r && (s = i), n !== r) {
                                        if (s === r) return n;
                                        "string" == typeof i || "string" == typeof n ? (i = iD(i), n = iD(n)) : (i = iE(i), n = iE(n)), s = e(i, n)
                                    }
                                    return s
                                }
                            }

                            function i5(e) {
                                return ns(function(t) {
                                    return t = tf(t, tx(nh())), ip(function(r) {
                                        var i = this;
                                        return e(t, function(e) {
                                            return ts(e, i, r)
                                        })
                                    })
                                })
                            }

                            function i3(e, t) {
                                var i = (t = t === r ? " " : iD(t)).length;
                                if (i < 2) return i ? ih(t, e) : t;
                                var n = ih(t, tJ(e / tF(t)));
                                return tk(t) ? ij(tV(n), 0, e).join("") : n.slice(0, e)
                            }

                            function i6(e) {
                                return function(t, i, n) {
                                    return n && "number" != typeof n && nE(t, i, n) && (i = n = r), t = s6(t), i === r ? (i = t, t = 0) : i = s6(i), n = n === r ? t < i ? 1 : -1 : s6(n),
                                        function(e, t, r, i) {
                                            for (var n = -1, s = t5(tJ((t - e) / (r || 1)), 0), o = e_(s); s--;) o[i ? s : ++n] = e, e += r;
                                            return o
                                        }(t, i, n, e)
                                }
                            }

                            function i2(e) {
                                return function(t, r) {
                                    return "string" == typeof t && "string" == typeof r || (t = s4(t), r = s4(r)), e(t, r)
                                }
                            }

                            function i8(e, t, i, n, s, o, a, c, u, l) {
                                var h = 8 & t,
                                    f = h ? a : r,
                                    p = h ? r : a,
                                    d = h ? o : r,
                                    g = h ? r : o;
                                t |= h ? 32 : 64, 4 & (t &= ~(h ? 64 : 32)) || (t &= -4);
                                var y = [e, t, s, d, f, g, p, c, u, l],
                                    v = i.apply(r, y);
                                return nS(e) && nN(v, y), v.placeholder = n, nj(v, e, t)
                            }

                            function i4(e) {
                                var t = eE[e];
                                return function(e, r) {
                                    if (e = s4(e), (r = null == r ? 0 : t3(s2(r), 292)) && tQ(e)) {
                                        var i = (s7(e) + "e").split("e");
                                        return +((i = (s7(t(i[0] + "e" + (+i[1] + r))) + "e").split("e"))[0] + "e" + (+i[1] - r))
                                    }
                                    return t(e)
                                }
                            }
                            var i9 = rt && 1 / tH(new rt([, -0]))[1] == o ? function(e) {
                                return new rt(e)
                            } : oF;

                            function i7(e) {
                                return function(t) {
                                    var r, i, n = nv(t);
                                    return n == y ? tz(t) : n == w ? (r = -1, i = Array(t.size), t.forEach(function(e) {
                                        i[++r] = [e, e]
                                    }), i) : tf(e(t), function(e) {
                                        return [e, t[e]]
                                    })
                                }
                            }

                            function ne(e, t, n, o, a, c, u, l) {
                                var h = 2 & t;
                                if (!h && "function" != typeof e) throw new eO(i);
                                var f = o ? o.length : 0;
                                if (f || (t &= -97, o = a = r), u = u === r ? u : t5(s2(u), 0), l = l === r ? l : s2(l), f -= a ? a.length : 0, 64 & t) {
                                    var p = o,
                                        d = a;
                                    o = a = r
                                }
                                var g = h ? r : nc(e),
                                    y = [e, t, n, o, a, p, d, c, u, l];
                                if (g && function(e, t) {
                                        var r = e[1],
                                            i = t[1],
                                            n = r | i,
                                            o = n < 131,
                                            a = 128 == i && 8 == r || 128 == i && 256 == r && e[7].length <= t[8] || 384 == i && t[7].length <= t[8] && 8 == r;
                                        if (o || a) {
                                            1 & i && (e[2] = t[2], n |= 1 & r ? 0 : 4);
                                            var c = t[3];
                                            if (c) {
                                                var u = e[3];
                                                e[3] = u ? i$(u, c, t[4]) : c, e[4] = u ? tq(e[3], s) : t[4]
                                            }(c = t[5]) && (u = e[5], e[5] = u ? iq(u, c, t[6]) : c, e[6] = u ? tq(e[5], s) : t[6]), (c = t[7]) && (e[7] = c), 128 & i && (e[8] = null == e[8] ? t[8] : t3(e[8], t[8])), null == e[9] && (e[9] = t[9]), e[0] = t[0], e[1] = n
                                        }
                                    }(y, g), e = y[0], t = y[1], n = y[2], o = y[3], a = y[4], (l = y[9] = y[9] === r ? h ? 0 : e.length : t5(y[9] - f, 0)) || !(24 & t) || (t &= -25), t && 1 != t) 8 == t || 16 == t ? (v = e, _ = t, m = l, b = iY(v), R = function e() {
                                    for (var t = arguments.length, i = e_(t), n = t, s = nl(e); n--;) i[n] = arguments[n];
                                    var o = t < 3 && i[0] !== s && i[t - 1] !== s ? [] : tq(i, s);
                                    return (t -= o.length) < m ? i8(v, _, iQ, e.placeholder, r, i, o, r, r, m - t) : ts(this && this !== e3 && this instanceof e ? b : v, this, i)
                                }) : 32 != t && 33 != t || a.length ? R = iQ.apply(r, y) : (w = e, E = t, D = n, S = o, I = 1 & E, O = iY(w), R = function e() {
                                    for (var t = -1, r = arguments.length, i = -1, n = S.length, s = e_(n + r), o = this && this !== e3 && this instanceof e ? O : w; ++i < n;) s[i] = S[i];
                                    for (; r--;) s[i++] = arguments[++t];
                                    return ts(o, I ? D : this, s)
                                });
                                else var v, _, m, b, w, E, D, S, I, O, P, C, A, x, N, R = (P = e, C = t, A = n, x = 1 & C, N = iY(P), function e() {
                                    return (this && this !== e3 && this instanceof e ? N : P).apply(x ? A : this, arguments)
                                });
                                return nj((g ? ig : nN)(R, y), e, t)
                            }

                            function nt(e, t, i, n) {
                                return e === r || sN(e, eA[i]) && !eR.call(n, i) ? t : e
                            }

                            function nr(e, t, i, n, s, o) {
                                return sK(e) && sK(t) && (o.set(t, e), ii(e, t, r, nr, o), o.delete(t)), e
                            }

                            function ni(e) {
                                return sJ(e) ? r : e
                            }

                            function nn(e, t, i, n, s, o) {
                                var a = 1 & i,
                                    c = e.length,
                                    u = t.length;
                                if (c != u && !(a && u > c)) return !1;
                                var l = o.get(e),
                                    h = o.get(t);
                                if (l && h) return l == t && h == e;
                                var f = -1,
                                    p = !0,
                                    d = 2 & i ? new rE : r;
                                for (o.set(e, t), o.set(t, e); ++f < c;) {
                                    var g = e[f],
                                        y = t[f];
                                    if (n) var v = a ? n(y, g, f, t, e, o) : n(g, y, f, e, t, o);
                                    if (v !== r) {
                                        if (v) continue;
                                        p = !1;
                                        break
                                    }
                                    if (d) {
                                        if (!ty(t, function(e, t) {
                                                if (!tR(d, t) && (g === e || s(g, e, i, n, o))) return d.push(t)
                                            })) {
                                            p = !1;
                                            break
                                        }
                                    } else if (!(g === y || s(g, y, i, n, o))) {
                                        p = !1;
                                        break
                                    }
                                }
                                return o.delete(e), o.delete(t), p
                            }

                            function ns(e) {
                                return nT(nC(e, r, nB), e + "")
                            }

                            function no(e) {
                                return rY(e, of , ng)
                            }

                            function na(e) {
                                return rY(e, op, ny)
                            }
                            var nc = rn ? function(e) {
                                return rn.get(e)
                            } : oF;

                            function nu(e) {
                                for (var t = e.name + "", r = rs[t], i = eR.call(rs, t) ? r.length : 0; i--;) {
                                    var n = r[i],
                                        s = n.func;
                                    if (null == s || s == e) return n.name
                                }
                                return t
                            }

                            function nl(e) {
                                return (eR.call(rd, "placeholder") ? rd : e).placeholder
                            }

                            function nh() {
                                var e = rd.iteratee || oz;
                                return e = e === oz ? r4 : e, arguments.length ? e(arguments[0], arguments[1]) : e
                            }

                            function nf(e, t) {
                                var r, i = e.__data__;
                                return ("string" == (r = typeof t) || "number" == r || "symbol" == r || "boolean" == r ? "__proto__" !== t : null === t) ? i["string" == typeof t ? "string" : "hash"] : i.map
                            }

                            function np(e) {
                                for (var t = of (e), r = t.length; r--;) {
                                    var i = t[r],
                                        n = e[i];
                                    t[r] = [i, n, n == n && !sK(n)]
                                }
                                return t
                            }

                            function nd(e, t) {
                                var i = null == e ? r : e[t];
                                return r8(i) ? i : r
                            }
                            var ng = tZ ? function(e) {
                                    return null == e ? [] : tu(tZ(e = eD(e)), function(t) {
                                        return e1.call(e, t)
                                    })
                                } : oY,
                                ny = tZ ? function(e) {
                                    for (var t = []; e;) tp(t, ng(e)), e = eB(e);
                                    return t
                                } : oY,
                                nv = rZ;

                            function n_(e, t, r) {
                                t = iT(t, e);
                                for (var i = -1, n = t.length, s = !1; ++i < n;) {
                                    var o = nk(t[i]);
                                    if (!(s = null != e && r(e, o))) break;
                                    e = e[o]
                                }
                                return s || ++i != n ? s : !!(n = null == e ? 0 : e.length) && sV(n) && nw(o, n) && (sU(e) || sj(e))
                            }

                            function nm(e) {
                                return "function" != typeof e.constructor || nO(e) ? {} : rg(eB(e))
                            }

                            function nb(e) {
                                return sU(e) || sj(e) || !!(e6 && e && e[e6])
                            }

                            function nw(e, t) {
                                var r = typeof e;
                                return !!(t = t ? ? 9007199254740991) && ("number" == r || "symbol" != r && eh.test(e)) && e > -1 && e % 1 == 0 && e < t
                            }

                            function nE(e, t, r) {
                                if (!sK(r)) return !1;
                                var i = typeof t;
                                return ("number" == i ? !!(sM(r) && nw(t, r.length)) : "string" == i && t in r) && sN(r[t], e)
                            }

                            function nD(e, t) {
                                if (sU(e)) return !1;
                                var r = typeof e;
                                return !!("number" == r || "symbol" == r || "boolean" == r || null == e || sQ(e)) || G.test(e) || !B.test(e) || null != t && e in eD(t)
                            }

                            function nS(e) {
                                var t = nu(e),
                                    r = rd[t];
                                if ("function" != typeof r || !(t in r_.prototype)) return !1;
                                if (e === r) return !0;
                                var i = nc(r);
                                return !!i && e === i[0]
                            }(t9 && nv(new t9(new ArrayBuffer(1))) != O || t7 && nv(new t7) != y || re && nv(re.resolve()) != m || rt && nv(new rt) != w || rr && nv(new rr) != S) && (nv = function(e) {
                                var t = rZ(e),
                                    i = t == _ ? e.constructor : r,
                                    n = i ? nz(i) : "";
                                if (n) switch (n) {
                                    case ro:
                                        return O;
                                    case ra:
                                        return y;
                                    case rc:
                                        return m;
                                    case ru:
                                        return w;
                                    case rl:
                                        return S
                                }
                                return t
                            });
                            var nI = ex ? sH : oZ;

                            function nO(e) {
                                var t = e && e.constructor;
                                return e === ("function" == typeof t && t.prototype || eA)
                            }

                            function nP(e, t) {
                                return function(i) {
                                    return null != i && i[e] === t && (t !== r || e in eD(i))
                                }
                            }

                            function nC(e, t, i) {
                                return t = t5(t === r ? e.length - 1 : t, 0),
                                    function() {
                                        for (var r = arguments, n = -1, s = t5(r.length - t, 0), o = e_(s); ++n < s;) o[n] = r[t + n];
                                        n = -1;
                                        for (var a = e_(t + 1); ++n < t;) a[n] = r[n];
                                        return a[t] = i(o), ts(e, this, a)
                                    }
                            }

                            function nA(e, t) {
                                return t.length < 2 ? e : rJ(e, iv(t, 0, -1))
                            }

                            function nx(e, t) {
                                if (!("constructor" === t && "function" == typeof e[t]) && "__proto__" != t) return e[t]
                            }
                            var nN = nU(ig),
                                nR = tW || function(e, t) {
                                    return e3.setTimeout(e, t)
                                },
                                nT = nU(iy);

                            function nj(e, t, r) {
                                var i, n, s = t + "";
                                return nT(e, function(e, t) {
                                    var r = t.length;
                                    if (!r) return e;
                                    var i = r - 1;
                                    return t[i] = (r > 1 ? "& " : "") + t[i], t = t.join(r > 2 ? ", " : " "), e.replace(Q, `{
/* [wrapped with ` + t + `] */
`)
                                }(s, (i = (n = s.match(ee)) ? n[1].split(et) : [], ta(c, function(e) {
                                    var t = "_." + e[0];
                                    r & e[1] && !tl(i, t) && i.push(t)
                                }), i.sort())))
                            }

                            function nU(e) {
                                var t = 0,
                                    i = 0;
                                return function() {
                                    var n = t6(),
                                        s = 16 - (n - i);
                                    if (i = n, s > 0) {
                                        if (++t >= 800) return arguments[0]
                                    } else t = 0;
                                    return e.apply(r, arguments)
                                }
                            }

                            function nL(e, t) {
                                var i = -1,
                                    n = e.length,
                                    s = n - 1;
                                for (t = t === r ? n : t; ++i < t;) {
                                    var o = il(i, s),
                                        a = e[o];
                                    e[o] = e[i], e[i] = a
                                }
                                return e.length = t, e
                            }
                            var nM = (ey = (eg = sI(function(e) {
                                var t = [];
                                return 46 === e.charCodeAt(0) && t.push(""), e.replace(W, function(e, r, i, n) {
                                    t.push(i ? n.replace(en, "$1") : r || e)
                                }), t
                            }, function(e) {
                                return 500 === ey.size && ey.clear(), e
                            })).cache, eg);

                            function nk(e) {
                                if ("string" == typeof e || sQ(e)) return e;
                                var t = e + "";
                                return "0" == t && 1 / e == -o ? "-0" : t
                            }

                            function nz(e) {
                                if (null != e) {
                                    try {
                                        return eN.call(e)
                                    } catch {}
                                    try {
                                        return e + ""
                                    } catch {}
                                }
                                return ""
                            }

                            function n$(e) {
                                if (e instanceof r_) return e.clone();
                                var t = new rv(e.__wrapped__, e.__chain__);
                                return t.__actions__ = iH(e.__actions__), t.__index__ = e.__index__, t.__values__ = e.__values__, t
                            }
                            var nq = ip(function(e, t) {
                                    return sk(e) ? rM(e, rF(t, 1, sk, !0)) : []
                                }),
                                nH = ip(function(e, t) {
                                    var i = nZ(t);
                                    return sk(i) && (i = r), sk(e) ? rM(e, rF(t, 1, sk, !0), nh(i, 2)) : []
                                }),
                                nF = ip(function(e, t) {
                                    var i = nZ(t);
                                    return sk(i) && (i = r), sk(e) ? rM(e, rF(t, 1, sk, !0), r, i) : []
                                });

                            function nV(e, t, r) {
                                var i = null == e ? 0 : e.length;
                                if (!i) return -1;
                                var n = null == r ? 0 : s2(r);
                                return n < 0 && (n = t5(i + n, 0)), tm(e, nh(t, 3), n)
                            }

                            function nK(e, t, i) {
                                var n = null == e ? 0 : e.length;
                                if (!n) return -1;
                                var s = n - 1;
                                return i !== r && (s = s2(i), s = i < 0 ? t5(n + s, 0) : t3(s, n - 1)), tm(e, nh(t, 3), s, !0)
                            }

                            function nB(e) {
                                return (null == e ? 0 : e.length) ? rF(e, 1) : []
                            }

                            function nG(e) {
                                return e && e.length ? e[0] : r
                            }
                            var nW = ip(function(e) {
                                    var t = tf(e, iN);
                                    return t.length && t[0] === e[0] ? r1(t) : []
                                }),
                                nJ = ip(function(e) {
                                    var t = nZ(e),
                                        i = tf(e, iN);
                                    return t === nZ(i) ? t = r : i.pop(), i.length && i[0] === e[0] ? r1(i, nh(t, 2)) : []
                                }),
                                nY = ip(function(e) {
                                    var t = nZ(e),
                                        i = tf(e, iN);
                                    return (t = "function" == typeof t ? t : r) && i.pop(), i.length && i[0] === e[0] ? r1(i, r, t) : []
                                });

                            function nZ(e) {
                                var t = null == e ? 0 : e.length;
                                return t ? e[t - 1] : r
                            }
                            var nX = ip(nQ);

                            function nQ(e, t) {
                                return e && e.length && t && t.length ? ic(e, t) : e
                            }
                            var n0 = ns(function(e, t) {
                                var r = null == e ? 0 : e.length,
                                    i = rR(e, t);
                                return iu(e, tf(t, function(e) {
                                    return nw(e, r) ? +e : e
                                }).sort(iz)), i
                            });

                            function n1(e) {
                                return null == e ? e : t4.call(e)
                            }
                            var n5 = ip(function(e) {
                                    return iS(rF(e, 1, sk, !0))
                                }),
                                n3 = ip(function(e) {
                                    var t = nZ(e);
                                    return sk(t) && (t = r), iS(rF(e, 1, sk, !0), nh(t, 2))
                                }),
                                n6 = ip(function(e) {
                                    var t = nZ(e);
                                    return t = "function" == typeof t ? t : r, iS(rF(e, 1, sk, !0), r, t)
                                });

                            function n2(e) {
                                if (!(e && e.length)) return [];
                                var t = 0;
                                return e = tu(e, function(e) {
                                    if (sk(e)) return t = t5(e.length, t), !0
                                }), tC(t, function(t) {
                                    return tf(e, tS(t))
                                })
                            }

                            function n8(e, t) {
                                if (!(e && e.length)) return [];
                                var i = n2(e);
                                return null == t ? i : tf(i, function(e) {
                                    return ts(t, r, e)
                                })
                            }
                            var n4 = ip(function(e, t) {
                                    return sk(e) ? rM(e, t) : []
                                }),
                                n9 = ip(function(e) {
                                    return iA(tu(e, sk))
                                }),
                                n7 = ip(function(e) {
                                    var t = nZ(e);
                                    return sk(t) && (t = r), iA(tu(e, sk), nh(t, 2))
                                }),
                                se = ip(function(e) {
                                    var t = nZ(e);
                                    return t = "function" == typeof t ? t : r, iA(tu(e, sk), r, t)
                                }),
                                st = ip(n2),
                                sr = ip(function(e) {
                                    var t = e.length,
                                        i = t > 1 ? e[t - 1] : r;
                                    return i = "function" == typeof i ? (e.pop(), i) : r, n8(e, i)
                                });

                            function si(e) {
                                var t = rd(e);
                                return t.__chain__ = !0, t
                            }

                            function sn(e, t) {
                                return t(e)
                            }
                            var ss = ns(function(e) {
                                    var t = e.length,
                                        i = t ? e[0] : 0,
                                        n = this.__wrapped__,
                                        s = function(t) {
                                            return rR(t, e)
                                        };
                                    return !(t > 1) && !this.__actions__.length && n instanceof r_ && nw(i) ? ((n = n.slice(i, +i + (t ? 1 : 0))).__actions__.push({
                                        func: sn,
                                        args: [s],
                                        thisArg: r
                                    }), new rv(n, this.__chain__).thru(function(e) {
                                        return t && !e.length && e.push(r), e
                                    })) : this.thru(s)
                                }),
                                so = iV(function(e, t, r) {
                                    eR.call(e, r) ? ++e[r] : rN(e, r, 1)
                                }),
                                sa = iZ(nV),
                                sc = iZ(nK);

                            function su(e, t) {
                                return (sU(e) ? ta : rk)(e, nh(t, 3))
                            }

                            function sl(e, t) {
                                return (sU(e) ? function(e, t) {
                                    for (var r = null == e ? 0 : e.length; r-- && !1 !== t(e[r], r, e););
                                    return e
                                } : rz)(e, nh(t, 3))
                            }
                            var sh = iV(function(e, t, r) {
                                    eR.call(e, r) ? e[r].push(t) : rN(e, r, [t])
                                }),
                                sf = ip(function(e, t, r) {
                                    var i = -1,
                                        n = "function" == typeof t,
                                        s = sM(e) ? e_(e.length) : [];
                                    return rk(e, function(e) {
                                        s[++i] = n ? ts(t, e, r) : r5(e, t, r)
                                    }), s
                                }),
                                sp = iV(function(e, t, r) {
                                    rN(e, r, t)
                                });

                            function sd(e, t) {
                                return (sU(e) ? tf : ie)(e, nh(t, 3))
                            }
                            var sg = iV(function(e, t, r) {
                                    e[r ? 0 : 1].push(t)
                                }, function() {
                                    return [
                                        [],
                                        []
                                    ]
                                }),
                                sy = ip(function(e, t) {
                                    if (null == e) return [];
                                    var r = t.length;
                                    return r > 1 && nE(e, t[0], t[1]) ? t = [] : r > 2 && nE(t[0], t[1], t[2]) && (t = [t[0]]), io(e, rF(t, 1), [])
                                }),
                                sv = tI || function() {
                                    return e3.Date.now()
                                };

                            function s_(e, t, i) {
                                return t = i ? r : t, t = e && null == t ? e.length : t, ne(e, 128, r, r, r, r, t)
                            }

                            function sm(e, t) {
                                var n;
                                if ("function" != typeof t) throw new eO(i);
                                return e = s2(e),
                                    function() {
                                        return --e > 0 && (n = t.apply(this, arguments)), e <= 1 && (t = r), n
                                    }
                            }
                            var sb = ip(function(e, t, r) {
                                    var i = 1;
                                    if (r.length) {
                                        var n = tq(r, nl(sb));
                                        i |= 32
                                    }
                                    return ne(e, i, t, r, n)
                                }),
                                sw = ip(function(e, t, r) {
                                    var i = 3;
                                    if (r.length) {
                                        var n = tq(r, nl(sw));
                                        i |= 32
                                    }
                                    return ne(t, i, e, r, n)
                                });

                            function sE(e, t, n) {
                                var s, o, a, c, u, l, h = 0,
                                    f = !1,
                                    p = !1,
                                    d = !0;
                                if ("function" != typeof e) throw new eO(i);

                                function g(t) {
                                    var i = s,
                                        n = o;
                                    return s = o = r, h = t, c = e.apply(n, i)
                                }

                                function y(e) {
                                    var i = e - l,
                                        n = e - h;
                                    return l === r || i >= t || i < 0 || p && n >= a
                                }

                                function v() {
                                    var e, r, i, n = sv();
                                    if (y(n)) return _(n);
                                    u = nR(v, (e = n - l, r = n - h, i = t - e, p ? t3(i, a - r) : i))
                                }

                                function _(e) {
                                    return u = r, d && s ? g(e) : (s = o = r, c)
                                }

                                function m() {
                                    var e, i = sv(),
                                        n = y(i);
                                    if (s = arguments, o = this, l = i, n) {
                                        if (u === r) return h = e = l, u = nR(v, t), f ? g(e) : c;
                                        if (p) return iU(u), u = nR(v, t), g(l)
                                    }
                                    return u === r && (u = nR(v, t)), c
                                }
                                return t = s4(t) || 0, sK(n) && (f = !!n.leading, a = (p = "maxWait" in n) ? t5(s4(n.maxWait) || 0, t) : a, d = "trailing" in n ? !!n.trailing : d), m.cancel = function() {
                                    u !== r && iU(u), h = 0, s = l = o = u = r
                                }, m.flush = function() {
                                    return u === r ? c : _(sv())
                                }, m
                            }
                            var sD = ip(function(e, t) {
                                    return rL(e, 1, t)
                                }),
                                sS = ip(function(e, t, r) {
                                    return rL(e, s4(t) || 0, r)
                                });

                            function sI(e, t) {
                                if ("function" != typeof e || null != t && "function" != typeof t) throw new eO(i);
                                var r = function() {
                                    var i = arguments,
                                        n = t ? t.apply(this, i) : i[0],
                                        s = r.cache;
                                    if (s.has(n)) return s.get(n);
                                    var o = e.apply(this, i);
                                    return r.cache = s.set(n, o) || s, o
                                };
                                return r.cache = new(sI.Cache || rw), r
                            }

                            function sO(e) {
                                if ("function" != typeof e) throw new eO(i);
                                return function() {
                                    var t = arguments;
                                    switch (t.length) {
                                        case 0:
                                            return !e.call(this);
                                        case 1:
                                            return !e.call(this, t[0]);
                                        case 2:
                                            return !e.call(this, t[0], t[1]);
                                        case 3:
                                            return !e.call(this, t[0], t[1], t[2])
                                    }
                                    return !e.apply(this, t)
                                }
                            }
                            sI.Cache = rw;
                            var sP = ip(function(e, t) {
                                    var r = (t = 1 == t.length && sU(t[0]) ? tf(t[0], tx(nh())) : tf(rF(t, 1), tx(nh()))).length;
                                    return ip(function(i) {
                                        for (var n = -1, s = t3(i.length, r); ++n < s;) i[n] = t[n].call(this, i[n]);
                                        return ts(e, this, i)
                                    })
                                }),
                                sC = ip(function(e, t) {
                                    var i = tq(t, nl(sC));
                                    return ne(e, 32, r, t, i)
                                }),
                                sA = ip(function(e, t) {
                                    var i = tq(t, nl(sA));
                                    return ne(e, 64, r, t, i)
                                }),
                                sx = ns(function(e, t) {
                                    return ne(e, 256, r, r, r, t)
                                });

                            function sN(e, t) {
                                return e === t || e != e && t != t
                            }
                            var sR = i2(rX),
                                sT = i2(function(e, t) {
                                    return e >= t
                                }),
                                sj = r3(function() {
                                    return arguments
                                }()) ? r3 : function(e) {
                                    return sB(e) && eR.call(e, "callee") && !e1.call(e, "callee")
                                },
                                sU = e_.isArray,
                                sL = e7 ? tx(e7) : function(e) {
                                    return sB(e) && rZ(e) == I
                                };

                            function sM(e) {
                                return null != e && sV(e.length) && !sH(e)
                            }

                            function sk(e) {
                                return sB(e) && sM(e)
                            }
                            var sz = tX || oZ,
                                s$ = te ? tx(te) : function(e) {
                                    return sB(e) && rZ(e) == f
                                };

                            function sq(e) {
                                if (!sB(e)) return !1;
                                var t = rZ(e);
                                return t == p || "[object DOMException]" == t || "string" == typeof e.message && "string" == typeof e.name && !sJ(e)
                            }

                            function sH(e) {
                                if (!sK(e)) return !1;
                                var t = rZ(e);
                                return t == d || t == g || "[object AsyncFunction]" == t || "[object Proxy]" == t
                            }

                            function sF(e) {
                                return "number" == typeof e && e == s2(e)
                            }

                            function sV(e) {
                                return "number" == typeof e && e > -1 && e % 1 == 0 && e <= 9007199254740991
                            }

                            function sK(e) {
                                var t = typeof e;
                                return null != e && ("object" == t || "function" == t)
                            }

                            function sB(e) {
                                return null != e && "object" == typeof e
                            }
                            var sG = tt ? tx(tt) : function(e) {
                                return sB(e) && nv(e) == y
                            };

                            function sW(e) {
                                return "number" == typeof e || sB(e) && rZ(e) == v
                            }

                            function sJ(e) {
                                if (!sB(e) || rZ(e) != _) return !1;
                                var t = eB(e);
                                if (null === t) return !0;
                                var r = eR.call(t, "constructor") && t.constructor;
                                return "function" == typeof r && r instanceof r && eN.call(r) == eL
                            }
                            var sY = tr ? tx(tr) : function(e) {
                                    return sB(e) && rZ(e) == b
                                },
                                sZ = ti ? tx(ti) : function(e) {
                                    return sB(e) && nv(e) == w
                                };

                            function sX(e) {
                                return "string" == typeof e || !sU(e) && sB(e) && rZ(e) == E
                            }

                            function sQ(e) {
                                return "symbol" == typeof e || sB(e) && rZ(e) == D
                            }
                            var s0 = tn ? tx(tn) : function(e) {
                                    return sB(e) && sV(e.length) && !!eY[rZ(e)]
                                },
                                s1 = i2(r7),
                                s5 = i2(function(e, t) {
                                    return e <= t
                                });

                            function s3(e) {
                                if (!e) return [];
                                if (sM(e)) return sX(e) ? tV(e) : iH(e);
                                if (e2 && e[e2]) return function(e) {
                                    for (var t, r = []; !(t = e.next()).done;) r.push(t.value);
                                    return r
                                }(e[e2]());
                                var t = nv(e);
                                return (t == y ? tz : t == w ? tH : ow)(e)
                            }

                            function s6(e) {
                                return e ? (e = s4(e)) === o || e === -o ? (e < 0 ? -1 : 1) * 17976931348623157e292 : e == e ? e : 0 : 0 === e ? e : 0
                            }

                            function s2(e) {
                                var t = s6(e),
                                    r = t % 1;
                                return t == t ? r ? t - r : t : 0
                            }

                            function s8(e) {
                                return e ? rT(s2(e), 0, 4294967295) : 0
                            }

                            function s4(e) {
                                if ("number" == typeof e) return e;
                                if (sQ(e)) return a;
                                if (sK(e)) {
                                    var t = "function" == typeof e.valueOf ? e.valueOf() : e;
                                    e = sK(t) ? t + "" : t
                                }
                                if ("string" != typeof e) return 0 === e ? e : +e;
                                e = tA(e);
                                var r = ec.test(e);
                                return r || el.test(e) ? e0(e.slice(2), r ? 2 : 8) : ea.test(e) ? a : +e
                            }

                            function s9(e) {
                                return iF(e, op(e))
                            }

                            function s7(e) {
                                return null == e ? "" : iD(e)
                            }
                            var oe = iK(function(e, t) {
                                    if (nO(t) || sM(t)) {
                                        iF(t, of (t), e);
                                        return
                                    }
                                    for (var r in t) eR.call(t, r) && rP(e, r, t[r])
                                }),
                                ot = iK(function(e, t) {
                                    iF(t, op(t), e)
                                }),
                                or = iK(function(e, t, r, i) {
                                    iF(t, op(t), e, i)
                                }),
                                oi = iK(function(e, t, r, i) {
                                    iF(t, of (t), e, i)
                                }),
                                on = ns(rR),
                                os = ip(function(e, t) {
                                    e = eD(e);
                                    var i = -1,
                                        n = t.length,
                                        s = n > 2 ? t[2] : r;
                                    for (s && nE(t[0], t[1], s) && (n = 1); ++i < n;)
                                        for (var o = t[i], a = op(o), c = -1, u = a.length; ++c < u;) {
                                            var l = a[c],
                                                h = e[l];
                                            (h === r || sN(h, eA[l]) && !eR.call(e, l)) && (e[l] = o[l])
                                        }
                                    return e
                                }),
                                oo = ip(function(e) {
                                    return e.push(r, nr), ts(og, r, e)
                                });

                            function oa(e, t, i) {
                                var n = null == e ? r : rJ(e, t);
                                return n === r ? i : n
                            }

                            function oc(e, t) {
                                return null != e && n_(e, t, r0)
                            }
                            var ou = i0(function(e, t, r) {
                                    null != t && "function" != typeof t.toString && (t = eU.call(t)), e[t] = r
                                }, oU(ok)),
                                ol = i0(function(e, t, r) {
                                    null != t && "function" != typeof t.toString && (t = eU.call(t)), eR.call(e, t) ? e[t].push(r) : e[t] = [r]
                                }, nh),
                                oh = ip(r5);

                            function of (e) {
                                return sM(e) ? rS(e) : r9(e)
                            }

                            function op(e) {
                                return sM(e) ? rS(e, !0) : function(e) {
                                    if (!sK(e)) return function(e) {
                                        var t = [];
                                        if (null != e)
                                            for (var r in eD(e)) t.push(r);
                                        return t
                                    }(e);
                                    var t = nO(e),
                                        r = [];
                                    for (var i in e) "constructor" == i && (t || !eR.call(e, i)) || r.push(i);
                                    return r
                                }(e)
                            }
                            var od = iK(function(e, t, r) {
                                    ii(e, t, r)
                                }),
                                og = iK(function(e, t, r, i) {
                                    ii(e, t, r, i)
                                }),
                                oy = ns(function(e, t) {
                                    var r = {};
                                    if (null == e) return r;
                                    var i = !1;
                                    t = tf(t, function(t) {
                                        return t = iT(t, e), i || (i = t.length > 1), t
                                    }), iF(e, na(e), r), i && (r = rj(r, 7, ni));
                                    for (var n = t.length; n--;) iI(r, t[n]);
                                    return r
                                }),
                                ov = ns(function(e, t) {
                                    return null == e ? {} : ia(e, t, function(t, r) {
                                        return oc(e, r)
                                    })
                                });

                            function o_(e, t) {
                                if (null == e) return {};
                                var r = tf(na(e), function(e) {
                                    return [e]
                                });
                                return t = nh(t), ia(e, r, function(e, r) {
                                    return t(e, r[0])
                                })
                            }
                            var om = i7( of ),
                                ob = i7(op);

                            function ow(e) {
                                return null == e ? [] : tN(e, of (e))
                            }
                            var oE = iJ(function(e, t, r) {
                                return t = t.toLowerCase(), e + (r ? oD(t) : t)
                            });

                            function oD(e) {
                                return oN(s7(e).toLowerCase())
                            }

                            function oS(e) {
                                return (e = s7(e)) && e.replace(ef, tU).replace(eF, "")
                            }
                            var oI = iJ(function(e, t, r) {
                                    return e + (r ? "-" : "") + t.toLowerCase()
                                }),
                                oO = iJ(function(e, t, r) {
                                    return e + (r ? " " : "") + t.toLowerCase()
                                }),
                                oP = iW("toLowerCase"),
                                oC = iJ(function(e, t, r) {
                                    return e + (r ? "_" : "") + t.toLowerCase()
                                }),
                                oA = iJ(function(e, t, r) {
                                    return e + (r ? " " : "") + oN(t)
                                }),
                                ox = iJ(function(e, t, r) {
                                    return e + (r ? " " : "") + t.toUpperCase()
                                }),
                                oN = iW("toUpperCase");

                            function oR(e, t, i) {
                                var n;
                                return e = s7(e), (t = i ? r : t) === r ? (n = e, eG.test(n)) ? e.match(eK) || [] : e.match(er) || [] : e.match(t) || []
                            }
                            var oT = ip(function(e, t) {
                                    try {
                                        return ts(e, r, t)
                                    } catch (e) {
                                        return sq(e) ? e : new eb(e)
                                    }
                                }),
                                oj = ns(function(e, t) {
                                    return ta(t, function(t) {
                                        rN(e, t = nk(t), sb(e[t], e))
                                    }), e
                                });

                            function oU(e) {
                                return function() {
                                    return e
                                }
                            }
                            var oL = iX(),
                                oM = iX(!0);

                            function ok(e) {
                                return e
                            }

                            function oz(e) {
                                return r4("function" == typeof e ? e : rj(e, 1))
                            }
                            var o$ = ip(function(e, t) {
                                    return function(r) {
                                        return r5(r, e, t)
                                    }
                                }),
                                oq = ip(function(e, t) {
                                    return function(r) {
                                        return r5(e, r, t)
                                    }
                                });

                            function oH(e, t, r) {
                                var i = of (t),
                                    n = rW(t, i);
                                null != r || sK(t) && (n.length || !i.length) || (r = t, t = e, e = this, n = rW(t, of (t)));
                                var s = !(sK(r) && "chain" in r) || !!r.chain,
                                    o = sH(e);
                                return ta(n, function(r) {
                                    var i = t[r];
                                    e[r] = i, o && (e.prototype[r] = function() {
                                        var t = this.__chain__;
                                        if (s || t) {
                                            var r = e(this.__wrapped__);
                                            return (r.__actions__ = iH(this.__actions__)).push({
                                                func: i,
                                                args: arguments,
                                                thisArg: e
                                            }), r.__chain__ = t, r
                                        }
                                        return i.apply(e, tp([this.value()], arguments))
                                    })
                                }), e
                            }

                            function oF() {}
                            var oV = i5(tf),
                                oK = i5(tc),
                                oB = i5(ty);

                            function oG(e) {
                                return nD(e) ? tS(nk(e)) : function(t) {
                                    return rJ(t, e)
                                }
                            }
                            var oW = i6(),
                                oJ = i6(!0);

                            function oY() {
                                return []
                            }

                            function oZ() {
                                return !1
                            }
                            var oX = i1(function(e, t) {
                                    return e + t
                                }, 0),
                                oQ = i4("ceil"),
                                o0 = i1(function(e, t) {
                                    return e / t
                                }, 1),
                                o1 = i4("floor"),
                                o5 = i1(function(e, t) {
                                    return e * t
                                }, 1),
                                o3 = i4("round"),
                                o6 = i1(function(e, t) {
                                    return e - t
                                }, 0);
                            return rd.after = function(e, t) {
                                if ("function" != typeof t) throw new eO(i);
                                return e = s2(e),
                                    function() {
                                        if (--e < 1) return t.apply(this, arguments)
                                    }
                            }, rd.ary = s_, rd.assign = oe, rd.assignIn = ot, rd.assignInWith = or, rd.assignWith = oi, rd.at = on, rd.before = sm, rd.bind = sb, rd.bindAll = oj, rd.bindKey = sw, rd.castArray = function() {
                                if (!arguments.length) return [];
                                var e = arguments[0];
                                return sU(e) ? e : [e]
                            }, rd.chain = si, rd.chunk = function(e, t, i) {
                                t = (i ? nE(e, t, i) : t === r) ? 1 : t5(s2(t), 0);
                                var n = null == e ? 0 : e.length;
                                if (!n || t < 1) return [];
                                for (var s = 0, o = 0, a = e_(tJ(n / t)); s < n;) a[o++] = iv(e, s, s += t);
                                return a
                            }, rd.compact = function(e) {
                                for (var t = -1, r = null == e ? 0 : e.length, i = 0, n = []; ++t < r;) {
                                    var s = e[t];
                                    s && (n[i++] = s)
                                }
                                return n
                            }, rd.concat = function() {
                                var e = arguments.length;
                                if (!e) return [];
                                for (var t = e_(e - 1), r = arguments[0], i = e; i--;) t[i - 1] = arguments[i];
                                return tp(sU(r) ? iH(r) : [r], rF(t, 1))
                            }, rd.cond = function(e) {
                                var t = null == e ? 0 : e.length,
                                    r = nh();
                                return e = t ? tf(e, function(e) {
                                    if ("function" != typeof e[1]) throw new eO(i);
                                    return [r(e[0]), e[1]]
                                }) : [], ip(function(r) {
                                    for (var i = -1; ++i < t;) {
                                        var n = e[i];
                                        if (ts(n[0], this, r)) return ts(n[1], this, r)
                                    }
                                })
                            }, rd.conforms = function(e) {
                                var t, r;
                                return r = of (t = rj(e, 1)),
                                    function(e) {
                                        return rU(e, t, r)
                                    }
                            }, rd.constant = oU, rd.countBy = so, rd.create = function(e, t) {
                                var r = rg(e);
                                return null == t ? r : rx(r, t)
                            }, rd.curry = function e(t, i, n) {
                                i = n ? r : i;
                                var s = ne(t, 8, r, r, r, r, r, i);
                                return s.placeholder = e.placeholder, s
                            }, rd.curryRight = function e(t, i, n) {
                                i = n ? r : i;
                                var s = ne(t, 16, r, r, r, r, r, i);
                                return s.placeholder = e.placeholder, s
                            }, rd.debounce = sE, rd.defaults = os, rd.defaultsDeep = oo, rd.defer = sD, rd.delay = sS, rd.difference = nq, rd.differenceBy = nH, rd.differenceWith = nF, rd.drop = function(e, t, i) {
                                var n = null == e ? 0 : e.length;
                                return n ? iv(e, (t = i || t === r ? 1 : s2(t)) < 0 ? 0 : t, n) : []
                            }, rd.dropRight = function(e, t, i) {
                                var n = null == e ? 0 : e.length;
                                return n ? iv(e, 0, (t = n - (t = i || t === r ? 1 : s2(t))) < 0 ? 0 : t) : []
                            }, rd.dropRightWhile = function(e, t) {
                                return e && e.length ? iP(e, nh(t, 3), !0, !0) : []
                            }, rd.dropWhile = function(e, t) {
                                return e && e.length ? iP(e, nh(t, 3), !0) : []
                            }, rd.fill = function(e, t, i, n) {
                                var s = null == e ? 0 : e.length;
                                return s ? (i && "number" != typeof i && nE(e, t, i) && (i = 0, n = s), function(e, t, i, n) {
                                    var s = e.length;
                                    for ((i = s2(i)) < 0 && (i = -i > s ? 0 : s + i), (n = n === r || n > s ? s : s2(n)) < 0 && (n += s), n = i > n ? 0 : s8(n); i < n;) e[i++] = t;
                                    return e
                                }(e, t, i, n)) : []
                            }, rd.filter = function(e, t) {
                                return (sU(e) ? tu : rH)(e, nh(t, 3))
                            }, rd.flatMap = function(e, t) {
                                return rF(sd(e, t), 1)
                            }, rd.flatMapDeep = function(e, t) {
                                return rF(sd(e, t), o)
                            }, rd.flatMapDepth = function(e, t, i) {
                                return i = i === r ? 1 : s2(i), rF(sd(e, t), i)
                            }, rd.flatten = nB, rd.flattenDeep = function(e) {
                                return (null == e ? 0 : e.length) ? rF(e, o) : []
                            }, rd.flattenDepth = function(e, t) {
                                return (null == e ? 0 : e.length) ? rF(e, t = t === r ? 1 : s2(t)) : []
                            }, rd.flip = function(e) {
                                return ne(e, 512)
                            }, rd.flow = oL, rd.flowRight = oM, rd.fromPairs = function(e) {
                                for (var t = -1, r = null == e ? 0 : e.length, i = {}; ++t < r;) {
                                    var n = e[t];
                                    i[n[0]] = n[1]
                                }
                                return i
                            }, rd.functions = function(e) {
                                return null == e ? [] : rW(e, of (e))
                            }, rd.functionsIn = function(e) {
                                return null == e ? [] : rW(e, op(e))
                            }, rd.groupBy = sh, rd.initial = function(e) {
                                return (null == e ? 0 : e.length) ? iv(e, 0, -1) : []
                            }, rd.intersection = nW, rd.intersectionBy = nJ, rd.intersectionWith = nY, rd.invert = ou, rd.invertBy = ol, rd.invokeMap = sf, rd.iteratee = oz, rd.keyBy = sp, rd.keys = of , rd.keysIn = op, rd.map = sd, rd.mapKeys = function(e, t) {
                                var r = {};
                                return t = nh(t, 3), rB(e, function(e, i, n) {
                                    rN(r, t(e, i, n), e)
                                }), r
                            }, rd.mapValues = function(e, t) {
                                var r = {};
                                return t = nh(t, 3), rB(e, function(e, i, n) {
                                    rN(r, i, t(e, i, n))
                                }), r
                            }, rd.matches = function(e) {
                                return it(rj(e, 1))
                            }, rd.matchesProperty = function(e, t) {
                                return ir(e, rj(t, 1))
                            }, rd.memoize = sI, rd.merge = od, rd.mergeWith = og, rd.method = o$, rd.methodOf = oq, rd.mixin = oH, rd.negate = sO, rd.nthArg = function(e) {
                                return e = s2(e), ip(function(t) {
                                    return is(t, e)
                                })
                            }, rd.omit = oy, rd.omitBy = function(e, t) {
                                return o_(e, sO(nh(t)))
                            }, rd.once = function(e) {
                                return sm(2, e)
                            }, rd.orderBy = function(e, t, i, n) {
                                return null == e ? [] : (sU(t) || (t = null == t ? [] : [t]), sU(i = n ? r : i) || (i = null == i ? [] : [i]), io(e, t, i))
                            }, rd.over = oV, rd.overArgs = sP, rd.overEvery = oK, rd.overSome = oB, rd.partial = sC, rd.partialRight = sA, rd.partition = sg, rd.pick = ov, rd.pickBy = o_, rd.property = oG, rd.propertyOf = function(e) {
                                return function(t) {
                                    return null == e ? r : rJ(e, t)
                                }
                            }, rd.pull = nX, rd.pullAll = nQ, rd.pullAllBy = function(e, t, r) {
                                return e && e.length && t && t.length ? ic(e, t, nh(r, 2)) : e
                            }, rd.pullAllWith = function(e, t, i) {
                                return e && e.length && t && t.length ? ic(e, t, r, i) : e
                            }, rd.pullAt = n0, rd.range = oW, rd.rangeRight = oJ, rd.rearg = sx, rd.reject = function(e, t) {
                                return (sU(e) ? tu : rH)(e, sO(nh(t, 3)))
                            }, rd.remove = function(e, t) {
                                var r = [];
                                if (!(e && e.length)) return r;
                                var i = -1,
                                    n = [],
                                    s = e.length;
                                for (t = nh(t, 3); ++i < s;) {
                                    var o = e[i];
                                    t(o, i, e) && (r.push(o), n.push(i))
                                }
                                return iu(e, n), r
                            }, rd.rest = function(e, t) {
                                if ("function" != typeof e) throw new eO(i);
                                return ip(e, t = t === r ? t : s2(t))
                            }, rd.reverse = n1, rd.sampleSize = function(e, t, i) {
                                return t = (i ? nE(e, t, i) : t === r) ? 1 : s2(t), (sU(e) ? function(e, t) {
                                    return nL(iH(e), rT(t, 0, e.length))
                                } : function(e, t) {
                                    var r = ow(e);
                                    return nL(r, rT(t, 0, r.length))
                                })(e, t)
                            }, rd.set = function(e, t, r) {
                                return null == e ? e : id(e, t, r)
                            }, rd.setWith = function(e, t, i, n) {
                                return n = "function" == typeof n ? n : r, null == e ? e : id(e, t, i, n)
                            }, rd.shuffle = function(e) {
                                return (sU(e) ? function(e) {
                                    return nL(iH(e))
                                } : function(e) {
                                    return nL(ow(e))
                                })(e)
                            }, rd.slice = function(e, t, i) {
                                var n = null == e ? 0 : e.length;
                                return n ? (i && "number" != typeof i && nE(e, t, i) ? (t = 0, i = n) : (t = null == t ? 0 : s2(t), i = i === r ? n : s2(i)), iv(e, t, i)) : []
                            }, rd.sortBy = sy, rd.sortedUniq = function(e) {
                                return e && e.length ? iw(e) : []
                            }, rd.sortedUniqBy = function(e, t) {
                                return e && e.length ? iw(e, nh(t, 2)) : []
                            }, rd.split = function(e, t, i) {
                                return i && "number" != typeof i && nE(e, t, i) && (t = i = r), (i = i === r ? 4294967295 : i >>> 0) ? (e = s7(e)) && ("string" == typeof t || null != t && !sY(t)) && !(t = iD(t)) && tk(e) ? ij(tV(e), 0, i) : e.split(t, i) : []
                            }, rd.spread = function(e, t) {
                                if ("function" != typeof e) throw new eO(i);
                                return t = null == t ? 0 : t5(s2(t), 0), ip(function(r) {
                                    var i = r[t],
                                        n = ij(r, 0, t);
                                    return i && tp(n, i), ts(e, this, n)
                                })
                            }, rd.tail = function(e) {
                                var t = null == e ? 0 : e.length;
                                return t ? iv(e, 1, t) : []
                            }, rd.take = function(e, t, i) {
                                return e && e.length ? iv(e, 0, (t = i || t === r ? 1 : s2(t)) < 0 ? 0 : t) : []
                            }, rd.takeRight = function(e, t, i) {
                                var n = null == e ? 0 : e.length;
                                return n ? iv(e, (t = n - (t = i || t === r ? 1 : s2(t))) < 0 ? 0 : t, n) : []
                            }, rd.takeRightWhile = function(e, t) {
                                return e && e.length ? iP(e, nh(t, 3), !1, !0) : []
                            }, rd.takeWhile = function(e, t) {
                                return e && e.length ? iP(e, nh(t, 3)) : []
                            }, rd.tap = function(e, t) {
                                return t(e), e
                            }, rd.throttle = function(e, t, r) {
                                var n = !0,
                                    s = !0;
                                if ("function" != typeof e) throw new eO(i);
                                return sK(r) && (n = "leading" in r ? !!r.leading : n, s = "trailing" in r ? !!r.trailing : s), sE(e, t, {
                                    leading: n,
                                    maxWait: t,
                                    trailing: s
                                })
                            }, rd.thru = sn, rd.toArray = s3, rd.toPairs = om, rd.toPairsIn = ob, rd.toPath = function(e) {
                                return sU(e) ? tf(e, nk) : sQ(e) ? [e] : iH(nM(s7(e)))
                            }, rd.toPlainObject = s9, rd.transform = function(e, t, r) {
                                var i = sU(e),
                                    n = i || sz(e) || s0(e);
                                if (t = nh(t, 4), null == r) {
                                    var s = e && e.constructor;
                                    r = n ? i ? new s : [] : sK(e) && sH(s) ? rg(eB(e)) : {}
                                }
                                return (n ? ta : rB)(e, function(e, i, n) {
                                    return t(r, e, i, n)
                                }), r
                            }, rd.unary = function(e) {
                                return s_(e, 1)
                            }, rd.union = n5, rd.unionBy = n3, rd.unionWith = n6, rd.uniq = function(e) {
                                return e && e.length ? iS(e) : []
                            }, rd.uniqBy = function(e, t) {
                                return e && e.length ? iS(e, nh(t, 2)) : []
                            }, rd.uniqWith = function(e, t) {
                                return t = "function" == typeof t ? t : r, e && e.length ? iS(e, r, t) : []
                            }, rd.unset = function(e, t) {
                                return null == e || iI(e, t)
                            }, rd.unzip = n2, rd.unzipWith = n8, rd.update = function(e, t, r) {
                                return null == e ? e : iO(e, t, iR(r))
                            }, rd.updateWith = function(e, t, i, n) {
                                return n = "function" == typeof n ? n : r, null == e ? e : iO(e, t, iR(i), n)
                            }, rd.values = ow, rd.valuesIn = function(e) {
                                return null == e ? [] : tN(e, op(e))
                            }, rd.without = n4, rd.words = oR, rd.wrap = function(e, t) {
                                return sC(iR(t), e)
                            }, rd.xor = n9, rd.xorBy = n7, rd.xorWith = se, rd.zip = st, rd.zipObject = function(e, t) {
                                return ix(e || [], t || [], rP)
                            }, rd.zipObjectDeep = function(e, t) {
                                return ix(e || [], t || [], id)
                            }, rd.zipWith = sr, rd.entries = om, rd.entriesIn = ob, rd.extend = ot, rd.extendWith = or, oH(rd, rd), rd.add = oX, rd.attempt = oT, rd.camelCase = oE, rd.capitalize = oD, rd.ceil = oQ, rd.clamp = function(e, t, i) {
                                return i === r && (i = t, t = r), i !== r && (i = (i = s4(i)) == i ? i : 0), t !== r && (t = (t = s4(t)) == t ? t : 0), rT(s4(e), t, i)
                            }, rd.clone = function(e) {
                                return rj(e, 4)
                            }, rd.cloneDeep = function(e) {
                                return rj(e, 5)
                            }, rd.cloneDeepWith = function(e, t) {
                                return rj(e, 5, t = "function" == typeof t ? t : r)
                            }, rd.cloneWith = function(e, t) {
                                return rj(e, 4, t = "function" == typeof t ? t : r)
                            }, rd.conformsTo = function(e, t) {
                                return null == t || rU(e, t, of (t))
                            }, rd.deburr = oS, rd.defaultTo = function(e, t) {
                                return null == e || e != e ? t : e
                            }, rd.divide = o0, rd.endsWith = function(e, t, i) {
                                e = s7(e), t = iD(t);
                                var n = e.length,
                                    s = i = i === r ? n : rT(s2(i), 0, n);
                                return (i -= t.length) >= 0 && e.slice(i, s) == t
                            }, rd.eq = sN, rd.escape = function(e) {
                                return (e = s7(e)) && H.test(e) ? e.replace($, tL) : e
                            }, rd.escapeRegExp = function(e) {
                                return (e = s7(e)) && Y.test(e) ? e.replace(J, "\\$&") : e
                            }, rd.every = function(e, t, i) {
                                var n = sU(e) ? tc : r$;
                                return i && nE(e, t, i) && (t = r), n(e, nh(t, 3))
                            }, rd.find = sa, rd.findIndex = nV, rd.findKey = function(e, t) {
                                return t_(e, nh(t, 3), rB)
                            }, rd.findLast = sc, rd.findLastIndex = nK, rd.findLastKey = function(e, t) {
                                return t_(e, nh(t, 3), rG)
                            }, rd.floor = o1, rd.forEach = su, rd.forEachRight = sl, rd.forIn = function(e, t) {
                                return null == e ? e : rV(e, nh(t, 3), op)
                            }, rd.forInRight = function(e, t) {
                                return null == e ? e : rK(e, nh(t, 3), op)
                            }, rd.forOwn = function(e, t) {
                                return e && rB(e, nh(t, 3))
                            }, rd.forOwnRight = function(e, t) {
                                return e && rG(e, nh(t, 3))
                            }, rd.get = oa, rd.gt = sR, rd.gte = sT, rd.has = function(e, t) {
                                return null != e && n_(e, t, rQ)
                            }, rd.hasIn = oc, rd.head = nG, rd.identity = ok, rd.includes = function(e, t, r, i) {
                                e = sM(e) ? e : ow(e), r = r && !i ? s2(r) : 0;
                                var n = e.length;
                                return r < 0 && (r = t5(n + r, 0)), sX(e) ? r <= n && e.indexOf(t, r) > -1 : !!n && tb(e, t, r) > -1
                            }, rd.indexOf = function(e, t, r) {
                                var i = null == e ? 0 : e.length;
                                if (!i) return -1;
                                var n = null == r ? 0 : s2(r);
                                return n < 0 && (n = t5(i + n, 0)), tb(e, t, n)
                            }, rd.inRange = function(e, t, i) {
                                var n, s, o;
                                return t = s6(t), i === r ? (i = t, t = 0) : i = s6(i), (n = e = s4(e)) >= t3(s = t, o = i) && n < t5(s, o)
                            }, rd.invoke = oh, rd.isArguments = sj, rd.isArray = sU, rd.isArrayBuffer = sL, rd.isArrayLike = sM, rd.isArrayLikeObject = sk, rd.isBoolean = function(e) {
                                return !0 === e || !1 === e || sB(e) && rZ(e) == h
                            }, rd.isBuffer = sz, rd.isDate = s$, rd.isElement = function(e) {
                                return sB(e) && 1 === e.nodeType && !sJ(e)
                            }, rd.isEmpty = function(e) {
                                if (null == e) return !0;
                                if (sM(e) && (sU(e) || "string" == typeof e || "function" == typeof e.splice || sz(e) || s0(e) || sj(e))) return !e.length;
                                var t = nv(e);
                                if (t == y || t == w) return !e.size;
                                if (nO(e)) return !r9(e).length;
                                for (var r in e)
                                    if (eR.call(e, r)) return !1;
                                return !0
                            }, rd.isEqual = function(e, t) {
                                return r6(e, t)
                            }, rd.isEqualWith = function(e, t, i) {
                                var n = (i = "function" == typeof i ? i : r) ? i(e, t) : r;
                                return n === r ? r6(e, t, r, i) : !!n
                            }, rd.isError = sq, rd.isFinite = function(e) {
                                return "number" == typeof e && tQ(e)
                            }, rd.isFunction = sH, rd.isInteger = sF, rd.isLength = sV, rd.isMap = sG, rd.isMatch = function(e, t) {
                                return e === t || r2(e, t, np(t))
                            }, rd.isMatchWith = function(e, t, i) {
                                return i = "function" == typeof i ? i : r, r2(e, t, np(t), i)
                            }, rd.isNaN = function(e) {
                                return sW(e) && e != +e
                            }, rd.isNative = function(e) {
                                if (nI(e)) throw new eb("Unsupported core-js use. Try https://npms.io/search?q=ponyfill.");
                                return r8(e)
                            }, rd.isNil = function(e) {
                                return null == e
                            }, rd.isNull = function(e) {
                                return null === e
                            }, rd.isNumber = sW, rd.isObject = sK, rd.isObjectLike = sB, rd.isPlainObject = sJ, rd.isRegExp = sY, rd.isSafeInteger = function(e) {
                                return sF(e) && e >= -9007199254740991 && e <= 9007199254740991
                            }, rd.isSet = sZ, rd.isString = sX, rd.isSymbol = sQ, rd.isTypedArray = s0, rd.isUndefined = function(e) {
                                return e === r
                            }, rd.isWeakMap = function(e) {
                                return sB(e) && nv(e) == S
                            }, rd.isWeakSet = function(e) {
                                return sB(e) && "[object WeakSet]" == rZ(e)
                            }, rd.join = function(e, t) {
                                return null == e ? "" : t0.call(e, t)
                            }, rd.kebabCase = oI, rd.last = nZ, rd.lastIndexOf = function(e, t, i) {
                                var n = null == e ? 0 : e.length;
                                if (!n) return -1;
                                var s = n;
                                return i !== r && (s = (s = s2(i)) < 0 ? t5(n + s, 0) : t3(s, n - 1)), t == t ? function(e, t, r) {
                                    for (var i = r + 1; i-- && e[i] !== t;);
                                    return i
                                }(e, t, s) : tm(e, tE, s, !0)
                            }, rd.lowerCase = oO, rd.lowerFirst = oP, rd.lt = s1, rd.lte = s5, rd.max = function(e) {
                                return e && e.length ? rq(e, ok, rX) : r
                            }, rd.maxBy = function(e, t) {
                                return e && e.length ? rq(e, nh(t, 2), rX) : r
                            }, rd.mean = function(e) {
                                return tD(e, ok)
                            }, rd.meanBy = function(e, t) {
                                return tD(e, nh(t, 2))
                            }, rd.min = function(e) {
                                return e && e.length ? rq(e, ok, r7) : r
                            }, rd.minBy = function(e, t) {
                                return e && e.length ? rq(e, nh(t, 2), r7) : r
                            }, rd.stubArray = oY, rd.stubFalse = oZ, rd.stubObject = function() {
                                return {}
                            }, rd.stubString = function() {
                                return ""
                            }, rd.stubTrue = function() {
                                return !0
                            }, rd.multiply = o5, rd.nth = function(e, t) {
                                return e && e.length ? is(e, s2(t)) : r
                            }, rd.noConflict = function() {
                                return e3._ === this && (e3._ = eM), this
                            }, rd.noop = oF, rd.now = sv, rd.pad = function(e, t, r) {
                                e = s7(e);
                                var i = (t = s2(t)) ? tF(e) : 0;
                                if (!t || i >= t) return e;
                                var n = (t - i) / 2;
                                return i3(tY(n), r) + e + i3(tJ(n), r)
                            }, rd.padEnd = function(e, t, r) {
                                e = s7(e);
                                var i = (t = s2(t)) ? tF(e) : 0;
                                return t && i < t ? e + i3(t - i, r) : e
                            }, rd.padStart = function(e, t, r) {
                                e = s7(e);
                                var i = (t = s2(t)) ? tF(e) : 0;
                                return t && i < t ? i3(t - i, r) + e : e
                            }, rd.parseInt = function(e, t, r) {
                                return r || null == t ? t = 0 : t && (t = +t), t2(s7(e).replace(Z, ""), t || 0)
                            }, rd.random = function(e, t, i) {
                                if (i && "boolean" != typeof i && nE(e, t, i) && (t = i = r), i === r && ("boolean" == typeof t ? (i = t, t = r) : "boolean" == typeof e && (i = e, e = r)), e === r && t === r ? (e = 0, t = 1) : (e = s6(e), t === r ? (t = e, e = 0) : t = s6(t)), e > t) {
                                    var n = e;
                                    e = t, t = n
                                }
                                if (i || e % 1 || t % 1) {
                                    var s = t8();
                                    return t3(e + s * (t - e + eQ("1e-" + ((s + "").length - 1))), t)
                                }
                                return il(e, t)
                            }, rd.reduce = function(e, t, r) {
                                var i = sU(e) ? td : tO,
                                    n = arguments.length < 3;
                                return i(e, nh(t, 4), r, n, rk)
                            }, rd.reduceRight = function(e, t, r) {
                                var i = sU(e) ? tg : tO,
                                    n = arguments.length < 3;
                                return i(e, nh(t, 4), r, n, rz)
                            }, rd.repeat = function(e, t, i) {
                                return t = (i ? nE(e, t, i) : t === r) ? 1 : s2(t), ih(s7(e), t)
                            }, rd.replace = function() {
                                var e = arguments,
                                    t = s7(e[0]);
                                return e.length < 3 ? t : t.replace(e[1], e[2])
                            }, rd.result = function(e, t, i) {
                                t = iT(t, e);
                                var n = -1,
                                    s = t.length;
                                for (s || (s = 1, e = r); ++n < s;) {
                                    var o = null == e ? r : e[nk(t[n])];
                                    o === r && (n = s, o = i), e = sH(o) ? o.call(e) : o
                                }
                                return e
                            }, rd.round = o3, rd.runInContext = e, rd.sample = function(e) {
                                return (sU(e) ? rI : function(e) {
                                    return rI(ow(e))
                                })(e)
                            }, rd.size = function(e) {
                                if (null == e) return 0;
                                if (sM(e)) return sX(e) ? tF(e) : e.length;
                                var t = nv(e);
                                return t == y || t == w ? e.size : r9(e).length
                            }, rd.snakeCase = oC, rd.some = function(e, t, i) {
                                var n = sU(e) ? ty : i_;
                                return i && nE(e, t, i) && (t = r), n(e, nh(t, 3))
                            }, rd.sortedIndex = function(e, t) {
                                return im(e, t)
                            }, rd.sortedIndexBy = function(e, t, r) {
                                return ib(e, t, nh(r, 2))
                            }, rd.sortedIndexOf = function(e, t) {
                                var r = null == e ? 0 : e.length;
                                if (r) {
                                    var i = im(e, t);
                                    if (i < r && sN(e[i], t)) return i
                                }
                                return -1
                            }, rd.sortedLastIndex = function(e, t) {
                                return im(e, t, !0)
                            }, rd.sortedLastIndexBy = function(e, t, r) {
                                return ib(e, t, nh(r, 2), !0)
                            }, rd.sortedLastIndexOf = function(e, t) {
                                if (null == e ? 0 : e.length) {
                                    var r = im(e, t, !0) - 1;
                                    if (sN(e[r], t)) return r
                                }
                                return -1
                            }, rd.startCase = oA, rd.startsWith = function(e, t, r) {
                                return e = s7(e), r = null == r ? 0 : rT(s2(r), 0, e.length), t = iD(t), e.slice(r, r + t.length) == t
                            }, rd.subtract = o6, rd.sum = function(e) {
                                return e && e.length ? tP(e, ok) : 0
                            }, rd.sumBy = function(e, t) {
                                return e && e.length ? tP(e, nh(t, 2)) : 0
                            }, rd.template = function(e, t, i) {
                                var n = rd.templateSettings;
                                i && nE(e, t, i) && (t = r), e = s7(e), t = or({}, t, n, nt);
                                var s, o, a = or({}, t.imports, n.imports, nt),
                                    c = of (a),
                                    u = tN(a, c),
                                    l = 0,
                                    h = t.interpolate || ep,
                                    f = "__p += '",
                                    p = eS((t.escape || ep).source + "|" + h.source + "|" + (h === K ? es : ep).source + "|" + (t.evaluate || ep).source + "|$", "g"),
                                    d = "//# sourceURL=" + (eR.call(t, "sourceURL") ? (t.sourceURL + "").replace(/\s/g, " ") : "lodash.templateSources[" + ++eJ + "]") + `
`;
                                e.replace(p, function(t, r, i, n, a, c) {
                                    return i || (i = n), f += e.slice(l, c).replace(ed, tM), r && (s = !0, f += `' +
__e(` + r + `) +
'`), a && (o = !0, f += `';
` + a + `;
__p += '`), i && (f += `' +
((__t = (` + i + `)) == null ? '' : __t) +
'`), l = c + t.length, t
                                }), f += `';
`;
                                var g = eR.call(t, "variable") && t.variable;
                                if (g) {
                                    if (ei.test(g)) throw new eb("Invalid `variable` option passed into `_.template`")
                                } else f = `with (obj) {
` + f + `
}
`;
                                f = (o ? f.replace(L, "") : f).replace(M, "$1").replace(k, "$1;"), f = "function(" + (g || "obj") + `) {
` + (g ? "" : `obj || (obj = {});
`) + "var __t, __p = ''" + (s ? ", __e = _.escape" : "") + (o ? `, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
` : `;
`) + f + `return __p
}`;
                                var y = oT(function() {
                                    return ew(c, d + "return " + f).apply(r, u)
                                });
                                if (y.source = f, sq(y)) throw y;
                                return y
                            }, rd.times = function(e, t) {
                                if ((e = s2(e)) < 1 || e > 9007199254740991) return [];
                                var r = 4294967295,
                                    i = t3(e, 4294967295);
                                t = nh(t), e -= 4294967295;
                                for (var n = tC(i, t); ++r < e;) t(r);
                                return n
                            }, rd.toFinite = s6, rd.toInteger = s2, rd.toLength = s8, rd.toLower = function(e) {
                                return s7(e).toLowerCase()
                            }, rd.toNumber = s4, rd.toSafeInteger = function(e) {
                                return e ? rT(s2(e), -9007199254740991, 9007199254740991) : 0 === e ? e : 0
                            }, rd.toString = s7, rd.toUpper = function(e) {
                                return s7(e).toUpperCase()
                            }, rd.trim = function(e, t, i) {
                                if ((e = s7(e)) && (i || t === r)) return tA(e);
                                if (!e || !(t = iD(t))) return e;
                                var n = tV(e),
                                    s = tV(t),
                                    o = tT(n, s),
                                    a = tj(n, s) + 1;
                                return ij(n, o, a).join("")
                            }, rd.trimEnd = function(e, t, i) {
                                if ((e = s7(e)) && (i || t === r)) return e.slice(0, tK(e) + 1);
                                if (!e || !(t = iD(t))) return e;
                                var n = tV(e),
                                    s = tj(n, tV(t)) + 1;
                                return ij(n, 0, s).join("")
                            }, rd.trimStart = function(e, t, i) {
                                if ((e = s7(e)) && (i || t === r)) return e.replace(Z, "");
                                if (!e || !(t = iD(t))) return e;
                                var n = tV(e),
                                    s = tT(n, tV(t));
                                return ij(n, s).join("")
                            }, rd.truncate = function(e, t) {
                                var i = 30,
                                    n = "...";
                                if (sK(t)) {
                                    var s = "separator" in t ? t.separator : s;
                                    i = "length" in t ? s2(t.length) : i, n = "omission" in t ? iD(t.omission) : n
                                }
                                var o = (e = s7(e)).length;
                                if (tk(e)) {
                                    var a = tV(e);
                                    o = a.length
                                }
                                if (i >= o) return e;
                                var c = i - tF(n);
                                if (c < 1) return n;
                                var u = a ? ij(a, 0, c).join("") : e.slice(0, c);
                                if (s === r) return u + n;
                                if (a && (c += u.length - c), sY(s)) {
                                    if (e.slice(c).search(s)) {
                                        var l, h = u;
                                        for (s.global || (s = eS(s.source, s7(eo.exec(s)) + "g")), s.lastIndex = 0; l = s.exec(h);) var f = l.index;
                                        u = u.slice(0, f === r ? c : f)
                                    }
                                } else if (e.indexOf(iD(s), c) != c) {
                                    var p = u.lastIndexOf(s);
                                    p > -1 && (u = u.slice(0, p))
                                }
                                return u + n
                            }, rd.unescape = function(e) {
                                return (e = s7(e)) && q.test(e) ? e.replace(z, tB) : e
                            }, rd.uniqueId = function(e) {
                                var t = ++eT;
                                return s7(e) + t
                            }, rd.upperCase = ox, rd.upperFirst = oN, rd.each = su, rd.eachRight = sl, rd.first = nG, oH(rd, (ev = {}, rB(rd, function(e, t) {
                                eR.call(rd.prototype, t) || (ev[t] = e)
                            }), ev), {
                                chain: !1
                            }), rd.VERSION = "4.17.21", ta(["bind", "bindKey", "curry", "curryRight", "partial", "partialRight"], function(e) {
                                rd[e].placeholder = rd
                            }), ta(["drop", "take"], function(e, t) {
                                r_.prototype[e] = function(i) {
                                    i = i === r ? 1 : t5(s2(i), 0);
                                    var n = this.__filtered__ && !t ? new r_(this) : this.clone();
                                    return n.__filtered__ ? n.__takeCount__ = t3(i, n.__takeCount__) : n.__views__.push({
                                        size: t3(i, 4294967295),
                                        type: e + (n.__dir__ < 0 ? "Right" : "")
                                    }), n
                                }, r_.prototype[e + "Right"] = function(t) {
                                    return this.reverse()[e](t).reverse()
                                }
                            }), ta(["filter", "map", "takeWhile"], function(e, t) {
                                var r = t + 1,
                                    i = 1 == r || 3 == r;
                                r_.prototype[e] = function(e) {
                                    var t = this.clone();
                                    return t.__iteratees__.push({
                                        iteratee: nh(e, 3),
                                        type: r
                                    }), t.__filtered__ = t.__filtered__ || i, t
                                }
                            }), ta(["head", "last"], function(e, t) {
                                var r = "take" + (t ? "Right" : "");
                                r_.prototype[e] = function() {
                                    return this[r](1).value()[0]
                                }
                            }), ta(["initial", "tail"], function(e, t) {
                                var r = "drop" + (t ? "" : "Right");
                                r_.prototype[e] = function() {
                                    return this.__filtered__ ? new r_(this) : this[r](1)
                                }
                            }), r_.prototype.compact = function() {
                                return this.filter(ok)
                            }, r_.prototype.find = function(e) {
                                return this.filter(e).head()
                            }, r_.prototype.findLast = function(e) {
                                return this.reverse().find(e)
                            }, r_.prototype.invokeMap = ip(function(e, t) {
                                return "function" == typeof e ? new r_(this) : this.map(function(r) {
                                    return r5(r, e, t)
                                })
                            }), r_.prototype.reject = function(e) {
                                return this.filter(sO(nh(e)))
                            }, r_.prototype.slice = function(e, t) {
                                e = s2(e);
                                var i = this;
                                return i.__filtered__ && (e > 0 || t < 0) ? new r_(i) : (e < 0 ? i = i.takeRight(-e) : e && (i = i.drop(e)), t !== r && (i = (t = s2(t)) < 0 ? i.dropRight(-t) : i.take(t - e)), i)
                            }, r_.prototype.takeRightWhile = function(e) {
                                return this.reverse().takeWhile(e).reverse()
                            }, r_.prototype.toArray = function() {
                                return this.take(4294967295)
                            }, rB(r_.prototype, function(e, t) {
                                var i = /^(?:filter|find|map|reject)|While$/.test(t),
                                    n = /^(?:head|last)$/.test(t),
                                    s = rd[n ? "take" + ("last" == t ? "Right" : "") : t],
                                    o = n || /^find/.test(t);
                                s && (rd.prototype[t] = function() {
                                    var t = this.__wrapped__,
                                        a = n ? [1] : arguments,
                                        c = t instanceof r_,
                                        u = a[0],
                                        l = c || sU(t),
                                        h = function(e) {
                                            var t = s.apply(rd, tp([e], a));
                                            return n && f ? t[0] : t
                                        };
                                    l && i && "function" == typeof u && 1 != u.length && (c = l = !1);
                                    var f = this.__chain__,
                                        p = !!this.__actions__.length,
                                        d = o && !f,
                                        g = c && !p;
                                    if (!o && l) {
                                        t = g ? t : new r_(this);
                                        var y = e.apply(t, a);
                                        return y.__actions__.push({
                                            func: sn,
                                            args: [h],
                                            thisArg: r
                                        }), new rv(y, f)
                                    }
                                    return d && g ? e.apply(this, a) : (y = this.thru(h), d ? n ? y.value()[0] : y.value() : y)
                                })
                            }), ta(["pop", "push", "shift", "sort", "splice", "unshift"], function(e) {
                                var t = eP[e],
                                    r = /^(?:push|sort|unshift)$/.test(e) ? "tap" : "thru",
                                    i = /^(?:pop|shift)$/.test(e);
                                rd.prototype[e] = function() {
                                    var e = arguments;
                                    if (i && !this.__chain__) {
                                        var n = this.value();
                                        return t.apply(sU(n) ? n : [], e)
                                    }
                                    return this[r](function(r) {
                                        return t.apply(sU(r) ? r : [], e)
                                    })
                                }
                            }), rB(r_.prototype, function(e, t) {
                                var r = rd[t];
                                if (r) {
                                    var i = r.name + "";
                                    eR.call(rs, i) || (rs[i] = []), rs[i].push({
                                        name: t,
                                        func: r
                                    })
                                }
                            }), rs[iQ(r, 2).name] = [{
                                name: "wrapper",
                                func: r
                            }], r_.prototype.clone = function() {
                                var e = new r_(this.__wrapped__);
                                return e.__actions__ = iH(this.__actions__), e.__dir__ = this.__dir__, e.__filtered__ = this.__filtered__, e.__iteratees__ = iH(this.__iteratees__), e.__takeCount__ = this.__takeCount__, e.__views__ = iH(this.__views__), e
                            }, r_.prototype.reverse = function() {
                                if (this.__filtered__) {
                                    var e = new r_(this);
                                    e.__dir__ = -1, e.__filtered__ = !0
                                } else e = this.clone(), e.__dir__ *= -1;
                                return e
                            }, r_.prototype.value = function() {
                                var e = this.__wrapped__.value(),
                                    t = this.__dir__,
                                    r = sU(e),
                                    i = t < 0,
                                    n = r ? e.length : 0,
                                    s = function(e, t, r) {
                                        for (var i = -1, n = r.length; ++i < n;) {
                                            var s = r[i],
                                                o = s.size;
                                            switch (s.type) {
                                                case "drop":
                                                    e += o;
                                                    break;
                                                case "dropRight":
                                                    t -= o;
                                                    break;
                                                case "take":
                                                    t = t3(t, e + o);
                                                    break;
                                                case "takeRight":
                                                    e = t5(e, t - o)
                                            }
                                        }
                                        return {
                                            start: e,
                                            end: t
                                        }
                                    }(0, n, this.__views__),
                                    o = s.start,
                                    a = s.end,
                                    c = a - o,
                                    u = i ? a : o - 1,
                                    l = this.__iteratees__,
                                    h = l.length,
                                    f = 0,
                                    p = t3(c, this.__takeCount__);
                                if (!r || !i && n == c && p == c) return iC(e, this.__actions__);
                                var d = [];
                                e: for (; c-- && f < p;) {
                                    u += t;
                                    for (var g = -1, y = e[u]; ++g < h;) {
                                        var v = l[g],
                                            _ = v.iteratee,
                                            m = v.type,
                                            b = _(y);
                                        if (2 == m) y = b;
                                        else if (!b) {
                                            if (1 == m) continue e;
                                            break e
                                        }
                                    }
                                    d[f++] = y
                                }
                                return d
                            }, rd.prototype.at = ss, rd.prototype.chain = function() {
                                return si(this)
                            }, rd.prototype.commit = function() {
                                return new rv(this.value(), this.__chain__)
                            }, rd.prototype.next = function() {
                                this.__values__ === r && (this.__values__ = s3(this.value()));
                                var e = this.__index__ >= this.__values__.length,
                                    t = e ? r : this.__values__[this.__index__++];
                                return {
                                    done: e,
                                    value: t
                                }
                            }, rd.prototype.plant = function(e) {
                                for (var t, i = this; i instanceof ry;) {
                                    var n = n$(i);
                                    n.__index__ = 0, n.__values__ = r, t ? s.__wrapped__ = n : t = n;
                                    var s = n;
                                    i = i.__wrapped__
                                }
                                return s.__wrapped__ = e, t
                            }, rd.prototype.reverse = function() {
                                var e = this.__wrapped__;
                                if (e instanceof r_) {
                                    var t = e;
                                    return this.__actions__.length && (t = new r_(this)), (t = t.reverse()).__actions__.push({
                                        func: sn,
                                        args: [n1],
                                        thisArg: r
                                    }), new rv(t, this.__chain__)
                                }
                                return this.thru(n1)
                            }, rd.prototype.toJSON = rd.prototype.valueOf = rd.prototype.value = function() {
                                return iC(this.__wrapped__, this.__actions__)
                            }, rd.prototype.first = rd.prototype.head, e2 && (rd.prototype[e2] = function() {
                                return this
                            }), rd
                        }();
                    e2 ? ((e2.exports = tG)._ = tG, e6._ = tG) : e3._ = tG
                }).call(nq)
            }(nH, nH.exports);
            var nF = Object.defineProperty,
                nV = Object.defineProperties,
                nK = Object.getOwnPropertyDescriptors,
                nB = Object.getOwnPropertySymbols,
                nG = Object.prototype.hasOwnProperty,
                nW = Object.prototype.propertyIsEnumerable,
                nJ = (e, t, r) => t in e ? nF(e, t, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: r
                }) : e[t] = r,
                nY = (e, t) => {
                    for (var r in t || (t = {})) nG.call(t, r) && nJ(e, r, t[r]);
                    if (nB)
                        for (var r of nB(t)) nW.call(t, r) && nJ(e, r, t[r]);
                    return e
                },
                nZ = (e, t) => nV(e, nK(t));

            function nX(e, t, r) {
                let i;
                let n = nQ(e);
                return t.rpcMap && (i = t.rpcMap[n]), i || (i = `https://rpc.walletconnect.com/v1?chainId=eip155:${n}&projectId=${r}`), i
            }

            function nQ(e) {
                return e.includes("eip155") ? Number(e.split(":")[1]) : Number(e)
            }

            function n0(e) {
                return e.map(e => `${e.split(":")[0]}:${e.split(":")[1]}`)
            }

            function n1(e) {
                var t, r, i, n;
                let s = {};
                if (!tZ(e)) return s;
                for (let [o, a] of Object.entries(e)) {
                    let e = tV(o) ? [o] : a.chains,
                        c = a.methods || [],
                        u = a.events || [],
                        l = a.rpcMap || {},
                        h = tK(o);
                    s[h] = nZ(nY(nY({}, s[h]), a), {
                        chains: tT(e, null == (t = s[h]) ? void 0 : t.chains),
                        methods: tT(c, null == (r = s[h]) ? void 0 : r.methods),
                        events: tT(u, null == (i = s[h]) ? void 0 : i.events),
                        rpcMap: nY(nY({}, l), null == (n = s[h]) ? void 0 : n.rpcMap)
                    })
                }
                return s
            }

            function n5(e) {
                return e.includes(":") ? e.split(":")[2] : e
            }
            let n3 = {},
                n6 = e => n3[e],
                n2 = (e, t) => {
                    n3[e] = t
                };
            class n8 {
                constructor(e) {
                    this.name = "polkadot", this.namespace = e.namespace, this.events = n6("events"), this.client = n6("client"), this.chainId = this.getDefaultChain(), this.httpProviders = this.createHttpProviders()
                }
                updateNamespace(e) {
                    this.namespace = Object.assign(this.namespace, e)
                }
                requestAccounts() {
                    return this.getAccounts()
                }
                getDefaultChain() {
                    if (this.chainId) return this.chainId;
                    if (this.namespace.defaultChain) return this.namespace.defaultChain;
                    let e = this.namespace.chains[0];
                    if (!e) throw Error("ChainId not found");
                    return e.split(":")[1]
                }
                request(e) {
                    return this.namespace.methods.includes(e.request.method) ? this.client.request(e) : this.getHttpProvider().request(e.request)
                }
                setDefaultChain(e, t) {
                    if (this.chainId = e, !this.httpProviders[e]) {
                        let r = t || nX(`${this.name}:${e}`, this.namespace);
                        if (!r) throw Error(`No RPC url provided for chainId: ${e}`);
                        this.setHttpProvider(e, r)
                    }
                    this.events.emit(n$.DEFAULT_CHAIN_CHANGED, `${this.name}:${this.chainId}`)
                }
                getAccounts() {
                    let e = this.namespace.accounts;
                    return e && e.filter(e => e.split(":")[1] === this.chainId.toString()).map(e => e.split(":")[2]) || []
                }
                createHttpProviders() {
                    let e = {};
                    return this.namespace.chains.forEach(t => {
                        var r;
                        e[t] = this.createHttpProvider(t, null == (r = this.namespace.rpcMap) ? void 0 : r[t])
                    }), e
                }
                getHttpProvider() {
                    let e = `${this.name}:${this.chainId}`,
                        t = this.httpProviders[e];
                    if (typeof t > "u") throw Error(`JSON-RPC provider for ${e} not found`);
                    return t
                }
                setHttpProvider(e, t) {
                    let r = this.createHttpProvider(e, t);
                    r && (this.httpProviders[e] = r)
                }
                createHttpProvider(e, t) {
                    let r = t || nX(e, this.namespace);
                    return typeof r > "u" ? void 0 : new rD.r(new nM.Z(r, n6("disableProviderPing")))
                }
            }
            class n4 {
                constructor(e) {
                    this.name = "eip155", this.namespace = e.namespace, this.events = n6("events"), this.client = n6("client"), this.httpProviders = this.createHttpProviders(), this.chainId = parseInt(this.getDefaultChain())
                }
                async request(e) {
                    switch (e.request.method) {
                        case "eth_requestAccounts":
                        case "eth_accounts":
                            return this.getAccounts();
                        case "wallet_switchEthereumChain":
                            return await this.handleSwitchChain(e);
                        case "eth_chainId":
                            return parseInt(this.getDefaultChain())
                    }
                    return this.namespace.methods.includes(e.request.method) ? await this.client.request(e) : this.getHttpProvider().request(e.request)
                }
                updateNamespace(e) {
                    this.namespace = Object.assign(this.namespace, e)
                }
                setDefaultChain(e, t) {
                    let r = nQ(e);
                    if (!this.httpProviders[r]) {
                        let e = t || nX(`${this.name}:${r}`, this.namespace, this.client.core.projectId);
                        if (!e) throw Error(`No RPC url provided for chainId: ${r}`);
                        this.setHttpProvider(r, e)
                    }
                    this.chainId = r, this.events.emit(n$.DEFAULT_CHAIN_CHANGED, `${this.name}:${r}`)
                }
                requestAccounts() {
                    return this.getAccounts()
                }
                getDefaultChain() {
                    if (this.chainId) return this.chainId.toString();
                    if (this.namespace.defaultChain) return this.namespace.defaultChain;
                    let e = this.namespace.chains[0];
                    if (!e) throw Error("ChainId not found");
                    return e.split(":")[1]
                }
                createHttpProvider(e, t) {
                    let r = t || nX(`${this.name}:${e}`, this.namespace, this.client.core.projectId);
                    return typeof r > "u" ? void 0 : new rD.r(new nM.k(r, n6("disableProviderPing")))
                }
                setHttpProvider(e, t) {
                    let r = this.createHttpProvider(e, t);
                    r && (this.httpProviders[e] = r)
                }
                createHttpProviders() {
                    let e = {};
                    return this.namespace.chains.forEach(t => {
                        var r;
                        let i = nQ(t);
                        e[i] = this.createHttpProvider(i, null == (r = this.namespace.rpcMap) ? void 0 : r[t])
                    }), e
                }
                getAccounts() {
                    let e = this.namespace.accounts;
                    return e ? [...new Set(e.filter(e => e.split(":")[1] === this.chainId.toString()).map(e => e.split(":")[2]))] : []
                }
                getHttpProvider() {
                    let e = this.chainId,
                        t = this.httpProviders[e];
                    if (typeof t > "u") throw Error(`JSON-RPC provider for ${e} not found`);
                    return t
                }
                async handleSwitchChain(e) {
                    var t, r;
                    let i = e.request.params ? null == (t = e.request.params[0]) ? void 0 : t.chainId : "0x0",
                        n = parseInt(i = i.startsWith("0x") ? i : `0x${i}`, 16);
                    if (this.isChainApproved(n)) this.setDefaultChain(`${n}`);
                    else if (this.namespace.methods.includes("wallet_switchEthereumChain")) await this.client.request({
                        topic: e.topic,
                        request: {
                            method: e.request.method,
                            params: [{
                                chainId: i
                            }]
                        },
                        chainId: null == (r = this.namespace.chains) ? void 0 : r[0]
                    }), this.setDefaultChain(`${n}`);
                    else throw Error(`Failed to switch to chain 'eip155:${n}'. The chain is not approved or the wallet does not support 'wallet_switchEthereumChain' method.`);
                    return null
                }
                isChainApproved(e) {
                    return this.namespace.chains.includes(`${this.name}:${e}`)
                }
            }
            class n9 {
                constructor(e) {
                    this.name = "solana", this.namespace = e.namespace, this.events = n6("events"), this.client = n6("client"), this.chainId = this.getDefaultChain(), this.httpProviders = this.createHttpProviders()
                }
                updateNamespace(e) {
                    this.namespace = Object.assign(this.namespace, e)
                }
                requestAccounts() {
                    return this.getAccounts()
                }
                request(e) {
                    return this.namespace.methods.includes(e.request.method) ? this.client.request(e) : this.getHttpProvider().request(e.request)
                }
                setDefaultChain(e, t) {
                    if (!this.httpProviders[e]) {
                        let r = t || nX(`${this.name}:${e}`, this.namespace, this.client.core.projectId);
                        if (!r) throw Error(`No RPC url provided for chainId: ${e}`);
                        this.setHttpProvider(e, r)
                    }
                    this.chainId = e, this.events.emit(n$.DEFAULT_CHAIN_CHANGED, `${this.name}:${this.chainId}`)
                }
                getDefaultChain() {
                    if (this.chainId) return this.chainId;
                    if (this.namespace.defaultChain) return this.namespace.defaultChain;
                    let e = this.namespace.chains[0];
                    if (!e) throw Error("ChainId not found");
                    return e.split(":")[1]
                }
                getAccounts() {
                    let e = this.namespace.accounts;
                    return e ? [...new Set(e.filter(e => e.split(":")[1] === this.chainId.toString()).map(e => e.split(":")[2]))] : []
                }
                createHttpProviders() {
                    let e = {};
                    return this.namespace.chains.forEach(t => {
                        var r;
                        e[t] = this.createHttpProvider(t, null == (r = this.namespace.rpcMap) ? void 0 : r[t])
                    }), e
                }
                getHttpProvider() {
                    let e = `${this.name}:${this.chainId}`,
                        t = this.httpProviders[e];
                    if (typeof t > "u") throw Error(`JSON-RPC provider for ${e} not found`);
                    return t
                }
                setHttpProvider(e, t) {
                    let r = this.createHttpProvider(e, t);
                    r && (this.httpProviders[e] = r)
                }
                createHttpProvider(e, t) {
                    let r = t || nX(e, this.namespace, this.client.core.projectId);
                    return typeof r > "u" ? void 0 : new rD.r(new nM.Z(r, n6("disableProviderPing")))
                }
            }
            class n7 {
                constructor(e) {
                    this.name = "cosmos", this.namespace = e.namespace, this.events = n6("events"), this.client = n6("client"), this.chainId = this.getDefaultChain(), this.httpProviders = this.createHttpProviders()
                }
                updateNamespace(e) {
                    this.namespace = Object.assign(this.namespace, e)
                }
                requestAccounts() {
                    return this.getAccounts()
                }
                getDefaultChain() {
                    if (this.chainId) return this.chainId;
                    if (this.namespace.defaultChain) return this.namespace.defaultChain;
                    let e = this.namespace.chains[0];
                    if (!e) throw Error("ChainId not found");
                    return e.split(":")[1]
                }
                request(e) {
                    return this.namespace.methods.includes(e.request.method) ? this.client.request(e) : this.getHttpProvider().request(e.request)
                }
                setDefaultChain(e, t) {
                    if (this.chainId = e, !this.httpProviders[e]) {
                        let r = t || nX(`${this.name}:${e}`, this.namespace, this.client.core.projectId);
                        if (!r) throw Error(`No RPC url provided for chainId: ${e}`);
                        this.setHttpProvider(e, r)
                    }
                    this.events.emit(n$.DEFAULT_CHAIN_CHANGED, `${this.name}:${this.chainId}`)
                }
                getAccounts() {
                    let e = this.namespace.accounts;
                    return e ? [...new Set(e.filter(e => e.split(":")[1] === this.chainId.toString()).map(e => e.split(":")[2]))] : []
                }
                createHttpProviders() {
                    let e = {};
                    return this.namespace.chains.forEach(t => {
                        var r;
                        e[t] = this.createHttpProvider(t, null == (r = this.namespace.rpcMap) ? void 0 : r[t])
                    }), e
                }
                getHttpProvider() {
                    let e = `${this.name}:${this.chainId}`,
                        t = this.httpProviders[e];
                    if (typeof t > "u") throw Error(`JSON-RPC provider for ${e} not found`);
                    return t
                }
                setHttpProvider(e, t) {
                    let r = this.createHttpProvider(e, t);
                    r && (this.httpProviders[e] = r)
                }
                createHttpProvider(e, t) {
                    let r = t || nX(e, this.namespace, this.client.core.projectId);
                    return typeof r > "u" ? void 0 : new rD.r(new nM.Z(r, n6("disableProviderPing")))
                }
            }
            class se {
                constructor(e) {
                    this.name = "cip34", this.namespace = e.namespace, this.events = n6("events"), this.client = n6("client"), this.chainId = this.getDefaultChain(), this.httpProviders = this.createHttpProviders()
                }
                updateNamespace(e) {
                    this.namespace = Object.assign(this.namespace, e)
                }
                requestAccounts() {
                    return this.getAccounts()
                }
                getDefaultChain() {
                    if (this.chainId) return this.chainId;
                    if (this.namespace.defaultChain) return this.namespace.defaultChain;
                    let e = this.namespace.chains[0];
                    if (!e) throw Error("ChainId not found");
                    return e.split(":")[1]
                }
                request(e) {
                    return this.namespace.methods.includes(e.request.method) ? this.client.request(e) : this.getHttpProvider().request(e.request)
                }
                setDefaultChain(e, t) {
                    if (this.chainId = e, !this.httpProviders[e]) {
                        let r = t || this.getCardanoRPCUrl(e);
                        if (!r) throw Error(`No RPC url provided for chainId: ${e}`);
                        this.setHttpProvider(e, r)
                    }
                    this.events.emit(n$.DEFAULT_CHAIN_CHANGED, `${this.name}:${this.chainId}`)
                }
                getAccounts() {
                    let e = this.namespace.accounts;
                    return e ? [...new Set(e.filter(e => e.split(":")[1] === this.chainId.toString()).map(e => e.split(":")[2]))] : []
                }
                createHttpProviders() {
                    let e = {};
                    return this.namespace.chains.forEach(t => {
                        let r = this.getCardanoRPCUrl(t);
                        e[t] = this.createHttpProvider(t, r)
                    }), e
                }
                getHttpProvider() {
                    let e = `${this.name}:${this.chainId}`,
                        t = this.httpProviders[e];
                    if (typeof t > "u") throw Error(`JSON-RPC provider for ${e} not found`);
                    return t
                }
                getCardanoRPCUrl(e) {
                    let t = this.namespace.rpcMap;
                    if (t) return t[e]
                }
                setHttpProvider(e, t) {
                    let r = this.createHttpProvider(e, t);
                    r && (this.httpProviders[e] = r)
                }
                createHttpProvider(e, t) {
                    let r = t || this.getCardanoRPCUrl(e);
                    return typeof r > "u" ? void 0 : new rD.r(new nM.Z(r, n6("disableProviderPing")))
                }
            }
            class st {
                constructor(e) {
                    this.name = "elrond", this.namespace = e.namespace, this.events = n6("events"), this.client = n6("client"), this.chainId = this.getDefaultChain(), this.httpProviders = this.createHttpProviders()
                }
                updateNamespace(e) {
                    this.namespace = Object.assign(this.namespace, e)
                }
                requestAccounts() {
                    return this.getAccounts()
                }
                request(e) {
                    return this.namespace.methods.includes(e.request.method) ? this.client.request(e) : this.getHttpProvider().request(e.request)
                }
                setDefaultChain(e, t) {
                    if (!this.httpProviders[e]) {
                        let r = t || nX(`${this.name}:${e}`, this.namespace, this.client.core.projectId);
                        if (!r) throw Error(`No RPC url provided for chainId: ${e}`);
                        this.setHttpProvider(e, r)
                    }
                    this.chainId = e, this.events.emit(n$.DEFAULT_CHAIN_CHANGED, `${this.name}:${this.chainId}`)
                }
                getDefaultChain() {
                    if (this.chainId) return this.chainId;
                    if (this.namespace.defaultChain) return this.namespace.defaultChain;
                    let e = this.namespace.chains[0];
                    if (!e) throw Error("ChainId not found");
                    return e.split(":")[1]
                }
                getAccounts() {
                    let e = this.namespace.accounts;
                    return e ? [...new Set(e.filter(e => e.split(":")[1] === this.chainId.toString()).map(e => e.split(":")[2]))] : []
                }
                createHttpProviders() {
                    let e = {};
                    return this.namespace.chains.forEach(t => {
                        var r;
                        e[t] = this.createHttpProvider(t, null == (r = this.namespace.rpcMap) ? void 0 : r[t])
                    }), e
                }
                getHttpProvider() {
                    let e = `${this.name}:${this.chainId}`,
                        t = this.httpProviders[e];
                    if (typeof t > "u") throw Error(`JSON-RPC provider for ${e} not found`);
                    return t
                }
                setHttpProvider(e, t) {
                    let r = this.createHttpProvider(e, t);
                    r && (this.httpProviders[e] = r)
                }
                createHttpProvider(e, t) {
                    let r = t || nX(e, this.namespace, this.client.core.projectId);
                    return typeof r > "u" ? void 0 : new rD.r(new nM.Z(r, n6("disableProviderPing")))
                }
            }
            class sr {
                constructor(e) {
                    this.name = "multiversx", this.namespace = e.namespace, this.events = n6("events"), this.client = n6("client"), this.chainId = this.getDefaultChain(), this.httpProviders = this.createHttpProviders()
                }
                updateNamespace(e) {
                    this.namespace = Object.assign(this.namespace, e)
                }
                requestAccounts() {
                    return this.getAccounts()
                }
                request(e) {
                    return this.namespace.methods.includes(e.request.method) ? this.client.request(e) : this.getHttpProvider().request(e.request)
                }
                setDefaultChain(e, t) {
                    if (!this.httpProviders[e]) {
                        let r = t || nX(`${this.name}:${e}`, this.namespace, this.client.core.projectId);
                        if (!r) throw Error(`No RPC url provided for chainId: ${e}`);
                        this.setHttpProvider(e, r)
                    }
                    this.chainId = e, this.events.emit(n$.DEFAULT_CHAIN_CHANGED, `${this.name}:${this.chainId}`)
                }
                getDefaultChain() {
                    if (this.chainId) return this.chainId;
                    if (this.namespace.defaultChain) return this.namespace.defaultChain;
                    let e = this.namespace.chains[0];
                    if (!e) throw Error("ChainId not found");
                    return e.split(":")[1]
                }
                getAccounts() {
                    let e = this.namespace.accounts;
                    return e ? [...new Set(e.filter(e => e.split(":")[1] === this.chainId.toString()).map(e => e.split(":")[2]))] : []
                }
                createHttpProviders() {
                    let e = {};
                    return this.namespace.chains.forEach(t => {
                        var r;
                        e[t] = this.createHttpProvider(t, null == (r = this.namespace.rpcMap) ? void 0 : r[t])
                    }), e
                }
                getHttpProvider() {
                    let e = `${this.name}:${this.chainId}`,
                        t = this.httpProviders[e];
                    if (typeof t > "u") throw Error(`JSON-RPC provider for ${e} not found`);
                    return t
                }
                setHttpProvider(e, t) {
                    let r = this.createHttpProvider(e, t);
                    r && (this.httpProviders[e] = r)
                }
                createHttpProvider(e, t) {
                    let r = t || nX(e, this.namespace, this.client.core.projectId);
                    return typeof r > "u" ? void 0 : new rD.r(new nM.Z(r, n6("disableProviderPing")))
                }
            }
            var si = Object.defineProperty,
                sn = Object.defineProperties,
                ss = Object.getOwnPropertyDescriptors,
                so = Object.getOwnPropertySymbols,
                sa = Object.prototype.hasOwnProperty,
                sc = Object.prototype.propertyIsEnumerable,
                su = (e, t, r) => t in e ? si(e, t, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: r
                }) : e[t] = r,
                sl = (e, t) => {
                    for (var r in t || (t = {})) sa.call(t, r) && su(e, r, t[r]);
                    if (so)
                        for (var r of so(t)) sc.call(t, r) && su(e, r, t[r]);
                    return e
                },
                sh = (e, t) => sn(e, ss(t));
            class sf {
                constructor(e) {
                    this.events = new(_()), this.rpcProviders = {}, this.shouldAbortPairingAttempt = !1, this.maxPairingAttempts = 10, this.disableProviderPing = !1, this.providerOpts = e, this.logger = "u" > typeof e ? .logger && "string" != typeof e ? .logger ? e.logger : (0, rr.pino)((0, rr.getDefaultLoggerOptions)({
                        level: e ? .logger || nk
                    })), this.disableProviderPing = e ? .disableProviderPing || !1
                }
                static async init(e) {
                    let t = new sf(e);
                    return await t.initialize(), t
                }
                async request(e, t) {
                    let [r, i] = this.validateChain(t);
                    if (!this.session) throw Error("Please call connect() before request()");
                    return await this.getProvider(r).request({
                        request: sl({}, e),
                        chainId: `${r}:${i}`,
                        topic: this.session.topic
                    })
                }
                sendAsync(e, t, r) {
                    this.request(e, r).then(e => t(null, e)).catch(e => t(e, void 0))
                }
                async enable() {
                    if (!this.client) throw Error("Sign Client not initialized");
                    return this.session || await this.connect({
                        namespaces: this.namespaces,
                        optionalNamespaces: this.optionalNamespaces,
                        sessionProperties: this.sessionProperties
                    }), await this.requestAccounts()
                }
                async disconnect() {
                    var e;
                    if (!this.session) throw Error("Please call connect() before enable()");
                    await this.client.disconnect({
                        topic: null == (e = this.session) ? void 0 : e.topic,
                        reason: tJ("USER_DISCONNECTED")
                    }), await this.cleanup()
                }
                async connect(e) {
                    if (!this.client) throw Error("Sign Client not initialized");
                    if (this.setNamespaces(e), await this.cleanupPendingPairings(), !e.skipPairing) return await this.pair(e.pairingTopic)
                }
                on(e, t) {
                    this.events.on(e, t)
                }
                once(e, t) {
                    this.events.once(e, t)
                }
                removeListener(e, t) {
                    this.events.removeListener(e, t)
                }
                off(e, t) {
                    this.events.off(e, t)
                }
                get isWalletConnect() {
                    return !0
                }
                async pair(e) {
                    this.shouldAbortPairingAttempt = !1;
                    let t = 0;
                    do {
                        if (this.shouldAbortPairingAttempt) throw Error("Pairing aborted");
                        if (t >= this.maxPairingAttempts) throw Error("Max auto pairing attempts reached");
                        let {
                            uri: r,
                            approval: i
                        } = await this.client.connect({
                            pairingTopic: e,
                            requiredNamespaces: this.namespaces,
                            optionalNamespaces: this.optionalNamespaces,
                            sessionProperties: this.sessionProperties
                        });
                        r && (this.uri = r, this.events.emit("display_uri", r)), await i().then(e => {
                            this.session = e, this.namespaces || (this.namespaces = function(e) {
                                let t = {};
                                for (let [r, i] of Object.entries(e)) {
                                    let e = i.methods || [],
                                        n = i.events || [],
                                        s = i.accounts || [],
                                        o = tV(r) ? [r] : i.chains ? i.chains : n0(i.accounts);
                                    t[r] = {
                                        chains: o,
                                        methods: e,
                                        events: n,
                                        accounts: s
                                    }
                                }
                                return t
                            }(e.namespaces), this.persist("namespaces", this.namespaces))
                        }).catch(e => {
                            if (e.message !== n_) throw e;
                            t++
                        })
                    } while (!this.session);
                    return this.onConnect(), this.session
                }
                setDefaultChain(e, t) {
                    try {
                        if (!this.session) return;
                        let [r, i] = this.validateChain(e);
                        this.getProvider(r).setDefaultChain(i, t)
                    } catch (e) {
                        if (!/Please call connect/.test(e.message)) throw e
                    }
                }
                async cleanupPendingPairings(e = {}) {
                    this.logger.info("Cleaning up inactive pairings...");
                    let t = this.client.pairing.getAll();
                    if (tY(t)) {
                        for (let r of t) e.deletePairings ? this.client.core.expirer.set(r.topic, 0) : await this.client.core.relayer.subscriber.unsubscribe(r.topic);
                        this.logger.info(`Inactive pairings cleared: ${t.length}`)
                    }
                }
                abortPairingAttempt() {
                    this.shouldAbortPairingAttempt = !0
                }
                async checkStorage() {
                    if (this.namespaces = await this.getFromStore("namespaces"), this.optionalNamespaces = await this.getFromStore("optionalNamespaces") || {}, this.client.session.length) {
                        let e = this.client.session.keys.length - 1;
                        this.session = this.client.session.get(this.client.session.keys[e]), this.createProviders()
                    }
                }
                async initialize() {
                    this.logger.trace("Initialized"), await this.createClient(), await this.checkStorage(), this.registerEventListeners()
                }
                async createClient() {
                    this.client = this.providerOpts.client || await nL.init({
                        logger: this.providerOpts.logger || nk,
                        relayUrl: this.providerOpts.relayUrl || "wss://relay.walletconnect.com",
                        projectId: this.providerOpts.projectId,
                        metadata: this.providerOpts.metadata,
                        storageOptions: this.providerOpts.storageOptions,
                        name: this.providerOpts.name
                    }), this.logger.trace("SignClient Initialized")
                }
                createProviders() {
                    if (!this.client) throw Error("Sign Client not initialized");
                    if (!this.session) throw Error("Session not initialized. Please call connect() before enable()");
                    let e = [...new Set(Object.keys(this.session.namespaces).map(e => tK(e)))];
                    n2("client", this.client), n2("events", this.events), n2("disableProviderPing", this.disableProviderPing), e.forEach(e => {
                        if (!this.session) return;
                        let t = function(e, t) {
                                let r = Object.keys(t.namespaces).filter(t => t.includes(e));
                                if (!r.length) return [];
                                let i = [];
                                return r.forEach(e => {
                                    let r = t.namespaces[e].accounts;
                                    i.push(...r)
                                }), i
                            }(e, this.session),
                            r = n0(t),
                            i = sh(sl({}, function(e = {}, t = {}) {
                                let r = n1(e),
                                    i = n1(t);
                                return nH.exports.merge(r, i)
                            }(this.namespaces, this.optionalNamespaces)[e]), {
                                accounts: t,
                                chains: r
                            });
                        switch (e) {
                            case "eip155":
                                this.rpcProviders[e] = new n4({
                                    namespace: i
                                });
                                break;
                            case "solana":
                                this.rpcProviders[e] = new n9({
                                    namespace: i
                                });
                                break;
                            case "cosmos":
                                this.rpcProviders[e] = new n7({
                                    namespace: i
                                });
                                break;
                            case "polkadot":
                                this.rpcProviders[e] = new n8({
                                    namespace: i
                                });
                                break;
                            case "cip34":
                                this.rpcProviders[e] = new se({
                                    namespace: i
                                });
                                break;
                            case "elrond":
                                this.rpcProviders[e] = new st({
                                    namespace: i
                                });
                                break;
                            case "multiversx":
                                this.rpcProviders[e] = new sr({
                                    namespace: i
                                })
                        }
                    })
                }
                registerEventListeners() {
                    if (typeof this.client > "u") throw Error("Sign Client is not initialized");
                    this.client.on("session_ping", e => {
                        this.events.emit("session_ping", e)
                    }), this.client.on("session_event", e => {
                        let {
                            params: t
                        } = e, {
                            event: r
                        } = t;
                        if ("accountsChanged" === r.name) {
                            let e = r.data;
                            e && tY(e) && this.events.emit("accountsChanged", e.map(n5))
                        } else "chainChanged" === r.name ? this.onChainChanged(t.chainId) : this.events.emit(r.name, r.data);
                        this.events.emit("session_event", e)
                    }), this.client.on("session_update", ({
                        topic: e,
                        params: t
                    }) => {
                        var r;
                        let {
                            namespaces: i
                        } = t, n = null == (r = this.client) ? void 0 : r.session.get(e);
                        this.session = sh(sl({}, n), {
                            namespaces: i
                        }), this.onSessionUpdate(), this.events.emit("session_update", {
                            topic: e,
                            params: t
                        })
                    }), this.client.on("session_delete", async e => {
                        await this.cleanup(), this.events.emit("session_delete", e), this.events.emit("disconnect", sh(sl({}, tJ("USER_DISCONNECTED")), {
                            data: e.topic
                        }))
                    }), this.on(n$.DEFAULT_CHAIN_CHANGED, e => {
                        this.onChainChanged(e, !0)
                    })
                }
                getProvider(e) {
                    if (!this.rpcProviders[e]) throw Error(`Provider not found: ${e}`);
                    return this.rpcProviders[e]
                }
                onSessionUpdate() {
                    Object.keys(this.rpcProviders).forEach(e => {
                        var t;
                        this.getProvider(e).updateNamespace(null == (t = this.session) ? void 0 : t.namespaces[e])
                    })
                }
                setNamespaces(e) {
                    let {
                        namespaces: t,
                        optionalNamespaces: r,
                        sessionProperties: i
                    } = e;
                    t && Object.keys(t).length && (this.namespaces = t), r && Object.keys(r).length && (this.optionalNamespaces = r), this.sessionProperties = i, this.persist("namespaces", t), this.persist("optionalNamespaces", r)
                }
                validateChain(e) {
                    let [t, r] = e ? .split(":") || ["", ""];
                    if (!this.namespaces || !Object.keys(this.namespaces).length) return [t, r];
                    if (t && !Object.keys(this.namespaces || {}).map(e => tK(e)).includes(t)) throw Error(`Namespace '${t}' is not configured. Please call connect() first with namespace config.`);
                    if (t && r) return [t, r];
                    let i = tK(Object.keys(this.namespaces)[0]),
                        n = this.rpcProviders[i].getDefaultChain();
                    return [i, n]
                }
                async requestAccounts() {
                    let [e] = this.validateChain();
                    return await this.getProvider(e).requestAccounts()
                }
                onChainChanged(e, t = !1) {
                    var r;
                    if (!this.namespaces) return;
                    let [i, n] = this.validateChain(e);
                    t || this.getProvider(i).setDefaultChain(n), (null != (r = this.namespaces[i]) ? r : this.namespaces[`${i}:${n}`]).defaultChain = n, this.persist("namespaces", this.namespaces), this.events.emit("chainChanged", n)
                }
                onConnect() {
                    this.createProviders(), this.events.emit("connect", {
                        session: this.session
                    })
                }
                async cleanup() {
                    this.session = void 0, this.namespaces = void 0, this.optionalNamespaces = void 0, this.sessionProperties = void 0, this.persist("namespaces", void 0), this.persist("optionalNamespaces", void 0), this.persist("sessionProperties", void 0), await this.cleanupPendingPairings({
                        deletePairings: !0
                    })
                }
                persist(e, t) {
                    this.client.core.storage.setItem(`${nz}/${e}`, t)
                }
                async getFromStore(e) {
                    return await this.client.core.storage.getItem(`${nz}/${e}`)
                }
            }
            let sp = ["eth_sendTransaction", "personal_sign"],
                sd = ["eth_accounts", "eth_requestAccounts", "eth_sendRawTransaction", "eth_sign", "eth_signTransaction", "eth_signTypedData", "eth_signTypedData_v3", "eth_signTypedData_v4", "wallet_switchEthereumChain", "wallet_addEthereumChain", "wallet_getPermissions", "wallet_requestPermissions", "wallet_registerOnboarding", "wallet_watchAsset", "wallet_scanQRCode"],
                sg = ["chainChanged", "accountsChanged"],
                sy = ["message", "disconnect", "connect"];
            var sv = Object.defineProperty,
                s_ = Object.defineProperties,
                sm = Object.getOwnPropertyDescriptors,
                sb = Object.getOwnPropertySymbols,
                sw = Object.prototype.hasOwnProperty,
                sE = Object.prototype.propertyIsEnumerable,
                sD = (e, t, r) => t in e ? sv(e, t, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: r
                }) : e[t] = r,
                sS = (e, t) => {
                    for (var r in t || (t = {})) sw.call(t, r) && sD(e, r, t[r]);
                    if (sb)
                        for (var r of sb(t)) sE.call(t, r) && sD(e, r, t[r]);
                    return e
                },
                sI = (e, t) => s_(e, sm(t));

            function sO(e) {
                return Number(e[0].split(":")[1])
            }

            function sP(e) {
                return `0x${e.toString(16)}`
            }
            class sC {
                constructor() {
                    this.events = new v.EventEmitter, this.namespace = "eip155", this.accounts = [], this.chainId = 1, this.STORAGE_KEY = "wc@2:ethereum_provider:", this.on = (e, t) => (this.events.on(e, t), this), this.once = (e, t) => (this.events.once(e, t), this), this.removeListener = (e, t) => (this.events.removeListener(e, t), this), this.off = (e, t) => (this.events.off(e, t), this), this.parseAccount = e => this.isCompatibleChainId(e) ? this.parseAccountId(e).address : e, this.signer = {}, this.rpc = {}
                }
                static async init(e) {
                    let t = new sC;
                    return await t.initialize(e), t
                }
                async request(e) {
                    return await this.signer.request(e, this.formatChainId(this.chainId))
                }
                sendAsync(e, t) {
                    this.signer.sendAsync(e, t, this.formatChainId(this.chainId))
                }
                get connected() {
                    return !!this.signer.client && this.signer.client.core.relayer.connected
                }
                get connecting() {
                    return !!this.signer.client && this.signer.client.core.relayer.connecting
                }
                async enable() {
                    return this.session || await this.connect(), await this.request({
                        method: "eth_requestAccounts"
                    })
                }
                async connect(e) {
                    if (!this.signer.client) throw Error("Provider not initialized. Call init() first");
                    this.loadConnectOpts(e);
                    let {
                        required: t,
                        optional: r
                    } = function(e) {
                        let {
                            chains: t,
                            optionalChains: r,
                            methods: i,
                            optionalMethods: n,
                            events: s,
                            optionalEvents: o,
                            rpcMap: a
                        } = e;
                        if (!tY(t)) throw Error("Invalid chains");
                        let c = {
                                chains: t,
                                methods: i || sp,
                                events: s || sg,
                                rpcMap: sS({}, t.length ? {
                                    [sO(t)]: a[sO(t)]
                                } : {})
                            },
                            u = s ? .filter(e => !sg.includes(e)),
                            l = i ? .filter(e => !sp.includes(e));
                        if (!r && !o && !n && !(null != u && u.length) && !(null != l && l.length)) return {
                            required: t.length ? c : void 0
                        };
                        let h = u ? .length && l ? .length || !r,
                            f = {
                                chains: [...new Set(h ? c.chains.concat(r || []) : r)],
                                methods: [...new Set(c.methods.concat(null != n && n.length ? n : sd))],
                                events: [...new Set(c.events.concat(o || sy))],
                                rpcMap: a
                            };
                        return {
                            required: t.length ? c : void 0,
                            optional: r.length ? f : void 0
                        }
                    }(this.rpc);
                    try {
                        let i = await new Promise(async (i, n) => {
                            var s;
                            this.rpc.showQrModal && (null == (s = this.modal) || s.subscribeModal(e => {
                                e.open || this.signer.session || (this.signer.abortPairingAttempt(), n(Error("Connection request reset. Please try again.")))
                            })), await this.signer.connect(sI(sS({
                                namespaces: sS({}, t && {
                                    [this.namespace]: t
                                })
                            }, r && {
                                optionalNamespaces: {
                                    [this.namespace]: r
                                }
                            }), {
                                pairingTopic: e ? .pairingTopic
                            })).then(e => {
                                i(e)
                            }).catch(e => {
                                n(Error(e.message))
                            })
                        });
                        if (!i) return;
                        this.setChainIds(this.rpc.chains);
                        let n = function(e, t = []) {
                            let r = [];
                            return Object.keys(e).forEach(i => {
                                if (t.length && !t.includes(i)) return;
                                let n = e[i];
                                r.push(...n.accounts)
                            }), r
                        }(i.namespaces, [this.namespace]);
                        this.setAccounts(n), this.events.emit("connect", {
                            chainId: sP(this.chainId)
                        })
                    } catch (e) {
                        throw this.signer.logger.error(e), e
                    } finally {
                        this.modal && this.modal.closeModal()
                    }
                }
                async disconnect() {
                    this.session && await this.signer.disconnect(), this.reset()
                }
                get isWalletConnect() {
                    return !0
                }
                get session() {
                    return this.signer.session
                }
                registerEventListeners() {
                    this.signer.on("session_event", e => {
                        let {
                            params: t
                        } = e, {
                            event: r
                        } = t;
                        "accountsChanged" === r.name ? (this.accounts = this.parseAccounts(r.data), this.events.emit("accountsChanged", this.accounts)) : "chainChanged" === r.name ? this.setChainId(this.formatChainId(r.data)) : this.events.emit(r.name, r.data), this.events.emit("session_event", e)
                    }), this.signer.on("chainChanged", e => {
                        let t = parseInt(e);
                        this.chainId = t, this.events.emit("chainChanged", sP(this.chainId)), this.persist()
                    }), this.signer.on("session_update", e => {
                        this.events.emit("session_update", e)
                    }), this.signer.on("session_delete", e => {
                        this.reset(), this.events.emit("session_delete", e), this.events.emit("disconnect", sI(sS({}, tJ("USER_DISCONNECTED")), {
                            data: e.topic,
                            name: "USER_DISCONNECTED"
                        }))
                    }), this.signer.on("display_uri", e => {
                        var t, r;
                        this.rpc.showQrModal && (null == (t = this.modal) || t.closeModal(), null == (r = this.modal) || r.openModal({
                            uri: e
                        })), this.events.emit("display_uri", e)
                    })
                }
                switchEthereumChain(e) {
                    this.request({
                        method: "wallet_switchEthereumChain",
                        params: [{
                            chainId: e.toString(16)
                        }]
                    })
                }
                isCompatibleChainId(e) {
                    return "string" == typeof e && e.startsWith(`${this.namespace}:`)
                }
                formatChainId(e) {
                    return `${this.namespace}:${e}`
                }
                parseChainId(e) {
                    return Number(e.split(":")[1])
                }
                setChainIds(e) {
                    let t = e.filter(e => this.isCompatibleChainId(e)).map(e => this.parseChainId(e));
                    t.length && (this.chainId = t[0], this.events.emit("chainChanged", sP(this.chainId)), this.persist())
                }
                setChainId(e) {
                    if (this.isCompatibleChainId(e)) {
                        let t = this.parseChainId(e);
                        this.chainId = t, this.switchEthereumChain(t)
                    }
                }
                parseAccountId(e) {
                    let [t, r, i] = e.split(":");
                    return {
                        chainId: `${t}:${r}`,
                        address: i
                    }
                }
                setAccounts(e) {
                    this.accounts = e.filter(e => this.parseChainId(this.parseAccountId(e).chainId) === this.chainId).map(e => this.parseAccountId(e).address), this.events.emit("accountsChanged", this.accounts)
                }
                getRpcConfig(e) {
                    var t, r;
                    let i = null != (t = e ? .chains) ? t : [],
                        n = null != (r = e ? .optionalChains) ? r : [],
                        s = i.concat(n);
                    if (!s.length) throw Error("No chains specified in either `chains` or `optionalChains`");
                    let o = i.length ? e ? .methods || sp : [],
                        a = i.length ? e ? .events || sg : [],
                        c = e ? .optionalMethods || [],
                        u = e ? .optionalEvents || [],
                        l = e ? .rpcMap || this.buildRpcMap(s, e.projectId),
                        h = e ? .qrModalOptions || void 0;
                    return {
                        chains: i ? .map(e => this.formatChainId(e)),
                        optionalChains: n.map(e => this.formatChainId(e)),
                        methods: o,
                        events: a,
                        optionalMethods: c,
                        optionalEvents: u,
                        rpcMap: l,
                        showQrModal: !!(null != e && e.showQrModal),
                        qrModalOptions: h,
                        projectId: e.projectId,
                        metadata: e.metadata
                    }
                }
                buildRpcMap(e, t) {
                    let r = {};
                    return e.forEach(e => {
                        r[e] = this.getRpcUrl(e, t)
                    }), r
                }
                async initialize(e) {
                    if (this.rpc = this.getRpcConfig(e), this.chainId = this.rpc.chains.length ? sO(this.rpc.chains) : sO(this.rpc.optionalChains), this.signer = await sf.init({
                            projectId: this.rpc.projectId,
                            metadata: this.rpc.metadata,
                            disableProviderPing: e.disableProviderPing,
                            relayUrl: e.relayUrl,
                            storageOptions: e.storageOptions
                        }), this.registerEventListeners(), await this.loadPersistedSession(), this.rpc.showQrModal) {
                        let e;
                        try {
                            let {
                                WalletConnectModal: t
                            } = await r.e(4396).then(r.bind(r, 34396));
                            e = t
                        } catch {
                            throw Error("To use QR modal, please install @walletconnect/modal package")
                        }
                        if (e) try {
                            this.modal = new e(sS({
                                walletConnectVersion: 2,
                                projectId: this.rpc.projectId,
                                standaloneChains: this.rpc.chains
                            }, this.rpc.qrModalOptions))
                        } catch (e) {
                            throw this.signer.logger.error(e), Error("Could not generate WalletConnectModal Instance")
                        }
                    }
                }
                loadConnectOpts(e) {
                    if (!e) return;
                    let {
                        chains: t,
                        optionalChains: r,
                        rpcMap: i
                    } = e;
                    t && tY(t) && (this.rpc.chains = t.map(e => this.formatChainId(e)), t.forEach(e => {
                        this.rpc.rpcMap[e] = i ? .[e] || this.getRpcUrl(e)
                    })), r && tY(r) && (this.rpc.optionalChains = [], this.rpc.optionalChains = r ? .map(e => this.formatChainId(e)), r.forEach(e => {
                        this.rpc.rpcMap[e] = i ? .[e] || this.getRpcUrl(e)
                    }))
                }
                getRpcUrl(e, t) {
                    var r;
                    return (null == (r = this.rpc.rpcMap) ? void 0 : r[e]) || `https://rpc.walletconnect.com/v1/?chainId=eip155:${e}&projectId=${t||this.rpc.projectId}`
                }
                async loadPersistedSession() {
                    if (!this.session) return;
                    let e = await this.signer.client.core.storage.getItem(`${this.STORAGE_KEY}/chainId`),
                        t = this.session.namespaces[`${this.namespace}:${e}`] ? this.session.namespaces[`${this.namespace}:${e}`] : this.session.namespaces[this.namespace];
                    this.setChainIds(e ? [this.formatChainId(e)] : t ? .accounts), this.setAccounts(t ? .accounts)
                }
                reset() {
                    this.chainId = 1, this.accounts = []
                }
                persist() {
                    this.session && this.signer.client.core.storage.setItem(`${this.STORAGE_KEY}/chainId`, this.chainId)
                }
                parseAccounts(e) {
                    return "string" == typeof e || e instanceof String ? [this.parseAccount(e)] : e.map(e => this.parseAccount(e))
                }
            }
        },
        3142: function(e, t, r) {
            "use strict";
            r.d(t, {
                q: function() {
                    return i
                }
            });
            class i {}
        },
        30964: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                IEvents: function() {
                    return i.q
                }
            });
            var i = r(3142)
        },
        32448: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.HEARTBEAT_EVENTS = t.HEARTBEAT_INTERVAL = void 0;
            let i = r(71951);
            t.HEARTBEAT_INTERVAL = i.FIVE_SECONDS, t.HEARTBEAT_EVENTS = {
                pulse: "heartbeat_pulse"
            }
        },
        83675: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), r(77807).__exportStar(r(32448), t)
        },
        48330: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.HeartBeat = void 0;
            let i = r(77807),
                n = r(97531),
                s = r(71951),
                o = r(53532),
                a = r(83675);
            class c extends o.IHeartBeat {
                constructor(e) {
                    super(e), this.events = new n.EventEmitter, this.interval = a.HEARTBEAT_INTERVAL, this.interval = (null == e ? void 0 : e.interval) || a.HEARTBEAT_INTERVAL
                }
                static init(e) {
                    return i.__awaiter(this, void 0, void 0, function*() {
                        let t = new c(e);
                        return yield t.init(), t
                    })
                }
                init() {
                    return i.__awaiter(this, void 0, void 0, function*() {
                        yield this.initialize()
                    })
                }
                stop() {
                    clearInterval(this.intervalRef)
                }
                on(e, t) {
                    this.events.on(e, t)
                }
                once(e, t) {
                    this.events.once(e, t)
                }
                off(e, t) {
                    this.events.off(e, t)
                }
                removeListener(e, t) {
                    this.events.removeListener(e, t)
                }
                initialize() {
                    return i.__awaiter(this, void 0, void 0, function*() {
                        this.intervalRef = setInterval(() => this.pulse(), s.toMiliseconds(this.interval))
                    })
                }
                pulse() {
                    this.events.emit(a.HEARTBEAT_EVENTS.pulse)
                }
            }
            t.HeartBeat = c
        },
        10663: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            let i = r(77807);
            i.__exportStar(r(48330), t), i.__exportStar(r(53532), t), i.__exportStar(r(83675), t)
        },
        78780: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.IHeartBeat = void 0;
            let i = r(30964);
            class n extends i.IEvents {
                constructor(e) {
                    super()
                }
            }
            t.IHeartBeat = n
        },
        53532: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), r(77807).__exportStar(r(78780), t)
        },
        77807: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                __assign: function() {
                    return s
                },
                __asyncDelegator: function() {
                    return b
                },
                __asyncGenerator: function() {
                    return m
                },
                __asyncValues: function() {
                    return w
                },
                __await: function() {
                    return _
                },
                __awaiter: function() {
                    return l
                },
                __classPrivateFieldGet: function() {
                    return I
                },
                __classPrivateFieldSet: function() {
                    return O
                },
                __createBinding: function() {
                    return f
                },
                __decorate: function() {
                    return a
                },
                __exportStar: function() {
                    return p
                },
                __extends: function() {
                    return n
                },
                __generator: function() {
                    return h
                },
                __importDefault: function() {
                    return S
                },
                __importStar: function() {
                    return D
                },
                __makeTemplateObject: function() {
                    return E
                },
                __metadata: function() {
                    return u
                },
                __param: function() {
                    return c
                },
                __read: function() {
                    return g
                },
                __rest: function() {
                    return o
                },
                __spread: function() {
                    return y
                },
                __spreadArrays: function() {
                    return v
                },
                __values: function() {
                    return d
                }
            });
            /*! *****************************************************************************
            Copyright (c) Microsoft Corporation.
            Permission to use, copy, modify, and/or distribute this software for any
            purpose with or without fee is hereby granted.
            THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
            REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
            AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
            INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
            LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
            OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
            PERFORMANCE OF THIS SOFTWARE.
            ***************************************************************************** */
            var i = function(e, t) {
                return (i = Object.setPrototypeOf || ({
                    __proto__: []
                }) instanceof Array && function(e, t) {
                    e.__proto__ = t
                } || function(e, t) {
                    for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r])
                })(e, t)
            };

            function n(e, t) {
                function r() {
                    this.constructor = e
                }
                i(e, t), e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r)
            }
            var s = function() {
                return (s = Object.assign || function(e) {
                    for (var t, r = 1, i = arguments.length; r < i; r++)
                        for (var n in t = arguments[r]) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                    return e
                }).apply(this, arguments)
            };

            function o(e, t) {
                var r = {};
                for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && 0 > t.indexOf(i) && (r[i] = e[i]);
                if (null != e && "function" == typeof Object.getOwnPropertySymbols)
                    for (var n = 0, i = Object.getOwnPropertySymbols(e); n < i.length; n++) 0 > t.indexOf(i[n]) && Object.prototype.propertyIsEnumerable.call(e, i[n]) && (r[i[n]] = e[i[n]]);
                return r
            }

            function a(e, t, r, i) {
                var n, s = arguments.length,
                    o = s < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, r) : i;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) o = Reflect.decorate(e, t, r, i);
                else
                    for (var a = e.length - 1; a >= 0; a--)(n = e[a]) && (o = (s < 3 ? n(o) : s > 3 ? n(t, r, o) : n(t, r)) || o);
                return s > 3 && o && Object.defineProperty(t, r, o), o
            }

            function c(e, t) {
                return function(r, i) {
                    t(r, i, e)
                }
            }

            function u(e, t) {
                if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t)
            }

            function l(e, t, r, i) {
                return new(r || (r = Promise))(function(n, s) {
                    function o(e) {
                        try {
                            c(i.next(e))
                        } catch (e) {
                            s(e)
                        }
                    }

                    function a(e) {
                        try {
                            c(i.throw(e))
                        } catch (e) {
                            s(e)
                        }
                    }

                    function c(e) {
                        var t;
                        e.done ? n(e.value) : ((t = e.value) instanceof r ? t : new r(function(e) {
                            e(t)
                        })).then(o, a)
                    }
                    c((i = i.apply(e, t || [])).next())
                })
            }

            function h(e, t) {
                var r, i, n, s, o = {
                    label: 0,
                    sent: function() {
                        if (1 & n[0]) throw n[1];
                        return n[1]
                    },
                    trys: [],
                    ops: []
                };
                return s = {
                    next: a(0),
                    throw: a(1),
                    return: a(2)
                }, "function" == typeof Symbol && (s[Symbol.iterator] = function() {
                    return this
                }), s;

                function a(s) {
                    return function(a) {
                        return function(s) {
                            if (r) throw TypeError("Generator is already executing.");
                            for (; o;) try {
                                if (r = 1, i && (n = 2 & s[0] ? i.return : s[0] ? i.throw || ((n = i.return) && n.call(i), 0) : i.next) && !(n = n.call(i, s[1])).done) return n;
                                switch (i = 0, n && (s = [2 & s[0], n.value]), s[0]) {
                                    case 0:
                                    case 1:
                                        n = s;
                                        break;
                                    case 4:
                                        return o.label++, {
                                            value: s[1],
                                            done: !1
                                        };
                                    case 5:
                                        o.label++, i = s[1], s = [0];
                                        continue;
                                    case 7:
                                        s = o.ops.pop(), o.trys.pop();
                                        continue;
                                    default:
                                        if (!(n = (n = o.trys).length > 0 && n[n.length - 1]) && (6 === s[0] || 2 === s[0])) {
                                            o = 0;
                                            continue
                                        }
                                        if (3 === s[0] && (!n || s[1] > n[0] && s[1] < n[3])) {
                                            o.label = s[1];
                                            break
                                        }
                                        if (6 === s[0] && o.label < n[1]) {
                                            o.label = n[1], n = s;
                                            break
                                        }
                                        if (n && o.label < n[2]) {
                                            o.label = n[2], o.ops.push(s);
                                            break
                                        }
                                        n[2] && o.ops.pop(), o.trys.pop();
                                        continue
                                }
                                s = t.call(e, o)
                            } catch (e) {
                                s = [6, e], i = 0
                            } finally {
                                r = n = 0
                            }
                            if (5 & s[0]) throw s[1];
                            return {
                                value: s[0] ? s[1] : void 0,
                                done: !0
                            }
                        }([s, a])
                    }
                }
            }

            function f(e, t, r, i) {
                void 0 === i && (i = r), e[i] = t[r]
            }

            function p(e, t) {
                for (var r in e) "default" === r || t.hasOwnProperty(r) || (t[r] = e[r])
            }

            function d(e) {
                var t = "function" == typeof Symbol && Symbol.iterator,
                    r = t && e[t],
                    i = 0;
                if (r) return r.call(e);
                if (e && "number" == typeof e.length) return {
                    next: function() {
                        return e && i >= e.length && (e = void 0), {
                            value: e && e[i++],
                            done: !e
                        }
                    }
                };
                throw TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.")
            }

            function g(e, t) {
                var r = "function" == typeof Symbol && e[Symbol.iterator];
                if (!r) return e;
                var i, n, s = r.call(e),
                    o = [];
                try {
                    for (;
                        (void 0 === t || t-- > 0) && !(i = s.next()).done;) o.push(i.value)
                } catch (e) {
                    n = {
                        error: e
                    }
                } finally {
                    try {
                        i && !i.done && (r = s.return) && r.call(s)
                    } finally {
                        if (n) throw n.error
                    }
                }
                return o
            }

            function y() {
                for (var e = [], t = 0; t < arguments.length; t++) e = e.concat(g(arguments[t]));
                return e
            }

            function v() {
                for (var e = 0, t = 0, r = arguments.length; t < r; t++) e += arguments[t].length;
                for (var i = Array(e), n = 0, t = 0; t < r; t++)
                    for (var s = arguments[t], o = 0, a = s.length; o < a; o++, n++) i[n] = s[o];
                return i
            }

            function _(e) {
                return this instanceof _ ? (this.v = e, this) : new _(e)
            }

            function m(e, t, r) {
                if (!Symbol.asyncIterator) throw TypeError("Symbol.asyncIterator is not defined.");
                var i, n = r.apply(e, t || []),
                    s = [];
                return i = {}, o("next"), o("throw"), o("return"), i[Symbol.asyncIterator] = function() {
                    return this
                }, i;

                function o(e) {
                    n[e] && (i[e] = function(t) {
                        return new Promise(function(r, i) {
                            s.push([e, t, r, i]) > 1 || a(e, t)
                        })
                    })
                }

                function a(e, t) {
                    try {
                        var r;
                        (r = n[e](t)).value instanceof _ ? Promise.resolve(r.value.v).then(c, u) : l(s[0][2], r)
                    } catch (e) {
                        l(s[0][3], e)
                    }
                }

                function c(e) {
                    a("next", e)
                }

                function u(e) {
                    a("throw", e)
                }

                function l(e, t) {
                    e(t), s.shift(), s.length && a(s[0][0], s[0][1])
                }
            }

            function b(e) {
                var t, r;
                return t = {}, i("next"), i("throw", function(e) {
                    throw e
                }), i("return"), t[Symbol.iterator] = function() {
                    return this
                }, t;

                function i(i, n) {
                    t[i] = e[i] ? function(t) {
                        return (r = !r) ? {
                            value: _(e[i](t)),
                            done: "return" === i
                        } : n ? n(t) : t
                    } : n
                }
            }

            function w(e) {
                if (!Symbol.asyncIterator) throw TypeError("Symbol.asyncIterator is not defined.");
                var t, r = e[Symbol.asyncIterator];
                return r ? r.call(e) : (e = d(e), t = {}, i("next"), i("throw"), i("return"), t[Symbol.asyncIterator] = function() {
                    return this
                }, t);

                function i(r) {
                    t[r] = e[r] && function(t) {
                        return new Promise(function(i, n) {
                            ! function(e, t, r, i) {
                                Promise.resolve(i).then(function(t) {
                                    e({
                                        value: t,
                                        done: r
                                    })
                                }, t)
                            }(i, n, (t = e[r](t)).done, t.value)
                        })
                    }
                }
            }

            function E(e, t) {
                return Object.defineProperty ? Object.defineProperty(e, "raw", {
                    value: t
                }) : e.raw = t, e
            }

            function D(e) {
                if (e && e.__esModule) return e;
                var t = {};
                if (null != e)
                    for (var r in e) Object.hasOwnProperty.call(e, r) && (t[r] = e[r]);
                return t.default = e, t
            }

            function S(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }

            function I(e, t) {
                if (!t.has(e)) throw TypeError("attempted to get private field on non-instance");
                return t.get(e)
            }

            function O(e, t, r) {
                if (!t.has(e)) throw TypeError("attempted to set private field on non-instance");
                return t.set(e, r), r
            }
        },
        88430: function(e) {
            "use strict";
            e.exports = function() {
                throw Error("ws does not work in the browser. Browser clients must use the native WebSocket object")
            }
        },
        53414: function(e, t, r) {
            "use strict";
            let i = r(43580),
                n = r(66253),
                s = i.__importDefault(r(73574)),
                o = r(25343);
            class a {
                constructor() {
                    this.localStorage = s.default
                }
                getKeys() {
                    return i.__awaiter(this, void 0, void 0, function*() {
                        return Object.keys(this.localStorage)
                    })
                }
                getEntries() {
                    return i.__awaiter(this, void 0, void 0, function*() {
                        return Object.entries(this.localStorage).map(o.parseEntry)
                    })
                }
                getItem(e) {
                    return i.__awaiter(this, void 0, void 0, function*() {
                        let t = this.localStorage.getItem(e);
                        if (null !== t) return n.safeJsonParse(t)
                    })
                }
                setItem(e, t) {
                    return i.__awaiter(this, void 0, void 0, function*() {
                        this.localStorage.setItem(e, n.safeJsonStringify(t))
                    })
                }
                removeItem(e) {
                    return i.__awaiter(this, void 0, void 0, function*() {
                        this.localStorage.removeItem(e)
                    })
                }
            }
            t.ZP = a
        },
        73574: function(e, t, r) {
            "use strict";
            ! function() {
                function t() {}
                t.prototype.getItem = function(e) {
                    return this.hasOwnProperty(e) ? String(this[e]) : null
                }, t.prototype.setItem = function(e, t) {
                    this[e] = String(t)
                }, t.prototype.removeItem = function(e) {
                    delete this[e]
                }, t.prototype.clear = function() {
                    let e = this;
                    Object.keys(e).forEach(function(t) {
                        e[t] = void 0, delete e[t]
                    })
                }, t.prototype.key = function(e) {
                    return e = e || 0, Object.keys(this)[e]
                }, t.prototype.__defineGetter__("length", function() {
                    return Object.keys(this).length
                }), void 0 !== r.g && r.g.localStorage ? e.exports = r.g.localStorage : "undefined" != typeof window && window.localStorage ? e.exports = window.localStorage : e.exports = new t
            }()
        },
        25343: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            let i = r(43580);
            i.__exportStar(r(66411), t), i.__exportStar(r(19975), t)
        },
        66411: function(e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.IKeyValueStorage = void 0;
            class r {}
            t.IKeyValueStorage = r
        },
        19975: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.parseEntry = void 0;
            let i = r(66253);
            t.parseEntry = function(e) {
                var t;
                return [e[0], i.safeJsonParse(null !== (t = e[1]) && void 0 !== t ? t : "")]
            }
        },
        43580: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                __assign: function() {
                    return s
                },
                __asyncDelegator: function() {
                    return b
                },
                __asyncGenerator: function() {
                    return m
                },
                __asyncValues: function() {
                    return w
                },
                __await: function() {
                    return _
                },
                __awaiter: function() {
                    return l
                },
                __classPrivateFieldGet: function() {
                    return I
                },
                __classPrivateFieldSet: function() {
                    return O
                },
                __createBinding: function() {
                    return f
                },
                __decorate: function() {
                    return a
                },
                __exportStar: function() {
                    return p
                },
                __extends: function() {
                    return n
                },
                __generator: function() {
                    return h
                },
                __importDefault: function() {
                    return S
                },
                __importStar: function() {
                    return D
                },
                __makeTemplateObject: function() {
                    return E
                },
                __metadata: function() {
                    return u
                },
                __param: function() {
                    return c
                },
                __read: function() {
                    return g
                },
                __rest: function() {
                    return o
                },
                __spread: function() {
                    return y
                },
                __spreadArrays: function() {
                    return v
                },
                __values: function() {
                    return d
                }
            });
            /*! *****************************************************************************
            Copyright (c) Microsoft Corporation.
            Permission to use, copy, modify, and/or distribute this software for any
            purpose with or without fee is hereby granted.
            THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
            REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
            AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
            INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
            LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
            OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
            PERFORMANCE OF THIS SOFTWARE.
            ***************************************************************************** */
            var i = function(e, t) {
                return (i = Object.setPrototypeOf || ({
                    __proto__: []
                }) instanceof Array && function(e, t) {
                    e.__proto__ = t
                } || function(e, t) {
                    for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r])
                })(e, t)
            };

            function n(e, t) {
                function r() {
                    this.constructor = e
                }
                i(e, t), e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r)
            }
            var s = function() {
                return (s = Object.assign || function(e) {
                    for (var t, r = 1, i = arguments.length; r < i; r++)
                        for (var n in t = arguments[r]) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                    return e
                }).apply(this, arguments)
            };

            function o(e, t) {
                var r = {};
                for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && 0 > t.indexOf(i) && (r[i] = e[i]);
                if (null != e && "function" == typeof Object.getOwnPropertySymbols)
                    for (var n = 0, i = Object.getOwnPropertySymbols(e); n < i.length; n++) 0 > t.indexOf(i[n]) && Object.prototype.propertyIsEnumerable.call(e, i[n]) && (r[i[n]] = e[i[n]]);
                return r
            }

            function a(e, t, r, i) {
                var n, s = arguments.length,
                    o = s < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, r) : i;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) o = Reflect.decorate(e, t, r, i);
                else
                    for (var a = e.length - 1; a >= 0; a--)(n = e[a]) && (o = (s < 3 ? n(o) : s > 3 ? n(t, r, o) : n(t, r)) || o);
                return s > 3 && o && Object.defineProperty(t, r, o), o
            }

            function c(e, t) {
                return function(r, i) {
                    t(r, i, e)
                }
            }

            function u(e, t) {
                if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t)
            }

            function l(e, t, r, i) {
                return new(r || (r = Promise))(function(n, s) {
                    function o(e) {
                        try {
                            c(i.next(e))
                        } catch (e) {
                            s(e)
                        }
                    }

                    function a(e) {
                        try {
                            c(i.throw(e))
                        } catch (e) {
                            s(e)
                        }
                    }

                    function c(e) {
                        var t;
                        e.done ? n(e.value) : ((t = e.value) instanceof r ? t : new r(function(e) {
                            e(t)
                        })).then(o, a)
                    }
                    c((i = i.apply(e, t || [])).next())
                })
            }

            function h(e, t) {
                var r, i, n, s, o = {
                    label: 0,
                    sent: function() {
                        if (1 & n[0]) throw n[1];
                        return n[1]
                    },
                    trys: [],
                    ops: []
                };
                return s = {
                    next: a(0),
                    throw: a(1),
                    return: a(2)
                }, "function" == typeof Symbol && (s[Symbol.iterator] = function() {
                    return this
                }), s;

                function a(s) {
                    return function(a) {
                        return function(s) {
                            if (r) throw TypeError("Generator is already executing.");
                            for (; o;) try {
                                if (r = 1, i && (n = 2 & s[0] ? i.return : s[0] ? i.throw || ((n = i.return) && n.call(i), 0) : i.next) && !(n = n.call(i, s[1])).done) return n;
                                switch (i = 0, n && (s = [2 & s[0], n.value]), s[0]) {
                                    case 0:
                                    case 1:
                                        n = s;
                                        break;
                                    case 4:
                                        return o.label++, {
                                            value: s[1],
                                            done: !1
                                        };
                                    case 5:
                                        o.label++, i = s[1], s = [0];
                                        continue;
                                    case 7:
                                        s = o.ops.pop(), o.trys.pop();
                                        continue;
                                    default:
                                        if (!(n = (n = o.trys).length > 0 && n[n.length - 1]) && (6 === s[0] || 2 === s[0])) {
                                            o = 0;
                                            continue
                                        }
                                        if (3 === s[0] && (!n || s[1] > n[0] && s[1] < n[3])) {
                                            o.label = s[1];
                                            break
                                        }
                                        if (6 === s[0] && o.label < n[1]) {
                                            o.label = n[1], n = s;
                                            break
                                        }
                                        if (n && o.label < n[2]) {
                                            o.label = n[2], o.ops.push(s);
                                            break
                                        }
                                        n[2] && o.ops.pop(), o.trys.pop();
                                        continue
                                }
                                s = t.call(e, o)
                            } catch (e) {
                                s = [6, e], i = 0
                            } finally {
                                r = n = 0
                            }
                            if (5 & s[0]) throw s[1];
                            return {
                                value: s[0] ? s[1] : void 0,
                                done: !0
                            }
                        }([s, a])
                    }
                }
            }

            function f(e, t, r, i) {
                void 0 === i && (i = r), e[i] = t[r]
            }

            function p(e, t) {
                for (var r in e) "default" === r || t.hasOwnProperty(r) || (t[r] = e[r])
            }

            function d(e) {
                var t = "function" == typeof Symbol && Symbol.iterator,
                    r = t && e[t],
                    i = 0;
                if (r) return r.call(e);
                if (e && "number" == typeof e.length) return {
                    next: function() {
                        return e && i >= e.length && (e = void 0), {
                            value: e && e[i++],
                            done: !e
                        }
                    }
                };
                throw TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.")
            }

            function g(e, t) {
                var r = "function" == typeof Symbol && e[Symbol.iterator];
                if (!r) return e;
                var i, n, s = r.call(e),
                    o = [];
                try {
                    for (;
                        (void 0 === t || t-- > 0) && !(i = s.next()).done;) o.push(i.value)
                } catch (e) {
                    n = {
                        error: e
                    }
                } finally {
                    try {
                        i && !i.done && (r = s.return) && r.call(s)
                    } finally {
                        if (n) throw n.error
                    }
                }
                return o
            }

            function y() {
                for (var e = [], t = 0; t < arguments.length; t++) e = e.concat(g(arguments[t]));
                return e
            }

            function v() {
                for (var e = 0, t = 0, r = arguments.length; t < r; t++) e += arguments[t].length;
                for (var i = Array(e), n = 0, t = 0; t < r; t++)
                    for (var s = arguments[t], o = 0, a = s.length; o < a; o++, n++) i[n] = s[o];
                return i
            }

            function _(e) {
                return this instanceof _ ? (this.v = e, this) : new _(e)
            }

            function m(e, t, r) {
                if (!Symbol.asyncIterator) throw TypeError("Symbol.asyncIterator is not defined.");
                var i, n = r.apply(e, t || []),
                    s = [];
                return i = {}, o("next"), o("throw"), o("return"), i[Symbol.asyncIterator] = function() {
                    return this
                }, i;

                function o(e) {
                    n[e] && (i[e] = function(t) {
                        return new Promise(function(r, i) {
                            s.push([e, t, r, i]) > 1 || a(e, t)
                        })
                    })
                }

                function a(e, t) {
                    try {
                        var r;
                        (r = n[e](t)).value instanceof _ ? Promise.resolve(r.value.v).then(c, u) : l(s[0][2], r)
                    } catch (e) {
                        l(s[0][3], e)
                    }
                }

                function c(e) {
                    a("next", e)
                }

                function u(e) {
                    a("throw", e)
                }

                function l(e, t) {
                    e(t), s.shift(), s.length && a(s[0][0], s[0][1])
                }
            }

            function b(e) {
                var t, r;
                return t = {}, i("next"), i("throw", function(e) {
                    throw e
                }), i("return"), t[Symbol.iterator] = function() {
                    return this
                }, t;

                function i(i, n) {
                    t[i] = e[i] ? function(t) {
                        return (r = !r) ? {
                            value: _(e[i](t)),
                            done: "return" === i
                        } : n ? n(t) : t
                    } : n
                }
            }

            function w(e) {
                if (!Symbol.asyncIterator) throw TypeError("Symbol.asyncIterator is not defined.");
                var t, r = e[Symbol.asyncIterator];
                return r ? r.call(e) : (e = d(e), t = {}, i("next"), i("throw"), i("return"), t[Symbol.asyncIterator] = function() {
                    return this
                }, t);

                function i(r) {
                    t[r] = e[r] && function(t) {
                        return new Promise(function(i, n) {
                            ! function(e, t, r, i) {
                                Promise.resolve(i).then(function(t) {
                                    e({
                                        value: t,
                                        done: r
                                    })
                                }, t)
                            }(i, n, (t = e[r](t)).done, t.value)
                        })
                    }
                }
            }

            function E(e, t) {
                return Object.defineProperty ? Object.defineProperty(e, "raw", {
                    value: t
                }) : e.raw = t, e
            }

            function D(e) {
                if (e && e.__esModule) return e;
                var t = {};
                if (null != e)
                    for (var r in e) Object.hasOwnProperty.call(e, r) && (t[r] = e[r]);
                return t.default = e, t
            }

            function S(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }

            function I(e, t) {
                if (!t.has(e)) throw TypeError("attempted to get private field on non-instance");
                return t.get(e)
            }

            function O(e, t, r) {
                if (!t.has(e)) throw TypeError("attempted to set private field on non-instance");
                return t.set(e, r), r
            }
        },
        34105: function(e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.PINO_CUSTOM_CONTEXT_KEY = t.PINO_LOGGER_DEFAULTS = void 0, t.PINO_LOGGER_DEFAULTS = {
                level: "info"
            }, t.PINO_CUSTOM_CONTEXT_KEY = "custom_context"
        },
        1234: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.pino = void 0;
            let i = r(61098),
                n = i.__importDefault(r(3490));
            Object.defineProperty(t, "pino", {
                enumerable: !0,
                get: function() {
                    return n.default
                }
            }), i.__exportStar(r(34105), t), i.__exportStar(r(49481), t)
        },
        49481: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.generateChildLogger = t.formatChildLoggerContext = t.getLoggerContext = t.setBrowserLoggerContext = t.getBrowserLoggerContext = t.getDefaultLoggerOptions = void 0;
            let i = r(34105);

            function n(e, t = i.PINO_CUSTOM_CONTEXT_KEY) {
                return e[t] || ""
            }

            function s(e, t, r = i.PINO_CUSTOM_CONTEXT_KEY) {
                return e[r] = t, e
            }

            function o(e, t = i.PINO_CUSTOM_CONTEXT_KEY) {
                return void 0 === e.bindings ? n(e, t) : e.bindings().context || ""
            }

            function a(e, t, r = i.PINO_CUSTOM_CONTEXT_KEY) {
                let n = o(e, r);
                return n.trim() ? `${n}/${t}` : t
            }
            t.getDefaultLoggerOptions = function(e) {
                return Object.assign(Object.assign({}, e), {
                    level: (null == e ? void 0 : e.level) || i.PINO_LOGGER_DEFAULTS.level
                })
            }, t.getBrowserLoggerContext = n, t.setBrowserLoggerContext = s, t.getLoggerContext = o, t.formatChildLoggerContext = a, t.generateChildLogger = function(e, t, r = i.PINO_CUSTOM_CONTEXT_KEY) {
                let n = a(e, t, r);
                return s(e.child({
                    context: n
                }), n, r)
            }
        },
        61098: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                __assign: function() {
                    return s
                },
                __asyncDelegator: function() {
                    return b
                },
                __asyncGenerator: function() {
                    return m
                },
                __asyncValues: function() {
                    return w
                },
                __await: function() {
                    return _
                },
                __awaiter: function() {
                    return l
                },
                __classPrivateFieldGet: function() {
                    return I
                },
                __classPrivateFieldSet: function() {
                    return O
                },
                __createBinding: function() {
                    return f
                },
                __decorate: function() {
                    return a
                },
                __exportStar: function() {
                    return p
                },
                __extends: function() {
                    return n
                },
                __generator: function() {
                    return h
                },
                __importDefault: function() {
                    return S
                },
                __importStar: function() {
                    return D
                },
                __makeTemplateObject: function() {
                    return E
                },
                __metadata: function() {
                    return u
                },
                __param: function() {
                    return c
                },
                __read: function() {
                    return g
                },
                __rest: function() {
                    return o
                },
                __spread: function() {
                    return y
                },
                __spreadArrays: function() {
                    return v
                },
                __values: function() {
                    return d
                }
            });
            /*! *****************************************************************************
            Copyright (c) Microsoft Corporation.
            Permission to use, copy, modify, and/or distribute this software for any
            purpose with or without fee is hereby granted.
            THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
            REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
            AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
            INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
            LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
            OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
            PERFORMANCE OF THIS SOFTWARE.
            ***************************************************************************** */
            var i = function(e, t) {
                return (i = Object.setPrototypeOf || ({
                    __proto__: []
                }) instanceof Array && function(e, t) {
                    e.__proto__ = t
                } || function(e, t) {
                    for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r])
                })(e, t)
            };

            function n(e, t) {
                function r() {
                    this.constructor = e
                }
                i(e, t), e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r)
            }
            var s = function() {
                return (s = Object.assign || function(e) {
                    for (var t, r = 1, i = arguments.length; r < i; r++)
                        for (var n in t = arguments[r]) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                    return e
                }).apply(this, arguments)
            };

            function o(e, t) {
                var r = {};
                for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && 0 > t.indexOf(i) && (r[i] = e[i]);
                if (null != e && "function" == typeof Object.getOwnPropertySymbols)
                    for (var n = 0, i = Object.getOwnPropertySymbols(e); n < i.length; n++) 0 > t.indexOf(i[n]) && Object.prototype.propertyIsEnumerable.call(e, i[n]) && (r[i[n]] = e[i[n]]);
                return r
            }

            function a(e, t, r, i) {
                var n, s = arguments.length,
                    o = s < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, r) : i;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) o = Reflect.decorate(e, t, r, i);
                else
                    for (var a = e.length - 1; a >= 0; a--)(n = e[a]) && (o = (s < 3 ? n(o) : s > 3 ? n(t, r, o) : n(t, r)) || o);
                return s > 3 && o && Object.defineProperty(t, r, o), o
            }

            function c(e, t) {
                return function(r, i) {
                    t(r, i, e)
                }
            }

            function u(e, t) {
                if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t)
            }

            function l(e, t, r, i) {
                return new(r || (r = Promise))(function(n, s) {
                    function o(e) {
                        try {
                            c(i.next(e))
                        } catch (e) {
                            s(e)
                        }
                    }

                    function a(e) {
                        try {
                            c(i.throw(e))
                        } catch (e) {
                            s(e)
                        }
                    }

                    function c(e) {
                        var t;
                        e.done ? n(e.value) : ((t = e.value) instanceof r ? t : new r(function(e) {
                            e(t)
                        })).then(o, a)
                    }
                    c((i = i.apply(e, t || [])).next())
                })
            }

            function h(e, t) {
                var r, i, n, s, o = {
                    label: 0,
                    sent: function() {
                        if (1 & n[0]) throw n[1];
                        return n[1]
                    },
                    trys: [],
                    ops: []
                };
                return s = {
                    next: a(0),
                    throw: a(1),
                    return: a(2)
                }, "function" == typeof Symbol && (s[Symbol.iterator] = function() {
                    return this
                }), s;

                function a(s) {
                    return function(a) {
                        return function(s) {
                            if (r) throw TypeError("Generator is already executing.");
                            for (; o;) try {
                                if (r = 1, i && (n = 2 & s[0] ? i.return : s[0] ? i.throw || ((n = i.return) && n.call(i), 0) : i.next) && !(n = n.call(i, s[1])).done) return n;
                                switch (i = 0, n && (s = [2 & s[0], n.value]), s[0]) {
                                    case 0:
                                    case 1:
                                        n = s;
                                        break;
                                    case 4:
                                        return o.label++, {
                                            value: s[1],
                                            done: !1
                                        };
                                    case 5:
                                        o.label++, i = s[1], s = [0];
                                        continue;
                                    case 7:
                                        s = o.ops.pop(), o.trys.pop();
                                        continue;
                                    default:
                                        if (!(n = (n = o.trys).length > 0 && n[n.length - 1]) && (6 === s[0] || 2 === s[0])) {
                                            o = 0;
                                            continue
                                        }
                                        if (3 === s[0] && (!n || s[1] > n[0] && s[1] < n[3])) {
                                            o.label = s[1];
                                            break
                                        }
                                        if (6 === s[0] && o.label < n[1]) {
                                            o.label = n[1], n = s;
                                            break
                                        }
                                        if (n && o.label < n[2]) {
                                            o.label = n[2], o.ops.push(s);
                                            break
                                        }
                                        n[2] && o.ops.pop(), o.trys.pop();
                                        continue
                                }
                                s = t.call(e, o)
                            } catch (e) {
                                s = [6, e], i = 0
                            } finally {
                                r = n = 0
                            }
                            if (5 & s[0]) throw s[1];
                            return {
                                value: s[0] ? s[1] : void 0,
                                done: !0
                            }
                        }([s, a])
                    }
                }
            }

            function f(e, t, r, i) {
                void 0 === i && (i = r), e[i] = t[r]
            }

            function p(e, t) {
                for (var r in e) "default" === r || t.hasOwnProperty(r) || (t[r] = e[r])
            }

            function d(e) {
                var t = "function" == typeof Symbol && Symbol.iterator,
                    r = t && e[t],
                    i = 0;
                if (r) return r.call(e);
                if (e && "number" == typeof e.length) return {
                    next: function() {
                        return e && i >= e.length && (e = void 0), {
                            value: e && e[i++],
                            done: !e
                        }
                    }
                };
                throw TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.")
            }

            function g(e, t) {
                var r = "function" == typeof Symbol && e[Symbol.iterator];
                if (!r) return e;
                var i, n, s = r.call(e),
                    o = [];
                try {
                    for (;
                        (void 0 === t || t-- > 0) && !(i = s.next()).done;) o.push(i.value)
                } catch (e) {
                    n = {
                        error: e
                    }
                } finally {
                    try {
                        i && !i.done && (r = s.return) && r.call(s)
                    } finally {
                        if (n) throw n.error
                    }
                }
                return o
            }

            function y() {
                for (var e = [], t = 0; t < arguments.length; t++) e = e.concat(g(arguments[t]));
                return e
            }

            function v() {
                for (var e = 0, t = 0, r = arguments.length; t < r; t++) e += arguments[t].length;
                for (var i = Array(e), n = 0, t = 0; t < r; t++)
                    for (var s = arguments[t], o = 0, a = s.length; o < a; o++, n++) i[n] = s[o];
                return i
            }

            function _(e) {
                return this instanceof _ ? (this.v = e, this) : new _(e)
            }

            function m(e, t, r) {
                if (!Symbol.asyncIterator) throw TypeError("Symbol.asyncIterator is not defined.");
                var i, n = r.apply(e, t || []),
                    s = [];
                return i = {}, o("next"), o("throw"), o("return"), i[Symbol.asyncIterator] = function() {
                    return this
                }, i;

                function o(e) {
                    n[e] && (i[e] = function(t) {
                        return new Promise(function(r, i) {
                            s.push([e, t, r, i]) > 1 || a(e, t)
                        })
                    })
                }

                function a(e, t) {
                    try {
                        var r;
                        (r = n[e](t)).value instanceof _ ? Promise.resolve(r.value.v).then(c, u) : l(s[0][2], r)
                    } catch (e) {
                        l(s[0][3], e)
                    }
                }

                function c(e) {
                    a("next", e)
                }

                function u(e) {
                    a("throw", e)
                }

                function l(e, t) {
                    e(t), s.shift(), s.length && a(s[0][0], s[0][1])
                }
            }

            function b(e) {
                var t, r;
                return t = {}, i("next"), i("throw", function(e) {
                    throw e
                }), i("return"), t[Symbol.iterator] = function() {
                    return this
                }, t;

                function i(i, n) {
                    t[i] = e[i] ? function(t) {
                        return (r = !r) ? {
                            value: _(e[i](t)),
                            done: "return" === i
                        } : n ? n(t) : t
                    } : n
                }
            }

            function w(e) {
                if (!Symbol.asyncIterator) throw TypeError("Symbol.asyncIterator is not defined.");
                var t, r = e[Symbol.asyncIterator];
                return r ? r.call(e) : (e = d(e), t = {}, i("next"), i("throw"), i("return"), t[Symbol.asyncIterator] = function() {
                    return this
                }, t);

                function i(r) {
                    t[r] = e[r] && function(t) {
                        return new Promise(function(i, n) {
                            ! function(e, t, r, i) {
                                Promise.resolve(i).then(function(t) {
                                    e({
                                        value: t,
                                        done: r
                                    })
                                }, t)
                            }(i, n, (t = e[r](t)).done, t.value)
                        })
                    }
                }
            }

            function E(e, t) {
                return Object.defineProperty ? Object.defineProperty(e, "raw", {
                    value: t
                }) : e.raw = t, e
            }

            function D(e) {
                if (e && e.__esModule) return e;
                var t = {};
                if (null != e)
                    for (var r in e) Object.hasOwnProperty.call(e, r) && (t[r] = e[r]);
                return t.default = e, t
            }

            function S(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }

            function I(e, t) {
                if (!t.has(e)) throw TypeError("attempted to get private field on non-instance");
                return t.get(e)
            }

            function O(e, t, r) {
                if (!t.has(e)) throw TypeError("attempted to set private field on non-instance");
                return t.set(e, r), r
            }
        },
        19434: function() {},
        74844: function() {},
        19036: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            let i = r(62782);
            i.__exportStar(r(95787), t), i.__exportStar(r(10898), t)
        },
        95787: function(e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.ONE_THOUSAND = t.ONE_HUNDRED = void 0, t.ONE_HUNDRED = 100, t.ONE_THOUSAND = 1e3
        },
        10898: function(e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.ONE_YEAR = t.FOUR_WEEKS = t.THREE_WEEKS = t.TWO_WEEKS = t.ONE_WEEK = t.THIRTY_DAYS = t.SEVEN_DAYS = t.FIVE_DAYS = t.THREE_DAYS = t.ONE_DAY = t.TWENTY_FOUR_HOURS = t.TWELVE_HOURS = t.SIX_HOURS = t.THREE_HOURS = t.ONE_HOUR = t.SIXTY_MINUTES = t.THIRTY_MINUTES = t.TEN_MINUTES = t.FIVE_MINUTES = t.ONE_MINUTE = t.SIXTY_SECONDS = t.THIRTY_SECONDS = t.TEN_SECONDS = t.FIVE_SECONDS = t.ONE_SECOND = void 0, t.ONE_SECOND = 1, t.FIVE_SECONDS = 5, t.TEN_SECONDS = 10, t.THIRTY_SECONDS = 30, t.SIXTY_SECONDS = 60, t.ONE_MINUTE = t.SIXTY_SECONDS, t.FIVE_MINUTES = 5 * t.ONE_MINUTE, t.TEN_MINUTES = 10 * t.ONE_MINUTE, t.THIRTY_MINUTES = 30 * t.ONE_MINUTE, t.SIXTY_MINUTES = 60 * t.ONE_MINUTE, t.ONE_HOUR = t.SIXTY_MINUTES, t.THREE_HOURS = 3 * t.ONE_HOUR, t.SIX_HOURS = 6 * t.ONE_HOUR, t.TWELVE_HOURS = 12 * t.ONE_HOUR, t.TWENTY_FOUR_HOURS = 24 * t.ONE_HOUR, t.ONE_DAY = t.TWENTY_FOUR_HOURS, t.THREE_DAYS = 3 * t.ONE_DAY, t.FIVE_DAYS = 5 * t.ONE_DAY, t.SEVEN_DAYS = 7 * t.ONE_DAY, t.THIRTY_DAYS = 30 * t.ONE_DAY, t.ONE_WEEK = t.SEVEN_DAYS, t.TWO_WEEKS = 2 * t.ONE_WEEK, t.THREE_WEEKS = 3 * t.ONE_WEEK, t.FOUR_WEEKS = 4 * t.ONE_WEEK, t.ONE_YEAR = 365 * t.ONE_DAY
        },
        71951: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            let i = r(62782);
            i.__exportStar(r(80797), t), i.__exportStar(r(97744), t), i.__exportStar(r(32248), t), i.__exportStar(r(19036), t)
        },
        32248: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), r(62782).__exportStar(r(93721), t)
        },
        93721: function(e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.IWatch = void 0;
            class r {}
            t.IWatch = r
        },
        43306: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.fromMiliseconds = t.toMiliseconds = void 0;
            let i = r(19036);
            t.toMiliseconds = function(e) {
                return e * i.ONE_THOUSAND
            }, t.fromMiliseconds = function(e) {
                return Math.floor(e / i.ONE_THOUSAND)
            }
        },
        26111: function(e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.delay = void 0, t.delay = function(e) {
                return new Promise(t => {
                    setTimeout(() => {
                        t(!0)
                    }, e)
                })
            }
        },
        80797: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            let i = r(62782);
            i.__exportStar(r(26111), t), i.__exportStar(r(43306), t)
        },
        97744: function(e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.Watch = void 0;
            class r {
                constructor() {
                    this.timestamps = new Map
                }
                start(e) {
                    if (this.timestamps.has(e)) throw Error(`Watch already started for label: ${e}`);
                    this.timestamps.set(e, {
                        started: Date.now()
                    })
                }
                stop(e) {
                    let t = this.get(e);
                    if (void 0 !== t.elapsed) throw Error(`Watch already stopped for label: ${e}`);
                    let r = Date.now() - t.started;
                    this.timestamps.set(e, {
                        started: t.started,
                        elapsed: r
                    })
                }
                get(e) {
                    let t = this.timestamps.get(e);
                    if (void 0 === t) throw Error(`No timestamp found for label: ${e}`);
                    return t
                }
                elapsed(e) {
                    let t = this.get(e);
                    return t.elapsed || Date.now() - t.started
                }
            }
            t.Watch = r, t.default = r
        },
        62782: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                __assign: function() {
                    return s
                },
                __asyncDelegator: function() {
                    return b
                },
                __asyncGenerator: function() {
                    return m
                },
                __asyncValues: function() {
                    return w
                },
                __await: function() {
                    return _
                },
                __awaiter: function() {
                    return l
                },
                __classPrivateFieldGet: function() {
                    return I
                },
                __classPrivateFieldSet: function() {
                    return O
                },
                __createBinding: function() {
                    return f
                },
                __decorate: function() {
                    return a
                },
                __exportStar: function() {
                    return p
                },
                __extends: function() {
                    return n
                },
                __generator: function() {
                    return h
                },
                __importDefault: function() {
                    return S
                },
                __importStar: function() {
                    return D
                },
                __makeTemplateObject: function() {
                    return E
                },
                __metadata: function() {
                    return u
                },
                __param: function() {
                    return c
                },
                __read: function() {
                    return g
                },
                __rest: function() {
                    return o
                },
                __spread: function() {
                    return y
                },
                __spreadArrays: function() {
                    return v
                },
                __values: function() {
                    return d
                }
            });
            /*! *****************************************************************************
            Copyright (c) Microsoft Corporation.
            Permission to use, copy, modify, and/or distribute this software for any
            purpose with or without fee is hereby granted.
            THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
            REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
            AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
            INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
            LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
            OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
            PERFORMANCE OF THIS SOFTWARE.
            ***************************************************************************** */
            var i = function(e, t) {
                return (i = Object.setPrototypeOf || ({
                    __proto__: []
                }) instanceof Array && function(e, t) {
                    e.__proto__ = t
                } || function(e, t) {
                    for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r])
                })(e, t)
            };

            function n(e, t) {
                function r() {
                    this.constructor = e
                }
                i(e, t), e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r)
            }
            var s = function() {
                return (s = Object.assign || function(e) {
                    for (var t, r = 1, i = arguments.length; r < i; r++)
                        for (var n in t = arguments[r]) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                    return e
                }).apply(this, arguments)
            };

            function o(e, t) {
                var r = {};
                for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && 0 > t.indexOf(i) && (r[i] = e[i]);
                if (null != e && "function" == typeof Object.getOwnPropertySymbols)
                    for (var n = 0, i = Object.getOwnPropertySymbols(e); n < i.length; n++) 0 > t.indexOf(i[n]) && Object.prototype.propertyIsEnumerable.call(e, i[n]) && (r[i[n]] = e[i[n]]);
                return r
            }

            function a(e, t, r, i) {
                var n, s = arguments.length,
                    o = s < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, r) : i;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) o = Reflect.decorate(e, t, r, i);
                else
                    for (var a = e.length - 1; a >= 0; a--)(n = e[a]) && (o = (s < 3 ? n(o) : s > 3 ? n(t, r, o) : n(t, r)) || o);
                return s > 3 && o && Object.defineProperty(t, r, o), o
            }

            function c(e, t) {
                return function(r, i) {
                    t(r, i, e)
                }
            }

            function u(e, t) {
                if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t)
            }

            function l(e, t, r, i) {
                return new(r || (r = Promise))(function(n, s) {
                    function o(e) {
                        try {
                            c(i.next(e))
                        } catch (e) {
                            s(e)
                        }
                    }

                    function a(e) {
                        try {
                            c(i.throw(e))
                        } catch (e) {
                            s(e)
                        }
                    }

                    function c(e) {
                        var t;
                        e.done ? n(e.value) : ((t = e.value) instanceof r ? t : new r(function(e) {
                            e(t)
                        })).then(o, a)
                    }
                    c((i = i.apply(e, t || [])).next())
                })
            }

            function h(e, t) {
                var r, i, n, s, o = {
                    label: 0,
                    sent: function() {
                        if (1 & n[0]) throw n[1];
                        return n[1]
                    },
                    trys: [],
                    ops: []
                };
                return s = {
                    next: a(0),
                    throw: a(1),
                    return: a(2)
                }, "function" == typeof Symbol && (s[Symbol.iterator] = function() {
                    return this
                }), s;

                function a(s) {
                    return function(a) {
                        return function(s) {
                            if (r) throw TypeError("Generator is already executing.");
                            for (; o;) try {
                                if (r = 1, i && (n = 2 & s[0] ? i.return : s[0] ? i.throw || ((n = i.return) && n.call(i), 0) : i.next) && !(n = n.call(i, s[1])).done) return n;
                                switch (i = 0, n && (s = [2 & s[0], n.value]), s[0]) {
                                    case 0:
                                    case 1:
                                        n = s;
                                        break;
                                    case 4:
                                        return o.label++, {
                                            value: s[1],
                                            done: !1
                                        };
                                    case 5:
                                        o.label++, i = s[1], s = [0];
                                        continue;
                                    case 7:
                                        s = o.ops.pop(), o.trys.pop();
                                        continue;
                                    default:
                                        if (!(n = (n = o.trys).length > 0 && n[n.length - 1]) && (6 === s[0] || 2 === s[0])) {
                                            o = 0;
                                            continue
                                        }
                                        if (3 === s[0] && (!n || s[1] > n[0] && s[1] < n[3])) {
                                            o.label = s[1];
                                            break
                                        }
                                        if (6 === s[0] && o.label < n[1]) {
                                            o.label = n[1], n = s;
                                            break
                                        }
                                        if (n && o.label < n[2]) {
                                            o.label = n[2], o.ops.push(s);
                                            break
                                        }
                                        n[2] && o.ops.pop(), o.trys.pop();
                                        continue
                                }
                                s = t.call(e, o)
                            } catch (e) {
                                s = [6, e], i = 0
                            } finally {
                                r = n = 0
                            }
                            if (5 & s[0]) throw s[1];
                            return {
                                value: s[0] ? s[1] : void 0,
                                done: !0
                            }
                        }([s, a])
                    }
                }
            }

            function f(e, t, r, i) {
                void 0 === i && (i = r), e[i] = t[r]
            }

            function p(e, t) {
                for (var r in e) "default" === r || t.hasOwnProperty(r) || (t[r] = e[r])
            }

            function d(e) {
                var t = "function" == typeof Symbol && Symbol.iterator,
                    r = t && e[t],
                    i = 0;
                if (r) return r.call(e);
                if (e && "number" == typeof e.length) return {
                    next: function() {
                        return e && i >= e.length && (e = void 0), {
                            value: e && e[i++],
                            done: !e
                        }
                    }
                };
                throw TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.")
            }

            function g(e, t) {
                var r = "function" == typeof Symbol && e[Symbol.iterator];
                if (!r) return e;
                var i, n, s = r.call(e),
                    o = [];
                try {
                    for (;
                        (void 0 === t || t-- > 0) && !(i = s.next()).done;) o.push(i.value)
                } catch (e) {
                    n = {
                        error: e
                    }
                } finally {
                    try {
                        i && !i.done && (r = s.return) && r.call(s)
                    } finally {
                        if (n) throw n.error
                    }
                }
                return o
            }

            function y() {
                for (var e = [], t = 0; t < arguments.length; t++) e = e.concat(g(arguments[t]));
                return e
            }

            function v() {
                for (var e = 0, t = 0, r = arguments.length; t < r; t++) e += arguments[t].length;
                for (var i = Array(e), n = 0, t = 0; t < r; t++)
                    for (var s = arguments[t], o = 0, a = s.length; o < a; o++, n++) i[n] = s[o];
                return i
            }

            function _(e) {
                return this instanceof _ ? (this.v = e, this) : new _(e)
            }

            function m(e, t, r) {
                if (!Symbol.asyncIterator) throw TypeError("Symbol.asyncIterator is not defined.");
                var i, n = r.apply(e, t || []),
                    s = [];
                return i = {}, o("next"), o("throw"), o("return"), i[Symbol.asyncIterator] = function() {
                    return this
                }, i;

                function o(e) {
                    n[e] && (i[e] = function(t) {
                        return new Promise(function(r, i) {
                            s.push([e, t, r, i]) > 1 || a(e, t)
                        })
                    })
                }

                function a(e, t) {
                    try {
                        var r;
                        (r = n[e](t)).value instanceof _ ? Promise.resolve(r.value.v).then(c, u) : l(s[0][2], r)
                    } catch (e) {
                        l(s[0][3], e)
                    }
                }

                function c(e) {
                    a("next", e)
                }

                function u(e) {
                    a("throw", e)
                }

                function l(e, t) {
                    e(t), s.shift(), s.length && a(s[0][0], s[0][1])
                }
            }

            function b(e) {
                var t, r;
                return t = {}, i("next"), i("throw", function(e) {
                    throw e
                }), i("return"), t[Symbol.iterator] = function() {
                    return this
                }, t;

                function i(i, n) {
                    t[i] = e[i] ? function(t) {
                        return (r = !r) ? {
                            value: _(e[i](t)),
                            done: "return" === i
                        } : n ? n(t) : t
                    } : n
                }
            }

            function w(e) {
                if (!Symbol.asyncIterator) throw TypeError("Symbol.asyncIterator is not defined.");
                var t, r = e[Symbol.asyncIterator];
                return r ? r.call(e) : (e = d(e), t = {}, i("next"), i("throw"), i("return"), t[Symbol.asyncIterator] = function() {
                    return this
                }, t);

                function i(r) {
                    t[r] = e[r] && function(t) {
                        return new Promise(function(i, n) {
                            ! function(e, t, r, i) {
                                Promise.resolve(i).then(function(t) {
                                    e({
                                        value: t,
                                        done: r
                                    })
                                }, t)
                            }(i, n, (t = e[r](t)).done, t.value)
                        })
                    }
                }
            }

            function E(e, t) {
                return Object.defineProperty ? Object.defineProperty(e, "raw", {
                    value: t
                }) : e.raw = t, e
            }

            function D(e) {
                if (e && e.__esModule) return e;
                var t = {};
                if (null != e)
                    for (var r in e) Object.hasOwnProperty.call(e, r) && (t[r] = e[r]);
                return t.default = e, t
            }

            function S(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }

            function I(e, t) {
                if (!t.has(e)) throw TypeError("attempted to get private field on non-instance");
                return t.get(e)
            }

            function O(e, t, r) {
                if (!t.has(e)) throw TypeError("attempted to set private field on non-instance");
                return t.set(e, r), r
            }
        },
        83041: function(e, t, r) {
            "use strict";
            let i = r(34111),
                n = r(61133),
                s = r(54867),
                o = r(86068),
                a = e => null == e,
                c = Symbol("encodeFragmentIdentifier");

            function u(e) {
                if ("string" != typeof e || 1 !== e.length) throw TypeError("arrayFormatSeparator must be single character string")
            }

            function l(e, t) {
                return t.encode ? t.strict ? i(e) : encodeURIComponent(e) : e
            }

            function h(e, t) {
                return t.decode ? n(e) : e
            }

            function f(e) {
                let t = e.indexOf("#");
                return -1 !== t && (e = e.slice(0, t)), e
            }

            function p(e) {
                let t = (e = f(e)).indexOf("?");
                return -1 === t ? "" : e.slice(t + 1)
            }

            function d(e, t) {
                return t.parseNumbers && !Number.isNaN(Number(e)) && "string" == typeof e && "" !== e.trim() ? e = Number(e) : t.parseBooleans && null !== e && ("true" === e.toLowerCase() || "false" === e.toLowerCase()) && (e = "true" === e.toLowerCase()), e
            }

            function g(e, t) {
                u((t = Object.assign({
                    decode: !0,
                    sort: !0,
                    arrayFormat: "none",
                    arrayFormatSeparator: ",",
                    parseNumbers: !1,
                    parseBooleans: !1
                }, t)).arrayFormatSeparator);
                let r = function(e) {
                        let t;
                        switch (e.arrayFormat) {
                            case "index":
                                return (e, r, i) => {
                                    if (t = /\[(\d*)\]$/.exec(e), e = e.replace(/\[\d*\]$/, ""), !t) {
                                        i[e] = r;
                                        return
                                    }
                                    void 0 === i[e] && (i[e] = {}), i[e][t[1]] = r
                                };
                            case "bracket":
                                return (e, r, i) => {
                                    if (t = /(\[\])$/.exec(e), e = e.replace(/\[\]$/, ""), !t) {
                                        i[e] = r;
                                        return
                                    }
                                    if (void 0 === i[e]) {
                                        i[e] = [r];
                                        return
                                    }
                                    i[e] = [].concat(i[e], r)
                                };
                            case "colon-list-separator":
                                return (e, r, i) => {
                                    if (t = /(:list)$/.exec(e), e = e.replace(/:list$/, ""), !t) {
                                        i[e] = r;
                                        return
                                    }
                                    if (void 0 === i[e]) {
                                        i[e] = [r];
                                        return
                                    }
                                    i[e] = [].concat(i[e], r)
                                };
                            case "comma":
                            case "separator":
                                return (t, r, i) => {
                                    let n = "string" == typeof r && r.includes(e.arrayFormatSeparator),
                                        s = "string" == typeof r && !n && h(r, e).includes(e.arrayFormatSeparator);
                                    r = s ? h(r, e) : r;
                                    let o = n || s ? r.split(e.arrayFormatSeparator).map(t => h(t, e)) : null === r ? r : h(r, e);
                                    i[t] = o
                                };
                            case "bracket-separator":
                                return (t, r, i) => {
                                    let n = /(\[\])$/.test(t);
                                    if (t = t.replace(/\[\]$/, ""), !n) {
                                        i[t] = r ? h(r, e) : r;
                                        return
                                    }
                                    let s = null === r ? [] : r.split(e.arrayFormatSeparator).map(t => h(t, e));
                                    if (void 0 === i[t]) {
                                        i[t] = s;
                                        return
                                    }
                                    i[t] = [].concat(i[t], s)
                                };
                            default:
                                return (e, t, r) => {
                                    if (void 0 === r[e]) {
                                        r[e] = t;
                                        return
                                    }
                                    r[e] = [].concat(r[e], t)
                                }
                        }
                    }(t),
                    i = Object.create(null);
                if ("string" != typeof e || !(e = e.trim().replace(/^[?#&]/, ""))) return i;
                for (let n of e.split("&")) {
                    if ("" === n) continue;
                    let [e, o] = s(t.decode ? n.replace(/\+/g, " ") : n, "=");
                    o = void 0 === o ? null : ["comma", "separator", "bracket-separator"].includes(t.arrayFormat) ? o : h(o, t), r(h(e, t), o, i)
                }
                for (let e of Object.keys(i)) {
                    let r = i[e];
                    if ("object" == typeof r && null !== r)
                        for (let e of Object.keys(r)) r[e] = d(r[e], t);
                    else i[e] = d(r, t)
                }
                return !1 === t.sort ? i : (!0 === t.sort ? Object.keys(i).sort() : Object.keys(i).sort(t.sort)).reduce((e, t) => {
                    let r = i[t];
                    return r && "object" == typeof r && !Array.isArray(r) ? e[t] = function e(t) {
                        return Array.isArray(t) ? t.sort() : "object" == typeof t ? e(Object.keys(t)).sort((e, t) => Number(e) - Number(t)).map(e => t[e]) : t
                    }(r) : e[t] = r, e
                }, Object.create(null))
            }
            t.extract = p, t.parse = g, t.stringify = (e, t) => {
                if (!e) return "";
                u((t = Object.assign({
                    encode: !0,
                    strict: !0,
                    arrayFormat: "none",
                    arrayFormatSeparator: ","
                }, t)).arrayFormatSeparator);
                let r = r => t.skipNull && a(e[r]) || t.skipEmptyString && "" === e[r],
                    i = function(e) {
                        switch (e.arrayFormat) {
                            case "index":
                                return t => (r, i) => {
                                    let n = r.length;
                                    return void 0 === i || e.skipNull && null === i || e.skipEmptyString && "" === i ? r : null === i ? [...r, [l(t, e), "[", n, "]"].join("")] : [...r, [l(t, e), "[", l(n, e), "]=", l(i, e)].join("")]
                                };
                            case "bracket":
                                return t => (r, i) => void 0 === i || e.skipNull && null === i || e.skipEmptyString && "" === i ? r : null === i ? [...r, [l(t, e), "[]"].join("")] : [...r, [l(t, e), "[]=", l(i, e)].join("")];
                            case "colon-list-separator":
                                return t => (r, i) => void 0 === i || e.skipNull && null === i || e.skipEmptyString && "" === i ? r : null === i ? [...r, [l(t, e), ":list="].join("")] : [...r, [l(t, e), ":list=", l(i, e)].join("")];
                            case "comma":
                            case "separator":
                            case "bracket-separator":
                                {
                                    let t = "bracket-separator" === e.arrayFormat ? "[]=" : "=";
                                    return r => (i, n) => void 0 === n || e.skipNull && null === n || e.skipEmptyString && "" === n ? i : (n = null === n ? "" : n, 0 === i.length) ? [
                                        [l(r, e), t, l(n, e)].join("")
                                    ] : [
                                        [i, l(n, e)].join(e.arrayFormatSeparator)
                                    ]
                                }
                            default:
                                return t => (r, i) => void 0 === i || e.skipNull && null === i || e.skipEmptyString && "" === i ? r : null === i ? [...r, l(t, e)] : [...r, [l(t, e), "=", l(i, e)].join("")]
                        }
                    }(t),
                    n = {};
                for (let t of Object.keys(e)) r(t) || (n[t] = e[t]);
                let s = Object.keys(n);
                return !1 !== t.sort && s.sort(t.sort), s.map(r => {
                    let n = e[r];
                    return void 0 === n ? "" : null === n ? l(r, t) : Array.isArray(n) ? 0 === n.length && "bracket-separator" === t.arrayFormat ? l(r, t) + "[]" : n.reduce(i(r), []).join("&") : l(r, t) + "=" + l(n, t)
                }).filter(e => e.length > 0).join("&")
            }, t.parseUrl = (e, t) => {
                t = Object.assign({
                    decode: !0
                }, t);
                let [r, i] = s(e, "#");
                return Object.assign({
                    url: r.split("?")[0] || "",
                    query: g(p(e), t)
                }, t && t.parseFragmentIdentifier && i ? {
                    fragmentIdentifier: h(i, t)
                } : {})
            }, t.stringifyUrl = (e, r) => {
                r = Object.assign({
                    encode: !0,
                    strict: !0,
                    [c]: !0
                }, r);
                let i = f(e.url).split("?")[0] || "",
                    n = t.extract(e.url),
                    s = Object.assign(t.parse(n, {
                        sort: !1
                    }), e.query),
                    o = t.stringify(s, r);
                o && (o = `?${o}`);
                let a = function(e) {
                    let t = "",
                        r = e.indexOf("#");
                    return -1 !== r && (t = e.slice(r)), t
                }(e.url);
                return e.fragmentIdentifier && (a = `#${r[c]?l(e.fragmentIdentifier,r):e.fragmentIdentifier}`), `${i}${o}${a}`
            }, t.pick = (e, r, i) => {
                i = Object.assign({
                    parseFragmentIdentifier: !0,
                    [c]: !1
                }, i);
                let {
                    url: n,
                    query: s,
                    fragmentIdentifier: a
                } = t.parseUrl(e, i);
                return t.stringifyUrl({
                    url: n,
                    query: o(s, r),
                    fragmentIdentifier: a
                }, i)
            }, t.exclude = (e, r, i) => {
                let n = Array.isArray(r) ? e => !r.includes(e) : (e, t) => !r(e, t);
                return t.pick(e, n, i)
            }
        },
        68652: function(e, t, r) {
            e = r.nmd(e);
            var i, n, s, o = "__lodash_hash_undefined__",
                a = "[object Arguments]",
                c = "[object Array]",
                u = "[object Boolean]",
                l = "[object Date]",
                h = "[object Error]",
                f = "[object Function]",
                p = "[object Map]",
                d = "[object Number]",
                g = "[object Object]",
                y = "[object Promise]",
                v = "[object RegExp]",
                _ = "[object Set]",
                m = "[object String]",
                b = "[object WeakMap]",
                w = "[object ArrayBuffer]",
                E = "[object DataView]",
                D = /^\[object .+?Constructor\]$/,
                S = /^(?:0|[1-9]\d*)$/,
                I = {};
            I["[object Float32Array]"] = I["[object Float64Array]"] = I["[object Int8Array]"] = I["[object Int16Array]"] = I["[object Int32Array]"] = I["[object Uint8Array]"] = I["[object Uint8ClampedArray]"] = I["[object Uint16Array]"] = I["[object Uint32Array]"] = !0, I[a] = I[c] = I[w] = I[u] = I[E] = I[l] = I[h] = I[f] = I[p] = I[d] = I[g] = I[v] = I[_] = I[m] = I[b] = !1;
            var O = "object" == typeof r.g && r.g && r.g.Object === Object && r.g,
                P = "object" == typeof self && self && self.Object === Object && self,
                C = O || P || Function("return this")(),
                A = t && !t.nodeType && t,
                x = A && e && !e.nodeType && e,
                N = x && x.exports === A,
                R = N && O.process,
                T = function() {
                    try {
                        return R && R.binding && R.binding("util")
                    } catch (e) {}
                }(),
                j = T && T.isTypedArray;

            function U(e) {
                var t = -1,
                    r = Array(e.size);
                return e.forEach(function(e, i) {
                    r[++t] = [i, e]
                }), r
            }

            function L(e) {
                var t = -1,
                    r = Array(e.size);
                return e.forEach(function(e) {
                    r[++t] = e
                }), r
            }
            var M = Array.prototype,
                k = Function.prototype,
                z = Object.prototype,
                $ = C["__core-js_shared__"],
                q = k.toString,
                H = z.hasOwnProperty,
                F = (i = /[^.]+$/.exec($ && $.keys && $.keys.IE_PROTO || "")) ? "Symbol(src)_1." + i : "",
                V = z.toString,
                K = RegExp("^" + q.call(H).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"),
                B = N ? C.Buffer : void 0,
                G = C.Symbol,
                W = C.Uint8Array,
                J = z.propertyIsEnumerable,
                Y = M.splice,
                Z = G ? G.toStringTag : void 0,
                X = Object.getOwnPropertySymbols,
                Q = B ? B.isBuffer : void 0,
                ee = (n = Object.keys, s = Object, function(e) {
                    return n(s(e))
                }),
                et = eI(C, "DataView"),
                er = eI(C, "Map"),
                ei = eI(C, "Promise"),
                en = eI(C, "Set"),
                es = eI(C, "WeakMap"),
                eo = eI(Object, "create"),
                ea = eC(et),
                ec = eC(er),
                eu = eC(ei),
                el = eC(en),
                eh = eC(es),
                ef = G ? G.prototype : void 0,
                ep = ef ? ef.valueOf : void 0;

            function ed(e) {
                var t = -1,
                    r = null == e ? 0 : e.length;
                for (this.clear(); ++t < r;) {
                    var i = e[t];
                    this.set(i[0], i[1])
                }
            }

            function eg(e) {
                var t = -1,
                    r = null == e ? 0 : e.length;
                for (this.clear(); ++t < r;) {
                    var i = e[t];
                    this.set(i[0], i[1])
                }
            }

            function ey(e) {
                var t = -1,
                    r = null == e ? 0 : e.length;
                for (this.clear(); ++t < r;) {
                    var i = e[t];
                    this.set(i[0], i[1])
                }
            }

            function ev(e) {
                var t = -1,
                    r = null == e ? 0 : e.length;
                for (this.__data__ = new ey; ++t < r;) this.add(e[t])
            }

            function e_(e) {
                var t = this.__data__ = new eg(e);
                this.size = t.size
            }

            function em(e, t) {
                for (var r = e.length; r--;)
                    if (eA(e[r][0], t)) return r;
                return -1
            }

            function eb(e) {
                return null == e ? void 0 === e ? "[object Undefined]" : "[object Null]" : Z && Z in Object(e) ? function(e) {
                    var t = H.call(e, Z),
                        r = e[Z];
                    try {
                        e[Z] = void 0;
                        var i = !0
                    } catch (e) {}
                    var n = V.call(e);
                    return i && (t ? e[Z] = r : delete e[Z]), n
                }(e) : V.call(e)
            }

            function ew(e) {
                return eL(e) && eb(e) == a
            }

            function eE(e, t, r, i, n, s) {
                var o = 1 & r,
                    a = e.length,
                    c = t.length;
                if (a != c && !(o && c > a)) return !1;
                var u = s.get(e);
                if (u && s.get(t)) return u == t;
                var l = -1,
                    h = !0,
                    f = 2 & r ? new ev : void 0;
                for (s.set(e, t), s.set(t, e); ++l < a;) {
                    var p = e[l],
                        d = t[l];
                    if (i) var g = o ? i(d, p, l, t, e, s) : i(p, d, l, e, t, s);
                    if (void 0 !== g) {
                        if (g) continue;
                        h = !1;
                        break
                    }
                    if (f) {
                        if (! function(e, t) {
                                for (var r = -1, i = null == e ? 0 : e.length; ++r < i;)
                                    if (t(e[r], r, e)) return !0;
                                return !1
                            }(t, function(e, t) {
                                if (!f.has(t) && (p === e || n(p, e, r, i, s))) return f.push(t)
                            })) {
                            h = !1;
                            break
                        }
                    } else if (!(p === d || n(p, d, r, i, s))) {
                        h = !1;
                        break
                    }
                }
                return s.delete(e), s.delete(t), h
            }

            function eD(e) {
                var t;
                return t = function(e) {
                    return null != e && ej(e.length) && !eT(e) ? function(e, t) {
                        var r, i = eN(e),
                            n = !i && ex(e),
                            s = !i && !n && eR(e),
                            o = !i && !n && !s && eM(e),
                            a = i || n || s || o,
                            c = a ? function(e, t) {
                                for (var r = -1, i = Array(e); ++r < e;) i[r] = t(r);
                                return i
                            }(e.length, String) : [],
                            u = c.length;
                        for (var l in e) H.call(e, l) && !(a && ("length" == l || s && ("offset" == l || "parent" == l) || o && ("buffer" == l || "byteLength" == l || "byteOffset" == l) || (r = null == (r = u) ? 9007199254740991 : r) && ("number" == typeof l || S.test(l)) && l > -1 && l % 1 == 0 && l < r)) && c.push(l);
                        return c
                    }(e) : function(e) {
                        if (t = e && e.constructor, e !== ("function" == typeof t && t.prototype || z)) return ee(e);
                        var t, r = [];
                        for (var i in Object(e)) H.call(e, i) && "constructor" != i && r.push(i);
                        return r
                    }(e)
                }(e), eN(e) ? t : function(e, t) {
                    for (var r = -1, i = t.length, n = e.length; ++r < i;) e[n + r] = t[r];
                    return e
                }(t, eO(e))
            }

            function eS(e, t) {
                var r, i = e.__data__;
                return ("string" == (r = typeof t) || "number" == r || "symbol" == r || "boolean" == r ? "__proto__" !== t : null === t) ? i["string" == typeof t ? "string" : "hash"] : i.map
            }

            function eI(e, t) {
                var r = null == e ? void 0 : e[t];
                return !(!eU(r) || F && F in r) && (eT(r) ? K : D).test(eC(r)) ? r : void 0
            }
            ed.prototype.clear = function() {
                this.__data__ = eo ? eo(null) : {}, this.size = 0
            }, ed.prototype.delete = function(e) {
                var t = this.has(e) && delete this.__data__[e];
                return this.size -= t ? 1 : 0, t
            }, ed.prototype.get = function(e) {
                var t = this.__data__;
                if (eo) {
                    var r = t[e];
                    return r === o ? void 0 : r
                }
                return H.call(t, e) ? t[e] : void 0
            }, ed.prototype.has = function(e) {
                var t = this.__data__;
                return eo ? void 0 !== t[e] : H.call(t, e)
            }, ed.prototype.set = function(e, t) {
                var r = this.__data__;
                return this.size += this.has(e) ? 0 : 1, r[e] = eo && void 0 === t ? o : t, this
            }, eg.prototype.clear = function() {
                this.__data__ = [], this.size = 0
            }, eg.prototype.delete = function(e) {
                var t = this.__data__,
                    r = em(t, e);
                return !(r < 0) && (r == t.length - 1 ? t.pop() : Y.call(t, r, 1), --this.size, !0)
            }, eg.prototype.get = function(e) {
                var t = this.__data__,
                    r = em(t, e);
                return r < 0 ? void 0 : t[r][1]
            }, eg.prototype.has = function(e) {
                return em(this.__data__, e) > -1
            }, eg.prototype.set = function(e, t) {
                var r = this.__data__,
                    i = em(r, e);
                return i < 0 ? (++this.size, r.push([e, t])) : r[i][1] = t, this
            }, ey.prototype.clear = function() {
                this.size = 0, this.__data__ = {
                    hash: new ed,
                    map: new(er || eg),
                    string: new ed
                }
            }, ey.prototype.delete = function(e) {
                var t = eS(this, e).delete(e);
                return this.size -= t ? 1 : 0, t
            }, ey.prototype.get = function(e) {
                return eS(this, e).get(e)
            }, ey.prototype.has = function(e) {
                return eS(this, e).has(e)
            }, ey.prototype.set = function(e, t) {
                var r = eS(this, e),
                    i = r.size;
                return r.set(e, t), this.size += r.size == i ? 0 : 1, this
            }, ev.prototype.add = ev.prototype.push = function(e) {
                return this.__data__.set(e, o), this
            }, ev.prototype.has = function(e) {
                return this.__data__.has(e)
            }, e_.prototype.clear = function() {
                this.__data__ = new eg, this.size = 0
            }, e_.prototype.delete = function(e) {
                var t = this.__data__,
                    r = t.delete(e);
                return this.size = t.size, r
            }, e_.prototype.get = function(e) {
                return this.__data__.get(e)
            }, e_.prototype.has = function(e) {
                return this.__data__.has(e)
            }, e_.prototype.set = function(e, t) {
                var r = this.__data__;
                if (r instanceof eg) {
                    var i = r.__data__;
                    if (!er || i.length < 199) return i.push([e, t]), this.size = ++r.size, this;
                    r = this.__data__ = new ey(i)
                }
                return r.set(e, t), this.size = r.size, this
            };
            var eO = X ? function(e) {
                    return null == e ? [] : function(e, t) {
                        for (var r = -1, i = null == e ? 0 : e.length, n = 0, s = []; ++r < i;) {
                            var o = e[r];
                            t(o, r, e) && (s[n++] = o)
                        }
                        return s
                    }(X(e = Object(e)), function(t) {
                        return J.call(e, t)
                    })
                } : function() {
                    return []
                },
                eP = eb;

            function eC(e) {
                if (null != e) {
                    try {
                        return q.call(e)
                    } catch (e) {}
                    try {
                        return e + ""
                    } catch (e) {}
                }
                return ""
            }

            function eA(e, t) {
                return e === t || e != e && t != t
            }(et && eP(new et(new ArrayBuffer(1))) != E || er && eP(new er) != p || ei && eP(ei.resolve()) != y || en && eP(new en) != _ || es && eP(new es) != b) && (eP = function(e) {
                var t = eb(e),
                    r = t == g ? e.constructor : void 0,
                    i = r ? eC(r) : "";
                if (i) switch (i) {
                    case ea:
                        return E;
                    case ec:
                        return p;
                    case eu:
                        return y;
                    case el:
                        return _;
                    case eh:
                        return b
                }
                return t
            });
            var ex = ew(function() {
                    return arguments
                }()) ? ew : function(e) {
                    return eL(e) && H.call(e, "callee") && !J.call(e, "callee")
                },
                eN = Array.isArray,
                eR = Q || function() {
                    return !1
                };

            function eT(e) {
                if (!eU(e)) return !1;
                var t = eb(e);
                return t == f || "[object GeneratorFunction]" == t || "[object AsyncFunction]" == t || "[object Proxy]" == t
            }

            function ej(e) {
                return "number" == typeof e && e > -1 && e % 1 == 0 && e <= 9007199254740991
            }

            function eU(e) {
                var t = typeof e;
                return null != e && ("object" == t || "function" == t)
            }

            function eL(e) {
                return null != e && "object" == typeof e
            }
            var eM = j ? function(e) {
                return j(e)
            } : function(e) {
                return eL(e) && ej(e.length) && !!I[eb(e)]
            };
            e.exports = function(e, t) {
                return function e(t, r, i, n, s) {
                    return t === r || (null != t && null != r && (eL(t) || eL(r)) ? function(e, t, r, i, n, s) {
                        var o = eN(e),
                            f = eN(t),
                            y = o ? c : eP(e),
                            b = f ? c : eP(t);
                        y = y == a ? g : y, b = b == a ? g : b;
                        var D = y == g,
                            S = b == g,
                            I = y == b;
                        if (I && eR(e)) {
                            if (!eR(t)) return !1;
                            o = !0, D = !1
                        }
                        if (I && !D) return s || (s = new e_), o || eM(e) ? eE(e, t, r, i, n, s) : function(e, t, r, i, n, s, o) {
                            switch (r) {
                                case E:
                                    if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset) break;
                                    e = e.buffer, t = t.buffer;
                                case w:
                                    if (e.byteLength != t.byteLength || !s(new W(e), new W(t))) break;
                                    return !0;
                                case u:
                                case l:
                                case d:
                                    return eA(+e, +t);
                                case h:
                                    return e.name == t.name && e.message == t.message;
                                case v:
                                case m:
                                    return e == t + "";
                                case p:
                                    var a = U;
                                case _:
                                    var c = 1 & i;
                                    if (a || (a = L), e.size != t.size && !c) break;
                                    var f = o.get(e);
                                    if (f) return f == t;
                                    i |= 2, o.set(e, t);
                                    var g = eE(a(e), a(t), i, n, s, o);
                                    return o.delete(e), g;
                                case "[object Symbol]":
                                    if (ep) return ep.call(e) == ep.call(t)
                            }
                            return !1
                        }(e, t, y, r, i, n, s);
                        if (!(1 & r)) {
                            var O = D && H.call(e, "__wrapped__"),
                                P = S && H.call(t, "__wrapped__");
                            if (O || P) {
                                var C = O ? e.value() : e,
                                    A = P ? t.value() : t;
                                return s || (s = new e_), n(C, A, r, i, s)
                            }
                        }
                        return !!I && (s || (s = new e_), function(e, t, r, i, n, s) {
                            var o = 1 & r,
                                a = eD(e),
                                c = a.length;
                            if (c != eD(t).length && !o) return !1;
                            for (var u = c; u--;) {
                                var l = a[u];
                                if (!(o ? l in t : H.call(t, l))) return !1
                            }
                            var h = s.get(e);
                            if (h && s.get(t)) return h == t;
                            var f = !0;
                            s.set(e, t), s.set(t, e);
                            for (var p = o; ++u < c;) {
                                var d = e[l = a[u]],
                                    g = t[l];
                                if (i) var y = o ? i(g, d, l, t, e, s) : i(d, g, l, e, t, s);
                                if (!(void 0 === y ? d === g || n(d, g, r, i, s) : y)) {
                                    f = !1;
                                    break
                                }
                                p || (p = "constructor" == l)
                            }
                            if (f && !p) {
                                var v = e.constructor,
                                    _ = t.constructor;
                                v != _ && "constructor" in e && "constructor" in t && !("function" == typeof v && v instanceof v && "function" == typeof _ && _ instanceof _) && (f = !1)
                            }
                            return s.delete(e), s.delete(t), f
                        }(e, t, r, i, n, s))
                    }(t, r, i, n, e, s) : t != t && r != r)
                }(e, t)
            }
        },
        73754: function(e) {
            "use strict";

            function t(e) {
                try {
                    return JSON.stringify(e)
                } catch (e) {
                    return '"[Circular]"'
                }
            }
            e.exports = function(e, r, i) {
                var n = i && i.stringify || t;
                if ("object" == typeof e && null !== e) {
                    var s = r.length + 1;
                    if (1 === s) return e;
                    var o = Array(s);
                    o[0] = n(e);
                    for (var a = 1; a < s; a++) o[a] = n(r[a]);
                    return o.join(" ")
                }
                if ("string" != typeof e) return e;
                var c = r.length;
                if (0 === c) return e;
                for (var u = "", l = 0, h = -1, f = e && e.length || 0, p = 0; p < f;) {
                    if (37 === e.charCodeAt(p) && p + 1 < f) {
                        switch (h = h > -1 ? h : 0, e.charCodeAt(p + 1)) {
                            case 100:
                            case 102:
                                if (l >= c || null == r[l]) break;
                                h < p && (u += e.slice(h, p)), u += Number(r[l]), h = p + 2, p++;
                                break;
                            case 105:
                                if (l >= c || null == r[l]) break;
                                h < p && (u += e.slice(h, p)), u += Math.floor(Number(r[l])), h = p + 2, p++;
                                break;
                            case 79:
                            case 111:
                            case 106:
                                if (l >= c || void 0 === r[l]) break;
                                h < p && (u += e.slice(h, p));
                                var d = typeof r[l];
                                if ("string" === d) {
                                    u += "'" + r[l] + "'", h = p + 2, p++;
                                    break
                                }
                                if ("function" === d) {
                                    u += r[l].name || "<anonymous>", h = p + 2, p++;
                                    break
                                }
                                u += n(r[l]), h = p + 2, p++;
                                break;
                            case 115:
                                if (l >= c) break;
                                h < p && (u += e.slice(h, p)), u += String(r[l]), h = p + 2, p++;
                                break;
                            case 37:
                                h < p && (u += e.slice(h, p)), u += "%", h = p + 2, p++, l--
                        }++l
                    }++p
                }
                return -1 === h ? e : (h < f && (u += e.slice(h)), u)
            }
        },
        66253: function(e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.safeJsonParse = function(e) {
                if ("string" != typeof e) throw Error(`Cannot safe json parse value of type ${typeof e}`);
                try {
                    return JSON.parse(e)
                } catch (t) {
                    return e
                }
            }, t.safeJsonStringify = function(e) {
                return "string" == typeof e ? e : JSON.stringify(e, (e, t) => void 0 === t ? null : t)
            }
        },
        3490: function(e, t, r) {
            "use strict";
            let i = r(73754);
            e.exports = s;
            let n = function() {
                function e(e) {
                    return void 0 !== e && e
                }
                try {
                    if ("undefined" != typeof globalThis) return globalThis;
                    return Object.defineProperty(Object.prototype, "globalThis", {
                        get: function() {
                            return delete Object.prototype.globalThis, this.globalThis = this
                        },
                        configurable: !0
                    }), globalThis
                } catch (t) {
                    return e(self) || e(window) || e(this) || {}
                }
            }().console || {};

            function s(e) {
                var t, r;
                (e = e || {}).browser = e.browser || {};
                let i = e.browser.transmit;
                if (i && "function" != typeof i.send) throw Error("pino: transmit option must have a send function");
                let l = e.browser.write || n;
                e.browser.write && (e.browser.asObject = !0);
                let h = e.serializers || {},
                    g = Array.isArray(t = e.browser.serialize) ? t.filter(function(e) {
                        return "!stdSerializers.err" !== e
                    }) : !0 === t && Object.keys(h),
                    y = e.browser.serialize;
                Array.isArray(e.browser.serialize) && e.browser.serialize.indexOf("!stdSerializers.err") > -1 && (y = !1), "function" == typeof l && (l.error = l.fatal = l.warn = l.info = l.debug = l.trace = l), !1 === e.enabled && (e.level = "silent");
                let v = e.level || "info",
                    _ = Object.create(l);
                _.log || (_.log = f), Object.defineProperty(_, "levelVal", {
                    get: function() {
                        return "silent" === this.level ? 1 / 0 : this.levels.values[this.level]
                    }
                }), Object.defineProperty(_, "level", {
                    get: function() {
                        return this._level
                    },
                    set: function(e) {
                        if ("silent" !== e && !this.levels.values[e]) throw Error("unknown level " + e);
                        this._level = e, o(m, _, "error", "log"), o(m, _, "fatal", "error"), o(m, _, "warn", "error"), o(m, _, "info", "log"), o(m, _, "debug", "log"), o(m, _, "trace", "log")
                    }
                });
                let m = {
                    transmit: i,
                    serialize: g,
                    asObject: e.browser.asObject,
                    levels: ["error", "fatal", "warn", "info", "debug", "trace"],
                    timestamp: "function" == typeof(r = e).timestamp ? r.timestamp : !1 === r.timestamp ? p : d
                };
                return _.levels = s.levels, _.level = v, _.setMaxListeners = _.getMaxListeners = _.emit = _.addListener = _.on = _.prependListener = _.once = _.prependOnceListener = _.removeListener = _.removeAllListeners = _.listeners = _.listenerCount = _.eventNames = _.write = _.flush = f, _.serializers = h, _._serialize = g, _._stdErrSerialize = y, _.child = function(t, r) {
                    if (!t) throw Error("missing bindings for child Pino");
                    r = r || {}, g && t.serializers && (r.serializers = t.serializers);
                    let n = r.serializers;
                    if (g && n) {
                        var s = Object.assign({}, h, n),
                            o = !0 === e.browser.serialize ? Object.keys(s) : g;
                        delete t.serializers, a([t], o, s, this._stdErrSerialize)
                    }

                    function l(e) {
                        this._childLevel = (0 | e._childLevel) + 1, this.error = c(e, t, "error"), this.fatal = c(e, t, "fatal"), this.warn = c(e, t, "warn"), this.info = c(e, t, "info"), this.debug = c(e, t, "debug"), this.trace = c(e, t, "trace"), s && (this.serializers = s, this._serialize = o), i && (this._logEvent = u([].concat(e._logEvent.bindings, t)))
                    }
                    return l.prototype = this, new l(this)
                }, i && (_._logEvent = u()), _
            }

            function o(e, t, r, o) {
                let c = Object.getPrototypeOf(t);
                t[r] = t.levelVal > t.levels.values[r] ? f : c[r] ? c[r] : n[r] || n[o] || f,
                    function(e, t, r) {
                        if (e.transmit || t[r] !== f) {
                            var o;
                            t[r] = (o = t[r], function() {
                                let c = e.timestamp(),
                                    l = Array(arguments.length),
                                    h = Object.getPrototypeOf && Object.getPrototypeOf(this) === n ? n : this;
                                for (var f = 0; f < l.length; f++) l[f] = arguments[f];
                                if (e.serialize && !e.asObject && a(l, this._serialize, this.serializers, this._stdErrSerialize), e.asObject ? o.call(h, function(e, t, r, n) {
                                        e._serialize && a(r, e._serialize, e.serializers, e._stdErrSerialize);
                                        let o = r.slice(),
                                            c = o[0],
                                            u = {};
                                        n && (u.time = n), u.level = s.levels.values[t];
                                        let l = (0 | e._childLevel) + 1;
                                        if (l < 1 && (l = 1), null !== c && "object" == typeof c) {
                                            for (; l-- && "object" == typeof o[0];) Object.assign(u, o.shift());
                                            c = o.length ? i(o.shift(), o) : void 0
                                        } else "string" == typeof c && (c = i(o.shift(), o));
                                        return void 0 !== c && (u.msg = c), u
                                    }(this, r, l, c)) : o.apply(h, l), e.transmit) {
                                    let i = e.transmit.level || t.level,
                                        n = s.levels.values[i],
                                        o = s.levels.values[r];
                                    if (o < n) return;
                                    (function(e, t, r) {
                                        let i = t.send,
                                            n = t.ts,
                                            s = t.methodLevel,
                                            o = t.methodValue,
                                            c = t.val,
                                            l = e._logEvent.bindings;
                                        a(r, e._serialize || Object.keys(e.serializers), e.serializers, void 0 === e._stdErrSerialize || e._stdErrSerialize), e._logEvent.ts = n, e._logEvent.messages = r.filter(function(e) {
                                            return -1 === l.indexOf(e)
                                        }), e._logEvent.level.label = s, e._logEvent.level.value = o, i(s, e._logEvent, c), e._logEvent = u(l)
                                    })(this, {
                                        ts: c,
                                        methodLevel: r,
                                        methodValue: o,
                                        transmitLevel: i,
                                        transmitValue: s.levels.values[e.transmit.level || t.level],
                                        send: e.transmit.send,
                                        val: t.levelVal
                                    }, l)
                                }
                            })
                        }
                    }(e, t, r)
            }

            function a(e, t, r, i) {
                for (let n in e)
                    if (i && e[n] instanceof Error) e[n] = s.stdSerializers.err(e[n]);
                    else if ("object" == typeof e[n] && !Array.isArray(e[n]))
                    for (let i in e[n]) t && t.indexOf(i) > -1 && i in r && (e[n][i] = r[i](e[n][i]))
            }

            function c(e, t, r) {
                return function() {
                    let i = Array(1 + arguments.length);
                    i[0] = t;
                    for (var n = 1; n < i.length; n++) i[n] = arguments[n - 1];
                    return e[r].apply(this, i)
                }
            }

            function u(e) {
                return {
                    ts: 0,
                    messages: [],
                    bindings: e || [],
                    level: {
                        label: "",
                        value: 0
                    }
                }
            }

            function l() {
                return {}
            }

            function h(e) {
                return e
            }

            function f() {}

            function p() {
                return !1
            }

            function d() {
                return Date.now()
            }
            s.levels = {
                values: {
                    fatal: 60,
                    error: 50,
                    warn: 40,
                    info: 30,
                    debug: 20,
                    trace: 10
                },
                labels: {
                    10: "trace",
                    20: "debug",
                    30: "info",
                    40: "warn",
                    50: "error",
                    60: "fatal"
                }
            }, s.stdSerializers = {
                mapHttpRequest: l,
                mapHttpResponse: l,
                wrapRequestSerializer: h,
                wrapResponseSerializer: h,
                wrapErrorSerializer: h,
                req: l,
                res: l,
                err: function(e) {
                    let t = {
                        type: e.constructor.name,
                        msg: e.message,
                        stack: e.stack
                    };
                    for (let r in e) void 0 === t[r] && (t[r] = e[r]);
                    return t
                }
            }, s.stdTimeFunctions = Object.assign({}, {
                nullTime: p,
                epochTime: d,
                unixTime: function() {
                    return Math.round(Date.now() / 1e3)
                },
                isoTime: function() {
                    return new Date(Date.now()).toISOString()
                }
            })
        }
    }
]);