(function e(t, n, r) {
    function s(o, u) {
        if (!n[o]) {
            if (!t[o]) {
                var a = typeof require == "function" && require;
                if (!u && a) return a(o, !0);
                if (i) return i(o, !0);
                var f = new Error("Cannot find module '" + o + "'");
                throw f.code = "MODULE_NOT_FOUND", f
            }
            var l = n[o] = {exports: {}};
            t[o][0].call(l.exports, function (e) {
                var n = t[o][1][e];
                return s(n ? n : e)
            }, l, l.exports, e, t, n, r)
        }
        return n[o].exports
    }

    var i = typeof require == "function" && require;
    for (var o = 0; o < r.length; o++) s(r[o]);
    return s
})({
    1: [function (require, module, exports) {
        Function(function (t) {
            return 'e(e,a,r){(b[e]||(b[e]=t("x,y","x "+e+" y")(r,a)}a(e,a,r){(k[r]||(k[r]=t("x,y","new x[y]("+Array(r+1).join(",x[y]")(1)+")")(e,a)}r(e,a,r){n,t,s={},b=s.d=r?r.d+1:0;for(s["$"+b]=s,t=0;t<b;t)s[n="$"+t]=r[n];for(t=0,b=s=a;t<b;t)s[t]=a[t];c(e,0,s)}c(t,b,k){u(e){v[x]=e}f{g=,ting(bg)}l{try{y=c(t,b,k)}catch(e){h=e,y=l}}for(h,y,d,g,v=[],x=0;;)switch(g=){case 1:u(!)4:f5:u((e){a=0,r=e;{c=a<r;c&&u(e[a]),c}}(6:y=,u((y8:if(g=,lg,g=,y===c)b+=g;else if(y!==l)y9:c10:u(s(11:y=,u(+y)12:for(y=f,d=[],g=0;g<y;g)d[g]=y.charCodeAt(g)^g+y;u(String.fromCharCode.apply(null,d13:y=,h=delete [y]14:59:u((g=)?(y=x,v.slice(x-=g,y:[])61:u([])62:g=,k[0]=65599*k[0]+k[1].charCodeAt(g)>>>065:h=,y=,[y]=h66:u(e(t[b],,67:y=,d=,u((g=).x===c?r(g.y,y,k):g.apply(d,y68:u(e((g=t[b])<"<"?(b--,f):g+g,,70:u(!1)71:n72:+f73:u(parseInt(f,3675:if(){bcase 74:g=<<16>>16g76:u(k[])77:y=,u([y])78:g=,u(a(v,x-=g+1,g79:g=,u(k["$"+g])81:h=,[f]=h82:u([f])83:h=,k[]=h84:!085:void 086:u(v[x-1])88:h=,y=,h,y89:u({e{r(e.y,arguments,k)}e.y=f,e.x=c,e})90:null91:h93:h=0:;default:u((g<<16>>16)-16)}}n=this,t=n.Function,s=Object.keys||(e){a={},r=0;for(c in e)a[r]=c;a=r,a},b={},k={};r'.replace(/[-]/g, function (m) {
                return t[m.charCodeAt(0) & 15]
            })
        }("v[x++]=v[--x]t.charCodeAt(b++)-32function return ))++.substrvar .length(),b+=;break;case ;break}".split("")))()('gr$Daten Иb/s!l y͒yĹg,(lfi~ah`{mv,-n|jqewVxp{rvmmx,&effkx[!cs"l".Pq%widthl"@q&heightl"vr*getContextx$"2d[!cs#l#,*;?|u.|uc{uq$fontl#vr(fillTextx$$龘ฑภ경2<[#c}l#2q*shadowBlurl#1q-shadowOffsetXl#$$limeq+shadowColorl#vr#arcx88802[%c}l#vr&strokex[ c}l"v,)}eOmyoZB]mx[ cs!0s$l$Pb<k7l l!r&lengthb%^l$1+s$jl  s#i$1ek1s$gr#tack4)zgr#tac$! +0o![#cj?o ]!l$b%s"o ]!l"l$b*b^0d#>>>s!0s%yA0s"l"l!r&lengthb<k+l"^l"1+s"jl  s&l&z0l!$ +["cs\'(0l#i\'1ps9wxb&s() &{s)/s(gr&Stringr,fromCharCodes)0s*yWl ._b&s o!])l l Jb<k$.aj;l .Tb<k$.gj/l .^b<k&i"-4j!+& s+yPo!]+s!l!l Hd>&l!l Bd>&+l!l <d>&+l!l 6d>&+l!l &+ s,y=o!o!]/q"13o!l q"10o!],l 2d>& s.{s-yMo!o!]0q"13o!]*Ld<l 4d#>>>b|s!o!l q"10o!],l!& s/yIo!o!].q"13o!],o!]*Jd<l 6d#>>>b|&o!]+l &+ s0l-l!&l-l!i\'1z141z4b/@d<l"b|&+l-l(l!b^&+l-l&zl\'g,)gk}ejo{cm,)|yn~Lij~em["cl$b%@d<l&zl\'l $ +["cl$b%b|&+l-l%8d<@b|l!b^&+ q$sign ', [Object.defineProperty(exports, '__esModule', {value: !0})]);
    }, {}],
    2: [function (require, module, exports) {
        /**
         * cssfilter
         *
         * @author 老雷<leizongmin@gmail.com>
         */

        var DEFAULT = require('./default');
        var parseStyle = require('./parser');
        var _ = require('./util');


        /**
         * 返回值是否为空
         *
         * @param {Object} obj
         * @return {Boolean}
         */
        function isNull(obj) {
            return (obj === undefined || obj === null);
        }

        /**
         * 浅拷贝对象
         *
         * @param {Object} obj
         * @return {Object}
         */
        function shallowCopyObject(obj) {
            var ret = {};
            for (var i in obj) {
                ret[i] = obj[i];
            }
            return ret;
        }

        /**
         * 创建CSS过滤器
         *
         * @param {Object} options
         *   - {Object} whiteList
         *   - {Function} onAttr
         *   - {Function} onIgnoreAttr
         *   - {Function} safeAttrValue
         */
        function FilterCSS(options) {
            options = shallowCopyObject(options || {});
            options.whiteList = options.whiteList || DEFAULT.whiteList;
            options.onAttr = options.onAttr || DEFAULT.onAttr;
            options.onIgnoreAttr = options.onIgnoreAttr || DEFAULT.onIgnoreAttr;
            options.safeAttrValue = options.safeAttrValue || DEFAULT.safeAttrValue;
            this.options = options;
        }

        FilterCSS.prototype.process = function (css) {
            // 兼容各种奇葩输入
            css = css || '';
            css = css.toString();
            if (!css) return '';

            var me = this;
            var options = me.options;
            var whiteList = options.whiteList;
            var onAttr = options.onAttr;
            var onIgnoreAttr = options.onIgnoreAttr;
            var safeAttrValue = options.safeAttrValue;

            var retCSS = parseStyle(css, function (sourcePosition, position, name, value, source) {

                var check = whiteList[name];
                var isWhite = false;
                if (check === true) isWhite = check;
                else if (typeof check === 'function') isWhite = check(value);
                else if (check instanceof RegExp) isWhite = check.test(value);
                if (isWhite !== true) isWhite = false;

                // 如果过滤后 value 为空则直接忽略
                value = safeAttrValue(name, value);
                if (!value) return;

                var opts = {
                    position: position,
                    sourcePosition: sourcePosition,
                    source: source,
                    isWhite: isWhite
                };

                if (isWhite) {

                    var ret = onAttr(name, value, opts);
                    if (isNull(ret)) {
                        return name + ':' + value;
                    } else {
                        return ret;
                    }

                } else {

                    var ret = onIgnoreAttr(name, value, opts);
                    if (!isNull(ret)) {
                        return ret;
                    }

                }
            });

            return retCSS;
        };


        module.exports = FilterCSS;

    }, {"./default": 3, "./parser": 5, "./util": 6}],
    3: [function (require, module, exports) {
        /**
         * cssfilter
         *
         * @author 老雷<leizongmin@gmail.com>
         */

        function getDefaultWhiteList() {
            // 白名单值说明：
            // true: 允许该属性
            // Function: function (val) { } 返回true表示允许该属性，其他值均表示不允许
            // RegExp: regexp.test(val) 返回true表示允许该属性，其他值均表示不允许
            // 除上面列出的值外均表示不允许
            var whiteList = {};

            whiteList['align-content'] = false; // default: auto
            whiteList['align-items'] = false; // default: auto
            whiteList['align-self'] = false; // default: auto
            whiteList['alignment-adjust'] = false; // default: auto
            whiteList['alignment-baseline'] = false; // default: baseline
            whiteList['all'] = false; // default: depending on individual properties
            whiteList['anchor-point'] = false; // default: none
            whiteList['animation'] = false; // default: depending on individual properties
            whiteList['animation-delay'] = false; // default: 0
            whiteList['animation-direction'] = false; // default: normal
            whiteList['animation-duration'] = false; // default: 0
            whiteList['animation-fill-mode'] = false; // default: none
            whiteList['animation-iteration-count'] = false; // default: 1
            whiteList['animation-name'] = false; // default: none
            whiteList['animation-play-state'] = false; // default: running
            whiteList['animation-timing-function'] = false; // default: ease
            whiteList['azimuth'] = false; // default: center
            whiteList['backface-visibility'] = false; // default: visible
            whiteList['background'] = true; // default: depending on individual properties
            whiteList['background-attachment'] = true; // default: scroll
            whiteList['background-clip'] = true; // default: border-box
            whiteList['background-color'] = true; // default: transparent
            whiteList['background-image'] = true; // default: none
            whiteList['background-origin'] = true; // default: padding-box
            whiteList['background-position'] = true; // default: 0% 0%
            whiteList['background-repeat'] = true; // default: repeat
            whiteList['background-size'] = true; // default: auto
            whiteList['baseline-shift'] = false; // default: baseline
            whiteList['binding'] = false; // default: none
            whiteList['bleed'] = false; // default: 6pt
            whiteList['bookmark-label'] = false; // default: content()
            whiteList['bookmark-level'] = false; // default: none
            whiteList['bookmark-state'] = false; // default: open
            whiteList['border'] = true; // default: depending on individual properties
            whiteList['border-bottom'] = true; // default: depending on individual properties
            whiteList['border-bottom-color'] = true; // default: current color
            whiteList['border-bottom-left-radius'] = true; // default: 0
            whiteList['border-bottom-right-radius'] = true; // default: 0
            whiteList['border-bottom-style'] = true; // default: none
            whiteList['border-bottom-width'] = true; // default: medium
            whiteList['border-collapse'] = true; // default: separate
            whiteList['border-color'] = true; // default: depending on individual properties
            whiteList['border-image'] = true; // default: none
            whiteList['border-image-outset'] = true; // default: 0
            whiteList['border-image-repeat'] = true; // default: stretch
            whiteList['border-image-slice'] = true; // default: 100%
            whiteList['border-image-source'] = true; // default: none
            whiteList['border-image-width'] = true; // default: 1
            whiteList['border-left'] = true; // default: depending on individual properties
            whiteList['border-left-color'] = true; // default: current color
            whiteList['border-left-style'] = true; // default: none
            whiteList['border-left-width'] = true; // default: medium
            whiteList['border-radius'] = true; // default: 0
            whiteList['border-right'] = true; // default: depending on individual properties
            whiteList['border-right-color'] = true; // default: current color
            whiteList['border-right-style'] = true; // default: none
            whiteList['border-right-width'] = true; // default: medium
            whiteList['border-spacing'] = true; // default: 0
            whiteList['border-style'] = true; // default: depending on individual properties
            whiteList['border-top'] = true; // default: depending on individual properties
            whiteList['border-top-color'] = true; // default: current color
            whiteList['border-top-left-radius'] = true; // default: 0
            whiteList['border-top-right-radius'] = true; // default: 0
            whiteList['border-top-style'] = true; // default: none
            whiteList['border-top-width'] = true; // default: medium
            whiteList['border-width'] = true; // default: depending on individual properties
            whiteList['bottom'] = false; // default: auto
            whiteList['box-decoration-break'] = true; // default: slice
            whiteList['box-shadow'] = true; // default: none
            whiteList['box-sizing'] = true; // default: content-box
            whiteList['box-snap'] = true; // default: none
            whiteList['box-suppress'] = true; // default: show
            whiteList['break-after'] = true; // default: auto
            whiteList['break-before'] = true; // default: auto
            whiteList['break-inside'] = true; // default: auto
            whiteList['caption-side'] = false; // default: top
            whiteList['chains'] = false; // default: none
            whiteList['clear'] = true; // default: none
            whiteList['clip'] = false; // default: auto
            whiteList['clip-path'] = false; // default: none
            whiteList['clip-rule'] = false; // default: nonzero
            whiteList['color'] = true; // default: implementation dependent
            whiteList['color-interpolation-filters'] = true; // default: auto
            whiteList['column-count'] = false; // default: auto
            whiteList['column-fill'] = false; // default: balance
            whiteList['column-gap'] = false; // default: normal
            whiteList['column-rule'] = false; // default: depending on individual properties
            whiteList['column-rule-color'] = false; // default: current color
            whiteList['column-rule-style'] = false; // default: medium
            whiteList['column-rule-width'] = false; // default: medium
            whiteList['column-span'] = false; // default: none
            whiteList['column-width'] = false; // default: auto
            whiteList['columns'] = false; // default: depending on individual properties
            whiteList['contain'] = false; // default: none
            whiteList['content'] = false; // default: normal
            whiteList['counter-increment'] = false; // default: none
            whiteList['counter-reset'] = false; // default: none
            whiteList['counter-set'] = false; // default: none
            whiteList['crop'] = false; // default: auto
            whiteList['cue'] = false; // default: depending on individual properties
            whiteList['cue-after'] = false; // default: none
            whiteList['cue-before'] = false; // default: none
            whiteList['cursor'] = false; // default: auto
            whiteList['direction'] = false; // default: ltr
            whiteList['display'] = true; // default: depending on individual properties
            whiteList['display-inside'] = true; // default: auto
            whiteList['display-list'] = true; // default: none
            whiteList['display-outside'] = true; // default: inline-level
            whiteList['dominant-baseline'] = false; // default: auto
            whiteList['elevation'] = false; // default: level
            whiteList['empty-cells'] = false; // default: show
            whiteList['filter'] = false; // default: none
            whiteList['flex'] = false; // default: depending on individual properties
            whiteList['flex-basis'] = false; // default: auto
            whiteList['flex-direction'] = false; // default: row
            whiteList['flex-flow'] = false; // default: depending on individual properties
            whiteList['flex-grow'] = false; // default: 0
            whiteList['flex-shrink'] = false; // default: 1
            whiteList['flex-wrap'] = false; // default: nowrap
            whiteList['float'] = false; // default: none
            whiteList['float-offset'] = false; // default: 0 0
            whiteList['flood-color'] = false; // default: black
            whiteList['flood-opacity'] = false; // default: 1
            whiteList['flow-from'] = false; // default: none
            whiteList['flow-into'] = false; // default: none
            whiteList['font'] = true; // default: depending on individual properties
            whiteList['font-family'] = true; // default: implementation dependent
            whiteList['font-feature-settings'] = true; // default: normal
            whiteList['font-kerning'] = true; // default: auto
            whiteList['font-language-override'] = true; // default: normal
            whiteList['font-size'] = true; // default: medium
            whiteList['font-size-adjust'] = true; // default: none
            whiteList['font-stretch'] = true; // default: normal
            whiteList['font-style'] = true; // default: normal
            whiteList['font-synthesis'] = true; // default: weight style
            whiteList['font-variant'] = true; // default: normal
            whiteList['font-variant-alternates'] = true; // default: normal
            whiteList['font-variant-caps'] = true; // default: normal
            whiteList['font-variant-east-asian'] = true; // default: normal
            whiteList['font-variant-ligatures'] = true; // default: normal
            whiteList['font-variant-numeric'] = true; // default: normal
            whiteList['font-variant-position'] = true; // default: normal
            whiteList['font-weight'] = true; // default: normal
            whiteList['grid'] = false; // default: depending on individual properties
            whiteList['grid-area'] = false; // default: depending on individual properties
            whiteList['grid-auto-columns'] = false; // default: auto
            whiteList['grid-auto-flow'] = false; // default: none
            whiteList['grid-auto-rows'] = false; // default: auto
            whiteList['grid-column'] = false; // default: depending on individual properties
            whiteList['grid-column-end'] = false; // default: auto
            whiteList['grid-column-start'] = false; // default: auto
            whiteList['grid-row'] = false; // default: depending on individual properties
            whiteList['grid-row-end'] = false; // default: auto
            whiteList['grid-row-start'] = false; // default: auto
            whiteList['grid-template'] = false; // default: depending on individual properties
            whiteList['grid-template-areas'] = false; // default: none
            whiteList['grid-template-columns'] = false; // default: none
            whiteList['grid-template-rows'] = false; // default: none
            whiteList['hanging-punctuation'] = false; // default: none
            whiteList['height'] = true; // default: auto
            whiteList['hyphens'] = false; // default: manual
            whiteList['icon'] = false; // default: auto
            whiteList['image-orientation'] = false; // default: auto
            whiteList['image-resolution'] = false; // default: normal
            whiteList['ime-mode'] = false; // default: auto
            whiteList['initial-letters'] = false; // default: normal
            whiteList['inline-box-align'] = false; // default: last
            whiteList['justify-content'] = false; // default: auto
            whiteList['justify-items'] = false; // default: auto
            whiteList['justify-self'] = false; // default: auto
            whiteList['left'] = false; // default: auto
            whiteList['letter-spacing'] = true; // default: normal
            whiteList['lighting-color'] = true; // default: white
            whiteList['line-box-contain'] = false; // default: block inline replaced
            whiteList['line-break'] = false; // default: auto
            whiteList['line-grid'] = false; // default: match-parent
            whiteList['line-height'] = false; // default: normal
            whiteList['line-snap'] = false; // default: none
            whiteList['line-stacking'] = false; // default: depending on individual properties
            whiteList['line-stacking-ruby'] = false; // default: exclude-ruby
            whiteList['line-stacking-shift'] = false; // default: consider-shifts
            whiteList['line-stacking-strategy'] = false; // default: inline-line-height
            whiteList['list-style'] = true; // default: depending on individual properties
            whiteList['list-style-image'] = true; // default: none
            whiteList['list-style-position'] = true; // default: outside
            whiteList['list-style-type'] = true; // default: disc
            whiteList['margin'] = true; // default: depending on individual properties
            whiteList['margin-bottom'] = true; // default: 0
            whiteList['margin-left'] = true; // default: 0
            whiteList['margin-right'] = true; // default: 0
            whiteList['margin-top'] = true; // default: 0
            whiteList['marker-offset'] = false; // default: auto
            whiteList['marker-side'] = false; // default: list-item
            whiteList['marks'] = false; // default: none
            whiteList['mask'] = false; // default: border-box
            whiteList['mask-box'] = false; // default: see individual properties
            whiteList['mask-box-outset'] = false; // default: 0
            whiteList['mask-box-repeat'] = false; // default: stretch
            whiteList['mask-box-slice'] = false; // default: 0 fill
            whiteList['mask-box-source'] = false; // default: none
            whiteList['mask-box-width'] = false; // default: auto
            whiteList['mask-clip'] = false; // default: border-box
            whiteList['mask-image'] = false; // default: none
            whiteList['mask-origin'] = false; // default: border-box
            whiteList['mask-position'] = false; // default: center
            whiteList['mask-repeat'] = false; // default: no-repeat
            whiteList['mask-size'] = false; // default: border-box
            whiteList['mask-source-type'] = false; // default: auto
            whiteList['mask-type'] = false; // default: luminance
            whiteList['max-height'] = true; // default: none
            whiteList['max-lines'] = false; // default: none
            whiteList['max-width'] = true; // default: none
            whiteList['min-height'] = true; // default: 0
            whiteList['min-width'] = true; // default: 0
            whiteList['move-to'] = false; // default: normal
            whiteList['nav-down'] = false; // default: auto
            whiteList['nav-index'] = false; // default: auto
            whiteList['nav-left'] = false; // default: auto
            whiteList['nav-right'] = false; // default: auto
            whiteList['nav-up'] = false; // default: auto
            whiteList['object-fit'] = false; // default: fill
            whiteList['object-position'] = false; // default: 50% 50%
            whiteList['opacity'] = false; // default: 1
            whiteList['order'] = false; // default: 0
            whiteList['orphans'] = false; // default: 2
            whiteList['outline'] = false; // default: depending on individual properties
            whiteList['outline-color'] = false; // default: invert
            whiteList['outline-offset'] = false; // default: 0
            whiteList['outline-style'] = false; // default: none
            whiteList['outline-width'] = false; // default: medium
            whiteList['overflow'] = false; // default: depending on individual properties
            whiteList['overflow-wrap'] = false; // default: normal
            whiteList['overflow-x'] = false; // default: visible
            whiteList['overflow-y'] = false; // default: visible
            whiteList['padding'] = true; // default: depending on individual properties
            whiteList['padding-bottom'] = true; // default: 0
            whiteList['padding-left'] = true; // default: 0
            whiteList['padding-right'] = true; // default: 0
            whiteList['padding-top'] = true; // default: 0
            whiteList['page'] = false; // default: auto
            whiteList['page-break-after'] = false; // default: auto
            whiteList['page-break-before'] = false; // default: auto
            whiteList['page-break-inside'] = false; // default: auto
            whiteList['page-policy'] = false; // default: start
            whiteList['pause'] = false; // default: implementation dependent
            whiteList['pause-after'] = false; // default: implementation dependent
            whiteList['pause-before'] = false; // default: implementation dependent
            whiteList['perspective'] = false; // default: none
            whiteList['perspective-origin'] = false; // default: 50% 50%
            whiteList['pitch'] = false; // default: medium
            whiteList['pitch-range'] = false; // default: 50
            whiteList['play-during'] = false; // default: auto
            whiteList['position'] = false; // default: static
            whiteList['presentation-level'] = false; // default: 0
            whiteList['quotes'] = false; // default: text
            whiteList['region-fragment'] = false; // default: auto
            whiteList['resize'] = false; // default: none
            whiteList['rest'] = false; // default: depending on individual properties
            whiteList['rest-after'] = false; // default: none
            whiteList['rest-before'] = false; // default: none
            whiteList['richness'] = false; // default: 50
            whiteList['right'] = false; // default: auto
            whiteList['rotation'] = false; // default: 0
            whiteList['rotation-point'] = false; // default: 50% 50%
            whiteList['ruby-align'] = false; // default: auto
            whiteList['ruby-merge'] = false; // default: separate
            whiteList['ruby-position'] = false; // default: before
            whiteList['shape-image-threshold'] = false; // default: 0.0
            whiteList['shape-outside'] = false; // default: none
            whiteList['shape-margin'] = false; // default: 0
            whiteList['size'] = false; // default: auto
            whiteList['speak'] = false; // default: auto
            whiteList['speak-as'] = false; // default: normal
            whiteList['speak-header'] = false; // default: once
            whiteList['speak-numeral'] = false; // default: continuous
            whiteList['speak-punctuation'] = false; // default: none
            whiteList['speech-rate'] = false; // default: medium
            whiteList['stress'] = false; // default: 50
            whiteList['string-set'] = false; // default: none
            whiteList['tab-size'] = false; // default: 8
            whiteList['table-layout'] = false; // default: auto
            whiteList['text-align'] = true; // default: start
            whiteList['text-align-last'] = true; // default: auto
            whiteList['text-combine-upright'] = true; // default: none
            whiteList['text-decoration'] = true; // default: none
            whiteList['text-decoration-color'] = true; // default: currentColor
            whiteList['text-decoration-line'] = true; // default: none
            whiteList['text-decoration-skip'] = true; // default: objects
            whiteList['text-decoration-style'] = true; // default: solid
            whiteList['text-emphasis'] = true; // default: depending on individual properties
            whiteList['text-emphasis-color'] = true; // default: currentColor
            whiteList['text-emphasis-position'] = true; // default: over right
            whiteList['text-emphasis-style'] = true; // default: none
            whiteList['text-height'] = true; // default: auto
            whiteList['text-indent'] = true; // default: 0
            whiteList['text-justify'] = true; // default: auto
            whiteList['text-orientation'] = true; // default: mixed
            whiteList['text-overflow'] = true; // default: clip
            whiteList['text-shadow'] = true; // default: none
            whiteList['text-space-collapse'] = true; // default: collapse
            whiteList['text-transform'] = true; // default: none
            whiteList['text-underline-position'] = true; // default: auto
            whiteList['text-wrap'] = true; // default: normal
            whiteList['top'] = false; // default: auto
            whiteList['transform'] = false; // default: none
            whiteList['transform-origin'] = false; // default: 50% 50% 0
            whiteList['transform-style'] = false; // default: flat
            whiteList['transition'] = false; // default: depending on individual properties
            whiteList['transition-delay'] = false; // default: 0s
            whiteList['transition-duration'] = false; // default: 0s
            whiteList['transition-property'] = false; // default: all
            whiteList['transition-timing-function'] = false; // default: ease
            whiteList['unicode-bidi'] = false; // default: normal
            whiteList['vertical-align'] = false; // default: baseline
            whiteList['visibility'] = false; // default: visible
            whiteList['voice-balance'] = false; // default: center
            whiteList['voice-duration'] = false; // default: auto
            whiteList['voice-family'] = false; // default: implementation dependent
            whiteList['voice-pitch'] = false; // default: medium
            whiteList['voice-range'] = false; // default: medium
            whiteList['voice-rate'] = false; // default: normal
            whiteList['voice-stress'] = false; // default: normal
            whiteList['voice-volume'] = false; // default: medium
            whiteList['volume'] = false; // default: medium
            whiteList['white-space'] = false; // default: normal
            whiteList['widows'] = false; // default: 2
            whiteList['width'] = true; // default: auto
            whiteList['will-change'] = false; // default: auto
            whiteList['word-break'] = true; // default: normal
            whiteList['word-spacing'] = true; // default: normal
            whiteList['word-wrap'] = true; // default: normal
            whiteList['wrap-flow'] = false; // default: auto
            whiteList['wrap-through'] = false; // default: wrap
            whiteList['writing-mode'] = false; // default: horizontal-tb
            whiteList['z-index'] = false; // default: auto

            return whiteList;
        }


        /**
         * 匹配到白名单上的一个属性时
         *
         * @param {String} name
         * @param {String} value
         * @param {Object} options
         * @return {String}
         */
        function onAttr(name, value, options) {
            // do nothing
        }

        /**
         * 匹配到不在白名单上的一个属性时
         *
         * @param {String} name
         * @param {String} value
         * @param {Object} options
         * @return {String}
         */
        function onIgnoreAttr(name, value, options) {
            // do nothing
        }

        var REGEXP_URL_JAVASCRIPT = /javascript\s*\:/img;

        /**
         * 过滤属性值
         *
         * @param {String} name
         * @param {String} value
         * @return {String}
         */
        function safeAttrValue(name, value) {
            if (REGEXP_URL_JAVASCRIPT.test(value)) return '';
            return value;
        }


        exports.whiteList = getDefaultWhiteList();
        exports.getDefaultWhiteList = getDefaultWhiteList;
        exports.onAttr = onAttr;
        exports.onIgnoreAttr = onIgnoreAttr;
        exports.safeAttrValue = safeAttrValue;

    }, {}],
    4: [function (require, module, exports) {
        /**
         * cssfilter
         *
         * @author 老雷<leizongmin@gmail.com>
         */

        var DEFAULT = require('./default');
        var FilterCSS = require('./css');


        /**
         * XSS过滤
         *
         * @param {String} css 要过滤的CSS代码
         * @param {Object} options 选项：whiteList, onAttr, onIgnoreAttr
         * @return {String}
         */
        function filterCSS(html, options) {
            var xss = new FilterCSS(options);
            return xss.process(html);
        }


// 输出
        exports = module.exports = filterCSS;
        exports.FilterCSS = FilterCSS;
        for (var i in DEFAULT) exports[i] = DEFAULT[i];

// 在浏览器端使用
        if (typeof window !== 'undefined') {
            window.filterCSS = module.exports;
        }

    }, {"./css": 2, "./default": 3}],
    5: [function (require, module, exports) {
        /**
         * cssfilter
         *
         * @author 老雷<leizongmin@gmail.com>
         */

        var _ = require('./util');


        /**
         * 解析style
         *
         * @param {String} css
         * @param {Function} onAttr 处理属性的函数
         *   参数格式： function (sourcePosition, position, name, value, source)
         * @return {String}
         */
        function parseStyle(css, onAttr) {
            css = _.trimRight(css);
            if (css[css.length - 1] !== ';') css += ';';
            var cssLength = css.length;
            var isParenthesisOpen = false;
            var lastPos = 0;
            var i = 0;
            var retCSS = '';

            function addNewAttr() {
                // 如果没有正常的闭合圆括号，则直接忽略当前属性
                if (!isParenthesisOpen) {
                    var source = _.trim(css.slice(lastPos, i));
                    var j = source.indexOf(':');
                    if (j !== -1) {
                        var name = _.trim(source.slice(0, j));
                        var value = _.trim(source.slice(j + 1));
                        // 必须有属性名称
                        if (name) {
                            var ret = onAttr(lastPos, retCSS.length, name, value, source);
                            if (ret) retCSS += ret + '; ';
                        }
                    }
                }
                lastPos = i + 1;
            }

            for (; i < cssLength; i++) {
                var c = css[i];
                if (c === '/' && css[i + 1] === '*') {
                    // 备注开始
                    var j = css.indexOf('*/', i + 2);
                    // 如果没有正常的备注结束，则后面的部分全部跳过
                    if (j === -1) break;
                    // 直接将当前位置调到备注结尾，并且初始化状态
                    i = j + 1;
                    lastPos = i + 1;
                    isParenthesisOpen = false;
                } else if (c === '(') {
                    isParenthesisOpen = true;
                } else if (c === ')') {
                    isParenthesisOpen = false;
                } else if (c === ';') {
                    if (isParenthesisOpen) {
                        // 在圆括号里面，忽略
                    } else {
                        addNewAttr();
                    }
                } else if (c === '\n') {
                    addNewAttr();
                }
            }

            return _.trim(retCSS);
        }

        module.exports = parseStyle;

    }, {"./util": 6}],
    6: [function (require, module, exports) {
        module.exports = {
            indexOf: function (arr, item) {
                var i, j;
                if (Array.prototype.indexOf) {
                    return arr.indexOf(item);
                }
                for (i = 0, j = arr.length; i < j; i++) {
                    if (arr[i] === item) {
                        return i;
                    }
                }
                return -1;
            },
            forEach: function (arr, fn, scope) {
                var i, j;
                if (Array.prototype.forEach) {
                    return arr.forEach(fn, scope);
                }
                for (i = 0, j = arr.length; i < j; i++) {
                    fn.call(scope, arr[i], i, arr);
                }
            },
            trim: function (str) {
                if (String.prototype.trim) {
                    return str.trim();
                }
                return str.replace(/(^\s*)|(\s*$)/g, '');
            },
            trimRight: function (str) {
                if (String.prototype.trimRight) {
                    return str.trimRight();
                }
                return str.replace(/(\s*$)/g, '');
            }
        };

    }, {}],
    7: [function (require, module, exports) {
        (function webpackUniversalModuleDefinition(root, factory) {
            if (typeof exports === 'object' && typeof module === 'object')
                module.exports = factory();
            else if (typeof define === 'function' && define.amd)
                define([], factory);
            else if (typeof exports === 'object')
                exports["vueDirectiveTooltip"] = factory();
            else
                root["vueDirectiveTooltip"] = factory();
        })((typeof self !== 'undefined' ? self : this), function () {
            return /******/ (function (modules) { // webpackBootstrap
                /******/ 	// The module cache
                /******/
                var installedModules = {};
                /******/
                /******/ 	// The require function
                /******/
                function __webpack_require__(moduleId) {
                    /******/
                    /******/ 		// Check if module is in cache
                    /******/
                    if (installedModules[moduleId]) {
                        /******/
                        return installedModules[moduleId].exports;
                        /******/
                    }
                    /******/ 		// Create a new module (and put it into the cache)
                    /******/
                    var module = installedModules[moduleId] = {
                        /******/            i: moduleId,
                        /******/            l: false,
                        /******/            exports: {}
                        /******/
                    };
                    /******/
                    /******/ 		// Execute the module function
                    /******/
                    modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
                    /******/
                    /******/ 		// Flag the module as loaded
                    /******/
                    module.l = true;
                    /******/
                    /******/ 		// Return the exports of the module
                    /******/
                    return module.exports;
                    /******/
                }

                /******/
                /******/
                /******/ 	// expose the modules object (__webpack_modules__)
                /******/
                __webpack_require__.m = modules;
                /******/
                /******/ 	// expose the module cache
                /******/
                __webpack_require__.c = installedModules;
                /******/
                /******/ 	// define getter function for harmony exports
                /******/
                __webpack_require__.d = function (exports, name, getter) {
                    /******/
                    if (!__webpack_require__.o(exports, name)) {
                        /******/
                        Object.defineProperty(exports, name, {enumerable: true, get: getter});
                        /******/
                    }
                    /******/
                };
                /******/
                /******/ 	// define __esModule on exports
                /******/
                __webpack_require__.r = function (exports) {
                    /******/
                    if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
                        /******/
                        Object.defineProperty(exports, Symbol.toStringTag, {value: 'Module'});
                        /******/
                    }
                    /******/
                    Object.defineProperty(exports, '__esModule', {value: true});
                    /******/
                };
                /******/
                /******/ 	// create a fake namespace object
                /******/ 	// mode & 1: value is a module id, require it
                /******/ 	// mode & 2: merge all properties of value into the ns
                /******/ 	// mode & 4: return value when already ns object
                /******/ 	// mode & 8|1: behave like require
                /******/
                __webpack_require__.t = function (value, mode) {
                    /******/
                    if (mode & 1) value = __webpack_require__(value);
                    /******/
                    if (mode & 8) return value;
                    /******/
                    if ((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
                    /******/
                    var ns = Object.create(null);
                    /******/
                    __webpack_require__.r(ns);
                    /******/
                    Object.defineProperty(ns, 'default', {enumerable: true, value: value});
                    /******/
                    if (mode & 2 && typeof value != 'string') for (var key in value) __webpack_require__.d(ns, key, function (key) {
                        return value[key];
                    }.bind(null, key));
                    /******/
                    return ns;
                    /******/
                };
                /******/
                /******/ 	// getDefaultExport function for compatibility with non-harmony modules
                /******/
                __webpack_require__.n = function (module) {
                    /******/
                    var getter = module && module.__esModule ?
                        /******/            function getDefault() {
                            return module['default'];
                        } :
                        /******/            function getModuleExports() {
                            return module;
                        };
                    /******/
                    __webpack_require__.d(getter, 'a', getter);
                    /******/
                    return getter;
                    /******/
                };
                /******/
                /******/ 	// Object.prototype.hasOwnProperty.call
                /******/
                __webpack_require__.o = function (object, property) {
                    return Object.prototype.hasOwnProperty.call(object, property);
                };
                /******/
                /******/ 	// __webpack_public_path__
                /******/
                __webpack_require__.p = "";
                /******/
                /******/
                /******/ 	// Load entry module and return exports
                /******/
                return __webpack_require__(__webpack_require__.s = "c267");
                /******/
            })
                /************************************************************************/
                /******/ ({

                    /***/ "026c":
                    /***/ (function (module, exports, __webpack_require__) {

// all enumerable object keys, includes symbols
                        var getKeys = __webpack_require__("a828");
                        var gOPS = __webpack_require__("2dae");
                        var pIE = __webpack_require__("e60e");
                        module.exports = function (it) {
                            var result = getKeys(it);
                            var getSymbols = gOPS.f;
                            if (getSymbols) {
                                var symbols = getSymbols(it);
                                var isEnum = pIE.f;
                                var i = 0;
                                var key;
                                while (symbols.length > i) if (isEnum.call(it, key = symbols[i++])) result.push(key);
                            }
                            return result;
                        };


                        /***/
                    }),

                    /***/ "038b":
                    /***/ (function (module, exports, __webpack_require__) {

                        module.exports = __webpack_require__("7676");

                        /***/
                    }),

                    /***/ "03bc":
                    /***/ (function (module, exports, __webpack_require__) {

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
                        var toIObject = __webpack_require__("c5f8");
                        var gOPN = __webpack_require__("d9e5").f;
                        var toString = {}.toString;

                        var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
                            ? Object.getOwnPropertyNames(window) : [];

                        var getWindowNames = function (it) {
                            try {
                                return gOPN(it);
                            } catch (e) {
                                return windowNames.slice();
                            }
                        };

                        module.exports.f = function getOwnPropertyNames(it) {
                            return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
                        };


                        /***/
                    }),

                    /***/ "0746":
                    /***/ (function (module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
                        var toIObject = __webpack_require__("672a");
                        var toLength = __webpack_require__("64d2");
                        var toAbsoluteIndex = __webpack_require__("fc06");
                        module.exports = function (IS_INCLUDES) {
                            return function ($this, el, fromIndex) {
                                var O = toIObject($this);
                                var length = toLength(O.length);
                                var index = toAbsoluteIndex(fromIndex, length);
                                var value;
                                // Array#includes uses SameValueZero equality algorithm
                                // eslint-disable-next-line no-self-compare
                                if (IS_INCLUDES && el != el) while (length > index) {
                                    value = O[index++];
                                    // eslint-disable-next-line no-self-compare
                                    if (value != value) return true;
                                    // Array#indexOf ignores holes, Array#includes - not
                                } else for (; length > index; index++) if (IS_INCLUDES || index in O) {
                                    if (O[index] === el) return IS_INCLUDES || index || 0;
                                }
                                return !IS_INCLUDES && -1;
                            };
                        };


                        /***/
                    }),

                    /***/ "07fd":
                    /***/ (function (module, exports) {

                        var hasOwnProperty = {}.hasOwnProperty;
                        module.exports = function (it, key) {
                            return hasOwnProperty.call(it, key);
                        };


                        /***/
                    }),

                    /***/ "081c":
                    /***/ (function (module, exports, __webpack_require__) {

                        var anObject = __webpack_require__("3cc5");
                        var get = __webpack_require__("dfcb");
                        module.exports = __webpack_require__("947c").getIterator = function (it) {
                            var iterFn = get(it);
                            if (typeof iterFn != 'function') throw TypeError(it + ' is not iterable!');
                            return anObject(iterFn.call(it));
                        };


                        /***/
                    }),

                    /***/ "0a04":
                    /***/ (function (module, exports, __webpack_require__) {

                        "use strict";

                        var $export = __webpack_require__("62cf");
                        var $forEach = __webpack_require__("f13c")(0);
                        var STRICT = __webpack_require__("14f6")([].forEach, true);

                        $export($export.P + $export.F * !STRICT, 'Array', {
                            // 22.1.3.10 / 15.4.4.18 Array.prototype.forEach(callbackfn [, thisArg])
                            forEach: function forEach(callbackfn /* , thisArg */) {
                                return $forEach(this, callbackfn, arguments[1]);
                            }
                        });


                        /***/
                    }),

                    /***/ "0a85":
                    /***/ (function (module, exports, __webpack_require__) {

                        module.exports = __webpack_require__("bc7f");

                        /***/
                    }),

                    /***/ "0aad":
                    /***/ (function (module, exports, __webpack_require__) {

                        "use strict";


                        var isRegExp = __webpack_require__("a8ae");
                        var anObject = __webpack_require__("d1f8");
                        var speciesConstructor = __webpack_require__("2cc2");
                        var advanceStringIndex = __webpack_require__("ce64");
                        var toLength = __webpack_require__("64d2");
                        var callRegExpExec = __webpack_require__("dd3b");
                        var regexpExec = __webpack_require__("2bfe");
                        var fails = __webpack_require__("910c");
                        var $min = Math.min;
                        var $push = [].push;
                        var $SPLIT = 'split';
                        var LENGTH = 'length';
                        var LAST_INDEX = 'lastIndex';
                        var MAX_UINT32 = 0xffffffff;

// babel-minify transpiles RegExp('x', 'y') -> /x/y and it causes SyntaxError
                        var SUPPORTS_Y = !fails(function () {
                            RegExp(MAX_UINT32, 'y');
                        });

// @@split logic
                        __webpack_require__("e002")('split', 2, function (defined, SPLIT, $split, maybeCallNative) {
                            var internalSplit;
                            if (
                                'abbc'[$SPLIT](/(b)*/)[1] == 'c' ||
                                'test'[$SPLIT](/(?:)/, -1)[LENGTH] != 4 ||
                                'ab'[$SPLIT](/(?:ab)*/)[LENGTH] != 2 ||
                                '.'[$SPLIT](/(.?)(.?)/)[LENGTH] != 4 ||
                                '.'[$SPLIT](/()()/)[LENGTH] > 1 ||
                                ''[$SPLIT](/.?/)[LENGTH]
                            ) {
                                // based on es5-shim implementation, need to rework it
                                internalSplit = function (separator, limit) {
                                    var string = String(this);
                                    if (separator === undefined && limit === 0) return [];
                                    // If `separator` is not a regex, use native split
                                    if (!isRegExp(separator)) return $split.call(string, separator, limit);
                                    var output = [];
                                    var flags = (separator.ignoreCase ? 'i' : '') +
                                        (separator.multiline ? 'm' : '') +
                                        (separator.unicode ? 'u' : '') +
                                        (separator.sticky ? 'y' : '');
                                    var lastLastIndex = 0;
                                    var splitLimit = limit === undefined ? MAX_UINT32 : limit >>> 0;
                                    // Make `global` and avoid `lastIndex` issues by working with a copy
                                    var separatorCopy = new RegExp(separator.source, flags + 'g');
                                    var match, lastIndex, lastLength;
                                    while (match = regexpExec.call(separatorCopy, string)) {
                                        lastIndex = separatorCopy[LAST_INDEX];
                                        if (lastIndex > lastLastIndex) {
                                            output.push(string.slice(lastLastIndex, match.index));
                                            if (match[LENGTH] > 1 && match.index < string[LENGTH]) $push.apply(output, match.slice(1));
                                            lastLength = match[0][LENGTH];
                                            lastLastIndex = lastIndex;
                                            if (output[LENGTH] >= splitLimit) break;
                                        }
                                        if (separatorCopy[LAST_INDEX] === match.index) separatorCopy[LAST_INDEX]++; // Avoid an infinite loop
                                    }
                                    if (lastLastIndex === string[LENGTH]) {
                                        if (lastLength || !separatorCopy.test('')) output.push('');
                                    } else output.push(string.slice(lastLastIndex));
                                    return output[LENGTH] > splitLimit ? output.slice(0, splitLimit) : output;
                                };
                                // Chakra, V8
                            } else if ('0'[$SPLIT](undefined, 0)[LENGTH]) {
                                internalSplit = function (separator, limit) {
                                    return separator === undefined && limit === 0 ? [] : $split.call(this, separator, limit);
                                };
                            } else {
                                internalSplit = $split;
                            }

                            return [
                                // `String.prototype.split` method
                                // https://tc39.github.io/ecma262/#sec-string.prototype.split
                                function split(separator, limit) {
                                    var O = defined(this);
                                    var splitter = separator == undefined ? undefined : separator[SPLIT];
                                    return splitter !== undefined
                                        ? splitter.call(separator, O, limit)
                                        : internalSplit.call(String(O), separator, limit);
                                },
                                // `RegExp.prototype[@@split]` method
                                // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@split
                                //
                                // NOTE: This cannot be properly polyfilled in engines that don't support
                                // the 'y' flag.
                                function (regexp, limit) {
                                    var res = maybeCallNative(internalSplit, regexp, this, limit, internalSplit !== $split);
                                    if (res.done) return res.value;

                                    var rx = anObject(regexp);
                                    var S = String(this);
                                    var C = speciesConstructor(rx, RegExp);

                                    var unicodeMatching = rx.unicode;
                                    var flags = (rx.ignoreCase ? 'i' : '') +
                                        (rx.multiline ? 'm' : '') +
                                        (rx.unicode ? 'u' : '') +
                                        (SUPPORTS_Y ? 'y' : 'g');

                                    // ^(? + rx + ) is needed, in combination with some S slicing, to
                                    // simulate the 'y' flag.
                                    var splitter = new C(SUPPORTS_Y ? rx : '^(?:' + rx.source + ')', flags);
                                    var lim = limit === undefined ? MAX_UINT32 : limit >>> 0;
                                    if (lim === 0) return [];
                                    if (S.length === 0) return callRegExpExec(splitter, S) === null ? [S] : [];
                                    var p = 0;
                                    var q = 0;
                                    var A = [];
                                    while (q < S.length) {
                                        splitter.lastIndex = SUPPORTS_Y ? q : 0;
                                        var z = callRegExpExec(splitter, SUPPORTS_Y ? S : S.slice(q));
                                        var e;
                                        if (
                                            z === null ||
                                            (e = $min(toLength(splitter.lastIndex + (SUPPORTS_Y ? 0 : q)), S.length)) === p
                                        ) {
                                            q = advanceStringIndex(S, q, unicodeMatching);
                                        } else {
                                            A.push(S.slice(p, q));
                                            if (A.length === lim) return A;
                                            for (var i = 1; i <= z.length - 1; i++) {
                                                A.push(z[i]);
                                                if (A.length === lim) return A;
                                            }
                                            q = p = e;
                                        }
                                    }
                                    A.push(S.slice(p));
                                    return A;
                                }
                            ];
                        });


                        /***/
                    }),

                    /***/ "0acd":
                    /***/ (function (module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
                        module.exports = function (it) {
                            if (it == undefined) throw TypeError("Can't call method on  " + it);
                            return it;
                        };


                        /***/
                    }),

                    /***/ "1331":
                    /***/ (function (module, exports, __webpack_require__) {

                        var dP = __webpack_require__("3c7a");
                        var anObject = __webpack_require__("d1f8");
                        var getKeys = __webpack_require__("2369");

                        module.exports = __webpack_require__("66b6") ? Object.defineProperties : function defineProperties(O, Properties) {
                            anObject(O);
                            var keys = getKeys(Properties);
                            var length = keys.length;
                            var i = 0;
                            var P;
                            while (length > i) dP.f(O, P = keys[i++], Properties[P]);
                            return O;
                        };


                        /***/
                    }),

                    /***/ "14f6":
                    /***/ (function (module, exports, __webpack_require__) {

                        "use strict";

                        var fails = __webpack_require__("910c");

                        module.exports = function (method, arg) {
                            return !!method && fails(function () {
                                // eslint-disable-next-line no-useless-call
                                arg ? method.call(null, function () { /* empty */
                                }, 1) : method.call(null);
                            });
                        };


                        /***/
                    }),

                    /***/ "157a":
                    /***/ (function (module, exports, __webpack_require__) {

                        var has = __webpack_require__("5b85");
                        var toIObject = __webpack_require__("c5f8");
                        var arrayIndexOf = __webpack_require__("c5be")(false);
                        var IE_PROTO = __webpack_require__("d0bc")('IE_PROTO');

                        module.exports = function (object, names) {
                            var O = toIObject(object);
                            var i = 0;
                            var result = [];
                            var key;
                            for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
                            // Don't enum bug & hidden keys
                            while (names.length > i) if (has(O, key = names[i++])) {
                                ~arrayIndexOf(result, key) || result.push(key);
                            }
                            return result;
                        };


                        /***/
                    }),

                    /***/ "166f":
                    /***/ (function (module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
                        var isObject = __webpack_require__("df98");
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
                        module.exports = function (it, S) {
                            if (!isObject(it)) return it;
                            var fn, val;
                            if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
                            if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
                            if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
                            throw TypeError("Can't convert object to primitive value");
                        };


                        /***/
                    }),

                    /***/ "16a8":
                    /***/ (function (module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
                        var anObject = __webpack_require__("3cc5");
                        var dPs = __webpack_require__("56d8");
                        var enumBugKeys = __webpack_require__("7ffd");
                        var IE_PROTO = __webpack_require__("d0bc")('IE_PROTO');
                        var Empty = function () { /* empty */
                        };
                        var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
                        var createDict = function () {
                            // Thrash, waste and sodomy: IE GC bug
                            var iframe = __webpack_require__("8cb6")('iframe');
                            var i = enumBugKeys.length;
                            var lt = '<';
                            var gt = '>';
                            var iframeDocument;
                            iframe.style.display = 'none';
                            __webpack_require__("6bf9").appendChild(iframe);
                            iframe.src = 'javascript:'; // eslint-disable-line no-script-url
                            // createDict = iframe.contentWindow.Object;
                            // html.removeChild(iframe);
                            iframeDocument = iframe.contentWindow.document;
                            iframeDocument.open();
                            iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
                            iframeDocument.close();
                            createDict = iframeDocument.F;
                            while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
                            return createDict();
                        };

                        module.exports = Object.create || function create(O, Properties) {
                            var result;
                            if (O !== null) {
                                Empty[PROTOTYPE] = anObject(O);
                                result = new Empty();
                                Empty[PROTOTYPE] = null;
                                // add "__proto__" for Object.getPrototypeOf polyfill
                                result[IE_PROTO] = O;
                            } else result = createDict();
                            return Properties === undefined ? result : dPs(result, Properties);
                        };


                        /***/
                    }),

                    /***/ "1ae2":
                    /***/ (function (module, exports, __webpack_require__) {

                        "use strict";

// ECMAScript 6 symbols shim
                        var global = __webpack_require__("adad");
                        var has = __webpack_require__("5b85");
                        var DESCRIPTORS = __webpack_require__("fa25");
                        var $export = __webpack_require__("1c03");
                        var redefine = __webpack_require__("c76b");
                        var META = __webpack_require__("2590").KEY;
                        var $fails = __webpack_require__("3f9f");
                        var shared = __webpack_require__("564f");
                        var setToStringTag = __webpack_require__("a0f7");
                        var uid = __webpack_require__("edac");
                        var wks = __webpack_require__("eb5c");
                        var wksExt = __webpack_require__("26c6");
                        var wksDefine = __webpack_require__("b978");
                        var enumKeys = __webpack_require__("026c");
                        var isArray = __webpack_require__("29b7");
                        var anObject = __webpack_require__("3cc5");
                        var isObject = __webpack_require__("bc08");
                        var toIObject = __webpack_require__("c5f8");
                        var toPrimitive = __webpack_require__("8e7e");
                        var createDesc = __webpack_require__("2ae9");
                        var _create = __webpack_require__("16a8");
                        var gOPNExt = __webpack_require__("03bc");
                        var $GOPD = __webpack_require__("e369");
                        var $DP = __webpack_require__("4b11");
                        var $keys = __webpack_require__("a828");
                        var gOPD = $GOPD.f;
                        var dP = $DP.f;
                        var gOPN = gOPNExt.f;
                        var $Symbol = global.Symbol;
                        var $JSON = global.JSON;
                        var _stringify = $JSON && $JSON.stringify;
                        var PROTOTYPE = 'prototype';
                        var HIDDEN = wks('_hidden');
                        var TO_PRIMITIVE = wks('toPrimitive');
                        var isEnum = {}.propertyIsEnumerable;
                        var SymbolRegistry = shared('symbol-registry');
                        var AllSymbols = shared('symbols');
                        var OPSymbols = shared('op-symbols');
                        var ObjectProto = Object[PROTOTYPE];
                        var USE_NATIVE = typeof $Symbol == 'function';
                        var QObject = global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
                        var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
                        var setSymbolDesc = DESCRIPTORS && $fails(function () {
                            return _create(dP({}, 'a', {
                                get: function () {
                                    return dP(this, 'a', {value: 7}).a;
                                }
                            })).a != 7;
                        }) ? function (it, key, D) {
                            var protoDesc = gOPD(ObjectProto, key);
                            if (protoDesc) delete ObjectProto[key];
                            dP(it, key, D);
                            if (protoDesc && it !== ObjectProto) dP(ObjectProto, key, protoDesc);
                        } : dP;

                        var wrap = function (tag) {
                            var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
                            sym._k = tag;
                            return sym;
                        };

                        var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function (it) {
                            return typeof it == 'symbol';
                        } : function (it) {
                            return it instanceof $Symbol;
                        };

                        var $defineProperty = function defineProperty(it, key, D) {
                            if (it === ObjectProto) $defineProperty(OPSymbols, key, D);
                            anObject(it);
                            key = toPrimitive(key, true);
                            anObject(D);
                            if (has(AllSymbols, key)) {
                                if (!D.enumerable) {
                                    if (!has(it, HIDDEN)) dP(it, HIDDEN, createDesc(1, {}));
                                    it[HIDDEN][key] = true;
                                } else {
                                    if (has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;
                                    D = _create(D, {enumerable: createDesc(0, false)});
                                }
                                return setSymbolDesc(it, key, D);
                            }
                            return dP(it, key, D);
                        };
                        var $defineProperties = function defineProperties(it, P) {
                            anObject(it);
                            var keys = enumKeys(P = toIObject(P));
                            var i = 0;
                            var l = keys.length;
                            var key;
                            while (l > i) $defineProperty(it, key = keys[i++], P[key]);
                            return it;
                        };
                        var $create = function create(it, P) {
                            return P === undefined ? _create(it) : $defineProperties(_create(it), P);
                        };
                        var $propertyIsEnumerable = function propertyIsEnumerable(key) {
                            var E = isEnum.call(this, key = toPrimitive(key, true));
                            if (this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return false;
                            return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
                        };
                        var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
                            it = toIObject(it);
                            key = toPrimitive(key, true);
                            if (it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return;
                            var D = gOPD(it, key);
                            if (D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;
                            return D;
                        };
                        var $getOwnPropertyNames = function getOwnPropertyNames(it) {
                            var names = gOPN(toIObject(it));
                            var result = [];
                            var i = 0;
                            var key;
                            while (names.length > i) {
                                if (!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key);
                            }
                            return result;
                        };
                        var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
                            var IS_OP = it === ObjectProto;
                            var names = gOPN(IS_OP ? OPSymbols : toIObject(it));
                            var result = [];
                            var i = 0;
                            var key;
                            while (names.length > i) {
                                if (has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true)) result.push(AllSymbols[key]);
                            }
                            return result;
                        };

// 19.4.1.1 Symbol([description])
                        if (!USE_NATIVE) {
                            $Symbol = function Symbol() {
                                if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor!');
                                var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
                                var $set = function (value) {
                                    if (this === ObjectProto) $set.call(OPSymbols, value);
                                    if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
                                    setSymbolDesc(this, tag, createDesc(1, value));
                                };
                                if (DESCRIPTORS && setter) setSymbolDesc(ObjectProto, tag, {
                                    configurable: true,
                                    set: $set
                                });
                                return wrap(tag);
                            };
                            redefine($Symbol[PROTOTYPE], 'toString', function toString() {
                                return this._k;
                            });

                            $GOPD.f = $getOwnPropertyDescriptor;
                            $DP.f = $defineProperty;
                            __webpack_require__("d9e5").f = gOPNExt.f = $getOwnPropertyNames;
                            __webpack_require__("e60e").f = $propertyIsEnumerable;
                            __webpack_require__("2dae").f = $getOwnPropertySymbols;

                            if (DESCRIPTORS && !__webpack_require__("5cde")) {
                                redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
                            }

                            wksExt.f = function (name) {
                                return wrap(wks(name));
                            };
                        }

                        $export($export.G + $export.W + $export.F * !USE_NATIVE, {Symbol: $Symbol});

                        for (var es6Symbols = (
                            // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
                            'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
                        ).split(','), j = 0; es6Symbols.length > j;) wks(es6Symbols[j++]);

                        for (var wellKnownSymbols = $keys(wks.store), k = 0; wellKnownSymbols.length > k;) wksDefine(wellKnownSymbols[k++]);

                        $export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
                            // 19.4.2.1 Symbol.for(key)
                            'for': function (key) {
                                return has(SymbolRegistry, key += '')
                                    ? SymbolRegistry[key]
                                    : SymbolRegistry[key] = $Symbol(key);
                            },
                            // 19.4.2.5 Symbol.keyFor(sym)
                            keyFor: function keyFor(sym) {
                                if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol!');
                                for (var key in SymbolRegistry) if (SymbolRegistry[key] === sym) return key;
                            },
                            useSetter: function () {
                                setter = true;
                            },
                            useSimple: function () {
                                setter = false;
                            }
                        });

                        $export($export.S + $export.F * !USE_NATIVE, 'Object', {
                            // 19.1.2.2 Object.create(O [, Properties])
                            create: $create,
                            // 19.1.2.4 Object.defineProperty(O, P, Attributes)
                            defineProperty: $defineProperty,
                            // 19.1.2.3 Object.defineProperties(O, Properties)
                            defineProperties: $defineProperties,
                            // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
                            getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
                            // 19.1.2.7 Object.getOwnPropertyNames(O)
                            getOwnPropertyNames: $getOwnPropertyNames,
                            // 19.1.2.8 Object.getOwnPropertySymbols(O)
                            getOwnPropertySymbols: $getOwnPropertySymbols
                        });

// 24.3.2 JSON.stringify(value [, replacer [, space]])
                        $JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function () {
                            var S = $Symbol();
                            // MS Edge converts symbol values to JSON as {}
                            // WebKit converts symbol values to JSON as null
                            // V8 throws on boxed symbols
                            return _stringify([S]) != '[null]' || _stringify({a: S}) != '{}' || _stringify(Object(S)) != '{}';
                        })), 'JSON', {
                            stringify: function stringify(it) {
                                var args = [it];
                                var i = 1;
                                var replacer, $replacer;
                                while (arguments.length > i) args.push(arguments[i++]);
                                $replacer = replacer = args[1];
                                if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
                                if (!isArray(replacer)) replacer = function (key, value) {
                                    if (typeof $replacer == 'function') value = $replacer.call(this, key, value);
                                    if (!isSymbol(value)) return value;
                                };
                                args[1] = replacer;
                                return _stringify.apply($JSON, args);
                            }
                        });

// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
                        $Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__("e0ed")($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
// 19.4.3.5 Symbol.prototype[@@toStringTag]
                        setToStringTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
                        setToStringTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
                        setToStringTag(global.JSON, 'JSON', true);


                        /***/
                    }),

                    /***/ "1c03":
                    /***/ (function (module, exports, __webpack_require__) {

                        var global = __webpack_require__("adad");
                        var core = __webpack_require__("947c");
                        var ctx = __webpack_require__("499c");
                        var hide = __webpack_require__("e0ed");
                        var has = __webpack_require__("5b85");
                        var PROTOTYPE = 'prototype';

                        var $export = function (type, name, source) {
                            var IS_FORCED = type & $export.F;
                            var IS_GLOBAL = type & $export.G;
                            var IS_STATIC = type & $export.S;
                            var IS_PROTO = type & $export.P;
                            var IS_BIND = type & $export.B;
                            var IS_WRAP = type & $export.W;
                            var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
                            var expProto = exports[PROTOTYPE];
                            var target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE];
                            var key, own, out;
                            if (IS_GLOBAL) source = name;
                            for (key in source) {
                                // contains in native
                                own = !IS_FORCED && target && target[key] !== undefined;
                                if (own && has(exports, key)) continue;
                                // export native or passed
                                out = own ? target[key] : source[key];
                                // prevent global pollution for namespaces
                                exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
                                    // bind timers to global for call from export context
                                    : IS_BIND && own ? ctx(out, global)
                                        // wrap global constructors for prevent change them in library
                                        : IS_WRAP && target[key] == out ? (function (C) {
                                            var F = function (a, b, c) {
                                                if (this instanceof C) {
                                                    switch (arguments.length) {
                                                        case 0:
                                                            return new C();
                                                        case 1:
                                                            return new C(a);
                                                        case 2:
                                                            return new C(a, b);
                                                    }
                                                    return new C(a, b, c);
                                                }
                                                return C.apply(this, arguments);
                                            };
                                            F[PROTOTYPE] = C[PROTOTYPE];
                                            return F;
                                            // make static versions for prototype methods
                                        })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
                                // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
                                if (IS_PROTO) {
                                    (exports.virtual || (exports.virtual = {}))[key] = out;
                                    // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
                                    if (type & $export.R && expProto && !expProto[key]) hide(expProto, key, out);
                                }
                            }
                        };
// type bitmap
                        $export.F = 1;   // forced
                        $export.G = 2;   // global
                        $export.S = 4;   // static
                        $export.P = 8;   // proto
                        $export.B = 16;  // bind
                        $export.W = 32;  // wrap
                        $export.U = 64;  // safe
                        $export.R = 128; // real proto method for `library`
                        module.exports = $export;


                        /***/
                    }),

                    /***/ "1c53":
                    /***/ (function (module, exports, __webpack_require__) {

                        __webpack_require__("d613");
                        var global = __webpack_require__("adad");
                        var hide = __webpack_require__("e0ed");
                        var Iterators = __webpack_require__("de2e");
                        var TO_STRING_TAG = __webpack_require__("eb5c")('toStringTag');

                        var DOMIterables = ('CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,' +
                            'DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,' +
                            'MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,' +
                            'SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,' +
                            'TextTrackList,TouchList').split(',');

                        for (var i = 0; i < DOMIterables.length; i++) {
                            var NAME = DOMIterables[i];
                            var Collection = global[NAME];
                            var proto = Collection && Collection.prototype;
                            if (proto && !proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
                            Iterators[NAME] = Iterators.Array;
                        }


                        /***/
                    }),

                    /***/ "1e81":
                    /***/ (function (module, exports, __webpack_require__) {

                        __webpack_require__("3389");
                        var $Object = __webpack_require__("947c").Object;
                        module.exports = function defineProperty(it, key, desc) {
                            return $Object.defineProperty(it, key, desc);
                        };


                        /***/
                    }),

                    /***/ "1f38":
                    /***/ (function (module, exports, __webpack_require__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
                        var cof = __webpack_require__("9081");
                        var TAG = __webpack_require__("7d30")('toStringTag');
// ES3 wrong here
                        var ARG = cof(function () {
                            return arguments;
                        }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
                        var tryGet = function (it, key) {
                            try {
                                return it[key];
                            } catch (e) { /* empty */
                            }
                        };

                        module.exports = function (it) {
                            var O, T, B;
                            return it === undefined ? 'Undefined' : it === null ? 'Null'
                                // @@toStringTag case
                                : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
                                    // builtinTag case
                                    : ARG ? cof(O)
                                        // ES3 arguments fallback
                                        : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
                        };


                        /***/
                    }),

                    /***/ "21e4":
                    /***/ (function (module, exports) {

                        var core = module.exports = {version: '2.6.4'};
                        if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


                        /***/
                    }),

                    /***/ "2369":
                    /***/ (function (module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
                        var $keys = __webpack_require__("b691");
                        var enumBugKeys = __webpack_require__("7321");

                        module.exports = Object.keys || function keys(O) {
                            return $keys(O, enumBugKeys);
                        };


                        /***/
                    }),

                    /***/ "24b2":
                    /***/ (function (module, exports, __webpack_require__) {

                        var shared = __webpack_require__("ad1c")('keys');
                        var uid = __webpack_require__("ea59");
                        module.exports = function (key) {
                            return shared[key] || (shared[key] = uid(key));
                        };


                        /***/
                    }),

                    /***/ "2590":
                    /***/ (function (module, exports, __webpack_require__) {

                        var META = __webpack_require__("edac")('meta');
                        var isObject = __webpack_require__("bc08");
                        var has = __webpack_require__("5b85");
                        var setDesc = __webpack_require__("4b11").f;
                        var id = 0;
                        var isExtensible = Object.isExtensible || function () {
                            return true;
                        };
                        var FREEZE = !__webpack_require__("3f9f")(function () {
                            return isExtensible(Object.preventExtensions({}));
                        });
                        var setMeta = function (it) {
                            setDesc(it, META, {
                                value: {
                                    i: 'O' + ++id, // object ID
                                    w: {}          // weak collections IDs
                                }
                            });
                        };
                        var fastKey = function (it, create) {
                            // return primitive with prefix
                            if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
                            if (!has(it, META)) {
                                // can't set metadata to uncaught frozen object
                                if (!isExtensible(it)) return 'F';
                                // not necessary to add metadata
                                if (!create) return 'E';
                                // add missing metadata
                                setMeta(it);
                                // return object ID
                            }
                            return it[META].i;
                        };
                        var getWeak = function (it, create) {
                            if (!has(it, META)) {
                                // can't set metadata to uncaught frozen object
                                if (!isExtensible(it)) return true;
                                // not necessary to add metadata
                                if (!create) return false;
                                // add missing metadata
                                setMeta(it);
                                // return hash weak collections IDs
                            }
                            return it[META].w;
                        };
// add metadata on freeze-family methods calling
                        var onFreeze = function (it) {
                            if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it);
                            return it;
                        };
                        var meta = module.exports = {
                            KEY: META,
                            NEED: false,
                            fastKey: fastKey,
                            getWeak: getWeak,
                            onFreeze: onFreeze
                        };


                        /***/
                    }),

                    /***/ "2624":
                    /***/ (function (module, exports, __webpack_require__) {

                        module.exports = __webpack_require__("2a8a");

                        /***/
                    }),

                    /***/ "26c6":
                    /***/ (function (module, exports, __webpack_require__) {

                        exports.f = __webpack_require__("eb5c");


                        /***/
                    }),

                    /***/ "28a8":
                    /***/ (function (module, exports, __webpack_require__) {

                        var isObject = __webpack_require__("df98");
                        var isArray = __webpack_require__("2de7");
                        var SPECIES = __webpack_require__("7d30")('species');

                        module.exports = function (original) {
                            var C;
                            if (isArray(original)) {
                                C = original.constructor;
                                // cross-realm fallback
                                if (typeof C == 'function' && (C === Array || isArray(C.prototype))) C = undefined;
                                if (isObject(C)) {
                                    C = C[SPECIES];
                                    if (C === null) C = undefined;
                                }
                            }
                            return C === undefined ? Array : C;
                        };


                        /***/
                    }),

                    /***/ "29b7":
                    /***/ (function (module, exports, __webpack_require__) {

// 7.2.2 IsArray(argument)
                        var cof = __webpack_require__("985c");
                        module.exports = Array.isArray || function isArray(arg) {
                            return cof(arg) == 'Array';
                        };


                        /***/
                    }),

                    /***/ "2a8a":
                    /***/ (function (module, exports, __webpack_require__) {

                        __webpack_require__("c158");
                        var $Object = __webpack_require__("947c").Object;
                        module.exports = function getOwnPropertyDescriptor(it, key) {
                            return $Object.getOwnPropertyDescriptor(it, key);
                        };


                        /***/
                    }),

                    /***/ "2ae9":
                    /***/ (function (module, exports) {

                        module.exports = function (bitmap, value) {
                            return {
                                enumerable: !(bitmap & 1),
                                configurable: !(bitmap & 2),
                                writable: !(bitmap & 4),
                                value: value
                            };
                        };


                        /***/
                    }),

                    /***/ "2bfe":
                    /***/ (function (module, exports, __webpack_require__) {

                        "use strict";


                        var regexpFlags = __webpack_require__("64bd");

                        var nativeExec = RegExp.prototype.exec;
// This always refers to the native implementation, because the
// String#replace polyfill uses ./fix-regexp-well-known-symbol-logic.js,
// which loads this file before patching the method.
                        var nativeReplace = String.prototype.replace;

                        var patchedExec = nativeExec;

                        var LAST_INDEX = 'lastIndex';

                        var UPDATES_LAST_INDEX_WRONG = (function () {
                            var re1 = /a/,
                                re2 = /b*/g;
                            nativeExec.call(re1, 'a');
                            nativeExec.call(re2, 'a');
                            return re1[LAST_INDEX] !== 0 || re2[LAST_INDEX] !== 0;
                        })();

// nonparticipating capturing group, copied from es5-shim's String#split patch.
                        var NPCG_INCLUDED = /()??/.exec('')[1] !== undefined;

                        var PATCH = UPDATES_LAST_INDEX_WRONG || NPCG_INCLUDED;

                        if (PATCH) {
                            patchedExec = function exec(str) {
                                var re = this;
                                var lastIndex, reCopy, match, i;

                                if (NPCG_INCLUDED) {
                                    reCopy = new RegExp('^' + re.source + '$(?!\\s)', regexpFlags.call(re));
                                }
                                if (UPDATES_LAST_INDEX_WRONG) lastIndex = re[LAST_INDEX];

                                match = nativeExec.call(re, str);

                                if (UPDATES_LAST_INDEX_WRONG && match) {
                                    re[LAST_INDEX] = re.global ? match.index + match[0].length : lastIndex;
                                }
                                if (NPCG_INCLUDED && match && match.length > 1) {
                                    // Fix browsers whose `exec` methods don't consistently return `undefined`
                                    // for NPCG, like IE8. NOTE: This doesn' work for /(.?)?/
                                    // eslint-disable-next-line no-loop-func
                                    nativeReplace.call(match[0], reCopy, function () {
                                        for (i = 1; i < arguments.length - 2; i++) {
                                            if (arguments[i] === undefined) match[i] = undefined;
                                        }
                                    });
                                }

                                return match;
                            };
                        }

                        module.exports = patchedExec;


                        /***/
                    }),

                    /***/ "2cc2":
                    /***/ (function (module, exports, __webpack_require__) {

// 7.3.20 SpeciesConstructor(O, defaultConstructor)
                        var anObject = __webpack_require__("d1f8");
                        var aFunction = __webpack_require__("f49a");
                        var SPECIES = __webpack_require__("7d30")('species');
                        module.exports = function (O, D) {
                            var C = anObject(O).constructor;
                            var S;
                            return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
                        };


                        /***/
                    }),

                    /***/ "2dae":
                    /***/ (function (module, exports) {

                        exports.f = Object.getOwnPropertySymbols;


                        /***/
                    }),

                    /***/ "2de7":
                    /***/ (function (module, exports, __webpack_require__) {

// 7.2.2 IsArray(argument)
                        var cof = __webpack_require__("9081");
                        module.exports = Array.isArray || function isArray(arg) {
                            return cof(arg) == 'Array';
                        };


                        /***/
                    }),

                    /***/ "3389":
                    /***/ (function (module, exports, __webpack_require__) {

                        var $export = __webpack_require__("1c03");
// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
                        $export($export.S + $export.F * !__webpack_require__("fa25"), 'Object', {defineProperty: __webpack_require__("4b11").f});


                        /***/
                    }),

                    /***/ "339d":
                    /***/ (function (module, exports, __webpack_require__) {

                        "use strict";

                        var LIBRARY = __webpack_require__("c616");
                        var $export = __webpack_require__("62cf");
                        var redefine = __webpack_require__("ede6");
                        var hide = __webpack_require__("f650");
                        var Iterators = __webpack_require__("ee07");
                        var $iterCreate = __webpack_require__("d0b6");
                        var setToStringTag = __webpack_require__("bc59");
                        var getPrototypeOf = __webpack_require__("6aa4");
                        var ITERATOR = __webpack_require__("7d30")('iterator');
                        var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
                        var FF_ITERATOR = '@@iterator';
                        var KEYS = 'keys';
                        var VALUES = 'values';

                        var returnThis = function () {
                            return this;
                        };

                        module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
                            $iterCreate(Constructor, NAME, next);
                            var getMethod = function (kind) {
                                if (!BUGGY && kind in proto) return proto[kind];
                                switch (kind) {
                                    case KEYS:
                                        return function keys() {
                                            return new Constructor(this, kind);
                                        };
                                    case VALUES:
                                        return function values() {
                                            return new Constructor(this, kind);
                                        };
                                }
                                return function entries() {
                                    return new Constructor(this, kind);
                                };
                            };
                            var TAG = NAME + ' Iterator';
                            var DEF_VALUES = DEFAULT == VALUES;
                            var VALUES_BUG = false;
                            var proto = Base.prototype;
                            var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
                            var $default = $native || getMethod(DEFAULT);
                            var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
                            var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
                            var methods, key, IteratorPrototype;
                            // Fix native
                            if ($anyNative) {
                                IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
                                if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
                                    // Set @@toStringTag to native iterators
                                    setToStringTag(IteratorPrototype, TAG, true);
                                    // fix for some old engines
                                    if (!LIBRARY && typeof IteratorPrototype[ITERATOR] != 'function') hide(IteratorPrototype, ITERATOR, returnThis);
                                }
                            }
                            // fix Array#{values, @@iterator}.name in V8 / FF
                            if (DEF_VALUES && $native && $native.name !== VALUES) {
                                VALUES_BUG = true;
                                $default = function values() {
                                    return $native.call(this);
                                };
                            }
                            // Define iterator
                            if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
                                hide(proto, ITERATOR, $default);
                            }
                            // Plug for library
                            Iterators[NAME] = $default;
                            Iterators[TAG] = returnThis;
                            if (DEFAULT) {
                                methods = {
                                    values: DEF_VALUES ? $default : getMethod(VALUES),
                                    keys: IS_SET ? $default : getMethod(KEYS),
                                    entries: $entries
                                };
                                if (FORCED) for (key in methods) {
                                    if (!(key in proto)) redefine(proto, key, methods[key]);
                                } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
                            }
                            return methods;
                        };


                        /***/
                    }),

                    /***/ "33ca":
                    /***/ (function (module, exports, __webpack_require__) {

// 7.1.15 ToLength
                        var toInteger = __webpack_require__("97d8");
                        var min = Math.min;
                        module.exports = function (it) {
                            return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
                        };


                        /***/
                    }),

                    /***/ "3c7a":
                    /***/ (function (module, exports, __webpack_require__) {

                        var anObject = __webpack_require__("d1f8");
                        var IE8_DOM_DEFINE = __webpack_require__("e258");
                        var toPrimitive = __webpack_require__("166f");
                        var dP = Object.defineProperty;

                        exports.f = __webpack_require__("66b6") ? Object.defineProperty : function defineProperty(O, P, Attributes) {
                            anObject(O);
                            P = toPrimitive(P, true);
                            anObject(Attributes);
                            if (IE8_DOM_DEFINE) try {
                                return dP(O, P, Attributes);
                            } catch (e) { /* empty */
                            }
                            if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
                            if ('value' in Attributes) O[P] = Attributes.value;
                            return O;
                        };


                        /***/
                    }),

                    /***/ "3cc5":
                    /***/ (function (module, exports, __webpack_require__) {

                        var isObject = __webpack_require__("bc08");
                        module.exports = function (it) {
                            if (!isObject(it)) throw TypeError(it + ' is not an object!');
                            return it;
                        };


                        /***/
                    }),

                    /***/ "3e85":
                    /***/ (function (module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
                        module.exports = function (it) {
                            if (it == undefined) throw TypeError("Can't call method on  " + it);
                            return it;
                        };


                        /***/
                    }),

                    /***/ "3f25":
                    /***/ (function (module, exports, __webpack_require__) {

// most Object methods by ES6 should accept primitives
                        var $export = __webpack_require__("62cf");
                        var core = __webpack_require__("21e4");
                        var fails = __webpack_require__("910c");
                        module.exports = function (KEY, exec) {
                            var fn = (core.Object || {})[KEY] || Object[KEY];
                            var exp = {};
                            exp[KEY] = exec(fn);
                            $export($export.S + $export.F * fails(function () {
                                fn(1);
                            }), 'Object', exp);
                        };


                        /***/
                    }),

                    /***/ "3f9f":
                    /***/ (function (module, exports) {

                        module.exports = function (exec) {
                            try {
                                return !!exec();
                            } catch (e) {
                                return true;
                            }
                        };


                        /***/
                    }),

                    /***/ "4051":
                    /***/ (function (module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
                        var defined = __webpack_require__("3e85");
                        module.exports = function (it) {
                            return Object(defined(it));
                        };


                        /***/
                    }),

                    /***/ "4821":
                    /***/ (function (module, exports, __webpack_require__) {

                        var $iterators = __webpack_require__("8a52");
                        var getKeys = __webpack_require__("2369");
                        var redefine = __webpack_require__("ede6");
                        var global = __webpack_require__("898f");
                        var hide = __webpack_require__("f650");
                        var Iterators = __webpack_require__("ee07");
                        var wks = __webpack_require__("7d30");
                        var ITERATOR = wks('iterator');
                        var TO_STRING_TAG = wks('toStringTag');
                        var ArrayValues = Iterators.Array;

                        var DOMIterables = {
                            CSSRuleList: true, // TODO: Not spec compliant, should be false.
                            CSSStyleDeclaration: false,
                            CSSValueList: false,
                            ClientRectList: false,
                            DOMRectList: false,
                            DOMStringList: false,
                            DOMTokenList: true,
                            DataTransferItemList: false,
                            FileList: false,
                            HTMLAllCollection: false,
                            HTMLCollection: false,
                            HTMLFormElement: false,
                            HTMLSelectElement: false,
                            MediaList: true, // TODO: Not spec compliant, should be false.
                            MimeTypeArray: false,
                            NamedNodeMap: false,
                            NodeList: true,
                            PaintRequestList: false,
                            Plugin: false,
                            PluginArray: false,
                            SVGLengthList: false,
                            SVGNumberList: false,
                            SVGPathSegList: false,
                            SVGPointList: false,
                            SVGStringList: false,
                            SVGTransformList: false,
                            SourceBufferList: false,
                            StyleSheetList: true, // TODO: Not spec compliant, should be false.
                            TextTrackCueList: false,
                            TextTrackList: false,
                            TouchList: false
                        };

                        for (var collections = getKeys(DOMIterables), i = 0; i < collections.length; i++) {
                            var NAME = collections[i];
                            var explicit = DOMIterables[NAME];
                            var Collection = global[NAME];
                            var proto = Collection && Collection.prototype;
                            var key;
                            if (proto) {
                                if (!proto[ITERATOR]) hide(proto, ITERATOR, ArrayValues);
                                if (!proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
                                Iterators[NAME] = ArrayValues;
                                if (explicit) for (key in $iterators) if (!proto[key]) redefine(proto, key, $iterators[key], true);
                            }
                        }


                        /***/
                    }),

                    /***/ "491a":
                    /***/ (function (module, exports, __webpack_require__) {

// 22.1.3.31 Array.prototype[@@unscopables]
                        var UNSCOPABLES = __webpack_require__("7d30")('unscopables');
                        var ArrayProto = Array.prototype;
                        if (ArrayProto[UNSCOPABLES] == undefined) __webpack_require__("f650")(ArrayProto, UNSCOPABLES, {});
                        module.exports = function (key) {
                            ArrayProto[UNSCOPABLES][key] = true;
                        };


                        /***/
                    }),

                    /***/ "4963":
                    /***/ (function (module, exports, __webpack_require__) {

                        __webpack_require__("8c2a");
                        module.exports = __webpack_require__("947c").Array.isArray;


                        /***/
                    }),

                    /***/ "499c":
                    /***/ (function (module, exports, __webpack_require__) {

// optional / simple context binding
                        var aFunction = __webpack_require__("8d84");
                        module.exports = function (fn, that, length) {
                            aFunction(fn);
                            if (that === undefined) return fn;
                            switch (length) {
                                case 1:
                                    return function (a) {
                                        return fn.call(that, a);
                                    };
                                case 2:
                                    return function (a, b) {
                                        return fn.call(that, a, b);
                                    };
                                case 3:
                                    return function (a, b, c) {
                                        return fn.call(that, a, b, c);
                                    };
                            }
                            return function (/* ...args */) {
                                return fn.apply(that, arguments);
                            };
                        };


                        /***/
                    }),

                    /***/ "4b11":
                    /***/ (function (module, exports, __webpack_require__) {

                        var anObject = __webpack_require__("3cc5");
                        var IE8_DOM_DEFINE = __webpack_require__("d210");
                        var toPrimitive = __webpack_require__("8e7e");
                        var dP = Object.defineProperty;

                        exports.f = __webpack_require__("fa25") ? Object.defineProperty : function defineProperty(O, P, Attributes) {
                            anObject(O);
                            P = toPrimitive(P, true);
                            anObject(Attributes);
                            if (IE8_DOM_DEFINE) try {
                                return dP(O, P, Attributes);
                            } catch (e) { /* empty */
                            }
                            if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
                            if ('value' in Attributes) O[P] = Attributes.value;
                            return O;
                        };


                        /***/
                    }),

                    /***/ "4baa":
                    /***/ (function (module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
                        var cof = __webpack_require__("985c");
// eslint-disable-next-line no-prototype-builtins
                        module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
                            return cof(it) == 'String' ? it.split('') : Object(it);
                        };


                        /***/
                    }),

                    /***/ "4c0f":
                    /***/ (function (module, exports) {

// document.currentScript polyfill by Adam Miller

// MIT license

                        (function (document) {
                            var currentScript = "currentScript",
                                scripts = document.getElementsByTagName('script'); // Live NodeList collection

                            // If browser needs currentScript polyfill, add get currentScript() to the document object
                            if (!(currentScript in document)) {
                                Object.defineProperty(document, currentScript, {
                                    get: function () {

                                        // IE 6-10 supports script readyState
                                        // IE 10+ support stack trace
                                        try {
                                            throw new Error();
                                        } catch (err) {

                                            // Find the second match for the "at" string to get file src url from stack.
                                            // Specifically works with the format of stack traces in IE.
                                            var i,
                                                res = ((/.*at [^\(]*\((.*):.+:.+\)$/ig).exec(err.stack) || [false])[1];

                                            // For all scripts on the page, if src matches or if ready state is interactive, return the script tag
                                            for (i in scripts) {
                                                if (scripts[i].src == res || scripts[i].readyState == "interactive") {
                                                    return scripts[i];
                                                }
                                            }

                                            // If no match, return null
                                            return null;
                                        }
                                    }
                                });
                            }
                        })(document);


                        /***/
                    }),

                    /***/ "5532":
                    /***/ (function (module, exports, __webpack_require__) {

// 20.3.3.1 / 15.9.4.4 Date.now()
                        var $export = __webpack_require__("62cf");

                        $export($export.S, 'Date', {
                            now: function () {
                                return new Date().getTime();
                            }
                        });


                        /***/
                    }),

                    /***/ "564f":
                    /***/ (function (module, exports, __webpack_require__) {

                        var core = __webpack_require__("947c");
                        var global = __webpack_require__("adad");
                        var SHARED = '__core-js_shared__';
                        var store = global[SHARED] || (global[SHARED] = {});

                        (module.exports = function (key, value) {
                            return store[key] || (store[key] = value !== undefined ? value : {});
                        })('versions', []).push({
                            version: core.version,
                            mode: __webpack_require__("5cde") ? 'pure' : 'global',
                            copyright: '© 2019 Denis Pushkarev (zloirock.ru)'
                        });


                        /***/
                    }),

                    /***/ "565f":
                    /***/ (function (module, exports) {


                        /***/
                    }),

                    /***/ "56d8":
                    /***/ (function (module, exports, __webpack_require__) {

                        var dP = __webpack_require__("4b11");
                        var anObject = __webpack_require__("3cc5");
                        var getKeys = __webpack_require__("a828");

                        module.exports = __webpack_require__("fa25") ? Object.defineProperties : function defineProperties(O, Properties) {
                            anObject(O);
                            var keys = getKeys(Properties);
                            var length = keys.length;
                            var i = 0;
                            var P;
                            while (length > i) dP.f(O, P = keys[i++], Properties[P]);
                            return O;
                        };


                        /***/
                    }),

                    /***/ "5a82":
                    /***/ (function (module, exports, __webpack_require__) {

                        "use strict";


                        var anObject = __webpack_require__("d1f8");
                        var toObject = __webpack_require__("4051");
                        var toLength = __webpack_require__("64d2");
                        var toInteger = __webpack_require__("7c04");
                        var advanceStringIndex = __webpack_require__("ce64");
                        var regExpExec = __webpack_require__("dd3b");
                        var max = Math.max;
                        var min = Math.min;
                        var floor = Math.floor;
                        var SUBSTITUTION_SYMBOLS = /\$([$&`']|\d\d?|<[^>]*>)/g;
                        var SUBSTITUTION_SYMBOLS_NO_NAMED = /\$([$&`']|\d\d?)/g;

                        var maybeToString = function (it) {
                            return it === undefined ? it : String(it);
                        };

// @@replace logic
                        __webpack_require__("e002")('replace', 2, function (defined, REPLACE, $replace, maybeCallNative) {
                            return [
                                // `String.prototype.replace` method
                                // https://tc39.github.io/ecma262/#sec-string.prototype.replace
                                function replace(searchValue, replaceValue) {
                                    var O = defined(this);
                                    var fn = searchValue == undefined ? undefined : searchValue[REPLACE];
                                    return fn !== undefined
                                        ? fn.call(searchValue, O, replaceValue)
                                        : $replace.call(String(O), searchValue, replaceValue);
                                },
                                // `RegExp.prototype[@@replace]` method
                                // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@replace
                                function (regexp, replaceValue) {
                                    var res = maybeCallNative($replace, regexp, this, replaceValue);
                                    if (res.done) return res.value;

                                    var rx = anObject(regexp);
                                    var S = String(this);
                                    var functionalReplace = typeof replaceValue === 'function';
                                    if (!functionalReplace) replaceValue = String(replaceValue);
                                    var global = rx.global;
                                    if (global) {
                                        var fullUnicode = rx.unicode;
                                        rx.lastIndex = 0;
                                    }
                                    var results = [];
                                    while (true) {
                                        var result = regExpExec(rx, S);
                                        if (result === null) break;
                                        results.push(result);
                                        if (!global) break;
                                        var matchStr = String(result[0]);
                                        if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
                                    }
                                    var accumulatedResult = '';
                                    var nextSourcePosition = 0;
                                    for (var i = 0; i < results.length; i++) {
                                        result = results[i];
                                        var matched = String(result[0]);
                                        var position = max(min(toInteger(result.index), S.length), 0);
                                        var captures = [];
                                        // NOTE: This is equivalent to
                                        //   captures = result.slice(1).map(maybeToString)
                                        // but for some reason `nativeSlice.call(result, 1, result.length)` (called in
                                        // the slice polyfill when slicing native arrays) "doesn't work" in safari 9 and
                                        // causes a crash (https://pastebin.com/N21QzeQA) when trying to debug it.
                                        for (var j = 1; j < result.length; j++) captures.push(maybeToString(result[j]));
                                        var namedCaptures = result.groups;
                                        if (functionalReplace) {
                                            var replacerArgs = [matched].concat(captures, position, S);
                                            if (namedCaptures !== undefined) replacerArgs.push(namedCaptures);
                                            var replacement = String(replaceValue.apply(undefined, replacerArgs));
                                        } else {
                                            replacement = getSubstitution(matched, S, position, captures, namedCaptures, replaceValue);
                                        }
                                        if (position >= nextSourcePosition) {
                                            accumulatedResult += S.slice(nextSourcePosition, position) + replacement;
                                            nextSourcePosition = position + matched.length;
                                        }
                                    }
                                    return accumulatedResult + S.slice(nextSourcePosition);
                                }
                            ];

                            // https://tc39.github.io/ecma262/#sec-getsubstitution
                            function getSubstitution(matched, str, position, captures, namedCaptures, replacement) {
                                var tailPos = position + matched.length;
                                var m = captures.length;
                                var symbols = SUBSTITUTION_SYMBOLS_NO_NAMED;
                                if (namedCaptures !== undefined) {
                                    namedCaptures = toObject(namedCaptures);
                                    symbols = SUBSTITUTION_SYMBOLS;
                                }
                                return $replace.call(replacement, symbols, function (match, ch) {
                                    var capture;
                                    switch (ch.charAt(0)) {
                                        case '$':
                                            return '$';
                                        case '&':
                                            return matched;
                                        case '`':
                                            return str.slice(0, position);
                                        case "'":
                                            return str.slice(tailPos);
                                        case '<':
                                            capture = namedCaptures[ch.slice(1, -1)];
                                            break;
                                        default: // \d\d?
                                            var n = +ch;
                                            if (n === 0) return match;
                                            if (n > m) {
                                                var f = floor(n / 10);
                                                if (f === 0) return match;
                                                if (f <= m) return captures[f - 1] === undefined ? ch.charAt(1) : captures[f - 1] + ch.charAt(1);
                                                return match;
                                            }
                                            capture = captures[n - 1];
                                    }
                                    return capture === undefined ? '' : capture;
                                });
                            }
                        });


                        /***/
                    }),

                    /***/ "5b85":
                    /***/ (function (module, exports) {

                        var hasOwnProperty = {}.hasOwnProperty;
                        module.exports = function (it, key) {
                            return hasOwnProperty.call(it, key);
                        };


                        /***/
                    }),

                    /***/ "5cde":
                    /***/ (function (module, exports) {

                        module.exports = true;


                        /***/
                    }),

                    /***/ "6020":
                    /***/ (function (module, exports, __webpack_require__) {

// 19.2.3.2 / 15.3.4.5 Function.prototype.bind(thisArg, args...)
                        var $export = __webpack_require__("62cf");

                        $export($export.P, 'Function', {bind: __webpack_require__("da91")});


                        /***/
                    }),

                    /***/ "62cf":
                    /***/ (function (module, exports, __webpack_require__) {

                        var global = __webpack_require__("898f");
                        var core = __webpack_require__("21e4");
                        var hide = __webpack_require__("f650");
                        var redefine = __webpack_require__("ede6");
                        var ctx = __webpack_require__("dd29");
                        var PROTOTYPE = 'prototype';

                        var $export = function (type, name, source) {
                            var IS_FORCED = type & $export.F;
                            var IS_GLOBAL = type & $export.G;
                            var IS_STATIC = type & $export.S;
                            var IS_PROTO = type & $export.P;
                            var IS_BIND = type & $export.B;
                            var target = IS_GLOBAL ? global : IS_STATIC ? global[name] || (global[name] = {}) : (global[name] || {})[PROTOTYPE];
                            var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
                            var expProto = exports[PROTOTYPE] || (exports[PROTOTYPE] = {});
                            var key, own, out, exp;
                            if (IS_GLOBAL) source = name;
                            for (key in source) {
                                // contains in native
                                own = !IS_FORCED && target && target[key] !== undefined;
                                // export native or passed
                                out = (own ? target : source)[key];
                                // bind timers to global for call from export context
                                exp = IS_BIND && own ? ctx(out, global) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
                                // extend global
                                if (target) redefine(target, key, out, type & $export.U);
                                // export
                                if (exports[key] != out) hide(exports, key, exp);
                                if (IS_PROTO && expProto[key] != out) expProto[key] = out;
                            }
                        };
                        global.core = core;
// type bitmap
                        $export.F = 1;   // forced
                        $export.G = 2;   // global
                        $export.S = 4;   // static
                        $export.P = 8;   // proto
                        $export.B = 16;  // bind
                        $export.W = 32;  // wrap
                        $export.U = 64;  // safe
                        $export.R = 128; // real proto method for `library`
                        module.exports = $export;


                        /***/
                    }),

                    /***/ "64bd":
                    /***/ (function (module, exports, __webpack_require__) {

                        "use strict";

// 21.2.5.3 get RegExp.prototype.flags
                        var anObject = __webpack_require__("d1f8");
                        module.exports = function () {
                            var that = anObject(this);
                            var result = '';
                            if (that.global) result += 'g';
                            if (that.ignoreCase) result += 'i';
                            if (that.multiline) result += 'm';
                            if (that.unicode) result += 'u';
                            if (that.sticky) result += 'y';
                            return result;
                        };


                        /***/
                    }),

                    /***/ "64d2":
                    /***/ (function (module, exports, __webpack_require__) {

// 7.1.15 ToLength
                        var toInteger = __webpack_require__("7c04");
                        var min = Math.min;
                        module.exports = function (it) {
                            return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
                        };


                        /***/
                    }),

                    /***/ "66b6":
                    /***/ (function (module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
                        module.exports = !__webpack_require__("910c")(function () {
                            return Object.defineProperty({}, 'a', {
                                get: function () {
                                    return 7;
                                }
                            }).a != 7;
                        });


                        /***/
                    }),

                    /***/ "672a":
                    /***/ (function (module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
                        var IObject = __webpack_require__("6815");
                        var defined = __webpack_require__("3e85");
                        module.exports = function (it) {
                            return IObject(defined(it));
                        };


                        /***/
                    }),

                    /***/ "6815":
                    /***/ (function (module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
                        var cof = __webpack_require__("9081");
// eslint-disable-next-line no-prototype-builtins
                        module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
                            return cof(it) == 'String' ? it.split('') : Object(it);
                        };


                        /***/
                    }),

                    /***/ "6a0d":
                    /***/ (function (module, exports, __webpack_require__) {

                        __webpack_require__("1ae2");
                        module.exports = __webpack_require__("947c").Object.getOwnPropertySymbols;


                        /***/
                    }),

                    /***/ "6aa4":
                    /***/ (function (module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
                        var has = __webpack_require__("07fd");
                        var toObject = __webpack_require__("4051");
                        var IE_PROTO = __webpack_require__("24b2")('IE_PROTO');
                        var ObjectProto = Object.prototype;

                        module.exports = Object.getPrototypeOf || function (O) {
                            O = toObject(O);
                            if (has(O, IE_PROTO)) return O[IE_PROTO];
                            if (typeof O.constructor == 'function' && O instanceof O.constructor) {
                                return O.constructor.prototype;
                            }
                            return O instanceof Object ? ObjectProto : null;
                        };


                        /***/
                    }),

                    /***/ "6bf9":
                    /***/ (function (module, exports, __webpack_require__) {

                        var document = __webpack_require__("adad").document;
                        module.exports = document && document.documentElement;


                        /***/
                    }),

                    /***/ "7174":
                    /***/ (function (module, exports) {

                        module.exports = function (bitmap, value) {
                            return {
                                enumerable: !(bitmap & 1),
                                configurable: !(bitmap & 2),
                                writable: !(bitmap & 4),
                                value: value
                            };
                        };


                        /***/
                    }),

                    /***/ "7284":
                    /***/ (function (module, exports, __webpack_require__) {

                        __webpack_require__("1c53");
                        __webpack_require__("e001");
                        module.exports = __webpack_require__("081c");


                        /***/
                    }),

                    /***/ "7321":
                    /***/ (function (module, exports) {

// IE 8- don't enum bug keys
                        module.exports = (
                            'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
                        ).split(',');


                        /***/
                    }),

                    /***/ "7359":
                    /***/ (function (module, exports, __webpack_require__) {

                        __webpack_require__("b978")('asyncIterator');


                        /***/
                    }),

                    /***/ "7676":
                    /***/ (function (module, exports, __webpack_require__) {

                        __webpack_require__("1ae2");
                        __webpack_require__("565f");
                        __webpack_require__("7359");
                        __webpack_require__("b592");
                        module.exports = __webpack_require__("947c").Symbol;


                        /***/
                    }),

                    /***/ "7c04":
                    /***/ (function (module, exports) {

// 7.1.4 ToInteger
                        var ceil = Math.ceil;
                        var floor = Math.floor;
                        module.exports = function (it) {
                            return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
                        };


                        /***/
                    }),

                    /***/ "7c34":
                    /***/ (function (module, exports) {

                        module.exports = function (done, value) {
                            return {value: value, done: !!done};
                        };


                        /***/
                    }),

                    /***/ "7d30":
                    /***/ (function (module, exports, __webpack_require__) {

                        var store = __webpack_require__("ad1c")('wks');
                        var uid = __webpack_require__("ea59");
                        var Symbol = __webpack_require__("898f").Symbol;
                        var USE_SYMBOL = typeof Symbol == 'function';

                        var $exports = module.exports = function (name) {
                            return store[name] || (store[name] =
                                USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
                        };

                        $exports.store = store;


                        /***/
                    }),

                    /***/ "7ffd":
                    /***/ (function (module, exports) {

// IE 8- don't enum bug keys
                        module.exports = (
                            'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
                        ).split(',');


                        /***/
                    }),

                    /***/ "8273":
                    /***/ (function (module, exports, __webpack_require__) {

                        var toInteger = __webpack_require__("97d8");
                        var defined = __webpack_require__("0acd");
// true  -> String#at
// false -> String#codePointAt
                        module.exports = function (TO_STRING) {
                            return function (that, pos) {
                                var s = String(defined(that));
                                var i = toInteger(pos);
                                var l = s.length;
                                var a, b;
                                if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
                                a = s.charCodeAt(i);
                                return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
                                    ? TO_STRING ? s.charAt(i) : a
                                    : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
                            };
                        };


                        /***/
                    }),

                    /***/ "8371":
                    /***/ (function (module, exports, __webpack_require__) {

// most Object methods by ES6 should accept primitives
                        var $export = __webpack_require__("1c03");
                        var core = __webpack_require__("947c");
                        var fails = __webpack_require__("3f9f");
                        module.exports = function (KEY, exec) {
                            var fn = (core.Object || {})[KEY] || Object[KEY];
                            var exp = {};
                            exp[KEY] = exec(fn);
                            $export($export.S + $export.F * fails(function () {
                                fn(1);
                            }), 'Object', exp);
                        };


                        /***/
                    }),

                    /***/ "8490":
                    /***/ (function (module, exports, __webpack_require__) {

                        "use strict";

                        var LIBRARY = __webpack_require__("5cde");
                        var $export = __webpack_require__("1c03");
                        var redefine = __webpack_require__("c76b");
                        var hide = __webpack_require__("e0ed");
                        var Iterators = __webpack_require__("de2e");
                        var $iterCreate = __webpack_require__("df7a");
                        var setToStringTag = __webpack_require__("a0f7");
                        var getPrototypeOf = __webpack_require__("e55f");
                        var ITERATOR = __webpack_require__("eb5c")('iterator');
                        var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
                        var FF_ITERATOR = '@@iterator';
                        var KEYS = 'keys';
                        var VALUES = 'values';

                        var returnThis = function () {
                            return this;
                        };

                        module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
                            $iterCreate(Constructor, NAME, next);
                            var getMethod = function (kind) {
                                if (!BUGGY && kind in proto) return proto[kind];
                                switch (kind) {
                                    case KEYS:
                                        return function keys() {
                                            return new Constructor(this, kind);
                                        };
                                    case VALUES:
                                        return function values() {
                                            return new Constructor(this, kind);
                                        };
                                }
                                return function entries() {
                                    return new Constructor(this, kind);
                                };
                            };
                            var TAG = NAME + ' Iterator';
                            var DEF_VALUES = DEFAULT == VALUES;
                            var VALUES_BUG = false;
                            var proto = Base.prototype;
                            var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
                            var $default = $native || getMethod(DEFAULT);
                            var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
                            var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
                            var methods, key, IteratorPrototype;
                            // Fix native
                            if ($anyNative) {
                                IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
                                if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
                                    // Set @@toStringTag to native iterators
                                    setToStringTag(IteratorPrototype, TAG, true);
                                    // fix for some old engines
                                    if (!LIBRARY && typeof IteratorPrototype[ITERATOR] != 'function') hide(IteratorPrototype, ITERATOR, returnThis);
                                }
                            }
                            // fix Array#{values, @@iterator}.name in V8 / FF
                            if (DEF_VALUES && $native && $native.name !== VALUES) {
                                VALUES_BUG = true;
                                $default = function values() {
                                    return $native.call(this);
                                };
                            }
                            // Define iterator
                            if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
                                hide(proto, ITERATOR, $default);
                            }
                            // Plug for library
                            Iterators[NAME] = $default;
                            Iterators[TAG] = returnThis;
                            if (DEFAULT) {
                                methods = {
                                    values: DEF_VALUES ? $default : getMethod(VALUES),
                                    keys: IS_SET ? $default : getMethod(KEYS),
                                    entries: $entries
                                };
                                if (FORCED) for (key in methods) {
                                    if (!(key in proto)) redefine(proto, key, methods[key]);
                                } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
                            }
                            return methods;
                        };


                        /***/
                    }),

                    /***/ "872b":
                    /***/ (function (module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
                        var defined = __webpack_require__("0acd");
                        module.exports = function (it) {
                            return Object(defined(it));
                        };


                        /***/
                    }),

                    /***/ "893c":
                    /***/ (function (module, exports, __webpack_require__) {

                        module.exports = __webpack_require__("1e81");

                        /***/
                    }),

                    /***/ "898f":
                    /***/ (function (module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
                        var global = module.exports = typeof window != 'undefined' && window.Math == Math
                            ? window : typeof self != 'undefined' && self.Math == Math ? self
                                // eslint-disable-next-line no-new-func
                                : Function('return this')();
                        if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


                        /***/
                    }),

                    /***/ "8a52":
                    /***/ (function (module, exports, __webpack_require__) {

                        "use strict";

                        var addToUnscopables = __webpack_require__("491a");
                        var step = __webpack_require__("af65");
                        var Iterators = __webpack_require__("ee07");
                        var toIObject = __webpack_require__("672a");

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
                        module.exports = __webpack_require__("339d")(Array, 'Array', function (iterated, kind) {
                            this._t = toIObject(iterated); // target
                            this._i = 0;                   // next index
                            this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
                        }, function () {
                            var O = this._t;
                            var kind = this._k;
                            var index = this._i++;
                            if (!O || index >= O.length) {
                                this._t = undefined;
                                return step(1);
                            }
                            if (kind == 'keys') return step(0, index);
                            if (kind == 'values') return step(0, O[index]);
                            return step(0, [index, O[index]]);
                        }, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
                        Iterators.Arguments = Iterators.Array;

                        addToUnscopables('keys');
                        addToUnscopables('values');
                        addToUnscopables('entries');


                        /***/
                    }),

                    /***/ "8a60":
                    /***/ (function (module, exports, __webpack_require__) {

                        module.exports = __webpack_require__("ad1c")('native-function-to-string', Function.toString);


                        /***/
                    }),

                    /***/ "8c2a":
                    /***/ (function (module, exports, __webpack_require__) {

// 22.1.2.2 / 15.4.3.2 Array.isArray(arg)
                        var $export = __webpack_require__("1c03");

                        $export($export.S, 'Array', {isArray: __webpack_require__("29b7")});


                        /***/
                    }),

                    /***/ "8cb6":
                    /***/ (function (module, exports, __webpack_require__) {

                        var isObject = __webpack_require__("bc08");
                        var document = __webpack_require__("adad").document;
// typeof document.createElement is 'object' in old IE
                        var is = isObject(document) && isObject(document.createElement);
                        module.exports = function (it) {
                            return is ? document.createElement(it) : {};
                        };


                        /***/
                    }),

                    /***/ "8d84":
                    /***/ (function (module, exports) {

                        module.exports = function (it) {
                            if (typeof it != 'function') throw TypeError(it + ' is not a function!');
                            return it;
                        };


                        /***/
                    }),

                    /***/ "8e7e":
                    /***/ (function (module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
                        var isObject = __webpack_require__("bc08");
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
                        module.exports = function (it, S) {
                            if (!isObject(it)) return it;
                            var fn, val;
                            if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
                            if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
                            if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
                            throw TypeError("Can't convert object to primitive value");
                        };


                        /***/
                    }),

                    /***/ "9081":
                    /***/ (function (module, exports) {

                        var toString = {}.toString;

                        module.exports = function (it) {
                            return toString.call(it).slice(8, -1);
                        };


                        /***/
                    }),

                    /***/ "910c":
                    /***/ (function (module, exports) {

                        module.exports = function (exec) {
                            try {
                                return !!exec();
                            } catch (e) {
                                return true;
                            }
                        };


                        /***/
                    }),

                    /***/ "947c":
                    /***/ (function (module, exports) {

                        var core = module.exports = {version: '2.6.4'};
                        if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


                        /***/
                    }),

                    /***/ "97d8":
                    /***/ (function (module, exports) {

// 7.1.4 ToInteger
                        var ceil = Math.ceil;
                        var floor = Math.floor;
                        module.exports = function (it) {
                            return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
                        };


                        /***/
                    }),

                    /***/ "985c":
                    /***/ (function (module, exports) {

                        var toString = {}.toString;

                        module.exports = function (it) {
                            return toString.call(it).slice(8, -1);
                        };


                        /***/
                    }),

                    /***/ "9b5e":
                    /***/ (function (module, exports, __webpack_require__) {

                        __webpack_require__("d147");
                        module.exports = __webpack_require__("947c").Object.keys;


                        /***/
                    }),

                    /***/ "9be5":
                    /***/ (function (module, exports, __webpack_require__) {

                        var toInteger = __webpack_require__("97d8");
                        var max = Math.max;
                        var min = Math.min;
                        module.exports = function (index, length) {
                            index = toInteger(index);
                            return index < 0 ? max(index + length, 0) : min(index, length);
                        };


                        /***/
                    }),

                    /***/ "a0f7":
                    /***/ (function (module, exports, __webpack_require__) {

                        var def = __webpack_require__("4b11").f;
                        var has = __webpack_require__("5b85");
                        var TAG = __webpack_require__("eb5c")('toStringTag');

                        module.exports = function (it, tag, stat) {
                            if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, {
                                configurable: true,
                                value: tag
                            });
                        };


                        /***/
                    }),

                    /***/ "a634":
                    /***/ (function (module, exports) {

// fast apply, http://jsperf.lnkit.com/fast-apply/5
                        module.exports = function (fn, args, that) {
                            var un = that === undefined;
                            switch (args.length) {
                                case 0:
                                    return un ? fn()
                                        : fn.call(that);
                                case 1:
                                    return un ? fn(args[0])
                                        : fn.call(that, args[0]);
                                case 2:
                                    return un ? fn(args[0], args[1])
                                        : fn.call(that, args[0], args[1]);
                                case 3:
                                    return un ? fn(args[0], args[1], args[2])
                                        : fn.call(that, args[0], args[1], args[2]);
                                case 4:
                                    return un ? fn(args[0], args[1], args[2], args[3])
                                        : fn.call(that, args[0], args[1], args[2], args[3]);
                            }
                            return fn.apply(that, args);
                        };


                        /***/
                    }),

                    /***/ "a828":
                    /***/ (function (module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
                        var $keys = __webpack_require__("157a");
                        var enumBugKeys = __webpack_require__("7ffd");

                        module.exports = Object.keys || function keys(O) {
                            return $keys(O, enumBugKeys);
                        };


                        /***/
                    }),

                    /***/ "a8ae":
                    /***/ (function (module, exports, __webpack_require__) {

// 7.2.8 IsRegExp(argument)
                        var isObject = __webpack_require__("df98");
                        var cof = __webpack_require__("9081");
                        var MATCH = __webpack_require__("7d30")('match');
                        module.exports = function (it) {
                            var isRegExp;
                            return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : cof(it) == 'RegExp');
                        };


                        /***/
                    }),

                    /***/ "a8b1":
                    /***/ (function (module, exports, __webpack_require__) {

                        module.exports = __webpack_require__("6a0d");

                        /***/
                    }),

                    /***/ "ad1c":
                    /***/ (function (module, exports, __webpack_require__) {

                        var core = __webpack_require__("21e4");
                        var global = __webpack_require__("898f");
                        var SHARED = '__core-js_shared__';
                        var store = global[SHARED] || (global[SHARED] = {});

                        (module.exports = function (key, value) {
                            return store[key] || (store[key] = value !== undefined ? value : {});
                        })('versions', []).push({
                            version: core.version,
                            mode: __webpack_require__("c616") ? 'pure' : 'global',
                            copyright: '© 2019 Denis Pushkarev (zloirock.ru)'
                        });


                        /***/
                    }),

                    /***/ "ad89":
                    /***/ (function (module, exports) {

                        var g;

// This works in non-strict mode
                        g = (function () {
                            return this;
                        })();

                        try {
                            // This works if eval is allowed (see CSP)
                            g = g || new Function("return this")();
                        } catch (e) {
                            // This works if the window reference is available
                            if (typeof window === "object") g = window;
                        }

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

                        module.exports = g;


                        /***/
                    }),

                    /***/ "adad":
                    /***/ (function (module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
                        var global = module.exports = typeof window != 'undefined' && window.Math == Math
                            ? window : typeof self != 'undefined' && self.Math == Math ? self
                                // eslint-disable-next-line no-new-func
                                : Function('return this')();
                        if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


                        /***/
                    }),

                    /***/ "af30":
                    /***/ (function (module, exports, __webpack_require__) {

                        module.exports = __webpack_require__("4963");

                        /***/
                    }),

                    /***/ "af65":
                    /***/ (function (module, exports) {

                        module.exports = function (done, value) {
                            return {value: value, done: !!done};
                        };


                        /***/
                    }),

                    /***/ "afd5":
                    /***/ (function (module, exports, __webpack_require__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
                        var cof = __webpack_require__("985c");
                        var TAG = __webpack_require__("eb5c")('toStringTag');
// ES3 wrong here
                        var ARG = cof(function () {
                            return arguments;
                        }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
                        var tryGet = function (it, key) {
                            try {
                                return it[key];
                            } catch (e) { /* empty */
                            }
                        };

                        module.exports = function (it) {
                            var O, T, B;
                            return it === undefined ? 'Undefined' : it === null ? 'Null'
                                // @@toStringTag case
                                : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
                                    // builtinTag case
                                    : ARG ? cof(O)
                                        // ES3 arguments fallback
                                        : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
                        };


                        /***/
                    }),

                    /***/ "b00a":
                    /***/ (function (module, exports, __webpack_require__) {

                        var toInteger = __webpack_require__("7c04");
                        var defined = __webpack_require__("3e85");
// true  -> String#at
// false -> String#codePointAt
                        module.exports = function (TO_STRING) {
                            return function (that, pos) {
                                var s = String(defined(that));
                                var i = toInteger(pos);
                                var l = s.length;
                                var a, b;
                                if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
                                a = s.charCodeAt(i);
                                return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
                                    ? TO_STRING ? s.charAt(i) : a
                                    : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
                            };
                        };


                        /***/
                    }),

                    /***/ "b592":
                    /***/ (function (module, exports, __webpack_require__) {

                        __webpack_require__("b978")('observable');


                        /***/
                    }),

                    /***/ "b691":
                    /***/ (function (module, exports, __webpack_require__) {

                        var has = __webpack_require__("07fd");
                        var toIObject = __webpack_require__("672a");
                        var arrayIndexOf = __webpack_require__("0746")(false);
                        var IE_PROTO = __webpack_require__("24b2")('IE_PROTO');

                        module.exports = function (object, names) {
                            var O = toIObject(object);
                            var i = 0;
                            var result = [];
                            var key;
                            for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
                            // Don't enum bug & hidden keys
                            while (names.length > i) if (has(O, key = names[i++])) {
                                ~arrayIndexOf(result, key) || result.push(key);
                            }
                            return result;
                        };


                        /***/
                    }),

                    /***/ "b978":
                    /***/ (function (module, exports, __webpack_require__) {

                        var global = __webpack_require__("adad");
                        var core = __webpack_require__("947c");
                        var LIBRARY = __webpack_require__("5cde");
                        var wksExt = __webpack_require__("26c6");
                        var defineProperty = __webpack_require__("4b11").f;
                        module.exports = function (name) {
                            var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
                            if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, {value: wksExt.f(name)});
                        };


                        /***/
                    }),

                    /***/ "bc08":
                    /***/ (function (module, exports) {

                        module.exports = function (it) {
                            return typeof it === 'object' ? it !== null : typeof it === 'function';
                        };


                        /***/
                    }),

                    /***/ "bc59":
                    /***/ (function (module, exports, __webpack_require__) {

                        var def = __webpack_require__("3c7a").f;
                        var has = __webpack_require__("07fd");
                        var TAG = __webpack_require__("7d30")('toStringTag');

                        module.exports = function (it, tag, stat) {
                            if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, {
                                configurable: true,
                                value: tag
                            });
                        };


                        /***/
                    }),

                    /***/ "bc7f":
                    /***/ (function (module, exports, __webpack_require__) {

                        __webpack_require__("e001");
                        __webpack_require__("1c53");
                        module.exports = __webpack_require__("26c6").f('iterator');


                        /***/
                    }),

                    /***/ "c158":
                    /***/ (function (module, exports, __webpack_require__) {

// 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
                        var toIObject = __webpack_require__("c5f8");
                        var $getOwnPropertyDescriptor = __webpack_require__("e369").f;

                        __webpack_require__("8371")('getOwnPropertyDescriptor', function () {
                            return function getOwnPropertyDescriptor(it, key) {
                                return $getOwnPropertyDescriptor(toIObject(it), key);
                            };
                        });


                        /***/
                    }),

                    /***/ "c267":
                    /***/ (function (module, __webpack_exports__, __webpack_require__) {

                        "use strict";
                        __webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: /Users/l-blanes/.config/yarn/global/node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
// This file is imported into lib/wc client bundles.

                        if (typeof window !== 'undefined') {
                            if (true) {
                                __webpack_require__("4c0f")
                            }

                            var setPublicPath_i;
                            if ((setPublicPath_i = window.document.currentScript) && (setPublicPath_i = setPublicPath_i.src.match(/(.+\/)[^/]+\.js(\?.*)?$/))) {
                                __webpack_require__.p = setPublicPath_i[1] // eslint-disable-line
                            }
                        }

// Indicate to webpack that this file can be concatenated
                        /* harmony default export */
                        var setPublicPath = (null);

// EXTERNAL MODULE: ./src/css/index.scss
                        var css = __webpack_require__("e9cc");

// EXTERNAL MODULE: /Users/l-blanes/.config/yarn/global/node_modules/core-js/modules/es6.regexp.replace.js
                        var es6_regexp_replace = __webpack_require__("5a82");

// EXTERNAL MODULE: /Users/l-blanes/.config/yarn/global/node_modules/core-js/modules/es6.string.trim.js
                        var es6_string_trim = __webpack_require__("cf55");

// EXTERNAL MODULE: /Users/l-blanes/.config/yarn/global/node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js
                        var iterator = __webpack_require__("0a85");
                        var iterator_default = /*#__PURE__*/__webpack_require__.n(iterator);

// EXTERNAL MODULE: /Users/l-blanes/.config/yarn/global/node_modules/@babel/runtime-corejs2/core-js/symbol.js
                        var symbol = __webpack_require__("038b");
                        var symbol_default = /*#__PURE__*/__webpack_require__.n(symbol);

// CONCATENATED MODULE: /Users/l-blanes/.config/yarn/global/node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js


                        function typeof_typeof2(obj) {
                            if (typeof symbol_default.a === "function" && typeof iterator_default.a === "symbol") {
                                typeof_typeof2 = function _typeof2(obj) {
                                    return typeof obj;
                                };
                            } else {
                                typeof_typeof2 = function _typeof2(obj) {
                                    return obj && typeof symbol_default.a === "function" && obj.constructor === symbol_default.a && obj !== symbol_default.a.prototype ? "symbol" : typeof obj;
                                };
                            }
                            return typeof_typeof2(obj);
                        }

                        function typeof_typeof(obj) {
                            if (typeof symbol_default.a === "function" && typeof_typeof2(iterator_default.a) === "symbol") {
                                typeof_typeof = function _typeof(obj) {
                                    return typeof_typeof2(obj);
                                };
                            } else {
                                typeof_typeof = function _typeof(obj) {
                                    return obj && typeof symbol_default.a === "function" && obj.constructor === symbol_default.a && obj !== symbol_default.a.prototype ? "symbol" : typeof_typeof2(obj);
                                };
                            }

                            return typeof_typeof(obj);
                        }

// EXTERNAL MODULE: /Users/l-blanes/.config/yarn/global/node_modules/core-js/modules/es6.array.index-of.js
                        var es6_array_index_of = __webpack_require__("df15");

// EXTERNAL MODULE: /Users/l-blanes/.config/yarn/global/node_modules/core-js/modules/es6.regexp.split.js
                        var es6_regexp_split = __webpack_require__("0aad");

// EXTERNAL MODULE: /Users/l-blanes/.config/yarn/global/node_modules/core-js/modules/es6.array.iterator.js
                        var es6_array_iterator = __webpack_require__("8a52");

// EXTERNAL MODULE: /Users/l-blanes/.config/yarn/global/node_modules/core-js/modules/es6.object.keys.js
                        var es6_object_keys = __webpack_require__("ca85");

// EXTERNAL MODULE: /Users/l-blanes/.config/yarn/global/node_modules/core-js/modules/web.dom.iterable.js
                        var web_dom_iterable = __webpack_require__("4821");

// EXTERNAL MODULE: /Users/l-blanes/.config/yarn/global/node_modules/core-js/modules/es6.array.for-each.js
                        var es6_array_for_each = __webpack_require__("0a04");

// EXTERNAL MODULE: /Users/l-blanes/.config/yarn/global/node_modules/core-js/modules/es6.date.now.js
                        var es6_date_now = __webpack_require__("5532");

// EXTERNAL MODULE: /Users/l-blanes/.config/yarn/global/node_modules/@babel/runtime-corejs2/core-js/array/is-array.js
                        var is_array = __webpack_require__("af30");
                        var is_array_default = /*#__PURE__*/__webpack_require__.n(is_array);

// CONCATENATED MODULE: /Users/l-blanes/.config/yarn/global/node_modules/@babel/runtime-corejs2/helpers/esm/arrayWithHoles.js

                        function _arrayWithHoles(arr) {
                            if (is_array_default()(arr)) return arr;
                        }

// EXTERNAL MODULE: /Users/l-blanes/.config/yarn/global/node_modules/@babel/runtime-corejs2/core-js/get-iterator.js
                        var get_iterator = __webpack_require__("d42b");
                        var get_iterator_default = /*#__PURE__*/__webpack_require__.n(get_iterator);

// CONCATENATED MODULE: /Users/l-blanes/.config/yarn/global/node_modules/@babel/runtime-corejs2/helpers/esm/iterableToArrayLimit.js

                        function _iterableToArrayLimit(arr, i) {
                            var _arr = [];
                            var _n = true;
                            var _d = false;
                            var _e = undefined;

                            try {
                                for (var _i = get_iterator_default()(arr), _s; !(_n = (_s = _i.next()).done); _n = true) {
                                    _arr.push(_s.value);

                                    if (i && _arr.length === i) break;
                                }
                            } catch (err) {
                                _d = true;
                                _e = err;
                            } finally {
                                try {
                                    if (!_n && _i["return"] != null) _i["return"]();
                                } finally {
                                    if (_d) throw _e;
                                }
                            }

                            return _arr;
                        }

// CONCATENATED MODULE: /Users/l-blanes/.config/yarn/global/node_modules/@babel/runtime-corejs2/helpers/esm/nonIterableRest.js
                        function _nonIterableRest() {
                            throw new TypeError("Invalid attempt to destructure non-iterable instance");
                        }

// CONCATENATED MODULE: /Users/l-blanes/.config/yarn/global/node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js


                        function _slicedToArray(arr, i) {
                            return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();
                        }

// EXTERNAL MODULE: /Users/l-blanes/.config/yarn/global/node_modules/core-js/modules/es6.array.map.js
                        var es6_array_map = __webpack_require__("d1ec");

// EXTERNAL MODULE: /Users/l-blanes/.config/yarn/global/node_modules/core-js/modules/es6.function.bind.js
                        var es6_function_bind = __webpack_require__("6020");

// EXTERNAL MODULE: /Users/l-blanes/.config/yarn/global/node_modules/core-js/modules/es6.array.is-array.js
                        var es6_array_is_array = __webpack_require__("ce3c");

// EXTERNAL MODULE: /Users/l-blanes/.config/yarn/global/node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js
                        var get_own_property_descriptor = __webpack_require__("2624");
                        var get_own_property_descriptor_default = /*#__PURE__*/__webpack_require__.n(get_own_property_descriptor);

// EXTERNAL MODULE: /Users/l-blanes/.config/yarn/global/node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js
                        var get_own_property_symbols = __webpack_require__("a8b1");
                        var get_own_property_symbols_default = /*#__PURE__*/__webpack_require__.n(get_own_property_symbols);

// EXTERNAL MODULE: /Users/l-blanes/.config/yarn/global/node_modules/@babel/runtime-corejs2/core-js/object/keys.js
                        var keys = __webpack_require__("fbac");
                        var keys_default = /*#__PURE__*/__webpack_require__.n(keys);

// EXTERNAL MODULE: /Users/l-blanes/.config/yarn/global/node_modules/@babel/runtime-corejs2/core-js/object/define-property.js
                        var define_property = __webpack_require__("893c");
                        var define_property_default = /*#__PURE__*/__webpack_require__.n(define_property);

// CONCATENATED MODULE: /Users/l-blanes/.config/yarn/global/node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js

                        function _defineProperty(obj, key, value) {
                            if (key in obj) {
                                define_property_default()(obj, key, {
                                    value: value,
                                    enumerable: true,
                                    configurable: true,
                                    writable: true
                                });
                            } else {
                                obj[key] = value;
                            }

                            return obj;
                        }

// CONCATENATED MODULE: /Users/l-blanes/.config/yarn/global/node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js


                        function _objectSpread(target) {
                            for (var i = 1; i < arguments.length; i++) {
                                var source = arguments[i] != null ? arguments[i] : {};

                                var ownKeys = keys_default()(source);

                                if (typeof get_own_property_symbols_default.a === 'function') {
                                    ownKeys = ownKeys.concat(get_own_property_symbols_default()(source).filter(function (sym) {
                                        return get_own_property_descriptor_default()(source, sym).enumerable;
                                    }));
                                }

                                ownKeys.forEach(function (key) {
                                    _defineProperty(target, key, source[key]);
                                });
                            }

                            return target;
                        }

// CONCATENATED MODULE: /Users/l-blanes/.config/yarn/global/node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js
                        function _classCallCheck(instance, Constructor) {
                            if (!(instance instanceof Constructor)) {
                                throw new TypeError("Cannot call a class as a function");
                            }
                        }

// CONCATENATED MODULE: /Users/l-blanes/.config/yarn/global/node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js


                        function _defineProperties(target, props) {
                            for (var i = 0; i < props.length; i++) {
                                var descriptor = props[i];
                                descriptor.enumerable = descriptor.enumerable || false;
                                descriptor.configurable = true;
                                if ("value" in descriptor) descriptor.writable = true;

                                define_property_default()(target, descriptor.key, descriptor);
                            }
                        }

                        function _createClass(Constructor, protoProps, staticProps) {
                            if (protoProps) _defineProperties(Constructor.prototype, protoProps);
                            if (staticProps) _defineProperties(Constructor, staticProps);
                            return Constructor;
                        }

// EXTERNAL MODULE: ./node_modules/popper.js/dist/esm/popper.js
                        var popper = __webpack_require__("f0bd");

// CONCATENATED MODULE: ./src/directives/tooltip.js


                        var CSS = {
                            HIDDEN: 'vue-tooltip-hidden',
                            VISIBLE: 'vue-tooltip-visible'
                        };
                        var BASE_CLASS = "h-tooltip  ".concat(CSS.HIDDEN);
                        var PLACEMENT = ['top', 'left', 'right', 'bottom', 'auto'];
                        var SUB_PLACEMENT = ['start', 'end'];
                        var EVENTS = {
                            ADD: 1,
                            REMOVE: 2
                        };
                        var DEFAULT_OPTIONS = {
                            container: false,
                            delay: 200,
                            instance: null,
                            // the popper.js instance
                            fixIosSafari: false,
                            eventsEnabled: false,
                            html: false,
                            modifiers: {
                                arrow: {
                                    element: '.tooltip-arrow'
                                }
                            },
                            placement: '',
                            placementPostfix: null,
                            // start | end
                            removeOnDestroy: true,
                            title: '',
                            class: '',
                            // ex: 'tooltip-custom tooltip-other-custom'
                            triggers: ['hover', 'focus'],
                            offset: 5
                        };

                        var includes = function includes(stack, needle) {
                            return stack.indexOf(needle) > -1;
                        };

                        var tooltip_Tooltip =
                            /*#__PURE__*/
                            function () {
                                function Tooltip(el) {
                                    var _this = this;

                                    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

                                    _classCallCheck(this, Tooltip);

                                    // Tooltip._defaults = DEFAULT_OPTIONS;
                                    this._options = _objectSpread({}, Tooltip._defaults, {
                                        onCreate: function onCreate(data) {
                                            _this.content(_this.tooltip.options.title); // this._$tt.update();

                                        },
                                        onUpdate: function onUpdate(data) {
                                            _this.content(_this.tooltip.options.title); // this._$tt.update();

                                        }
                                    }, Tooltip.filterOptions(options));
                                    this._$el = el;
                                    this._$tpl = this._createTooltipElement(this.options);
                                    this._$tt = new popper["a" /* default */](el, this._$tpl, this._options);
                                    this.setupPopper();
                                }

                                _createClass(Tooltip, [{
                                    key: "setupPopper",
                                    value: function setupPopper() {
                                        // this._$el.insertAdjacentElement('afterend', this._$tpl);
                                        this.disabled = false;
                                        this._visible = false;
                                        this._clearDelay = null;

                                        this._$tt.disableEventListeners();

                                        this._setEvents();
                                    }
                                }, {
                                    key: "destroy",
                                    value: function destroy() {
                                        this._cleanEvents();

                                        if (this._$tpl && this._$tpl.parentNode) {
                                            this._$tpl.parentNode.removeChild(this._$tpl);
                                        }
                                    }
                                }, {
                                    key: "show",
                                    value: function show() {
                                        this.toggle(true);
                                    }
                                }, {
                                    key: "hide",
                                    value: function hide() {
                                        this.toggle(false);
                                    }
                                }, {
                                    key: "toggle",
                                    value: function toggle(visible) {
                                        var _this2 = this;

                                        var autoHide = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
                                        var delay = this._options.delay;

                                        if (this.disabled === true) {
                                            visible = false;
                                            delay = 0;
                                        }

                                        if (typeof visible !== 'boolean') {
                                            visible = !this._visible;
                                        }

                                        if (visible === true) {
                                            delay = 0;
                                        }

                                        clearTimeout(this._clearDelay);

                                        if (autoHide === true) {
                                            this._clearDelay = setTimeout(function () {
                                                _this2.visible = visible;

                                                if (_this2.visible === true && _this2.disabled !== true) {
                                                    // add tooltip node
                                                    // this._$el.insertAdjacentElement('afterend', this._$tpl);
                                                    document.querySelector('body').appendChild(_this2._$tpl); // Need the timeout to be sure that the element is inserted in the DOM

                                                    setTimeout(function () {
                                                        // enable eventListeners
                                                        _this2._$tt.enableEventListeners(); // only update if the tooltip is visible


                                                        _this2._$tt.scheduleUpdate(); // switch CSS


                                                        _this2._$tpl.classList.replace(CSS.HIDDEN, CSS.VISIBLE);
                                                    }, 60);
                                                } else {
                                                    _this2._$tpl.classList.replace(CSS.VISIBLE, CSS.HIDDEN); // remove tooltip node


                                                    if (_this2._$tpl && _this2._$tpl.parentNode) {
                                                        _this2._$tpl.parentNode.removeChild(_this2._$tpl);
                                                    }

                                                    _this2._$tt.disableEventListeners();
                                                }
                                            }, delay);
                                        }
                                    }
                                }, {
                                    key: "_createTooltipElement",
                                    value: function _createTooltipElement(options) {
                                        // wrapper
                                        var $popper = document.createElement('div');
                                        $popper.setAttribute('id', "tooltip-".concat(randomId()));
                                        $popper.setAttribute('class', "".concat(BASE_CLASS, " ").concat(this._options.class)); // make arrow

                                        var $arrow = document.createElement('div');
                                        $arrow.setAttribute('class', 'tooltip-arrow');
                                        $arrow.setAttribute('x-arrow', '');
                                        $popper.appendChild($arrow); // make content container

                                        var $content = document.createElement('div');
                                        $content.setAttribute('class', 'tooltip-content');
                                        $popper.appendChild($content);
                                        return $popper;
                                    }
                                }, {
                                    key: "_events",
                                    value: function _events() {
                                        var _this3 = this;

                                        var type = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : EVENTS.ADD;
                                        var evtType = type === EVENTS.ADD ? 'addEventListener' : 'removeEventListener';

                                        if (!Array.isArray(this.options.triggers)) {
                                            console.error('trigger should be an array', this.options.triggers); // eslint-disable-line

                                            return;
                                        }

                                        var lis = function lis() {
                                            var _this3$_$el;

                                            return (_this3$_$el = _this3._$el)[evtType].apply(_this3$_$el, arguments);
                                        };

                                        if (includes(this.options.triggers, 'manual')) {
                                            lis('click', this._onToggle.bind(this), false);
                                        } else {
                                            // For the strange iOS/safari behaviour, we remove any 'hover' and replace it by a 'click' event
                                            if (this.options.fixIosSafari && Tooltip.isIosSafari() && includes(this.options.triggers, 'hover')) {
                                                var pos = this.options.triggers.indexOf('hover');
                                                var click = includes(this.options.triggers, 'click');
                                                this._options.triggers[pos] = click !== -1 ? 'click' : null;
                                            }

                                            this.options.triggers.map(function (evt) {
                                                switch (evt) {
                                                    case 'click':
                                                        lis('click', function (e) {
                                                            _this3._onToggle(e);
                                                        }, false); // document[evtType]('click', this._onDeactivate.bind(this), false);

                                                        break;

                                                    case 'hover':
                                                        lis('mouseenter', _this3._onActivate.bind(_this3), false);
                                                        lis('mouseleave', _this3._onDeactivate.bind(_this3), false);
                                                        break;

                                                    case 'focus':
                                                        lis('focus', _this3._onActivate.bind(_this3), false);
                                                        lis('blur', _this3._onDeactivate.bind(_this3), true);
                                                        break;
                                                }
                                            });

                                            if (includes(this.options.triggers, 'hover') || includes(this.options.triggers, 'focus')) {
                                                this._$tpl[evtType]('mouseenter', this._onMouseOverTooltip.bind(this), false);

                                                this._$tpl[evtType]('mouseleave', this._onMouseOutTooltip.bind(this), false);
                                            }
                                        }
                                    }
                                }, {
                                    key: "_setEvents",
                                    value: function _setEvents() {
                                        this._events();
                                    }
                                }, {
                                    key: "_cleanEvents",
                                    value: function _cleanEvents() {
                                        this._events(EVENTS.REMOVE);
                                    }
                                }, {
                                    key: "_onActivate",
                                    value: function _onActivate(e) {
                                        this.show();
                                    }
                                }, {
                                    key: "_onDeactivate",
                                    value: function _onDeactivate(e) {
                                        this.hide();
                                    }
                                }, {
                                    key: "_onToggle",
                                    value: function _onToggle(e) {
                                        e.stopPropagation();
                                        e.preventDefault();
                                        this.toggle();
                                    }
                                }, {
                                    key: "_onMouseOverTooltip",
                                    value: function _onMouseOverTooltip(e) {
                                        this.toggle(true, false);
                                    }
                                }, {
                                    key: "_onMouseOutTooltip",
                                    value: function _onMouseOutTooltip(e) {
                                        this.toggle(false);
                                    }
                                }, {
                                    key: "content",
                                    value: function content(_content) {
                                        var wrapper = this.tooltip.popper.querySelector('.tooltip-content');

                                        if (typeof _content === 'string') {
                                            this.tooltip.options.title = _content;
                                            wrapper.textContent = _content;
                                        } else if (isElement(_content)) {
                                            if (_content !== wrapper.children[0]) {
                                                wrapper.innerHTML = ''; // this.tooltip.htmlContent = content.cloneNode(true);

                                                this.tooltip.htmlContent = _content;
                                                wrapper.appendChild(this.tooltip.htmlContent);
                                            }
                                        } else {
                                            console.error('unsupported content type', _content); // eslint-disable-line
                                        }
                                    }
                                }, {
                                    key: "options",
                                    get: function get() {
                                        return _objectSpread({}, this._options);
                                    }
                                }, {
                                    key: "tooltip",
                                    get: function get() {
                                        return this._$tt;
                                    }
                                }, {
                                    key: "visible",
                                    get: function get() {
                                        return this._visible;
                                    },
                                    set: function set(val) {
                                        if (typeof val === 'boolean') {
                                            this._visible = val;
                                        }
                                    }
                                }, {
                                    key: "disabled",
                                    get: function get() {
                                        return this._disabled;
                                    },
                                    set: function set(val) {
                                        if (typeof val === 'boolean') {
                                            this._disabled = val;
                                        }
                                    }
                                }, {
                                    key: "class",
                                    set: function set(val) {
                                        if (typeof val === 'string') {
                                            var classList = this._$tpl.classList.value.replace(this.options.class, val);

                                            this._options.class = classList;

                                            this._$tpl.setAttribute('class', classList);
                                        }
                                    }
                                }], [{
                                    key: "filterOptions",
                                    value: function filterOptions(options) {
                                        var opt = _objectSpread({}, options);

                                        opt.modifiers = {};
                                        var head = null;
                                        var tail = null;

                                        if (opt.placement.indexOf('-') > -1) {
                                            var _opt$placement$split = opt.placement.split('-');

                                            var _opt$placement$split2 = _slicedToArray(_opt$placement$split, 2);

                                            head = _opt$placement$split2[0];
                                            tail = _opt$placement$split2[1];
                                            opt.placement = includes(PLACEMENT, head) && includes(SUB_PLACEMENT, tail) ? opt.placement : Tooltip._defaults.placement;
                                        } else {
                                            opt.placement = includes(PLACEMENT, opt.placement) ? opt.placement : Tooltip._defaults.placement;
                                        }

                                        opt.modifiers.offset = {
                                            fn: Tooltip._setOffset
                                        };
                                        return opt;
                                    }
                                }, {
                                    key: "_setOffset",
                                    value: function _setOffset(data, opts) {
                                        var offset = data.instance.options.offset;

                                        if (window.isNaN(offset) || offset < 0) {
                                            offset = Tooltip._defaults.offset;
                                        }

                                        if (data.placement.indexOf('top') !== -1) {
                                            data.offsets.popper.top -= offset;
                                        } else if (data.placement.indexOf('right') !== -1) {
                                            data.offsets.popper.left += offset;
                                        } else if (data.placement.indexOf('bottom') !== -1) {
                                            data.offsets.popper.top += offset;
                                        } else if (data.placement.indexOf('left') !== -1) {
                                            data.offsets.popper.left -= offset;
                                        }

                                        return data;
                                    }
                                }, {
                                    key: "isIosSafari",
                                    value: function isIosSafari() {
                                        return includes(navigator.userAgent.toLowerCase(), 'mobile') && includes(navigator.userAgent.toLowerCase(), 'safari') && (navigator.platform.toLowerCase() === 'iphone' || navigator.platform.toLowerCase() === 'ipad');
                                    }
                                }, {
                                    key: "defaults",
                                    value: function defaults(data) {
                                        // if (data.placement) {
                                        //     data.originalPlacement = data.placement;
                                        // }
                                        Tooltip._defaults = _objectSpread({}, Tooltip._defaults, data);
                                    }
                                }]);

                                return Tooltip;
                            }();


                        tooltip_Tooltip._defaults = _objectSpread({}, DEFAULT_OPTIONS);

                        function randomId() {
                            return "".concat(Date.now(), "-").concat(Math.round(Math.random() * 100000000));
                        }

                        /**
                         * Check if the variable is an html element
                         * @param {*} value
                         * @return Boolean
                         */


                        function isElement(value) {
                            return value instanceof window.Element;
                        }

// CONCATENATED MODULE: ./src/directives/tooltip-directive.js


                        /**
                         * @author: laurent blanes <laurent.blanes@gmail.com>
                         * @tutorial: https://hekigan.github.io/vue-directive-tooltip/
                         */

                        var tooltip_directive_BASE_CLASS = 'vue-tooltip';
                        var POSITIONS = ['auto', 'top', 'bottom', 'left', 'right'];
                        var SUB_POSITIONS = ['start', 'end'];
                        /**
                         * usage:
                         *
                         * // basic usage:
                         * <div v-tooltip="'my content'">
                         * or
                         * <div v-tooltip="{content: 'my content'}">
                         *
                         * // change position of tooltip
                         * // options: auto (default) | bottom | top | left | right
                         *
                         * // change sub-position of tooltip
                         * // options: start | end
                         *
                         * <div v-tooltip.top="{content: 'my content'}">
                         *
                         * // add custom class
                         * <div v-tooltip="{class: 'custom-class', content: 'my content'}">
                         *
                         * // toggle visibility
                         * <div v-tooltip="{visible: false, content: 'my content'}">
                         */

                        /* harmony default export */
                        var tooltip_directive = ({
                            name: 'tooltip',
                            config: {},
                            install: function install(Vue, installOptions) {
                                Vue.directive('tooltip', {
                                    bind: function bind(el, binding, vnode) {
                                        if (installOptions) {
                                            tooltip_Tooltip.defaults(installOptions);
                                        }
                                    },
                                    inserted: function inserted(el, binding, vnode, oldVnode) {
                                        if (installOptions) {
                                            tooltip_Tooltip.defaults(installOptions);
                                        }

                                        var options = filterBindings(binding, vnode);
                                        el.tooltip = new tooltip_Tooltip(el, options);

                                        if (binding.modifiers.notrigger && binding.value.visible === true) {
                                            el.tooltip.show();
                                        }

                                        if (binding.value && binding.value.visible === false) {
                                            el.tooltip.disabled = true;
                                        }
                                    },
                                    componentUpdated: function componentUpdated(el, binding, vnode, oldVnode) {
                                        if (hasUpdated(binding.value, binding.oldValue)) {
                                            update(el, binding, vnode, oldVnode);
                                        }
                                    },
                                    unbind: function unbind(el, binding, vnode, oldVnode) {
                                        el.tooltip.destroy();
                                    }
                                });
                            }
                        });

                        /**
                         *
                         * @param {*} vnode component's properties
                         * @param {*} oldvnode component's previous properties
                         * @return boolean
                         */

                        function hasUpdated(value, oldValue) {
                            var updated = false;

                            if (typeof value === 'string' && value !== oldValue) {
                                updated = true;
                            } else if (isObject(value)) {
                                Object.keys(value).forEach(function (prop) {
                                    if (value[prop] !== oldValue[prop]) {
                                        updated = true;
                                    }
                                });
                            }

                            return updated;
                        }

                        /**
                         * Sanitize data
                         * @param {*} binding
                         * @param {*} vnode
                         * @return {*} filtered data object
                         */


                        function filterBindings(binding, vnode) {
                            var delay = !binding.value || isNaN(binding.value.delay) ? tooltip_Tooltip._defaults.delay : binding.value.delay;

                            if (binding.value.ref) {
                                if (vnode.context.$refs[binding.value.ref]) {
                                    binding.value.html = vnode.context.$refs[binding.value.ref];
                                } else {
                                    console.error("[Tooltip] no REF element [".concat(binding.value.ref, "]")); // eslint-disable-line
                                }
                            }

                            return {
                                class: getClass(binding),
                                id: binding.value ? binding.value.id : null,
                                html: binding.value ? binding.value.html : null,
                                placement: getPlacement(binding),
                                title: getContent(binding),
                                triggers: getTriggers(binding),
                                fixIosSafari: binding.modifiers.ios || false,
                                offset: binding.value && binding.value.offset ? binding.value.offset : tooltip_Tooltip._defaults.offset,
                                delay: delay
                            };
                        }

                        /**
                         * Get placement from modifiers
                         * @param {*} binding
                         */


                        function getPlacement(_ref) {
                            var modifiers = _ref.modifiers,
                                value = _ref.value;
                            var MODS = Object.keys(modifiers);

                            if (MODS.length === 0 && isObject(value) && typeof value.placement === 'string') {
                                MODS = value.placement.split('.');
                            }

                            var head = 'bottom';
                            var tail = null;

                            for (var i = 0; i < MODS.length; i++) {
                                var pos = MODS[i];

                                if (POSITIONS.indexOf(pos) > -1) {
                                    head = pos;
                                }

                                if (SUB_POSITIONS.indexOf(pos) > -1) {
                                    tail = pos;
                                }
                            } // console.log((head && tail) ? `${head}-${tail}` : head);
                            // return 'auto';


                            return head && tail ? "".concat(head, "-").concat(tail) : head;
                        }

                        /**
                         * Get trigger value from modifiers
                         * @param {*} binding
                         * @return String
                         */


                        function getTriggers(_ref2) {
                            var modifiers = _ref2.modifiers;
                            var trigger = [];

                            if (modifiers.notrigger) {
                                return trigger;
                            } else if (modifiers.manual) {
                                trigger.push('manual');
                            } else {
                                if (modifiers.click) {
                                    trigger.push('click');
                                }

                                if (modifiers.hover) {
                                    trigger.push('hover');
                                }

                                if (modifiers.focus) {
                                    trigger.push('focus');
                                }

                                if (trigger.length === 0) {
                                    trigger.push('hover', 'focus');
                                }
                            }

                            return trigger;
                        }

                        /**
                         * Check if the variable is an object
                         * @param {*} value
                         * @return Boolean
                         */


                        function isObject(value) {
                            return typeof_typeof(value) === 'object';
                        }

                        /**
                         * Check if the variable is an html element
                         * @param {*} value
                         * @return Boolean
                         */


                        function tooltip_directive_isElement(value) {
                            return value instanceof window.Element;
                        }

                        /**
                         * Get the css class
                         * @param {*} binding
                         * @return HTMLElement | String
                         */


                        function getClass(_ref3) {
                            var value = _ref3.value;

                            if (value === null) {
                                return tooltip_directive_BASE_CLASS;
                            } else if (isObject(value) && typeof value.class === 'string') {
                                return "".concat(tooltip_directive_BASE_CLASS, " ").concat(value.class);
                            } else if (tooltip_Tooltip._defaults.class) {
                                return "".concat(tooltip_directive_BASE_CLASS, " ").concat(tooltip_Tooltip._defaults.class);
                            } else {
                                return tooltip_directive_BASE_CLASS;
                            }
                        }

                        /**
                         * Get the content
                         * @param {*} binding
                         * @return HTMLElement | String
                         */


                        function getContent(_ref4, vnode) {
                            var value = _ref4.value;

                            if (value !== null && isObject(value)) {
                                if (value.content !== undefined) {
                                    return "".concat(value.content);
                                } else if (value.id && document.getElementById(value.id)) {
                                    return document.getElementById(value.id);
                                } else if (value.html && document.getElementById(value.html)) {
                                    return document.getElementById(value.html);
                                } else if (tooltip_directive_isElement(value.html)) {
                                    return value.html;
                                } else if (value.ref && vnode) {
                                    return vnode.context.$refs[value.ref] || '';
                                } else {
                                    return '';
                                }
                            } else {
                                return "".concat(value);
                            }
                        }

                        /**
                         * Action on element update
                         * @param {*} el Vue element
                         * @param {*} binding
                         */


                        function update(el, binding, vnode, oldVnode) {
                            if (typeof binding.value === 'string') {
                                el.tooltip.content(binding.value);
                            } else {
                                if (binding.value && binding.value.class && binding.value.class.trim() !== el.tooltip.options.class.replace(tooltip_directive_BASE_CLASS, '').trim()) {
                                    el.tooltip.class = "".concat(tooltip_directive_BASE_CLASS, " ").concat(binding.value.class.trim());
                                }

                                el.tooltip.content(getContent(binding, vnode));

                                if (!binding.modifiers.notrigger && binding.value && typeof binding.value.visible === 'boolean') {
                                    el.tooltip.disabled = !binding.value.visible;
                                    return;
                                } else if (binding.modifiers.notrigger) {
                                    el.tooltip.disabled = false;
                                }

                                var dir = vnode.data.directives[0];

                                if (dir.oldValue.visible !== dir.value.visible) {
                                    if (!el.tooltip.disabled) {
                                        el.tooltip.toggle(dir.value.visible);
                                    }
                                }
                            }
                        }

// CONCATENATED MODULE: ./src/index.js


                        /* harmony default export */
                        var src = (tooltip_directive);
// CONCATENATED MODULE: /Users/l-blanes/.config/yarn/global/node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


                        /* harmony default export */
                        var entry_lib = __webpack_exports__["default"] = (src);


                        /***/
                    }),

                    /***/ "c298":
                    /***/ (function (module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
                        var anObject = __webpack_require__("d1f8");
                        var dPs = __webpack_require__("1331");
                        var enumBugKeys = __webpack_require__("7321");
                        var IE_PROTO = __webpack_require__("24b2")('IE_PROTO');
                        var Empty = function () { /* empty */
                        };
                        var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
                        var createDict = function () {
                            // Thrash, waste and sodomy: IE GC bug
                            var iframe = __webpack_require__("f44d")('iframe');
                            var i = enumBugKeys.length;
                            var lt = '<';
                            var gt = '>';
                            var iframeDocument;
                            iframe.style.display = 'none';
                            __webpack_require__("cf14").appendChild(iframe);
                            iframe.src = 'javascript:'; // eslint-disable-line no-script-url
                            // createDict = iframe.contentWindow.Object;
                            // html.removeChild(iframe);
                            iframeDocument = iframe.contentWindow.document;
                            iframeDocument.open();
                            iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
                            iframeDocument.close();
                            createDict = iframeDocument.F;
                            while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
                            return createDict();
                        };

                        module.exports = Object.create || function create(O, Properties) {
                            var result;
                            if (O !== null) {
                                Empty[PROTOTYPE] = anObject(O);
                                result = new Empty();
                                Empty[PROTOTYPE] = null;
                                // add "__proto__" for Object.getPrototypeOf polyfill
                                result[IE_PROTO] = O;
                            } else result = createDict();
                            return Properties === undefined ? result : dPs(result, Properties);
                        };


                        /***/
                    }),

                    /***/ "c49f":
                    /***/ (function (module, exports, __webpack_require__) {

                        "use strict";

                        var regexpExec = __webpack_require__("2bfe");
                        __webpack_require__("62cf")({
                            target: 'RegExp',
                            proto: true,
                            forced: regexpExec !== /./.exec
                        }, {
                            exec: regexpExec
                        });


                        /***/
                    }),

                    /***/ "c5be":
                    /***/ (function (module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
                        var toIObject = __webpack_require__("c5f8");
                        var toLength = __webpack_require__("33ca");
                        var toAbsoluteIndex = __webpack_require__("9be5");
                        module.exports = function (IS_INCLUDES) {
                            return function ($this, el, fromIndex) {
                                var O = toIObject($this);
                                var length = toLength(O.length);
                                var index = toAbsoluteIndex(fromIndex, length);
                                var value;
                                // Array#includes uses SameValueZero equality algorithm
                                // eslint-disable-next-line no-self-compare
                                if (IS_INCLUDES && el != el) while (length > index) {
                                    value = O[index++];
                                    // eslint-disable-next-line no-self-compare
                                    if (value != value) return true;
                                    // Array#indexOf ignores holes, Array#includes - not
                                } else for (; length > index; index++) if (IS_INCLUDES || index in O) {
                                    if (O[index] === el) return IS_INCLUDES || index || 0;
                                }
                                return !IS_INCLUDES && -1;
                            };
                        };


                        /***/
                    }),

                    /***/ "c5f8":
                    /***/ (function (module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
                        var IObject = __webpack_require__("4baa");
                        var defined = __webpack_require__("0acd");
                        module.exports = function (it) {
                            return IObject(defined(it));
                        };


                        /***/
                    }),

                    /***/ "c616":
                    /***/ (function (module, exports) {

                        module.exports = false;


                        /***/
                    }),

                    /***/ "c76b":
                    /***/ (function (module, exports, __webpack_require__) {

                        module.exports = __webpack_require__("e0ed");


                        /***/
                    }),

                    /***/ "ca85":
                    /***/ (function (module, exports, __webpack_require__) {

// 19.1.2.14 Object.keys(O)
                        var toObject = __webpack_require__("4051");
                        var $keys = __webpack_require__("2369");

                        __webpack_require__("3f25")('keys', function () {
                            return function keys(it) {
                                return $keys(toObject(it));
                            };
                        });


                        /***/
                    }),

                    /***/ "cad2":
                    /***/ (function (module, exports) {

                        module.exports = function () { /* empty */
                        };


                        /***/
                    }),

                    /***/ "ce3c":
                    /***/ (function (module, exports, __webpack_require__) {

// 22.1.2.2 / 15.4.3.2 Array.isArray(arg)
                        var $export = __webpack_require__("62cf");

                        $export($export.S, 'Array', {isArray: __webpack_require__("2de7")});


                        /***/
                    }),

                    /***/ "ce64":
                    /***/ (function (module, exports, __webpack_require__) {

                        "use strict";

                        var at = __webpack_require__("b00a")(true);

                        // `AdvanceStringIndex` abstract operation
// https://tc39.github.io/ecma262/#sec-advancestringindex
                        module.exports = function (S, index, unicode) {
                            return index + (unicode ? at(S, index).length : 1);
                        };


                        /***/
                    }),

                    /***/ "cf14":
                    /***/ (function (module, exports, __webpack_require__) {

                        var document = __webpack_require__("898f").document;
                        module.exports = document && document.documentElement;


                        /***/
                    }),

                    /***/ "cf55":
                    /***/ (function (module, exports, __webpack_require__) {

                        "use strict";

// 21.1.3.25 String.prototype.trim()
                        __webpack_require__("d9df")('trim', function ($trim) {
                            return function trim() {
                                return $trim(this, 3);
                            };
                        });


                        /***/
                    }),

                    /***/ "d0b6":
                    /***/ (function (module, exports, __webpack_require__) {

                        "use strict";

                        var create = __webpack_require__("c298");
                        var descriptor = __webpack_require__("7174");
                        var setToStringTag = __webpack_require__("bc59");
                        var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
                        __webpack_require__("f650")(IteratorPrototype, __webpack_require__("7d30")('iterator'), function () {
                            return this;
                        });

                        module.exports = function (Constructor, NAME, next) {
                            Constructor.prototype = create(IteratorPrototype, {next: descriptor(1, next)});
                            setToStringTag(Constructor, NAME + ' Iterator');
                        };


                        /***/
                    }),

                    /***/ "d0bc":
                    /***/ (function (module, exports, __webpack_require__) {

                        var shared = __webpack_require__("564f")('keys');
                        var uid = __webpack_require__("edac");
                        module.exports = function (key) {
                            return shared[key] || (shared[key] = uid(key));
                        };


                        /***/
                    }),

                    /***/ "d147":
                    /***/ (function (module, exports, __webpack_require__) {

// 19.1.2.14 Object.keys(O)
                        var toObject = __webpack_require__("872b");
                        var $keys = __webpack_require__("a828");

                        __webpack_require__("8371")('keys', function () {
                            return function keys(it) {
                                return $keys(toObject(it));
                            };
                        });


                        /***/
                    }),

                    /***/ "d1ec":
                    /***/ (function (module, exports, __webpack_require__) {

                        "use strict";

                        var $export = __webpack_require__("62cf");
                        var $map = __webpack_require__("f13c")(1);

                        $export($export.P + $export.F * !__webpack_require__("14f6")([].map, true), 'Array', {
                            // 22.1.3.15 / 15.4.4.19 Array.prototype.map(callbackfn [, thisArg])
                            map: function map(callbackfn /* , thisArg */) {
                                return $map(this, callbackfn, arguments[1]);
                            }
                        });


                        /***/
                    }),

                    /***/ "d1f8":
                    /***/ (function (module, exports, __webpack_require__) {

                        var isObject = __webpack_require__("df98");
                        module.exports = function (it) {
                            if (!isObject(it)) throw TypeError(it + ' is not an object!');
                            return it;
                        };


                        /***/
                    }),

                    /***/ "d210":
                    /***/ (function (module, exports, __webpack_require__) {

                        module.exports = !__webpack_require__("fa25") && !__webpack_require__("3f9f")(function () {
                            return Object.defineProperty(__webpack_require__("8cb6")('div'), 'a', {
                                get: function () {
                                    return 7;
                                }
                            }).a != 7;
                        });


                        /***/
                    }),

                    /***/ "d42b":
                    /***/ (function (module, exports, __webpack_require__) {

                        module.exports = __webpack_require__("7284");

                        /***/
                    }),

                    /***/ "d613":
                    /***/ (function (module, exports, __webpack_require__) {

                        "use strict";

                        var addToUnscopables = __webpack_require__("cad2");
                        var step = __webpack_require__("7c34");
                        var Iterators = __webpack_require__("de2e");
                        var toIObject = __webpack_require__("c5f8");

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
                        module.exports = __webpack_require__("8490")(Array, 'Array', function (iterated, kind) {
                            this._t = toIObject(iterated); // target
                            this._i = 0;                   // next index
                            this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
                        }, function () {
                            var O = this._t;
                            var kind = this._k;
                            var index = this._i++;
                            if (!O || index >= O.length) {
                                this._t = undefined;
                                return step(1);
                            }
                            if (kind == 'keys') return step(0, index);
                            if (kind == 'values') return step(0, O[index]);
                            return step(0, [index, O[index]]);
                        }, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
                        Iterators.Arguments = Iterators.Array;

                        addToUnscopables('keys');
                        addToUnscopables('values');
                        addToUnscopables('entries');


                        /***/
                    }),

                    /***/ "d9df":
                    /***/ (function (module, exports, __webpack_require__) {

                        var $export = __webpack_require__("62cf");
                        var defined = __webpack_require__("3e85");
                        var fails = __webpack_require__("910c");
                        var spaces = __webpack_require__("dd46");
                        var space = '[' + spaces + ']';
                        var non = '\u200b\u0085';
                        var ltrim = RegExp('^' + space + space + '*');
                        var rtrim = RegExp(space + space + '*$');

                        var exporter = function (KEY, exec, ALIAS) {
                            var exp = {};
                            var FORCE = fails(function () {
                                return !!spaces[KEY]() || non[KEY]() != non;
                            });
                            var fn = exp[KEY] = FORCE ? exec(trim) : spaces[KEY];
                            if (ALIAS) exp[ALIAS] = fn;
                            $export($export.P + $export.F * FORCE, 'String', exp);
                        };

// 1 -> String#trimLeft
// 2 -> String#trimRight
// 3 -> String#trim
                        var trim = exporter.trim = function (string, TYPE) {
                            string = String(defined(string));
                            if (TYPE & 1) string = string.replace(ltrim, '');
                            if (TYPE & 2) string = string.replace(rtrim, '');
                            return string;
                        };

                        module.exports = exporter;


                        /***/
                    }),

                    /***/ "d9e5":
                    /***/ (function (module, exports, __webpack_require__) {

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
                        var $keys = __webpack_require__("157a");
                        var hiddenKeys = __webpack_require__("7ffd").concat('length', 'prototype');

                        exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
                            return $keys(O, hiddenKeys);
                        };


                        /***/
                    }),

                    /***/ "da91":
                    /***/ (function (module, exports, __webpack_require__) {

                        "use strict";

                        var aFunction = __webpack_require__("f49a");
                        var isObject = __webpack_require__("df98");
                        var invoke = __webpack_require__("a634");
                        var arraySlice = [].slice;
                        var factories = {};

                        var construct = function (F, len, args) {
                            if (!(len in factories)) {
                                for (var n = [], i = 0; i < len; i++) n[i] = 'a[' + i + ']';
                                // eslint-disable-next-line no-new-func
                                factories[len] = Function('F,a', 'return new F(' + n.join(',') + ')');
                            }
                            return factories[len](F, args);
                        };

                        module.exports = Function.bind || function bind(that /* , ...args */) {
                            var fn = aFunction(this);
                            var partArgs = arraySlice.call(arguments, 1);
                            var bound = function (/* args... */) {
                                var args = partArgs.concat(arraySlice.call(arguments));
                                return this instanceof bound ? construct(fn, args.length, args) : invoke(fn, args, that);
                            };
                            if (isObject(fn.prototype)) bound.prototype = fn.prototype;
                            return bound;
                        };


                        /***/
                    }),

                    /***/ "dd29":
                    /***/ (function (module, exports, __webpack_require__) {

// optional / simple context binding
                        var aFunction = __webpack_require__("f49a");
                        module.exports = function (fn, that, length) {
                            aFunction(fn);
                            if (that === undefined) return fn;
                            switch (length) {
                                case 1:
                                    return function (a) {
                                        return fn.call(that, a);
                                    };
                                case 2:
                                    return function (a, b) {
                                        return fn.call(that, a, b);
                                    };
                                case 3:
                                    return function (a, b, c) {
                                        return fn.call(that, a, b, c);
                                    };
                            }
                            return function (/* ...args */) {
                                return fn.apply(that, arguments);
                            };
                        };


                        /***/
                    }),

                    /***/ "dd3b":
                    /***/ (function (module, exports, __webpack_require__) {

                        "use strict";


                        var classof = __webpack_require__("1f38");
                        var builtinExec = RegExp.prototype.exec;

                        // `RegExpExec` abstract operation
// https://tc39.github.io/ecma262/#sec-regexpexec
                        module.exports = function (R, S) {
                            var exec = R.exec;
                            if (typeof exec === 'function') {
                                var result = exec.call(R, S);
                                if (typeof result !== 'object') {
                                    throw new TypeError('RegExp exec method returned something other than an Object or null');
                                }
                                return result;
                            }
                            if (classof(R) !== 'RegExp') {
                                throw new TypeError('RegExp#exec called on incompatible receiver');
                            }
                            return builtinExec.call(R, S);
                        };


                        /***/
                    }),

                    /***/ "dd46":
                    /***/ (function (module, exports) {

                        module.exports = '\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003' +
                            '\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';


                        /***/
                    }),

                    /***/ "de2e":
                    /***/ (function (module, exports) {

                        module.exports = {};


                        /***/
                    }),

                    /***/ "df15":
                    /***/ (function (module, exports, __webpack_require__) {

                        "use strict";

                        var $export = __webpack_require__("62cf");
                        var $indexOf = __webpack_require__("0746")(false);
                        var $native = [].indexOf;
                        var NEGATIVE_ZERO = !!$native && 1 / [1].indexOf(1, -0) < 0;

                        $export($export.P + $export.F * (NEGATIVE_ZERO || !__webpack_require__("14f6")($native)), 'Array', {
                            // 22.1.3.11 / 15.4.4.14 Array.prototype.indexOf(searchElement [, fromIndex])
                            indexOf: function indexOf(searchElement /* , fromIndex = 0 */) {
                                return NEGATIVE_ZERO
                                    // convert -0 to +0
                                    ? $native.apply(this, arguments) || 0
                                    : $indexOf(this, searchElement, arguments[1]);
                            }
                        });


                        /***/
                    }),

                    /***/ "df7a":
                    /***/ (function (module, exports, __webpack_require__) {

                        "use strict";

                        var create = __webpack_require__("16a8");
                        var descriptor = __webpack_require__("2ae9");
                        var setToStringTag = __webpack_require__("a0f7");
                        var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
                        __webpack_require__("e0ed")(IteratorPrototype, __webpack_require__("eb5c")('iterator'), function () {
                            return this;
                        });

                        module.exports = function (Constructor, NAME, next) {
                            Constructor.prototype = create(IteratorPrototype, {next: descriptor(1, next)});
                            setToStringTag(Constructor, NAME + ' Iterator');
                        };


                        /***/
                    }),

                    /***/ "df98":
                    /***/ (function (module, exports) {

                        module.exports = function (it) {
                            return typeof it === 'object' ? it !== null : typeof it === 'function';
                        };


                        /***/
                    }),

                    /***/ "dfcb":
                    /***/ (function (module, exports, __webpack_require__) {

                        var classof = __webpack_require__("afd5");
                        var ITERATOR = __webpack_require__("eb5c")('iterator');
                        var Iterators = __webpack_require__("de2e");
                        module.exports = __webpack_require__("947c").getIteratorMethod = function (it) {
                            if (it != undefined) return it[ITERATOR]
                                || it['@@iterator']
                                || Iterators[classof(it)];
                        };


                        /***/
                    }),

                    /***/ "e001":
                    /***/ (function (module, exports, __webpack_require__) {

                        "use strict";

                        var $at = __webpack_require__("8273")(true);

// 21.1.3.27 String.prototype[@@iterator]()
                        __webpack_require__("8490")(String, 'String', function (iterated) {
                            this._t = String(iterated); // target
                            this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
                        }, function () {
                            var O = this._t;
                            var index = this._i;
                            var point;
                            if (index >= O.length) return {value: undefined, done: true};
                            point = $at(O, index);
                            this._i += point.length;
                            return {value: point, done: false};
                        });


                        /***/
                    }),

                    /***/ "e002":
                    /***/ (function (module, exports, __webpack_require__) {

                        "use strict";

                        __webpack_require__("c49f");
                        var redefine = __webpack_require__("ede6");
                        var hide = __webpack_require__("f650");
                        var fails = __webpack_require__("910c");
                        var defined = __webpack_require__("3e85");
                        var wks = __webpack_require__("7d30");
                        var regexpExec = __webpack_require__("2bfe");

                        var SPECIES = wks('species');

                        var REPLACE_SUPPORTS_NAMED_GROUPS = !fails(function () {
                            // #replace needs built-in support for named groups.
                            // #match works fine because it just return the exec results, even if it has
                            // a "grops" property.
                            var re = /./;
                            re.exec = function () {
                                var result = [];
                                result.groups = {a: '7'};
                                return result;
                            };
                            return ''.replace(re, '$<a>') !== '7';
                        });

                        var SPLIT_WORKS_WITH_OVERWRITTEN_EXEC = (function () {
                            // Chrome 51 has a buggy "split" implementation when RegExp#exec !== nativeExec
                            var re = /(?:)/;
                            var originalExec = re.exec;
                            re.exec = function () {
                                return originalExec.apply(this, arguments);
                            };
                            var result = 'ab'.split(re);
                            return result.length === 2 && result[0] === 'a' && result[1] === 'b';
                        })();

                        module.exports = function (KEY, length, exec) {
                            var SYMBOL = wks(KEY);

                            var DELEGATES_TO_SYMBOL = !fails(function () {
                                // String methods call symbol-named RegEp methods
                                var O = {};
                                O[SYMBOL] = function () {
                                    return 7;
                                };
                                return ''[KEY](O) != 7;
                            });

                            var DELEGATES_TO_EXEC = DELEGATES_TO_SYMBOL ? !fails(function () {
                                // Symbol-named RegExp methods call .exec
                                var execCalled = false;
                                var re = /a/;
                                re.exec = function () {
                                    execCalled = true;
                                    return null;
                                };
                                if (KEY === 'split') {
                                    // RegExp[@@split] doesn't call the regex's exec method, but first creates
                                    // a new one. We need to return the patched regex when creating the new one.
                                    re.constructor = {};
                                    re.constructor[SPECIES] = function () {
                                        return re;
                                    };
                                }
                                re[SYMBOL]('');
                                return !execCalled;
                            }) : undefined;

                            if (
                                !DELEGATES_TO_SYMBOL ||
                                !DELEGATES_TO_EXEC ||
                                (KEY === 'replace' && !REPLACE_SUPPORTS_NAMED_GROUPS) ||
                                (KEY === 'split' && !SPLIT_WORKS_WITH_OVERWRITTEN_EXEC)
                            ) {
                                var nativeRegExpMethod = /./[SYMBOL];
                                var fns = exec(
                                    defined,
                                    SYMBOL,
                                    ''[KEY],
                                    function maybeCallNative(nativeMethod, regexp, str, arg2, forceStringMethod) {
                                        if (regexp.exec === regexpExec) {
                                            if (DELEGATES_TO_SYMBOL && !forceStringMethod) {
                                                // The native String method already delegates to @@method (this
                                                // polyfilled function), leasing to infinite recursion.
                                                // We avoid it by directly calling the native @@method method.
                                                return {done: true, value: nativeRegExpMethod.call(regexp, str, arg2)};
                                            }
                                            return {done: true, value: nativeMethod.call(str, regexp, arg2)};
                                        }
                                        return {done: false};
                                    }
                                );
                                var strfn = fns[0];
                                var rxfn = fns[1];

                                redefine(String.prototype, KEY, strfn);
                                hide(RegExp.prototype, SYMBOL, length == 2
                                    // 21.2.5.8 RegExp.prototype[@@replace](string, replaceValue)
                                    // 21.2.5.11 RegExp.prototype[@@split](string, limit)
                                    ? function (string, arg) {
                                        return rxfn.call(string, this, arg);
                                    }
                                    // 21.2.5.6 RegExp.prototype[@@match](string)
                                    // 21.2.5.9 RegExp.prototype[@@search](string)
                                    : function (string) {
                                        return rxfn.call(string, this);
                                    }
                                );
                            }
                        };


                        /***/
                    }),

                    /***/ "e0ed":
                    /***/ (function (module, exports, __webpack_require__) {

                        var dP = __webpack_require__("4b11");
                        var createDesc = __webpack_require__("2ae9");
                        module.exports = __webpack_require__("fa25") ? function (object, key, value) {
                            return dP.f(object, key, createDesc(1, value));
                        } : function (object, key, value) {
                            object[key] = value;
                            return object;
                        };


                        /***/
                    }),

                    /***/ "e258":
                    /***/ (function (module, exports, __webpack_require__) {

                        module.exports = !__webpack_require__("66b6") && !__webpack_require__("910c")(function () {
                            return Object.defineProperty(__webpack_require__("f44d")('div'), 'a', {
                                get: function () {
                                    return 7;
                                }
                            }).a != 7;
                        });


                        /***/
                    }),

                    /***/ "e369":
                    /***/ (function (module, exports, __webpack_require__) {

                        var pIE = __webpack_require__("e60e");
                        var createDesc = __webpack_require__("2ae9");
                        var toIObject = __webpack_require__("c5f8");
                        var toPrimitive = __webpack_require__("8e7e");
                        var has = __webpack_require__("5b85");
                        var IE8_DOM_DEFINE = __webpack_require__("d210");
                        var gOPD = Object.getOwnPropertyDescriptor;

                        exports.f = __webpack_require__("fa25") ? gOPD : function getOwnPropertyDescriptor(O, P) {
                            O = toIObject(O);
                            P = toPrimitive(P, true);
                            if (IE8_DOM_DEFINE) try {
                                return gOPD(O, P);
                            } catch (e) { /* empty */
                            }
                            if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
                        };


                        /***/
                    }),

                    /***/ "e55f":
                    /***/ (function (module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
                        var has = __webpack_require__("5b85");
                        var toObject = __webpack_require__("872b");
                        var IE_PROTO = __webpack_require__("d0bc")('IE_PROTO');
                        var ObjectProto = Object.prototype;

                        module.exports = Object.getPrototypeOf || function (O) {
                            O = toObject(O);
                            if (has(O, IE_PROTO)) return O[IE_PROTO];
                            if (typeof O.constructor == 'function' && O instanceof O.constructor) {
                                return O.constructor.prototype;
                            }
                            return O instanceof Object ? ObjectProto : null;
                        };


                        /***/
                    }),

                    /***/ "e60e":
                    /***/ (function (module, exports) {

                        exports.f = {}.propertyIsEnumerable;


                        /***/
                    }),

                    /***/ "e87c":
                    /***/ (function (module, exports, __webpack_require__) {

// 9.4.2.3 ArraySpeciesCreate(originalArray, length)
                        var speciesConstructor = __webpack_require__("28a8");

                        module.exports = function (original, length) {
                            return new (speciesConstructor(original))(length);
                        };


                        /***/
                    }),

                    /***/ "e9cc":
                    /***/ (function (module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

                        /***/
                    }),

                    /***/ "ea59":
                    /***/ (function (module, exports) {

                        var id = 0;
                        var px = Math.random();
                        module.exports = function (key) {
                            return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
                        };


                        /***/
                    }),

                    /***/ "eb5c":
                    /***/ (function (module, exports, __webpack_require__) {

                        var store = __webpack_require__("564f")('wks');
                        var uid = __webpack_require__("edac");
                        var Symbol = __webpack_require__("adad").Symbol;
                        var USE_SYMBOL = typeof Symbol == 'function';

                        var $exports = module.exports = function (name) {
                            return store[name] || (store[name] =
                                USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
                        };

                        $exports.store = store;


                        /***/
                    }),

                    /***/ "edac":
                    /***/ (function (module, exports) {

                        var id = 0;
                        var px = Math.random();
                        module.exports = function (key) {
                            return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
                        };


                        /***/
                    }),

                    /***/ "ede6":
                    /***/ (function (module, exports, __webpack_require__) {

                        var global = __webpack_require__("898f");
                        var hide = __webpack_require__("f650");
                        var has = __webpack_require__("07fd");
                        var SRC = __webpack_require__("ea59")('src');
                        var $toString = __webpack_require__("8a60");
                        var TO_STRING = 'toString';
                        var TPL = ('' + $toString).split(TO_STRING);

                        __webpack_require__("21e4").inspectSource = function (it) {
                            return $toString.call(it);
                        };

                        (module.exports = function (O, key, val, safe) {
                            var isFunction = typeof val == 'function';
                            if (isFunction) has(val, 'name') || hide(val, 'name', key);
                            if (O[key] === val) return;
                            if (isFunction) has(val, SRC) || hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));
                            if (O === global) {
                                O[key] = val;
                            } else if (!safe) {
                                delete O[key];
                                hide(O, key, val);
                            } else if (O[key]) {
                                O[key] = val;
                            } else {
                                hide(O, key, val);
                            }
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
                        })(Function.prototype, TO_STRING, function toString() {
                            return typeof this == 'function' && this[SRC] || $toString.call(this);
                        });


                        /***/
                    }),

                    /***/ "ee07":
                    /***/ (function (module, exports) {

                        module.exports = {};


                        /***/
                    }),

                    /***/ "f0bd":
                    /***/ (function (module, __webpack_exports__, __webpack_require__) {

                        "use strict";
                        /* WEBPACK VAR INJECTION */
                        (function (global) {
                            /**!
                             * @fileOverview Kickass library to create and place poppers near their reference elements.
                             * @version 1.15.0
                             * @license
                             * Copyright (c) 2016 Federico Zivolo and contributors
                             *
                             * Permission is hereby granted, free of charge, to any person obtaining a copy
                             * of this software and associated documentation files (the "Software"), to deal
                             * in the Software without restriction, including without limitation the rights
                             * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
                             * copies of the Software, and to permit persons to whom the Software is
                             * furnished to do so, subject to the following conditions:
                             *
                             * The above copyright notice and this permission notice shall be included in all
                             * copies or substantial portions of the Software.
                             *
                             * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
                             * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
                             * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
                             * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
                             * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
                             * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
                             * SOFTWARE.
                             */
                            var isBrowser = typeof window !== 'undefined' && typeof document !== 'undefined';

                            var longerTimeoutBrowsers = ['Edge', 'Trident', 'Firefox'];
                            var timeoutDuration = 0;
                            for (var i = 0; i < longerTimeoutBrowsers.length; i += 1) {
                                if (isBrowser && navigator.userAgent.indexOf(longerTimeoutBrowsers[i]) >= 0) {
                                    timeoutDuration = 1;
                                    break;
                                }
                            }

                            function microtaskDebounce(fn) {
                                var called = false;
                                return function () {
                                    if (called) {
                                        return;
                                    }
                                    called = true;
                                    window.Promise.resolve().then(function () {
                                        called = false;
                                        fn();
                                    });
                                };
                            }

                            function taskDebounce(fn) {
                                var scheduled = false;
                                return function () {
                                    if (!scheduled) {
                                        scheduled = true;
                                        setTimeout(function () {
                                            scheduled = false;
                                            fn();
                                        }, timeoutDuration);
                                    }
                                };
                            }

                            var supportsMicroTasks = isBrowser && window.Promise;

                            /**
                             * Create a debounced version of a method, that's asynchronously deferred
                             * but called in the minimum time possible.
                             *
                             * @method
                             * @memberof Popper.Utils
                             * @argument {Function} fn
                             * @returns {Function}
                             */
                            var debounce = supportsMicroTasks ? microtaskDebounce : taskDebounce;

                            /**
                             * Check if the given variable is a function
                             * @method
                             * @memberof Popper.Utils
                             * @argument {Any} functionToCheck - variable to check
                             * @returns {Boolean} answer to: is a function?
                             */
                            function isFunction(functionToCheck) {
                                var getType = {};
                                return functionToCheck && getType.toString.call(functionToCheck) === '[object Function]';
                            }

                            /**
                             * Get CSS computed property of the given element
                             * @method
                             * @memberof Popper.Utils
                             * @argument {Eement} element
                             * @argument {String} property
                             */
                            function getStyleComputedProperty(element, property) {
                                if (element.nodeType !== 1) {
                                    return [];
                                }
                                // NOTE: 1 DOM access here
                                var window = element.ownerDocument.defaultView;
                                var css = window.getComputedStyle(element, null);
                                return property ? css[property] : css;
                            }

                            /**
                             * Returns the parentNode or the host of the element
                             * @method
                             * @memberof Popper.Utils
                             * @argument {Element} element
                             * @returns {Element} parent
                             */
                            function getParentNode(element) {
                                if (element.nodeName === 'HTML') {
                                    return element;
                                }
                                return element.parentNode || element.host;
                            }

                            /**
                             * Returns the scrolling parent of the given element
                             * @method
                             * @memberof Popper.Utils
                             * @argument {Element} element
                             * @returns {Element} scroll parent
                             */
                            function getScrollParent(element) {
                                // Return body, `getScroll` will take care to get the correct `scrollTop` from it
                                if (!element) {
                                    return document.body;
                                }

                                switch (element.nodeName) {
                                    case 'HTML':
                                    case 'BODY':
                                        return element.ownerDocument.body;
                                    case '#document':
                                        return element.body;
                                }

                                // Firefox want us to check `-x` and `-y` variations as well

                                var _getStyleComputedProp = getStyleComputedProperty(element),
                                    overflow = _getStyleComputedProp.overflow,
                                    overflowX = _getStyleComputedProp.overflowX,
                                    overflowY = _getStyleComputedProp.overflowY;

                                if (/(auto|scroll|overlay)/.test(overflow + overflowY + overflowX)) {
                                    return element;
                                }

                                return getScrollParent(getParentNode(element));
                            }

                            var isIE11 = isBrowser && !!(window.MSInputMethodContext && document.documentMode);
                            var isIE10 = isBrowser && /MSIE 10/.test(navigator.userAgent);

                            /**
                             * Determines if the browser is Internet Explorer
                             * @method
                             * @memberof Popper.Utils
                             * @param {Number} version to check
                             * @returns {Boolean} isIE
                             */
                            function isIE(version) {
                                if (version === 11) {
                                    return isIE11;
                                }
                                if (version === 10) {
                                    return isIE10;
                                }
                                return isIE11 || isIE10;
                            }

                            /**
                             * Returns the offset parent of the given element
                             * @method
                             * @memberof Popper.Utils
                             * @argument {Element} element
                             * @returns {Element} offset parent
                             */
                            function getOffsetParent(element) {
                                if (!element) {
                                    return document.documentElement;
                                }

                                var noOffsetParent = isIE(10) ? document.body : null;

                                // NOTE: 1 DOM access here
                                var offsetParent = element.offsetParent || null;
                                // Skip hidden elements which don't have an offsetParent
                                while (offsetParent === noOffsetParent && element.nextElementSibling) {
                                    offsetParent = (element = element.nextElementSibling).offsetParent;
                                }

                                var nodeName = offsetParent && offsetParent.nodeName;

                                if (!nodeName || nodeName === 'BODY' || nodeName === 'HTML') {
                                    return element ? element.ownerDocument.documentElement : document.documentElement;
                                }

                                // .offsetParent will return the closest TH, TD or TABLE in case
                                // no offsetParent is present, I hate this job...
                                if (['TH', 'TD', 'TABLE'].indexOf(offsetParent.nodeName) !== -1 && getStyleComputedProperty(offsetParent, 'position') === 'static') {
                                    return getOffsetParent(offsetParent);
                                }

                                return offsetParent;
                            }

                            function isOffsetContainer(element) {
                                var nodeName = element.nodeName;

                                if (nodeName === 'BODY') {
                                    return false;
                                }
                                return nodeName === 'HTML' || getOffsetParent(element.firstElementChild) === element;
                            }

                            /**
                             * Finds the root node (document, shadowDOM root) of the given element
                             * @method
                             * @memberof Popper.Utils
                             * @argument {Element} node
                             * @returns {Element} root node
                             */
                            function getRoot(node) {
                                if (node.parentNode !== null) {
                                    return getRoot(node.parentNode);
                                }

                                return node;
                            }

                            /**
                             * Finds the offset parent common to the two provided nodes
                             * @method
                             * @memberof Popper.Utils
                             * @argument {Element} element1
                             * @argument {Element} element2
                             * @returns {Element} common offset parent
                             */
                            function findCommonOffsetParent(element1, element2) {
                                // This check is needed to avoid errors in case one of the elements isn't defined for any reason
                                if (!element1 || !element1.nodeType || !element2 || !element2.nodeType) {
                                    return document.documentElement;
                                }

                                // Here we make sure to give as "start" the element that comes first in the DOM
                                var order = element1.compareDocumentPosition(element2) & Node.DOCUMENT_POSITION_FOLLOWING;
                                var start = order ? element1 : element2;
                                var end = order ? element2 : element1;

                                // Get common ancestor container
                                var range = document.createRange();
                                range.setStart(start, 0);
                                range.setEnd(end, 0);
                                var commonAncestorContainer = range.commonAncestorContainer;

                                // Both nodes are inside #document

                                if (element1 !== commonAncestorContainer && element2 !== commonAncestorContainer || start.contains(end)) {
                                    if (isOffsetContainer(commonAncestorContainer)) {
                                        return commonAncestorContainer;
                                    }

                                    return getOffsetParent(commonAncestorContainer);
                                }

                                // one of the nodes is inside shadowDOM, find which one
                                var element1root = getRoot(element1);
                                if (element1root.host) {
                                    return findCommonOffsetParent(element1root.host, element2);
                                } else {
                                    return findCommonOffsetParent(element1, getRoot(element2).host);
                                }
                            }

                            /**
                             * Gets the scroll value of the given element in the given side (top and left)
                             * @method
                             * @memberof Popper.Utils
                             * @argument {Element} element
                             * @argument {String} side `top` or `left`
                             * @returns {number} amount of scrolled pixels
                             */
                            function getScroll(element) {
                                var side = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'top';

                                var upperSide = side === 'top' ? 'scrollTop' : 'scrollLeft';
                                var nodeName = element.nodeName;

                                if (nodeName === 'BODY' || nodeName === 'HTML') {
                                    var html = element.ownerDocument.documentElement;
                                    var scrollingElement = element.ownerDocument.scrollingElement || html;
                                    return scrollingElement[upperSide];
                                }

                                return element[upperSide];
                            }

                            /*
 * Sum or subtract the element scroll values (left and top) from a given rect object
 * @method
 * @memberof Popper.Utils
 * @param {Object} rect - Rect object you want to change
 * @param {HTMLElement} element - The element from the function reads the scroll values
 * @param {Boolean} subtract - set to true if you want to subtract the scroll values
 * @return {Object} rect - The modifier rect object
 */
                            function includeScroll(rect, element) {
                                var subtract = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

                                var scrollTop = getScroll(element, 'top');
                                var scrollLeft = getScroll(element, 'left');
                                var modifier = subtract ? -1 : 1;
                                rect.top += scrollTop * modifier;
                                rect.bottom += scrollTop * modifier;
                                rect.left += scrollLeft * modifier;
                                rect.right += scrollLeft * modifier;
                                return rect;
                            }

                            /*
 * Helper to detect borders of a given element
 * @method
 * @memberof Popper.Utils
 * @param {CSSStyleDeclaration} styles
 * Result of `getStyleComputedProperty` on the given element
 * @param {String} axis - `x` or `y`
 * @return {number} borders - The borders size of the given axis
 */

                            function getBordersSize(styles, axis) {
                                var sideA = axis === 'x' ? 'Left' : 'Top';
                                var sideB = sideA === 'Left' ? 'Right' : 'Bottom';

                                return parseFloat(styles['border' + sideA + 'Width'], 10) + parseFloat(styles['border' + sideB + 'Width'], 10);
                            }

                            function getSize(axis, body, html, computedStyle) {
                                return Math.max(body['offset' + axis], body['scroll' + axis], html['client' + axis], html['offset' + axis], html['scroll' + axis], isIE(10) ? parseInt(html['offset' + axis]) + parseInt(computedStyle['margin' + (axis === 'Height' ? 'Top' : 'Left')]) + parseInt(computedStyle['margin' + (axis === 'Height' ? 'Bottom' : 'Right')]) : 0);
                            }

                            function getWindowSizes(document) {
                                var body = document.body;
                                var html = document.documentElement;
                                var computedStyle = isIE(10) && getComputedStyle(html);

                                return {
                                    height: getSize('Height', body, html, computedStyle),
                                    width: getSize('Width', body, html, computedStyle)
                                };
                            }

                            var classCallCheck = function (instance, Constructor) {
                                if (!(instance instanceof Constructor)) {
                                    throw new TypeError("Cannot call a class as a function");
                                }
                            };

                            var createClass = function () {
                                function defineProperties(target, props) {
                                    for (var i = 0; i < props.length; i++) {
                                        var descriptor = props[i];
                                        descriptor.enumerable = descriptor.enumerable || false;
                                        descriptor.configurable = true;
                                        if ("value" in descriptor) descriptor.writable = true;
                                        Object.defineProperty(target, descriptor.key, descriptor);
                                    }
                                }

                                return function (Constructor, protoProps, staticProps) {
                                    if (protoProps) defineProperties(Constructor.prototype, protoProps);
                                    if (staticProps) defineProperties(Constructor, staticProps);
                                    return Constructor;
                                };
                            }();


                            var defineProperty = function (obj, key, value) {
                                if (key in obj) {
                                    Object.defineProperty(obj, key, {
                                        value: value,
                                        enumerable: true,
                                        configurable: true,
                                        writable: true
                                    });
                                } else {
                                    obj[key] = value;
                                }

                                return obj;
                            };

                            var _extends = Object.assign || function (target) {
                                for (var i = 1; i < arguments.length; i++) {
                                    var source = arguments[i];

                                    for (var key in source) {
                                        if (Object.prototype.hasOwnProperty.call(source, key)) {
                                            target[key] = source[key];
                                        }
                                    }
                                }

                                return target;
                            };

                            /**
                             * Given element offsets, generate an output similar to getBoundingClientRect
                             * @method
                             * @memberof Popper.Utils
                             * @argument {Object} offsets
                             * @returns {Object} ClientRect like output
                             */
                            function getClientRect(offsets) {
                                return _extends({}, offsets, {
                                    right: offsets.left + offsets.width,
                                    bottom: offsets.top + offsets.height
                                });
                            }

                            /**
                             * Get bounding client rect of given element
                             * @method
                             * @memberof Popper.Utils
                             * @param {HTMLElement} element
                             * @return {Object} client rect
                             */
                            function getBoundingClientRect(element) {
                                var rect = {};

                                // IE10 10 FIX: Please, don't ask, the element isn't
                                // considered in DOM in some circumstances...
                                // This isn't reproducible in IE10 compatibility mode of IE11
                                try {
                                    if (isIE(10)) {
                                        rect = element.getBoundingClientRect();
                                        var scrollTop = getScroll(element, 'top');
                                        var scrollLeft = getScroll(element, 'left');
                                        rect.top += scrollTop;
                                        rect.left += scrollLeft;
                                        rect.bottom += scrollTop;
                                        rect.right += scrollLeft;
                                    } else {
                                        rect = element.getBoundingClientRect();
                                    }
                                } catch (e) {
                                }

                                var result = {
                                    left: rect.left,
                                    top: rect.top,
                                    width: rect.right - rect.left,
                                    height: rect.bottom - rect.top
                                };

                                // subtract scrollbar size from sizes
                                var sizes = element.nodeName === 'HTML' ? getWindowSizes(element.ownerDocument) : {};
                                var width = sizes.width || element.clientWidth || result.right - result.left;
                                var height = sizes.height || element.clientHeight || result.bottom - result.top;

                                var horizScrollbar = element.offsetWidth - width;
                                var vertScrollbar = element.offsetHeight - height;

                                // if an hypothetical scrollbar is detected, we must be sure it's not a `border`
                                // we make this check conditional for performance reasons
                                if (horizScrollbar || vertScrollbar) {
                                    var styles = getStyleComputedProperty(element);
                                    horizScrollbar -= getBordersSize(styles, 'x');
                                    vertScrollbar -= getBordersSize(styles, 'y');

                                    result.width -= horizScrollbar;
                                    result.height -= vertScrollbar;
                                }

                                return getClientRect(result);
                            }

                            function getOffsetRectRelativeToArbitraryNode(children, parent) {
                                var fixedPosition = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

                                var isIE10 = isIE(10);
                                var isHTML = parent.nodeName === 'HTML';
                                var childrenRect = getBoundingClientRect(children);
                                var parentRect = getBoundingClientRect(parent);
                                var scrollParent = getScrollParent(children);

                                var styles = getStyleComputedProperty(parent);
                                var borderTopWidth = parseFloat(styles.borderTopWidth, 10);
                                var borderLeftWidth = parseFloat(styles.borderLeftWidth, 10);

                                // In cases where the parent is fixed, we must ignore negative scroll in offset calc
                                if (fixedPosition && isHTML) {
                                    parentRect.top = Math.max(parentRect.top, 0);
                                    parentRect.left = Math.max(parentRect.left, 0);
                                }
                                var offsets = getClientRect({
                                    top: childrenRect.top - parentRect.top - borderTopWidth,
                                    left: childrenRect.left - parentRect.left - borderLeftWidth,
                                    width: childrenRect.width,
                                    height: childrenRect.height
                                });
                                offsets.marginTop = 0;
                                offsets.marginLeft = 0;

                                // Subtract margins of documentElement in case it's being used as parent
                                // we do this only on HTML because it's the only element that behaves
                                // differently when margins are applied to it. The margins are included in
                                // the box of the documentElement, in the other cases not.
                                if (!isIE10 && isHTML) {
                                    var marginTop = parseFloat(styles.marginTop, 10);
                                    var marginLeft = parseFloat(styles.marginLeft, 10);

                                    offsets.top -= borderTopWidth - marginTop;
                                    offsets.bottom -= borderTopWidth - marginTop;
                                    offsets.left -= borderLeftWidth - marginLeft;
                                    offsets.right -= borderLeftWidth - marginLeft;

                                    // Attach marginTop and marginLeft because in some circumstances we may need them
                                    offsets.marginTop = marginTop;
                                    offsets.marginLeft = marginLeft;
                                }

                                if (isIE10 && !fixedPosition ? parent.contains(scrollParent) : parent === scrollParent && scrollParent.nodeName !== 'BODY') {
                                    offsets = includeScroll(offsets, parent);
                                }

                                return offsets;
                            }

                            function getViewportOffsetRectRelativeToArtbitraryNode(element) {
                                var excludeScroll = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

                                var html = element.ownerDocument.documentElement;
                                var relativeOffset = getOffsetRectRelativeToArbitraryNode(element, html);
                                var width = Math.max(html.clientWidth, window.innerWidth || 0);
                                var height = Math.max(html.clientHeight, window.innerHeight || 0);

                                var scrollTop = !excludeScroll ? getScroll(html) : 0;
                                var scrollLeft = !excludeScroll ? getScroll(html, 'left') : 0;

                                var offset = {
                                    top: scrollTop - relativeOffset.top + relativeOffset.marginTop,
                                    left: scrollLeft - relativeOffset.left + relativeOffset.marginLeft,
                                    width: width,
                                    height: height
                                };

                                return getClientRect(offset);
                            }

                            /**
                             * Check if the given element is fixed or is inside a fixed parent
                             * @method
                             * @memberof Popper.Utils
                             * @argument {Element} element
                             * @argument {Element} customContainer
                             * @returns {Boolean} answer to "isFixed?"
                             */
                            function isFixed(element) {
                                var nodeName = element.nodeName;
                                if (nodeName === 'BODY' || nodeName === 'HTML') {
                                    return false;
                                }
                                if (getStyleComputedProperty(element, 'position') === 'fixed') {
                                    return true;
                                }
                                var parentNode = getParentNode(element);
                                if (!parentNode) {
                                    return false;
                                }
                                return isFixed(parentNode);
                            }

                            /**
                             * Finds the first parent of an element that has a transformed property defined
                             * @method
                             * @memberof Popper.Utils
                             * @argument {Element} element
                             * @returns {Element} first transformed parent or documentElement
                             */

                            function getFixedPositionOffsetParent(element) {
                                // This check is needed to avoid errors in case one of the elements isn't defined for any reason
                                if (!element || !element.parentElement || isIE()) {
                                    return document.documentElement;
                                }
                                var el = element.parentElement;
                                while (el && getStyleComputedProperty(el, 'transform') === 'none') {
                                    el = el.parentElement;
                                }
                                return el || document.documentElement;
                            }

                            /**
                             * Computed the boundaries limits and return them
                             * @method
                             * @memberof Popper.Utils
                             * @param {HTMLElement} popper
                             * @param {HTMLElement} reference
                             * @param {number} padding
                             * @param {HTMLElement} boundariesElement - Element used to define the boundaries
                             * @param {Boolean} fixedPosition - Is in fixed position mode
                             * @returns {Object} Coordinates of the boundaries
                             */
                            function getBoundaries(popper, reference, padding, boundariesElement) {
                                var fixedPosition = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;

                                // NOTE: 1 DOM access here

                                var boundaries = {top: 0, left: 0};
                                var offsetParent = fixedPosition ? getFixedPositionOffsetParent(popper) : findCommonOffsetParent(popper, reference);

                                // Handle viewport case
                                if (boundariesElement === 'viewport') {
                                    boundaries = getViewportOffsetRectRelativeToArtbitraryNode(offsetParent, fixedPosition);
                                } else {
                                    // Handle other cases based on DOM element used as boundaries
                                    var boundariesNode = void 0;
                                    if (boundariesElement === 'scrollParent') {
                                        boundariesNode = getScrollParent(getParentNode(reference));
                                        if (boundariesNode.nodeName === 'BODY') {
                                            boundariesNode = popper.ownerDocument.documentElement;
                                        }
                                    } else if (boundariesElement === 'window') {
                                        boundariesNode = popper.ownerDocument.documentElement;
                                    } else {
                                        boundariesNode = boundariesElement;
                                    }

                                    var offsets = getOffsetRectRelativeToArbitraryNode(boundariesNode, offsetParent, fixedPosition);

                                    // In case of HTML, we need a different computation
                                    if (boundariesNode.nodeName === 'HTML' && !isFixed(offsetParent)) {
                                        var _getWindowSizes = getWindowSizes(popper.ownerDocument),
                                            height = _getWindowSizes.height,
                                            width = _getWindowSizes.width;

                                        boundaries.top += offsets.top - offsets.marginTop;
                                        boundaries.bottom = height + offsets.top;
                                        boundaries.left += offsets.left - offsets.marginLeft;
                                        boundaries.right = width + offsets.left;
                                    } else {
                                        // for all the other DOM elements, this one is good
                                        boundaries = offsets;
                                    }
                                }

                                // Add paddings
                                padding = padding || 0;
                                var isPaddingNumber = typeof padding === 'number';
                                boundaries.left += isPaddingNumber ? padding : padding.left || 0;
                                boundaries.top += isPaddingNumber ? padding : padding.top || 0;
                                boundaries.right -= isPaddingNumber ? padding : padding.right || 0;
                                boundaries.bottom -= isPaddingNumber ? padding : padding.bottom || 0;

                                return boundaries;
                            }

                            function getArea(_ref) {
                                var width = _ref.width,
                                    height = _ref.height;

                                return width * height;
                            }

                            /**
                             * Utility used to transform the `auto` placement to the placement with more
                             * available space.
                             * @method
                             * @memberof Popper.Utils
                             * @argument {Object} data - The data object generated by update method
                             * @argument {Object} options - Modifiers configuration and options
                             * @returns {Object} The data object, properly modified
                             */
                            function computeAutoPlacement(placement, refRect, popper, reference, boundariesElement) {
                                var padding = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0;

                                if (placement.indexOf('auto') === -1) {
                                    return placement;
                                }

                                var boundaries = getBoundaries(popper, reference, padding, boundariesElement);

                                var rects = {
                                    top: {
                                        width: boundaries.width,
                                        height: refRect.top - boundaries.top
                                    },
                                    right: {
                                        width: boundaries.right - refRect.right,
                                        height: boundaries.height
                                    },
                                    bottom: {
                                        width: boundaries.width,
                                        height: boundaries.bottom - refRect.bottom
                                    },
                                    left: {
                                        width: refRect.left - boundaries.left,
                                        height: boundaries.height
                                    }
                                };

                                var sortedAreas = Object.keys(rects).map(function (key) {
                                    return _extends({
                                        key: key
                                    }, rects[key], {
                                        area: getArea(rects[key])
                                    });
                                }).sort(function (a, b) {
                                    return b.area - a.area;
                                });

                                var filteredAreas = sortedAreas.filter(function (_ref2) {
                                    var width = _ref2.width,
                                        height = _ref2.height;
                                    return width >= popper.clientWidth && height >= popper.clientHeight;
                                });

                                var computedPlacement = filteredAreas.length > 0 ? filteredAreas[0].key : sortedAreas[0].key;

                                var variation = placement.split('-')[1];

                                return computedPlacement + (variation ? '-' + variation : '');
                            }

                            /**
                             * Get offsets to the reference element
                             * @method
                             * @memberof Popper.Utils
                             * @param {Object} state
                             * @param {Element} popper - the popper element
                             * @param {Element} reference - the reference element (the popper will be relative to this)
                             * @param {Element} fixedPosition - is in fixed position mode
                             * @returns {Object} An object containing the offsets which will be applied to the popper
                             */
                            function getReferenceOffsets(state, popper, reference) {
                                var fixedPosition = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;

                                var commonOffsetParent = fixedPosition ? getFixedPositionOffsetParent(popper) : findCommonOffsetParent(popper, reference);
                                return getOffsetRectRelativeToArbitraryNode(reference, commonOffsetParent, fixedPosition);
                            }

                            /**
                             * Get the outer sizes of the given element (offset size + margins)
                             * @method
                             * @memberof Popper.Utils
                             * @argument {Element} element
                             * @returns {Object} object containing width and height properties
                             */
                            function getOuterSizes(element) {
                                var window = element.ownerDocument.defaultView;
                                var styles = window.getComputedStyle(element);
                                var x = parseFloat(styles.marginTop || 0) + parseFloat(styles.marginBottom || 0);
                                var y = parseFloat(styles.marginLeft || 0) + parseFloat(styles.marginRight || 0);
                                var result = {
                                    width: element.offsetWidth + y,
                                    height: element.offsetHeight + x
                                };
                                return result;
                            }

                            /**
                             * Get the opposite placement of the given one
                             * @method
                             * @memberof Popper.Utils
                             * @argument {String} placement
                             * @returns {String} flipped placement
                             */
                            function getOppositePlacement(placement) {
                                var hash = {left: 'right', right: 'left', bottom: 'top', top: 'bottom'};
                                return placement.replace(/left|right|bottom|top/g, function (matched) {
                                    return hash[matched];
                                });
                            }

                            /**
                             * Get offsets to the popper
                             * @method
                             * @memberof Popper.Utils
                             * @param {Object} position - CSS position the Popper will get applied
                             * @param {HTMLElement} popper - the popper element
                             * @param {Object} referenceOffsets - the reference offsets (the popper will be relative to this)
                             * @param {String} placement - one of the valid placement options
                             * @returns {Object} popperOffsets - An object containing the offsets which will be applied to the popper
                             */
                            function getPopperOffsets(popper, referenceOffsets, placement) {
                                placement = placement.split('-')[0];

                                // Get popper node sizes
                                var popperRect = getOuterSizes(popper);

                                // Add position, width and height to our offsets object
                                var popperOffsets = {
                                    width: popperRect.width,
                                    height: popperRect.height
                                };

                                // depending by the popper placement we have to compute its offsets slightly differently
                                var isHoriz = ['right', 'left'].indexOf(placement) !== -1;
                                var mainSide = isHoriz ? 'top' : 'left';
                                var secondarySide = isHoriz ? 'left' : 'top';
                                var measurement = isHoriz ? 'height' : 'width';
                                var secondaryMeasurement = !isHoriz ? 'height' : 'width';

                                popperOffsets[mainSide] = referenceOffsets[mainSide] + referenceOffsets[measurement] / 2 - popperRect[measurement] / 2;
                                if (placement === secondarySide) {
                                    popperOffsets[secondarySide] = referenceOffsets[secondarySide] - popperRect[secondaryMeasurement];
                                } else {
                                    popperOffsets[secondarySide] = referenceOffsets[getOppositePlacement(secondarySide)];
                                }

                                return popperOffsets;
                            }

                            /**
                             * Mimics the `find` method of Array
                             * @method
                             * @memberof Popper.Utils
                             * @argument {Array} arr
                             * @argument prop
                             * @argument value
                             * @returns index or -1
                             */
                            function find(arr, check) {
                                // use native find if supported
                                if (Array.prototype.find) {
                                    return arr.find(check);
                                }

                                // use `filter` to obtain the same behavior of `find`
                                return arr.filter(check)[0];
                            }

                            /**
                             * Return the index of the matching object
                             * @method
                             * @memberof Popper.Utils
                             * @argument {Array} arr
                             * @argument prop
                             * @argument value
                             * @returns index or -1
                             */
                            function findIndex(arr, prop, value) {
                                // use native findIndex if supported
                                if (Array.prototype.findIndex) {
                                    return arr.findIndex(function (cur) {
                                        return cur[prop] === value;
                                    });
                                }

                                // use `find` + `indexOf` if `findIndex` isn't supported
                                var match = find(arr, function (obj) {
                                    return obj[prop] === value;
                                });
                                return arr.indexOf(match);
                            }

                            /**
                             * Loop trough the list of modifiers and run them in order,
                             * each of them will then edit the data object.
                             * @method
                             * @memberof Popper.Utils
                             * @param {dataObject} data
                             * @param {Array} modifiers
                             * @param {String} ends - Optional modifier name used as stopper
                             * @returns {dataObject}
                             */
                            function runModifiers(modifiers, data, ends) {
                                var modifiersToRun = ends === undefined ? modifiers : modifiers.slice(0, findIndex(modifiers, 'name', ends));

                                modifiersToRun.forEach(function (modifier) {
                                    if (modifier['function']) {
                                        // eslint-disable-line dot-notation
                                        console.warn('`modifier.function` is deprecated, use `modifier.fn`!');
                                    }
                                    var fn = modifier['function'] || modifier.fn; // eslint-disable-line dot-notation
                                    if (modifier.enabled && isFunction(fn)) {
                                        // Add properties to offsets to make them a complete clientRect object
                                        // we do this before each modifier to make sure the previous one doesn't
                                        // mess with these values
                                        data.offsets.popper = getClientRect(data.offsets.popper);
                                        data.offsets.reference = getClientRect(data.offsets.reference);

                                        data = fn(data, modifier);
                                    }
                                });

                                return data;
                            }

                            /**
                             * Updates the position of the popper, computing the new offsets and applying
                             * the new style.<br />
                             * Prefer `scheduleUpdate` over `update` because of performance reasons.
                             * @method
                             * @memberof Popper
                             */
                            function update() {
                                // if popper is destroyed, don't perform any further update
                                if (this.state.isDestroyed) {
                                    return;
                                }

                                var data = {
                                    instance: this,
                                    styles: {},
                                    arrowStyles: {},
                                    attributes: {},
                                    flipped: false,
                                    offsets: {}
                                };

                                // compute reference element offsets
                                data.offsets.reference = getReferenceOffsets(this.state, this.popper, this.reference, this.options.positionFixed);

                                // compute auto placement, store placement inside the data object,
                                // modifiers will be able to edit `placement` if needed
                                // and refer to originalPlacement to know the original value
                                data.placement = computeAutoPlacement(this.options.placement, data.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding);

                                // store the computed placement inside `originalPlacement`
                                data.originalPlacement = data.placement;

                                data.positionFixed = this.options.positionFixed;

                                // compute the popper offsets
                                data.offsets.popper = getPopperOffsets(this.popper, data.offsets.reference, data.placement);

                                data.offsets.popper.position = this.options.positionFixed ? 'fixed' : 'absolute';

                                // run the modifiers
                                data = runModifiers(this.modifiers, data);

                                // the first `update` will call `onCreate` callback
                                // the other ones will call `onUpdate` callback
                                if (!this.state.isCreated) {
                                    this.state.isCreated = true;
                                    this.options.onCreate(data);
                                } else {
                                    this.options.onUpdate(data);
                                }
                            }

                            /**
                             * Helper used to know if the given modifier is enabled.
                             * @method
                             * @memberof Popper.Utils
                             * @returns {Boolean}
                             */
                            function isModifierEnabled(modifiers, modifierName) {
                                return modifiers.some(function (_ref) {
                                    var name = _ref.name,
                                        enabled = _ref.enabled;
                                    return enabled && name === modifierName;
                                });
                            }

                            /**
                             * Get the prefixed supported property name
                             * @method
                             * @memberof Popper.Utils
                             * @argument {String} property (camelCase)
                             * @returns {String} prefixed property (camelCase or PascalCase, depending on the vendor prefix)
                             */
                            function getSupportedPropertyName(property) {
                                var prefixes = [false, 'ms', 'Webkit', 'Moz', 'O'];
                                var upperProp = property.charAt(0).toUpperCase() + property.slice(1);

                                for (var i = 0; i < prefixes.length; i++) {
                                    var prefix = prefixes[i];
                                    var toCheck = prefix ? '' + prefix + upperProp : property;
                                    if (typeof document.body.style[toCheck] !== 'undefined') {
                                        return toCheck;
                                    }
                                }
                                return null;
                            }

                            /**
                             * Destroys the popper.
                             * @method
                             * @memberof Popper
                             */
                            function destroy() {
                                this.state.isDestroyed = true;

                                // touch DOM only if `applyStyle` modifier is enabled
                                if (isModifierEnabled(this.modifiers, 'applyStyle')) {
                                    this.popper.removeAttribute('x-placement');
                                    this.popper.style.position = '';
                                    this.popper.style.top = '';
                                    this.popper.style.left = '';
                                    this.popper.style.right = '';
                                    this.popper.style.bottom = '';
                                    this.popper.style.willChange = '';
                                    this.popper.style[getSupportedPropertyName('transform')] = '';
                                }

                                this.disableEventListeners();

                                // remove the popper if user explicity asked for the deletion on destroy
                                // do not use `remove` because IE11 doesn't support it
                                if (this.options.removeOnDestroy) {
                                    this.popper.parentNode.removeChild(this.popper);
                                }
                                return this;
                            }

                            /**
                             * Get the window associated with the element
                             * @argument {Element} element
                             * @returns {Window}
                             */
                            function getWindow(element) {
                                var ownerDocument = element.ownerDocument;
                                return ownerDocument ? ownerDocument.defaultView : window;
                            }

                            function attachToScrollParents(scrollParent, event, callback, scrollParents) {
                                var isBody = scrollParent.nodeName === 'BODY';
                                var target = isBody ? scrollParent.ownerDocument.defaultView : scrollParent;
                                target.addEventListener(event, callback, {passive: true});

                                if (!isBody) {
                                    attachToScrollParents(getScrollParent(target.parentNode), event, callback, scrollParents);
                                }
                                scrollParents.push(target);
                            }

                            /**
                             * Setup needed event listeners used to update the popper position
                             * @method
                             * @memberof Popper.Utils
                             * @private
                             */
                            function setupEventListeners(reference, options, state, updateBound) {
                                // Resize event listener on window
                                state.updateBound = updateBound;
                                getWindow(reference).addEventListener('resize', state.updateBound, {passive: true});

                                // Scroll event listener on scroll parents
                                var scrollElement = getScrollParent(reference);
                                attachToScrollParents(scrollElement, 'scroll', state.updateBound, state.scrollParents);
                                state.scrollElement = scrollElement;
                                state.eventsEnabled = true;

                                return state;
                            }

                            /**
                             * It will add resize/scroll events and start recalculating
                             * position of the popper element when they are triggered.
                             * @method
                             * @memberof Popper
                             */
                            function enableEventListeners() {
                                if (!this.state.eventsEnabled) {
                                    this.state = setupEventListeners(this.reference, this.options, this.state, this.scheduleUpdate);
                                }
                            }

                            /**
                             * Remove event listeners used to update the popper position
                             * @method
                             * @memberof Popper.Utils
                             * @private
                             */
                            function removeEventListeners(reference, state) {
                                // Remove resize event listener on window
                                getWindow(reference).removeEventListener('resize', state.updateBound);

                                // Remove scroll event listener on scroll parents
                                state.scrollParents.forEach(function (target) {
                                    target.removeEventListener('scroll', state.updateBound);
                                });

                                // Reset state
                                state.updateBound = null;
                                state.scrollParents = [];
                                state.scrollElement = null;
                                state.eventsEnabled = false;
                                return state;
                            }

                            /**
                             * It will remove resize/scroll events and won't recalculate popper position
                             * when they are triggered. It also won't trigger `onUpdate` callback anymore,
                             * unless you call `update` method manually.
                             * @method
                             * @memberof Popper
                             */
                            function disableEventListeners() {
                                if (this.state.eventsEnabled) {
                                    cancelAnimationFrame(this.scheduleUpdate);
                                    this.state = removeEventListeners(this.reference, this.state);
                                }
                            }

                            /**
                             * Tells if a given input is a number
                             * @method
                             * @memberof Popper.Utils
                             * @param {*} input to check
                             * @return {Boolean}
                             */
                            function isNumeric(n) {
                                return n !== '' && !isNaN(parseFloat(n)) && isFinite(n);
                            }

                            /**
                             * Set the style to the given popper
                             * @method
                             * @memberof Popper.Utils
                             * @argument {Element} element - Element to apply the style to
                             * @argument {Object} styles
                             * Object with a list of properties and values which will be applied to the element
                             */
                            function setStyles(element, styles) {
                                Object.keys(styles).forEach(function (prop) {
                                    var unit = '';
                                    // add unit if the value is numeric and is one of the following
                                    if (['width', 'height', 'top', 'right', 'bottom', 'left'].indexOf(prop) !== -1 && isNumeric(styles[prop])) {
                                        unit = 'px';
                                    }
                                    element.style[prop] = styles[prop] + unit;
                                });
                            }

                            /**
                             * Set the attributes to the given popper
                             * @method
                             * @memberof Popper.Utils
                             * @argument {Element} element - Element to apply the attributes to
                             * @argument {Object} styles
                             * Object with a list of properties and values which will be applied to the element
                             */
                            function setAttributes(element, attributes) {
                                Object.keys(attributes).forEach(function (prop) {
                                    var value = attributes[prop];
                                    if (value !== false) {
                                        element.setAttribute(prop, attributes[prop]);
                                    } else {
                                        element.removeAttribute(prop);
                                    }
                                });
                            }

                            /**
                             * @function
                             * @memberof Modifiers
                             * @argument {Object} data - The data object generated by `update` method
                             * @argument {Object} data.styles - List of style properties - values to apply to popper element
                             * @argument {Object} data.attributes - List of attribute properties - values to apply to popper element
                             * @argument {Object} options - Modifiers configuration and options
                             * @returns {Object} The same data object
                             */
                            function applyStyle(data) {
                                // any property present in `data.styles` will be applied to the popper,
                                // in this way we can make the 3rd party modifiers add custom styles to it
                                // Be aware, modifiers could override the properties defined in the previous
                                // lines of this modifier!
                                setStyles(data.instance.popper, data.styles);

                                // any property present in `data.attributes` will be applied to the popper,
                                // they will be set as HTML attributes of the element
                                setAttributes(data.instance.popper, data.attributes);

                                // if arrowElement is defined and arrowStyles has some properties
                                if (data.arrowElement && Object.keys(data.arrowStyles).length) {
                                    setStyles(data.arrowElement, data.arrowStyles);
                                }

                                return data;
                            }

                            /**
                             * Set the x-placement attribute before everything else because it could be used
                             * to add margins to the popper margins needs to be calculated to get the
                             * correct popper offsets.
                             * @method
                             * @memberof Popper.modifiers
                             * @param {HTMLElement} reference - The reference element used to position the popper
                             * @param {HTMLElement} popper - The HTML element used as popper
                             * @param {Object} options - Popper.js options
                             */
                            function applyStyleOnLoad(reference, popper, options, modifierOptions, state) {
                                // compute reference element offsets
                                var referenceOffsets = getReferenceOffsets(state, popper, reference, options.positionFixed);

                                // compute auto placement, store placement inside the data object,
                                // modifiers will be able to edit `placement` if needed
                                // and refer to originalPlacement to know the original value
                                var placement = computeAutoPlacement(options.placement, referenceOffsets, popper, reference, options.modifiers.flip.boundariesElement, options.modifiers.flip.padding);

                                popper.setAttribute('x-placement', placement);

                                // Apply `position` to popper before anything else because
                                // without the position applied we can't guarantee correct computations
                                setStyles(popper, {position: options.positionFixed ? 'fixed' : 'absolute'});

                                return options;
                            }

                            /**
                             * @function
                             * @memberof Popper.Utils
                             * @argument {Object} data - The data object generated by `update` method
                             * @argument {Boolean} shouldRound - If the offsets should be rounded at all
                             * @returns {Object} The popper's position offsets rounded
                             *
                             * The tale of pixel-perfect positioning. It's still not 100% perfect, but as
                             * good as it can be within reason.
                             * Discussion here: https://github.com/FezVrasta/popper.js/pull/715
                             *
                             * Low DPI screens cause a popper to be blurry if not using full pixels (Safari
                             * as well on High DPI screens).
                             *
                             * Firefox prefers no rounding for positioning and does not have blurriness on
                             * high DPI screens.
                             *
                             * Only horizontal placement and left/right values need to be considered.
                             */
                            function getRoundedOffsets(data, shouldRound) {
                                var _data$offsets = data.offsets,
                                    popper = _data$offsets.popper,
                                    reference = _data$offsets.reference;
                                var round = Math.round,
                                    floor = Math.floor;

                                var noRound = function noRound(v) {
                                    return v;
                                };

                                var referenceWidth = round(reference.width);
                                var popperWidth = round(popper.width);

                                var isVertical = ['left', 'right'].indexOf(data.placement) !== -1;
                                var isVariation = data.placement.indexOf('-') !== -1;
                                var sameWidthParity = referenceWidth % 2 === popperWidth % 2;
                                var bothOddWidth = referenceWidth % 2 === 1 && popperWidth % 2 === 1;

                                var horizontalToInteger = !shouldRound ? noRound : isVertical || isVariation || sameWidthParity ? round : floor;
                                var verticalToInteger = !shouldRound ? noRound : round;

                                return {
                                    left: horizontalToInteger(bothOddWidth && !isVariation && shouldRound ? popper.left - 1 : popper.left),
                                    top: verticalToInteger(popper.top),
                                    bottom: verticalToInteger(popper.bottom),
                                    right: horizontalToInteger(popper.right)
                                };
                            }

                            var isFirefox = isBrowser && /Firefox/i.test(navigator.userAgent);

                            /**
                             * @function
                             * @memberof Modifiers
                             * @argument {Object} data - The data object generated by `update` method
                             * @argument {Object} options - Modifiers configuration and options
                             * @returns {Object} The data object, properly modified
                             */
                            function computeStyle(data, options) {
                                var x = options.x,
                                    y = options.y;
                                var popper = data.offsets.popper;

                                // Remove this legacy support in Popper.js v2

                                var legacyGpuAccelerationOption = find(data.instance.modifiers, function (modifier) {
                                    return modifier.name === 'applyStyle';
                                }).gpuAcceleration;
                                if (legacyGpuAccelerationOption !== undefined) {
                                    console.warn('WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!');
                                }
                                var gpuAcceleration = legacyGpuAccelerationOption !== undefined ? legacyGpuAccelerationOption : options.gpuAcceleration;

                                var offsetParent = getOffsetParent(data.instance.popper);
                                var offsetParentRect = getBoundingClientRect(offsetParent);

                                // Styles
                                var styles = {
                                    position: popper.position
                                };

                                var offsets = getRoundedOffsets(data, window.devicePixelRatio < 2 || !isFirefox);

                                var sideA = x === 'bottom' ? 'top' : 'bottom';
                                var sideB = y === 'right' ? 'left' : 'right';

                                // if gpuAcceleration is set to `true` and transform is supported,
                                //  we use `translate3d` to apply the position to the popper we
                                // automatically use the supported prefixed version if needed
                                var prefixedProperty = getSupportedPropertyName('transform');

                                // now, let's make a step back and look at this code closely (wtf?)
                                // If the content of the popper grows once it's been positioned, it
                                // may happen that the popper gets misplaced because of the new content
                                // overflowing its reference element
                                // To avoid this problem, we provide two options (x and y), which allow
                                // the consumer to define the offset origin.
                                // If we position a popper on top of a reference element, we can set
                                // `x` to `top` to make the popper grow towards its top instead of
                                // its bottom.
                                var left = void 0,
                                    top = void 0;
                                if (sideA === 'bottom') {
                                    // when offsetParent is <html> the positioning is relative to the bottom of the screen (excluding the scrollbar)
                                    // and not the bottom of the html element
                                    if (offsetParent.nodeName === 'HTML') {
                                        top = -offsetParent.clientHeight + offsets.bottom;
                                    } else {
                                        top = -offsetParentRect.height + offsets.bottom;
                                    }
                                } else {
                                    top = offsets.top;
                                }
                                if (sideB === 'right') {
                                    if (offsetParent.nodeName === 'HTML') {
                                        left = -offsetParent.clientWidth + offsets.right;
                                    } else {
                                        left = -offsetParentRect.width + offsets.right;
                                    }
                                } else {
                                    left = offsets.left;
                                }
                                if (gpuAcceleration && prefixedProperty) {
                                    styles[prefixedProperty] = 'translate3d(' + left + 'px, ' + top + 'px, 0)';
                                    styles[sideA] = 0;
                                    styles[sideB] = 0;
                                    styles.willChange = 'transform';
                                } else {
                                    // othwerise, we use the standard `top`, `left`, `bottom` and `right` properties
                                    var invertTop = sideA === 'bottom' ? -1 : 1;
                                    var invertLeft = sideB === 'right' ? -1 : 1;
                                    styles[sideA] = top * invertTop;
                                    styles[sideB] = left * invertLeft;
                                    styles.willChange = sideA + ', ' + sideB;
                                }

                                // Attributes
                                var attributes = {
                                    'x-placement': data.placement
                                };

                                // Update `data` attributes, styles and arrowStyles
                                data.attributes = _extends({}, attributes, data.attributes);
                                data.styles = _extends({}, styles, data.styles);
                                data.arrowStyles = _extends({}, data.offsets.arrow, data.arrowStyles);

                                return data;
                            }

                            /**
                             * Helper used to know if the given modifier depends from another one.<br />
                             * It checks if the needed modifier is listed and enabled.
                             * @method
                             * @memberof Popper.Utils
                             * @param {Array} modifiers - list of modifiers
                             * @param {String} requestingName - name of requesting modifier
                             * @param {String} requestedName - name of requested modifier
                             * @returns {Boolean}
                             */
                            function isModifierRequired(modifiers, requestingName, requestedName) {
                                var requesting = find(modifiers, function (_ref) {
                                    var name = _ref.name;
                                    return name === requestingName;
                                });

                                var isRequired = !!requesting && modifiers.some(function (modifier) {
                                    return modifier.name === requestedName && modifier.enabled && modifier.order < requesting.order;
                                });

                                if (!isRequired) {
                                    var _requesting = '`' + requestingName + '`';
                                    var requested = '`' + requestedName + '`';
                                    console.warn(requested + ' modifier is required by ' + _requesting + ' modifier in order to work, be sure to include it before ' + _requesting + '!');
                                }
                                return isRequired;
                            }

                            /**
                             * @function
                             * @memberof Modifiers
                             * @argument {Object} data - The data object generated by update method
                             * @argument {Object} options - Modifiers configuration and options
                             * @returns {Object} The data object, properly modified
                             */
                            function arrow(data, options) {
                                var _data$offsets$arrow;

                                // arrow depends on keepTogether in order to work
                                if (!isModifierRequired(data.instance.modifiers, 'arrow', 'keepTogether')) {
                                    return data;
                                }

                                var arrowElement = options.element;

                                // if arrowElement is a string, suppose it's a CSS selector
                                if (typeof arrowElement === 'string') {
                                    arrowElement = data.instance.popper.querySelector(arrowElement);

                                    // if arrowElement is not found, don't run the modifier
                                    if (!arrowElement) {
                                        return data;
                                    }
                                } else {
                                    // if the arrowElement isn't a query selector we must check that the
                                    // provided DOM node is child of its popper node
                                    if (!data.instance.popper.contains(arrowElement)) {
                                        console.warn('WARNING: `arrow.element` must be child of its popper element!');
                                        return data;
                                    }
                                }

                                var placement = data.placement.split('-')[0];
                                var _data$offsets = data.offsets,
                                    popper = _data$offsets.popper,
                                    reference = _data$offsets.reference;

                                var isVertical = ['left', 'right'].indexOf(placement) !== -1;

                                var len = isVertical ? 'height' : 'width';
                                var sideCapitalized = isVertical ? 'Top' : 'Left';
                                var side = sideCapitalized.toLowerCase();
                                var altSide = isVertical ? 'left' : 'top';
                                var opSide = isVertical ? 'bottom' : 'right';
                                var arrowElementSize = getOuterSizes(arrowElement)[len];

                                //
                                // extends keepTogether behavior making sure the popper and its
                                // reference have enough pixels in conjunction
                                //

                                // top/left side
                                if (reference[opSide] - arrowElementSize < popper[side]) {
                                    data.offsets.popper[side] -= popper[side] - (reference[opSide] - arrowElementSize);
                                }
                                // bottom/right side
                                if (reference[side] + arrowElementSize > popper[opSide]) {
                                    data.offsets.popper[side] += reference[side] + arrowElementSize - popper[opSide];
                                }
                                data.offsets.popper = getClientRect(data.offsets.popper);

                                // compute center of the popper
                                var center = reference[side] + reference[len] / 2 - arrowElementSize / 2;

                                // Compute the sideValue using the updated popper offsets
                                // take popper margin in account because we don't have this info available
                                var css = getStyleComputedProperty(data.instance.popper);
                                var popperMarginSide = parseFloat(css['margin' + sideCapitalized], 10);
                                var popperBorderSide = parseFloat(css['border' + sideCapitalized + 'Width'], 10);
                                var sideValue = center - data.offsets.popper[side] - popperMarginSide - popperBorderSide;

                                // prevent arrowElement from being placed not contiguously to its popper
                                sideValue = Math.max(Math.min(popper[len] - arrowElementSize, sideValue), 0);

                                data.arrowElement = arrowElement;
                                data.offsets.arrow = (_data$offsets$arrow = {}, defineProperty(_data$offsets$arrow, side, Math.round(sideValue)), defineProperty(_data$offsets$arrow, altSide, ''), _data$offsets$arrow);

                                return data;
                            }

                            /**
                             * Get the opposite placement variation of the given one
                             * @method
                             * @memberof Popper.Utils
                             * @argument {String} placement variation
                             * @returns {String} flipped placement variation
                             */
                            function getOppositeVariation(variation) {
                                if (variation === 'end') {
                                    return 'start';
                                } else if (variation === 'start') {
                                    return 'end';
                                }
                                return variation;
                            }

                            /**
                             * List of accepted placements to use as values of the `placement` option.<br />
                             * Valid placements are:
                             * - `auto`
                             * - `top`
                             * - `right`
                             * - `bottom`
                             * - `left`
                             *
                             * Each placement can have a variation from this list:
                             * - `-start`
                             * - `-end`
                             *
                             * Variations are interpreted easily if you think of them as the left to right
                             * written languages. Horizontally (`top` and `bottom`), `start` is left and `end`
                             * is right.<br />
                             * Vertically (`left` and `right`), `start` is top and `end` is bottom.
                             *
                             * Some valid examples are:
                             * - `top-end` (on top of reference, right aligned)
                             * - `right-start` (on right of reference, top aligned)
                             * - `bottom` (on bottom, centered)
                             * - `auto-end` (on the side with more space available, alignment depends by placement)
                             *
                             * @static
                             * @type {Array}
                             * @enum {String}
                             * @readonly
                             * @method placements
                             * @memberof Popper
                             */
                            var placements = ['auto-start', 'auto', 'auto-end', 'top-start', 'top', 'top-end', 'right-start', 'right', 'right-end', 'bottom-end', 'bottom', 'bottom-start', 'left-end', 'left', 'left-start'];

// Get rid of `auto` `auto-start` and `auto-end`
                            var validPlacements = placements.slice(3);

                            /**
                             * Given an initial placement, returns all the subsequent placements
                             * clockwise (or counter-clockwise).
                             *
                             * @method
                             * @memberof Popper.Utils
                             * @argument {String} placement - A valid placement (it accepts variations)
                             * @argument {Boolean} counter - Set to true to walk the placements counterclockwise
                             * @returns {Array} placements including their variations
                             */
                            function clockwise(placement) {
                                var counter = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

                                var index = validPlacements.indexOf(placement);
                                var arr = validPlacements.slice(index + 1).concat(validPlacements.slice(0, index));
                                return counter ? arr.reverse() : arr;
                            }

                            var BEHAVIORS = {
                                FLIP: 'flip',
                                CLOCKWISE: 'clockwise',
                                COUNTERCLOCKWISE: 'counterclockwise'
                            };

                            /**
                             * @function
                             * @memberof Modifiers
                             * @argument {Object} data - The data object generated by update method
                             * @argument {Object} options - Modifiers configuration and options
                             * @returns {Object} The data object, properly modified
                             */
                            function flip(data, options) {
                                // if `inner` modifier is enabled, we can't use the `flip` modifier
                                if (isModifierEnabled(data.instance.modifiers, 'inner')) {
                                    return data;
                                }

                                if (data.flipped && data.placement === data.originalPlacement) {
                                    // seems like flip is trying to loop, probably there's not enough space on any of the flippable sides
                                    return data;
                                }

                                var boundaries = getBoundaries(data.instance.popper, data.instance.reference, options.padding, options.boundariesElement, data.positionFixed);

                                var placement = data.placement.split('-')[0];
                                var placementOpposite = getOppositePlacement(placement);
                                var variation = data.placement.split('-')[1] || '';

                                var flipOrder = [];

                                switch (options.behavior) {
                                    case BEHAVIORS.FLIP:
                                        flipOrder = [placement, placementOpposite];
                                        break;
                                    case BEHAVIORS.CLOCKWISE:
                                        flipOrder = clockwise(placement);
                                        break;
                                    case BEHAVIORS.COUNTERCLOCKWISE:
                                        flipOrder = clockwise(placement, true);
                                        break;
                                    default:
                                        flipOrder = options.behavior;
                                }

                                flipOrder.forEach(function (step, index) {
                                    if (placement !== step || flipOrder.length === index + 1) {
                                        return data;
                                    }

                                    placement = data.placement.split('-')[0];
                                    placementOpposite = getOppositePlacement(placement);

                                    var popperOffsets = data.offsets.popper;
                                    var refOffsets = data.offsets.reference;

                                    // using floor because the reference offsets may contain decimals we are not going to consider here
                                    var floor = Math.floor;
                                    var overlapsRef = placement === 'left' && floor(popperOffsets.right) > floor(refOffsets.left) || placement === 'right' && floor(popperOffsets.left) < floor(refOffsets.right) || placement === 'top' && floor(popperOffsets.bottom) > floor(refOffsets.top) || placement === 'bottom' && floor(popperOffsets.top) < floor(refOffsets.bottom);

                                    var overflowsLeft = floor(popperOffsets.left) < floor(boundaries.left);
                                    var overflowsRight = floor(popperOffsets.right) > floor(boundaries.right);
                                    var overflowsTop = floor(popperOffsets.top) < floor(boundaries.top);
                                    var overflowsBottom = floor(popperOffsets.bottom) > floor(boundaries.bottom);

                                    var overflowsBoundaries = placement === 'left' && overflowsLeft || placement === 'right' && overflowsRight || placement === 'top' && overflowsTop || placement === 'bottom' && overflowsBottom;

                                    // flip the variation if required
                                    var isVertical = ['top', 'bottom'].indexOf(placement) !== -1;

                                    // flips variation if reference element overflows boundaries
                                    var flippedVariationByRef = !!options.flipVariations && (isVertical && variation === 'start' && overflowsLeft || isVertical && variation === 'end' && overflowsRight || !isVertical && variation === 'start' && overflowsTop || !isVertical && variation === 'end' && overflowsBottom);

                                    // flips variation if popper content overflows boundaries
                                    var flippedVariationByContent = !!options.flipVariationsByContent && (isVertical && variation === 'start' && overflowsRight || isVertical && variation === 'end' && overflowsLeft || !isVertical && variation === 'start' && overflowsBottom || !isVertical && variation === 'end' && overflowsTop);

                                    var flippedVariation = flippedVariationByRef || flippedVariationByContent;

                                    if (overlapsRef || overflowsBoundaries || flippedVariation) {
                                        // this boolean to detect any flip loop
                                        data.flipped = true;

                                        if (overlapsRef || overflowsBoundaries) {
                                            placement = flipOrder[index + 1];
                                        }

                                        if (flippedVariation) {
                                            variation = getOppositeVariation(variation);
                                        }

                                        data.placement = placement + (variation ? '-' + variation : '');

                                        // this object contains `position`, we want to preserve it along with
                                        // any additional property we may add in the future
                                        data.offsets.popper = _extends({}, data.offsets.popper, getPopperOffsets(data.instance.popper, data.offsets.reference, data.placement));

                                        data = runModifiers(data.instance.modifiers, data, 'flip');
                                    }
                                });
                                return data;
                            }

                            /**
                             * @function
                             * @memberof Modifiers
                             * @argument {Object} data - The data object generated by update method
                             * @argument {Object} options - Modifiers configuration and options
                             * @returns {Object} The data object, properly modified
                             */
                            function keepTogether(data) {
                                var _data$offsets = data.offsets,
                                    popper = _data$offsets.popper,
                                    reference = _data$offsets.reference;

                                var placement = data.placement.split('-')[0];
                                var floor = Math.floor;
                                var isVertical = ['top', 'bottom'].indexOf(placement) !== -1;
                                var side = isVertical ? 'right' : 'bottom';
                                var opSide = isVertical ? 'left' : 'top';
                                var measurement = isVertical ? 'width' : 'height';

                                if (popper[side] < floor(reference[opSide])) {
                                    data.offsets.popper[opSide] = floor(reference[opSide]) - popper[measurement];
                                }
                                if (popper[opSide] > floor(reference[side])) {
                                    data.offsets.popper[opSide] = floor(reference[side]);
                                }

                                return data;
                            }

                            /**
                             * Converts a string containing value + unit into a px value number
                             * @function
                             * @memberof {modifiers~offset}
                             * @private
                             * @argument {String} str - Value + unit string
                             * @argument {String} measurement - `height` or `width`
                             * @argument {Object} popperOffsets
                             * @argument {Object} referenceOffsets
                             * @returns {Number|String}
                             * Value in pixels, or original string if no values were extracted
                             */
                            function toValue(str, measurement, popperOffsets, referenceOffsets) {
                                // separate value from unit
                                var split = str.match(/((?:\-|\+)?\d*\.?\d*)(.*)/);
                                var value = +split[1];
                                var unit = split[2];

                                // If it's not a number it's an operator, I guess
                                if (!value) {
                                    return str;
                                }

                                if (unit.indexOf('%') === 0) {
                                    var element = void 0;
                                    switch (unit) {
                                        case '%p':
                                            element = popperOffsets;
                                            break;
                                        case '%':
                                        case '%r':
                                        default:
                                            element = referenceOffsets;
                                    }

                                    var rect = getClientRect(element);
                                    return rect[measurement] / 100 * value;
                                } else if (unit === 'vh' || unit === 'vw') {
                                    // if is a vh or vw, we calculate the size based on the viewport
                                    var size = void 0;
                                    if (unit === 'vh') {
                                        size = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
                                    } else {
                                        size = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
                                    }
                                    return size / 100 * value;
                                } else {
                                    // if is an explicit pixel unit, we get rid of the unit and keep the value
                                    // if is an implicit unit, it's px, and we return just the value
                                    return value;
                                }
                            }

                            /**
                             * Parse an `offset` string to extrapolate `x` and `y` numeric offsets.
                             * @function
                             * @memberof {modifiers~offset}
                             * @private
                             * @argument {String} offset
                             * @argument {Object} popperOffsets
                             * @argument {Object} referenceOffsets
                             * @argument {String} basePlacement
                             * @returns {Array} a two cells array with x and y offsets in numbers
                             */
                            function parseOffset(offset, popperOffsets, referenceOffsets, basePlacement) {
                                var offsets = [0, 0];

                                // Use height if placement is left or right and index is 0 otherwise use width
                                // in this way the first offset will use an axis and the second one
                                // will use the other one
                                var useHeight = ['right', 'left'].indexOf(basePlacement) !== -1;

                                // Split the offset string to obtain a list of values and operands
                                // The regex addresses values with the plus or minus sign in front (+10, -20, etc)
                                var fragments = offset.split(/(\+|\-)/).map(function (frag) {
                                    return frag.trim();
                                });

                                // Detect if the offset string contains a pair of values or a single one
                                // they could be separated by comma or space
                                var divider = fragments.indexOf(find(fragments, function (frag) {
                                    return frag.search(/,|\s/) !== -1;
                                }));

                                if (fragments[divider] && fragments[divider].indexOf(',') === -1) {
                                    console.warn('Offsets separated by white space(s) are deprecated, use a comma (,) instead.');
                                }

                                // If divider is found, we divide the list of values and operands to divide
                                // them by ofset X and Y.
                                var splitRegex = /\s*,\s*|\s+/;
                                var ops = divider !== -1 ? [fragments.slice(0, divider).concat([fragments[divider].split(splitRegex)[0]]), [fragments[divider].split(splitRegex)[1]].concat(fragments.slice(divider + 1))] : [fragments];

                                // Convert the values with units to absolute pixels to allow our computations
                                ops = ops.map(function (op, index) {
                                    // Most of the units rely on the orientation of the popper
                                    var measurement = (index === 1 ? !useHeight : useHeight) ? 'height' : 'width';
                                    var mergeWithPrevious = false;
                                    return op
                                        // This aggregates any `+` or `-` sign that aren't considered operators
                                        // e.g.: 10 + +5 => [10, +, +5]
                                        .reduce(function (a, b) {
                                            if (a[a.length - 1] === '' && ['+', '-'].indexOf(b) !== -1) {
                                                a[a.length - 1] = b;
                                                mergeWithPrevious = true;
                                                return a;
                                            } else if (mergeWithPrevious) {
                                                a[a.length - 1] += b;
                                                mergeWithPrevious = false;
                                                return a;
                                            } else {
                                                return a.concat(b);
                                            }
                                        }, [])
                                        // Here we convert the string values into number values (in px)
                                        .map(function (str) {
                                            return toValue(str, measurement, popperOffsets, referenceOffsets);
                                        });
                                });

                                // Loop trough the offsets arrays and execute the operations
                                ops.forEach(function (op, index) {
                                    op.forEach(function (frag, index2) {
                                        if (isNumeric(frag)) {
                                            offsets[index] += frag * (op[index2 - 1] === '-' ? -1 : 1);
                                        }
                                    });
                                });
                                return offsets;
                            }

                            /**
                             * @function
                             * @memberof Modifiers
                             * @argument {Object} data - The data object generated by update method
                             * @argument {Object} options - Modifiers configuration and options
                             * @argument {Number|String} options.offset=0
                             * The offset value as described in the modifier description
                             * @returns {Object} The data object, properly modified
                             */
                            function offset(data, _ref) {
                                var offset = _ref.offset;
                                var placement = data.placement,
                                    _data$offsets = data.offsets,
                                    popper = _data$offsets.popper,
                                    reference = _data$offsets.reference;

                                var basePlacement = placement.split('-')[0];

                                var offsets = void 0;
                                if (isNumeric(+offset)) {
                                    offsets = [+offset, 0];
                                } else {
                                    offsets = parseOffset(offset, popper, reference, basePlacement);
                                }

                                if (basePlacement === 'left') {
                                    popper.top += offsets[0];
                                    popper.left -= offsets[1];
                                } else if (basePlacement === 'right') {
                                    popper.top += offsets[0];
                                    popper.left += offsets[1];
                                } else if (basePlacement === 'top') {
                                    popper.left += offsets[0];
                                    popper.top -= offsets[1];
                                } else if (basePlacement === 'bottom') {
                                    popper.left += offsets[0];
                                    popper.top += offsets[1];
                                }

                                data.popper = popper;
                                return data;
                            }

                            /**
                             * @function
                             * @memberof Modifiers
                             * @argument {Object} data - The data object generated by `update` method
                             * @argument {Object} options - Modifiers configuration and options
                             * @returns {Object} The data object, properly modified
                             */
                            function preventOverflow(data, options) {
                                var boundariesElement = options.boundariesElement || getOffsetParent(data.instance.popper);

                                // If offsetParent is the reference element, we really want to
                                // go one step up and use the next offsetParent as reference to
                                // avoid to make this modifier completely useless and look like broken
                                if (data.instance.reference === boundariesElement) {
                                    boundariesElement = getOffsetParent(boundariesElement);
                                }

                                // NOTE: DOM access here
                                // resets the popper's position so that the document size can be calculated excluding
                                // the size of the popper element itself
                                var transformProp = getSupportedPropertyName('transform');
                                var popperStyles = data.instance.popper.style; // assignment to help minification
                                var top = popperStyles.top,
                                    left = popperStyles.left,
                                    transform = popperStyles[transformProp];

                                popperStyles.top = '';
                                popperStyles.left = '';
                                popperStyles[transformProp] = '';

                                var boundaries = getBoundaries(data.instance.popper, data.instance.reference, options.padding, boundariesElement, data.positionFixed);

                                // NOTE: DOM access here
                                // restores the original style properties after the offsets have been computed
                                popperStyles.top = top;
                                popperStyles.left = left;
                                popperStyles[transformProp] = transform;

                                options.boundaries = boundaries;

                                var order = options.priority;
                                var popper = data.offsets.popper;

                                var check = {
                                    primary: function primary(placement) {
                                        var value = popper[placement];
                                        if (popper[placement] < boundaries[placement] && !options.escapeWithReference) {
                                            value = Math.max(popper[placement], boundaries[placement]);
                                        }
                                        return defineProperty({}, placement, value);
                                    },
                                    secondary: function secondary(placement) {
                                        var mainSide = placement === 'right' ? 'left' : 'top';
                                        var value = popper[mainSide];
                                        if (popper[placement] > boundaries[placement] && !options.escapeWithReference) {
                                            value = Math.min(popper[mainSide], boundaries[placement] - (placement === 'right' ? popper.width : popper.height));
                                        }
                                        return defineProperty({}, mainSide, value);
                                    }
                                };

                                order.forEach(function (placement) {
                                    var side = ['left', 'top'].indexOf(placement) !== -1 ? 'primary' : 'secondary';
                                    popper = _extends({}, popper, check[side](placement));
                                });

                                data.offsets.popper = popper;

                                return data;
                            }

                            /**
                             * @function
                             * @memberof Modifiers
                             * @argument {Object} data - The data object generated by `update` method
                             * @argument {Object} options - Modifiers configuration and options
                             * @returns {Object} The data object, properly modified
                             */
                            function shift(data) {
                                var placement = data.placement;
                                var basePlacement = placement.split('-')[0];
                                var shiftvariation = placement.split('-')[1];

                                // if shift shiftvariation is specified, run the modifier
                                if (shiftvariation) {
                                    var _data$offsets = data.offsets,
                                        reference = _data$offsets.reference,
                                        popper = _data$offsets.popper;

                                    var isVertical = ['bottom', 'top'].indexOf(basePlacement) !== -1;
                                    var side = isVertical ? 'left' : 'top';
                                    var measurement = isVertical ? 'width' : 'height';

                                    var shiftOffsets = {
                                        start: defineProperty({}, side, reference[side]),
                                        end: defineProperty({}, side, reference[side] + reference[measurement] - popper[measurement])
                                    };

                                    data.offsets.popper = _extends({}, popper, shiftOffsets[shiftvariation]);
                                }

                                return data;
                            }

                            /**
                             * @function
                             * @memberof Modifiers
                             * @argument {Object} data - The data object generated by update method
                             * @argument {Object} options - Modifiers configuration and options
                             * @returns {Object} The data object, properly modified
                             */
                            function hide(data) {
                                if (!isModifierRequired(data.instance.modifiers, 'hide', 'preventOverflow')) {
                                    return data;
                                }

                                var refRect = data.offsets.reference;
                                var bound = find(data.instance.modifiers, function (modifier) {
                                    return modifier.name === 'preventOverflow';
                                }).boundaries;

                                if (refRect.bottom < bound.top || refRect.left > bound.right || refRect.top > bound.bottom || refRect.right < bound.left) {
                                    // Avoid unnecessary DOM access if visibility hasn't changed
                                    if (data.hide === true) {
                                        return data;
                                    }

                                    data.hide = true;
                                    data.attributes['x-out-of-boundaries'] = '';
                                } else {
                                    // Avoid unnecessary DOM access if visibility hasn't changed
                                    if (data.hide === false) {
                                        return data;
                                    }

                                    data.hide = false;
                                    data.attributes['x-out-of-boundaries'] = false;
                                }

                                return data;
                            }

                            /**
                             * @function
                             * @memberof Modifiers
                             * @argument {Object} data - The data object generated by `update` method
                             * @argument {Object} options - Modifiers configuration and options
                             * @returns {Object} The data object, properly modified
                             */
                            function inner(data) {
                                var placement = data.placement;
                                var basePlacement = placement.split('-')[0];
                                var _data$offsets = data.offsets,
                                    popper = _data$offsets.popper,
                                    reference = _data$offsets.reference;

                                var isHoriz = ['left', 'right'].indexOf(basePlacement) !== -1;

                                var subtractLength = ['top', 'left'].indexOf(basePlacement) === -1;

                                popper[isHoriz ? 'left' : 'top'] = reference[basePlacement] - (subtractLength ? popper[isHoriz ? 'width' : 'height'] : 0);

                                data.placement = getOppositePlacement(placement);
                                data.offsets.popper = getClientRect(popper);

                                return data;
                            }

                            /**
                             * Modifier function, each modifier can have a function of this type assigned
                             * to its `fn` property.<br />
                             * These functions will be called on each update, this means that you must
                             * make sure they are performant enough to avoid performance bottlenecks.
                             *
                             * @function ModifierFn
                             * @argument {dataObject} data - The data object generated by `update` method
                             * @argument {Object} options - Modifiers configuration and options
                             * @returns {dataObject} The data object, properly modified
                             */

                            /**
                             * Modifiers are plugins used to alter the behavior of your poppers.<br />
                             * Popper.js uses a set of 9 modifiers to provide all the basic functionalities
                             * needed by the library.
                             *
                             * Usually you don't want to override the `order`, `fn` and `onLoad` props.
                             * All the other properties are configurations that could be tweaked.
                             * @namespace modifiers
                             */
                            var modifiers = {
                                /**
                                 * Modifier used to shift the popper on the start or end of its reference
                                 * element.<br />
                                 * It will read the variation of the `placement` property.<br />
                                 * It can be one either `-end` or `-start`.
                                 * @memberof modifiers
                                 * @inner
                                 */
                                shift: {
                                    /** @prop {number} order=100 - Index used to define the order of execution */
                                    order: 100,
                                    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
                                    enabled: true,
                                    /** @prop {ModifierFn} */
                                    fn: shift
                                },

                                /**
                                 * The `offset` modifier can shift your popper on both its axis.
                                 *
                                 * It accepts the following units:
                                 * - `px` or unit-less, interpreted as pixels
                                 * - `%` or `%r`, percentage relative to the length of the reference element
                                 * - `%p`, percentage relative to the length of the popper element
                                 * - `vw`, CSS viewport width unit
                                 * - `vh`, CSS viewport height unit
                                 *
                                 * For length is intended the main axis relative to the placement of the popper.<br />
                                 * This means that if the placement is `top` or `bottom`, the length will be the
                                 * `width`. In case of `left` or `right`, it will be the `height`.
                                 *
                                 * You can provide a single value (as `Number` or `String`), or a pair of values
                                 * as `String` divided by a comma or one (or more) white spaces.<br />
                                 * The latter is a deprecated method because it leads to confusion and will be
                                 * removed in v2.<br />
                                 * Additionally, it accepts additions and subtractions between different units.
                                 * Note that multiplications and divisions aren't supported.
                                 *
                                 * Valid examples are:
                                 * ```
                                 * 10
                                 * '10%'
                                 * '10, 10'
                                 * '10%, 10'
                                 * '10 + 10%'
                                 * '10 - 5vh + 3%'
                                 * '-10px + 5vh, 5px - 6%'
                                 * ```
                                 * > **NB**: If you desire to apply offsets to your poppers in a way that may make them overlap
                                 * > with their reference element, unfortunately, you will have to disable the `flip` modifier.
                                 * > You can read more on this at this [issue](https://github.com/FezVrasta/popper.js/issues/373).
                                 *
                                 * @memberof modifiers
                                 * @inner
                                 */
                                offset: {
                                    /** @prop {number} order=200 - Index used to define the order of execution */
                                    order: 200,
                                    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
                                    enabled: true,
                                    /** @prop {ModifierFn} */
                                    fn: offset,
                                    /** @prop {Number|String} offset=0
                                     * The offset value as described in the modifier description
                                     */
                                    offset: 0
                                },

                                /**
                                 * Modifier used to prevent the popper from being positioned outside the boundary.
                                 *
                                 * A scenario exists where the reference itself is not within the boundaries.<br />
                                 * We can say it has "escaped the boundaries" — or just "escaped".<br />
                                 * In this case we need to decide whether the popper should either:
                                 *
                                 * - detach from the reference and remain "trapped" in the boundaries, or
                                 * - if it should ignore the boundary and "escape with its reference"
                                 *
                                 * When `escapeWithReference` is set to`true` and reference is completely
                                 * outside its boundaries, the popper will overflow (or completely leave)
                                 * the boundaries in order to remain attached to the edge of the reference.
                                 *
                                 * @memberof modifiers
                                 * @inner
                                 */
                                preventOverflow: {
                                    /** @prop {number} order=300 - Index used to define the order of execution */
                                    order: 300,
                                    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
                                    enabled: true,
                                    /** @prop {ModifierFn} */
                                    fn: preventOverflow,
                                    /**
                                     * @prop {Array} [priority=['left','right','top','bottom']]
                                     * Popper will try to prevent overflow following these priorities by default,
                                     * then, it could overflow on the left and on top of the `boundariesElement`
                                     */
                                    priority: ['left', 'right', 'top', 'bottom'],
                                    /**
                                     * @prop {number} padding=5
                                     * Amount of pixel used to define a minimum distance between the boundaries
                                     * and the popper. This makes sure the popper always has a little padding
                                     * between the edges of its container
                                     */
                                    padding: 5,
                                    /**
                                     * @prop {String|HTMLElement} boundariesElement='scrollParent'
                                     * Boundaries used by the modifier. Can be `scrollParent`, `window`,
                                     * `viewport` or any DOM element.
                                     */
                                    boundariesElement: 'scrollParent'
                                },

                                /**
                                 * Modifier used to make sure the reference and its popper stay near each other
                                 * without leaving any gap between the two. Especially useful when the arrow is
                                 * enabled and you want to ensure that it points to its reference element.
                                 * It cares only about the first axis. You can still have poppers with margin
                                 * between the popper and its reference element.
                                 * @memberof modifiers
                                 * @inner
                                 */
                                keepTogether: {
                                    /** @prop {number} order=400 - Index used to define the order of execution */
                                    order: 400,
                                    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
                                    enabled: true,
                                    /** @prop {ModifierFn} */
                                    fn: keepTogether
                                },

                                /**
                                 * This modifier is used to move the `arrowElement` of the popper to make
                                 * sure it is positioned between the reference element and its popper element.
                                 * It will read the outer size of the `arrowElement` node to detect how many
                                 * pixels of conjunction are needed.
                                 *
                                 * It has no effect if no `arrowElement` is provided.
                                 * @memberof modifiers
                                 * @inner
                                 */
                                arrow: {
                                    /** @prop {number} order=500 - Index used to define the order of execution */
                                    order: 500,
                                    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
                                    enabled: true,
                                    /** @prop {ModifierFn} */
                                    fn: arrow,
                                    /** @prop {String|HTMLElement} element='[x-arrow]' - Selector or node used as arrow */
                                    element: '[x-arrow]'
                                },

                                /**
                                 * Modifier used to flip the popper's placement when it starts to overlap its
                                 * reference element.
                                 *
                                 * Requires the `preventOverflow` modifier before it in order to work.
                                 *
                                 * **NOTE:** this modifier will interrupt the current update cycle and will
                                 * restart it if it detects the need to flip the placement.
                                 * @memberof modifiers
                                 * @inner
                                 */
                                flip: {
                                    /** @prop {number} order=600 - Index used to define the order of execution */
                                    order: 600,
                                    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
                                    enabled: true,
                                    /** @prop {ModifierFn} */
                                    fn: flip,
                                    /**
                                     * @prop {String|Array} behavior='flip'
                                     * The behavior used to change the popper's placement. It can be one of
                                     * `flip`, `clockwise`, `counterclockwise` or an array with a list of valid
                                     * placements (with optional variations)
                                     */
                                    behavior: 'flip',
                                    /**
                                     * @prop {number} padding=5
                                     * The popper will flip if it hits the edges of the `boundariesElement`
                                     */
                                    padding: 5,
                                    /**
                                     * @prop {String|HTMLElement} boundariesElement='viewport'
                                     * The element which will define the boundaries of the popper position.
                                     * The popper will never be placed outside of the defined boundaries
                                     * (except if `keepTogether` is enabled)
                                     */
                                    boundariesElement: 'viewport',
                                    /**
                                     * @prop {Boolean} flipVariations=false
                                     * The popper will switch placement variation between `-start` and `-end` when
                                     * the reference element overlaps its boundaries.
                                     *
                                     * The original placement should have a set variation.
                                     */
                                    flipVariations: false,
                                    /**
                                     * @prop {Boolean} flipVariationsByContent=false
                                     * The popper will switch placement variation between `-start` and `-end` when
                                     * the popper element overlaps its reference boundaries.
                                     *
                                     * The original placement should have a set variation.
                                     */
                                    flipVariationsByContent: false
                                },

                                /**
                                 * Modifier used to make the popper flow toward the inner of the reference element.
                                 * By default, when this modifier is disabled, the popper will be placed outside
                                 * the reference element.
                                 * @memberof modifiers
                                 * @inner
                                 */
                                inner: {
                                    /** @prop {number} order=700 - Index used to define the order of execution */
                                    order: 700,
                                    /** @prop {Boolean} enabled=false - Whether the modifier is enabled or not */
                                    enabled: false,
                                    /** @prop {ModifierFn} */
                                    fn: inner
                                },

                                /**
                                 * Modifier used to hide the popper when its reference element is outside of the
                                 * popper boundaries. It will set a `x-out-of-boundaries` attribute which can
                                 * be used to hide with a CSS selector the popper when its reference is
                                 * out of boundaries.
                                 *
                                 * Requires the `preventOverflow` modifier before it in order to work.
                                 * @memberof modifiers
                                 * @inner
                                 */
                                hide: {
                                    /** @prop {number} order=800 - Index used to define the order of execution */
                                    order: 800,
                                    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
                                    enabled: true,
                                    /** @prop {ModifierFn} */
                                    fn: hide
                                },

                                /**
                                 * Computes the style that will be applied to the popper element to gets
                                 * properly positioned.
                                 *
                                 * Note that this modifier will not touch the DOM, it just prepares the styles
                                 * so that `applyStyle` modifier can apply it. This separation is useful
                                 * in case you need to replace `applyStyle` with a custom implementation.
                                 *
                                 * This modifier has `850` as `order` value to maintain backward compatibility
                                 * with previous versions of Popper.js. Expect the modifiers ordering method
                                 * to change in future major versions of the library.
                                 *
                                 * @memberof modifiers
                                 * @inner
                                 */
                                computeStyle: {
                                    /** @prop {number} order=850 - Index used to define the order of execution */
                                    order: 850,
                                    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
                                    enabled: true,
                                    /** @prop {ModifierFn} */
                                    fn: computeStyle,
                                    /**
                                     * @prop {Boolean} gpuAcceleration=true
                                     * If true, it uses the CSS 3D transformation to position the popper.
                                     * Otherwise, it will use the `top` and `left` properties
                                     */
                                    gpuAcceleration: true,
                                    /**
                                     * @prop {string} [x='bottom']
                                     * Where to anchor the X axis (`bottom` or `top`). AKA X offset origin.
                                     * Change this if your popper should grow in a direction different from `bottom`
                                     */
                                    x: 'bottom',
                                    /**
                                     * @prop {string} [x='left']
                                     * Where to anchor the Y axis (`left` or `right`). AKA Y offset origin.
                                     * Change this if your popper should grow in a direction different from `right`
                                     */
                                    y: 'right'
                                },

                                /**
                                 * Applies the computed styles to the popper element.
                                 *
                                 * All the DOM manipulations are limited to this modifier. This is useful in case
                                 * you want to integrate Popper.js inside a framework or view library and you
                                 * want to delegate all the DOM manipulations to it.
                                 *
                                 * Note that if you disable this modifier, you must make sure the popper element
                                 * has its position set to `absolute` before Popper.js can do its work!
                                 *
                                 * Just disable this modifier and define your own to achieve the desired effect.
                                 *
                                 * @memberof modifiers
                                 * @inner
                                 */
                                applyStyle: {
                                    /** @prop {number} order=900 - Index used to define the order of execution */
                                    order: 900,
                                    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
                                    enabled: true,
                                    /** @prop {ModifierFn} */
                                    fn: applyStyle,
                                    /** @prop {Function} */
                                    onLoad: applyStyleOnLoad,
                                    /**
                                     * @deprecated since version 1.10.0, the property moved to `computeStyle` modifier
                                     * @prop {Boolean} gpuAcceleration=true
                                     * If true, it uses the CSS 3D transformation to position the popper.
                                     * Otherwise, it will use the `top` and `left` properties
                                     */
                                    gpuAcceleration: undefined
                                }
                            };

                            /**
                             * The `dataObject` is an object containing all the information used by Popper.js.
                             * This object is passed to modifiers and to the `onCreate` and `onUpdate` callbacks.
                             * @name dataObject
                             * @property {Object} data.instance The Popper.js instance
                             * @property {String} data.placement Placement applied to popper
                             * @property {String} data.originalPlacement Placement originally defined on init
                             * @property {Boolean} data.flipped True if popper has been flipped by flip modifier
                             * @property {Boolean} data.hide True if the reference element is out of boundaries, useful to know when to hide the popper
                             * @property {HTMLElement} data.arrowElement Node used as arrow by arrow modifier
                             * @property {Object} data.styles Any CSS property defined here will be applied to the popper. It expects the JavaScript nomenclature (eg. `marginBottom`)
                             * @property {Object} data.arrowStyles Any CSS property defined here will be applied to the popper arrow. It expects the JavaScript nomenclature (eg. `marginBottom`)
                             * @property {Object} data.boundaries Offsets of the popper boundaries
                             * @property {Object} data.offsets The measurements of popper, reference and arrow elements
                             * @property {Object} data.offsets.popper `top`, `left`, `width`, `height` values
                             * @property {Object} data.offsets.reference `top`, `left`, `width`, `height` values
                             * @property {Object} data.offsets.arrow] `top` and `left` offsets, only one of them will be different from 0
                             */

                            /**
                             * Default options provided to Popper.js constructor.<br />
                             * These can be overridden using the `options` argument of Popper.js.<br />
                             * To override an option, simply pass an object with the same
                             * structure of the `options` object, as the 3rd argument. For example:
                             * ```
                             * new Popper(ref, pop, {
                             *   modifiers: {
                             *     preventOverflow: { enabled: false }
                             *   }
                             * })
                             * ```
                             * @type {Object}
                             * @static
                             * @memberof Popper
                             */
                            var Defaults = {
                                /**
                                 * Popper's placement.
                                 * @prop {Popper.placements} placement='bottom'
                                 */
                                placement: 'bottom',

                                /**
                                 * Set this to true if you want popper to position it self in 'fixed' mode
                                 * @prop {Boolean} positionFixed=false
                                 */
                                positionFixed: false,

                                /**
                                 * Whether events (resize, scroll) are initially enabled.
                                 * @prop {Boolean} eventsEnabled=true
                                 */
                                eventsEnabled: true,

                                /**
                                 * Set to true if you want to automatically remove the popper when
                                 * you call the `destroy` method.
                                 * @prop {Boolean} removeOnDestroy=false
                                 */
                                removeOnDestroy: false,

                                /**
                                 * Callback called when the popper is created.<br />
                                 * By default, it is set to no-op.<br />
                                 * Access Popper.js instance with `data.instance`.
                                 * @prop {onCreate}
                                 */
                                onCreate: function onCreate() {
                                },

                                /**
                                 * Callback called when the popper is updated. This callback is not called
                                 * on the initialization/creation of the popper, but only on subsequent
                                 * updates.<br />
                                 * By default, it is set to no-op.<br />
                                 * Access Popper.js instance with `data.instance`.
                                 * @prop {onUpdate}
                                 */
                                onUpdate: function onUpdate() {
                                },

                                /**
                                 * List of modifiers used to modify the offsets before they are applied to the popper.
                                 * They provide most of the functionalities of Popper.js.
                                 * @prop {modifiers}
                                 */
                                modifiers: modifiers
                            };

                            /**
                             * @callback onCreate
                             * @param {dataObject} data
                             */

                            /**
                             * @callback onUpdate
                             * @param {dataObject} data
                             */

// Utils
// Methods
                            var Popper = function () {
                                /**
                                 * Creates a new Popper.js instance.
                                 * @class Popper
                                 * @param {Element|referenceObject} reference - The reference element used to position the popper
                                 * @param {Element} popper - The HTML / XML element used as the popper
                                 * @param {Object} options - Your custom options to override the ones defined in [Defaults](#defaults)
                                 * @return {Object} instance - The generated Popper.js instance
                                 */
                                function Popper(reference, popper) {
                                    var _this = this;

                                    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
                                    classCallCheck(this, Popper);

                                    this.scheduleUpdate = function () {
                                        return requestAnimationFrame(_this.update);
                                    };

                                    // make update() debounced, so that it only runs at most once-per-tick
                                    this.update = debounce(this.update.bind(this));

                                    // with {} we create a new object with the options inside it
                                    this.options = _extends({}, Popper.Defaults, options);

                                    // init state
                                    this.state = {
                                        isDestroyed: false,
                                        isCreated: false,
                                        scrollParents: []
                                    };

                                    // get reference and popper elements (allow jQuery wrappers)
                                    this.reference = reference && reference.jquery ? reference[0] : reference;
                                    this.popper = popper && popper.jquery ? popper[0] : popper;

                                    // Deep merge modifiers options
                                    this.options.modifiers = {};
                                    Object.keys(_extends({}, Popper.Defaults.modifiers, options.modifiers)).forEach(function (name) {
                                        _this.options.modifiers[name] = _extends({}, Popper.Defaults.modifiers[name] || {}, options.modifiers ? options.modifiers[name] : {});
                                    });

                                    // Refactoring modifiers' list (Object => Array)
                                    this.modifiers = Object.keys(this.options.modifiers).map(function (name) {
                                        return _extends({
                                            name: name
                                        }, _this.options.modifiers[name]);
                                    })
                                        // sort the modifiers by order
                                        .sort(function (a, b) {
                                            return a.order - b.order;
                                        });

                                    // modifiers have the ability to execute arbitrary code when Popper.js get inited
                                    // such code is executed in the same order of its modifier
                                    // they could add new properties to their options configuration
                                    // BE AWARE: don't add options to `options.modifiers.name` but to `modifierOptions`!
                                    this.modifiers.forEach(function (modifierOptions) {
                                        if (modifierOptions.enabled && isFunction(modifierOptions.onLoad)) {
                                            modifierOptions.onLoad(_this.reference, _this.popper, _this.options, modifierOptions, _this.state);
                                        }
                                    });

                                    // fire the first update to position the popper in the right place
                                    this.update();

                                    var eventsEnabled = this.options.eventsEnabled;
                                    if (eventsEnabled) {
                                        // setup event listeners, they will take care of update the position in specific situations
                                        this.enableEventListeners();
                                    }

                                    this.state.eventsEnabled = eventsEnabled;
                                }

                                // We can't use class properties because they don't get listed in the
                                // class prototype and break stuff like Sinon stubs


                                createClass(Popper, [{
                                    key: 'update',
                                    value: function update$$1() {
                                        return update.call(this);
                                    }
                                }, {
                                    key: 'destroy',
                                    value: function destroy$$1() {
                                        return destroy.call(this);
                                    }
                                }, {
                                    key: 'enableEventListeners',
                                    value: function enableEventListeners$$1() {
                                        return enableEventListeners.call(this);
                                    }
                                }, {
                                    key: 'disableEventListeners',
                                    value: function disableEventListeners$$1() {
                                        return disableEventListeners.call(this);
                                    }

                                    /**
                                     * Schedules an update. It will run on the next UI update available.
                                     * @method scheduleUpdate
                                     * @memberof Popper
                                     */


                                    /**
                                     * Collection of utilities useful when writing custom modifiers.
                                     * Starting from version 1.7, this method is available only if you
                                     * include `popper-utils.js` before `popper.js`.
                                     *
                                     * **DEPRECATION**: This way to access PopperUtils is deprecated
                                     * and will be removed in v2! Use the PopperUtils module directly instead.
                                     * Due to the high instability of the methods contained in Utils, we can't
                                     * guarantee them to follow semver. Use them at your own risk!
                                     * @static
                                     * @private
                                     * @type {Object}
                                     * @deprecated since version 1.8
                                     * @member Utils
                                     * @memberof Popper
                                     */

                                }]);
                                return Popper;
                            }();

                            /**
                             * The `referenceObject` is an object that provides an interface compatible with Popper.js
                             * and lets you use it as replacement of a real DOM node.<br />
                             * You can use this method to position a popper relatively to a set of coordinates
                             * in case you don't have a DOM node to use as reference.
                             *
                             * ```
                             * new Popper(referenceObject, popperNode);
                             * ```
                             *
                             * NB: This feature isn't supported in Internet Explorer 10.
                             * @name referenceObject
                             * @property {Function} data.getBoundingClientRect
                             * A function that returns a set of coordinates compatible with the native `getBoundingClientRect` method.
                             * @property {number} data.clientWidth
                             * An ES6 getter that will return the width of the virtual reference element.
                             * @property {number} data.clientHeight
                             * An ES6 getter that will return the height of the virtual reference element.
                             */


                            Popper.Utils = (typeof window !== 'undefined' ? window : global).PopperUtils;
                            Popper.placements = placements;
                            Popper.Defaults = Defaults;

                            /* harmony default export */
                            __webpack_exports__["a"] = (Popper);


                            /* WEBPACK VAR INJECTION */
                        }.call(this, __webpack_require__("ad89")))

                        /***/
                    }),

                    /***/ "f13c":
                    /***/ (function (module, exports, __webpack_require__) {

// 0 -> Array#forEach
// 1 -> Array#map
// 2 -> Array#filter
// 3 -> Array#some
// 4 -> Array#every
// 5 -> Array#find
// 6 -> Array#findIndex
                        var ctx = __webpack_require__("dd29");
                        var IObject = __webpack_require__("6815");
                        var toObject = __webpack_require__("4051");
                        var toLength = __webpack_require__("64d2");
                        var asc = __webpack_require__("e87c");
                        module.exports = function (TYPE, $create) {
                            var IS_MAP = TYPE == 1;
                            var IS_FILTER = TYPE == 2;
                            var IS_SOME = TYPE == 3;
                            var IS_EVERY = TYPE == 4;
                            var IS_FIND_INDEX = TYPE == 6;
                            var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
                            var create = $create || asc;
                            return function ($this, callbackfn, that) {
                                var O = toObject($this);
                                var self = IObject(O);
                                var f = ctx(callbackfn, that, 3);
                                var length = toLength(self.length);
                                var index = 0;
                                var result = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined;
                                var val, res;
                                for (; length > index; index++) if (NO_HOLES || index in self) {
                                    val = self[index];
                                    res = f(val, index, O);
                                    if (TYPE) {
                                        if (IS_MAP) result[index] = res;   // map
                                        else if (res) switch (TYPE) {
                                            case 3:
                                                return true;             // some
                                            case 5:
                                                return val;              // find
                                            case 6:
                                                return index;            // findIndex
                                            case 2:
                                                result.push(val);        // filter
                                        } else if (IS_EVERY) return false; // every
                                    }
                                }
                                return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : result;
                            };
                        };


                        /***/
                    }),

                    /***/ "f44d":
                    /***/ (function (module, exports, __webpack_require__) {

                        var isObject = __webpack_require__("df98");
                        var document = __webpack_require__("898f").document;
// typeof document.createElement is 'object' in old IE
                        var is = isObject(document) && isObject(document.createElement);
                        module.exports = function (it) {
                            return is ? document.createElement(it) : {};
                        };


                        /***/
                    }),

                    /***/ "f49a":
                    /***/ (function (module, exports) {

                        module.exports = function (it) {
                            if (typeof it != 'function') throw TypeError(it + ' is not a function!');
                            return it;
                        };


                        /***/
                    }),

                    /***/ "f650":
                    /***/ (function (module, exports, __webpack_require__) {

                        var dP = __webpack_require__("3c7a");
                        var createDesc = __webpack_require__("7174");
                        module.exports = __webpack_require__("66b6") ? function (object, key, value) {
                            return dP.f(object, key, createDesc(1, value));
                        } : function (object, key, value) {
                            object[key] = value;
                            return object;
                        };


                        /***/
                    }),

                    /***/ "fa25":
                    /***/ (function (module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
                        module.exports = !__webpack_require__("3f9f")(function () {
                            return Object.defineProperty({}, 'a', {
                                get: function () {
                                    return 7;
                                }
                            }).a != 7;
                        });


                        /***/
                    }),

                    /***/ "fbac":
                    /***/ (function (module, exports, __webpack_require__) {

                        module.exports = __webpack_require__("9b5e");

                        /***/
                    }),

                    /***/ "fc06":
                    /***/ (function (module, exports, __webpack_require__) {

                        var toInteger = __webpack_require__("7c04");
                        var max = Math.max;
                        var min = Math.min;
                        module.exports = function (index, length) {
                            index = toInteger(index);
                            return index < 0 ? max(index + length, 0) : min(index, length);
                        };


                        /***/
                    })

                    /******/
                })["default"];
        });

    }, {}],
    8: [function (require, module, exports) {
        /**
         * default settings
         *
         * @author Zongmin Lei<leizongmin@gmail.com>
         */

        var FilterCSS = require("cssfilter").FilterCSS;
        var getDefaultCSSWhiteList = require("cssfilter").getDefaultWhiteList;
        var _ = require("./util");

        function getDefaultWhiteList() {
            return {
                a: ["target", "href", "title"],
                abbr: ["title"],
                address: [],
                area: ["shape", "coords", "href", "alt"],
                article: [],
                aside: [],
                audio: ["autoplay", "controls", "loop", "preload", "src"],
                b: [],
                bdi: ["dir"],
                bdo: ["dir"],
                big: [],
                blockquote: ["cite"],
                br: [],
                caption: [],
                center: [],
                cite: [],
                code: [],
                col: ["align", "valign", "span", "width"],
                colgroup: ["align", "valign", "span", "width"],
                dd: [],
                del: ["datetime"],
                details: ["open"],
                div: [],
                dl: [],
                dt: [],
                em: [],
                font: ["color", "size", "face"],
                footer: [],
                h1: [],
                h2: [],
                h3: [],
                h4: [],
                h5: [],
                h6: [],
                header: [],
                hr: [],
                i: [],
                img: ["src", "alt", "title", "width", "height"],
                ins: ["datetime"],
                li: [],
                mark: [],
                nav: [],
                ol: [],
                p: [],
                pre: [],
                s: [],
                section: [],
                small: [],
                span: [],
                sub: [],
                sup: [],
                strong: [],
                table: ["width", "border", "align", "valign"],
                tbody: ["align", "valign"],
                td: ["width", "rowspan", "colspan", "align", "valign"],
                tfoot: ["align", "valign"],
                th: ["width", "rowspan", "colspan", "align", "valign"],
                thead: ["align", "valign"],
                tr: ["rowspan", "align", "valign"],
                tt: [],
                u: [],
                ul: [],
                video: ["autoplay", "controls", "loop", "preload", "src", "height", "width"]
            };
        }

        var defaultCSSFilter = new FilterCSS();

        /**
         * default onTag function
         *
         * @param {String} tag
         * @param {String} html
         * @param {Object} options
         * @return {String}
         */
        function onTag(tag, html, options) {
            // do nothing
        }

        /**
         * default onIgnoreTag function
         *
         * @param {String} tag
         * @param {String} html
         * @param {Object} options
         * @return {String}
         */
        function onIgnoreTag(tag, html, options) {
            // do nothing
        }

        /**
         * default onTagAttr function
         *
         * @param {String} tag
         * @param {String} name
         * @param {String} value
         * @return {String}
         */
        function onTagAttr(tag, name, value) {
            // do nothing
        }

        /**
         * default onIgnoreTagAttr function
         *
         * @param {String} tag
         * @param {String} name
         * @param {String} value
         * @return {String}
         */
        function onIgnoreTagAttr(tag, name, value) {
            // do nothing
        }

        /**
         * default escapeHtml function
         *
         * @param {String} html
         */
        function escapeHtml(html) {
            return html.replace(REGEXP_LT, "&lt;").replace(REGEXP_GT, "&gt;");
        }

        /**
         * default safeAttrValue function
         *
         * @param {String} tag
         * @param {String} name
         * @param {String} value
         * @param {Object} cssFilter
         * @return {String}
         */
        function safeAttrValue(tag, name, value, cssFilter) {
            // unescape attribute value firstly
            value = friendlyAttrValue(value);

            if (name === "href" || name === "src") {
                // filter `href` and `src` attribute
                // only allow the value that starts with `http://` | `https://` | `mailto:` | `/` | `#`
                value = _.trim(value);
                if (value === "#") return "#";
                if (
                    !(
                        value.substr(0, 7) === "http://" ||
                        value.substr(0, 8) === "https://" ||
                        value.substr(0, 7) === "mailto:" ||
                        value.substr(0, 4) === "tel:" ||
                        value[0] === "#" ||
                        value[0] === "/"
                    )
                ) {
                    return "";
                }
            } else if (name === "background") {
                // filter `background` attribute (maybe no use)
                // `javascript:`
                REGEXP_DEFAULT_ON_TAG_ATTR_4.lastIndex = 0;
                if (REGEXP_DEFAULT_ON_TAG_ATTR_4.test(value)) {
                    return "";
                }
            } else if (name === "style") {
                // `expression()`
                REGEXP_DEFAULT_ON_TAG_ATTR_7.lastIndex = 0;
                if (REGEXP_DEFAULT_ON_TAG_ATTR_7.test(value)) {
                    return "";
                }
                // `url()`
                REGEXP_DEFAULT_ON_TAG_ATTR_8.lastIndex = 0;
                if (REGEXP_DEFAULT_ON_TAG_ATTR_8.test(value)) {
                    REGEXP_DEFAULT_ON_TAG_ATTR_4.lastIndex = 0;
                    if (REGEXP_DEFAULT_ON_TAG_ATTR_4.test(value)) {
                        return "";
                    }
                }
                if (cssFilter !== false) {
                    cssFilter = cssFilter || defaultCSSFilter;
                    value = cssFilter.process(value);
                }
            }

            // escape `<>"` before returns
            value = escapeAttrValue(value);
            return value;
        }

// RegExp list
        var REGEXP_LT = /</g;
        var REGEXP_GT = />/g;
        var REGEXP_QUOTE = /"/g;
        var REGEXP_QUOTE_2 = /&quot;/g;
        var REGEXP_ATTR_VALUE_1 = /&#([a-zA-Z0-9]*);?/gim;
        var REGEXP_ATTR_VALUE_COLON = /&colon;?/gim;
        var REGEXP_ATTR_VALUE_NEWLINE = /&newline;?/gim;
        var REGEXP_DEFAULT_ON_TAG_ATTR_3 = /\/\*|\*\//gm;
        var REGEXP_DEFAULT_ON_TAG_ATTR_4 = /((j\s*a\s*v\s*a|v\s*b|l\s*i\s*v\s*e)\s*s\s*c\s*r\s*i\s*p\s*t\s*|m\s*o\s*c\s*h\s*a)\:/gi;
        var REGEXP_DEFAULT_ON_TAG_ATTR_5 = /^[\s"'`]*(d\s*a\s*t\s*a\s*)\:/gi;
        var REGEXP_DEFAULT_ON_TAG_ATTR_6 = /^[\s"'`]*(d\s*a\s*t\s*a\s*)\:\s*image\//gi;
        var REGEXP_DEFAULT_ON_TAG_ATTR_7 = /e\s*x\s*p\s*r\s*e\s*s\s*s\s*i\s*o\s*n\s*\(.*/gi;
        var REGEXP_DEFAULT_ON_TAG_ATTR_8 = /u\s*r\s*l\s*\(.*/gi;

        /**
         * escape doube quote
         *
         * @param {String} str
         * @return {String} str
         */
        function escapeQuote(str) {
            return str.replace(REGEXP_QUOTE, "&quot;");
        }

        /**
         * unescape double quote
         *
         * @param {String} str
         * @return {String} str
         */
        function unescapeQuote(str) {
            return str.replace(REGEXP_QUOTE_2, '"');
        }

        /**
         * escape html entities
         *
         * @param {String} str
         * @return {String}
         */
        function escapeHtmlEntities(str) {
            return str.replace(REGEXP_ATTR_VALUE_1, function replaceUnicode(str, code) {
                return code[0] === "x" || code[0] === "X"
                    ? String.fromCharCode(parseInt(code.substr(1), 16))
                    : String.fromCharCode(parseInt(code, 10));
            });
        }

        /**
         * escape html5 new danger entities
         *
         * @param {String} str
         * @return {String}
         */
        function escapeDangerHtml5Entities(str) {
            return str
                .replace(REGEXP_ATTR_VALUE_COLON, ":")
                .replace(REGEXP_ATTR_VALUE_NEWLINE, " ");
        }

        /**
         * clear nonprintable characters
         *
         * @param {String} str
         * @return {String}
         */
        function clearNonPrintableCharacter(str) {
            var str2 = "";
            for (var i = 0, len = str.length; i < len; i++) {
                str2 += str.charCodeAt(i) < 32 ? " " : str.charAt(i);
            }
            return _.trim(str2);
        }

        /**
         * get friendly attribute value
         *
         * @param {String} str
         * @return {String}
         */
        function friendlyAttrValue(str) {
            str = unescapeQuote(str);
            str = escapeHtmlEntities(str);
            str = escapeDangerHtml5Entities(str);
            str = clearNonPrintableCharacter(str);
            return str;
        }

        /**
         * unescape attribute value
         *
         * @param {String} str
         * @return {String}
         */
        function escapeAttrValue(str) {
            str = escapeQuote(str);
            str = escapeHtml(str);
            return str;
        }

        /**
         * `onIgnoreTag` function for removing all the tags that are not in whitelist
         */
        function onIgnoreTagStripAll() {
            return "";
        }

        /**
         * remove tag body
         * specify a `tags` list, if the tag is not in the `tags` list then process by the specify function (optional)
         *
         * @param {array} tags
         * @param {function} next
         */
        function StripTagBody(tags, next) {
            if (typeof next !== "function") {
                next = function () {
                };
            }

            var isRemoveAllTag = !Array.isArray(tags);

            function isRemoveTag(tag) {
                if (isRemoveAllTag) return true;
                return _.indexOf(tags, tag) !== -1;
            }

            var removeList = [];
            var posStart = false;

            return {
                onIgnoreTag: function (tag, html, options) {
                    if (isRemoveTag(tag)) {
                        if (options.isClosing) {
                            var ret = "[/removed]";
                            var end = options.position + ret.length;
                            removeList.push([
                                posStart !== false ? posStart : options.position,
                                end
                            ]);
                            posStart = false;
                            return ret;
                        } else {
                            if (!posStart) {
                                posStart = options.position;
                            }
                            return "[removed]";
                        }
                    } else {
                        return next(tag, html, options);
                    }
                },
                remove: function (html) {
                    var rethtml = "";
                    var lastPos = 0;
                    _.forEach(removeList, function (pos) {
                        rethtml += html.slice(lastPos, pos[0]);
                        lastPos = pos[1];
                    });
                    rethtml += html.slice(lastPos);
                    return rethtml;
                }
            };
        }

        /**
         * remove html comments
         *
         * @param {String} html
         * @return {String}
         */
        function stripCommentTag(html) {
            return html.replace(STRIP_COMMENT_TAG_REGEXP, "");
        }

        var STRIP_COMMENT_TAG_REGEXP = /<!--[\s\S]*?-->/g;

        /**
         * remove invisible characters
         *
         * @param {String} html
         * @return {String}
         */
        function stripBlankChar(html) {
            var chars = html.split("");
            chars = chars.filter(function (char) {
                var c = char.charCodeAt(0);
                if (c === 127) return false;
                if (c <= 31) {
                    if (c === 10 || c === 13) return true;
                    return false;
                }
                return true;
            });
            return chars.join("");
        }

        exports.whiteList = getDefaultWhiteList();
        exports.getDefaultWhiteList = getDefaultWhiteList;
        exports.onTag = onTag;
        exports.onIgnoreTag = onIgnoreTag;
        exports.onTagAttr = onTagAttr;
        exports.onIgnoreTagAttr = onIgnoreTagAttr;
        exports.safeAttrValue = safeAttrValue;
        exports.escapeHtml = escapeHtml;
        exports.escapeQuote = escapeQuote;
        exports.unescapeQuote = unescapeQuote;
        exports.escapeHtmlEntities = escapeHtmlEntities;
        exports.escapeDangerHtml5Entities = escapeDangerHtml5Entities;
        exports.clearNonPrintableCharacter = clearNonPrintableCharacter;
        exports.friendlyAttrValue = friendlyAttrValue;
        exports.escapeAttrValue = escapeAttrValue;
        exports.onIgnoreTagStripAll = onIgnoreTagStripAll;
        exports.StripTagBody = StripTagBody;
        exports.stripCommentTag = stripCommentTag;
        exports.stripBlankChar = stripBlankChar;
        exports.cssFilter = defaultCSSFilter;
        exports.getDefaultCSSWhiteList = getDefaultCSSWhiteList;

    }, {"./util": 11, "cssfilter": 4}],
    9: [function (require, module, exports) {
        /**
         * xss
         *
         * @author Zongmin Lei<leizongmin@gmail.com>
         */

        var DEFAULT = require("./default");
        var parser = require("./parser");
        var FilterXSS = require("./xss");

        /**
         * filter xss function
         *
         * @param {String} html
         * @param {Object} options { whiteList, onTag, onTagAttr, onIgnoreTag, onIgnoreTagAttr, safeAttrValue, escapeHtml }
         * @return {String}
         */
        function filterXSS(html, options) {
            var xss = new FilterXSS(options);
            return xss.process(html);
        }

        exports = module.exports = filterXSS;
        exports.filterXSS = filterXSS;
        exports.FilterXSS = FilterXSS;
        for (var i in DEFAULT) exports[i] = DEFAULT[i];
        for (var i in parser) exports[i] = parser[i];

// using `xss` on the browser, output `filterXSS` to the globals
        if (typeof window !== "undefined") {
            window.filterXSS = module.exports;
        }

// using `xss` on the WebWorker, output `filterXSS` to the globals
        function isWorkerEnv() {
            return typeof self !== 'undefined' && typeof DedicatedWorkerGlobalScope !== 'undefined' && self instanceof DedicatedWorkerGlobalScope;
        }

        if (isWorkerEnv()) {
            self.filterXSS = module.exports;
        }

    }, {"./default": 8, "./parser": 10, "./xss": 12}],
    10: [function (require, module, exports) {
        /**
         * Simple HTML Parser
         *
         * @author Zongmin Lei<leizongmin@gmail.com>
         */

        var _ = require("./util");

        /**
         * get tag name
         *
         * @param {String} html e.g. '<a hef="#">'
         * @return {String}
         */
        function getTagName(html) {
            var i = _.spaceIndex(html);
            if (i === -1) {
                var tagName = html.slice(1, -1);
            } else {
                var tagName = html.slice(1, i + 1);
            }
            tagName = _.trim(tagName).toLowerCase();
            if (tagName.slice(0, 1) === "/") tagName = tagName.slice(1);
            if (tagName.slice(-1) === "/") tagName = tagName.slice(0, -1);
            return tagName;
        }

        /**
         * is close tag?
         *
         * @param {String} html 如：'<a hef="#">'
         * @return {Boolean}
         */
        function isClosing(html) {
            return html.slice(0, 2) === "</";
        }

        /**
         * parse input html and returns processed html
         *
         * @param {String} html
         * @param {Function} onTag e.g. function (sourcePosition, position, tag, html, isClosing)
         * @param {Function} escapeHtml
         * @return {String}
         */
        function parseTag(html, onTag, escapeHtml) {
            "user strict";

            var rethtml = "";
            var lastPos = 0;
            var tagStart = false;
            var quoteStart = false;
            var currentPos = 0;
            var len = html.length;
            var currentTagName = "";
            var currentHtml = "";

            for (currentPos = 0; currentPos < len; currentPos++) {
                var c = html.charAt(currentPos);
                if (tagStart === false) {
                    if (c === "<") {
                        tagStart = currentPos;

                    }
                } else {
                    if (quoteStart === false) {
                        if (c === "<") {
                            rethtml += escapeHtml(html.slice(lastPos, currentPos));
                            tagStart = currentPos;
                            lastPos = currentPos;
                            continue;
                        }
                        if (c === ">") {
                            rethtml += escapeHtml(html.slice(lastPos, tagStart));
                            currentHtml = html.slice(tagStart, currentPos + 1);
                            currentTagName = getTagName(currentHtml);
                            rethtml += onTag(
                                tagStart,
                                rethtml.length,
                                currentTagName,
                                currentHtml,
                                isClosing(currentHtml)
                            );
                            lastPos = currentPos + 1;
                            tagStart = false;
                            continue;
                        }
                        if ((c === '"' || c === "'") && html.charAt(currentPos - 1) === "=") {
                            quoteStart = c;

                        }
                    } else {
                        if (c === quoteStart) {
                            quoteStart = false;

                        }
                    }
                }
            }
            if (lastPos < html.length) {
                rethtml += escapeHtml(html.substr(lastPos));
            }

            return rethtml;
        }

        var REGEXP_ILLEGAL_ATTR_NAME = /[^a-zA-Z0-9_:\.\-]/gim;

        /**
         * parse input attributes and returns processed attributes
         *
         * @param {String} html e.g. `href="#" target="_blank"`
         * @param {Function} onAttr e.g. `function (name, value)`
         * @return {String}
         */
        function parseAttr(html, onAttr) {
            "user strict";

            var lastPos = 0;
            var retAttrs = [];
            var tmpName = false;
            var len = html.length;

            function addAttr(name, value) {
                name = _.trim(name);
                name = name.replace(REGEXP_ILLEGAL_ATTR_NAME, "").toLowerCase();
                if (name.length < 1) return;
                var ret = onAttr(name, value || "");
                if (ret) retAttrs.push(ret);
            }

            // 逐个分析字符
            for (var i = 0; i < len; i++) {
                var c = html.charAt(i);
                var v, j;
                if (tmpName === false && c === "=") {
                    tmpName = html.slice(lastPos, i);
                    lastPos = i + 1;
                    continue;
                }
                if (tmpName !== false) {
                    if (
                        i === lastPos &&
                        (c === '"' || c === "'") &&
                        html.charAt(i - 1) === "="
                    ) {
                        j = html.indexOf(c, i + 1);
                        if (j === -1) {
                            break;
                        } else {
                            v = _.trim(html.slice(lastPos + 1, j));
                            addAttr(tmpName, v);
                            tmpName = false;
                            i = j;
                            lastPos = i + 1;
                            continue;
                        }
                    }
                }
                if (/\s|\n|\t/.test(c)) {
                    html = html.replace(/\s|\n|\t/g, " ");
                    if (tmpName === false) {
                        j = findNextEqual(html, i);
                        if (j === -1) {
                            v = _.trim(html.slice(lastPos, i));
                            addAttr(v);
                            tmpName = false;
                            lastPos = i + 1;

                        } else {
                            i = j - 1;

                        }
                    } else {
                        j = findBeforeEqual(html, i - 1);
                        if (j === -1) {
                            v = _.trim(html.slice(lastPos, i));
                            v = stripQuoteWrap(v);
                            addAttr(tmpName, v);
                            tmpName = false;
                            lastPos = i + 1;

                        } else {

                        }
                    }
                }
            }

            if (lastPos < html.length) {
                if (tmpName === false) {
                    addAttr(html.slice(lastPos));
                } else {
                    addAttr(tmpName, stripQuoteWrap(_.trim(html.slice(lastPos))));
                }
            }

            return _.trim(retAttrs.join(" "));
        }

        function findNextEqual(str, i) {
            for (; i < str.length; i++) {
                var c = str[i];
                if (c === " ") continue;
                if (c === "=") return i;
                return -1;
            }
        }

        function findBeforeEqual(str, i) {
            for (; i > 0; i--) {
                var c = str[i];
                if (c === " ") continue;
                if (c === "=") return i;
                return -1;
            }
        }

        function isQuoteWrapString(text) {
            if (
                (text[0] === '"' && text[text.length - 1] === '"') ||
                (text[0] === "'" && text[text.length - 1] === "'")
            ) {
                return true;
            } else {
                return false;
            }
        }

        function stripQuoteWrap(text) {
            if (isQuoteWrapString(text)) {
                return text.substr(1, text.length - 2);
            } else {
                return text;
            }
        }

        exports.parseTag = parseTag;
        exports.parseAttr = parseAttr;

    }, {"./util": 11}],
    11: [function (require, module, exports) {
        module.exports = {
            indexOf: function (arr, item) {
                var i, j;
                if (Array.prototype.indexOf) {
                    return arr.indexOf(item);
                }
                for (i = 0, j = arr.length; i < j; i++) {
                    if (arr[i] === item) {
                        return i;
                    }
                }
                return -1;
            },
            forEach: function (arr, fn, scope) {
                var i, j;
                if (Array.prototype.forEach) {
                    return arr.forEach(fn, scope);
                }
                for (i = 0, j = arr.length; i < j; i++) {
                    fn.call(scope, arr[i], i, arr);
                }
            },
            trim: function (str) {
                if (String.prototype.trim) {
                    return str.trim();
                }
                return str.replace(/(^\s*)|(\s*$)/g, "");
            },
            spaceIndex: function (str) {
                var reg = /\s|\n|\t/;
                var match = reg.exec(str);
                return match ? match.index : -1;
            }
        };

    }, {}],
    12: [function (require, module, exports) {
        /**
         * filter xss
         *
         * @author Zongmin Lei<leizongmin@gmail.com>
         */

        var FilterCSS = require("cssfilter").FilterCSS;
        var DEFAULT = require("./default");
        var parser = require("./parser");
        var parseTag = parser.parseTag;
        var parseAttr = parser.parseAttr;
        var _ = require("./util");

        /**
         * returns `true` if the input value is `undefined` or `null`
         *
         * @param {Object} obj
         * @return {Boolean}
         */
        function isNull(obj) {
            return obj === undefined || obj === null;
        }

        /**
         * get attributes for a tag
         *
         * @param {String} html
         * @return {Object}
         *   - {String} html
         *   - {Boolean} closing
         */
        function getAttrs(html) {
            var i = _.spaceIndex(html);
            if (i === -1) {
                return {
                    html: "",
                    closing: html[html.length - 2] === "/"
                };
            }
            html = _.trim(html.slice(i + 1, -1));
            var isClosing = html[html.length - 1] === "/";
            if (isClosing) html = _.trim(html.slice(0, -1));
            return {
                html: html,
                closing: isClosing
            };
        }

        /**
         * shallow copy
         *
         * @param {Object} obj
         * @return {Object}
         */
        function shallowCopyObject(obj) {
            var ret = {};
            for (var i in obj) {
                ret[i] = obj[i];
            }
            return ret;
        }

        /**
         * FilterXSS class
         *
         * @param {Object} options
         *        whiteList, onTag, onTagAttr, onIgnoreTag,
         *        onIgnoreTagAttr, safeAttrValue, escapeHtml
         *        stripIgnoreTagBody, allowCommentTag, stripBlankChar
         *        css{whiteList, onAttr, onIgnoreAttr} `css=false` means don't use `cssfilter`
         */
        function FilterXSS(options) {
            options = shallowCopyObject(options || {});

            if (options.stripIgnoreTag) {
                if (options.onIgnoreTag) {
                    console.error(
                        'Notes: cannot use these two options "stripIgnoreTag" and "onIgnoreTag" at the same time'
                    );
                }
                options.onIgnoreTag = DEFAULT.onIgnoreTagStripAll;
            }

            options.whiteList = options.whiteList || DEFAULT.whiteList;
            options.onTag = options.onTag || DEFAULT.onTag;
            options.onTagAttr = options.onTagAttr || DEFAULT.onTagAttr;
            options.onIgnoreTag = options.onIgnoreTag || DEFAULT.onIgnoreTag;
            options.onIgnoreTagAttr = options.onIgnoreTagAttr || DEFAULT.onIgnoreTagAttr;
            options.safeAttrValue = options.safeAttrValue || DEFAULT.safeAttrValue;
            options.escapeHtml = options.escapeHtml || DEFAULT.escapeHtml;
            this.options = options;

            if (options.css === false) {
                this.cssFilter = false;
            } else {
                options.css = options.css || {};
                this.cssFilter = new FilterCSS(options.css);
            }
        }

        /**
         * start process and returns result
         *
         * @param {String} html
         * @return {String}
         */
        FilterXSS.prototype.process = function (html) {
            // compatible with the input
            html = html || "";
            html = html.toString();
            if (!html) return "";

            var me = this;
            var options = me.options;
            var whiteList = options.whiteList;
            var onTag = options.onTag;
            var onIgnoreTag = options.onIgnoreTag;
            var onTagAttr = options.onTagAttr;
            var onIgnoreTagAttr = options.onIgnoreTagAttr;
            var safeAttrValue = options.safeAttrValue;
            var escapeHtml = options.escapeHtml;
            var cssFilter = me.cssFilter;

            // remove invisible characters
            if (options.stripBlankChar) {
                html = DEFAULT.stripBlankChar(html);
            }

            // remove html comments
            if (!options.allowCommentTag) {
                html = DEFAULT.stripCommentTag(html);
            }

            // if enable stripIgnoreTagBody
            var stripIgnoreTagBody = false;
            if (options.stripIgnoreTagBody) {
                var stripIgnoreTagBody = DEFAULT.StripTagBody(
                    options.stripIgnoreTagBody,
                    onIgnoreTag
                );
                onIgnoreTag = stripIgnoreTagBody.onIgnoreTag;
            }

            var retHtml = parseTag(
                html,
                function (sourcePosition, position, tag, html, isClosing) {
                    var info = {
                        sourcePosition: sourcePosition,
                        position: position,
                        isClosing: isClosing,
                        isWhite: whiteList.hasOwnProperty(tag)
                    };

                    // call `onTag()`
                    var ret = onTag(tag, html, info);
                    if (!isNull(ret)) return ret;

                    if (info.isWhite) {
                        if (info.isClosing) {
                            return "</" + tag + ">";
                        }

                        var attrs = getAttrs(html);
                        var whiteAttrList = whiteList[tag];
                        var attrsHtml = parseAttr(attrs.html, function (name, value) {
                            // call `onTagAttr()`
                            var isWhiteAttr = _.indexOf(whiteAttrList, name) !== -1;
                            var ret = onTagAttr(tag, name, value, isWhiteAttr);
                            if (!isNull(ret)) return ret;

                            if (isWhiteAttr) {
                                // call `safeAttrValue()`
                                value = safeAttrValue(tag, name, value, cssFilter);
                                if (value) {
                                    return name + '="' + value + '"';
                                } else {
                                    return name;
                                }
                            } else {
                                // call `onIgnoreTagAttr()`
                                var ret = onIgnoreTagAttr(tag, name, value, isWhiteAttr);
                                if (!isNull(ret)) return ret;

                            }
                        });

                        // build new tag html
                        var html = "<" + tag;
                        if (attrsHtml) html += " " + attrsHtml;
                        if (attrs.closing) html += " /";
                        html += ">";
                        return html;
                    } else {
                        // call `onIgnoreTag()`
                        var ret = onIgnoreTag(tag, html, info);
                        if (!isNull(ret)) return ret;
                        return escapeHtml(html);
                    }
                },
                escapeHtml
            );

            // if enable stripIgnoreTagBody
            if (stripIgnoreTagBody) {
                retHtml = stripIgnoreTagBody.remove(retHtml);
            }

            return retHtml;
        };

        module.exports = FilterXSS;

    }, {"./default": 8, "./parser": 10, "./util": 11, "cssfilter": 4}],
    13: [function (require, module, exports) {
        var tpl = require('./answer_item.tpl');
        var shareGroup = require('../../../widget/sharegroup/sharegroup');
        var comment = require('../../../widget/comment/comment');
        var login = require('../../../widget/login/login');
        var xss = require("xss");
        var followBtn = require('../../../widget/follow-btn/btn');
        var answer = require('../../../widget/answer/answer');
        var informModal = require('../../../widget/inform-modal/inform-modal');
        var util = require('../../../widget/util');
        require('../../../widget/like/like');
        require('../../../widget/like/unlike');
        require('../../../widget/white-list-card/white-list-card');
        require('../../../ui/toast/toast');

        module.exports = Vue.component('w-question-answer-item', {
            template: tpl,
            data: function () {
                return {
                    answerContent: ''
                };
            },
            props: ['answer', 'unfold', 'question', 'itemIndex'],
            computed: {
                pageType: function () {
                    return this.$store.state.page_type;
                },
                getItemProp: function () {
                    if (this.pageType == 'qid') {
                        return this.itemIndex == 0 ? 'acceptedAnswer' : this.itemIndex == 1 ? 'suggestedAnswer' : false;
                    } else {
                        return this.itemIndex == 0 ? 'mainEntityOfPage' : false;
                    }
                },
                microDataNum: function () {
                    return this.pageType == 'qid' ? 2 : 1;
                },
                showV: function () {
                    var authInfo = this.answer.user.user_auth_info;
                    var authType;
                    if (authInfo) {
                        try {
                            authType = JSON.parse(authInfo).auth_type;
                        } catch (e) {
                        }
                    }
                    return authType && authType != 3;
                },
                formattedBrowCount: function () {
                    return util.formatNumber(this.answer.brow_count);
                },
                formattedShowCount: function () {
                    return util.formatNumber(this.answer.show_count);
                },
                formattedDiggCount: function () {
                    return util.formatNumber(this.answer.digg_count);
                }
            },
            created: function () {
                var tempContent = this.answer.content.replace(/<h1>(.*?)<\/h1>/ig, '<h2>$1</h2>');
                // fix xss bug by linyu.yulin for http://sysworkflow.bytedance.net/track/32046
                tempContent = tempContent.replace(/{!--\s*PGC_VIDEO:(.*)--}/, function (match, p1, offset) {
                    var newP1 = xss(p1);
                    return '{!-- PGC_VIDEO:' + newP1 + '--}';
                });
                this.answerContent = tempContent;
                this.foldImage();
                this.urlRoot = '/wenda/web/';
            },
            mounted: function () {
                var $el = $('<div></div>').appendTo(this.$el);
                this.shareGroup = new shareGroup({
                    el: $el[0]
                });
                this.formatImage();
                this.bindFoldImageEvent();
                this.share();
                this.insertShopCard();
            },
            methods: {
                inform: function () {
                    var _this = this;
                    new informModal({
                        data: {
                            ansid: _this.answer.ansid,
                            from: 'Answer'
                        }
                    });
                },
                isMyAnswer: function () {
                    return this.$store.state.userData.user_id == this.answer.user.user_id;
                },
                getExpandContent: function (content, content_abstract, noAbstract, max_word_count) {
                    return $.expand(content, content_abstract, noAbstract, max_word_count);
                },
                editAnswer: function (e) {
                    if (this.answer && this.answer.disable_edit) {
                        $('body').toast({status: 'success', text: this.answer.edit_tips || '该内容无法修改', keep: 3000});
                        return;
                    }
                    var $target = $(e.currentTarget);
                    var ansid = $target.attr('data-ansid');
                    var data = {
                        qid: this.question.qid,
                        title: this.question.title,
                        abstractText: this.question.content.text,
                        ansid: ansid,
                        isEdit: true,
                        url: this.answer.link_url,
                        star_order_id: this.answer.star_order_id
                    };
                    data.initContent = $target.closest('.answer-item').find('.answer-text-full').data('originhtml');
                    new answer({
                        data: {
                            answer: data
                        }
                    });
                },
                showComment: function (e) {
                    var $target = $(e.currentTarget);
                    var $wrapper = $target.closest('.answer-item').find('.comment-container');
                    if (!$wrapper.attr('comment-init')) {
                        var ansid = $target.attr('data-ansid');
                        var _obj_comment = new comment({
                            el: $('<div></div>').appendTo($wrapper)[0],
                            data: {
                                ansid: ansid,
                                answer_uid: $target.data('answer-uid')
                            }
                        });
                        if ($target.data('is_ban_comment')) {
                            _obj_comment.forbidden();
                        }
                        $wrapper.attr('comment-init', 1);
                        _obj_comment.$on('comment.delete', function () {
                            var $comment = $wrapper.parent().find('.show-comment');
                            var html = $comment.html();
                            $comment.html(html.replace(/(\d+)评论/, function ($1, $2) {
                                if ($2 && $2 - 1 > 0) {
                                    return $2 - 1 + '评论';
                                } else {
                                    return '评论';
                                }
                            }));
                        });
                        _obj_comment.$on('comment.total_count.change', function (count) {
                            var $comment = $wrapper.parent().find('.show-comment');
                            var html = $comment.html();
                            $comment.html(html.replace(/(\d+)评论/, function ($1, $2) {
                                if (count > 0) {
                                    return count + '评论';
                                } else {
                                    return '评论';
                                }
                            }));
                        });
                    }
                    $wrapper.toggleClass('hide');
                    var target = $(e.target);
                    if (target.parents('.answer-text.fixed')) {
                        this.scrollUp(target);
                    }
                },
                scrollUp: function (target) {
                    var height = $('.title-fixed').height();
                    var padding = 200;
                    var offset = target.parents('.answer-text').siblings('.comment-container:not(.hide)').offset();
                    offset && $('html, body').animate({scrollTop: offset.top - padding - height}, 200);
                },
                share: function (e) {
                    var $target = $(this.$el).find('.share-group');
                    this.shareGroup.show(
                        {
                            'wap-url': 'https://www.wukong.com/answer/' + this.answer.ansid + '/?from=pcshare',
                            'web-url': 'https://www.wukong.com/answer/' + this.answer.ansid + '/?from=pcshare',
                            title: '悟空问答-' + this.question.title + '(' + this.answer.user.uname + '的回答,' + this.answer.digg_count + '赞)',
                            image: this.answer.content_abstract.image_url || 'http://s0.pstatp.com/toutiao/resource/forum_wap/static/image/logo_366c1b5.png',
                            summary: this.answer.content_abstract.text.substr(0, 200) + '...',
                            showQrAtOnce: 0
                        }, $target
                    );
                },
                closeShareGroup: function () {
                    this.shareGroup.hide();
                },
                showFull: function (e) {
                    var $target = $(e.currentTarget);
                    $target.hide();
                    $target.parent().removeClass('fold');
                },
                like: function (e) {

                    /* 判断登录 */
                    if (window.wenda.userData.is_login == 0) {
                        login.getLogin();
                        return false;
                    }
                    var $target = $(e.currentTarget);
                    var ansid = $target.closest('[data-node="answer-item"]').data('ansid');
                    var count = $target.find('[data-node="like-count"]').text();
                    if (!$target.hasClass('like')) {
                        this.$once('change:like', function () {
                            $target.addClass('like');
                            $target.find('[data-node="like-count"]').text(++count);
                        });
                        this.doLike(ansid);
                    }
                },
                doLike: function (ansid) {
                    var me = this;
                    if (!ansid) {
                        return false;
                    }
                    var url = this.urlRoot + 'commit/digg/';
                    $.Ajax(url, {
                        type: 'POST',
                        data: {
                            ansid: ansid
                        },
                        success: function (data) {
                            me.$emit('change:like');
                        }
                    });
                },
                dislike: function (e) {

                    /* 判断登录 */
                    if (window.wenda.userData.is_login == 0) {
                        login.getLogin();
                        return false;
                    }
                    var $target = $(e.currentTarget);
                    var ansid = $target.closest('[data-node="answer-item"]').data('ansid');
                    if (!$target.hasClass('like')) {
                        this.$once('change:dislike', function () {
                            $target.addClass('dislike');
                        });
                        this.doDislike(ansid);
                    }
                },
                doDislike: function (ansid) {
                    var me = this;
                    if (!ansid) {
                        return false;
                    }
                    var url = this.urlRoot + 'commit/bury/';
                    $.Ajax(url, {
                        type: 'POST',
                        data: {
                            ansid: ansid
                        },
                        success: function (data) {
                            me.$emit('change:dislike');
                        }
                    });
                },
                formatImage: function () {
                    var _this = this;
                    $(this.$el).find('.rich-text img').each(function (idx, item) {
                        var $item = $(item);
                        var h = $item.attr('img_height'),
                            w = $item.attr('img_width'),
                            r = h / w;
                        if (r > 0.8 && r < 2 && h > 600) {
                            $item.addClass('small');
                            _this.imageAction($item);
                        }
                        if (w && w > 0 && h && h > 0) {
                            item.width = w;
                            item.height = h;
                        }
                    });
                },
                imageAction: function ($item) {
                    var _this = this;
                    $item.on('click', function () {
                        $item.toggleClass('large').toggleClass('small');
                        var tool = $(_this.$el).find('.answer-text')[0];
                        if (_this.isToolShouldFixed(tool)) {
                            $(tool).addClass('fixed');
                        } else {
                            $(tool).removeClass('fixed');
                        }
                    });
                },
                isToolShouldFixed: function (el) {
                    var HEIGHT = $(window).height();
                    var rect = el.getBoundingClientRect();
                    return (
                        rect.top + rect.height > HEIGHT - 12
                        && rect.top < HEIGHT / 2
                    );
                },
                foldImage: function () {
                    this.answerContent = util.foldImage(this.answerContent, this.answer.ansid);
                },
                bindFoldImageEvent: function () {
                    util.bindfoldImageEvent(this.$el);
                },
                insertShopCard: function () {
                    $(this.$el).find('.tt-commodity-card').each(function (index, item) {
                        try {
                            var data = JSON.parse($(item).attr('data-content'));
                            var discountText = data.sec_kill && data.sec_kill.title || data.coupon_tt && data.coupon_tt.title;
                            var dom = (`
                        <a class="commodity-card" href="${data.charge_url}" target="_blank">
                            <div class="commodity-card-left">
                                <img class="card-left-img" src="${data.img_url}" />
                            </div>
                            <div class="commodity-card-right">
                                <div class="card-right-title">${data.card_title}</div>
                                <div class="card-right-info">
                                    ${data.sec_kill ? ('<div class="right-info-miaosha"><div class="info-miaosha-text">秒杀</div></div>') : ''}
                                    ${data.sales ? '<div class="right-info-solid">已售' + data.sales + '件</div>' : ''}
                                    ${data.source && data.sales ? ('<div class="right-info-split" />') : ''}
                                    ${data.source ? '<div class="right-info-source">' + data.source + '</div>' : ''}
                                </div>
                                <div class="card-right-price">
                                    ${data.price ? '<div class="right-price-now">￥' + data.price + '</div>' : ''}
                                    ${data.original_price && data.price && data.original_price > data.price ? '<div class="right-price-other right-price-old">￥' + data.original_price + '</div>' : ''}
                                    ${discountText ? '<div class="right-price-other right-price-discount"><div class="discount-text">' + discountText + '</div></div>' : '<div class="right-price-placeholder" />'}
                                    <div class="right-price-goto">去看看</div>
                                </div>
                            </div>
                        </a>
                    `);
                            $(item).append(dom);
                        } catch (e) {
                            console.log(e);
                        }
                    })
                }
            }
        });

    }, {
        "../../../ui/toast/toast": 18,
        "../../../widget/answer/answer": 24,
        "../../../widget/comment/comment": 45,
        "../../../widget/follow-btn/btn": 52,
        "../../../widget/inform-modal/inform-modal": 59,
        "../../../widget/like/like": 71,
        "../../../widget/like/unlike": 73,
        "../../../widget/login/login": 75,
        "../../../widget/sharegroup/sharegroup": 99,
        "../../../widget/util": 127,
        "../../../widget/white-list-card/white-list-card": 128,
        "./answer_item.tpl": 14,
        "xss": 9
    }],
    14: [function (require, module, exports) {
        module.exports = "<div data-node=\"answer-item\" :data-ansid=\"answer.ansid\"  class=\"answer-item sticky-item\" :itemscope=\"itemIndex<microDataNum\" :itemtype=\"itemIndex<microDataNum?'http://schema.org/Answer':false\" :itemprop=\"getItemProp\">\n    <meta itemprop=\"upvoteCount\" :content=\"answer.digg_count\" v-if=\"itemIndex<microDataNum\"/>\n    <meta itemprop=\"url\" :content=\"'https://www.wukong.com/answer/'+answer.ansid+'/'\" v-if=\"itemIndex<microDataNum\"/>\n    <meta itemprop=\"commentCount\" :content=\"answer.comment_count||0\" v-if=\"itemIndex<microDataNum\"/>\n    <meta itemprop=\"dateCreated\" :content=\"new Date(answer.create_time*1000).toString()\" v-if=\"itemIndex<microDataNum\"/>\n\n    <a :href=\"'/answer/' + answer.ansid + '/'\" class=\"seo-link\"></a>\n    <div class=\"fake-cover\"></div>\n    <div class=\"answer-user\" data-log-from=\"!Question\" :itemscope=\"itemIndex<microDataNum\" :itemtype=\"itemIndex<microDataNum?'http://schema.org/Person':false\" :itemprop=\"itemIndex<microDataNum?'author':false\">\n        <meta itemprop=\"url\" :content=\"'https://www.wukong.com/user/?uid='+answer.user.user_id\" v-if=\"itemIndex<microDataNum\"/>\n        <meta itemprop=\"name\" :content=\"answer.user.uname\" v-if=\"itemIndex<microDataNum\"/>\n        <meta itemprop=\"description\" :content=\"answer.user.user_intro\" v-if=\"itemIndex<microDataNum&&answer.user.user_intro\"/>\n        <a :href=\"'/user/?uid=' + answer.user.user_id\" class=\"answer-user-avatar\" target=\"_blank\" data-log=\"Visit_Profile|From_ProfilePic\">\n            <img class=\"\" :src=\"answer.user.avatar_url\" alt=\"\" :itemprop=\"itemIndex<microDataNum?'image':false\"/>\n        </a>\n\n        <a class=\"answer-user-name\" :href=\"'/user/?uid=' + answer.user.user_id\" target=\"_blank\" data-log=\"Visit_Profile|From_ProfilePic\">\n            {{ answer.user.uname }}\n            <i class=\"iconfont icon-all_newv\" style=\"font-size: 14px;color: #ffc41c;\" v-if=\"showV\"></i>\n            <span class=\"user-intro\" v-if=\"answer.user.user_intro\">{{ answer.user.user_intro }}</span>\n        </a>\n\n        <a class=\"answer-user-tag\" :href=\"'/answer/' + answer.ansid + '/'\">{{ answer.show_time }}</a>\n        <template v-if=\"isMyAnswer(answer)\">\n            <div class=\"self-info\">\n                {{ formattedShowCount }}{{answer.show_text || '阅读'}}<i> · </i>{{ formattedDiggCount }}赞\n            </div>\n        </template>\n        <template v-else>\n            <w-follow-btn :userData=\"answer.user\"></w-follow-btn>\n        </template>\n    </div>\n    <div class=\"answer-text clean h_1200\" :class=\"{fold: !unfold}\">\n        <div class=\"answer-text-full rich-text\" v-html=\"answerContent\" :itemprop=\"itemIndex<microDataNum?'text':false\"></div>\n        <a class=\"j-expand-showfull expand-bottom\"  href=\"javascript:;\"  @click=\"showFull\" v-if=\"!unfold\">展开全部</a>\n        <w-white-list-card :user=\"answer.user\" v-if=\"answer.user.is_cooper\"></w-white-list-card>\n        <div class=\"answer-tool\">\n            <div class=\"comment-tool\">\n                <!-- <a data-node=\"del\" class=\"answer-delete\" style=\"margin-left:40px\" href=\"javascript:;\" v-if=\"isMyAnswer(item)\">刪除</a> -->\n                <!-- <div data-node=\"like\" class=\"answer-like\" :class=\"{like:answer.is_digg}\" data-log=\"Like|From_\" @click=\"like\">\n                    <i class=\"iconfont icon-digg_clicked\"></i>\n                    <span data-node=\"like-count\">{{ answer.digg_count }}</span>赞\n                </div>\n                <div data-node=\"dislike\" class=\"answer-dislike\" data-log=\"Downvote|From_\" :class=\"{dislike:answer.is_bury}\" @click=\"dislike\">\n                    <i class=\"iconfont icon-ask_stamp\"></i>\n                    踩\n                </div> -->\n                <w-like :answer=\"answer\" class=\"answer-like-count\"></w-like>\n                <w-unlike :answer=\"answer\" class=\"answer-dislike-count\"></w-unlike>\n                <a data-node=\"show-comment\" class=\"show-comment\"\n                    href=\"javascript:;\" :data-ansid =\"answer.ansid\" :data-answer-uid=\"answer.user.user_id\" :data-is_ban_comment=\"answer.is_ban_comment\"  data-log=\"Visit_Comment|From_\" @click=\"showComment\">\n                    <i class=\"iconfont icon-ask_comment\"></i>\n                    {{ answer.comment_count || '' }}评论\n\n                </a>\n                <div data-node=\"share-group\" class=\"share-group share-anchor\"\n                 :data-ansid=\"answer.ansid\">\n                     <i class=\"iconfont icon-share-home\"></i>\n                     <span class=\"share\">分享</span>\n                 </div>\n                 <div class=\"inform\" @click=\"inform\" v-if=\"!isMyAnswer()\">\n                    <i class=\"iconfont icon-CombinedShape\"></i>\n                    <span data-log=\"PopUp_Inform|From_informAnswer\">举报</span>\n                </div>\n            </div>\n\n            <a\n                data-node=\"editAnswer\"\n                :data-ansid=\"answer.ansid\"\n                :data-is_ban_comment=\"answer.is_ban_comment\"\n                :data-is_star_order_accepted=\"answer.is_star_order_accepted\"\n                :class=\"{ 'answer-delete': true, 'no-edit': !!answer.disable_edit}\"\n                style=\"margin-left:40px\"\n                href=\"javascript:;\"\n                v-if=\"isMyAnswer(answer)\"\n                @click=\"editAnswer\"\n            >编辑</a>\n            <div class=\"outside-link\" v-if=\"answer.link_url\">\n                <a :href=\"answer.link_url\" target=\"_blank\" rel=\"nofollow\">了解更多</a>\n                <i class=\"iconfont icon-ask_arrow_right\" v-if=\"!isMyAnswer(answer)\"></i>\n            </div>\n        </div>\n    </div>\n    <div class=\"comment-container hide\"></div>\n</div>\n";

    }, {}],
    15: [function (require, module, exports) {
        require('./answer_item/answer_item');
        var header = require('../../widget/header/header');
        var sidebar = require('../../widget/sidebar/sidebar');
        var gototop = require('../../widget/gototop/gototop');
        var shareGroup = require('../../widget/sharegroup/sharegroup');
        var answer = require('../../widget/answer/answer');
        var answer_inline = require('../../widget/answer/answer_inline');
        var comment = require('../../widget/comment/comment');
        var gallery = require('../../widget/gallery/gallery');
        var inviteAnswer = require('../../widget/invite/invite-answer/invite-answer');
        var answerSetting = require('../../widget/answer/setting/setting');
        var model_feed_question = require('../../widget/model/feed_question');
        var confirm = require('../../widget/answer-nointerest/confirm');
        var login = require('../../widget/login/login');
        require('../../widget/question/question-v3');
        var questionTag = require('../../widget/question/tag/tag');
        var Assist = require('../../widget/assist-btn/assist-btn');
        var toast = require('../../ui/toast/toast.js');
        var informModal = require('../../widget/inform-modal/inform-modal');
        var acrawler = require('byted-acrawler');
        var inviteSharegroup = require('../../widget/invite-sharegroup/invite-sharegroup');
        var UTILS = require('../../widget/util');

        function removeEmptyTag() {
            $('.rich-text').find('p,div').each(function (index, item) {
                var $item = $(item);
                if (!$item.html() && !item.className) {
                    $item.remove();
                }
            });
        }


        module.exports = Vue.extend({
            template: require('./app.tpl'),
            data: function () {
                return {
                    answerFolderFlag: 1,
                    loadingLock: false,
                    has_more: this.$store.state.qData.data.has_more,
                    normal_has_more: false,
                    offset: this.$store.state.qData.data.offset,
                    isLoading: false,
                    concern_id: '6300775428692904450',
                    nice_ans_list: this.$store.state.qData.data.ans_list,
                    normal_ans_list: [],
                    relateFeeds: [],
                    req_type: 1,
                    ansid: this.$store.state.qData.data.ans_list.length ? this.$store.state.qData.data.ans_list[0].ansid : undefined,
                    showCommentAnsid: undefined,
                    ansids: {},
                    userFixed: null,
                    showHot: 0,
                    showInviteQuest: false,
                    showGuess: false,
                    top: false,
                    toMinor: {},
                    toMain: {},
                    type: '',
                    lastScrollTop: 0,
                    hasSugLayer: false,
                    changeSearchWord: '',
                    enterCommentId: null,
                    bonus: '',
                    question_tips: '',
                    question_answered_tips: ''
                };
            },
            computed: {
                hotTipsClass: function () {
                    var tip_id = this.$store.state.qData.question_hot_tips.tip_id;
                    if (tip_id === 1) {
                        return 'question-hot-tips-1';
                    } else if (tip_id === 2) {
                        return 'question-hot-tips-2';
                    } else if (tip_id === 3) {
                        return 'question-hot-tips-3';
                    } else {
                        return ''
                    }
                },
                QData: function () {
                    return this.$store.state.qData;
                },
                question: function () {
                    return (this.$store.state.qData.data.question || [{}])[0];
                },
                qid: function () {
                    return this.question.qid;
                },
                title: function () {
                    return this.question.title;
                },
                abstractText: function () {
                    return this.question.content.text.replace(/\s/ig, '');
                },
                answers: function () {
                    return this.$store.state.qData.data.ans_list;
                },
                isMyQuestion: function () {
                    return !!this.question.user && (this.question.user.user_id == this.$store.state.userData.user_id);
                },
                page_title: function () {
                    if (this.$store.state.page_type == 'qid') {
                        return (this.question.title || '该问题不存在') + '-悟空问答';
                    } else {
                        return (this.question.title || '该问题不存在') + (this.answers.length ? '-' + this.answers[0].user.uname + '的回答' : '') + '-悟空问答';
                    }
                },
                keywords: function () {
                    if (this.$store.state.qData.key_word.length >= 5) {
                        return this.$store.state.qData.key_word.slice(0, 5).join(',');
                    } else {
                        return '悟空问答,' + this.$store.state.qData.key_word.join(',');
                    }
                },
                description: function () {
                    if (this.$store.state.page_type == 'qid') {
                        return this.question.title + this.question.content.text + ':' + (this.answers[0] && this.answers[0].content_abstract.text.substring(0, 60) + ':') + '-' + this.$store.state.qData.key_word.join('，');
                    } else {
                        return (this.answers[0] && this.answers[0].content_abstract.text.substring(0, 100) + ':-') + this.$store.state.qData.key_word.join(',') + ':' + this.question.title;
                    }
                },
                dataId: function () {
                    return this.$store && this.$store.state.data_id;
                },
                url: function () {
                    return 'https://www.wukong.com/' + (this.$store.state.page_type == 'qid' ? 'question/' : 'answer/') + this.dataId + '/';
                },
                isSpider: function () {
                    return this.$store.state._isSpider;
                },
                showV: function () {
                    var authInfo = this.userFixed.user_auth_info;
                    var authType;
                    if (authInfo) {
                        try {
                            authType = JSON.parse(authInfo).auth_type;
                        } catch (e) {
                        }
                    }
                    return authType && authType != 3;
                },
                shareData: function () {
                    var data = {};
                    data['web-url'] = 'https://www.wukong.com/question/' + this.question.qid + '/';
                    data['wap-url'] = 'https://www.wukong.com/question/' + this.question.qid + '/';
                    data.title = '悟空问答--' + this.question.title;
                    data.image = '';
                    return data;
                },
                profitAuthor: function () {
                    return this.$store.state.userData.wenda_profit_user;
                },
                profitQuestion: function () {
                    return this.question.show_profit_invite;
                }
            },
            created: function () {
                this.urlRoot = '/wenda/web/';
                if (!this.question.content) {
                    this.question.content = {text: ''};
                }
                if (this.isSpider) {
                    // this.showHot = 1;
                }

                // 由于编辑器代码有可能被DOM XSS攻击的漏洞，堵住window.name(domxssExecutionSink)
                if (typeof window !== 'undefined') {
                    window.name = '';
                }
            },
            mounted: function () {
                this.$on('updateSearchWord', this.updateSearchWord);
                toast();
                this.assist = new Assist({
                    el: $('<div></div>').appendTo('#wrapper')[0]
                });
                this.shareGroup = new shareGroup();

                var edits = $('.answer-tool .answer-delete');

                for (var i = 0; i < edits.length; i++) {
                    this.addSetting(edits.eq(i));
                }

                var items = $('.answer-item');
                for (var i = 0; i < items.length; i++) {
                    this.ansidShown(items.eq(i).data('ansid'));
                }

                this.inviteAnswer = new inviteAnswer({
                    el: $('<div></div>').appendTo('.invite-answer')[0],
                    data: {
                        qid: this.qid
                    }
                });

                if (wenda.userData && wenda.userData.user_id && wenda.userData.user_id == this.question.user_id
                    && !this.question.nice_ans_count) {
                    this.toggleInvite();
                }

                this.staticShareGroup();
                this.lazyLoadImage();
                if (this.queryObj.showAnswerBox) {
                    // 自动弹出回答
                    this.showAnswerBox();
                }

                // 滚动加载
                this.scrollAndLoadMore();

                this.relateFeed();


                this.scrollAndFixAnswer();
                this.scrollAndFixTool();
                this.scrollAndFixTitle();
                this.justifyRightPart();
                // this.scrollAndFixSideBar();
                $(document).on('invited_question_load_finish', function () {
                    this.handleGuessPosition();
                }.bind(this));
                $(document).on('hot_board_load_finish', function () {
                    this.handleGuessPosition();
                }.bind(this));
                this.scrollAndFixGuess();
                const bonus = this.$store.state.qData.data.question && this.$store.state.qData.data.question[0] && this.$store.state.qData.data.question[0].bonus || '';

                new answer_inline({
                    data: {
                        answer: {
                            qid: this.qid,
                            title: this.title,
                            shouldRedirect: 1,
                            bonus
                            //initContent: _this.draftData.initContent
                        }
                    }
                });

                $(this.$el).on('click', '[data-node="answer-pop"]', this.answer.bind(this));
                // new header({
                //     data: {
                //         query: '',
                //         searchWord: ''
                //     }
                // });


                this.loadInlineVideo();
                removeEmptyTag();
                this.updateFoldBtnState();
                this.showInitComment();
                // 初始化主问题与次问题相关数据
                if (this.$store.state.qData.type == 'toMinor') {
                    this.type = 'toMinor';
                    this.toMinor = {
                        minorId: this.$store.state.qData.toId,
                        minorTitle: this.$store.state.qData.toTitle
                    };
                } else if (this.$store.state.qData.type == 'toMain') {
                    this.type = 'toMain';
                    this.toMain = {
                        mainId: this.$store.state.qData.toId,
                        mainTitle: this.$store.state.qData.toTitle
                    };
                }

                var queryObj = $.querystringParse(location.search.replace('?', '')) || {};
                var extra_tag = queryObj.extra_tag;

                if (this.question.bonus && extra_tag === 'answer_get_bonus') {
                    this.bonus = `${Number.parseInt(this.question.bonus) / 100}元`;
                }
                this.getTips();
            },
            updated: function () {
                $('.answer-tool .w-answer-setting').remove();
                var edits = $('.answer-tool .answer-delete');
                for (var i = 0; i < edits.length; i++) {
                    this.addSetting(edits.eq(i));
                }
                this.loadInlineVideo();
                removeEmptyTag();
                this.updateFoldBtnState();
            },
            beforeDestroy: function () {
                this.$off('updateSearchWord', this.updateSearchWord);
            },
            methods: {
                inform: function () {
                    var _this = this;
                    new informModal({
                        data: {
                            qid: _this.qid,
                            from: 'Question'
                        }
                    });
                },
                updateSearchWord: function (changeSearchWord) {
                    this.changeSearchWord = changeSearchWord;
                },
                ansidShown: function (ansid) {
                    if (this.ansids[ansid]) {
                        return true;
                    } else {
                        this.ansids[ansid] = true;
                        return false;
                    }
                },
                closeTips: function () {
                    this.question_tips = '';
                },
                getTips: function () {
                    var _this = this;
                    var url = '/wenda/v1/fetch/tips/';
                    $.Ajax({
                        url: url,
                        type: 'post',
                        dataType: 'json',
                        data: {
                            tips_source: 0,
                            qid: this.qid
                        },
                        success: function (res) {
                            if (res.err_no == 0 && res.tips) {
                                // 兼容灰度逻辑
                                if (Object.prototype.toString.call(res.tips) == '[object Object]') {
                                    _this.question_tips = res.tips.text;
                                } else if (Object.prototype.toString.call(res.tips) == '[object Array]') {
                                    for (var i = 0; i < res.tips.length; i++) {
                                        var item = res.tips[i];
                                        if (item.tips_type == '1') {
                                            _this.question_tips = item.text;
                                        } else if (item.tips_type == '0') {
                                            _this.question_answered_tips = item.text;
                                        }
                                    }
                                }
                            }
                        }
                    });
                },
                justifyRightPart: function () {
                    var RealteFeedDistance = $('.relate-feed').offset().top;
                    var threshold = 0;
                    if (window.wenda.userData.is_login) {
                        // threshold = 1200;
                        threshold = 1686;
                    } else {
                        // threshold = 1010;
                        threshold = 1111;
                    }

                    if (RealteFeedDistance > threshold) {
                        // this.showHot = 1;
                        this.showGuess = true;
                        this.showInviteQuest = true;
                    } else {
                        // this.showHot = 0;
                        this.showGuess = false;
                    }

                    // new sidebar({
                    //     el: document.getElementById('placeholver_sidebar'),
                    //     data: showData
                    // });
                },
                followQuestion: function (e) {
                    if (this.question.is_follow == 0) {
                        this.question.is_follow = 1;
                        this.question.follow_count += 1;
                    } else {
                        this.question.is_follow = 0;
                        this.question.follow_count -= 1;
                    }
                    this.doFollowQuestion(this.qid, this.question.is_follow);
                },
                showAnswerBox: function () {
                    var _this = this;
                    var tryAnswerTime = 0;
                    var tryAnswer = setInterval(function () {
                        execAnswer();
                        tryAnswerTime++;
                        if (tryAnswerTime > 5) {
                            clearInterval(tryAnswer);
                        }
                    }, 1000);
                    execAnswer();

                    function execAnswer() {
                        if (window.UM && UM.getEditor) {
                            var data = {
                                qid: _this.qid,
                                title: _this.title,
                                abstractText: _this.abstractText,
                                shouldRedirect: 1
                            };
                            new answer({
                                data: {
                                    answer: data,
                                    origin_source: UTILS.getOriginSource($.querystringParse(location.search.replace('?', '')) || {})
                                }
                            });
                            clearInterval(tryAnswer);
                        }
                    }
                },
                showComment: function (e) {
                    var $target = $(e.currentTarget);
                    var $wrapper = $target.closest('.answer-item').find('.comment-container');
                    if (!$wrapper.attr('comment-init')) {
                        var ansid = $target.attr('data-ansid');
                        var _obj_comment = new comment({
                            el: $('<div></div>').appendTo($wrapper)[0],
                            data: {
                                ansid: ansid,
                                answer_uid: $target.data('answer-uid'),
                                enterCommentId: this.enterCommentId
                            }
                        });
                        if ($target.data('is_ban_comment')) {
                            _obj_comment.forbidden();
                        }
                        $wrapper.attr('comment-init', 1);
                        _obj_comment.$on('comment.delete', function () {
                            var $comment = $wrapper.parent().find('.show-comment');
                            var html = $comment.html();
                            $comment.html(html.replace(/(\d+)评论/, function ($1, $2) {
                                if ($2 && $2 - 1 > 0) {
                                    return $2 - 1 + '评论';
                                } else {
                                    return '评论';
                                }
                            }));
                        });
                        _obj_comment.$on('comment.total_count.change', function (count) {
                            var $comment = $wrapper.parent().find('.show-comment');
                            var html = $comment.html();
                            $comment.html(html.replace(/(\d+)评论/, function ($1, $2) {
                                if (count > 0) {
                                    return count + '评论';
                                } else {
                                    return '评论';
                                }
                            }));
                        });
                    }
                    $wrapper.toggleClass('hide');

                },
                staticShareGroup: function () {
                    var $target = $('.new-share-group');
                    this.staticShareGroup = new shareGroup({
                        el: $('<div></div>').appendTo('.new-share-group')[0]
                    });
                    this.staticShareGroup.show(
                        {
                            'wap-url': 'https://www.wukong.com/question/' + this.question.qid + '/?from=pcshare',
                            'web-url': 'https://www.wukong.com/question/' + this.question.qid + '/?from=pcshare',
                            title: this.question.title,
                            image: 'http://s0.pstatp.com/toutiao/resource/forum_wap/static/image/logo_366c1b5.png',
                            summary: '',
                            showQrAtOnce: 0
                        }, $target
                    );
                },
                displayImage: function (e) {
                    var $target = $(e.currentTarget);
                    var url = $target.attr('data-src');
                    if (/pstatp.com/.test(url)) {
                        url = url.replace('list/190x124', 'origin');
                    }
                    new gallery({
                        data: {
                            url: url
                        },
                        el: $('<div></div>').appendTo('#modal-gallery-layer')[0]
                    });
                },
                moveShareLayerUp: function () {
                    var $target = $('.static-share-group');
                    $target.css('z-index', 20);
                },
                moveShareLayerDown: function () {
                    var $target = $('.static-share-group');
                    $target.css('z-index', 'inherit');
                },
                lazyLoadImage: function () {
                    $('.lazy-image').each(function (i, item) {
                        loadImage(item);
                    });
                },

                /* 打开折叠答案，并是下拉刷新加载折叠答案 */
                openFoldAnswer: function (e) {
                    var $target = $(e.currentTarget);
                    var text = $('[data-node="open-fold-answer"] span').text();
                    var me = this;
                    if (me.answerFolderFlag) {
                        if (me.loadingLock) {
                            return false;
                        }
                        // this.$el.find('.answer-normal').show();

                        if (!me.initFolderAnswer) {
                            // 第一次点击展开的时候
                            me.loadingLock = true;
                            me.offset = 0;
                            var data = {
                                qid: me.qid,
                                count: 10,
                                req_type: 2,
                                enter_ansid: me.ansid,
                                offset: me.offset,
                                _signature: acrawler.sign(me.qid + me.offset)
                            };
                            if (me.ansid) {
                                data.enter_ansid = me.ansid;
                            }
                            me.showAnswerMore(data);
                            me.initFolderAnswer = 1;
                        }
                        // $('[data-node='open-fold-answer']').addClass('open');
                        // $('[data-node='open-fold-answer'] span').text('收起折叠答案');
                        me.answerFolderFlag = 0;

                    } else {
                        // this.$el.find('.answer-normal').hide();
                        // $('[data-node='open-fold-answer']').removeClass('open');
                        // $('[data-node='open-fold-answer'] span').text('展开折叠答案');
                        me.answerFolderFlag = 1;
                    }
                    if ($target.attr('data-type') === 'bottom') {
                        $('.answer-wrapper-inline .anchor')[0].scrollIntoView();
                    }

                },
                normalAnswerLoadmore: function () {
                    var me = this;
                    me.loadingLock = true;
                    // me.req_type = 2;
                    me.showAnswerMore({
                        enter_ansid: me.ansid,
                        qid: me.qid,
                        count: 10,
                        req_type: 2,
                        offset: me.offset
                    });
                },
                scrollAndFixTitle: function () {
                    var $answers;
                    var _this = this;

                    function isTextInViewport(ans) {
                        var rect = ans.getBoundingClientRect();
                        var headerHeight = $('.index-header').position().top; //  + $('.index-header').height();
                        return (
                            rect.top + rect.height > headerHeight
                            && rect.top < -50 + headerHeight
                        );
                    }

                    function throttle(delay, action) {
                        var last = 0;
                        return function () {
                            var curr = new Date();
                            if (curr - last > delay) {
                                action.apply(this, arguments);
                                last = curr;
                            }
                        };
                    }

                    function scrollUp() {
                        $('.title-fixed').addClass('fixed');
                        $('.suspension-search').addClass('fixed');
                        $('.suspension-title').addClass('fixed');
                    }

                    function scrollDown() {
                        $('.title-fixed').addClass('fixed');
                        $('.suspension-search').removeClass('fixed');
                        $('.suspension-title').removeClass('fixed');
                    }

                    function notFixed() {
                        $('.title-fixed').removeClass('fixed');
                        _this.hasSugLayer = false;
                    }

                    function handleScroll() {
                        if ($('.folder-answer-toggle').hasClass('open')) {
                            $answers = $('.all-answers');
                        } else {
                            $answers = $('.answers');
                        }
                        if ($answers.length === 0) {
                            return;
                        }
                        var scrollTop = $(window).scrollTop();
                        if ($('.title-fixed .layer-suspension').length > 0) {
                            _this.hasSugLayer = true;
                            $('.title-fixed .layer-suspension').show();
                        } else {
                            _this.hasSugLayer = false;
                        }
                        if (isTextInViewport($answers[0])) {
                            if (_this.hasSugLayer || scrollTop < _this.lastScrollTop) {
                                // up
                                scrollUp();
                            } else if (scrollTop >= _this.lastScrollTop) {
                                // down
                                scrollDown();
                            }
                        } else {
                            notFixed();
                        }
                        _this.lastScrollTop = scrollTop;
                    }

                    $(window).on('scroll', throttle(50, handleScroll));
                },
                scrollAndFixAnswer: function () {
                    var _this = this;
                    // 用户信息固定
                    $(document).on('scroll', function () {
                        $('.sticky-item').each(function (i, item) {
                            var $item = $(item);

                            var content = $item.find('.answer-text-full')[0];
                            if (!content) {
                                return true;
                            }
                            if (isElementInViewport(item)) {
                                if ($item.parent().hasClass('answer-items-normal')) {
                                    var cnt = $item.parent().find('.sticky-item').index($item);
                                    _this.userFixed = _this.normal_ans_list[cnt].user;
                                } else {
                                    _this.userFixed = _this.nice_ans_list[i].user;
                                }

                                // if (!$item.hasClass('fixed')) {
                                //     $('.answer-item.fixed').removeClass('fixed');
                                //     $(item).addClass('fixed');
                                //     return false;
                                // }
                            }
                            // return false;
                        });
                    });

                    function isElementInViewport(el) {
                        var rect = el.getBoundingClientRect();
                        var headerHeight = $('.index-header').position().top; //  + $('.index-header').height();
                        var threshold_x = headerHeight + $('.title-fixed').height() + $(el).outerHeight(true) - $(el).outerHeight(); // title-fixed的高度 + answer-item的margin-top : 84 + 20
                        var threshold_y = headerHeight + $('.title-fixed').height(); // title-fixed的高度： 84
                        return (
                            rect.top <= threshold_x
                            && rect.bottom > threshold_y
                            // rect.top <= threshold_x
                            // && rect.bottom > threshold_y
                        );

                    }

                },
                scrollAndFixTool: function () {
                    $(document).on('scroll', throttle(50, handleTool));

                    function throttle(delay, action) {
                        var last = 0;
                        return function () {
                            var curr = new Date();
                            if (curr - last > delay) {
                                action.apply(this, arguments);
                                last = curr;
                            }
                        };
                    }

                    function handleTool() {
                        $('.sticky-item').each(function (i, item) {
                            var $item = $(item);
                            var content = $item.find('.answer-text-full')[0];
                            if (!content) {
                                return true;
                            }
                            var $tool = $item.find('.answer-text');
                            if (isToolShouldFixed(item)) {
                                $tool.addClass('fixed');
                            } else {
                                $tool.removeClass('fixed');
                            }
                        });
                    }

                    function isToolShouldFixed(el) {
                        var $answerTool = $(el).find('.answer-tool');
                        var $answerText = $(el).find('.answer-text-full');
                        if ($answerTool.length < 1) {
                            return false;
                        }
                        var HEIGHT = $(window).height();
                        var TOP = el.getBoundingClientRect().top;
                        var fixTitleHeight = 84;
                        var answerText = $answerText[0].getBoundingClientRect();
                        return (
                            TOP <= fixTitleHeight && answerText.bottom > HEIGHT - 47
                        );
                    }
                },
                scrollAndLoadMore: function () {
                    var me = this;
                    var loadAnswer;
                    $(document).on('scroll', function () {
                        if (me.loadingLock) {
                            // 加载锁
                            return;
                        }
                        var wHeight = $(window).height();
                        var delta = document.body.clientHeight - wHeight;
                        var sTop = $(window).scrollTop();
                        clearTimeout(loadAnswer);
                        if (delta - 600 <= sTop) {
                            if (me.req_type == 1 && me.has_more) {
                                loadAnswer = setTimeout(function () {
                                    me.loadingLock = true;
                                    var data = {
                                        qid: me.qid,
                                        count: 10,
                                        req_type: me.req_type,
                                        offset: me.offset
                                    };
                                    if (me.ansid) {
                                        data.enter_ansid = me.ansid;
                                    }
                                    me.showAnswerMore(data);
                                }, 50);
                            } else {
                                me.req_type = 0;
                                // 没有答案了 开始加载feed了;
                                loadAnswer = setTimeout(function () {
                                    me.loadingLock = true;
                                    me.getRelateFeed(me.max_behot_time);
                                }, 50);
                            }
                        }
                    });
                },

                /* 回答问题 */
                answer: function (e) {
                    if (this.question_answered_tips) {
                        $('body').toast({status: 'warn', text: this.question_answered_tips});
                        return;
                    }
                    // var $qid = $(e.currentTarget).closest('[data-qid]');
                    const bonus = this.$store.state.qData.data.question && this.$store.state.qData.data.question[0] && this.$store.state.qData.data.question[0].bonus || '';
                    var data = {
                        qid: this.qid,
                        title: this.title,
                        abstractText: this.abstractText,
                        shouldRedirect: 1,
                        bonus: bonus
                    };
                    /* 回答弹层,可更改为单页面 */
                    new answer({
                        data: {
                            answer: data,
                            origin_source: UTILS.getOriginSource($.querystringParse(location.search.replace('?', '')) || {})
                        }
                    });
                },
                relateFeed: function () {
                    var _this = this;
                    this.$feed_loadmore = $('.relate-feed-loadmore');
                    this.$on('releateFeed', function (r) {
                        _this.loadingLock = false;
                        var l = r.data.length;
                        var new_data = _this.fixData(r);
                        if (l > 0) {
                            _this.max_behot_time = r.data[l - 1].behot_time;
                        }
                        _this.has_more = r.has_more;
                        if (!_this.has_more) {
                            _this.$feed_loadmore.text('没有更多内容');
                        } else {
                            _this.$feed_loadmore.text('正在加载中');
                        }
                        _.each(new_data.feed_question, function (question) {
                            if (!question.is_user_card) {
                                _this.relateFeeds.push(new model_feed_question(question));
                            }
                        });
                    });
                    if (!this.has_more) {
                        this.req_type = 0;
                        this.getRelateFeed();
                    }

                },
                fixData: function (r) {
                    var new_data = {
                        feed_question: []
                    };
                    _.each(r.data, function (item, index) {
                        item.index = index + 1;
                        item.ans_list = [item.answer];
                        new_data.feed_question.push(item);
                    });
                    return new_data;
                },
                loadInlineVideo: function () {
                    // if ($.browser.msie)
                    // {
                    //     return;
                    // }
                    $('.rich-text').each(function (i, item) {
                        var $this = $(this);
                        if (!$this.data('videoLoaded')) {
                            $this.data('originhtml', $this.html());
                            $this.find('.video-hide').each(function (i, item) {
                                loadVideo(item, {max_width: 660, max_height: 600});
                            });
                            $this.data('videoLoaded', '1');
                        }
                    });
                },
                updateFoldBtnState: function () {
                    var _this = this;
                    // 通过内容长度判断要不要出展开更多。要等图片加载完
                    $('.clean.h_0').each(function (index, item) {
                        $(item).removeClass('clean');
                        var $imgs = $(item).find('img');
                        if (_this.question.nice_ans_count <= 3) {
                            $(item).find('.j-expand-showfull').css('display', 'none');
                            $(item).removeClass('fold');
                        } else if ($imgs.length > 0) {
                            $imgs[0].onload = function () {
                                if ($(item).find('.answer-text-full').height() <= 245) {
                                    $(item).find('.j-expand-showfull').css('display', 'none');
                                    $(item).removeClass('fold');
                                }
                            };
                        } else {
                            if ($(item).find('.answer-text-full').height() <= 245) {
                                $(item).find('.j-expand-showfull').css('display', 'none');
                                $(item).removeClass('fold');
                            }
                        }

                    });
                    $('.clean.h_1200').each(function (index, item) {
                        $(item).removeClass('clean');
                        var $imgs = $(item).find('img');
                        var l = $imgs.length;
                        if (_this.question.nice_ans_count <= 3) {
                            $(item).find('.j-expand-showfull').css('display', 'none');
                            $(item).removeClass('fold');
                        } else if (l > 0) {
                            $imgs[0].onload = function () {
                                setTimeout(function () {
                                    if ($(item).find('.answer-text-full').height() <= 795) {
                                        $(item).find('.j-expand-showfull').css('display', 'none');
                                        $(item).removeClass('fold');
                                    }
                                }, 100);
                            };
                        } else {
                            if ($(item).find('.answer-text-full').height() <= 795) {
                                $(item).find('.j-expand-showfull').css('display', 'none');
                                $(item).removeClass('fold');
                            }
                        }

                    });
                },
                loadingLock: function () {
                    var _this = this;
                    if (_this.loadingLock) {
                        return;
                    }
                    _this.loadingLock = true;
                    setTimeout(function () {
                        _this.loadingLock = true;
                    }, 6000);

                },
                toggleInvite: function () {
                    var $this = $('.toggle-invite-answer');
                    if ($this.hasClass('active')) {
                        $('.invite-answer').hide();
                        $this.removeClass('active');
                        $this.find('span').html('邀请回答');
                    } else {
                        $this.addClass('active');
                        $('.invite-answer').show();
                        this.inviteAnswer.show();
                        $this.find('span').html('收起邀请');
                    }

                },
                addSetting: function (edit) {
                    var answer_model = {
                        ansid: edit.data('ansid'),
                        is_ban_comment: edit.data('is_ban_comment'),
                        question: {
                            qid: this.qid
                        }
                    };
                    var placeHolder_setting = $('<div></div>');
                    edit.before(placeHolder_setting);
                    var _answerSetting = new answerSetting({
                        el: placeHolder_setting[0],
                        data: {
                            answer: answer_model,
                            is_star_order_accepted: edit.data('is_star_order_accepted') || 0,
                        }
                    });
                    _answerSetting.$on('answer.deleted', function () {
                        edit.closest('.answer-item').fadeOut(500, function () {
                            this.remove();
                            var answerCountH = $('.answer-count-h span');
                            var html = answerCountH.html();
                            var num = html.replace(/\D/g, '');
                            answerCountH.html(html.replace(num, Math.max(0, num - 1)));
                        });
                    });
                    _answerSetting.$on('answer.comment.permit', function () {
                        edit.closest('.answer-tool').find('.show-comment').data('is_ban_comment', 0);
                        edit.closest('.answer-item').find('.comment-widget').removeClass('forbidden');
                    });
                    _answerSetting.$on('answer.comment.forbidden', function () {
                        edit.closest('.answer-tool').find('.show-comment').data('is_ban_comment', 1);
                        edit.closest('.answer-item').find('.comment-widget').addClass('forbidden');
                    });
                },
                showInitComment: function () {
                    if (this.initCommentShown || !this.showCommentAnsid) {
                        return;
                    }
                    var btn = $('.show-comment[data-ansid=' + this.showCommentAnsid + ']');
                    if (btn.length) {
                        this.showComment({
                            currentTarget: btn[0]
                        });
                        var height = $('.title-fixed').height();
                        var padding = 0;
                        var top = $('.answer-item[data-ansid=' + this.showCommentAnsid + '] .comment-container').offset().top;
                        $(window).scrollTop(top - padding - height);
                    }
                },
                showAnswerMore: function (params) {
                    var me = this;
                    if (me.isLoading) {
                        return false;
                    }
                    me.isLoading = true;
                    var url = this.urlRoot + 'question/loadmorev1/';

                    $.Ajax(url, {
                        type: 'GET',
                        data: params,
                        context: me,
                        success: function (data) {
                            $('.expand.loading').removeClass('loading');
                            me.isLoading = false;
                            me.loadingLock = false;
                            me.offset = data.offset;

                            var first_visit = 0;
                            if (me.offset === 10) {
                                var first_visit = 1;
                            }

                            if (params.req_type == 1) {
                                me.has_more = data.has_more;
                                _.each(data.ans_list, function (item) {
                                    if (!me.ansidShown(item.ansid)) {
                                        me.nice_ans_list.push(item);
                                    }
                                });
                                // me.nice_ans_list = me.nice_ans_list.concat(data.ans_list);
                            } else {
                                me.normal_has_more = data.has_more;

                                _.each(data.ans_list, function (item) {
                                    if (!me.ansidShown(item.ansid)) {
                                        me.normal_ans_list.push(item);
                                    }
                                });
                                // me.normal_ans_list = me.normal_ans_list.concat(data.ans_list);
                            }

                        },
                        error: function () {
                            me.isLoading = false;
                            $('.expand.loading').removeClass('loading');
                        }
                    });
                },
                doFollowQuestion: function (qid, type) {
                    var me = this;
                    var url = this.urlRoot + 'commit/followquestion/';
                    $.Ajax(url, {
                        type: 'POST',
                        data: {
                            follow_type: type,
                            qid: qid
                        },
                        success: function (data) {
                            var text = type == 1 ? '收藏成功' : '取消收藏成功';
                            $('body').toast({status: 'success', text: text});
                        }
                    });
                },
                getRelateFeed: function (max_behot_time) {
                    var _this = this;
                    var questionId = location.href.split('//')[1].split('/')[2];
                    var data = {
                        concern_id: _this.concern_id,
                        t: new Date().getTime(),
                        qid: this.qid || questionId
                    };
                    if (max_behot_time) {
                        data.max_behot_time = max_behot_time;
                    }
                    data._signature = acrawler.sign(_this.concern_id + (max_behot_time || ''));

                    $.Ajax('/wenda/web/nativefeed/brow/', {
                        type: 'GET',
                        data: data,
                        success: function (e, r) {
                            _this.$emit('releateFeed', r);
                        }
                    });
                },
                deleteMe: function () {
                    new confirm({
                        data: {
                            title: '删除问题',
                            word: '确认删除该条问题吗？',
                            todo: function () {
                                $.Ajax('/wenda/web/commit/deletequestion/', {
                                    type: 'POST',
                                    data: {
                                        qid: this.qid
                                    },
                                    success: function (data) {
                                        location.href = '/';
                                    }
                                });
                            }.bind(this)
                        }
                    });
                },
                editTag: function () {
                    var tagEditor = new questionTag({
                        data: {question: this.question}
                    });
                    tagEditor.$on('question.concern_tags.change', function (tags) {
                        // var temp_tags = [];

                        // $('.question-tags .tag').remove();
                        // var $tags = $('.question-tags');
                        // temp_tags = tags.slice(0);
                        // temp_tags.reverse();
                        this.question.concern_tags = tags;
                        // temp_tags.forEach(function (tag) {
                        //     $tags.prepend('<a href="/tag/' + tag.concern_id + '/" target="_blank" class="tag" data-log="Visit_Tag|From_">' + tag.name + '</a>');
                        // });


                        if (tags.length) {
                            $('.edit-tag').hide();
                            $('.has-tag').show();
                        } else {
                            $('.edit-tag').show();
                            $('.has-tag').hide();
                        }
                    }.bind(this));
                },
                getKeyword: function () {
                    var keyword = '';
                    this.question.concern_tags.forEach(function (item, index) {
                        if (index == 0) {
                            keyword += item.name;
                        } else {
                            keyword += ',' + item.name;
                        }
                    });
                    return keyword;
                },
                scrollAndFixSideBar: function () {
                    var sidebarTop;
                    $(document).on('scroll', function () {
                        var sidebar = $('.hot-wenda')[0];
                        if (!sidebar) {
                            return;
                        }
                        var mainContentHeight = $('.relate-feed').offset().top;
                        var domHeight = $(sidebar).height();
                        if (!sidebarTop) {
                            sidebarTop = $(sidebar).offset().top;
                        }
                        var sidebarHeight = sidebarTop + domHeight * 2; // 预留一个精彩回答的高度
                        if (mainContentHeight < sidebarHeight) {
                            return;
                        }
                        var scrollTop = $(window).scrollTop();
                        if (scrollTop > sidebarTop && scrollTop + domHeight < mainContentHeight) {
                            if (!this.sidebarFixed) {
                                $(sidebar).addClass('fixed');
                                this.sidebarFixed = true;
                            }
                        } else {
                            if (this.sidebarFixed) {
                                $(sidebar).removeClass('fixed');
                                this.sidebarFixed = false;
                            }
                        }
                    }.bind(this));
                },
                scrollAndFixGuess: function () {
                    if (!this.showGuess) {
                        return;
                    }
                    var _this = this;
                    // 文档加载完成之后才执行滚动事件，否则有些DOM元素没有高度
                    $(document).ready(function () {
                        var _this = this;
                        $(document).on('scroll', throttle(50, this.handleGuessPosition));

                        function throttle(delay, action) {
                            var last = 0;
                            return function () {
                                var curr = new Date();
                                if (curr - last > delay) {
                                    action.apply(this, arguments);
                                    last = curr;
                                }
                            };
                        }
                    }.bind(this));
                },
                handleGuessPosition: function () {
                    var guessHeight = $('.sidebar-guess').outerHeight(true);
                    var mainContentClientHeight = $('.relate-feed')[0].getBoundingClientRect().top;
                    if ($('.guess-wrapper').length <= 0) {
                        return;
                    }
                    this.top = $('.guess-wrapper').offset().top;
                    var scrollTop = $(window).scrollTop();
                    if (scrollTop + 40 > this.top && mainContentClientHeight > guessHeight) {
                        $('.sidebar-guess').addClass('fixed');
                    } else {
                        $('.sidebar-guess').removeClass('fixed');
                    }
                }
            },
            components: {
                'w-sidebar': sidebar,
                'w-invite-sharegroup': inviteSharegroup
            }
        });

    }, {
        "../../ui/toast/toast.js": 18,
        "../../widget/answer-nointerest/confirm": 22,
        "../../widget/answer/answer": 24,
        "../../widget/answer/answer_inline": 26,
        "../../widget/answer/setting/setting": 28,
        "../../widget/assist-btn/assist-btn": 42,
        "../../widget/comment/comment": 45,
        "../../widget/gallery/gallery": 54,
        "../../widget/gototop/gototop": 56,
        "../../widget/header/header": 57,
        "../../widget/inform-modal/inform-modal": 59,
        "../../widget/invite-sharegroup/invite-sharegroup": 61,
        "../../widget/invite/invite-answer/invite-answer": 67,
        "../../widget/login/login": 75,
        "../../widget/model/feed_question": 77,
        "../../widget/question/question-v3": 93,
        "../../widget/question/tag/tag": 95,
        "../../widget/sharegroup/sharegroup": 99,
        "../../widget/sidebar/sidebar": 113,
        "../../widget/util": 127,
        "./answer_item/answer_item": 13,
        "./app.tpl": 16,
        "byted-acrawler": 1
    }],
    16: [function (require, module, exports) {
        module.exports = "<div id=\"wrapper\" class=\"static\" :class=\"{question: type=='toMain'||type=='toMinor'}\">\n    <div class=\"index-header move\" id=\"paglet-index-header\" data-log-from=\"!Nav\">\n        <div class=\"index-header-wrapper\">\n            <w-header :inModule=\"1\" :searchWord=\"changeSearchWord\"></w-header>\n        </div>\n    </div>\n    <div class=\"answer-wrapper\"></div>\n    <main class=\"main-container page-question-static \">\n        <div class=\"header\" id=\"main-header\"></div>\n        <div class=\"tip-wrapper\" v-if=\"type == 'toMain' || type == 'toMinor'\">\n            <div class=\"tip\">\n                <template v-if=\"type == 'toMain'\">\n                    <span class=\"text\">问题重复，已被合并到：</span>\n                    <a :href=\"'/question/' + toMain.mainId + '/?minorId='+ qid\" class=\"title\">\n                        {{toMain.mainTitle}}\n                    </a>\n                    <a href=\"javascript:;\" class=\"reason\">查看原因\n                        <i class=\"iconfont icon-ask_arrow_right arrow-right\"></i>\n                    </a>\n                </template>\n                <template v-if=\"type == 'toMinor'\">\n                    <span class=\"text\">原问题：</span>\n                    <a :href=\"'/question/' + toMinor.minorId + '/?force=1'\" class=\"title\">\n                       {{toMinor.minorTitle}}\n                    </a>\n                </template>\n             </div>\n        </div>\n\n        <div class=\"index-question-list\" id=\"main-index-question-list\">\n            <div class=\"right-part\" id=\"pagelet-sidebar\">\n                <div id=\"placeholver_sidebar\">\n                    <w-sidebar :showInviteQuest='showInviteQuest' showUserCard='1' showQrcode='1' :showHot='showHot' :showGuess=\"showGuess\"></w-sidebar>\n                </div>\n            </div>\n\n\n\n            <div class=\"question question-single\">\n                <h4 style=\"margin-top:60px;text-align:center;font-size:20px;\" v-if=\"!question.qid\">该问题不存在</h4>\n                <div :data-qid=\"question.qid\" data-init-offset=\"5\" class=\"question-item\" v-else itemscope itemtype=\"http://schema.org/Question\">\n                    <meta itemprop=\"keywords\" :content=\"getKeyword()\" v-if=\"question.concern_tags.length > 0\"/>\n                    <meta itemprop=\"url\" :content=\"'https://www.wukong.com/question/'+question.qid+'/'\"/>\n                    <meta itemprop=\"answerCount\" :content=\"question.nice_ans_count + question.normal_ans_count\"/>\n                    <meta itemprop=\"dateCreated\" :content=\"new Date(question.create_time*1000).toString()\"/>\n\n                    <div class=\"question-tags\">\n                        <div class=\"question-hot-tips\" v-bind:class=\"[hotTipsClass]\" v-if=\"~[1,2,3].indexOf(QData.question_hot_tips.tip_id)\">{{QData.question_hot_tips.tip}}</div>\n\n                        <a v-for=\"concern_tag in question.concern_tags\" :href=\"'/tag/' + concern_tag.concern_id + '/'\"\n                        :key=\"concern_tag.concern_id\" target=\"_blank\" class=\"tag\" data-log=\"Visit_Tag\n|From_\">{{concern_tag.name}}</a>\n                        <a v-if=\"isMyQuestion && question.concern_tags.length\" href=\"javascript:\" data-log=\"EditTag|From_QuestionTag\" class=\"edit-tag has-tag\" @click=\"editTag\" v-show=\"question.concern_tags.length\">修改标签</a>\n                    </div>\n                    <h1 class=\"question-name\" itemprop=\"name\">\n                       <span>{{question.title}}</span>\n                    </h1>\n                    <div class=\"question-text\" itemprop=\"description\">{{question.content.text}}</div>\n                    <div v-if=\"question.content.pic_uri_list.length\" class=\"question-img-preview\">\n                        <div v-for=\"item in question.content.pic_uri_list\" class=\"image-box\">\n                            <img data-node=\"preview\" class=\"\" :src=\"'//p3.pstatp.com/list/190x124/' + item.web_uri\"  :data-src=\"'//p3.pstatp.com/list/190x124/' + item.web_uri\" data-width=\"168\" data-height=\"114\"  class=\"lazy-image\"\n                                @click=\"displayImage\" />\n                        </div>\n                    </div>\n\n                    <div v-show=\"type!='toMain'\" class=\"question-bottom\">\n                        <a data-node=\"answer\" class=\"action-btn answer-btn\" href=\"javascript:;\" data-log=\"PopUp_Answer|From_Description\" @click=\"answer\" PopUp_Answer>\n                            <i class=\"iconfont icon-ask_write\"></i>回答\n                        </a>\n                        <a v-if=\"question.is_follow\" data-node=\"followquestion\" data-follow=\"1\" class=\"action-btn\" href=\"javascript:;\" data-log=\"Follow_Question|From_\" @click=\"followQuestion\">\n                            <i class=\"iconfont icon-collection collected\"></i>\n                            <span class=\"text\">已收藏</span>\n                            (<span class=\"count\">{{question.follow_count}}</span>)\n                        </a>\n                        <a v-else data-node=\"followquestion\" data-follow=\"0\" class=\"action-btn\" href=\"javascript:;\" data-log=\"Follow_Question|From_\" @click=\"followQuestion\">\n                            <i class=\"iconfont icon-collection\"></i>\n                            <span class=\"text\">收藏问题</span>\n                            (<span class=\"count\">{{question.follow_count}}</span>)\n                        </a>\n                        <a data-node=\"invite-answer\" class=\"action-btn toggle-invite-answer\" data-log=\"Toggle_Invite|From_\" href=\"javascript:;\" @click=\"toggleInvite\">\n                            <i class=\"iconfont icon-ask_add_friend\"></i><span>邀请回答</span>\n                        </a>\n                        <a v-if=\"isMyQuestion && question.display_status != 0\" data-node=\"delete-question\" class=\"action-btn delete-question\" data-log=\"DeleteQuestion|From_\" href=\"javascript:\" @click=\"deleteMe\"><i class=\"iconfont icon-deleterubbish\"></i><span>删除</span></a>\n                        <w-invite-sharegroup v-if=\"profitQuestion\" :shareData=\"shareData\" :qid=\"qid\"></w-invite-sharegroup>\n                        <template v-else>\n                            <div v-if=\"question.display_status != 1\" class=\"new-share-group\" @mouseover=\"moveShareLayerUp\" @mouseout=\"moveShareLayerDown\"></div>\n                        </template>\n                        <div class=\"inform\" @click=\"inform\" v-if=\"!isMyQuestion\">\n                            <i class=\"iconfont icon-CombinedShape\"></i>\n                            <span data-log=\"PopUp_Inform|From_InformQuestion\">举报</span>\n                        </div>\n                    </div>\n                    <div class=\"invite-answer\"></div>\n                    <div class=\"question-tips\" v-if=\"question_tips\">{{question_tips}}<span class=\"close\" @click=\"closeTips\"></span></div>\n                    <div v-show=\"type!='toMain'\" class=\"answer-wrapper-inline\"></div>\n                    <h3 class=\"answer-count-h\">\n                        <span>{{ question.nice_ans_count + question.normal_ans_count }}个回答</span>\n                    </h3>\n                    <!-- <div v-if=\"question.display_status == 1\" class=\"question-tip\">\n                        <p class=\"answer-sofa-title\">问题审核中</p>\n                            <p v-if=\"isMyQuestion\" class=\"answer-sofa-text\">你的问题可能会被重新编辑</p>\n                    </div> -->\n\n                    <div v-if=\"question.display_status == 2\" class=\"question-tip\">\n                        <p class=\"answer-sofa-title\">问题不符合要求<template v-if=\"isMyQuestion\"></template>，建议修改</p>\n                        <a v-if=\"isMyQuestion\" class=\"answer-sofa-link\" href=\"//www.toutiao.com/i6316303974655853058/\" target=\"_blank\">\n                            如何修改\n                        </a>\n                    </div>\n\n                    <div v-if=\"question.display_status == 3\" class=\"question-tip\">\n                        <p class=\"answer-sofa-title\">问题未通过审核</p>\n                        <a v-if=\"isMyQuestion\" class=\"answer-sofa-link\" href=\"//www.toutiao.com/i6316304260334092801/\" target=\"_blank\">\n                            查看原因</a>\n                    </div>\n\n                    <div class='no-answer' v-if=\"!nice_ans_list.length\">\n                        <div class='no-answer-content'>我有靠谱回答，我来抢答</div>\n                        <div class='no-answer-button'>\n                            <a href=\"javascript:;\" @click='answer' data-log=\"PopUp_Answer|From_NoAnswerCard\" PopUp_Answer>\n                                <i class='iconfont icon-ask_write'></i>\n                                <span>回答</span>\n                                </a>\n                        </div>\n                    </div>\n\n                    <div class=\"all-answers\">\n                        <div class=\"answers\" data-log-from=\"Answer\">\n                            <div class=\"title-fixed\">\n\n                                    <div class=\"suspension-search\">\n                                        <div class=\"logo-box\">\n                                            <a class=\"logo-link\" href=\"/\" data-log=\"Visit_Index|From_logo\" title=\"悟空问答\">\n                                                <img class=\"logo\" src=\"//s3.pstatp.com/toutiao/resource/wenda/wenda_web/static/style/image/logo_5df43ca.png\" alt=\"悟空问答\"/>\n                                            </a>\n                                        </div>\n                                        <div class=\"search-box\">\n                                            <w-search-input :searchWord=\"changeSearchWord\"></w-search-input>\n                                        </div>\n                                    </div>\n                                    <div class=\"suspension-title-wrapper\">\n                                        <div class=\"suspension-title\">\n                                            <div class=\"question-title\">{{question.title}}</div>\n                                            <div class=\"cur-user\" v-if=\"userFixed\">\n                                                <a :href=\"'/user/?uid=' + userFixed.user_id\" class=\"answer-user-avatar\" target=\"_blank\" data-log=\"Visit_Profile|From_ProfilePic\">\n                                                    <img class=\"\" :src=\"userFixed.avatar_url\" alt=\"\"/>\n                                                </a>\n\n                                                <a class=\"answer-user-name\" :href=\"'/user/?uid=' + userFixed.user_id\" target=\"_blank\" data-log=\"Visit_Profile|From_ProfilePic\">\n                                                    {{ userFixed.uname }}\n                                                        <i class=\"iconfont icon-all_newv\" style=\"font-size: 12px;color: #ffc41c;\" v-if=\"showV\"></i>\n                                                        <span class=\"user-intro\" v-if=\"userFixed.user_intro\">{{ userFixed.user_intro }}</span>\n                                                </a>\n                                            </div>\n                                            <a v-if=\"profitAuthor\" data-node=\"answer\" class=\"action-btn answer-btn profit-btn\" href=\"javascript:;\" data-log=\"PopUp_Answer|From_dingbuxuanfu\" @click=\"answer\" PopUp_Answer>\n                                                回答得现金\n                                            </a>\n                                            <a v-else data-node=\"answer\" class=\"action-btn answer-btn\" href=\"javascript:;\" data-log=\"PopUp_Answer|From_dingbuxuanfu\" @click=\"answer\" PopUp_Answer>\n                                                <i class=\"iconfont icon-ask_write\"></i>回答\n                                            </a>\n                                        </div>\n                                    </div>\n                            </div>\n                            <div class=\"answer-items\">\n                                <w-question-answer-item v-for=\"(answer, index) in nice_ans_list\" :unfold=\"index == 0\" :answer=\"answer\" :question=\"question\" :key=\"answer.ansid\" :class=\"'req_1'\" :itemIndex=\"index\"></w-question-answer-item>\n                            </div>\n                        </div>\n                        <div v-if=\"question.normal_ans_count > 0\" class=\"folder-answer-toggle\" data-node=\"open-fold-answer\" :class=\"{open:!answerFolderFlag}\" data-log=\"Visit_CollapseAnswer|From_\"\n                            @click=\"openFoldAnswer\">\n                            <span>{{question.normal_ans_count}}个回答被折叠</span>\n                            <!--   <i class=\"iconfont icon-ask_arrow_down\"></i>\n                                    <i class=\"iconfont icon-arrow\"></i> -->\n                        </div>\n                        <div class=\"answer-normal\" v-show=\"!answerFolderFlag\">\n                            <div class=\"answer-items-normal\">\n                                <w-question-answer-item v-for=\"answer in normal_ans_list\" :answer=\"answer\" :key=\"answer.ansid\" :class=\"'req_2'\" :question=\"question\"></w-question-answer-item>\n                            </div>\n                            <div class=\"answer-normal-bottom\">\n                                <a href=\"javascript:;\" class=\"answer-normal-loadmore\" data-node=\"answer-normal-loadmore\" v-show=\"normal_has_more\" @click=\"normalAnswerLoadmore\">\n                                    点击加载更多\n                                <i class=\"iconfont icon-ask_arrow_down\" style=\"font-size:14px;\"></i>\n                                </a>\n                                <a href=\"javascript:;\" class=\"grey\" data-type=\"bottom\" data-node=\"open-fold-answer\" @click=\"openFoldAnswer\" :class=\"{open:!answerFolderFlag}\">\n                                    收起<i class=\"iconfont icon-arrow\"></i>\n                                </a>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n\n        <div class=\"relate-feed\">\n            <div class=\"more-feed-title\">\n                <div class=\"more-feed-title-inner\">\n                    <h3 class=\"answer-count-h\">\n                        <span>更多阅读</span>\n                    </h3>\n                </div>\n            </div>\n            <div class=\"index-question-list\" data-node=\"relate-feed\" data-log-from=\"Feed\">\n                <w-question-item v-for=\"item in relateFeeds\" v-if=\"item.type=='normal'\" :question=\"item.question\" :key=\"item.answer.ansid\" :answer=\"item.answer\"></w-question-item>\n            </div>\n            <div class=\"relate-feed-loadmore\">正在为您加载更多</div>\n        </div>\n        <div class=\"sub-contianer\"></div>\n        <div class=\"detail\"></div>\n        <div class=\"index-question-loadmore-w\"></div>\n    </main>\n</div>\n";

    }, {}],
    17: [function (require, module, exports) {
        var App = require('./app');

        if (!window.wenda) {
            window.wenda = {};
        }

        $.log.pageView('Question');

        var queryObj = $.querystringParse(location.search.replace('?', ''));
        var question = wenda.static_question;
        var showAnswerBox = queryObj.showAnswerBox;
        var showComment = queryObj.showComment;
        var commentId = queryObj.commentId;

// !function () {
//     function repleace ($obj) {
//         $obj = $($obj);
//         var html = $obj.html();
//         html = html.replace(/\{\{/g, '{\u200b{');
//         // html = html.replace(/\}\}/g, '}\u200b}');
//         $obj.html(html);
//     }
//     repleace($('.question-text'));
//     $('.rich-text').each(function (index, obj) {
//         repleace(obj);
//     });
// }();

        function removeEmptyTag() {
            $('.rich-text').find('p,div').each(function (index, item) {
                var $item = $(item);
                if (!$item.html() && !item.className) {
                    $item.remove();
                }
            });
        }

        removeEmptyTag();

        var store = new Vuex.Store({state: window.__INITIAL_STATE__});
        new App({
            el: $('#wrapper')[0],
            store: store,
            data: {
                queryObj: $.querystringParse(location.search.replace('?', '')),
                showCommentAnsid: showComment,
                ansids: {},
                enterCommentId: commentId
            }
        });

    }, {"./app": 15}],
    18: [function (require, module, exports) {
        var inited = false;

        module.exports = function () {
            if (inited) {
                return;
            }
            inited = true;
            var template = _.template(require('./toast.tpl'));

            $.fn.toast = function (params) {
                var $elements = $(this),

                    query = arguments[0],

                    methodInvoked = (typeof query == 'string'),

                    args = [].slice.call(arguments, 1);

                $elements.each(function () {

                    var settings = $.extend(true, {}, $.fn.toast.settings, params);

                    var namespace = settings.namespace;

                    var moduleNamespace = 'module-' + namespace;

                    var $element = $(this);

                    var instance = $element.data(moduleNamespace);

                    var statusClass = settings.status == 'success' ? settings.className.success : settings.className.fail;

                    var $template = $(template({message: settings.text, statusClass: statusClass})).hide();

                    var module = {
                        /**
                         * 初始化内建的html，这里可以升级为bootstrap方式的组件
                         * 绑定事件
                         * 实例保存
                         */
                        init: function () {
                            module.createHtml();
                            module.event();
                            module.instantiate();
                            module.show(settings.keep);
                        },

                        event: function () {
                            $template.on('click', function () {
                                module.hide();
                            })
                        },

                        unbind: function () {
                            $template.off('click');
                        },

                        /*创建内建的HTML*/
                        createHtml: function () {
                            $(settings.appendTo).append($template);
                        },

                        hide: function () {
                            $template.hide();
                        },

                        /*keep时间后，自动隐藏*/
                        show: function (keep) {
                            if (keep && $.isNumeric(keep)) {
                                setTimeout(function () {
                                    module.hide();
                                }, keep)
                            }
                            $template.show();
                        },

                        instantiate: function () {
                            instance = module;
                            $element.data(moduleNamespace, module);
                        },

                        destroy: function () {
                            module.unbind();
                            $template.remove();
                            $element.removeData(moduleNamespace);
                        },

                        invoke: function (query) {
                            if (typeof query === 'string') {
                                instance[query].apply(instance, args);
                            } else {
                                return false;
                            }
                        }

                    };

                    if (methodInvoked) {
                        if (instance === undefined) {
                            module.init();
                        }
                        module.invoke(query);
                    } else {
                        if (instance !== undefined) {
                            instance.invoke('destroy');
                        }
                        module.init();
                    }
                })


            };

            $.fn.toast.settings = {
                name: 'toast',
                namespace: 'toast',
                appendTo: 'body',
                text: '成功',
                keep: 1000,
                status: 'success',
                className: {
                    success: 'toast-success',
                    fail: 'toast-fail',

                }
            }
        };
    }, {"./toast.tpl": 19}],
    19: [function (require, module, exports) {
        module.exports = "<div class=\"wukong-mask\"></div>\n<div class=\"toast\">\n    <div class=\"toast-header\"></div>\n    <div class=\"toast-body\">\n        <i class=\"toast-status-icon <%=statusClass%>\"></i>\n        <p class=\"toast-message\"><%=message%></p>\n    </div>\n    <div class=\"toast-footer\"></div>\n</div>";

    }, {}],
    20: [function (require, module, exports) {
        var tpl = require('./btn.tpl');

        module.exports = Vue.component('w-answer-nointerest', {
            template: tpl,
            props: ['answer'],
            methods: {
                doit: function () {
                    var url = '/wenda/web/commit/dislike/';

                    $.Ajax(url, {
                        type: 'POST',
                        data: {
                            id_type: '0',
                            group_id: this.answer.ansid
                        },
                        success: function () {
                            this.$emit('answer.nointerest', {
                                qid: this.answer.question ? this.answer.question.qid : '',
                                ansid: this.answer.ansid
                            });
                        }.bind(this)
                    });
                }
            }
        });

    }, {"./btn.tpl": 21}],
    21: [function (require, module, exports) {
        module.exports = "<a class=\"w-answer-nointerest-btn\" href=\"javascript:\" @click=\"doit\"><i class=\"iconfont icon-ask_close\"></i></a>";

    }, {}],
    22: [function (require, module, exports) {
        var tpl = require('./confirm.tpl');

        module.exports = Vue.extend({
            template: tpl,
            data: function () {
                return {
                    title: '',
                    word: '',
                    todo: undefined,
                    success_word: ''
                };
            },
            created: function () {
                var $dom = $('<div></div>').appendTo('body');
                this.$options.el = $dom[0];
            },
            mounted: function () {
                $(this.$el).modal().on('hidden.bs.modal', this.destroy.bind(this));
            },
            methods: {
                doit: function () {
                    this.todo();
                    $(this.$el).modal('hide');
                },
                cancel: function () {
                    $(this.$el).modal('hide');
                },
                done: function () {
                    $('body').toast({status: 'success', text: this.success_word});
                },
                destroy: function () {
                    $(this.$el).remove();
                }
            }
        });
    }, {"./confirm.tpl": 23}],
    23: [function (require, module, exports) {
        module.exports = "<div class=\"modal fade delete-answer-confirm\" tabindex=\"-1\" role=\"dialog\">\n    <div class=\"modal-dialog\" role=\"document\">\n        <div class=\"modal-content\">\n            <div class=\"modal-body\">\n                <h3>{{ title }}</h3>\n                <p class=\"answer-confirm-content\">{{ word }}</p>\n            </div>\n            <div class=\"modal-footer\">\n                <a type=\"button\" class=\"btn btn-primary\" @click=\"doit\">确认</a><a type=\"button\" class=\"btn btn-cancel\" data-dismiss=\"modal\" @click=\"cancel\">取消</a>\n            </div>\n        </div>\n    </div>\n</div>";

    }, {}],
    24: [function (require, module, exports) {
        /**
         * Created by fenghongyu on 15/12/22.
         */

        var tpl = require('./answer.tpl');
        var login = require('../login/login');
        require('./upload_video/uploader');
        require('./upload_video/video_in_edit/video_in_edit');
        var VideoInEdit = require('./upload_video/video_in_edit/video_in_edit');
        var TopToast = require('../toast/top-toast/top-toast');
        var Tooltip = require('vue-directive-tooltip');
        var ueditorInstance = '';
        var OutsideLink = require('../outside-link-editor/outside-link-editor');
        var toast = require('../../ui/toast/toast');
        var leaveModal = require('../leave-modal/leave-modal');
        var updateDraft = require('../../widget/update-draft');
        var deleteAnswerConfirm = require('../answer-nointerest/confirm');
        var starOrderList = require('../star_order_list');
        var util = require('../util');
        var tryTimes = 10;
        Vue.use(Tooltip);
        module.exports = Vue.extend({
            template: tpl,
            data: function () {
                return {
                    lastId: '',
                    debounceID: '',
                    isPosting: false,
                    retryID: '',
                    status: '',
                    isLoading: false,
                    isActive: false,
                    attitude: 0,
                    fakeUser: '',
                    showLinkBtn: false,
                    isFirstSeeLink: false,
                    outsideLink: '',
                    question_tips: '',
                    profitAuthor: false,
                    show_recommend_self: false,
                    recommend_self_cnt: 0,
                    recommend_checked: false,
                    star_order_list: starOrderList && starOrderList.star_order_list || [], // 星图任务列表
                    select_star_id: util.getUrlParam('star_order_id') || 'NULL', // 默认选中的星图任务
                    star_id_disabled: false, // 星图任务默认可编辑
                };
            },
            props: ['answer', 'extra_tag'],
            computed: {
                abstractText: function () {
                    return this.answer.abstractText.replace(/\s/ig, '');
                }
            },
            beforeCreate: function () {
                var $dom = $('<div></div>').appendTo('.answer-wrapper');
                this.$options.el = $dom[0];
            },
            created: function () {
                this.$watch('attitude', function (newVal) {
                    $.localStorage.setItem('UPDATE_TO_MP_ATTITUDE', newVal);
                });
                starOrderList.$on('starOrderListReady', this.initStarOrderList); // 初始化star_order_list
                if (this.answer.isEdit) { // 如果是编辑不允许修改star_order_id
                    this.select_star_id = this.answer && this.answer.star_order_id && this.answer.star_order_id !== '0' ? this.answer.star_order_id : 'NULL';
                    this.star_id_disabled = true;
                }
            },
            mounted: function () {
                $('body').on('click', function (e) {
                    const qingyunModal = document.getElementById('qingyun-modal');
                    if (qingyunModal && e.target === qingyunModal) {
                        qingyunModal.style.display = 'none';
                    }
                });
                var _this = this;
                var queryObj = $.querystringParse(location.search.replace('?', '')) || {};
                var extra_tag = queryObj.extra_tag;

                const isFromBonus = extra_tag === 'answer_get_bonus';

                if (window.wenda.userData.wenda_profit_user && !isFromBonus) {
                    this.profitAuthor = true;
                }

                function debounce(idle, action) {
                    // var last;
                    return function () {
                        var ctx = this, args = arguments;
                        clearTimeout(_this.debounceID);
                        _this.debounceID = setTimeout(function () {
                            action.apply(ctx, args);
                        }, idle);

                    };
                }

                // 用户连续输入两分钟则发送一次请求
                this.lastId = setTimeout(function () {
                    _this.handleDraft();
                }, 120000);

                var retry_count = 8;
                var me = this;
                var flag = 1;

                function setUE() {
                    retry_count--;
                    if (retry_count == 0) {
                        return;
                    }
                    if (window.UM && window.UM.getEditor) {
                        me.ueditor();
                        if (flag == 1 && !me.answer.isEdit) {
                            updateDraft.$emit('initDraftAnswer', me.answer.qid);
                            flag = 0;
                        }
                    } else {
                        setTimeout(function () {
                            setUE();
                        }, 200);
                    }
                }

                $(this.$el).on('keyup', debounce(2000, this.handleDraft));
                $(this.$el).on('keydown', this.checkLink);
                updateDraft.$on('initContentAnswer', this.initContentAnswer);
                updateDraft.$on('postDraftSuccess', this.updatetextStatus);
                updateDraft.$on('postDraftFail', this.postDraftFail);
                updateDraft.$on('theSame', this.changeText);
                $('body').on('saveDraft', this.handleDraft);
                toast();
                if (this.answer && this.answer.url) {
                    this.outsideLink = this.answer.url;
                }
                if (window.wenda.userData.is_login) {
                    $.ajax({
                        url: '/wenda/white/check/',
                        type: 'POST',
                        data: {},
                        success: function (data) {
                            if (data.is_author == 1) {
                                this.showLinkBtn = true;
                                var isFirst = !$.localStorage.getItem('hasSeeLink#' + window.wenda.userData.user_id);
                                $('body').on('addOutsideLink', this.addOutsideLink);
                                if (isFirst) {
                                    this.isFirstSeeLink = true;
                                }
                                this.placeholder = data.placeholder;
                            }
                            setUE();
                        }.bind(this),
                        error: function (e) {
                            setUE();
                        }
                    });
                    $.ajax({
                        url: '/wenda/qingyun/recommen_self_cnt/',
                        type: 'get',
                        data: {
                            user_id: window.wenda.userData.user_id
                        },
                        success: function (data) {
                            _this.show_recommend_self = data.show_recommend_self;
                            _this.recommend_self_cnt = data.recommend_self_cnt;
                        }
                    })
                } else {
                    setUE();
                }
                $(window).off('.answer');
                $(window).on('beforeunload.answer', function () {
                    var content = ueditorInstance.getContent();
                    if (content.length > 0 && !me.answer.initContent) {
                        if (window.wenda.userData.is_login == 0) {
                            me.handleDraft();
                        }
                        return '有未保存内容，确认离开页面？';
                    }
                }.bind(this));

                $('body').css('overflow', 'hidden');
                this.getTips();
            },
            methods: {
                openQuestion: function () {
                    document.getElementById('qingyun-modal').style.display = 'block';

                },
                checkLink: function (e) {
                    var wasEnterPressed = (e.keyCode == 13),
                        wasBackspacePressed = (e.keyCode == 8),
                        wasSpacePressed = e.keyCode == 32;
                    var that = this;

                    var content = ueditorInstance.getContent();
                    var selection = window.getSelection();
                    var range = selection.getRangeAt(0);
                    var start = range.startContainer;
                    var end = range.endContainer;
                    if (end.nodeType === 3 && start === end && $(end).parents('span[id^=link]').length == 0 && $(end).parents('a').length == 0) {
                        var data = end.data;
                        var endPos = range.endOffset;
                        var pre = data.substring(0, endPos);
                        var reg = /((http|https)\:\/\/)?@?[\w\.]*\.([a-z]+)(\/[\x00-\xff]*)?(\s|[^\x00-\xff])+$/i;
                        if (wasEnterPressed) {
                            var reg = /((http|https)\:\/\/)?@?[\w\.]*\.([a-z]+)(\/[\x00-\xff]*)?$/i
                        }
                        if (reg.test(pre)) {
                            if (/('|")/.test(pre.match(reg)[0].trim())) {
                                return;
                            }
                            var id = Math.random() + '';
                            id = id.replace(/^\d\./, '');
                            data = data.substring(endPos);
                            var isMail = false;
                            pre = pre.replace(reg, function ($0) {
                                $0 = $0.replace('<', '&lt;').replace('>', '&gt;').replace(/(\s|[^\x00-\xff])+$/g, function ($1, $2) {
                                    data = $1 + data;
                                    return '';
                                });
                                var href = $0;
                                if (!/^http/i.test(href)) {
                                    if (/^@/.test(href)) {
                                        isMail = true;
                                    }
                                    href = 'http://' + href;
                                } else {
                                    if (/^(http|https)\:\/\/@/i.test(href)) {
                                        isMail = true;
                                    }
                                }
                                return '<a id="link' + id + '" href="' + href + '" class="out-link" target = "_blank">' + $0 + '</a>';
                            });
                            if (isMail) {
                                return;
                            }

                            if (!data.length) {
                                data = data + '\xa0';
                            }
                            end.data = data;
                            var range = document.createElement('div');
                            range.innerHTML = pre;
                            var child = range.childNodes;
                            $(child).insertBefore(end);

                            // this.checkLinkHref(id);

                            var range = document.createRange();
                            range.setStart(end, data.length);
                            range.setEnd(end, data.length);
                            selection.removeAllRanges();
                            selection.addRange(range);
                        }
                    }
                },
                changeText: function (qid, content) {
                    if (qid !== this.answer.qid) {
                        return;
                    }
                    // content值为''时，代表用户删除了草稿
                    // content值为undefined，代表用户两次提交的是相同的草稿
                    // 其他值代表草稿内容
                    var _this = this;
                    this.isPosting = false;
                    var firstUseDraft = localStorage.getItem('firstUseDraft');
                    setTimeout(function () {
                        if (content == '') {
                            _this.status = '';
                        } else {
                            if (window.wenda.userData.is_login == 1 && !firstUseDraft) {
                                _this.status = '草稿已保存, 可在个人主页中查看';
                            } else {
                                _this.status = '草稿已保存';
                            }
                        }
                    }, 300);
                },
                updatetextStatus: function (qid, content, url, answerLeave) {
                    if (qid !== this.answer.qid) {
                        return;
                    }
                    this.isPosting = false;
                    if (answerLeave) {
                        this.destroyTheInstance();
                        return;
                    }
                    var _this = this;
                    this.lastId && clearTimeout(this.lastId);
                    this.lastId = setTimeout(function () {
                        _this.handleDraft();
                    }, 120000);
                    this.changeText(qid, content);
                },
                postDraftFail: function (qid, content, url, answerLeave, ansid) {
                    if (qid !== this.answer.qid) {
                        return;
                    }
                    this.isPosting = false;
                    tryTimes = tryTimes - 1;
                    tryTimes > 0 && this.handleDraft();
                },
                destroyTheInstance: function () {
                    // 给草稿tab发消息
                    this.$emit('closeAnswerToTab');
                    this.closeAnswer();
                },
                handleDraft: function () {
                    if (this.answer && this.answer.isEdit) { // 禁止编辑保存草稿；
                        return;
                    }

                    if (this.isPosting) {
                        clearTimeout(this.retryID);
                        this.retryID = setTimeout(function () {
                            this.handleDraft();
                        }.bind(this), 1000);
                        return;
                    }
                    this.isPosting = true;
                    var content = this.getContentToStorage();
                    var ansId = (this.answer.ansid && this.answer.ansid != 0) ? this.answer.ansid : null;
                    this.status = '草稿保存中...';
                    updateDraft.$emit('updateDraftContent', this.answer.qid, content, this.outsideLink, null, ansId);
                },
                initContentAnswer: function (qid, draftInfo) {
                    if (qid !== this.answer.qid || !draftInfo.content) {
                        return;
                    }
                    this.answer = Object.assign(this.answer, draftInfo);
                    this.outsideLink = draftInfo.url;
                    var draft = draftInfo.content;
                    if (draft) {
                        draft = draft.replace(/<\!\-\-video_in_edit\-\->[\s\S]*?<\!\-\-video_in_edit_end\-\->/gi, '');
                        var content = draft.replace(/\{!\-\- PGC_VIDEO\:(.+?)\-\-\}/gi, function ($1, $2) {
                            var data;
                            try {
                                data = JSON.parse($2);
                            } catch (e) {
                                return '';
                            }
                            var id = 'video_in_edit_' + Math.random();
                            var html = '<!--video_in_edit--><div id="' + id + '"></div><!--video_in_edit_end-->';
                            setTimeout(function () {
                                new VideoInEdit({
                                    el: document.getElementById(id),
                                    data: {
                                        video_data: {
                                            content: {
                                                vid: data.vid,
                                                vposter: data.vposter
                                            },
                                            title: data.title,
                                            source: data.source,
                                            type: data.type
                                        },
                                        upload_id: data.upload_id
                                    }
                                });
                            }, 100);

                            return html;
                        });
                        ueditorInstance.setContent(content);
                    }
                },
                icanfake: function () {
                    return wenda.userData.user_id == '2928085816' || wenda.userData.user_id == '3182162544' || wenda.userData.user_id == '5764704777' || wenda.userData.user_id == '54195567097' || wenda.userData.user_id == '91588269630' || wenda.userData.user_id == '92314774306';
                },
                forward_pgc: function () {
                    return wenda.userData.forward_pgc === 1;
                },
                click: function () {
                    if (window.wenda.userData.is_login == 0) {
                        login.getLogin();
                        return false;
                    }
                },
                toggleUpdateStatus: function (e) {
                    this.attitude = this.attitude ? 0 : 1;
                },
                leaveOperation: function () {
                    var content = this.getContentToStorage();
                    if (content.length == 0) {
                        $('body').toast({status: 'fail', text: '您还没有编写内容'});
                        return false;
                    }

                    if (this.answer && this.answer.isEdit) { // 禁止编辑保存草稿；
                        this.closeAnswer();
                        return;
                    }

                    var ansId;
                    if (this.answer.ansid && this.answer.ansid != 0) {
                        ansId = this.answer.ansid;
                    }
                    var answerLeave = this.answer.isEdit ? 'editAnswerLeave' : 'answerLeave';
                    updateDraft.$emit('updateDraftContent', this.answer.qid, content, this.outsideLink, answerLeave, ansId);
                },
                userPost: function () {
                    if (this.answer.ansid == 0 || !this.answer.ansid) {
                        this.postArticle();
                    } else {
                        new deleteAnswerConfirm({
                            data: {
                                // model: new model_answer(this.answer),
                                title: '覆盖回答',
                                word: '发表答案后，新的回答将覆盖您已经发表的回答，确定发表回答？',
                                todo: function () {
                                    this.postArticle();
                                }.bind(this)
                            }
                        });
                    }
                },
                encodeSearchParams: function (obj) {
                    var params = [];
                    Object.keys(obj).forEach(function (key) {
                        var value = obj[key];
                        if (typeof value === 'undefined') {
                            value = ''
                        }
                        params.push([key, encodeURIComponent(value)].join('='))
                    });
                    return params.join('&')
                },
                checkVerifyCode: function (code, e) {
                    // 创建所需 dom
                    if ($("#wukung_verify_code").length === 0) {
                        $("body").append('<div id="wukung_verify_code"></div>');
                        $("#wukung_verify_code").attr('style', 'background: white;position: fixed;top: 100px;left: 50%;width: 300px;height: 346px;margin-left: -150px;z-index: 999;')
                    }

                    function getCookie(cname) {
                        var name = cname + "=";
                        var decodedCookie = decodeURIComponent(document.cookie);
                        var ca = decodedCookie.split(';');
                        for (var i = 0; i < ca.length; i++) {
                            var c = ca[i];
                            while (c.charAt(0) == ' ') {
                                c = c.substring(1);
                            }
                            if (c.indexOf(name) == 0) {
                                return c.substring(name.length, c.length);
                            }
                        }
                        return "";
                    }

                    var opts = {
                        ele: 'wukung_verify_code',                       //验证码容器（id名称）
                        host: 'https://verify.snssdk.com',   //主机
                        aid: '1176',                        //appid
                        did: getCookie('t_webid'),                            //did:业务方决定,int类型
                        iid: getCookie('install_id'),                         //iid:业务方决定,int类型
                        fp: getCookie('s_v_web_id'),
                        lang: 'zh',                         //语言
                        app_name: 'wukong_pc',                  //app名称
                        challenge_code: code,             //错误码，由shark和业务确定,必须配置
                        // challenge_code: {"from": "shark_admin","type": "verify","subtype":"slide","detail":{ "punish_duration": 30,"exempt_duration":30}},
                        toolbarBackColor: '#fff',           //标题栏背景色
                        refreshFontColor: '#4A90E2',        //”刷新“字体文案颜色
                        refreshIconColor: '#4A90E2',        //刷新图片颜色
                        subBackColor: '#4A90E2',            //确定按钮背景颜色
                        subFontColor: '#fff',               //确定按钮字体颜色
                        validatePassBackColor: '#A0CC49',   //验证通过背景颜色
                        validateFailBackColor: '#EB2F2F',   //验证失败背景颜色
                        successCb: () => {
                            this.postArticle(e);
                        },            //验证成功的回调
                        errorCb: function () {
                            $('body').toast({status: 'fail', text: '验证失败，请重试'});
                        },              //验证失败手动关闭验证码的回调
                    };
                    var pointVerify = new SliderVerification(opts);
                    pointVerify.init();
                    pointVerify.show();
                },
                postArticle: function (e) {
                    window.console && console.log($.enterFrom, $.sourceFrom, $.finalFrom);
                    if (window.wenda.userData.is_login == 0) {
                        login.getLogin();
                        return false;
                    }
                    if (this.question_answered_tips) {
                        $('body').toast({status: 'warn', text: this.question_answered_tips});
                        return;
                    }
                    var me = this;
                    var content = this.getContentToPost();
                    var onlyImage = $(content).text().length == 0 && $('video', $(content)).length == 0;
                    if (content.length == 0
                        || content === '<p><span class="placeholder">我有靠谱回答</span></p>'
                        || content == '<p class="placeholder profit-type"><span class="text">原创回答得现金</span></p>'
                        || onlyImage) {
                        $('body').toast({status: 'fail', text: '您还没有编写内容'});
                        return false;
                    }
                    if (content.length == 0) {
                        $('body').toast({status: 'fail', text: '您还没有编写文字内容'});
                        return false;
                    }
                    if (me.isLoading) {
                        return false;
                    }
                    me.isLoading = true;
                    var forward_pgc = 0;
                    if (this.attitude) {
                        forward_pgc = 1;
                    }

                    var queryObj = $.querystringParse(location.search.replace('?', '')) || {};
                    var extra_tag = queryObj.extra_tag;
                    var queryObject = {
                        origin_source: this.origin_source
                    };

                    const enter_from = extra_tag === 'answer_get_bonus' ? 'answer_get_bonus' : $.enterFrom;

                    var formdata = {
                        qid: this.answer.qid,
                        content: content,
                        forward_pgc: forward_pgc,
                        enter_from: enter_from,
                        source_from: $.sourceFrom,
                        final_from: $.finalFrom
                    };

                    if (this.recommend_checked) {
                        formdata.recommend_self = true;
                    }

                    if (this.fakeUser) {
                        formdata.fake_user_id = this.fakeUser;
                    }
                    // 如果是推荐回答，提交的时候带上
                    var searchObj = $.querystringParse(location.search.replace('?', ''));
                    var _enter_qid = searchObj['enter_qid'];
                    var _from = searchObj['from'];
                    if (_from && _enter_qid === this.answer.qid) {
                        formdata.enter_qid = _enter_qid;
                        formdata.from = _from;
                    }
                    if (this.outsideLink) {
                        formdata.url = this.outsideLink;
                    }

                    // 带上星图任务
                    if (this.select_star_id && this.select_star_id !== 'NULL') { // 如果选择了新图任务
                        formdata.star_order_id = this.select_star_id;
                    }

                    var url = '/wenda/web/commit/postanswer/';
                    if (this.answer.ansid && this.answer.ansid != 0) {
                        url = '/wenda/web/commit/editanswer/';
                        formdata.ansid = this.answer.ansid;
                    }

                    // 为接口添加基础source字段
                    if (window.location.pathname.indexOf('/question/') !== -1) { // url的path包含question
                        queryObject.source = 'question_click_write_answer';
                    } else if (window.location.pathname.indexOf('/answer/') !== -1) { // url的path包含question
                        queryObject.source = 'answer_detail_write_answer';
                    }

                    // 为接口添加origin-source字段，用于区分来自于等我来答和消息通知的问题回答；
                    // 旧埋点仅仅保留从mp跳过来的
                    if (window.location.pathname.indexOf(formdata.qid) !== -1 && extra_tag === 'from_mp' && document.referrer !== '') { // 如果从MP后台打开的页面且回答的是当前问题
                        queryObject.origin_source = 'mp_wenda_invite';
                    }

                    if (this.encodeSearchParams(queryObject)) {
                        url = url + '?' + this.encodeSearchParams(queryObject)
                    }

                    $.Ajax(url, {
                        type: 'POST',
                        data: formdata,
                        context: me,
                        success: function (data, res) {
                            // 更新草稿tab页内的草稿信息
                            me.$emit('closeAnswerToTab');
                            me.close();
                            me.isLoading = false;
                            updateDraft.$emit('deleteDraft', me.answer.qid);

                            if (enter_from === 'answer_get_bonus' && me.answer.bonus) {
                                window.location.href = '/answer/' + res.ansid + '/?isRedirect=1&fromBonus=1&hasBonus=' + res.question_has_bonus;
                            } else if (me.answer.shouldRedirect) {
                                window.location.href = '/answer/' + res.ansid + '/?isRedirect=1';
                            } else if (me.profitAuthor) {
                                new TopToast({
                                    data: {
                                        linkMessage: '回答已发布，现金收入结算中。点击查看回答',
                                        linkUrl: '/answer/' + res.ansid + '/',
                                        existTime: 5000
                                    }
                                });
                            } else {
                                new TopToast({
                                    data: {
                                        linkMessage: '回答已发布，点击查看回答',
                                        linkUrl: '/answer/' + res.ansid + '/',
                                        existTime: 5000
                                    }
                                });
                            }
                        },
                        error: function (data) {
                            me.isLoading = false;
                            if (data.err_no == '1100' || data.err_no == '1101') {
                                $(".toast").hide();
                                me.checkVerifyCode(String(data.err_no), e);
                            }
                        }
                    });
                },
                close: function (e) {
                    if (!ueditorInstance) {
                        return;
                    }
                    var content = ueditorInstance.getContent();
                    var _this = this;
                    if (e && content.length > 0 && content !== '<p><span class="placeholder">我有靠谱回答</span></p>'
                        && content !== '<p class="placeholder profit-type"><span class="text">原创回答得现金</span></p>') {
                        new leaveModal({
                            data: {
                                doIt: _this.leaveOperation
                            }
                        });
                    } else {
                        _this.closeAnswer();
                    }
                },
                closeAnswer: function () {
                    $(window).off('.answer');
                    $('body').css('overflow', 'auto');
                    $('body').off('addOutsideLink', this.addOutsideLink);
                    ueditorInstance && ueditorInstance.destroy();
                    $(this.$el) && $(this.$el).remove();
                    this.lastId && clearTimeout(this.lastId);
                    this.$destroy();
                },
                goTotop: function () {
                    $(this.$el).find('.answer-widget').scrollTop(0);
                },
                ueditor: function () {
                    var _this = this;
                    var draft = this.answer.initContent || '<p><span class="placeholder">我有靠谱回答</span></p>';
                    if (draft) {
                        draft = draft.replace(/<\!\-\-video_in_edit\-\->[\s\S]*?<\!\-\-video_in_edit_end\-\->/gi, '');
                    }
                    // ueditorInstance = UE.getEditor('write-ueditor');
                    ueditorInstance = UM.getEditor('write-ueditor', {
                        tool: this.showLinkBtn ? ['h1 bold underline |  blockquote insertorderedlist insertunorderedlist | horizontal image video | undo redo | link'] : '',
                        initialFrameHeight: 300,
                        labelMap: {
                            image: '上传图片'
                        }
                    });
                    window.sss = ueditorInstance;
                    var ansid = _this.answer.ansid != 0 ? _this.answer.ansid : null;
                    ueditorInstance.ready(function () {
                        ueditorInstance.setOpt('question', {
                            qTitle: _this.answer.title,
                            qid: _this.answer.qid,
                            ansid: ansid
                        });
                        $('.edui-box.edui-icon.edui-default').append('+插入图片');
                        if (draft) {
                            var content = draft.replace(/\{!\-\- PGC_VIDEO\:(.+?)\-\-\}/gi, function ($1, $2) {
                                var data;
                                try {
                                    window.console && console.log('$2', $2);
                                    data = JSON.parse($2);
                                } catch (e) {
                                    return '';
                                }
                                if (!data.type) {
                                    data.type = data.group_id ? 'PGC' : 'UGC';
                                }
                                var id = 'video_in_edit_' + Math.random();
                                var html = '<!--video_in_edit--><div id="' + id + '"></div><!--video_in_edit_end-->';

                                setTimeout(function () {
                                    new VideoInEdit({
                                        el: document.getElementById(id),
                                        data: {
                                            video_data: {
                                                content: {
                                                    vid: data.vid,
                                                    vposter: data.vposter
                                                },
                                                title: data.title,
                                                source: data.source,
                                                type: data.type
                                            },
                                            upload_id: data.upload_id
                                        }
                                    });
                                }, 100);

                                return html;
                            });
                            ueditorInstance.setContent(content);
                        }

                        ueditorInstance.addListener('focus', function () {
                            var c = ueditorInstance.getContent();
                            // 修复c外层没有标签的情况
                            c = '<div>' + c + '</div>';
                            var t = $(c).text();
                            if (t == '我有靠谱回答' || t == '原创回答得现金') {
                                ueditorInstance.setContent('');
                                ueditorInstance.focus(false);
                                _this.click();
                            }
                            if (_this.question_answered_tips) {
                                $('body').toast({status: 'warn', text: _this.question_answered_tips});

                            }
                        });
                    });
                },
                getContentToPost: function () {
                    var content = ueditorInstance.getContent();
                    content = content.replace(/<\!\-\-video_in_edit\-\->([\s\S]*?)<\!\-\-video_in_edit_end\-\->/gi, function ($1, $2) {
                        if (!$2) {
                            return '';
                        }
                        var videoData = /upload\-data="(.*?)"/gi.exec($2);
                        if (!videoData || !videoData[1]) {
                            return '';
                        }
                        var data = JSON.parse(videoData[1].replace(/&quot;/gi, '"'));
                        if (!data.vid) {
                            return '';
                        }
                        var vposter = data.vposter || '';
                        if (/^(http:|https:)?\/\//.test(data.vposter)) {
                            vposter = vposter.replace(/.*?([^\/]+)$/, '$1');
                        }
                        return '<video data-vid="' + data.vid + '" poster="' + data.vposter + '" data-poster="' + (vposter || '') + '" data-type="' + data.type + '"></video>';
                    });

                    return content;
                },
                getContentToStorage: function () {
                    var content = ueditorInstance.getContent();
                    content = content.replace(/<\!\-\-video_in_edit\-\->([\s\S]*?)<\!\-\-video_in_edit_end\-\->/gi, function ($1, $2) {
                        if (!$2) {
                            return '';
                        }
                        var videoData = /upload\-data="(.*?)"/gi.exec($2);
                        if (!videoData || !videoData[1]) {
                            return '';
                        }
                        var data = JSON.parse(videoData[1].replace(/&quot;/gi, '"'));
                        if (!data.vid) {
                            return '';
                        }
                        var _data = {
                            vposter: data.vposter,
                            vid: data.vid,
                            title: data.title,
                            source: data.source,
                            type: data.type,
                            upload_id: data.upload_id
                        };
                        return '{!-- PGC_VIDEO:' + JSON.stringify(_data) + '--}';
                    });
                    return content;
                },
                addOutsideLink: function (e) {
                    e.stopPropagation();
                    var step = 2;
                    if (this.isFirstSeeLink) {
                        $.localStorage.setItem('hasSeeLink#' + window.wenda.userData.user_id, true);
                        this.isFirstSeeLink = false;
                        step = 1;
                    } else if (this.outsideLink != '') {
                        step = 3;
                    }
                    this.outsideLinkEditor = new OutsideLink({
                        data: {
                            step: step,
                            url: this.outsideLink,
                            placeholder: this.placeholder
                        }
                    });
                    var _this = this;
                    this.outsideLinkEditor.$on('outsideLinkCommit', function (url) {
                        this.outsideLink = url;
                        // 添加外链需要提交草稿
                        _this.handleDraft();
                    }.bind(this));
                    this.outsideLinkEditor.$on('outsideLinkCancle', function () {
                        this.outsideLink = '';
                    }.bind(this));
                },
                closeTips: function () {
                    this.question_tips = '';
                },
                getTips: function () {
                    var _this = this;
                    var url = '/wenda/v1/fetch/tips/';
                    $.Ajax({
                        url: url,
                        type: 'post',
                        dataType: 'json',
                        data: {
                            tips_source: 0,
                            qid: this.answer.qid
                        },
                        success: function (res) {
                            if (res.err_no == 0 && res.tips) {
                                // 兼容灰度逻辑
                                if (Object.prototype.toString.call(res.tips) == '[object Object]') {
                                    _this.question_tips = res.tips.text;
                                } else if (Object.prototype.toString.call(res.tips) == '[object Array]') {
                                    for (var i = 0; i < res.tips.length; i++) {
                                        var item = res.tips[i];
                                        if (item.tips_type == '1') {
                                            _this.question_tips = item.text;
                                        } else if (item.tips_type == '0') {
                                            _this.question_answered_tips = item.text;
                                        }
                                    }
                                }
                                if (_this.answer.isEdit) {
                                    _this.question_answered_tips = '';//编辑不需要判断已作答
                                }
                            }
                        }
                    });
                },
                initStarOrderList: function (data) {
                    this.star_order_list = data;
                }
            },
            beforeDestroy: function () {
                $(this.$el).off('keyup');
                $(this.$el).off('keydown', this.checkLink);
                clearTimeout(this.debounceID);
                clearTimeout(this.retryID);
                updateDraft.$off('initContentAnswer', this.initContentAnswer);
                updateDraft.$off('postDraftSuccess', this.updatetextStatus);
                updateDraft.$off('postDraftFail', this.postDraftFail);
                updateDraft.$off('theSame', this.changeText);
                starOrderList.$off('starOrderListReady', this.initStarOrderList);
                $('body').off('saveDraft', this.handleDraft);
            }
        });

    }, {
        "../../ui/toast/toast": 18,
        "../../widget/update-draft": 124,
        "../answer-nointerest/confirm": 22,
        "../leave-modal/leave-modal": 69,
        "../login/login": 75,
        "../outside-link-editor/outside-link-editor": 87,
        "../star_order_list": 117,
        "../toast/top-toast/top-toast": 121,
        "../util": 127,
        "./answer.tpl": 25,
        "./upload_video/uploader": 32,
        "./upload_video/video_in_edit/video_in_edit": 36,
        "vue-directive-tooltip": 7
    }],
    25: [function (require, module, exports) {
        module.exports = "<div class=\"answer-write\" data-log-from=\"AnswerWriting\" :class=\"{'firstSeeLink': isFirstSeeLink,'linkActive': outsideLink != ''}\">\n    <div class=\"answer-widget\">\n        <div class=\"main\">\n            <div class=\"header clearfix\">\n                <h2 class=\"title\">{{ answer.title }}</h2>\n                <div class=\"abstract\" v-show=\"answer.abstractText\">\n                        <div class=\"preview\" v-if=\"answer.abstractImage\">\n                            <img  :src=\"'http://p3.pstatp.com/list/640x360/' + answer.abstractImage\" alt=\"\">\n                        </div>\n                    {{ answer.abstractText }}\n                </div>\n                <div class=\"info\" v-if=\"answer.concern_tags && answer.concern_tags.length\">\n                    <a :href=\"'/tag/' + tag.concern_id + '/'\" target=\"_blank\" class=\"tag\" data-log=\"Visit_Tag|From_\" v-for=\"tag in answer.concern_tags\">\n                        {{ tag.name }}\n                    </a>\n                </div>\n            </div>\n            <div class=\"question-tips-pop\" v-if=\"question_tips\">{{question_tips}}<span class=\"close\" @click=\"closeTips\"></span></div>\n            <div class=\"write-content\">\n                <div id=\"write-ueditor\" class=\"write-ueditor\"></div>\n            </div>\n            <div class=\"submitbar fixedsub\">\n                <div v-if=\"show_recommend_self\" class='qingyun'>\n                    <input type=\"checkbox\" id=\"qingyun-checkbox\" :disabled=\"recommend_self_cnt === 0\" v-model=\"recommend_checked\">\n                    <label for=\"qingyun-checkbox\" class=\"qingyun-recommend\"></label>\n                    <span>参加青云计划自荐(本周还有{{recommend_self_cnt}}次自荐机会)</span>\n                    <a href=\"javascript:;\" class=\"qingyun-question\" @click=\"openQuestion\">\n                        <span style=\"width: 12px;height: 12px; margin-left: 4px\" >\n                            <img style=\"width: 12px;height: 12px\" src=\"http://p9.pstatp.com/origin/dacc0015f9efc489f598\" />\n                        </span>\n                    </a>\n                </div>\n                <div class=\"sep\"></div>\n                <div v-if=\"star_order_list.length > 0\" class=\"star\">\n                    绑定星图任务\n                    <select v-model=\"select_star_id\" :disabled=\"this.star_id_disabled\">\n                        <option value =\"NULL\">不绑定星图任务</option>\n                        <option v-for=\"item in star_order_list\"  v-bind:value=\"item.id\">{{item.name}}</option>\n                    </select>\n                    <span v-tooltip.bottom=\"'已关联内容的星图任务不展示，删除内容后解除关联'\" class=\"starinfo\">?</span>\n                </div>\n                <div v-if=\"star_order_list.length > 0\" class=\"sep\"></div>\n                <input class=\"fake_user_id\" v-if=\"icanfake()\" data-node=\"sub-uid\" type=\"text\" style=\"float:left;margin-top: 13px;width: 200px;text-indent: 10px;font-size: 18px;border-radius: 6px;border: 2px solid #333;line-height: 30px;\" placeholder=\"输入uid:\" v-model=\"fakeUser\" />\n                <div class=\"tip-commit\">\n                    <span class=\"manuscript-tip\">\n                        {{status}}<span v-if=\"status === ''\">分享你的真实观点和经验，通过汇编、洗稿等方式拼凑的回答将会被折叠</span>\n                    </span>\n                    <a data-node=\"post-content\"\n                        class=\"btn btn-primary write-content-submit\"\n                        :class=\"{'profit-btn': profitAuthor}\"\n                        @click=\"userPost\"\n                        data-log=\"Click_Post_Answer|From_\"\n                    >\n                        <template v-if=\"answer.isEdit\">提交修改</template>\n                        <template v-else>\n                            <template v-if=\"profitAuthor\">回答得现金</template>\n                            <template v-else>发表答案</template>\n                        </template>\n                    </a>\n                </div>\n            </div>\n            <a href=\"javascript:;\" class=\"action-btn close-btn\" data-node=\"close\" @click=\"close\">\n                <i class=\"iconfont icon-ask_close\"></i>\n            </a>\n            <a href=\"javascript:;\" class=\"action-btn go-back-btn\" data-node=\"go-back-btn\" @click=\"goTotop\">\n                <i class=\"iconfont icon-arrow\"></i>\n            </a>\n        </div>\n    </div>\n</div>\n";

    }, {}],
    26: [function (require, module, exports) {
        /**
         * Created by fenghongyu on 15/12/22.
         */

        var tpl = require('./answer_inline.tpl');
        var login = require('../login/login');
        require('./upload_video/uploader');
        require('./upload_video/video_in_edit/video_in_edit');

        var Tooltip = require('vue-directive-tooltip');
// require('vue-directive-tooltip/dist/vueDirectiveTooltip.css');
        var ueditorInstance = '';
        var VideoInEdit = require('./upload_video/video_in_edit/video_in_edit');
        var TopToast = require('../toast/top-toast/top-toast');
        var ToastTip = require('../toast/toast-tip/toast-tip');
        var OutsideLink = require('../outside-link-editor/outside-link-editor');
        var updateDraft = require('../../widget/update-draft');
        var starOrderList = require('../star_order_list');
        var util = require('../util');
        var tryTimes = 10;


        Vue.use(Tooltip);
        module.exports = Vue.extend({
            template: tpl,
            data: function () {
                return {
                    lastId: '',
                    debounceID: '',
                    isPosting: false,
                    retryID: '',
                    status: '',
                    isLoading: false,
                    isActive: false,
                    attitude: 0,
                    showSubmitBtn: false,
                    pinToTop: false,
                    showLinkBtn: false,
                    isFirstSeeLink: false,
                    outsideLink: '',
                    profitAuthor: false,
                    show_recommend_self: false,
                    recommend_self_cnt: 0,
                    recommend_checked: false,
                    star_order_list: starOrderList && starOrderList.star_order_list || [], // 星图任务列表
                    select_star_id: util.getUrlParam('star_order_id') || 'NULL', // 默认选中的星图任务
                };
            },
            props: ['answer'],
            computed: {},
            beforeCreate: function () {
                var $dom = $('<div></div>').appendTo('.answer-wrapper-inline');
                this.$options.el = $dom[0];

            },
            created: function () {
                this.$watch('attitude', function (newVal) {
                    $.localStorage.setItem('UPDATE_TO_MP_ATTITUDE', newVal);
                });
                starOrderList.$on('starOrderListReady', this.initStarOrderList); // 初始化star_order_list
            },
            mounted: function () {
                $('body').on('click', function (e) {
                    const qingyunModal = document.getElementById('qingyun-modal');
                    if (qingyunModal && e.target === qingyunModal) {
                        qingyunModal.style.display = 'none';
                    }
                });

                var _this = this;
                var queryObj = $.querystringParse(location.search.replace('?', '')) || {};
                var extra_tag = queryObj.extra_tag;

                const isFromBonus = extra_tag === 'answer_get_bonus';

                if (window.wenda.userData.wenda_profit_user && !isFromBonus) {
                    this.profitAuthor = true;
                }

                function debounce(idle, action) {
                    return function () {
                        var ctx = this, args = arguments;
                        clearTimeout(_this.debounceID);
                        _this.debounceID = setTimeout(function () {
                            action.apply(ctx, args);
                        }, idle);
                    };
                }

                this.lastId = setTimeout(function () {
                    _this.handleDraft();
                }, 120000);
                $(this.$el).on('keydown', this.checkLink);
                $(this.$el).on('keyup', debounce(2000, this.handleDraft));
                $(document).on('scroll', this.checkNeedPin);
                updateDraft.$on('initContentInline', this.initContentInline);
                updateDraft.$on('postDraftSuccess', this.updatetextStatus);
                updateDraft.$on('postDraftFail', this.postDraftFail);
                updateDraft.$on('theSame', this.changeText);
                updateDraft.$on('withoutContent', this.withoutContent);
                $('body').on('saveDraft', this.handleDraft);
                var retry_count = 10;
                var me = this;
                var flag = 1;

                function setUE() {
                    retry_count--;
                    if (retry_count == 0) {
                        return;
                    }
                    if (window.UM && window.UM.getEditor) {
                        me.ueditor();
                        if (flag == 1) {
                            updateDraft.$emit('initDraftInline', me.answer.qid);
                            flag = 0;
                        }
                    } else {
                        setTimeout(function () {
                            setUE();
                        }, 200);
                    }
                }

                if (window.wenda.userData.is_login) {
                    $.ajax({
                        url: '/wenda/white/check/',
                        type: 'POST',
                        data: {},
                        success: function (data) {
                            if (data.is_author == 1) {
                                this.showLinkBtn = true;
                                var isFirst = !$.localStorage.getItem('hasSeeLink#' + window.wenda.userData.user_id);
                                $(document).on('addOutsideLink', this.addOutsideLink);
                                if (isFirst) {
                                    this.isFirstSeeLink = true;
                                }
                                this.placeholder = data.placeholder;
                            }
                            setUE();
                        }.bind(this),
                        error: function (e) {
                            setUE();
                        }
                    });
                    $.ajax({
                        url: '/wenda/qingyun/recommen_self_cnt/',
                        type: 'get',
                        success: function (data) {
                            _this.show_recommend_self = data.show_recommend_self;
                            _this.recommend_self_cnt = data.recommend_self_cnt;
                        }
                    })
                } else {
                    setUE();
                }
                this.getTips();
            },
            methods: {
                openQuestion: function () {
                    document.getElementById('qingyun-modal').style.display = 'block';

                },
                withoutContent: function (qid) {
                    if (qid !== this.answer.qid) {
                        return;
                    }
                    this.isPosting = false;
                    this.status = '';
                },
                isEmptyRange: function (range) {
                    return range.startContainer == range.endContainer && range.startOffset == range.endOffset;
                },
                isOutLink: function (el) {
                    return el.className && el.className.indexOf('out-link') > -1;
                },
                checkLink: function (e) {
                    var wasEnterPressed = (e.keyCode == 13),
                        wasBackspacePressed = (e.keyCode == 8),
                        wasSpacePressed = e.keyCode == 32;
                    var that = this;

                    var content = ueditorInstance.getContent();
                    var selection = window.getSelection();
                    var range = selection.getRangeAt(0);
                    var start = range.startContainer;
                    var end = range.endContainer;
                    if (end.nodeType === 3 && start === end && $(end).parents('span[id^=link]').length == 0 && $(end).parents('a').length == 0) {
                        var data = end.data;
                        var endPos = range.endOffset;
                        var pre = data.substring(0, endPos);
                        var reg = /((http|https)\:\/\/)?@?[\w\.]*\.([a-z]+)(\/[\x00-\xff]*)?(\s|[^\x00-\xff])+$/i;
                        if (wasEnterPressed) {
                            var reg = /((http|https)\:\/\/)?@?[\w\.]*\.([a-z]+)(\/[\x00-\xff]*)?$/i
                        }
                        if (reg.test(pre)) {
                            if (/('|")/.test(pre.match(reg)[0].trim())) {
                                return;
                            }
                            var id = Math.random() + '';
                            id = id.replace(/^\d\./, '');
                            data = data.substring(endPos);
                            var isMail = false;
                            pre = pre.replace(reg, function ($0) {
                                $0 = $0.replace('<', '&lt;').replace('>', '&gt;').replace(/(\s|[^\x00-\xff])+$/g, function ($1, $2) {
                                    data = $1 + data;
                                    return '';
                                });
                                var href = $0;
                                if (!/^http/i.test(href)) {
                                    if (/^@/.test(href)) {
                                        isMail = true;
                                    }
                                    href = 'http://' + href;
                                } else {
                                    if (/^(http|https)\:\/\/@/i.test(href)) {
                                        isMail = true;
                                    }
                                }
                                return '<a id="link' + id + '" _href="' + href + '" class="out-link" target = "_blank">' + $0 + '</a>';
                            });
                            if (isMail) {
                                return;
                            }

                            if (!data.length) {
                                data = data + '\xa0';
                            }
                            end.data = data;
                            var range = document.createElement('div');
                            range.innerHTML = pre;
                            var child = range.childNodes;
                            $(child).insertBefore(end);

                            // this.checkLinkHref(id);

                            var range = document.createRange();
                            range.setStart(end, data.length);
                            range.setEnd(end, data.length);
                            selection.removeAllRanges();
                            selection.addRange(range);
                        }
                    }
                },
                checkLinkHref: function (id) {
                    var link = $('#link' + id);
                    var href = link.attr('href');
                    var _this = this;

                    function success(result) {
                        if (result.err_no == 0 && result.link_data.is_legal == 1) {
                            var trueLink = document.createElement('a');
                            trueLink.className = 'out-link';
                            trueLink.href = href;
                            trueLink.target = '_blank';
                            // trueLink.innerHTML = result.title;
                            trueLink.innerHTML = result.link_data.title || href;
                            trueLink.id = 'link' + id;

                            $(trueLink).insertBefore(link);
                            var text = link.text().split(' ');
                            var zeroWord = '\xa0';
                            if (text.length > 1) {
                                zeroWord += text.slice(1).join(' ');
                            }
                            var zeroWidthWord = document.createTextNode(zeroWord);
                            $(zeroWidthWord).insertBefore(link);
                            var selection = window.getSelection();
                            var _range = selection.getRangeAt(0);
                            var resetRange = _this.isEmptyRange(_range) && _range.startContainer.previousSibling && _this.isOutLink(_range.startContainer.previousSibling);
                            link.remove();
                            if (resetRange) {
                                var range = document.createRange();
                                range.setStart(zeroWidthWord, zeroWord.length);
                                range.setEnd(zeroWidthWord, zeroWord.length);
                                selection.removeAllRanges();
                                selection.addRange(range);
                            }
                        } else {
                            var textNode = document.createTextNode(link.text());
                            $(textNode).insertBefore(link);
                            link.remove();
                        }
                    }

                    $.ajax({
                        url: 'https://lf.snssdk.com/wenda/v1/link/check/',
                        type: 'GET',
                        dataType: 'json',
                        data: {
                            link: href
                        },
                        success: success
                    });
                    // setTimeout(function () {
                    //     success({err_no:0, link_data:{is_legal: 1 }})
                    // }, 100);
                },
                changeText: function (qid, content) {
                    if (qid !== this.answer.qid) {
                        return;
                    }
                    // content值为''时，代表用户删除了草稿
                    // content值为undefined，代表用户两次提交的是相同的草稿
                    // 其他值代表草稿内容
                    var _this = this;
                    this.isPosting = false;
                    var firstUseDraft = localStorage.getItem('firstUseDraft');
                    setTimeout(function () {
                        if (content == '' || content == '<p><span class="placeholder">我有靠谱回答</span></p>'
                            || content == '<p class="placeholder profit-type"><span class="text">原创回答得现金</span></p>') {
                            _this.status = '';
                        } else {
                            if (window.wenda.userData.is_login == 1 && !firstUseDraft) {
                                _this.status = '草稿已保存, 可在个人主页中查看';
                            } else {
                                _this.status = '草稿已保存';
                            }
                        }
                    }, 300);
                },
                updatetextStatus: function (qid, content, url, answerLeave) {
                    if (qid !== this.answer.qid) {
                        return;
                    }
                    var _this = this;
                    this.isPosting = false;
                    // answer_inline需要setContent
                    if (answerLeave == 'answerLeave') {
                        var draft = content;
                        if (draft) {
                            var content = draft.replace(/\{!\-\- PGC_VIDEO\:(.+?)\-\-\}/gi, function ($1, $2) {
                                var data;
                                try {
                                    data = JSON.parse($2);
                                } catch (e) {
                                    return '';
                                }
                                var id = 'video_in_edit_' + Math.random();
                                var html = '<!--video_in_edit--><div id="' + id + '"></div><!--video_in_edit_end-->';

                                setTimeout(function () {
                                    new VideoInEdit({
                                        el: document.getElementById(id),
                                        data: {
                                            video_data: {
                                                content: {
                                                    vid: data.vid,
                                                    vposter: data.vposter
                                                },
                                                title: data.title,
                                                source: data.source,
                                                type: data.type
                                            },
                                            upload_id: data.upload_id
                                        }
                                    });
                                }, 100);
                                return html;
                            });
                            ueditorInstance.setContent(content);
                        }
                    }
                    this.lastId && clearTimeout(this.lastId);
                    this.lastId = setTimeout(function () {
                        _this.handleDraft();
                    }, 120000);
                    this.changeText(qid, content);
                },
                postDraftFail: function (qid, content, url, answerLeave, ansid) {
                    if (qid !== this.answer.qid) {
                        return;
                    }
                    this.isPosting = false;
                    tryTimes = tryTimes - 1;
                    tryTimes > 0 && this.handleDraft();
                },

                handleDraft: function () {
                    if (this.isPosting) {
                        clearTimeout(this.retryID);
                        this.retryID = setTimeout(function () {
                            this.handleDraft();
                        }.bind(this), 1000);
                        return;
                    }
                    this.isPosting = true;
                    var content = this.getContentToStorage();
                    this.status = '草稿保存中...';
                    updateDraft.$emit('updateDraftContent', this.answer.qid, content, this.outsideLink);
                },
                forward_pgc: function () {
                    return wenda.userData.forward_pgc === 1;
                },
                click: function () {
                    // if (window.wenda.userData.is_login == 0) {
                    //     login.getLogin();
                    //     return false;
                    // }
                },
                toggleUpdateStatus: function (e) {
                    this.attitude = this.attitude ? 0 : 1;
                },
                encodeSearchParams: function (obj) {
                    var params = [];
                    Object.keys(obj).forEach(function (key) {
                        var value = obj[key];
                        if (typeof value === 'undefined') {
                            value = ''
                        }
                        params.push([key, encodeURIComponent(value)].join('='))
                    });
                    return params.join('&')
                },
                checkVerifyCode: function (code, e) {
                    // 创建所需 dom
                    if ($("#wukung_verify_code").length === 0) {
                        $("body").append('<div id="wukung_verify_code"></div>');
                        $("#wukung_verify_code").attr('style', 'background: white;position: fixed;top: 100px;left: 50%;width: 300px;height: 346px;margin-left: -150px;z-index: 999;')
                    }

                    function getCookie(cname) {
                        var name = cname + "=";
                        var decodedCookie = decodeURIComponent(document.cookie);
                        var ca = decodedCookie.split(';');
                        for (var i = 0; i < ca.length; i++) {
                            var c = ca[i];
                            while (c.charAt(0) == ' ') {
                                c = c.substring(1);
                            }
                            if (c.indexOf(name) == 0) {
                                return c.substring(name.length, c.length);
                            }
                        }
                        return "";
                    }

                    var opts = {
                        ele: 'wukung_verify_code',                       //验证码容器（id名称）
                        host: 'https://verify.snssdk.com',   //主机
                        aid: '1176',                        //appid
                        did: getCookie('t_webid'),                            //did:业务方决定,int类型
                        iid: getCookie('install_id'),                         //iid:业务方决定,int类型
                        fp: getCookie('s_v_web_id'),
                        lang: 'zh',                         //语言
                        app_name: 'wukong_pc',                  //app名称
                        challenge_code: code,             //错误码，由shark和业务确定,必须配置
                        // challenge_code: {"from": "shark_admin","type": "verify","subtype":"slide","detail":{ "punish_duration": 30,"exempt_duration":30}},
                        toolbarBackColor: '#fff',           //标题栏背景色
                        refreshFontColor: '#4A90E2',        //”刷新“字体文案颜色
                        refreshIconColor: '#4A90E2',        //刷新图片颜色
                        subBackColor: '#4A90E2',            //确定按钮背景颜色
                        subFontColor: '#fff',               //确定按钮字体颜色
                        validatePassBackColor: '#A0CC49',   //验证通过背景颜色
                        validateFailBackColor: '#EB2F2F',   //验证失败背景颜色
                        successCb: () => {
                            this.postArticle(e);
                        },            //验证成功的回调
                        errorCb: function () {
                            $('body').toast({status: 'fail', text: '验证失败，请重试'});
                        },              //验证失败手动关闭验证码的回调
                    };
                    var pointVerify = new SliderVerification(opts);
                    pointVerify.init();
                    pointVerify.show();
                },
                postArticle: function (e) {
                    if (window.wenda.userData.is_login == 0) {
                        login.getLogin();
                        return false;
                    }
                    if (this.question_answered_tips) {
                        $('body').toast({status: 'warn', text: this.question_answered_tips});
                        return;
                    }
                    var me = this;
                    var content = this.getContentToPost();
                    var onlyImage = $(content).text().length == 0 && $('video', $(content)).length == 0;
                    if (content.length == 0 || onlyImage) {
                        $('body').toast({status: 'fail', text: '您还没有编写内容'});
                        return false;
                    }
                    if (content.length == 0) {
                        $('body').toast({status: 'fail', text: '您还没有编写文字内容'});
                        return false;
                    }
                    if (me.isLoading) {
                        return false;
                    }
                    me.isLoading = true;
                    var forward_pgc = 0;
                    if (this.attitude) {
                        forward_pgc = 1;
                    }

                    var queryObj = $.querystringParse(location.search.replace('?', '')) || {};
                    var extra_tag = queryObj.extra_tag;
                    // 从query取， 并且判断用户是否在浏览器直接粘贴链接
                    // 需求：https://bytedance.feishu.cn/docs/doccnvgmEtr6TtFGqiZisBSqNFX
                    var origin_source = document.referrer === '' ? 'question_click_write_answer_link' : (queryObj.origin_source || '');
                    var queryObject = {
                        origin_source: origin_source
                    };

                    const enter_from = extra_tag === 'answer_get_bonus' ? 'answer_get_bonus' : $.enterFrom;

                    var formdata = {
                        qid: this.answer.qid,
                        content: content,
                        forward_pgc: forward_pgc,
                        enter_from: enter_from,
                        source_from: $.sourceFrom,
                        final_from: $.finalFrom
                    };

                    if (this.recommend_checked) {
                        formdata.recommend_self = true;
                    }
                    // 如果是推荐回答，提交的时候带上
                    var searchObj = $.querystringParse(location.search.replace('?', ''));
                    var _enter_qid = searchObj['enter_qid'];
                    var _from = searchObj['from'];
                    if (_from && _enter_qid === this.answer.qid) {
                        formdata.enter_qid = _enter_qid;
                        formdata.from = _from;
                    }
                    if (this.outsideLink) {
                        formdata.url = this.outsideLink;
                    }

                    // 带上星图任务
                    if (this.select_star_id && this.select_star_id !== 'NULL') { // 如果选择了新图任务
                        formdata.star_order_id = this.select_star_id;
                    }

                    // 为接口添加基础source字段
                    if (window.location.pathname.indexOf('/question/') !== -1) { // url的path包含question
                        queryObject.source = 'question_click_write_answer';
                    } else if (window.location.pathname.indexOf('/answer/') !== -1) { // url的path包含question
                        queryObject.source = 'answer_detail_write_answer';
                    }

                    // 为接口添加origin-source字段，用于区分来自于等我来答和消息通知的问题回答；
                    // 旧埋点仅仅保留从mp跳过来的
                    if (window.location.pathname.indexOf(formdata.qid) !== -1 && extra_tag === 'from_mp' && document.referrer !== '') { // 如果从MP后台打开的页面且回答的是当前问题
                        queryObject.origin_source = 'mp_wenda_invite';
                    }

                    var url = '/wenda/web/commit/postanswer/?' + this.encodeSearchParams(queryObject);

                    $.Ajax(url, {
                        type: 'POST',
                        data: formdata,
                        context: me,
                        success: function (data, res) {
                            me.isLoading = false;
                            if (me.profitAuthor) {
                                ueditorInstance.setContent('<p class="placeholder profit-type"><span class="text">原创回答得现金</span></p>');
                            } else {
                                ueditorInstance.setContent('<p><span class="placeholder">我有靠谱回答</span></p>');
                            }
                            me.status = '';
                            updateDraft.$emit('deleteLocalDraftAfterPost', me.answer.qid);

                            // 如果是从答题拿钱入口进的问题，提交回答之后需要提示红包是否还有效
                            if (enter_from === 'answer_get_bonus' && me.answer.bonus) {
                                window.location.href = '/answer/' + res.ansid + '/?isRedirect=1&fromBonus=1&hasBonus=' + res.question_has_bonus;
                            } else if (me.answer.shouldRedirect) {
                                window.location.href = '/answer/' + res.ansid + '/?isRedirect=1';
                            } else if (me.profitAuthor) {
                                new TopToast({
                                    data: {
                                        linkMessage: '回答已发布，现金收入结算中。点击查看回答',
                                        linkUrl: '/answer/' + res.ansid + '/',
                                        existTime: 5000
                                    }
                                });
                            } else {
                                new TopToast({
                                    data: {
                                        linkMessage: '回答已发布，点击查看回答',
                                        linkUrl: '/answer/' + res.ansid + '/',
                                        existTime: 5000
                                    }
                                });
                            }
                        },
                        error: function (data) {
                            me.isLoading = false;
                            if (data.err_no == '1100' || data.err_no == '1101') {
                                $(".toast").hide();
                                me.checkVerifyCode(String(data.err_no), e);
                            }
                        }
                    });
                },
                ueditor: function () {
                    var draft = '',
                        initText = '';
                    if (this.profitAuthor) {
                        draft = '<p class="placeholder profit-type"><span class="text">原创回答得现金</span></p>';
                        initText = '<p class="placeholder profit-type"><span class="text">原创回答得现金</span></p>';
                    } else {
                        draft = '<p><span class="placeholder">我有靠谱回答</span></p>';
                        initText = '<span class=\'placeholder\'>我有靠谱回答</span>';
                    }
                    var _this = this;
                    if ($('#write-ueditor-inline').length == 0) {
                        return;
                    }
                    ueditorInstance = UM.getEditor('write-ueditor-inline', {
                        initialFrameHeight: 106,
                        // autoHeightEnabled:false,
                        labelMap: {
                            image: '上传图片'
                        },
                        initialContent: initText,
                        autoFloatEnabled: false,
                        autoHeightEnabled: true,
                        tool: this.showLinkBtn ? ['h1 bold underline |  blockquote insertorderedlist insertunorderedlist | horizontal image video | undo redo | link'] : ''
                    });

                    var pop_btn = $('<div data-node="answer-pop" data-log="Click_FullScreen_Write|From_Question_Answer" class="answer-pop"><i class="iconfont  icon-ask_full_screen_icon"></i></div>');
                    // pop_btn.mousedown(this.saveDraft.bind(this));

                    $('.answer-wrapper-inline .edui-toolbar').append(pop_btn);

                    this.ueditorInstance = ueditorInstance;
                    var ansid = _this.answer.ansid != 0 ? _this.answer.ansid : null;
                    ueditorInstance.ready(function () {
                        ueditorInstance.setOpt('question', {
                            qTitle: _this.answer.title,
                            qid: _this.answer.qid,
                            ansid: ansid
                        });
                        // 不出滚动条
                        if (draft) {
                            var content = draft.replace(/\{!\-\- PGC_VIDEO\:(.+?)\-\-\}/gi, function ($1, $2) {
                                var data;
                                try {
                                    data = JSON.parse($2);
                                } catch (e) {
                                    return '';
                                }
                                var id = 'video_in_edit_' + Math.random();
                                var html = '<!--video_in_edit--><div id="' + id + '"></div><!--video_in_edit_end-->';

                                setTimeout(function () {
                                    new VideoInEdit({
                                        el: document.getElementById(id),
                                        data: {
                                            video_data: {
                                                content: {
                                                    vid: data.vid,
                                                    vposter: data.vposter
                                                },
                                                title: data.title,
                                                source: data.source,
                                                type: data.type
                                            },
                                            upload_id: data.upload_id
                                        }
                                    });
                                }, 100);

                                return html;
                            });
                            ueditorInstance.setContent(content);


                        }
                        ueditorInstance.addListener('focus', function () {
                            if (!_this.isActive) {
                                _this.isActive = true;
                                $.log.event('Click_Write', 'From_Question_Answer');
                            }
                            var c = ueditorInstance.getContent();
                            // 修复c外层没有标签的情况
                            c = '<div>' + c + '</div>';
                            var t = $(c).text();
                            if (t == '我有靠谱回答' || t == '原创回答得现金') {
                                ueditorInstance.setContent('');
                                // 修复偶尔单击不出光标
                                _this.ueditorInstance.focus(false);
                                _this.click();
                            }
                            _this.showSubmitBtn = true;
                            _this.ueditorInstance.setHeight(138);
                            if (_this.question_answered_tips) {
                                $('body').toast({status: 'warn', text: _this.question_answered_tips});

                            }
                        });
                    });
                },
                getContentToPost: function () {
                    var content = ueditorInstance.getContent();
                    content = content.replace(/<\!\-\-video_in_edit\-\->([\s\S]*?)<\!\-\-video_in_edit_end\-\->/gi, function ($1, $2) {
                        if (!$2) {
                            return '';
                        }
                        var videoData = /upload\-data="(.*?)"/gi.exec($2);
                        if (!videoData || !videoData[1]) {
                            return '';
                        }
                        var data = JSON.parse(videoData[1].replace(/&quot;/gi, '"'));
                        if (!data.vid) {
                            return '';
                        }
                        var vposter = data.vposter || '';
                        if (/^(http:|https:)?\/\//.test(data.vposter)) {
                            vposter = vposter.replace(/.*?([^\/]+)$/, '$1');
                        }
                        return '<video data-vid="' + data.vid + '" poster="' + data.vposter + '" data-poster="' + (vposter || '') + '" data-type="' + data.type + '"></video>';
                    });

                    return content;
                },
                getContentToStorage: function () {
                    var content = ueditorInstance.getContent();
                    content = content.replace(/<\!\-\-video_in_edit\-\->([\s\S]*?)<\!\-\-video_in_edit_end\-\->/gi, function ($1, $2) {
                        if (!$2) {
                            return '';
                        }
                        var videoData = /upload\-data="(.*?)"/gi.exec($2);
                        if (!videoData || !videoData[1]) {
                            return '';
                        }
                        var data = JSON.parse(videoData[1].replace(/&quot;/gi, '"'));
                        if (!data.vid) {
                            return '';
                        }
                        var _data = {
                            vposter: data.vposter,
                            vid: data.vid,
                            title: data.title,
                            source: data.source,
                            type: data.type,
                            upload_id: data.upload_id
                        };
                        return '{!-- PGC_VIDEO:' + JSON.stringify(_data) + '--}';
                    });
                    return content;
                },
                checkNeedPin: function () {
                    if (this.showSubmitBtn) {
                        var $dom = $(this.$el).find('.answer-write');
                        var sTop = $(window).scrollTop();
                        // if (sTop >= top && sTop < top + dom.offsetHeight) {
                        var top = $dom.offset().top;
                        var headerHeight = $('.index-header').position().top; // + $('.index-header').height();
                        if (sTop >= top - headerHeight && sTop < top - headerHeight + $dom.height()) {
                            if (this.pinToTop === false) {
                                this.pinToTop = true;
                            }
                        } else {
                            if (this.pinToTop === true) {
                                this.pinToTop = false;
                            }
                        }
                    }
                },
                initContentInline: function (qid, draftInfo) {
                    if (qid !== this.answer.qid || !draftInfo.content) {
                        return;
                    }
                    this.outsideLink = draftInfo.url;
                    var defaultText = this.profitAuthor ? '<p class="placeholder profit-type"><span class="text">原创回答得现金</span></p>'
                        : '<p><span class="placeholder">我有靠谱回答</span></p>';
                    var draft = draftInfo.content || defaultText;
                    // var draft = draftInfo.content || '<p><span class="placeholder">我有靠谱回答</span></p>';
                    if (draft) {
                        draft = draft.replace(/<\!\-\-video_in_edit\-\->[\s\S]*?<\!\-\-video_in_edit_end\-\->/gi, '');
                        var content = draft.replace(/\{!\-\- PGC_VIDEO\:(.+?)\-\-\}/gi, function ($1, $2) {
                            var data;
                            try {
                                data = JSON.parse($2);
                            } catch (e) {
                                return '';
                            }
                            var id = 'video_in_edit_' + Math.random();
                            var html = '<!--video_in_edit--><div id="' + id + '"></div><!--video_in_edit_end-->';
                            setTimeout(function () {
                                new VideoInEdit({
                                    el: document.getElementById(id),
                                    data: {
                                        video_data: {
                                            content: {
                                                vid: data.vid,
                                                vposter: data.vposter
                                            },
                                            title: data.title,
                                            source: data.source,
                                            type: data.type
                                        },
                                        upload_id: data.upload_id
                                    }
                                });
                            }, 100);

                            return html;
                        });
                        ueditorInstance.setContent(content);
                    }
                },
                getTips: function () {
                    var _this = this;
                    var url = '/wenda/v1/fetch/tips/';
                    $.Ajax({
                        url: url,
                        type: 'post',
                        dataType: 'json',
                        data: {
                            tips_source: 0,
                            qid: this.answer.qid
                        },
                        success: function (res) {
                            if (res.err_no == 0 && res.tips) {
                                // 兼容灰度逻辑
                                if (Object.prototype.toString.call(res.tips) == '[object Object]') {
                                    _this.question_tips = res.tips.text;
                                } else if (Object.prototype.toString.call(res.tips) == '[object Array]') {
                                    for (var i = 0; i < res.tips.length; i++) {
                                        var item = res.tips[i];
                                        if (item.tips_type == '1') {
                                            _this.question_tips = item.text;
                                        } else if (item.tips_type == '0') {
                                            _this.question_answered_tips = item.text;
                                        }
                                    }
                                }
                            }
                        }
                    });
                },
                addOutsideLink: function () {
                    var step = 2;
                    if (this.isFirstSeeLink) {
                        $.localStorage.setItem('hasSeeLink#' + window.wenda.userData.user_id, true);
                        this.isFirstSeeLink = false;
                        step = 1;
                    } else if (this.outsideLink != '') {
                        step = 3;
                    }
                    this.outsideLinkEditor = new OutsideLink({
                        data: {
                            step: step,
                            url: this.outsideLink,
                            placeholder: this.placeholder
                        }
                    });
                    var _this = this;
                    this.outsideLinkEditor.$on('outsideLinkCommit', function (url) {
                        this.outsideLink = url;
                        // 添加外链需要提交草稿
                        _this.handleDraft();
                    }.bind(this));
                    this.outsideLinkEditor.$on('outsideLinkCancle', function () {
                        this.outsideLink = '';
                    }.bind(this));
                },
                initStarOrderList: function (data) {
                    this.star_order_list = data;
                }
            },
            beforeDestroy: function () {
                $(document).off('scroll', this.checkNeedPin);
                $(this.$el).off('keydown', this.checkLink);
                $(this.$el).off('keyup');
                clearTimeout(this.debounceID);
                clearTimeout(this.retryID);
                updateDraft.$off('initContentInline', this.initContentInline);
                updateDraft.$off('postDraftSuccess', this.updatetextStatus);
                updateDraft.$off('postDraftFail', this.postDraftFail);
                updateDraft.$off('theSame', this.changeText);
                updateDraft.$off('withoutContent', this.withoutContent);
                starOrderList.$off('starOrderListReady', this.initStarOrderList);
                $('body').off('saveDraft', this.handleDraft);
            }
        });

    }, {
        "../../widget/update-draft": 124,
        "../login/login": 75,
        "../outside-link-editor/outside-link-editor": 87,
        "../star_order_list": 117,
        "../toast/toast-tip/toast-tip": 119,
        "../toast/top-toast/top-toast": 121,
        "../util": 127,
        "./answer_inline.tpl": 27,
        "./upload_video/uploader": 32,
        "./upload_video/video_in_edit/video_in_edit": 36,
        "vue-directive-tooltip": 7
    }],
    27: [function (require, module, exports) {
        module.exports = "<div @click=\"click\" :class=\"{'firstSeeLink': isFirstSeeLink,'linkActive': outsideLink != ''}\">\n    <div class=\"anchor\"></div>\n\n    <div class=\"answer-write\">\n        <div class=\"write\">\n            <div class=\"write-content\" :class=\"{'fixed': pinToTop}\">\n                <div class='hold-position' v-show='pinToTop'></div>\n                <div id=\"write-ueditor-inline\" class=\"write-ueditor\"></div>\n            </div>\n        </div>\n    </div>\n\n    <div class=\"submitbar inline-submitbar\" v-show=\"showSubmitBtn\">\n<!--<a data-node=\"set-update-status\" class=\"update-to-mp\" :class=\"{'j-update-status':attitude}\" href=\"javascript:;\" v-if=\"forward_pgc\" @click=\"toggleUpdateStatus\">\n    <i class=\"check-box\"></i>同步到头条号\n</a>-->\n        <div v-if=\"show_recommend_self\" class='qingyun'>\n            <input type=\"checkbox\" id=\"qingyun-checkbox\" :disabled=\"recommend_self_cnt===0\" v-model=\"recommend_checked\">\n            <label for=\"qingyun-checkbox\" class=\"qingyun-recommend\"></label>\n            <span>参加青云计划自荐(本周还有{{recommend_self_cnt}}次自荐机会)</span>\n            <a href=\"javascript:;\" class=\"qingyun-question\" @click=\"openQuestion\">\n                <span style=\"width: 12px;height: 12px; margin-left: 4px\">\n                    <img style=\"width: 12px;height: 12px\" src=\"http://p9.pstatp.com/origin/dacc0015f9efc489f598\" />\n                </span>\n            </a>\n        </div>\n        <div v-if=\"show_recommend_self\" class=\"sep\"></div>\n        <div v-if=\"star_order_list.length > 0\" class=\"star\">\n            绑定星图任务\n            <select v-model=\"select_star_id\">\n                <option value =\"NULL\">不绑定星图任务</option>\n                <option v-for=\"item in star_order_list\"  v-bind:value=\"item.id\">{{item.name}}</option>\n            </select>\n            <span v-tooltip.bottom=\"'已关联内容的星图任务不展示，删除内容后解除关联'\" class=\"starinfo\">?</span>\n        </div>\n        <div v-if=\"star_order_list.length > 0\" class=\"sep\"></div>\n        <div class='tip-commit'>\n            <span class=\"manuscript-tip\">\n            {{status}}<span v-if=\"status === ''\">分享你的真实观点和经验，通过汇编、洗稿的等方式拼凑的回答将会被折叠</span>\n            </span>\n            <a data-node=\"post-content\" v-if=\"profitAuthor\" class=\"btn btn-primary write-content-submit profit-btn\" data-log=\"Click_Post_Answer|From_Question_Answer\" @click=\"postArticle\">回答得现金</a>\n            <a data-node=\"post-content\" v-else class=\"btn btn-primary write-content-submit\" data-log=\"Click_Post_Answer|From_Question_Answer\" @click=\"postArticle\">发表答案</a>\n        </div>\n    </div>\n</div>\n";

    }, {}],
    28: [function (require, module, exports) {
        var tpl = require('./setting.tpl');
        var deleteAnswerConfirm = require('../../answer-nointerest/confirm');
        var toast = require('../../../ui/toast/toast.js');
        require('../../../ui/toast/toast');
        var Tooltip = require('vue-directive-tooltip');

        Vue.use(Tooltip);
        module.exports = Vue.component('w-answer-setting', {
            template: tpl,
            data: function () {
                return {};
            },
            props: ['answer', 'is_star_order_accepted'],
            mounted: function () {
                toast();
            },
            methods: {
                doDelete: function () {
                    if (this.answer && this.answer.disable_delete) {
                        // 不用提示
                        // $('body').toast({ status: 'success', text: '已确认发布的星图任务无法删除，如有问题，请在页面右下角「反馈」进行反馈', keep: 3000 });
                        return;
                    }
                    new deleteAnswerConfirm({
                        data: {
                            // model: new model_answer(this.answer),
                            title: '删除回答',
                            word: '确认删除该条回答吗？',
                            success_word: '刪除成功',
                            todo: function () {
                                this.deleteIt();
                            }.bind(this)
                        }
                    });
                },
                deleteIt: function () {
                    var url = '/wenda/web/commit/deleteanswer/';
                    $.Ajax(url, {
                        type: 'POST',
                        data: {
                            ansid: this.answer.ansid,
                            qid: this.answer.question.qid
                        },
                        success: function (data) {
                            this.answer.is_delete = true;
                            this.$emit('answer.deleted', {
                                qid: this.answer.question.qid,
                                ansid: this.answer.ansid
                            });
                        }.bind(this)
                    });
                },
                forbidComment: function () {
                    this.opanswercomment(0);
                },
                permitComment: function () {
                    this.opanswercomment(1);
                },
                opanswercomment: function (type) {
                    $.Ajax('/wenda/web/commit/opanswercomment/', {
                        type: 'POST',
                        data: {
                            ansid: this.answer.ansid,
                            op_type: type
                        },
                        success: function () {

                            if (type == 1) {
                                this.answer.is_ban_comment = 0;
                                $('body').toast({
                                    status: 'success',
                                    text: '已开启用户评论'
                                });
                                this.$emit('answer.comment.permit');
                            } else {
                                this.answer.is_ban_comment = 1;
                                $('body').toast({
                                    status: 'success',
                                    text: '已禁止用户评论'
                                });
                                this.$emit('answer.comment.forbidden');
                            }
                        }.bind(this)
                    });
                }
            }
        });

    }, {
        "../../../ui/toast/toast": 18,
        "../../../ui/toast/toast.js": 18,
        "../../answer-nointerest/confirm": 22,
        "./setting.tpl": 29,
        "vue-directive-tooltip": 7
    }],
    29: [function (require, module, exports) {
        module.exports = "<div class=\"w-answer-setting\">\n    <span class=\"set\">设置<i class=\"iconfont icon-ask_arrow_down\"></i></span>\n    <div class=\"layer\" :class=\"{'forbidden-comment':answer.is_ban_comment}\">\n        <template v-if=\"answer.disable_delete\">\n            <span v-tooltip.left=\"answer.delete_tips || '该状态下文章不能删除'\"><a href=\"javascript:\" :class=\"{ 'delete': true, 'no-edit': true} \" data-log=\"DeleteAnswer|From_Setting\" @click=\"doDelete\">删除回答</a></span>\n        </template>\n        <template v-else>\n            <a href=\"javascript:\" :class=\"{ 'delete': true, 'no-edit': false} \" data-log=\"DeleteAnswer|From_Setting\" @click=\"doDelete\">删除回答</a>\n        </template>\n        <a href=\"javascript:\" class=\"forbid-comment\" data-log=\"Toggle_CommentControl|From_Setting\" @click=\"forbidComment\">禁止评论</a>\n        <a href=\"javascript:\" class=\"permit-comment\" data-log=\"Toggle_CommentControl|From_Setting\" @click=\"permitComment\">允许评论</a>\n    </div>\n</div>\n";

    }, {}],
    30: [function (require, module, exports) {
        var tpl = require('./upload_poster.tpl');
        var jsLoaded = false;

        module.exports = Vue.extend({
            template: tpl,
            data: function () {
                return {
                    currentTag: 0,
                    selected: null,
                    sysImg: [],
                    converting: false,
                    upload_id: undefined
                };
            },
            beforeCreate: function () {
                this.$options.el = $('<div></div>').appendTo('body')[0];
            },
            created: function () {
                this.getSysPosters();
            },
            mounted: function () {
                this.overflow = document.body.style.overflow;
                document.body.style.overflow = 'hidden';
                this.initFlash();
            },
            methods: {
                select: function (img) {
                    this.selected = img;
                },
                done: function () {
                    if (this.selected) {
                        this.$emit('uploadPoster.select', this.selected);
                    }
                    this.destroy();
                },
                getSysPosters: function () {
                    $.ajax('/wenda/web/videopostercandidates/brow/', {
                        type: 'GET',
                        data: {
                            upload_id: this.upload_id,
                            _: new Date().getTime()
                        },
                        success: function (data) {
                            this.sysImg = data.data || [];
                            if (!data || !data.data.length) {
                                this.converting = true;
                            }
                        }.bind(this)
                    });
                },
                initFlash: function () {
                    var _this = this;

                    function init() {
                        jsLoaded = true;
                        xiuxiu.setLaunchVars('cropPresets', '640x360'),
                            xiuxiu.setLaunchVars('avatarPreview', {
                                visible: !0,
                                label: '裁剪预览',
                                large: {
                                    width: 140,
                                    height: 140,
                                    label: '大尺寸'
                                }
                            });
                        xiuxiu.setLaunchVars('cameraEnabled', 0);
                        xiuxiu.setLaunchVars('localFileEnabled', 0);
                        xiuxiu.setUploadURL(location.origin + '/wenda/web/upload/photo/');
                        xiuxiu.setUploadType(2);
                        xiuxiu.setUploadDataFieldName('upfile');
                        xiuxiu.embedSWF('up-flash', 5, '100%', '400px');
                        xiuxiu.onUploadResponse = function (data) {
                            data = JSON.parse(data);
                            _this.selected = data.url;
                            _this.original = data.original;
                            _this.$emit('uploadPoster.select', _this.original);
                            _this.destroy();
                        }.bind(_this);

                    }

                    if (jsLoaded) {
                        init();
                    } else {
                        $.getScript('https://s2.pstatp.com/pgc/v2/resource/pgc_web/static/js/lib/meitu.828a886.js', init);
                    }
                },
                close: function () {
                    $(this.$el).hide();
                    document.body.style.overflow = this.overflow;
                    // this.$destroy();
                },
                destroy: function () {
                    document.body.style.overflow = this.overflow;
                    $(this.$el).remove();
                    this.$destroy();
                }
            }
        });
    }, {"./upload_poster.tpl": 31}],
    31: [function (require, module, exports) {
        module.exports = "<div class=\"w-upload-poster\">\n    <div class=\"up-main\">\n        <a class=\"up-close iconfont icon-ask_close\" @click=\"destroy\"></a>\n        <div class=\"up-tags\">\n            <div class=\"up-tag\" :class=\"{active:currentTag==0}\" @click=\"currentTag = 0\">上传封面</div>\n            <div class=\"up-tag\" :class=\"{active:currentTag==1}\" @click=\"currentTag = 1\">系统封面</div>\n        </div>\n        <div class=\"up-content up-content-upload\" v-show=\"currentTag == 0\">\n            <div id=\"up-flash\"></div>\n\n            <div class=\"up-tip\">提示：上传优质封面，将有利于获得更多的推荐机会。请务必上传和视频内容相关、有引导价值的图片，如有作弊情况将封号处理。</div>\n        </div>\n        <div class=\"up-content up-content-sys\" v-show=\"currentTag == 1\">\n            <div class=\"up-sys-posters clearfix\" v-if=\"!converting\">\n                <div class=\"up-sys-poster\" :class=\"{selected:selected == img.img}\" @click=\"select(img.img)\" v-for=\"img in sysImg\">\n                    <img :src=\"img.img\" />\n                    <div class=\"up-sys-poster-selected\">\n                        <i class=\"iconfont icon-details_attention_icon\"></i>\n                    </div>\n                </div>\n            </div>\n\n            <div class=\"up-sys-oper\" v-if=\"!converting\">\n                <button class=\"up-sys-btn up-sys-btn-ok\" @click=\"done\">确认</button>\n                <button class=\"up-sys-btn up-sys-btn-cancel\" @click=\"destroy\">取消</button>\n            </div>\n\n            <div class=\"up-sys-none\" v-if=\"converting\">\n                <div class=\"up-sys-none-tip\">视频处理中，暂无系统封面，请使用上传封面</div>\n\n                <button class=\"up-sys-btn-upload\" @click=\"currentTag = 0\">立即上传封面</button>\n                <div class=\"up-sys-upload-tip\">上传优质的封面将获得更多的播放量</div>\n            </div>\n        </div>\n    </div>\n</div>";

    }, {}],
    32: [function (require, module, exports) {
        var tpl = require('./uploader.tpl');
        require('./video/video');
        require('../../../ui/toast/toast');

        function ByteVideoUploaderClass(options) {

            function emp() {
            }

            options = options || {};
            this.options = options;
            this.dom = options.dom;
            this.auth = options.auth;
            this.ByteVideoUploader = options.ByteVideoUploader || window.ByteVideoUploader;
            this.add = options.add || emp;
            this.send = options.send || emp;
            this.progress = options.progress || emp;
            this.fail = options.fail || emp;
            this.done = options.done || emp;
            this.byteVideoUploaderIns = this.init();
            this.start();
        }

        ByteVideoUploaderClass.prototype.start = function () {
            var that = this;
            var byteVideoUploaderIns = that.byteVideoUploaderIns;
            that.dom.addEventListener("change", function (e) {
                var file = that.dom.files[0];
                if (that.add && that.add(e, that.dom) === false) {
                    $(that.dom).val('');
                    return
                }
                if (!byteVideoUploaderIns) {
                    that.fail && that.fail();
                    $(that.dom).val('');
                    return;
                }
                var fileKey = byteVideoUploaderIns.addFile({
                    file,
                    name: 'server',
                    auth: that.auth,
                    // 具有时效性，从服务端获取的上传签名。对于有大文件上传需求的业务，需要设置较长的有效期，避免单次上传过程中签名过期的问题。
                    type: 'video', // 上传文件类型，三个可选值：video(视频或者音频)，image(图片)，object（普通文件）
                });
                byteVideoUploaderIns.on('process', (infor) => {
                    that.progress && that.progress(e, infor)
                });
                byteVideoUploaderIns.on('fileMerge', (infor) => {
                });
                byteVideoUploaderIns.on('initUploadID', (infor) => {
                });
                byteVideoUploaderIns.on('preUpload', (infor) => {
                    that.send && that.send(e, infor)
                });
                byteVideoUploaderIns.on('crc32', (infor) => {
                });
                byteVideoUploaderIns.on('complete', (infor) => {
                    $(that.dom).val('');
                    that.done && that.done(e, infor);
                });
                byteVideoUploaderIns.on('error', (infor) => {
                    $(that.dom).val('');
                    that.fail && that.fail(e, infor);
                });
                byteVideoUploaderIns.start(fileKey);
            }, false)
        };
        ByteVideoUploaderClass.prototype.init = function () {
            let ByteVideoUploader = this.ByteVideoUploader; // fix: ByteVideoUploader is not defined https://slardar.bytedance.net/node/browser_detail/jserr/detail?bid=wenda_pc&region=cn&start_time=1584425940&end_time=1584429540&granularity=60&issue_id=3dfca9ea00299a22489b927dbe8f7b42
            if (!ByteVideoUploader) {
                return;
            }
            var byteVideoUploaderIns = new ByteVideoUploader({
                debug: false,
                access_key: '22b1d0747596877a4c080688af843a58',
                user_id: window.wenda && window.wenda.userData && window.wenda.userData.user_id || '', //建议设置能识别用户的唯一标识id，用于上传出错时的问题排查
                vasDomain: 'https://vas-lf-x.snssdk.com',
                logDomain: 'https://log.snssdk.com',
                isBOE: false, //默认为false
                coverTime: 0
            });
            return byteVideoUploaderIns
        };
        var comp = module.exports = Vue.component('w-video-uploader', {
            template: tpl,
            data: function () {
                return {
                    store: [],
                    mine: [],
                    search: [],
                    activeTag: 0,
                    types: /\.wmv|avi|dat|asf|rm|rmvb|ram|mpg|mpeg|3gp|mov|mp4|m4v|dvix|dv|mkv|flv|vob|qt|cpk|fli|flc|mod|ts|webm|m2ts$/i,
                    maxSize: 2 * 1024 * 1024 * 1024,
                    err: '',
                    progress: -1,
                    qTitle: '',
                    qid: '',
                    ansid: undefined,
                    searchIndex: 0,
                    searchInput: '',
                    video: {
                        type: 'UGC',
                        content: {
                            vid: undefined
                        }
                    },
                    uploadUrl: '',
                    upload_id: '',
                    mineCursor: undefined,
                    mineHasMore: true,
                    searchOffset: 0,
                    searchHasMore: true,
                    searchVids: {}
                };
            },
            props: [],
            computed: {
                active: function () {
                    switch (this.activeTag) {
                        case 0:
                            if (this.store.length) {
                                return 0;
                            }
                        case 1:
                            if (this.mine.length) {
                                return 1;
                            }
                        case 2:
                            return 2;
                    }
                },
                videos: function () {
                    switch (this.active) {
                        case 0:
                            return this.store;
                        case 1:
                            return this.mine;
                        case 2:
                            return this.search;
                    }
                }
            },
            beforeCreate: function () {
                this.$options.el = $('<div></div>').addClass('w-video-uploader').appendTo('body')[0];
                // $.Ajax('/wenda/web/upload/getvideouploadurl/', {
                //     type: 'GET',
                //     data: {
                //         _: new Date().getTime()
                //     },
                //     success: function (data, r) {
                //         this.uploadUrl = r.upload_url;
                //         this.upload_id = r.upload_id;
                //     }.bind(this)
                // });
            },
            created: function () {
                // this.tag0();
                this.tag1();
                this.$on('video.select', function (data) {
                    this.video = data;
                    if (data.video_type == 'wenda') {
                        this.video.type = 'UGC';
                        this.$emit('uploader.select', data);
                        $('body').trigger('saveDraft');
                    } else {
                        this.video.type = 'PGC';
                        $.ajax('/wenda/web/commit/addpgcvideo/', {
                            type: 'POST',
                            data: {
                                qid: this.qid,
                                group_id: data.group_id,
                                ansid: this.ansid
                            },
                            success: function (data) {
                                // data.err_no = 0 //TODO
                                if (data.err_no == 0) {
                                    this.$emit('uploader.select', data);
                                    $('body').trigger('saveDraft');
                                } else {
                                    $('body').toast({
                                        status: 'fail',
                                        text: '插入视频失败，请稍后重试'
                                    });
                                }
                            }.bind(this),
                            error: function () {
                                $('body').toast({
                                    status: 'fail',
                                    text: '插入视频失败，请稍后重试'
                                });
                            }
                        });
                    }
                }.bind(this));

                this.$on('uploader.select', this.close.bind(this));

                this.$watch('searchInput', this.doSearch.bind(this));

                // this.$watch('uploadUrl', function () {
                //     this.$file = $(this.$el).find('.vu-file input').fileupload({
                //         url: this.uploadUrl,
                //         sequentialUploads: true,
                //         limitMultiFileUploadSize: 1,
                //         add: this.onAdd.bind(this),
                //         send: this.onSend.bind(this),
                //         done: this.onDone.bind(this),
                //         fail: this.onFail.bind(this),
                //         progress: this.onProgress.bind(this)
                //     });
                // }.bind(this));
            },
            mounted: function () {
                this.tagTo(0);
                this.overflow = document.body.style.overflow;
                document.body.style.overflow = 'hidden';
                let that = this;
                $.Ajax('//www.wukong.com/ugc/publish/video/v1/get_token/', {
                    type: 'GET',
                    data: {
                        _: new Date().getTime()
                    },
                    success: function (data, r) {
                        if (Number(r.err_no) === 0) {
                            that.authToken = r.token;
                            that.bindNewVideoUpload();
                        }
                    }.bind(this)
                });
            },
            methods: {
                bindNewVideoUpload: function () {
                    var filedom = $(this.$el).find('.vu-file input')[0];//转成原生dom
                    new ByteVideoUploaderClass({
                        dom: filedom,
                        auth: this.authToken,
                        add: this.onAddNew.bind(this),
                        send: this.onSendNew.bind(this),
                        done: this.onDoneNew.bind(this),
                        fail: this.onFailNew.bind(this),
                        progress: this.onProgressNew.bind(this)
                    })
                },
                onAdd: function (ev, data) {
                    // File
                    // lastModified
                    // :
                    // 1487908468000
                    // lastModifiedDate
                    // :
                    // Fri Feb 24 2017 11:54:28 GMT+ 0800(CST)
                    // name
                    // :
                    // "下载.mp4"
                    // size
                    // :
                    // 31241660
                    // type
                    // :
                    // "video/mp4"
                    // webkitRelativePath
                    // :
                    // ""
                    var _this = this;
                    this.err = '';
                    var ok = data.files.every(function (file) {
                        if (!_this.types.test(file.name)) {
                            _this.err = '选择的文件不在系统支持的格式范围之内，目前接受如下视频格式wmv|avi|dat|asf|rm|rmvb|ram|mpg|mpeg|3gp|mov|mp4|m4v|dvix|dv|mkv|flv|vob|qt|cpk|fli|flc|mod|ts|webm|m2ts';
                            return false;
                        }
                        if (file.size > _this.maxSize) {
                            _this.err = '您选择的视频已超过2G，请压缩后再上传';
                            return false;
                        }
                        return true;
                    });
                    if (ok) {
                        this.jqXhr = data.submit();
                    }
                },
                onAddNew: function (ev, data) {
                    // File
                    // lastModified
                    // :
                    // 1487908468000
                    // lastModifiedDate
                    // :
                    // Fri Feb 24 2017 11:54:28 GMT+ 0800(CST)
                    // name
                    // :
                    // "下载.mp4"
                    // size
                    // :
                    // 31241660
                    // type
                    // :
                    // "video/mp4"
                    // webkitRelativePath
                    // :
                    // ""
                    var _this = this;
                    this.err = '';
                    for (var i = 0; i < data.files.length; i++) {
                        var file = data.files[i];
                        if (!_this.types.test(file.name)) {
                            _this.err = '选择的文件不在系统支持的格式范围之内，目前接受如下视频格式wmv|avi|dat|asf|rm|rmvb|ram|mpg|mpeg|3gp|mov|mp4|m4v|dvix|dv|mkv|flv|vob|qt|cpk|fli|flc|mod|ts|webm|m2ts';
                            return false;
                        }
                        if (file.size > _this.maxSize) {
                            _this.err = '您选择的视频已超过2G，请压缩后再上传';
                            return false;
                        }
                        return true;
                    }
                    return true;
                },
                onSendNew: function (ev, data) {
                    this.upload_id = data.uploadID;
                    this.$emit('uploader.select');
                },
                onProgressNew: function (e, data) {
                    this.progress = data.percent / 100;
                    this.$emit('uploader.progress', this.progress);
                },
                onDoneNew: function (e, data) {
                    this.$emit('uploader.done');
                    this.video.content.vid = data.vid; //'v020195f0000bo23p8jivfcqtq0eee70';//
                    this.video.content.vposter = data.poster.oid; //
                },
                onFailNew: function (e, data) {
                    this.$emit('uploader.fail');
                    this.err = '';
                    $('body').toast({
                        status: 'fail',
                        text: '视频上传失败，请稍后重试！'
                    });
                },
                onSend: function (ev, data) {
                    this.$emit('uploader.select');
                },
                onDone: function (e, data) {
                    this.$emit('uploader.done');
                    $.Ajax('/wenda/web/videouploadstatus/brow/', {
                        type: 'GET',
                        data: {
                            upload_id: this.upload_id
                        },
                        success: function (data) {
                            this.video.content.vid = data.video_id;
                            // fixbug by linyu.yulin at 2019.12.25 修复上传视频转码失败无封面图的时候导致的问题
                            this.video.content.vposter = data.img;
                        }.bind(this)
                    });
                },
                onFail: function (e, data) {
                    this.$emit('uploader.fail');
                    this.err = true;
                },
                onProgress: function (e, data) {
                    this.progress = data.loaded / data.total;
                    this.$emit('uploader.progress', this.progress);
                },
                retry: function () {
                    this.$file.fileupload('submit');
                },
                cancel: function () {
                    this.jqXhr.abort();
                },
                onScroll: function (ev) {
                    var target = ev.target;
                    if (target.scrollHeight - target.scrollTop - $(target).outerHeight() == 0) {
                        switch (this.active) {
                            case 1:
                                this.getMine();
                                break;
                            case 2:
                                this.getSearch(this.searchIndex);
                                break;
                        }
                    }
                },
                tagTo: function (index) {
                    this.activeTag = index;
                    this['tag' + index]();
                },
                tag0: function () {
                    if (!this.gotSimilar) {
                        $.Ajax('/wenda/web/videosimilar/brow/', {
                            type: 'GET',
                            data: {
                                title: this.qTitle
                            },
                            success: function (data, r) {
                                this.gotSimilar = true;
                                var _this = this;
                                r.video_data.forEach(function (item, i) {
                                    item.content = JSON.parse(item.content);
                                    _this.store.push(item);
                                });
                            }.bind(this)
                        });
                    }
                },
                tag1: function () {
                    if (!this.gotMine) {
                        this.getMine();
                    }
                },
                getMine: function () {
                    if (!this.mineHasMore) {
                        return;
                    }
                    $.Ajax('/wenda/web/myvideo/brow/', {
                        type: 'GET',
                        data: {
                            cursor: this.mineCursor,
                            count: 20
                        },
                        success: function (data, r) {
                            this.gotMine = true;
                            if (!r.video_data.length) {
                                this.mineHasMore = false;
                            }
                            this.mineCursor = r.next_cursor;
                            var _this = this;
                            r.video_data.forEach(function (item, i) {
                                item.content = JSON.parse(item.content);
                                _this.mine.push(item);
                            });
                        }.bind(this)
                    });
                },
                tag2: function () {

                },
                doSearch: function () {
                    this.searchIndex++;
                    var searchIndex = this.searchIndex;
                    this.searchTimer = setTimeout(function () {
                        this.search.splice(0);
                        this.searchOffset = 0;
                        this.searchHasMore = true;
                        this.searchVids = {};
                        this.getSearch(searchIndex);
                    }.bind(this), 50);
                },
                getSearch: function (searchIndex) {
                    if (!this.searchHasMore) {
                        return;
                    }
                    $.Ajax('/wenda/web/videosearch/brow/', {
                        type: 'GET',
                        data: {
                            title: this.searchInput,
                            offset: this.searchOffset,
                            count: 20
                        },
                        success: function (data, r) {
                            if (this.searchIndex !== searchIndex) {
                                return;
                            }
                            if (!r.video_data.length) {
                                this.searchHasMore = false;
                            }
                            var _this = this;
                            _this.searchOffset += 20;
                            r.video_data.forEach(function (item, index) {
                                item.content = JSON.parse(item.content);
                                if (_this.searchVids[item.content.vid]) {

                                } else {
                                    _this.searchVids[item.content.vid] = true;
                                    _this.search.push(item);
                                }
                            });
                        }.bind(this)
                    });
                },
                close: function () {
                    $(this.$el).hide();
                    $(this.$el).find('video').each(function (index, video) {
                        video.pause();
                    });
                    document.body.style.overflow = this.overflow;
                    // this.$destroy();
                },
                destroy: function () {
                    $(this.$el).remove();
                    this.$destroy();
                }
            }
        });

        if (typeof window !== 'undefined') {
            window.VideoUploader = comp;
        }
    }, {"../../../ui/toast/toast": 18, "./uploader.tpl": 33, "./video/video": 34}],
    33: [function (require, module, exports) {
        module.exports = "<div class=\"w-video-uploader\">\n    <div class=\"vu-main\">\n        <a href=\"javascript:\" class=\"iconfont icon-dislike_icon_new close\" @click=\"close\"></a>\n        <div class=\"vu-upload-field\">\n            <div class=\"vu-upload-btn\">\n                <i class=\"iconfont icon-videouploads\"></i>\n                <span class=\"vu-click-here\">点击此处上传视频</span>\n                <div class=\"vu-file\">\n                    <input type=\"file\" name=\"video_file\" />\n                </div>\n                <span class=\"vu-limit\">支持绝大数视频格式文件，大小不超过2G，支持视频拖拽上传</span>\n                <span class=\"vu-err-tip\">{{ err }}</span>\n            </div>\n        </div>\n\n        <div class=\"vu-videos\">\n            <div class=\"vu-videos-tags\">\n                <ul>\n                    <li @click=\"tagTo(0)\" v-if=\"store.length\" :class=\"{active:active === 0}\">素材库</li>\n                    <li @click=\"tagTo(1)\" v-if=\"mine.length\" :class=\"{active:active === 1}\">我的</li>\n                    <li @click=\"tagTo(2)\" :class=\"{active:active === 2}\">搜索</li>\n                </ul>\n            </div>\n            <div class=\"vu-videos-content\" @scroll=\"onScroll\">\n                <div class=\"vu-search\" v-if=\"active === 2\">\n                    <div class=\"vu-search-input\">\n                        <i class=\"iconfont icon-ask_search\"></i>\n                        <input type=\"text\" v-model=\"searchInput\" placeholder=\"请输入关键词，如：苹果\" />\n                    </div>\n                    <button class=\"vu-search-btn\" @click=\"doSearch\">搜索</button>\n                </div>\n                <w-video-alternative v-for=\"item in videos\" :data=\"item\" :key=\"item.video_id\"></w-video-alternative>\n            </div>\n        </div>\n    </div>\n</div>";

    }, {}],
    34: [function (require, module, exports) {
        var tpl = require('./video.tpl');

        module.exports = Vue.component('w-video-alternative', {
            template: tpl,
            data: function () {
                return {
                    playing: false
                };
            },
            props: ['data'],
            created: function () {
                if (typeof this.data.content === 'string') {
                    try {
                        this.data.content = JSON.parse(this.data.content);
                    } catch (e) {

                    }
                }
            },
            methods: {
                select: function () {
                    if (this.data.video_data) {
                        this.$emit('video.select', this.data);
                    } else {
                        $.getVideoData(this.data.content.vid, function (data) {
                            this.$set(this.data, 'video_data', data);
                            this.$emit('video.select', this.data);
                        }.bind(this));
                    }
                },
                play: function () {
                    $.getVideoData(this.data.content.vid, function (data) {
                        this.$set(this.data, 'video_data', data);
                        // 有才可以播放
                        if (data.video_list && data.video_list.video_1 && data.video_list.video_1.main_url) {
                            this.playing = true;
                        } else {
                            $('body').toast({
                                status: 'fail',
                                text: '审核中，暂时无法播放！'
                            });
                        }
                    }.bind(this));
                },
                getUrl: function (main_url) {
                    return $.base64decode(main_url);
                }
            }
        });
    }, {"./video.tpl": 35}],
    35: [function (require, module, exports) {
        module.exports = "<div class=\"w-video-alternative\">\n    <div class=\"va-main\">\n        <video :src=\"getUrl(data.video_data.video_list.video_1.main_url)\" autoplay=\"true\" v-if=\"data.video_data && playing\" controls>\n        </video>\n        <img :src=\"data.content.vposter\" v-if=\"!playing\" />\n        <div class=\"va-title\">\n            <h4>{{ data.title }}</h4>\n            <span class=\"va-author\">\n                <a>{{ data.source }}</a>\n            </span>\n        </div>\n        <i class=\"va-play\" @click=\"play\" v-if=\"!data.video_data || !playing\"></i>\n    </div>\n    <div class=\"va-select\" @click=\"select\">\n        <span>选择视频</span>\n    </div>\n</div>";

    }, {}],
    36: [function (require, module, exports) {
        var tpl = require('./video_in_edit.tpl');
        var confirm = require('../../../answer-nointerest/confirm');
        var uploadPoster = require('../upload_poster/upload_poster');

        var com = Vue.extend({
            template: tpl,
            data: function () {
                return {
                    uploader: {},
                    playing: false,
                    video_data: null,
                    upload_id: undefined
                };
            },
            created: function () {
                if (!this.canPlay) {
                    this.getVideoData();
                }
            },
            computed: {
                video: function () {
                    return this.video_data || this.uploader.video;
                },
                canPlay: function () {
                    return this.video.video_data && this.video.video_data.video_list && (this.video.video_data.video_list.video_3 || this.video.video_data.video_list.video_2 || this.video.video_data.video_list.video_1);
                },
                vposterFull: function () {
                    if (this.video.content && !/^(http:|https:)?\/\//.test(this.video.content.vposter)) {
                        return '//p3.pstatp.com/large/' + this.video.content.vposter
                    }
                    return this.video.content.vposter
                }
            },
            methods: {
                isError: function () {
                    return this.uploader && !!this.uploader.err;
                },
                isUploading: function () {
                    return this.uploader && this.progressNum() >= 0 && this.progressNum() < 100;
                },
                hasCover: function () {
                    return this.video.content && this.video.content.vposter;
                },
                progressNum: function () {
                    return this.uploader && Math.round(this.uploader.progress * 100);
                },
                play: function () {
                    this.playing = true;
                    if (!this.canPlay) {
                        this.getVideoData();
                    }
                },
                getVideoData: function () {
                    $.getVideoData(this.video.content.vid, function (data) {
                        this.$set(this.video, 'video_data', data);
                    }.bind(this));
                },
                cancel: function () {
                    this.uploader.cancel();
                },
                remove: function () {
                    new confirm({
                        data: {
                            word: '确认要删除这个视频么？',
                            todo: function () {
                                if (this.isUploading()) {
                                    this.cancel();
                                }
                                this.destroy();
                            }.bind(this)
                        }
                    });
                },
                retry: function () {
                    $('.edui-icon-video').click();
                    this.destroy();
                },
                destroy: function () {
                    $(this.$el).remove();
                    this.$destroy();
                    $('body').trigger('saveDraft');
                },
                getVideoUrl: function (main_url) {
                    return $.base64decode(main_url);
                },
                uploadData: function () {
                    if (this.isUploading() || !this.video.content || !this.video.content.vid) {
                        return '{}';
                    }
                    var data = {
                        vid: this.video.vid || this.video.content.vid,
                        vposter: this.video.content.vposter,
                        title: this.video.title,
                        source: this.video.source,
                        type: this.video.type,
                        upload_id: this.upload_id || this.uploader.upload_id
                    };

                    return JSON.stringify(data);
                },
                setPoster: function () {
                    var _uploadPoster = new uploadPoster({
                        data: {
                            upload_id: this.upload_id || this.uploader.upload_id,
                            selected: this.video.content.vposter
                        }
                    });
                    _uploadPoster.$on('uploadPoster.select', function (img) {
                        this.video.content.vposter = img;
                        if (!this.video.video_data) {
                            this.getVideoData();
                        }
                    }.bind(this));
                }
            }
        });

        module.exports = com;

        typeof window !== 'undefined' && (window.VideoInEditor = com);
    }, {"../../../answer-nointerest/confirm": 22, "../upload_poster/upload_poster": 30, "./video_in_edit.tpl": 37}],
    37: [function (require, module, exports) {
        module.exports = "<div class=\"w-video-in-edit\" contenteditable=\"false\" :upload-data=\"uploadData()\">\n    <span href=\"javascript:\" class=\"iconfont icon-dislike_icon_new close\" @click=\"remove\"></span>\n\n    <div class=\"vie-progress\" v-if=\"isUploading()\">\n        <span class=\"vie-progress-bar\" :style=\"{width:progressNum() + '%'}\"></span>\n        <span class=\"vie-progress-num\">{{ progressNum() }}%</span>\n    </div>\n\n    <div class=\"vie-error\" v-if=\"isError()\">\n        <span class=\"vie-error-word\">上传失败</span>\n        <span class=\"vie-error-btn vie-retry\" href=\"javascript:\" @click=\"retry\">重新上传</span>\n    </div>\n\n    <div class=\"vie-video\" v-if=\"canPlay && playing\">\n        <video :src=\"getVideoUrl((video.video_data.video_list.video_3 || video.video_data.video_list.video_2 || video.video_data.video_list.video_1).main_url)\"\n            autoplay controls />\n    </div>\n\n    <div class=\"vie-cover\">\n        <img class=\"vie-cover-image\" :src=\"vposterFull\" v-if=\"video && hasCover() && !playing\" />\n        <div class=\"vie-title\">\n            <h4 v-if=\"video && video.title && !playing\">{{ video.title }}</h4>\n            <span class=\"vie-author\" v-if=\"video && video.source && !playing\">\n                {{ video.source }}\n            </span>\n        </div>\n        <span class=\"vie-play\" @click=\"play\" v-if=\"!isUploading() && !playing\"></span>\n\n        <span class=\"vie-converting\" v-if=\"!isUploading() && video.type === 'UGC' && playing && !canPlay\">\n            <span class=\"iconfont icon-notice\"></span>\n            <span class=\"vie-converting-word\">视频转码中...</span>\n        </span>\n        <span class=\"vie-change-cover\" href=\"javascript:\" v-if=\"video.type === 'UGC' && !isError()\" @click=\"setPoster\">自定义封面</span>\n    </div>\n</div>";

    }, {}],
    38: [function (require, module, exports) {
        var tpl = require('./ask-img.tpl');

        module.exports = Vue.component('materialList', {
            template: tpl,
            data: function () {
                return {
                    materialList: [], // {small_img_url:'小图',medium_img_url:'中图',big_img_url:'大图',img_id:'图片id',original:'图片服务器上的图片id',checked:'true of false图片选中'}
                    chooseList: [], // {smallImgUrl:'小图',mediumImgUrl:'中图',bigImgUrl:'大图',imgId:'图片id',original:'图片服务器上的图片id',naturalHeight,naturalWidth:'图片原始宽高'}
                    active: 0,
                    searchContent: '',
                    status: 'beforeSearch',
                    fileLoad: 'toload',
                    progress: 0,
                    types: /\.bmp|jpg|gif|png|jpeg$/i,
                    err: '',
                    uploadUrl: '/wenda/web/upload/photo/',
                    hasMore: false,
                    visitedProtocol: false
                };
            },
            props: {
                title: {
                    type: String,
                    required: true
                },
                question: {
                    type: Object
                }
            },
            created: function () {
                var visited;
                if (this.question) {
                    var imgList = this.question.content.pic_uri_list;
                    var length = imgList.length;
                    for (var i = 0; i < length; i++) {
                        var url = '//p3.pstatp.com/list/' + imgList[i].web_uri;
                        this.chooseList[i] = {
                            smallImgUrl: url,
                            mediumImgUrl: url,
                            imgId: '',
                            index: -1,
                            original: imgList[i].web_uri,
                            naturalWidth: imgList[i].width,
                            naturalHeight: imgList[i].height
                        };
                    }
                }
                visited = localStorage.getItem('visitedProtocol_' + wenda.userData.user_id);
                this.visitedProtocol = !!visited;
            },
            computed: {
                reverseChooseList: function () {
                    return this.chooseList.slice(0).reverse();
                }
            },
            mounted: function () {
                this.$file = $(this.$el).find('.img-file input').fileupload({
                    url: this.uploadUrl,
                    sequentialUploads: true,
                    formData: {
                        qid: this.question ? this.question.qid : '0',
                        ic_id: '',
                        term: ''
                    },
                    add: this.onAdd.bind(this),
                    done: this.onDone.bind(this),
                    send: this.onSend.bind(this),
                    fail: this.onFail.bind(this),
                    progress: this.onProgress.bind(this)
                });
            },
            methods: {
                switchTab: function (tabNum) {
                    this.active = tabNum;
                },
                chooseImg: function (data) {
                    var imgItem = {
                        smallImgUrl: data.small_img_url,
                        mediumImgUrl: data.medium_img_url,
                        imgId: data.img_id
                    };
                    var length = this.chooseList.length;
                    // 取消选中
                    if (data.checked) {
                        this.cancleChoose(data);
                    } else { // 选中
                        if (length >= 3) {
                            $('body').toast({
                                status: 'fail',
                                text: '最多插入3张图片'
                            });
                        } else {
                            data.checked = true;
                            imgItem.natureHeight = data.naturalHeight;
                            imgItem.natureWidth = data.naturalWidth;
                            this.chooseList.push(imgItem);
                            this.upLoadImg(imgItem, data);
                        }
                    }
                },
                cancleChoose: function (materialItem) {
                    var i = 0;
                    var length = this.chooseList.length;
                    materialItem.checked = false;
                    for (i = 0; i < length; i++) {
                        var chooseItem = this.chooseList[i];
                        if (chooseItem.imgId === materialItem.img_id) {
                            break;
                        }
                    }
                    if (i < length) {
                        this.chooseList.splice(i, 1);
                    }
                },
                clearInput: function () {
                    this.searchContent = '';
                },
                delImg: function (item, index) {
                    var trueIndex = this.chooseList.length - 1 - index;
                    this.chooseList.splice(trueIndex, 1);
                    if (item.imgId !== '') {
                        var length = this.materialList.length;
                        for (var i = 0; i < length; i++) {
                            if (item.imgId === this.materialList[i].img_id) {
                                this.materialList[i].checked = false;
                            }
                        }
                    }
                },
                doSearch: function (isTitle) {
                    this.isTitle = isTitle;
                    if (isTitle) {
                        this.searchContent = '';
                    }
                    if ((isTitle && this.title.trim() !== '') || (!isTitle && this.searchContent.trim() !== '')) {
                        $.ajax('/wenda/web/dongfangic/brow/', {
                            type: 'GET',
                            data: {
                                text: isTitle ? this.title : this.searchContent,
                                is_title: isTitle ? 1 : 0
                            },
                            dataType: 'json',
                            success: function (data) {
                                if (data.err_no === 0) {
                                    this.status = 'searched';
                                    this.materialList = data.img_list;
                                    this.nextIdList = data.next_img_list;
                                    this.offset = data.offset;
                                    this.hasMore = data.has_more;
                                    this.term = data.term;
                                    this.$nextTick(function () {
                                        if (this.visitedProtocol === false) {
                                            $(this.$el).find('.img-container').scrollTop(0);
                                        } else {
                                            $(this.$el).find('.img-container').scrollTop(48);
                                        }
                                        if (this.materialList.length !== 0 && this.visitedProtocol === false) {
                                            localStorage.setItem('visitedProtocol_' + wenda.userData.user_id, true);
                                            this.visitedProtocol = true;
                                        }
                                    });
                                }
                            }.bind(this)
                        });
                    }
                },
                loadMore: function (event) {
                    var target = event.currentTarget;
                    if (target.clientHeight + target.scrollTop - target.scrollHeight === 0) {
                        if (this.hasMore) {
                            $.ajax('/wenda/web/dongfangic/loadmore/', {
                                type: 'post',
                                data: {
                                    text: this.isTitle ? this.title : this.searchContent,
                                    is_title: this.isTitle ? 1 : 0,
                                    offset: this.offset,
                                    count: null,
                                    next_img_list: JSON.stringify(this.nextIdList)
                                },
                                dataType: 'json',
                                success: function (data) {
                                    if (data.err_no === 0) {
                                        this.status = 'searched';
                                        this.nextIdList = data.next_img_list;
                                        this.offset = data.offset;
                                        this.hasMore = data.has_more;
                                        this.term = data.term;
                                        this.materialList = this.materialList.concat(data.img_list);
                                    }
                                }.bind(this)
                            });
                        }
                    }
                },
                upLoadImg: function (chooseItem, materialItem) {
                    var data = {
                        qid: this.question ? this.question.qid : '0',
                        ic_id: chooseItem.imgId,
                        upfile: null,
                        term: this.term
                    };
                    $.ajax(this.uploadUrl, {
                        type: 'post',
                        dataType: 'json',
                        data: data,
                        success: function (data) {
                            if (this.chooseList.indexOf(chooseItem) > -1) {
                                if (data.state === 'SUCCESS') {
                                    this.$set(chooseItem, 'original', data.original);
                                    // chooseItem.original = data.original;
                                } else {
                                    $('body').toast({
                                        status: 'fail',
                                        text: data.state
                                    });
                                    this.cancleChoose(materialItem);
                                }
                            }
                        }.bind(this),
                        error: function (e) {
                            if (this.chooseList.indexOf(chooseItem) > -1) {
                                $('body').toast({
                                    status: 'fail',
                                    text: '这张图片暂时不能使用'
                                });
                                this.cancleChoose(materialItem);
                            }
                        }.bind(this)
                    });
                },
                imgLoad: function (item, event) {
                    var target = event.currentTarget;
                    item.naturalHeight = target.naturalHeight;
                    item.naturalWidth = target.naturalWidth;
                },
                // 文件上传事件
                onAdd: function (ev, data) {
                    var _this = this;
                    this.err = '';
                    if (this.chooseList.length >= 3) {
                        $('body').toast({
                            status: 'fail',
                            text: '最多插入3张图片'
                        });
                    } else {
                        var ok = data.files.every(function (file) {
                            if (!_this.types.test(file.name)) {
                                _this.err = '请上传图片格式的文件';
                                return false;
                            }
                            return true;
                        });
                        if (ok) {
                            this.progress = 0;
                            this.fileLoad = 'loading';
                            this.jqXhr = data.submit();
                        }
                    }
                },
                onSend: function (ev, data) {
                    this.$emit('askimg.select');
                },
                onDone: function (e, data) {
                    var result = data.result;
                    var item = {
                        smallImgUrl: result.url,
                        mediumImgUrl: result.url,
                        imgId: '',
                        original: result.original,
                        naturalHeight: result.height,
                        naturalWidth: result.width
                    };
                    this.fileLoad = 'toload';
                    this.$emit('askimg.done');
                    this.chooseList.push(item);
                },
                onFail: function (e, data) {
                    var text = '';
                    if (data.errorThrown === 'abort') {
                        text = '上传取消';
                    } else {
                        text = '上传失败';
                    }
                    this.$emit('askimg.fail');
                    // this.err = true;
                    this.fileLoad = 'toload';
                    $('body').toast({
                        status: 'fail',
                        text: text
                    });
                },
                onProgress: function (e, data) {
                    this.progress = data.loaded / data.total;
                    this.$emit('askimg.progress', this.progress);
                },
                progressNum: function () {
                    return Math.round(this.progress * 100);
                },
                cancleUpload: function () {
                    this.jqXhr.abort();
                    this.fileLoad = 'toload';
                },
                getChooseList: function () {
                    var result = [];
                    for (var i = 0; i < this.chooseList.length; i++) {
                        result.push(this.chooseList[i].original);
                    }
                    return result;
                }
            }
        });

    }, {"./ask-img.tpl": 39}],
    39: [function (require, module, exports) {
        module.exports = "<div class=\"ask-img-outer\">\n\t<div :class=\"{'ask-img-header':true,'ask-img-header-bigger':chooseList.length > 0}\">添加图片<span class=\"desc\">（最多3张）</span></div>\n\t<div class=\"img-preview\">\n\t\t<div v-for=\"(item,index) in reverseChooseList\" class=\"img-preview-item\">\n\t\t\t<img :src=\"item.smallImgUrl\" alt=\"\" :class=\"item.natureHeight>item.natureWidth?'as-width':'as-height'\">\n\t\t\t<div class=\"img-del\" @click=\"delImg(item,index)\"\t>\n\t\t\t\t<i class=\"iconfont icon-ask_close\"></i>\n\t\t\t</div>\n\t\t\t<div v-if=\"!item.original\" class=\"loading\">\n\t\t\t\t<i class=\"i-loading\"></i>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\t<!--<div class=\"tab-header\">\n\t\t<ul>\n\t\t\t<li @click=\"switchTab(0)\" :class=\"{'tab-header-actived':active === 0}\">免费素材库</li>\n\t\t\t<li @click=\"switchTab(1)\" :class=\"{'tab-header-actived':active === 1}\">本地上传</li>\n\t\t</ul>\n\t</div>-->\n\t<div class=\"tab-body\">\n\t\t<!--<div class=\"tab-body-item\" v-show=\"active===0\">\n\t\t\t<div class=\"material-search\">\n\t\t\t\t<div class=\"material-search-icon\">\n\t\t\t\t\t<i class=\"iconfont icon-ask_search\"></i>\n\t\t\t\t</div><input id=\"material-search-input\" class=\"material-search-input\" placeholder=\"免费图片由「东方IC」提供\" @keyup.enter=\"doSearch(false)\" v-model=\"searchContent\"\n\t\t\t\t/><div class=\"material-search-del\" @click=\"clearInput\" v-if=\"searchContent !==''\">\n\t\t\t\t\t<i class=\"iconfont icon-dislike_icon_new\"></i>\n\t\t\t\t</div><input class=\"material-search-submit\" type=\"button\" value=\"搜索\" @click=\"doSearch(false)\">\n\t\t\t</div>\n\t\t\t<div class=\"img-container\" @scroll=\"loadMore\">\n\t\t\t\t<div class=\"img-list-outer\">\n\t\t\t\t\t<div class='img-tip' v-if=\"materialList.length !== 0\">\n\t\t\t\t\t\t<span class='img-tip-content'>使用图库视为您已同意<a href=\"/dongfangic/protocol/\" rel=\"nofollow\" target='_blank'>《图片许可使用协议》</a>，如不同意，请停止使用图库；图片仅限您在问答发布问题使用，不得用于其他平台和用途。</span>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div id=\"img-list\" class='img-list'>\n\t\t\t\t\t\t<div v-for=\"(value,index) in materialList\" :class=\"{'img-item':true,'img-item-checked':value.checked}\"  @click=\"chooseImg(value)\" :key=\"value.img_id\" :data-id=\"value.img_id\">\n\t\t\t\t\t\t\t<img :src=\"value.small_img_url\" alt=\"\" @load=\"imgLoad(value,$event)\">\n\t\t\t\t\t\t\t<div class=\"img-check\">\n\t\t\t\t\t\t\t\t<i class=\"iconfont icon-details_attention_icon\"></i>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div v-if=\"materialList.length == 0 && status == 'searched'\" class=\"img-no-result\">\n\t\t\t\t\t\t<span>暂无相关图片</span>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div> -->\n\t\t<!--<div class=\"tab-body-item\" v-show=\"active===1\">-->\n\t\t<div class=\"tab-body-item\" v-show=\"true\">\n\t        <div class=\"img-upload-field\">\n\t            <div class=\"img-upload-btn\" v-show=\"fileLoad === 'toload'\">\n\t                <i class=\"iconfont icon-videouploads\"></i>\n\t                <span class=\"img-click-here\">点击此处上传图片</span>\n\t                <div class=\"img-file\">\n\t                    <input type=\"file\" name=\"upfile\" />\n\t                </div>\n\t                <span class=\"img-limit\">支持图片拖拽上传</span>\n\t                <span class=\"img-err-tip\">{{ err }}</span>\n\t            </div>\n\t            <div class=\"img-loading\" v-show=\"fileLoad === 'loading'\">\n                \t<div class=\"img-progress\">\n\t                \t<span class=\"img-progress-bar\" :style=\"{width:progressNum() + '%'}\"></span>\n\t                \t<span class=\"img-progress-num\">图片上传中...</span>\n\t\t\t    \t</div><i class=\"iconfont icon-ask_close\" @click=\"cancleUpload\"></i>\n\t            </div>\n\t        </div>\n\t\t</div>\n\t</div>\n</div>\n";

    }, {}],
    40: [function (require, module, exports) {
        var tpl = require('./ask.tpl');
        var imgSelecter = require('./ask-img/ask-img');
        var login = require('../login/login');
        var TopToast = require('../toast/top-toast/top-toast');
        var login = require('../login/login');
        var ConfirmModal = require('../new-confirm/new-confirm');
        var toast = require('../../ui/toast/toast');
        toast();

        module.exports = Vue.extend({
            template: tpl,
            data: function () {
                return {
                    type: 'new',
                    image_list: {},
                    title: '',
                    tag_list: {},
                    tag_list_length: 0,
                    image_list_length: 0,
                    desc: '',
                    concern_tags: [],
                    currentStep: 1,
                    searchSug: [],
                    submitting: false,
                    tagSug: [],
                    tagInput: '',
                    showTagSug: true
                };
            },
            props: ['question'],
            computed: {},
            created: function () {
                if (this.question) {
                    this.type = 'edit';
                    this.title = this.question.title;
                    if (this.question.content && this.question.content.text) {
                        this.desc = this.question.content.text;
                    }
                    if (this.question.concern_tags && this.question.concern_tags.length > 0) {
                        this.concern_tags = this.question.concern_tags;
                        this.tag_list_length = this.question.concern_tags.length;
                        for (var i = 0; i < this.question.concern_tags.length; i++) {
                            var id = this.question.concern_tags[i].concern_id;
                            this.tag_list[id] = true;
                        }
                    }
                    if (this.question.content && this.question.content.pic_uri_list) {
                        var uri_list = this.question.content.pic_uri_list;
                        this.image_list_length = uri_list.length;
                        for (var i = 0; i < uri_list.length; i++) {
                            var uri = uri_list[i].web_uri;
                            this.image_list[uri] = true;
                        }
                    }
                }

                this.$watch('title', this.titleChanged.bind(this));
                this.$watch('tagInput', this.editTag.bind(this));
            },
            mounted: function () {
                $('#modal-layer').show();
                $('body').css('overflow', 'hidden');
            },
            methods: {
                validCheck: function () {
                    var r = {
                        valid: true,
                        msg: ''
                    };
                    if (this.image_list_length > 3) {
                        r.msg = '配图不大于3张';
                        r.valid = 0;
                    }
                    if (this.tag_list_length > 5) {
                        r.msg = '标签不多于5个';
                        r.valid = 0;
                    }
                    // if (this.tag_list_length === 0)
                    // {
                    //     r.msg = "请添加标签";
                    //     r.valid = 0;
                    // }
                    // if (this.desc.length < 2)
                    // {
                    //     r.msg = "描述不少于2个字";
                    //     r.valid = 0;
                    // }
                    if (this.desc.length > 500) {
                        r.msg = '描述不多于500个字';
                        r.valid = 0;
                    }
                    return r;
                },
                titleChanged: function (newVal) {
                    clearTimeout(this.editQuestionTitleInterval);

                    var _this = this;
                    var title = newVal.replace(/\s/g, '');
                    this.editQuestionTitleInterval = setTimeout(function () {
                        if (title.length > 2) {
                            _this.getSearchSug(title);
                        }
                    }, 500);
                },
                getSearchSug: function (title) {
                    $.Ajax('/wenda/web/question/association/', {
                        type: 'GET',
                        data: {
                            title: title
                        },
                        success: function (data, res) {
                            if (res.question_list.length) {
                                this.searchSug = res.question_list.slice(0, 7);
                            } else {
                                this.searchSug = [];
                            }
                        }.bind(this)
                    });
                },
                submit: function () {
                    if (wenda.userData.is_login == '0') {
                        login.getLogin();
                        return;
                    }
                    if (this.submitting) {
                        return;
                    }
                    var r = this.validCheck();
                    var _this = this;
                    if (!r.valid) {
                        $('body').toast({status: 'fail', text: r.msg});
                        return;
                    }
                    var data = {
                        title: this.title,
                        content: this.desc,
                        concern_ids: [],
                        pic_list: []
                    };
                    for (var id in this.tag_list) {
                        if (this.tag_list[id]) {
                            data.concern_ids.push(id);
                        }
                    }
                    // for (var uri in this.image_list)
                    // {
                    //     if (this.image_list[uri])
                    //     {
                    //         data.pic_list.push(uri);
                    //     }
                    // }
                    var pic_list = this.$refs['ask-img'].getChooseList();
                    var uploading = false;
                    pic_list.forEach(function (item) {
                        if (!item) {
                            uploading = true;
                        }
                    }, this);
                    data.pic_list = pic_list;
                    if (uploading) {
                        new ConfirmModal({
                            data: {
                                title: '图片上传',
                                content: '图片还未上传完成，是否确定提交问题？',
                                cancelText: '取消',
                                doItText: '确认',
                                cancelOperation: undefined,
                                doItOperation: this.submitConfirm.bind(this, data),
                                className: 'ask-upload-confirm'
                            }
                        });
                    } else {
                        this.submitConfirm(data);
                    }
                },
                submitConfirm: function (data) {
                    var _this = this;
                    data.pic_list = this.$refs['ask-img'].getChooseList();
                    var callback = function (r) {
                        _this.submitting = false;
                        if (r.err_no === 0) {
                            // $('body').toast({ status: 'success', text: "提交成功" });
                            _this.closeModal();
                            new TopToast({
                                data: {
                                    linkMessage: '提问已发布，点击查看问题',
                                    linkUrl: '/question/' + r.qid + '/',
                                    existTime: 5000
                                }
                            });
                            // if(/\/self\/1/.test(location.href)){
                            //     location.reload();
                            // }else{
                            //     location.href="/#/self/1/";
                            // }
                            // Backbone.history.stop();
                            // Backbone.history.start();
                        } else {
                            $('body').toast({status: 'fail', text: r.msg});
                        }
                    };
                    this.submitting = true;
                    if (this.question) {
                        data.qid = this.question.qid;
                        this.editQuestion(data, callback);
                    } else {
                        this.postQuestion(data, callback);
                    }
                },
                editQuestion: function (opt, callback) {
                    $.Ajax('/wenda/web/commit/editquestion/', {
                        type: 'POST',
                        data: {
                            qid: opt.qid,
                            title: opt.title,
                            content: opt.content,
                            pic_list: opt.pic_list,
                            concern_ids: opt.concern_ids,
                            t: new Date().getTime()
                        },
                        success: function (e, r) {
                            callback && callback(r);
                        },
                        error: function () {
                            this.submitting = false;
                        }.bind(this)
                    });
                },
                postQuestion: function (opt, callback) {
                    $.Ajax('/wenda/web/commit/postquestion/', {
                        type: 'POST',
                        data: {
                            title: opt.title,
                            content: opt.content,
                            pic_list: opt.pic_list,
                            concern_ids: opt.concern_ids,
                            t: new Date().getTime()
                        },
                        success: function (e, r) {
                            callback && callback(r);
                        },
                        error: function () {
                            this.submitting = false;
                        }.bind(this)
                    });
                },
                uploadImage: function (e) {
                    var _this = this;
                    var $form = $(this.$el).find('#upload-form');
                    var random = parseInt(Math.random() * 1000);
                    var $iframe = $('<iframe style="display:none"></iframe>');
                    var id = 'upload' + random;
                    $form.attr('target', id);
                    $iframe.attr('name', id);
                    $iframe.on('load', function () {
                        var data = $(this).contents().find('body').html();
                        if (data) {
                            var r = JSON.parse(data);
                            var ori = r.original;
                            _this.image_list[ori] = true;
                            _this.image_list_length++;
                        }
                    });
                    $('body').append($iframe);
                    $form.submit();
                    var input = $form.find('input')[0];
                    input.innerHTML = input.outerHTML;
                },
                // buildTagList: function (r)
                // {
                //     // this.data.tag_list = {};

                //     this.concern_tags = [];

                //     for (var i = 0; i < r.concern_tags.length; i++)
                //     {
                //         var id = r.concern_tags[i].concern_id;
                //         if (this.tag_list_length >= 5)
                //         {
                //             break;
                //         }
                //         if (!this.tag_list[id])
                //         {
                //             this.tag_list[id] = true;
                //             this.tag_list_length++;
                //             this.concern_tags.push({
                //                 concern_id: id,
                //                 name: r.concern_tags[i].name
                //             });
                //         }
                //     }
                //     // var html = _.template(tagItemTpl)({ concern_tags: concern_tags });
                // },
                editTag: function (e) {
                    clearTimeout(this.editTagInterval);
                    var _this = this;
                    var name = this.tagInput;
                    this.editTagInterval = setTimeout(function () {
                        $.Ajax('/wenda/web/search/concerntag/', {
                            type: 'GET',
                            data: {
                                name: name,
                                t: new Date().getTime()
                            },
                            success: function (e, r) {
                                _this.tagSug = r.concern_tag_list;
                                _this.showTagSug = true;
                            }
                        });
                    }, 500);

                },
                addTag: function (tag) {
                    var id = tag.concern_id;
                    var name = tag.name;
                    if (this.tag_list[id]) {

                    } else {
                        this.tag_list[id] = true;
                        this.tag_list_length++;
                        this.concern_tags.push(tag);
                    }
                    this.tagSug.splice(0);
                    this.tagInput = '';
                },
                delTag: function (tag) {
                    for (var i = this.concern_tags.length - 1; i >= 0; i--) {
                        if (this.concern_tags[i].concern_id == tag.concern_id) {
                            this.concern_tags.splice(i, 1);
                        }
                    }

                    if (this.tag_list[tag.concern_id]) {
                        this.tag_list[tag.concern_id] = false;
                        this.tag_list_length--;
                    }
                },
                hideTagSug: function (ev) {
                    var id = ev.target.id;
                    if (id === 'widget-ask-outer' || id === 'widget-ask') {
                        this.showTagSug = false;
                    }
                },
                mouseoverTagSug: function () {
                    $(this.$el).find('.tag-input').blur();
                },
                delImage: function (ori) {
                    this.image_list[ori] = false;
                    this.image_list_length--;
                },
                goToNextStep: function (e) {
                    var _this = this;
                    // if($target.hasClass("disabled")){return;}
                    if (this.currentStep === 1) {
                        if (this.title.length < 4) {
                            $('body').toast({status: 'fail', text: '标题字数不应少于4'});
                            return;
                        }
                        if (this.title.length > 40) {
                            $('body').toast({status: 'fail', text: '标题字数应小于40'});
                            return;
                        }
                        if (this.title.replace(/\s/g, '').length === 0) {
                            $('body').toast({status: 'fail', text: '请填写标题'});
                            return;
                        }
                        this.currentStep = 2;
                        this.$refs['ask-img'].doSearch(true);
                        // if (!this.concern_tags.length)
                        // {
                        //     $.Ajax("/wenda/web/question/defaulttag/", {
                        //         type: 'GET',
                        //         data: {
                        //             title: this.title,
                        //             t: new Date().getTime()
                        //         },
                        //         success: function (e, r)
                        //         {
                        //             _this.buildTagList(r);
                        //         }
                        //     });
                        // }
                    }
                },
                goToPreStep: function (e) {
                    if (this.currentStep == 2) {
                        this.currentStep = 1;
                    }
                },
                closeModal: function () {
                    $(document).off('mousewheel.resize');
                    $(document).off('mousemove.move');
                    $(document).off('DOMMouseScroll.resize');
                    // 关闭浮层
                    $('#modal-layer').hide().html('');
                    // 禁止背景的滚动
                    $('body').css('overflow', 'auto');
                },
                top: function () {
                    var top = parseInt($(window).height() / 2 - 270);
                    if (top < 20) {
                        top = 20;
                    }
                    return top;
                }
            }
        });
    }, {
        "../../ui/toast/toast": 18,
        "../login/login": 75,
        "../new-confirm/new-confirm": 79,
        "../toast/top-toast/top-toast": 121,
        "./ask-img/ask-img": 38,
        "./ask.tpl": 41
    }],
    41: [function (require, module, exports) {
        module.exports = "<div class=\"widget-ask-outer\" id=\"widget-ask-outer\" data-log-from=\"AddQuestion\" @click=\"hideTagSug\">\n    <div class='widget-ask-inner'>\n        <div id=\"widget-ask\" :class=\"['at-step-' + currentStep]\" :style=\"{'margin-top':top + 'px'}\" @click=\"hideTagSug\">\n            <div class=\"header\">\n                <h3>\n                    <template v-if=\"type == 'new'\">提问</template>\n                    <template v-else>修改问题</template>\n                    <a href=\"javascript:;\" data-node=\"close\" class=\"close\" data-log=\"PopUp_CreateQuestionClose|From_\" @click=\"closeModal\">\n                        <i class=\"iconfont icon-dislike_icon_new\"></i>\n                    </a>\n                </h3>\n            </div>\n            <div class=\"main\">\n                <div class=\"step1\">\n                    <h4>添加标题<span class=\"desc\">（最多40个字）</span></h4>\n                    <!-- <div :class=\"searchSug.length?'input-box input-box-sug':'input-box'\"> -->\n                    <div :class=\"{'input-box':true,'input-box-sug':searchSug.length && title}\">\n                        <input data-node=\"title-input\" type=\"text\" v-model=\"title\" placeholder=\"请输入问题\"/>\n                    </div>\n                    <div class=\"ask-sug\" v-show=\"searchSug.length && title\">\n                        <h5>\n                            相似问题\n                        </h5>\n                        <ul>\n                            <li class=\"item\" data-type=\"sug\" v-for=\"item in searchSug\" :data-title=\"item.title\">\n                                <a class=\"item-inner\" :href=\"'/question/' + item.qid + '/'\" target=\"_blank\">\n                                    {{ item.title }}\n                                </a>\n                            </li>\n                        </ul>\n                    </div>\n                </div>\n                <div class=\"step2\">\n                    <h2 class=\"ask-title\">{{ title }}</h2>\n                    <div class=\"textarea-box\">\n                        <textarea data-node=\"desc-input\" name=\"t\" placeholder=\"添加问题背景描述（选填）\" v-model=\"desc\"></textarea>\n                        <span class=\"word-count\">\n                            <em class=\"current\" :class=\"{error:desc.length > 500}\">{{ desc.length }}</em>/<em>500</em>\n                        </span>\n                    </div>\n                    <div class=\"img-selecter\" id='img-selecter'>\n                        <materialList :title=\"title\" :question=\"question\" ref='ask-img'></materialList>\n                    </div>\n                </div>\n                <div class=\"step3\"></div>\n            </div>\n            <div class=\"footer\">\n                <a href=\"javascript:;\" data-node=\"pre\" class=\"step-btn pre\" @click=\"goToPreStep\" data-log=\"PopUp_CreateQuestionBack|From_\">上一步</a>\n                <a href=\"javascript:;\" data-node=\"next\" @click=\"goToNextStep\"\n                class=\"step-btn next\" :class=\"{disabled:!(title.length > 3 && title.length <= 40)}\" data-log=\"PopUp_CreateQuestionNext|From_\">下一步</a>\n                <a href=\"javascript:;\" data-node=\"submit\" class=\"step-btn submit\" data-log=\"PopUp_CreateQuestionSubmit|From_\" @click=\"submit\" :class=\"{disabled:!validCheck().valid || submitting}\">提交</a>\n            </div>\n        </div>\n    </div>\n</div>\n";

    }, {}],
    42: [function (require, module, exports) {
        var tpl = require('./assist-btn.tpl');
        var Feedback = require('../feedback/feedback');

        module.exports = Vue.component('w-assist-btn', {
            template: tpl,
            data: function () {
                return {
                    showGo2Top: false
                };
            },
            props: {
                showRefresh: {
                    type: Boolean,
                    default: false
                }
            },
            mounted: function () {
                this.scrollListener();
            },
            methods: {
                openFeedback: function () {
                    this.feedback = new Feedback({
                        el: $('<div></div>').appendTo('#modal-layer')[0]
                    });
                },
                goToTop: function () {
                    $(window).scrollTop(0);
                },
                scrollListener: function () {
                    $(document).on('scroll', function () {
                        var wHeight = $(window).height();
                        var sTop = $(window).scrollTop();
                        if (sTop > wHeight) {
                            if (this.showGo2Top === false) {
                                $('.j-go-top').animate({
                                    height: '50px',
                                    marginBottom: '10px'
                                }, 'fast');
                                this.showGo2Top = true;
                            }
                        } else {
                            if (this.showGo2Top === true) {
                                $('.j-go-top').animate({
                                    height: 0,
                                    marginBottom: 0
                                }, 'fast');
                                this.showGo2Top = false;
                            }
                        }
                    }.bind(this));
                },
                refresh: function () {
                    this.$emit('refreshSidebar');
                }
            }
        });

    }, {"../feedback/feedback": 50, "./assist-btn.tpl": 43}],
    43: [function (require, module, exports) {
        module.exports = "<div class=\"assist\" data-log-from=\"FloatingBtn\">\n    <a href=\"javascript:;\" data-node=\"static-refresh\" class=\"j-refresh\" data-log=\"ActiveRefresh|From_\" @click=\"refresh\" v-if=\"showRefresh\">\n        <i class=\"iconfont icon-refresh\"></i>\n    </a>\n    <a href=\"javascript:;\" data-node=\"static-feedback\" class=\"j-feedback\" data-log=\"PopUp_CreateFeedback|From_\" @click=\"openFeedback\">\n        <span>反馈</span>\n    </a>\n    <a class=\"j-go-top\" href=\"javascript:;\" @click=\"goToTop\">\n        <i class=\"iconfont icon-icon_top\"></i>\n    </a>\n</div>";

    }, {}],
    44: [function (require, module, exports) {
        var util = require('../util');

        var confirm = require('../answer-nointerest/confirm');
        var login = require('../login/login');

        module.exports = Vue.component('w-comment-item', {
            template: require('./comment_item.tpl'),
            data: function () {
                return {
                    isDigging: false
                };
            },
            props: ['data'],
            computed: {
                iCanDelete: function () {
                    return this.data.answer_uid === wenda.userData.user_id
                        || this.data.user_info.user_id === wenda.userData.user_id;
                },
                formattedTime: function () {
                    return util.formatDate2(new Date(this.data.create_time * 1000), 'm-d H:i');
                },
                showV: function () {
                    var authInfo = this.data.user_info.user_auth_info;
                    var authType;
                    if (authInfo) {
                        try {
                            authType = JSON.parse(authInfo).auth_type;
                        } catch (e) {
                        }
                    }
                    return authType && authType != 3;
                }
            },
            methods: {
                reply: function () {
                    this.$emit('comment.reply', this.data);
                },
                loginCheck: function () {
                    if (window.wenda.userData.is_login == 0) {
                        login.getLogin();
                        return false;
                    } else {
                        return true;
                    }
                },
                digg: function () {
                    if (!this.loginCheck()) {
                        return false;
                    }
                    if (this.data.is_digg || this.isDigging) {
                        return;
                    }

                    this.isDigging = true;
                    $.Ajax('/wenda/web/commit/diggcomment/', {
                        type: 'POST',
                        data: {
                            comment_id: this.data.comment_id,
                            t: new Date().getTime()
                        },
                        success: function (e, r) {
                            this.isDigging = false;
                            this.data.is_digg = true;
                            this.data.digg_count++;
                        }.bind(this),
                        error: function () {
                            this.isDigging = false;
                        }.bind(this)
                    });
                },
                deleteComment: function () {
                    if (!this.loginCheck()) {
                        return false;
                    }
                    var comment_id = this.data.comment_id;
                    new confirm({
                        data: {
                            title: '删除评论',
                            word: '确认删除该条评论？',
                            success_word: '刪除成功',
                            todo: function () {
                                $.Ajax('/wenda/web/commit/deletecomment/', {
                                    type: 'POST',
                                    data: {
                                        comment_id: comment_id,
                                        t: new Date().getTime()
                                    },
                                    success: function (e, r) {
                                        this.$emit('comment.deleted', {
                                            comment_id: comment_id
                                        });
                                    }.bind(this)
                                });
                            }.bind(this)
                        }
                    });
                }
            }
        });
    }, {"../answer-nointerest/confirm": 22, "../login/login": 75, "../util": 127, "./comment_item.tpl": 47}],
    45: [function (require, module, exports) {
        var tpl = require('./comment.tpl');
        require('./comment-item');
        var login = require('../login/login');

        module.exports = Vue.component('w-comment', {
            template: tpl,
            data: function () {
                return {
                    content: '',
                    openCommentArea: false,
                    reply_to_comment_id: undefined,
                    comments: [],
                    hasMore: undefined,
                    isLoading: false,
                    offset: 0,
                    enterCommentId: null
                };
            },
            props: ['ansid', 'answer_uid', 'isForbidden', 'commentCount', 'isAnswerDetail'],
            computed: {
                loadStatus: function () {
                    if (this.isLoading) {
                        return '<span>正在加载中...<span>';
                    } else {
                        if (this.hasMore) {
                            return '<span>点击加载更多</span>';
                        }
                    }
                }
            },
            created: function () {
                this.$on('comment.reply', function (data) {
                    this.content = '//@' + data.user_info.uname + ':' + data.content;
                    this.reply_to_comment_id = data.comment_id;
                    var dom = $(this.$el).find('textarea');
                    this.$nextTick(function () {
                        this._setCaretPosition(dom[0], 0);
                    }, this);
                }.bind(this));
                this.$on('comment.deleted', function (data) {
                    for (var i = 0; i < this.comments.length; i++) {
                        if (this.comments[i].comment_id == data.comment_id) {
                            this.comments.splice(i, 1);
                            break;
                        }
                    }
                }.bind(this));
                this.getComment();
            },
            methods: {
                hasLogin: function () {
                    return window.wenda.userData.is_login != '0';
                },
                avatar: function () {
                    return window.wenda.userData.avatar_url || '//s3b.pstatp.com/toutiao/resource/wenda/wenda_web/static/style/image/wenda_logo_04085f4.png';
                },
                loginCheck: function () {
                    if (window.wenda.userData.is_login == 0) {
                        login.getLogin();
                        return false;
                    } else {
                        return true;
                    }
                },
                showCommentEdit: function (e) {
                    this.openCommentArea = true;
                },
                getComment: function () {
                    if (this.isLoading) {
                        return;
                    }
                    var _this = this;
                    this.isLoading = true;
                    var data = {
                        ansid: this.ansid,
                        count: 10,
                        offset: this.offset,
                        t: new Date().getTime()
                    };
                    if (this.enterCommentId) {
                        data.enter_comment_id = this.enterCommentId;
                    }
                    $.Ajax('/wenda/web/comment/brow/', {
                        type: 'GET',
                        data: data,
                        success: function (e, r) {
                            _this.isLoading = false;
                            _this.offset += 10;
                            _this.hasMore = r.has_more;
                            _.each(r.comments, function (comment) {
                                comment.answer_uid = _this.answer_uid;
                                _this.comments.push(comment);
                            });

                            _this.$emit('comment.total_count.change', r.total_count);
                            _this.$emit('comment.paint');
                        }
                    });
                },
                loadMore: function () {
                    if (this.hasMore) {
                        this.getComment();
                    }
                },
                post: function () {
                    if (!this.loginCheck()) {
                        return false;
                    }
                    if (!this.content) {
                        return;
                    }

                    var _this = this;

                    if (!/\@/.test(this.content)) {
                        this.reply_to_comment_id = 0;
                    }
                    $.Ajax('/wenda/web/commit/postcomment/', {
                        type: 'POST',
                        data: {
                            text: this.content,
                            ansid: this.ansid,
                            reply_to_comment_id: this.reply_to_comment_id,
                            t: new Date().getTime()
                        },
                        success: function (e, r) {
                            this.content = '';
                            this.openCommentArea = false;
                            r.comment.answer_uid = this.answer_uid;
                            this.comments.unshift(r.comment);
                            $('body').toast({status: 'success', text: '评论成功'});

                            this.$emit('comment.add', r.comment);
                        }.bind(this)
                    });
                },
                forbidden: function () {
                    this.isForbidden = true;
                },
                permit: function () {
                    this.isForbidden = false;
                },
                _setCaretPosition: function (ctrl, pos) {
                    if (ctrl.setSelectionRange) {
                        ctrl.focus();
                        ctrl.setSelectionRange(pos, pos);
                    } else if (ctrl.createTextRange) {
                        var range = ctrl.createTextRange();
                        range.collapse(true);
                        range.moveEnd('character', pos);
                        range.moveStart('character', pos);
                        range.select();
                    }
                }
            }
        });
    }, {"../login/login": 75, "./comment-item": 44, "./comment.tpl": 46}],
    46: [function (require, module, exports) {
        module.exports = "<div>\n    <div class=\"comment-widget\" :class=\"{forbidden:isForbidden}\" v-if=\"!isAnswerDetail\">\n        <div class=\"forbidden\">\n            <i class=\"iconfont icon-ask_comment_ban\"></i>作者已关闭评论\n        </div>\n        <div class=\"my-comment\">\n            <div class=\"comment-avatar\">\n                <img :src=\"avatar()\" alt=\"\" v-if=\"hasLogin()\">\n                <img src=\"http://p3.pstatp.com/thumb/2171/6003290650\" alt=\"\" v-else>\n            </div>\n            <div class=\"comment-area\" :class=\"{open:openCommentArea}\">\n                <textarea data-node=\"comment-edit\" name=\"name\" placeholder=\"写下你的评论...\" rows=\"8\" v-model=\"content\" @focus=\"showCommentEdit\"></textarea>\n                <a href=\"javascript:;\" class=\"submit-button\" :class=\"{disabled:!content}\" data-node=\"post\" @click=\"post\">发表</a>\n            </div>\n        </div>\n        <ul class=\"comment-list\">\n            <w-comment-item v-for=\"comment in comments\" :data=\"comment\" :key=\"comment.comment_id\" :class=\"{'comment-hightlight': enterCommentId && enterCommentId == comment.comment_id}\"></w-comment-item>\n        </ul>\n        <div class=\"load\" data-node=\"load-more\" v-show=\"hasMore\" @click=\"loadMore\" v-if=\"hasMore !== false\" v-html=\"loadStatus\">\n            <span>点击加载更多<span>\n        </div>\n    </div>\n\n    <div class=\"comment-widget detail\" v-else>\n        <div class=\"comment-info\" :class=\"{'with-comment': !isForbidden, 'without-comment': isForbidden}\">\n            <span class=\"comment-count\">\n                <i class=\"iconfont icon-ask_comment\"></i>\n                <span v-if=\"commentCount > 0\">{{commentCount}}</span><span>评论</span>\n            </span>\n            <span class=\"ban-comment\" v-if=\"isForbidden\">\n                <i class=\"iconfont icon-ask_comment_ban no-comment\"></i>\n                <span>作者禁评</span>\n            </span>\n        </div>\n        <div class=\"seperator\" v-if=\"isForbidden && commentCount\"></div>\n        <div class=\"my-comment\" v-if=\"!isForbidden\">\n            <div class=\"comment-avatar\">\n                <img :src=\"avatar()\" alt=\"\" v-if=\"hasLogin()\">\n                <img src=\"http://p3.pstatp.com/thumb/2171/6003290650\" alt=\"\" v-else>\n            </div>\n            <div class=\"comment-area\" :class=\"{open:openCommentArea}\">\n                <textarea data-node=\"comment-edit\" name=\"name\" placeholder=\"写下你的评论...\" rows=\"8\" v-model=\"content\" @focus=\"showCommentEdit\"></textarea>\n                <a href=\"javascript:;\" class=\"submit-button\" :class=\"{disabled:!content}\" data-node=\"post\" @click=\"post\">发表</a>\n            </div>\n        </div>\n        <ul class=\"comment-list\">\n            <w-comment-item v-for=\"comment in comments\" :data=\"comment\" :key=\"comment.comment_id\"></w-comment-item>\n        </ul>\n        <div class=\"load\" data-node=\"load-more\" v-show=\"hasMore\" @click=\"loadMore\" v-if=\"hasMore !== false\" v-html=\"loadStatus\">\n            <span>点击加载更多<span>\n        </div>\n    </div>\n</div>";

    }, {}],
    47: [function (require, module, exports) {
        module.exports = "<li class=\"comment-item\">\n    <div class=\"comment-avatar\">\n        <a :href=\"'/user/?uid=' + data.user_info.user_id\" target=\"_blank\">\n            <img :src=\"data.user_info.avatar_url\" alt=\"\">\n        </a>\n    </div>\n    <div class=\"comment-content\">\n        <a class=\"uname\" :href=\"'/user/?uid=' + data.user_info.user_id\" target=\"_blank\">\n            {{ data.user_info.uname }}\n            <i class=\"iconfont icon-all_newv\" style=\"line-height:16px;font-size: 13px;color: #ffc41c;position: relative;\" v-if=\"showV\"></i>\n</a>\n<div class=\"digg-box\">\n    <a href=\"javascript:;\" class=\"digg\" :class=\"{digged:data.is_digg}\" @click=\"digg\">\n        <i class=\"iconfont icon-digg_clicked\"></i>\n        <span>{{ data.digg_count }}</span>\n    </a>\n</div>\n<div class=\"content-text\">\n    {{ data.content }}\n</div>\n<div class=\"tools\">\n    <span>{{ formattedTime }}</span>\n    <a class=\"tool-btn commentit\" href=\"javascript:;\" @click=\"reply\"><i class=\"iconfont icon-ask_comment\"  style=\"color:#cacaca;font-size: 12px;\"></i>评论</a>\n<a class=\"tool-btn deleteit\" href=\"javascript:;\" data-node=\"delete\" data-log=\"Delete_Comment|From_\" v-if=\"iCanDelete\" @click=\"deleteComment\"><i class=\"iconfont icon-deleterubbish\"  style=\"color:#cacaca;font-size: 12px;\"></i>删除</a>\n<!-- <a href=\"javascript:;\"><i class=\"icon-s icon-report\"></i>举报</a> -->\n</div>\n</div>\n</li>";

    }, {}],
    48: [function (require, module, exports) {
        var detailTpl = require('./answer_detail.tpl');
        var comment = require('../comment/comment');
        var gallery = require('../gallery/gallery');
        var answer = require('../answer/answer');

        var wLike = require('../like/like');
        var wUnlike = require('../like/unlike');
        var answerSetting = require('../answer/setting/setting');
        var model_feed_question = require('../model/feed_question');
        var login = require('../login/login');
        var toast = require('../../ui/toast/toast.js');
        var shareGroup = require('../sharegroup/sharegroup');
        var informModal = require('../inform-modal/inform-modal');
        require('../follow-btn/btn');
        require('../white-list-card/white-list-card');
        var inviteShare = require('../../widget/invite-sharegroup/invite-sharegroup');
        var util = require('../../widget/util');

        toast();
        module.exports = Vue.extend({
            template: detailTpl,
            data: function () {
                return {
                    hasData: false,
                    updateFromDataLoad: false,
                    autoPlay: false,
                    showGoToQuestion: '',
                    answerContent: ''
                };
            },
            components: {
                'w-invite-sharegroup': inviteShare
            },
            props: ['data', 'toComment', 'ansid'],
            computed: {
                allAnswerCount: function () {
                    return this.data.question.nice_ans_count + this.data.question.normal_ans_count;
                },
                shareData: function () {
                    var answer = this.data.answer;
                    var question = this.data.question;
                    var ansid = answer.ansid;
                    var shareData = {
                        'wap-url': 'https://www.wukong.com/answer/' + ansid + '/?from=pcshare',
                        'web-url': 'https://www.wukong.com/answer/' + ansid + '/',
                        title: '悟空问答' + question.title + '--' + answer.user.uname + '的回答(' + answer.digg_count + '赞)',
                        image: 'http://s0.pstatp.com/toutiao/resource/forum_wap/static/image/logo_366c1b5.png',
                        summary: ''
                    };
                    return shareData;
                },
                qtitle: function () {
                    return this.data.question.title;
                },
                qid: function () {
                    return this.data.question.qid;
                },
                showV: function () {
                    var authInfo = this.data.answer.user.user_auth_info;
                    var authType;
                    if (authInfo) {
                        try {
                            authType = JSON.parse(authInfo).auth_type;
                        } catch (e) {
                        }
                    }
                    return authType && authType != 3;
                },
                profitQuestion: function () {
                    return this.data.question.show_profit_invite;
                },
                profitAuthor: function () {
                    if (window) {
                        return window.wenda.userData.wenda_profit_user;
                    }
                    return false;
                },
                browCount: function () {
                    return util.formatNumber(this.data.answer.brow_count);
                },
                formattedShowCount: function () {
                    return util.formatNumber(this.data.answer.show_count);
                },
                diggCount: function () {
                    return util.formatNumber(this.data.answer.digg_count);
                }
            },
            beforeCreate: function () {
            },
            created: function () {
                this.answerContent = this.data.answer.content;
                this.foldImage();
                if (!window.bindESC) {
                    $(document).on('keydown', function (e) {
                        var keycode = e.which || event.keyCode;
                        if (keycode == 27) {
                            this.closeModal();
                        }
                    }.bind(this));
                    window.bindESC = 1;
                }
                if (this.data) {
                    this.isModal = true;
                    this.hasData = true;
                } else {
                    this.getAnswerBrow();
                }
                this.$on('answer.deleted', function () {
                    location.reload();
                });
                this.$on('answer.comment.permit', function () {
                    this.commentWidget.permit();
                }.bind(this));
                this.$on('answer.comment.forbidden', function () {
                    this.commentWidget.forbidden();
                }.bind(this));
            },
            beforeMount: function () {

            },
            mounted: function () {
                // 生成分享组件实例
                var el = $('<div></div>').appendTo('.share-group')[0];
                this.shareGroup = new shareGroup({
                    el: el
                });
                this.newShare();
                // 是否需要将工具栏悬浮
                this.scrollAndFixTool();
                var _this = this;
                $('#modal-layer').off('click.hideLayer').on('click.hideLayer', function (e) {
                    var $target = $(e.target);
                    if ($target.attr('id') === 'widget-detail') {
                        _this.closeModal();
                    }
                });
                if (this.hasData) {
                    this.dataOK();
                }

                if (this.isModal) {
                    $('#modal-layer').show();
                    $('body').css('overflow', 'hidden');
                }
                $('.lazy-image').each(function (i, item) {
                    loadImage(item);
                });
                this.formatImage();
                this.bindFoldImageEvent();
                $('.rich-text .video-hide').each(function (i, item) {
                    loadVideo(item, {
                        max_width: 660,
                        max_height: 600,
                        auto_play: _this.autoPlay
                    });
                });
                // 得在捕获阶段才能触发，冒泡阶段无法触发。
                var windowHeight = $(window).height();
                this.$el.addEventListener('load', function (event) {
                    var contentHeight = $('#modal-layer .main').height();
                    _this.showGoToQuestion = contentHeight > 1.5 * windowHeight ? true : false;
                }, true);

                this.insertShopCard();
            },
            updated: function () {
                if (this.updateFromDataLoad) {
                    $('#modal-layer').show();
                    $('body').css('overflow', 'hidden');

                    $('.lazy-image').each(function (i, item) {
                        loadImage(item);
                    });
                    this.formatImage();
                    $('.rich-text .video-hide').each(function (i, item) {
                        loadVideo(item, {max_width: 660, max_height: 600});
                    });
                    this.updateFromDataLoad = false;

                    this.dataOK();

                }
            },
            methods: {
                scrollAndFixTool: function () {
                    $(this.$el).on('scroll', throttle(50, handleTool));

                    function throttle(delay, action) {
                        var last = 0;
                        return function () {
                            var curr = new Date();
                            if (curr - last > delay) {
                                action.apply(this, arguments);
                                last = curr;
                            }
                        };
                    }

                    function handleTool() {
                        var WHeight = $(window).height();
                        var topIsHide = $('#widget-detail .abstract')[0].getBoundingClientRect().top < 0 ? true : false;
                        var bottomIsHide = $('#widget-detail .comment-tool-wrapper')[0].getBoundingClientRect().top + 44 > WHeight ? true : false;
                        var isToolShouldFixed = topIsHide && bottomIsHide;
                        if (isToolShouldFixed) {
                            $('.comment-tool').addClass('fixed');
                        } else {
                            $('.comment-tool').removeClass('fixed');
                        }
                    }
                },
                gotoCommentSection: function () {
                    var CommentWidgetTop = $('.comment-widget').position().top;
                    $('#widget-detail').animate({scrollTop: CommentWidgetTop}, 200);
                },
                inform: function () {
                    new informModal({
                        data: {
                            ansid: this.data.answer.ansid,
                            from: 'AnswerDetail'
                        }
                    });
                },
                dataOK: function () {
                    var _this = this;
                    // 评论。先render保证.comment存在
                    this.commentWidget = new comment({
                        el: $('<div></div>').appendTo($(this.$el).find('.comment'))[0],
                        data: {
                            ansid: this.data.answer.ansid,
                            answer_uid: this.data.answer.user.user_id,
                            isForbidden: this.data.answer.is_ban_comment,
                            commentCount: this.data.answer.comment_count,
                            // isAnswerDetail存在代表浮层,不存在代表问题页面和回答页面
                            isAnswerDetail: 1
                        }
                    });
                    this.commentWidget.$on('comment.total_count.change', function (count) {
                        _this.data.answer.comment_count = count;

                        // 处理浮层高度
                        this.$nextTick(function () {
                            var windowHeight = $(window).height();
                            var contentHeight = $('#modal-layer .main').height();
                            var widgetDetailPaddingTop = $('#widget-detail').css('padding-top');
                            var widgetDetailPaddingTopNumber = widgetDetailPaddingTop.substr(0, widgetDetailPaddingTop.length - 2);
                            var MainHeight = windowHeight - widgetDetailPaddingTopNumber;
                            if (contentHeight < MainHeight) {
                                $('#modal-layer .main').css('min-height', MainHeight);
                            }
                        }.bind(this));
                    });
                    this.commentWidget.$on('comment.paint', this.onCommentPaint.bind(this));

                    this.commentWidget.$on('comment.deleted', function () {
                        this.data.answer.comment_count--;
                        if (this.data.answer.comment_count < 0) {
                            this.data.answer.comment_count = 0;
                        }
                    }.bind(this));
                    this.commentWidget.$on('comment.add', function () {
                        this.data.answer.comment_count++;
                    }.bind(this));

                    var loadInterval;
                    $(this.$el).on('scroll', function () {
                        clearTimeout(loadInterval);
                        if ($('#widget-detail').scrollTop() + $('#widget-detail').height() - $('#widget-detail .main').height() > -100) {
                            _this.commentWidget.loadMore();
                        }
                    });
                },
                isMine: function () {
                    return this.data.answer.user.user_id == wenda.userData.user_id;
                },
                displayImage: function (e) {
                    var $target = $(e.currentTarget);
                    new gallery({
                        data: {
                            url: $target.attr('data-src')
                        },
                        el: $('<div></div>').appendTo('#modal-gallery-layer')[0]
                    });
                },
                newShare: function (e) {
                    var $target = $(this.$el).find('.share-group');
                    this.shareGroup.show(
                        {
                            'wap-url': 'https://www.wukong.com/answer/' + this.data.answer.ansid + '/?from=pcshare',
                            'web-url': 'https://www.wukong.com/answer/' + this.data.answer.ansid + '/?from=pcshare',
                            title: '悟空问答-' + this.data.question.title + '(' + this.data.answer.user.uname + '的回答,' + this.data.answer.digg_count + '赞)',
                            image: this.data.answer.content_abstract.image_url || 'http://s0.pstatp.com/toutiao/resource/forum_wap/static/image/logo_366c1b5.png',
                            summary: this.data.answer.content_abstract.text.substr(0, 200) + '...',
                            showQrAtOnce: 0
                        }, $target
                    );
                },
                initShare: function (options) {
                    var $wrapper = $(this.$el);
                    var answer = this.data.answer;
                    var question = this.data.question;
                    var ansid = answer.ansid;
                    var shareData = {
                        'wap-url': 'https://www.wukong.com/answer/' + ansid + '/?from=pcshare',
                        'web-url': 'https://www.wukong.com/answer/' + ansid + '/',
                        title: '悟空问答' + question.title + '--' + answer.user.uname + '的回答(' + answer.digg_count + '赞)',
                        image: 'http://s0.pstatp.com/toutiao/resource/forum_wap/static/image/logo_366c1b5.png',
                        summary: ''
                    };


                    var _this = this;
                    $wrapper.find('[data-node="share-qzone"]').on('click', function () {
                        shareToQzone(shareData);
                    });
                    $wrapper.find('[data-node="share-weibo"]').on('click', function () {
                        shareToWeibo(shareData);
                    });
                    $wrapper.find('[data-node="share-weixin"]').on('mouseover', function () {
                        _this.shareWeixin(shareData);
                    });
                    $wrapper.find('[data-node="share-weixin"]').on('mouseout', function () {
                        _this.$wrapper.find('.qr').hide();
                    });
                },
                shareWeixin: function () {
                    var shareData = this.shareData;
                    var url = shareData['wap-url'];
                    var $qr = $(this.$el).find('.qr');
                    var ori_url = $(this.$el).find('.qr').attr('data-url');
                    if (url !== ori_url) {
                        $qr.html('').show().qrcode({
                            render: 'div',
                            ecLevel: 'L',
                            text: shareData['wap-url'],
                            fill: '#000000',
                            size: 110
                        });
                        $qr.attr('data-url', url);
                    } else {
                        $qr.show();
                    }
                },
                hideShareWeixin: function () {
                    $(this.$el).find('.qr').hide();
                },
                shareToWeibo: function () {
                    var shareData = this.shareData;
                    var url = 'http://service.weibo.com/share/share.php?';
                    url += 'url=' + encodeURIComponent(shareData['web-url']);
                    url += '&appkey=2504490989';
                    url += '&pic=' + encodeURIComponent(shareData.image);
                    url += '&title=' + encodeURIComponent(shareData.title);
                    url += '&searchPic=true';
                    var login_url = 'https://passport.weibo.cn/signin/login?';
                    window.open(url);
                },
                shareToQzone: function () {
                    var shareData = this.shareData;
                    var url = 'http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?';
                    url += 'url=' + encodeURIComponent(shareData['web-url']);
                    // url += "&appkey=2504490989";
                    url += '&pics=' + encodeURIComponent(shareData.image);
                    url += '&title=' + encodeURIComponent(shareData.title);
                    url += '&summary=' + encodeURIComponent(shareData.summary || ' ');
                    window.open(url);
                },

                answer: function (e) {
                    console.log('this.origin_source', this.origin_source);
                    if (window.wenda.userData.is_login == 0) {
                        login.getLogin();
                        return false;
                    }

                    var question = this.data.question;
                    if (question.is_slave == 1) {
                        $('body').toast({
                            status: 'fail',
                            text: '该问题已经被合并'
                        });
                        return;
                    }
                    var qid = question.qid;
                    var data = {
                        qid: question.qid,
                        title: question.title,
                        abstractText: question.content.text
                    };
                    this.closeModal();
                    new answer({
                        data: {
                            answer: data,
                            origin_source: this.origin_source
                        }
                    });
                    $.log.event('PopUp_Answer', 'From_$_AnswerDetail');
                },
                edit: function (e) {
                    if (window.wenda.userData.is_login == 0) {
                        login.getLogin();
                        return false;
                    }
                    var question = this.data.question;
                    if (question.is_slave == 1) {
                        $('body').toast({
                            status: 'fail',
                            text: '该问题已经被合并'
                        });
                        return;
                    }
                    // 也可以编辑 -> 又不可以
                    if (this.data.answer && this.data.answer.disable_edit) {
                        $('body').toast({status: 'success', text: this.data.answer.edit_tips || '该内容无法修改', keep: 3000});
                        return;
                    }

                    var qid = question.qid;
                    var abstractImage = '';
                    var pic_uri_list = question.content.pic_uri_list;
                    if (pic_uri_list.length > 0) {
                        abstractImage = pic_uri_list[0].web_uri;
                    }
                    var data = {
                        qid: question.qid,
                        ansid: this.data.answer.ansid,
                        title: question.title,
                        abstractText: question.content.text,
                        abstractImage: abstractImage,
                        concern_tags: question.concern_tags,
                        isEdit: true,
                        initContent: this.data.answer.content,
                        url: this.data.answer.link_url,
                        star_order_id: this.data.answer.star_order_id
                    };
                    this.closeModal();
                    new answer({
                        data: {
                            answer: data
                        }
                    });
                },
                goToTop: function () {
                    $(this.$el).scrollTop(0);
                },
                closeModal: function () {
                    this.$destroy();
                    // 关闭浮层
                    $('#modal-layer').hide().html('');
                    // 禁止背景的滚动
                    $('body').css('overflow', 'auto');
                },
                onCommentPaint: function () {
                    if (this.toComment) {
                        $('#widget-detail')[0].scrollTop = $('.comment').position().top;
                    }
                },
                getAnswerBrow: function () {
                    $.Ajax('/wenda/web/answer/brow/', {
                        type: 'GET',
                        data: {
                            ansid: this.ansid,
                            t: new Date().getTime()
                        },
                        success: function (e, r) {
                            this.$set(this, 'data', {
                                question: r.answer_question.question,
                                answer: r.answer_question.answer
                            });
                            this.hasData = true;
                            this.updateFromDataLoad = true;
                        }.bind(this)
                    });
                },
                formatImage: function () {
                    var _this = this;
                    $(this.$el).find('.rich-text img').each(function (idx, item) {
                        var $item = $(item);
                        var h = $item.attr('img_height'),
                            w = $item.attr('img_width'),
                            r = h / w;
                        if (r > 0.8 && r < 2 && h > 600) {
                            $item.addClass('small');
                            _this.imageAction($item);
                        }
                    });
                },
                imageAction: function ($item) {
                    $item.on('click', function () {
                        $item.toggleClass('large').toggleClass('small');
                    });
                },
                foldImage: function () {
                    this.answerContent = util.foldImage(this.answerContent, this.data.answer.ansid);
                },
                bindFoldImageEvent: function () {
                    util.bindfoldImageEvent(this.$el);
                },
                insertShopCard: function () {
                    $(this.$el).find('.tt-commodity-card').each(function (index, item) {
                        try {
                            var data = JSON.parse($(item).attr('data-content'));
                            var discountText = data.sec_kill && data.sec_kill.title || data.coupon_tt && data.coupon_tt.title;
                            var dom = (`
                        <a class="commodity-card" href="${data.charge_url}" target="_blank">
                            <div class="commodity-card-left">
                                <img class="card-left-img" src="${data.img_url}" />
                            </div>
                            <div class="commodity-card-right">
                                <div class="card-right-title">${data.card_title}</div>
                                <div class="card-right-info">
                                    ${data.sec_kill ? ('<div class="right-info-miaosha"><div class="info-miaosha-text">秒杀</div></div>') : ''}
                                    ${data.sales ? '<div class="right-info-solid">已售' + data.sales + '件</div>' : ''}
                                    ${data.source && data.sales ? ('<div class="right-info-split" />') : ''}
                                    ${data.source ? '<div class="right-info-source">' + data.source + '</div>' : ''}
                                </div>
                                <div class="card-right-price">
                                    ${data.price ? '<div class="right-price-now">￥' + data.price + '</div>' : ''}
                                    ${data.original_price && data.price && data.original_price > data.price ? '<div class="right-price-other right-price-old">￥' + data.original_price + '</div>' : ''}
                                    ${discountText ? '<div class="right-price-other right-price-discount"><div class="discount-text">' + discountText + '</div></div>' : '<div class="right-price-placeholder" />'}
                                    <div class="right-price-goto">去看看</div>
                                </div>
                            </div>
                        </a>
                    `);
                            $(item).append(dom);
                        } catch (e) {
                            console.log(e);
                        }
                    })
                }
            }
        });

    }, {
        "../../ui/toast/toast.js": 18,
        "../../widget/invite-sharegroup/invite-sharegroup": 61,
        "../../widget/util": 127,
        "../answer/answer": 24,
        "../answer/setting/setting": 28,
        "../comment/comment": 45,
        "../follow-btn/btn": 52,
        "../gallery/gallery": 54,
        "../inform-modal/inform-modal": 59,
        "../like/like": 71,
        "../like/unlike": 73,
        "../login/login": 75,
        "../model/feed_question": 77,
        "../sharegroup/sharegroup": 99,
        "../white-list-card/white-list-card": 128,
        "./answer_detail.tpl": 49
    }],
    49: [function (require, module, exports) {
        module.exports = "<div id=\"widget-detail\" data-log-from=\"!AnswerDetail\" v-if=\"hasData\">\n    <div class=\"main\">\n        <div class=\"header\">\n            <div class=\"info\" v-show=\"data.question.concern_tags.length\">\n                <a :href=\"'/tag/' + tag.concern_id + '/'\" target=\"_blank\" class=\"tag\" data-log=\"Visit_Tag|From_\" v-for=\"tag in data.question.concern_tags\">\n                    {{ tag.name }}\n                </a>\n            </div>\n            <a :href=\"'/question/' + data.question.qid + '/'\"><h2 class=\"title\">{{ data.question.title }}</h2></a>\n            <div class=\"abstract\" v-show=\"data.question.content.text\">{{ data.question.content.text }}</div>\n            <div class=\"question-img-preview\" v-if=\"data.question.content.large_image_list && data.question.content.large_image_list.length>0\">\n                <div class=\"image-box\" v-for=\"pic in data.question.content.large_image_list\">\n                    <img data-node=\"preview\"  :data-src=\"'//p3.pstatp.com/'+ pic.uri\" data-width=\"168\" data-height=\"114\" class=\"lazy-image\" @click=\"displayImage\"\n                    />\n                </div>\n            </div>\n            <div class=\"question-bottom\">\n                <a v-if=\"profitAuthor\" class=\"profit-qa answer-btn\" data-node=\"answer\" :data-qid=\"data.question.qid\" href=\"javascript:;\" data-log=\"PopUp_Answer|From_\" @click=\"answer\" PopUp_Answer>\n                    <img src=\"//s3a.pstatp.com/toutiao/resource/wenda/wenda_web/static/style/image/red_pocket_supernatant@3x_96b58f9.png\" alt=\"\">\n                    <span class=\"text\">回答得现金</span>\n                </a>\n                <a v-else data-node=\"answer\" :data-qid=\"data.question.qid\" class=\"answer-btn\" href=\"javascript:;\" data-log=\"PopUp_Answer|From_\" @click=\"answer\" PopUp_Answer>\n                    <i class=\"iconfont icon-ask_write\" style=\"font-size:12px;margin-right: 4px;\"></i>\n                    <span class=\"text\">回答</span>\n                </a>\n\n                <w-invite-sharegroup v-if=\"profitQuestion\" :shareData=\"shareData\" onlyinvite=\"true\" :qid=\"qid\"></w-invite-sharegroup>\n                <a :href=\"'/question/' + data.question.qid + '/?origin_source=' + origin_source\" target=\"_blank\" class=\"answer-count\" data-log=\"Visit_Question|From_\">\n                    <span>查看全部 {{allAnswerCount}}个回答</span><i class=\"iconfont icon-forward\"></i>\n                </a>\n            </div>\n\n        </div>\n        <template v-if=\"data.answer\">\n        <div class=\"answer\">\n            <div class=\"answer-user user-action\">\n                <div class=\"answer-user-follow\" v-if=\"!isMine\">\n                    <w-follow-btn :userData=\"data.answer.user\"></w-follow-btn>\n                </div>\n                <div class=\"self-info\">\n                    {{ formattedShowCount }}{{data.answer.show_text || '阅读'}}<i> · </i>{{ diggCount }}赞\n                </div>\n                <a class=\"answer-user-avatar\" :href=\"'/user/?uid=' + data.answer.user.user_id\" target=\"_blank\" data-log=\"Visit_Profile|From_\">\n                    <img class=\"\" :src=\"data.answer.user.avatar_url\" alt=\"\">\n                </a>\n                <a class=\"answer-user-name\" :href=\"'/user/?uid=' + data.answer.user.user_id\" target=\"_blank\" data-log=\"Visit_Profile|From_\">\n                    <span class=\"name\">\n                        {{ data.answer.user.uname }}\n                        <i class=\"iconfont icon-all_newv\" style=\"font-size: 13px;color: #ffc41c;\" v-if=\"showV\"></i>\n                    </span>\n                    <span class=\"intro\" v-if=\"data.answer.user.user_intro\">{{ data.answer.user.user_intro }}</span>\n                </a>\n                <span class=\"create-time\">{{ data.answer.show_time }}</span>\n\n            </div>\n            <div class=\"content rich-text\" v-html=\"answerContent\">\n            </div>\n            <w-white-list-card :user=\"data.answer.user\" v-if=\"data.answer.user.is_cooper\"></w-white-list-card>\n\n        </div>\n        <div class=\"answer-user pgc-info\" style=\"display:none;\">\n            <a :href=\"'/user/?uid=' + data.answer.user.user_id\" target=\"_blank\" data-log=\"Visit_Profile|From_\">\n                <img class=\"answer-user-avatar\" :src=\"data.answer.user.avatar_url\" alt=\"\">\n            </a>\n            <a class=\"answer-user-name\" :href=\"'/user/?uid=' + data.answer.user.user_id\" target=\"_blank\" data-log=\"Visit_Profile|From_\">\n                <span class=\"name\">\n                    {{ data.answer.user.uname }}\n                    <i class=\"iconfont icon-all_newv\" style=\"font-size: 13px;color: #ffc41c;\" v-if=\"showV\"></i>\n                </span>\n                <span class=\"intro\">{{ data.answer.user.user_intro }}</span>\n            </a>\n            <a href=\"javascript:;\" data-node=\"concern\" style=\"display:none;\" class=\"concern-btn\" >关注</a>\n        </div>\n        </template>\n        <div class=\"comment-tool-wrapper\">\n            <div class=\"comment-tool\">\n                <w-like :answer=\"data.answer\" class=\"answer-like-count\"></w-like>\n                <w-unlike :answer=\"data.answer\" class=\"answer-dislike\"></w-unlike>\n                <a data-node=\"show-comment\" class=\"show-comment\"\n                    href=\"javascript:;\" :data-ansid =\"data.answer.ansid\" :data-answer-uid=\"data.answer.user.user_id\" :data-is_ban_comment=\"data.answer.is_ban_comment\"  data-log=\"Visit_Comment|From_\" @click=\"gotoCommentSection\">\n                    <i class=\"iconfont icon-ask_comment\"></i>\n                    {{ data.answer.comment_count || '' }}评论\n\n                </a>\n                <div data-node=\"share-group\" class=\"share-group share-anchor\"\n                    :data-ansid=\"data.answer.ansid\">\n                        <i class=\"iconfont icon-share-home i-share\"></i>\n                        分享\n                    </div>\n                <div class=\"inform\" @click=\"inform\" v-if=\"!isMine()\">\n                    <i class=\"iconfont icon-CombinedShape\"></i>\n                    <span data-log=\"PopUp_Inform|From_\">举报</span>\n                </div>\n                <div class=\"sub-info\">\n                    <w-answer-setting v-if=\"isMine()\" :answer=\"data.answer\" :is_star_order_accepted=\"this.data.answer && this.data.answer.is_star_order_accepted || 0\"></w-answer-setting>\n                    <a href=\"javascript:;\" :class=\" {'editit': true, 'no-edit': !!data.answer.disable_edit}\" v-if=\"isMine()\" @click=\"edit\">编辑</a>\n                    <div class=\"outside-link\" v-if=\"data.answer.link_url\">\n                        <a :href=\"data.answer.link_url\" target=\"_blank\" rel=\"nofollow\">了解更多</a>\n                        <i class=\"iconfont icon-ask_arrow_right\" v-if=\"!isMine()\"></i>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class=\"other-answer\" v-if=\"(data.question.nice_ans_count + data.question.normal_ans_count - 1) > 0\">\n            <a v-if=\"allAnswerCount - 1\" :href=\"'/question/' + data.question.qid + '/?origin_source=' + origin_source\" target=\"_blank\" class=\"\" data-log=\"Visit_Question|From_\">\n                其他 {{ allAnswerCount - 1 }}个回答<i class=\"iconfont icon-forward\"></i>\n            </a>\n        </div>\n        <div class=\"goto-question\" v-if=\"showGoToQuestion\" >\n            <div class=\"line\"></div>\n            <a href=\"javascript:;\" @click=\"answer\" class=\"goto-question-title\">{{qtitle}}</a>\n            <a href=\"javascript:;\" @click=\"answer\" class=\"goto-question-btn\">\n                <div class=\"box\" >\n                    <i class=\"iconfont icon-ask_write pen\"></i>\n                    <span>我要回答</span>\n                </div>\n\n            </a>\n        </div>\n        <div class=\"comment\"></div>\n        <a href=\"javascript:;\" class=\"action-btn close-btn\" data-node=\"close\" @click=\"closeModal\">\n            <i class=\"iconfont icon-ask_close\"></i>\n        </a>\n        <!-- <a href=\"javascript:;\" class=\"action-btn share-btn share-weixin\" data-node=\"share-weixin\" data-log=\"Share_Weixin|From_\" @mouseover=\"shareWeixin\" @mouseout=\"hideShareWeixin\">\n            <i class=\"iconfont icon-ask_weixin\"></i>\n            <div class=\"qr\"></div>\n        </a>\n        <a href=\"javascript:;\" class=\"action-btn share-btn share-qzone\" data-node=\"share-qzone\" data-log=\"Share_Qzone|From_\" @click=\"shareToQzone\">\n            <i class=\"iconfont icon-ask_qone\"></i>\n        </a>\n        <a href=\"javascript:;\" class=\"action-btn share-btn share-weibo\" data-node=\"share-weibo\" @click=\"shareToWeibo\" data-log=\"Share_Weibo|From_\">\n            <i class=\"iconfont icon-ask_weibo\"></i>\n        </a> -->\n        <a href=\"javascript:;\" class=\"action-btn go-back-btn\" data-node=\"go-back-btn\" @click=\"goToTop\">\n            <i class=\"iconfont icon-arrow\"></i>\n        </a>\n    </div>\n</div>\n";

    }, {}],
    50: [function (require, module, exports) {
        var tpl = require('./feedback.tpl');
// var Uint8Array = require('./typedarray-polyfill').Uint8Array;

        module.exports = Vue.component('w-feedback', {
            template: tpl,
            data: function () {
                return {
                    scaleX: 1,
                    scaleY: 1,
                    content: '',
                    contact: '',
                    screenImg: '',
                    checkedImg: true,
                    screenCaptureFinished: false,
                    isLoading: false
                };
            },
            mounted: function () {
                html2canvas(document.body, {
                    type: 'view',
                    useCORS: true,
                    // allowTaint: true,
                    letterRendering: true,
                    onrendered: function (canvas) {
                        this.canvas = canvas;
                        this.ctx = canvas.getContext('2d');
                        this.ctx.strokeStyle = 'red';
                        this.ctx.lineWidth = 4;
                        $(canvas).on('mousedown', this.startDraw);
                        $(canvas).on('mousemove', this.drawing);
                        $(canvas).on('mouseup', this.endDraw);
                        $(canvas).on('mouseout', this.endDraw);
                        $('#feedback-canvas-container').append(canvas);
                        this.scaleX = this.canvas.offsetWidth / window.innerWidth;
                        this.scaleY = this.canvas.offsetHeight / window.innerHeight;
                        this.screenCaptureFinished = true;
                    }.bind(this)
                });
                $('.feedback-canvas-container').css('height', window.innerHeight * 508 / window.innerWidth);
                this.fileupload = $('#hidden-input').fileupload({
                    url: '/wenda/web/upload/photo/',
                    sequentialUploads: true,
                    done: this.onDone.bind(this),
                    limitMultiFileUploads: 1,
                    dropZone: null
                });
                $('#modal-layer').show();
                $('body').css('overflow', 'hidden');
            },
            methods: {
                startDraw: function (event) {
                    this.draw = true;
                    this.ctx.beginPath();
                    this.ctx.moveTo(event.offsetX / this.scaleX, event.offsetY / this.scaleY);
                },
                drawing: function (event) {
                    if (this.draw) {
                        this.ctx.lineTo(event.offsetX / this.scaleX, event.offsetY / this.scaleY);
                        this.ctx.stroke();
                    }
                },
                endDraw: function () {
                    this.draw = false;
                },
                closeModal: function () {
                    // 关闭浮层
                    $('#modal-layer').hide().html('');
                    // 禁止背景的滚动
                    $('body').css('overflow', 'auto');
                    this.$destroy();
                },
                submitFeedback: function () {
                    if (this.isLoading) {
                        return;
                    }
                    this.isLoading = true;
                    var datauri, blob;
                    // var isTel = /^1\d{10}$/;
                    var isEmail = /^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/;
                    if (this.content.trim() === '') {
                        $('body').toast({
                            status: 'fail',
                            text: '反馈内容不能为空'
                        });
                        this.isLoading = false;
                        return;
                    }
                    if (this.contact.trim() !== '') {
                        if (!isEmail.test(this.contact.trim())) {
                            $('body').toast({
                                status: 'fail',
                                text: '请填写正确的联系方式'
                            });
                            this.isLoading = false;
                            return;
                        }
                    }
                    if (this.checkedImg === true) {
                        if (this.screenCaptureFinished === true) {
                            datauri = this.canvas.toDataURL();
                            blob = this.dataURItoBlob(datauri);
                            blob ? $('#hidden-input').fileupload('send', {
                                files: [blob]
                            }) : this.submitForm();

                        } else {
                            $('body').toast({
                                status: 'fail',
                                text: '请等待截屏完成'
                            });
                            this.isLoading = false;

                        }
                    } else {
                        this.submitForm();
                    }
                },
                dataURItoBlob: function (dataURI) {
                    // convert base64/URLEncoded data component to raw binary data held in a string
                    var byteString;
                    if (dataURI.split(',')[0].indexOf('base64') >= 0) {
                        if (typeof (atob) !== 'undefined') {
                            byteString = atob(dataURI.split(',')[1]);
                        } else {
                            return null;
                        }
                    } else {
                        byteString = unescape(dataURI.split(',')[1]);
                    }
                    // separate out the mime component
                    var mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];

                    // write the bytes of the string to a typed array
                    if (typeof (Uint8Array) !== 'undefined') {
                        var ia = new Uint8Array(byteString.length);
                        for (var i = 0; i < byteString.length; i++) {
                            ia[i] = byteString.charCodeAt(i);
                        }
                        return new Blob([ia], {
                            type: mimeString
                        });
                    } else {
                        return null;
                    }
                },
                onDone: function (e, data) {
                    var result = data.result;
                    this.imgUrl = result.url;
                    this.imgUrl = this.imgUrl.replace(/\/large\//, '/origin/');
                    this.submitForm();
                },
                submitForm: function () {
                    var param = {};
                    param['text'] = this.content;
                    if (this.checkedImg && this.imgUrl) {
                        param['img_url'] = this.imgUrl;
                    }
                    if (this.contact.trim() !== '') {
                        param['contact'] = this.contact;
                    }
                    $.ajax('/wenda/web/commit/userreport/', {
                        data: param,
                        method: 'POST',
                        success: function (data) {
                            if (data.err_no === 0) {
                                $('body').toast({
                                    status: 'success',
                                    text: '谢谢，你的意见反馈已提交，</br>问答团队会尽快处理。'
                                });
                                this.closeModal();
                            } else {
                                $('body').toast({
                                    status: 'fail',
                                    text: '抱歉，服务存在故障，提交失败'
                                });
                            }
                            this.isLoading = false;
                        }.bind(this),
                        error: function () {
                            $('body').toast({
                                status: 'fail',
                                text: '抱歉，服务存在故障，提交失败'
                            });
                            this.isLoading = false;
                        }
                    });
                }
            }
        });

    }, {"./feedback.tpl": 51}],
    51: [function (require, module, exports) {
        module.exports = "<div class=\"widget-feedback-outer\">\n    <div class=\"widget-feedback-inner\">\n        <div class=\"feedback-header\">\n            <h3>提交反馈</h3>\n            <a href=\"javascript:;\" data-log=\"PopUp_CreateFeedbackClose|From_\" class='close' @click=\"closeModal\">\n                <i class=\"iconfont icon-dislike_icon_new\"></i>\n            </a>\n        </div>\n        <div class=\"feedback-body clearfix\">\n            <div class=\"feedback-body-content\">\n                <textarea placeholder=\"告诉我们您的建议或遇到的问题\" v-model=\"content\"></textarea>\n            </div>\n            <div class=\"feedback-body-contact\">\n                <h3 class='item-header'>联系方式<span>（可选）</span></h3>\n                <input type='text' placeholder=\"您的邮箱\" class='contact-input' v-model='contact'>\n            </div>\n            <div class=\"feedback-body-canvas\">\n                <h3 class='item-header'>屏幕截图<span>（可选）</span></h3>\n                <div class=\"feedback-canvas-container\" id=\"feedback-canvas-container\">\n                    <!-- <canvas class=\"feedback-canvas\" id=\"feedback-canvas\" @mousedown=\"startDraw($event)\" @mousemove=\"drawing($event)\" @mouseup=\"endDraw\" @mouseout=\"endDraw\"></canvas> -->\n                </div>\n                <div class=\"feedback-checkbox-container\"><input type=\"checkbox\" v-model='checkedImg'><label>提交屏幕截图</label></div>\n            </div>\n        </div> \n        <div class='feedback-buttons clearfix'>\n            <input type='submit' value='提交' class='submit' @click.prevent='submitFeedback'>\n        </div>\n        <input class='hidden-input' id='hidden-input' type='file' style=\"display:none\" name='upfile'> \n    </div>\n</div>";

    }, {}],
    52: [function (require, module, exports) {
        var tpl = require('./btn.tpl');
        var login = require('../login/login');
        var toast = require('../../ui/toast/toast');
        var pubSub = require('../update-btn');

        module.exports = Vue.component('w-follow-btn', {
            template: tpl,
            data: function () {
                return {
                    isHovering: false
                };
            },
            computed: {
                text: function () {
                    if (this.userData.is_following) {
                        if (this.isHovering) {
                            return '取消关注';
                        } else {
                            if (this.userData.is_followed) {
                                return '互相关注';
                            } else {
                                return '已关注';
                            }
                        }
                    } else {
                        return '关注';
                    }
                }
            },
            props: ['userData', 'type'],
            mounted: function () {
                toast();
                pubSub.$data.uids.push(this.userData.user_id);
                pubSub.$on('newBtnStatus', this.updateStatus);
            },
            methods: {
                updateStatus: function (followObj) {
                    var user_id = this.userData.user_id;
                    if (followObj[user_id] !== undefined) {
                        this.userData.is_following = followObj[user_id];
                    }
                },
                click: function () {
                    var me = this;
                    if (window.wenda.userData.is_login == 0) {
                        login.$once('login', function () {
                            if (me.userData.is_following) {
                                me.disFollow();
                            } else {
                                me.follow();
                            }
                        });
                        login.getLogin();
                        return false;
                    }
                    if (this.userData.is_following) {
                        this.disFollow();
                    } else {
                        this.follow();
                    }
                },
                follow: function () {
                    if (this.userData.is_following) {
                        return false;
                    }
                    // 埋点
                    window.collectEvent && window.collectEvent('rt_follow', {
                        to_user_id: this.userData.user_id,
                    });
                    var url = '/wenda/web/commit/followuser/';
                    $.Ajax(url, {
                        type: 'POST',
                        data: {
                            to_user_id: this.userData.user_id,
                            follow_type: 1
                        },
                        success: function () {
                            this.userData.is_following = true;
                            this.type != 'talent' ? $('body').toast({status: 'success', text: '关注成功'}) : '';
                            if (this.type == 'talent') {
                                this.$emit('doFollow');
                                this.isHovering = false;
                            }
                        }.bind(this)
                    });
                },
                disFollow: function () {
                    var url = '/wenda/web/commit/followuser/';
                    $.Ajax(url, {
                        type: 'POST',
                        data: {
                            to_user_id: this.userData.user_id,
                            follow_type: 0
                        },
                        success: function () {
                            this.userData.is_following = false;
                            this.type != 'talent' ? $('body').toast({status: 'success', text: '取消关注成功'}) : '';
                        }.bind(this)
                    });
                }
            },
            destroyed: function () {
                pubSub.$off('newBtnStatus', this.updateStatus);
                var index = pubSub.$data.uids.indexOf(this.userData.user_id);
                if (index > -1) {
                    pubSub.$data.uids.splice(index, 1);
                }
            }
        });
    }, {"../../ui/toast/toast": 18, "../login/login": 75, "../update-btn": 123, "./btn.tpl": 53}],
    53: [function (require, module, exports) {
        module.exports = "<a class=\"w-follow-btn\" data-log=\"Follow_User|From_\" :class=\"{'both-followed':userData.is_following && userData.is_followed,'followed':userData.is_following && !userData.is_followed,'dis-follow':userData.is_following && isHovering}\" @mouseenter=\"isHovering = true\" @mouseleave=\"isHovering = false\" @click=\"click\">\n    <i class=\"iconfont icon-details_add_icon\"></i>\n    <i class=\"iconfont icon-details_attention_icon\"></i>\n    <span>\n        {{ text }}\n    </span>\n</a>";

    }, {}],
    54: [function (require, module, exports) {
        var galleryTpl = require('./gallery.tpl');

        function throttle(delay, action) {
            var last = 0;
            return function () {
                var curr = new Date();
                if (curr - last > delay) {
                    action.apply(this, arguments);
                    last = curr;
                }
            };
        }

        module.exports = Vue.extend({
            template: galleryTpl,
            data: function () {
                return {
                    is_on_image: false,
                    is_pressed: false,
                    scale: 1,
                    x: 0,
                    y: 0,
                    nx: 0,
                    ny: 0
                };
            },
            props: ['url'],
            computed: {},
            mounted: function () {
                this.bindEvent();

                $('#modal-gallery-layer').show();
                $('body').css('overflow', 'hidden');
            },
            methods: {
                loadImg: function () {
                    var clientWidth = document.body.clientWidth - 100;
                    var img = $('#widget-gallery img');
                    var imgWidth = img[0] && img[0].clientWidth; // fix jserr at https://slardar.bytedance.net/node/browser_detail/jserr/detail?bid=wenda_pc&region=cn&start_time=1584425940&end_time=1584429540&granularity=60&issue_id=f17e438d5287349834abcac89c9b12b2
                    imgWidth > clientWidth ? imgWidth && img.css('width', clientWidth) : '';
                },
                bindEvent: function () {
                    var _this = this;
                    $('#modal-gallery-layer').off('click.hideLayer').on('click.hideLayer', function (e) {
                        var $target = $(e.target);
                        if ($target.attr('id') === 'widget-gallery') {
                            _this.closeModal();
                        }
                    });
                    this._resize = this.bindResize.bind(this);
                    this._move = this.bindMove.bind(this);

                    $(document).on('mousewheel.resize', this._resize);
                    $(document).on('mousemove.move', this._move);
                    $(document).on('DOMMouseScroll.resize', this._resize);
                },
                mousedown: function (ev) {
                    this.is_pressed = true;
                    this.ori_x = ev.clientX;
                    this.ori_y = ev.clientY;
                },
                mouseup: function () {
                    this.is_pressed = false;
                    this.x = this.nx;
                    this.y = this.ny;
                },
                bindMove: function (e) {
                    if (this.is_pressed) {
                        e.preventDefault();
                        var dx = e.clientX - this.ori_x;
                        var dy = e.clientY - this.ori_y;
                        this.nx = dx + this.x;
                        this.ny = dy + this.y;
                    }
                },
                bindResize: function (e) {
                    var delta = (e.originalEvent.wheelDelta && (e.originalEvent.wheelDelta > 0 ? 1 : -1))
                        || (e.originalEvent.detail && (e.originalEvent.detail > 0 ? -1 : 1));
                    if (this.is_on_image) {
                        if (delta > 0) {
                            // 向上滚
                            this.bigger();
                        } else if (delta < 0) {
                            // 向下滚
                            this.smaller();
                            if (this.scale <= 0.1) {
                                this.scale = 0.1;
                            }
                        }
                    }

                },
                closeModal: function () {
                    $(document).off('mousewheel.resize', this._resize);
                    $(document).off('mousemove.move', this._move);
                    $(document).off('DOMMouseScroll.resize', this._resize);
                    // 关闭浮层
                    $('#modal-gallery-layer').hide();
                    // 禁止背景的滚动
                    $('body').css('overflow', 'auto');
                    $(this.$el).remove();
                },
                bigger: throttle(25, function () {
                    this.scale += 0.05;
                }),
                smaller: throttle(25, function () {
                    this.scale -= 0.05;
                })
            }
        });
    }, {"./gallery.tpl": 55}],
    55: [function (require, module, exports) {
        module.exports = "<div class=\"widget-gallery\" id=\"widget-gallery\">\n    <img :src=\"url\" data-node=\"img\" alt=\"\" @mouseover=\"is_on_image = true\" @mouseout=\"is_on_image = false\" @mousedown=\"mousedown\" @mouseup=\"mouseup\" :style=\"{transform:'translate(' + nx + 'px,' + ny + 'px) scale(' + scale + ')'}\" @load=\"loadImg\"/>\n    <a href=\"javascript:;\" class=\"action-btn close-btn\" data-node=\"close\" @click=\"closeModal\">\n        <i class=\"iconfont icon-ask_close\"></i>\n    </a>\n</div>\n";

    }, {}],
    56: [function (require, module, exports) {

        module.exports = function (options) {
            $(options.$el).on('click', function () {
                $(window).scrollTop(0);
            });
        };
    }, {}],
    57: [function (require, module, exports) {
        /**
         * Created by fenghongyu on 15/12/9.
         */
        var tpl = require('./new_header.tpl');
        var login = require('../login/login');
        var ask = require('../ask/ask');
        var searchInput = require('../search-input/search-input');
        var newMessageBtn = require('../new-message/new-message-btn');
        var starOrderList = require('../star_order_list');

        var _newMessageBtn;

        module.exports = Vue.component('w-header', {
            template: tpl,
            data: function () {
                return {
                    has_privilege: false,
                    showQr: false,
                    inputIsFocused: false
                };
            },
            props: ['query', 'searchWord', 'inModule'],
            computed: {
                logoutUrl: function () {
                    return 'https://sso.toutiao.com/logout/?service=https://www.wukong.com/wenda/web/commit/logout/?wukong_index=';
                },
                user: function () {
                    if (this.inModule) {
                        return this.$store.state.userData;
                    }
                    return window.wenda.userData;
                },
            },
            beforeCreate: function () {
                if (!this.$options.propsData.inModule) {
                    var $dom = $('.index-header .index-header-wrapper').html('');
                    this.$options.el = $('<div></div>').appendTo($dom)[0];
                }
            },
            created: function () {
            },
            mounted: function () {
                var me = this;

                /** 基于退出登录页面会刷新的逻辑，如果退出不刷新了会有问题:newMessageBtn的轮询会多次创建 */
                login.$on('login', function () {
                    me.logined();
                    me.$forceUpdate();
                });

                if (window.wenda.userData.is_login != 0) {
                    this.logined();
                }
            },
            methods: {
                teaRecord: function (type) {
                    if (window.collectEvent) {
                        window.collectEvent(type);
                        window.collectEvent('send');
                    }
                },
                inputFocused: function () {
                    this.inputIsFocused = true;
                },
                inputBlured: function () {
                    this.inputIsFocused = false;
                },
                loginOut: function () {
                    location.href = this.logoutUrl + encodeURIComponent(location.href);
                },
                logined: function () {
                    var me = this;
                    // 提问按钮
                    this.getUserCard('', function (r) {
                        if (!window.wenda.userData) {
                            window.wenda.userData = r.user_info;
                        } else {
                            for (var p in r.user_info) {
                                wenda.userData[p] = r.user_info[p];
                            }
                        }
                        starOrderList.$emit('userInfoReady');
                        window.wenda.userData.is_login = 1;
                        if (r.has_privilege) {
                            me.has_privilege = true;
                        } else {
                            me.has_privilege = false;
                        }
                        if (location.href.indexOf('asknow=1') > -1) {
                            me.ask();
                            history.replaceState && history.replaceState({}, null, location.href.replace('asknow=1', ''));
                        }
                        me.$forceUpdate();
                    });
                },
                getUserCard: function (uid, callback) {
                    var data = {
                        t: new Date().getTime()
                    };
                    if (uid) {
                        data.other_uid = uid;
                    }
                    $.Ajax('/wenda/web/user/card/', {
                        type: 'GET',
                        data: data,
                        success: function (e, r) {
                            callback && callback(r);
                        }
                    });
                },
                ask: function () {
                    window.collectEvent && window.collectEvent('question_ask_click');
                    new ask({
                        el: $('<div></div>').appendTo('#modal-layer')[0]
                    });
                },
                getLogin: function (type) {
                    login.getLogin(type);
                },
                showMobileQr: function () {
                    _newMessageBtn && _newMessageBtn.hideLayer();
                    this.showQr = true;
                },
                hiddenMobileQr: function () {
                    this.showQr = false;
                }
            },
            beforeDestroy: function () {
                $('body').off('changePersonInfo', this.changePersonInfo);
            },
            filters: {
                protocal: function (url = '') {
                    return url.replace(/^http(s)?:\/\//g, '//');
                }
            }
        });

    }, {
        "../ask/ask": 40,
        "../login/login": 75,
        "../new-message/new-message-btn": 85,
        "../search-input/search-input": 97,
        "../star_order_list": 117,
        "./new_header.tpl": 58
    }],
    58: [function (require, module, exports) {
        module.exports = "<header id=\"pagelet-midbar\" :class=\"user.is_login == 0 ? 'notlogin header-'+query : 'header-'+query\">\n\t<div class=\"midbar-inner\" data-node=\"midbarInner\">\n\t\t<div class=\"inner clearfix\">\n            <div class=\"suspension-part\">\n                <div class=\"logo-box\">\n                    <a class=\"logo-link\" href=\"/\" data-log=\"Visit_Index|From_logo\" title=\"悟空问答\">\n                        <img class=\"logo\" src=\"//s3.pstatp.com/toutiao/resource/wenda/wenda_web/static/style/image/logo_5df43ca.png\" alt=\"悟空问答\"/>\n                    </a>\n                </div>\n                <div class=\"search-box\" :class=\"{'input-focused': inputIsFocused}\">\n                    <w-search-input :searchWord=\"searchWord\" @inputFocused=\"inputFocused\" @inputBlured=\"inputBlured\"></w-search-input>\n                </div>\n            </div>\n            <a href=\"javascript:;\" class=\"ask\" :class=\"{'input-focused': inputIsFocused}\" data-node=\"ask\"  data-log=\"PopUp_CreateQuestion|From_\" @click=\"ask\">提问</a>\n            <div class=\"nav\" :class=\"{logined:user.is_login == 1}\">\n                <a :class=\"{selected:query === 'index'}\" @click=\"teaRecord('homepage_tab_click')\" href=\"/\" data-log=\"Visit_Index|From_Link\" title=\"首页\">首页</a>\n                <a :class=\"{selected:query === 'invitequest'}\" href=\"/myquest/\" @click=\"teaRecord('myquest_tab_click')\" data-log=\"Visit_QuestionInvited|From_\" title=\"等我来答\">等我来答</a>\n                <a :class=\"{selected:query === 'winner'}\" href=\"/winner/\" @click=\"teaRecord('winner_tab_click')\" data-log=\"Visit_QuestionInvitedMoney|From_\" title=\"答题得红包\">答题得红包</a>\n                <div class=\"new-msg-btn\">\n                    <w-new-message-btn :query=\"query\" v-if=\"user.is_login\"></w-new-message-btn>\n                </div>\n                <div class=\"nav-account\">\n                    <div class=\"nav-account-wrapper\"\n                    :class=\"{dropdown:user.is_login == 1}\" data-node=\"user-account\">\n                        <div v-if=\"user.is_login==0||!user.is_login\" class=\"loginBox\">\n                            <a data-node=\"login\" @click=\"getLogin(0)\" href=\"javascript:;\" class=\"nav-account-user line login\"><span>登录</span></a>\n                            <i class=\"iconfont icon-Details_page_line\"></i>\n                            <a data-node=\"register\" @click=\"getLogin(1)\" href=\"javascript:;\" class=\"nav-account-user line register\"><span>注册</span></a>\n                        </div>\n                        <a v-else href=\"/user/\" target=\"_blank\" class=\"nav-account-user line\" data-log=\"Visit_Profile|From_\"><img class=\"nav-account-user-avatar\" :src=\"user.avatar_url | protocal\" alt=\"\"/></a>\n\n                        <div class=\"dropdown-menu\">\n                            <i class=\"triangle\"></i>\n                            <div><a href=\"/user/\" target=\"_blank\" class=\"layer-item\"><i class=\"iconfont icon-ask_write\"></i>我的问答</a></div>\n                            <div><a @click=\"loginOut\" class=\"layer-item\"><i class=\"iconfont icon-ask_profile_exit\"></i>退&emsp;&emsp;出</a></div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n\t\t</div>\n\t</div>\n</header>\n";

    }, {}],
    59: [function (require, module, exports) {
        var tpl = require('./inform-modal.tpl');
        var login = require('../login/login');
        module.exports = Vue.component('w-inform-modal', {
            template: tpl,
            data: function () {
                return {
                    informList: [],
                    close: true,
                    content: '',
                    qid: '',
                    ansid: '',
                    from: ''
                };
            },
            created: function () {
                // 举报类型
                var informQuestion = [
                    {
                        text: '问题质量差',
                        id: '101',
                        checked: false
                    },
                    {
                        text: '广告',
                        id: '23',
                        checked: false
                    },
                    {
                        text: '重复，旧闻',
                        id: '1',
                        checked: false
                    },
                    {
                        text: '低俗',
                        id: '14',
                        checked: false
                    },
                    {
                        text: '与事实不符',
                        id: '17',
                        checked: false
                    },
                    {
                        text: '错别字',
                        id: '12',
                        checked: false
                    },
                    {
                        text: '格式问题',
                        id: '3',
                        checked: false
                    }
                ];
                var informAnswer = [
                    {
                        text: '回答质量差，答非所问',
                        id: '102',
                        checked: false
                    },
                    {
                        text: '广告',
                        id: '23',
                        checked: false
                    },
                    {
                        text: '重复，旧闻',
                        id: '1',
                        checked: false
                    },
                    {
                        text: '格式问题',
                        id: '3',
                        checked: false
                    },
                    {
                        text: '低俗',
                        id: '14',
                        checked: false
                    },
                    {
                        text: '与事实不符',
                        id: '17',
                        checked: false
                    },
                    {
                        text: '疑似抄袭',
                        id: '18',
                        checked: false
                    },
                ];
                this.informList = this.qid ? informQuestion : informAnswer;
            },
            computed: {
                canConfirm: function () {
                    var chooseItem = this.informList.some(function (item, index) {
                        return item.checked;
                    });
                    var writeContent = this.content.length > 0;
                    return chooseItem || writeContent;
                },
                answerOrQuestion: function () {
                    return this.qid ? '问题' : '回答';
                }
            },
            beforeCreate: function () {
                if ($('#inform-modal-layer').length < 1) {
                    $('<div id="inform-modal-layer"></div>').appendTo('body');
                }
                if (!this.$el) {
                    this.$options.el = $('<div></div>').appendTo('#inform-modal-layer')[0];
                }
            },
            mounted: function () {
                $('body').css('overflow', 'hidden');
                var halfHeight = $(window).height() / 2;
                var top = halfHeight - 240;
                top = top > 0 ? top : 100;
                $('.inform-box').css('top', top);
            },
            methods: {
                closeModal: function () {
                    $(this.$el).remove();
                    $('body').css('overflow', 'auto');
                },
                confirm: function () {
                    if (!this.canConfirm) {
                        return;
                    }
                    if (window.wenda.userData.is_login == 0) {
                        login.getLogin();
                        return false;
                    }
                    // 获得数据，发送请求
                    var data = this.getData();
                    var _this = this;
                    $.ajax('/wenda/web/commit/report/', {
                        type: 'POST',
                        data: data,
                        success: function () {
                            _this.closeModal();
                            $.log.event('InformSuccess', 'From_Inform' + _this.from);
                            var informSuccess = '<div class="inform-success-modal"><div class="inform-seccess">举报成功</div></div>';
                            $(informSuccess).appendTo('body');
                            setTimeout(function () {
                                $('.inform-success-modal').hide();
                            }, 2000);
                        }
                    });
                },
                cancel: function () {
                    this.closeModal();
                },
                getData: function () {
                    var data = {};
                    var report_type = [];
                    for (var i = 0; i < this.informList.length; i++) {
                        this.informList[i].checked && report_type.push(this.informList[i].id);
                    }
                    data.report_type = JSON.stringify(report_type);
                    data.report_message = this.content;
                    data.gid = this.qid ? this.qid : this.ansid;
                    // 1代表问题 2代表答案
                    data.type = this.qid ? '1' : '2';
                    return data;
                }
            }
        });
    }, {"../login/login": 75, "./inform-modal.tpl": 60}],
    60: [function (require, module, exports) {
        module.exports = "<div class=\"w-inform-modal\">\n    <div class=\"inform-box\">\n        <div class=\"title\">\n            举报{{answerOrQuestion}}\n        </div>\n        <div class=\"inform-wrapper\">\n            <div class=\"inform-item-box\" v-for=\"item in informList\">\n                <div class=\"inform-item\" @click=\"item.checked = !item.checked\">\n                    <span>{{item.text}}<span>\n                    <i v-if=\"!item.checked\" class=\"circle\"></i>\n                    <i v-else class=\"iconfont icon-select selected\"></i>\n                </div>\n            </div>\n        </div>\n        <div class=\"inform-content\">\n            <div class=\"others-title\" @click=\"close = !close\">\n                <span>其他问题，我要吐槽</span>\n                <i class=\"iconfont icon-icon_top\" :class=\"{iconDown: close}\"></i>\n            </div>\n            <div class=\"others-content\" v-if=\"!close\">\n                <textarea placeholder=\"请具体说明问题，我们将尽快回复～ \" v-model=\"content\" onfocus=\"this.placeholder='' \"></textarea>\n            </div>\n        </div>\n        <div class=\"foot\">\n            <div class=\"confirm\" :class=\"{'canConfirm': canConfirm, 'cannotConfirm': !canConfirm}\" @click=\"confirm\">\n                举报\n            </div>\n            <div class=\"cancel\" @click=\"cancel\">\n                取消\n            </div>\n        </div>\n    </div>\n    \n</div>";

    }, {}],
    61: [function (require, module, exports) {
        module.exports = {
            template: require('./invite-sharegroup.tpl'),
            props: ['shareData', 'onlyinvite', 'qid'],
            data: function () {
                return {
                    activeType: 'money',
                    show: false
                };
            },
            mounted: function () {
                this.createQr(this.activeType);
            },
            methods: {
                createQr: function (type) {
                    var _this = this;
                    if (type == 'money') {
                        var urlPromise = this.getShareUrl();
                        urlPromise.then(function (data) {
                            _this.drawQr(type, data);
                        });
                    }
                    if (type == 'wx') {
                        this.drawQr(type, addParams(location.href, {
                            from: 'pcshare',
                            platform: 'weixin'
                        }));
                    }
                },
                drawQr: function (type, url) {
                    $(this.$el).find('.qr-' + type).qrcode({
                        render: 'canvas',
                        ecLevel: 'L',
                        text: url,
                        fill: '#000000',
                        size: 112
                    });
                },
                getShareUrl: function () {
                    var defer = $.Deferred();
                    var shareurl = 'http://share.wukongwenda.cn/share/profit/';
                    $.Ajax({
                        url: '/wenda/web/activity/profit/get_share_url/',
                        type: 'get',
                        dataType: 'json',
                        data: {
                            qid: this.qid
                        },
                        success: function (res) {
                            if (res.err_no == 0) {
                                shareurl += res.token;
                            } else {
                                shareurl = location.href;
                            }
                            defer.resolve(shareurl);
                        }
                    });
                    return defer.promise();
                },
                shareType: function (type) {
                    if (type == this.activeType) {
                        return;
                    }
                    if (type == 'money' || type == 'wx') {
                        this.activeType = type;
                        this.$nextTick(function () {
                            this.createQr(type);
                        });
                    }
                    if (type == 'weibo') {
                        this.shareWeibo();
                    }
                    if (type == 'qzone') {
                        this.shareQzone();
                    }
                },
                shareWeibo: function () {
                    shareToWeibo(this.shareData);
                },
                shareQzone: function () {
                    shareToQzone(this.shareData);
                },
                showShareBox: function () {
                    this.show = true;
                },
                hideShareBox: function () {
                    this.show = false;
                }
            }
        };

        function addParams(url, params) {
            var paramStr = '';
            for (var key in params) {
                paramStr += key + '=' + params[key] + '&';
            }
            paramStr = paramStr.substring(0, paramStr.length - 1);
            if (url.indexOf('?') > -1) {
                return url + '&' + paramStr;
            } else {
                return url + '?' + paramStr;
            }
        }

        function shareToWeibo(shareData) {
            var url = 'http://service.weibo.com/share/share.php?';
            url += 'url=' + encodeURIComponent(addParams(shareData['web-url'], {
                from: 'pcshare',
                platform: 'weibo'
            }));
            url += '&appkey=2504490989';
            if (shareData.image.trim() !== '') {
                url += '&pic=' + encodeURIComponent(shareData.image);
            }
            url += '&title=' + encodeURIComponent(shareData.title);
            url += '&searchPic=true';
            var login_url = 'https://passport.weibo.cn/signin/login?';
            window.open(url);
        }

        function shareToQzone(shareData) {
            var url = 'http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?';
            url += 'url=' + encodeURIComponent(addParams(shareData['web-url'], {
                from: 'pcshare',
                platform: 'Qzone'
            }));
            // url += "&appkey=2504490989";
            url += '&pics=' + encodeURIComponent(shareData.image);
            url += '&title=' + encodeURIComponent(shareData.title);
            url += '&summary=' + encodeURIComponent(shareData.summary || ' ');
            window.open(url);
        }
    }, {"./invite-sharegroup.tpl": 62}],
    62: [function (require, module, exports) {
        module.exports = "<div class=\"w-invite-sharegroup\"\n    @mouseover=\"showShareBox\"\n    @mouseout=\"hideShareBox\"\n>\n    <div class=\"share-to-profit\" >\n        <i class=\"iconfont icon-wallet_detailpage\"></i>\n        <span class=\"text\">分享有钱</span>\n    </div>\n    <div class=\"share-box\">\n        <div class=\"share-node\" v-show=\"show\">\n            <i class=\"trangle\"></i>\n            <div class=\"share-money\"\n                :class=\"{'active': activeType == 'money', 'sole': onlyinvite}\"\n                @click=\"shareType('money')\"    \n            >\n                <template v-if=\"activeType == 'money'\">\n                    <div class=\"qr-money\"></div>\n                    <div class=\"desc\">\n                        扫码分享给好友答题<br>各得最高<span class=\"amount\">100</span>元现金\n                    </div>\n                </template>\n                <div class=\"share-item\" v-else>\n                    <i class=\"iconfont icon-wallet_QRcode\"></i>\n                    <span class=\"desc\">分享有钱</span>\n                </div>\n            </div>\n            <template v-if=\"!onlyinvite\">\n                <div class=\"share-wx\" \n                    :class=\"{active: activeType == 'wx'}\"\n                    @click=\"shareType('wx')\"\n                >\n                    <template v-if=\"activeType == 'wx'\">\n                        <div class=\"qr-wx\"></div>\n                        <div class=\"desc\">微信</div>\n                    </template>\n                    <div class=\"share-item\" v-else>\n                        <i class=\"iconfont icon-wechat_share\"></i>\n                        <span class=\"desc\">微信</span>\n                    </div>\n                </div>\n                <div class=\"share-weibo share-item\"  @click=\"shareType('weibo')\" >\n                    <i class=\"iconfont icon-weibo_share\"></i>\n                    <span class=\"desc\">新浪微博</span>\n                </div>\n                <div class=\"share-qzone share-item\" @click=\"shareType('qzone')\">\n                    <i class=\"iconfont icon-qzone_share\"></i>\n                    <span class=\"desc\">QQ空间</span>\n                </div>\n            </template>\n        </div>\n    </div>\n\n</div>";

    }, {}],
    63: [function (require, module, exports) {
        var tpl = require('./invite-btn.tpl');
        var toast = require('../../../ui/toast/toast.js');


        module.exports = Vue.component('w-invite-answer-btn', {
            template: tpl,
            data: function () {
                return {};
            },
            props: ['data', 'preCheck'],
            mounted: function () {
                toast();
            },
            methods: {
                click: function () {
                    if (this.data.invite_status !== 1) {
                        return false;
                    }
                    if (this.preCheck && !this.preCheck()) {
                        $('body').toast({
                            status: 'fail',
                            text: '最多可邀请 50 人'
                        });
                    } else {
                        this.invite();
                    }
                },
                invite: function () {
                    $.Ajax('/wenda/web/commit/postinvite/?to_uid=' + this.data.user_id + '&qid=' + this.data.qid, {
                        type: 'POST',
                        data: {
                            // to_uid: this.model.user_id,
                            // qid: this.model.qid
                        },
                        success: function () {
                            this.setInvited();
                        }.bind(this)
                    });
                },
                setInvited: function () {
                    this.data.invite_status = 0;
                    this.$emit('question.user.invited', this.data.user_id);
                }
            }
        });

    }, {"../../../ui/toast/toast.js": 18, "./invite-btn.tpl": 64}],
    64: [function (require, module, exports) {
        module.exports = "<a class=\"w-invite-btn\" :class=\"{invited:data.invite_status !== 1}\" href=\"javascript:\" data-log=\"Send_Invite|From_\" @click=\"click\">\n    <i class=\"iconfont icon-ask_add_friend\"></i>\n    <i class=\"iconfont icon-details_attention_icon\"></i>\n    <span>邀请</span>\n</a>";

    }, {}],
    65: [function (require, module, exports) {
        var tpl = require('./invite-answer-single.tpl');
        var inviteBtn = require('../invite-answer-btn/invite-btn');


        module.exports = Vue.component('w-invite-answer-single', {
            template: tpl,
            props: ['data', 'preCheck'],
            computed: {
                showV: function () {
                    var authInfo = this.data.user_auth_info;
                    var authType;
                    if (authInfo) {
                        try {
                            authType = JSON.parse(authInfo).auth_type;
                        } catch (e) {
                        }
                    }
                    return authType && authType != 3;
                }
            }
        });
    }, {"../invite-answer-btn/invite-btn": 63, "./invite-answer-single.tpl": 66}],
    66: [function (require, module, exports) {
        module.exports = "<div class=\"w-invite-answer-single\">\n    <a class=\"avatar\" :href=\"'/user/?uid=' + data.user_id\" target=\"_blank\" data-log=\"Visit_Profile|From_ProfilePic\">\n        <img :src=\"data.avatar_url\" />\n    </a>\n    <w-invite-answer-btn :data=\"data\" :preCheck=\"preCheck\"></w-invite-answer-btn>\n    <div class=\"intro\" :class=\"{nointro:!data.user_intro}\">\n        <a class=\"link\" target=\"_blank\" :href=\"'/user/?uid=' + data.user_id\" data-log=\"Visit_Profile|From_ProfileLink\">{{ data.uname }}<i class=\"iconfont icon-all_newv\" style=\"font-size: 12px;color: #ffc41c;\" v-if=\"showV\"></i></a>\n        <p v-if=\"data.user_intro\">\n            {{ data.user_intro }}\n        </p>\n    </div>\n</div>";

    }, {}],
    67: [function (require, module, exports) {
        var tpl = require('./invite-answer.tpl');
        var inviteSingle = require('../invite-answer-single/invite-answer-single');

        module.exports = Vue.component('w-invite-answer', {
            template: tpl,
            data: function () {
                return {
                    users: [],
                    total: 50,
                    invited: 0,
                    inited: false
                };
            },
            props: ['qid'],
            computed: {
                inviteStatus: function () {
                    if (!this.invited) {
                        return '立即邀请用户，更快获得回答';
                    } else {
                        return '你已邀请 <span class="invited">' + this.invited + '</span>人，还可以邀请 <span class="remain">' + (this.total - this.invited) + '</span>人';
                    }
                }
            },
            created: function () {
                this.$on('question.user.invited', function () {
                    this.invited++;
                }.bind(this));
                this.preCheck = this.preCheck.bind(this);
            },
            methods: {
                getList: function () {
                    $.Ajax('/wenda/web/invite/userlist/', {
                        type: 'GET',
                        data: {
                            qid: this.qid,
                            rn: new Date().getTime()
                        },
                        success: function (data, r) {
                            var _this = this;
                            this.invited = r.invite_count;

                            _.each(r.invite_user_list, function (user) {
                                user.qid = _this.qid;
                                _this.users.push(user);
                            });
                        }.bind(this)
                    });
                },
                show: function () {
                    if (!this.inited) {
                        this.inited = true;
                        this.getList();
                    }
                },
                preCheck: function () {
                    if (this.invited >= this.total) {
                        return false;
                    } else {
                        return true;
                    }
                }
            }
        });

    }, {"../invite-answer-single/invite-answer-single": 65, "./invite-answer.tpl": 68}],
    68: [function (require, module, exports) {
        module.exports = "<div class=\"w-invite-answer\" data-log-from=\"InviteAnswer\">\n    <div class=\"invite-status\" v-html=\"inviteStatus\"></div>\n    <div class=\"invite-list\">\n        <w-invite-answer-single v-for=\"user in users\" :data=\"user\" :preCheck=\"preCheck\"></w-invite-answer-single>\n    </div>\n</div>";

    }, {}],
    69: [function (require, module, exports) {
        module.exports = Vue.extend({
            template: require('./leave-modal.tpl'),
            data: function () {
                return {
                    doIt: undefined
                }
            },
            beforeCreate: function () {
                if ($('#modal-leave').length < 1) {
                    $('<div id="modal-leave"></div>').appendTo('body');
                }
                if (!this.$el) {
                    this.$options.el = $('<div></div>').appendTo('#modal-leave')[0];
                }
            },
            methods: {
                close: function () {
                    $(this.$el).hide();
                },
                submit: function () {
                    this.close();
                    this.doIt && this.doIt();
                }
            }
        })
    }, {"./leave-modal.tpl": 70}],
    70: [function (require, module, exports) {
        module.exports = "<div class=\"leave-wrapper\">\n    <div class=\"leave-modal\">\n        <a href=\"javascript:;\" class=\"iconfont icon-ask_close manuscript-modal-close\" @click=\"close\"></a>\n        <div class=\"manuscript-modal-title\">答案未提交</div>\n        <div class=\"del\">答案未提交，确定要离开吗？</div>\n        <div class=\"modal-foot\">\n            <a href=\"javascript:;\" @click=\"close\">\n                <input type=\"button\" value=\"取消\" class=\"cancel\"/>\n            </a>\n            <a href=\"javascript:;\" @click=\"submit\">\n                <input type=\"button\" value=\" 确定\" class=\"submit\"/>\n            </a>\n        </div>\n    </div>\n</div>";

    }, {}],
    71: [function (require, module, exports) {
        /**
         * created by dudapeng on 16.11.16
         * 点赞组件
         */

        var tpl = require('./like.tpl');
        var login = require('../login/login');

        module.exports = Vue.component('w-like', {
            template: tpl,
            data: function () {
                return {
                    // answer:{},
                    animating: false,
                    addOne: false
                };
            },
            props: ['answer'],
            methods: {
                like: function () {
                    if (window.wenda.userData.is_login == 0) {
                        login.getLogin();
                        return false;
                    }
                    if (this.answer.is_digg || this.answer.is_bury) {
                        return false;
                    }
                    var url = '/wenda/web/commit/digg/';
                    $.Ajax(url, {
                        type: 'POST',
                        data: {
                            ansid: this.answer.ansid
                        },
                        success: function (data) {
                            // this.is_dgg = true;
                            this.answer.is_bury = false;
                            // this.digg_count++;
                            this.liked();
                        }.bind(this)
                    });
                },
                liked: function () {
                    var _this = this;
                    this.animating = true;
                    setTimeout(function () {
                        _this.addOne = true;
                        _this.answer.digg_count++;
                        _this.answer.is_digg = true;
                    }, 75);
                    setTimeout(function () {
                        _this.animating = false;
                        _this.addOne = false;
                    }, 550);
                }
            }
        });

    }, {"../login/login": 75, "./like.tpl": 72}],
    72: [function (require, module, exports) {
        module.exports = "<a class=\"w-like\" href=\"javascript:\" data-log=\"Like|From_\" :class=\"{active:answer.is_digg,animate:animating}\" @click=\"like\">\n    <span class=\"iconfont icon-add_all_dynamic add-one\" v-if=\"addOne\"></span>\n    <i class=\"iconfont icon-digg_clicked\"></i>\n    <span class=\"like-num\">{{answer.digg_count}}</span>\n    <span>赞</span>\n</a>";

    }, {}],
    73: [function (require, module, exports) {
        /**
         * created by dudapeng on 16.11.16
         * 踩赞组件
         */

        var tpl = require('./unlike.tpl');
        var login = require('../login/login');

        module.exports = Vue.component('w-unlike', {
            template: tpl,
            data: function () {
                return {
                    // answer: {}
                };
            },
            props: ['answer'],
            methods: {
                unlike: function () {
                    if (window.wenda.userData.is_login == 0) {
                        login.getLogin();
                        return false;
                    }
                    if (this.answer.is_digg || this.answer.is_bury) {
                        return false;
                    }
                    var url = '/wenda/web/commit/bury/';
                    $.Ajax(url, {
                        type: 'POST',
                        data: {
                            ansid: this.answer.ansid
                        },
                        success: function (data) {
                            this.answer.is_bury = true;
                            this.answer.is_digg = false;
                        }.bind(this)
                    });
                }
            }
        });
    }, {"../login/login": 75, "./unlike.tpl": 74}],
    74: [function (require, module, exports) {
        module.exports = "<a class=\"w-unlike\" href=\"javascript:\" data-log=\"Downvote|From_\" :class=\"{active:answer.is_bury}\" @click=\"unlike\">\n    <i class=\"iconfont icon-ask_stamp\"></i>\n    <span class=\"unlike-count\"></span>\n    <span>踩</span>\n</a>";

    }, {}],
    75: [function (require, module, exports) {
        var login = Vue.extend({
            data: function () {
                return {
                    waitingForLogin: false
                };
            },
            created: function () {
                if (typeof window !== 'undefined') {
                    setInterval(this.checkLoginStatus.bind(this), 1000);
                }
            },
            methods: {
                getLogin: function (type) {
                    $.cookie('wenda_login_status', '0', {path: '/', domain: '.wukong.com'});
                    this.checkLoginStatus();
                    var url = 'https://sso.toutiao.com/login/?service=' + encodeURIComponent('https://www.wukong.com/wenda/welcome/');
                    if (type != null) {
                        url += '#type=' + type;
                    }
                    window.open(url);
                },
                checkLoginStatus: function () {
                    var status = $.cookie('wenda_login_status');
                    if (status == '1') {
                        if (this.waitingForLogin === true) {
                            $('body').trigger('login');
                            this.$emit('login');
                        }
                        this.waitingForLogin = false;
                    } else {
                        this.waitingForLogin = true;
                    }
                }
            }
        });

        module.exports = new login();
    }, {}],
    76: [function (require, module, exports) {
        module.exports = function (data) {
            if (data.is_audit_delete) {
                data.display_status_word = '答案审核未通过';
            }
            data.user = data.user || {};
            return data;
        };
    }, {}],
    77: [function (require, module, exports) {
        var model_question = require('./question');
        var model_answer = require('./answer');
        module.exports = function (data) {
            var question = data.question;
            var answer = data.answer;
            var ans_list = data.ans_list;
            answer = answer || (ans_list && ans_list[0]);
            question.hasAnswer = !!answer;
            question.show_answer = data.show_answer;
            if (answer) {
                question.ansid = answer.ansid;
                answer.question = question;
            } else {
                question.ansid = '';
            }
            data.question = new model_question(question || {});
            data.answer = new model_answer(answer || {});
            if (data.is_card) {
                data.type = 'inviteAnswer';
            } else {
                data.type = 'normal';
            }

            return data;
        };
    }, {"./answer": 76, "./question": 78}],
    78: [function (require, module, exports) {
        module.exports = function (data) {
            var display_status_word = '';
            switch (data.display_status) {
                case 1:
                    display_status_word = '问题审核中';
                    break;
                case 2:
                    display_status_word = '问题不符合规范,建议<a class="question-edit" href="javascript:">修改</a>';
                    break;
                case 3:
                    display_status_word = '问题审核未通过';
                    break;
                default:
                    break;
            }
            data.display_status_word = display_status_word;

            return data;
        };
    }, {}],
    79: [function (require, module, exports) {

        module.exports = Vue.extend({
            template: require('./new-confirm.tpl'),
            data: function () {
                return {
                    title: '',
                    content: '',
                    cancelText: '',
                    doItText: '',
                    cancelOperation: undefined,
                    doItOperation: undefined,
                    className: ''
                };
            },
            beforeCreate: function () {
                if ($('#new-confirm-modal-layer').length < 1) {
                    $('<div id="new-confirm-modal-layer"></div>').appendTo('body');
                }
                if (!this.$el) {
                    this.$options.el = $('<div></div>').appendTo('#new-confirm-modal-layer')[0];
                }
            },
            methods: {
                cancel: function () {
                    this.cancelOperation && this.cancelOperation();
                    this.initialCancel();
                },
                initialCancel: function () {
                    $(this.$el).hide();
                    this.$destroy();
                },
                doIt: function () {
                    var _this = this;
                    this.initialCancel();
                    setTimeout(function () {
                        _this.doItOperation && _this.doItOperation();
                    }, 20);
                }
            }
        });
    }, {"./new-confirm.tpl": 80}],
    80: [function (require, module, exports) {
        module.exports = "<div class=\"w-newConfirm\" :class=\"className\">\n    <div class=\"new-confirm-box\">\n        <i class=\"iconfont icon-close close\" @click=\"initialCancel\"></i>\n        <div class=\"new-confirm-title\">{{title}}</div>\n        <div class=\"new-confirm-content\">{{content}}</div>\n        <div class=\"new-confirm-foot\">\n            <a class=\"btn-operation\" @click=\"cancel\">{{cancelText}}</a>\n            <a class=\"btn-operation doIt\" @click=\"doIt\">{{doItText}}</a>\n        </div>\n    </div>\n</div>";

    }, {}],
    81: [function (require, module, exports) {
        module.exports = {
            name: 'w-extra-message-layer',
            template: require('./extra-message-layer.tpl'),
            props: ['data'],
            data: function () {
                return {
                    singleline: false
                };
            },
            computed: {
                noticeImg: function () {
                    return this.data.image_url || '';
                },
                noticeText: function () {
                    return this.data.text || '';
                }
            },
            mounted: function () {
                var noticeHeight = $('.notice-text .text', $(this.$el)).height();
                if (noticeHeight == 20) {
                    this.singleline = true;
                }
            },
            methods: {
                close: function () {
                    this.$emit('close_strong_msg');
                    $.localStorage.setItem('strongMessageFlag', 0);
                    $.ajax({
                        url: '/wenda/web/msg/strong/click/',
                        type: 'post',
                        data: {
                            msg_no: 1
                        },
                        success: function () {

                        }
                    });
                }
            }
        };
    }, {"./extra-message-layer.tpl": 82}],
    82: [function (require, module, exports) {
        module.exports = "<div class=\"w-extra-message-layer\">\n    <!-- <div class=\"inner\"></div> -->\n    <i class=\"triangle\"></i>\n    <i class=\"iconfont icon-dislike close-icon\" @click=\"close\"></i>\n    <div class=\"wrapper\" :class=\"{'has-pic': noticeImg.length > 0, 'singleline': singleline}\">\n        <div class=\"pic\" v-if=\"noticeImg.length > 0\">\n            <img :src=\"noticeImg\" alt=\"\">\n        </div>\n        <a :href=\"data.url\" @click=\"close\" target=\"_blank\" class=\"notice-text\" id=\"extra-msg-notice-text\">\n            <div class=\"notice-inner\">\n                <span class=\"text\">{{noticeText}}</span>\n            </div>\n        </a>\n    </div>\n</div>";

    }, {}],
    83: [function (require, module, exports) {
        module.exports = Vue.component('w-new-layer', {
            template: require('./new-layer.tpl'),
            data: function () {
                return {
                    item: ['/notice/', '/notice/#invite', '/notice/#digg', '/notice/#comment', '/notice/#follow'],
                    noticeCount: 0,
                    inviteCount: 0,
                    diggCount: 0,
                    commentCount: 0,
                    followCount: 0
                };
            },
            props: ['isNotice'],
            mounted: function () {
                // 初次数据从storage里面取值
                this.getCountFromStorge();

                // 监听其他页面对storge的改变
                if (!this.isNotice) {
                    $(window).on('storage', function (e) {
                        if (e.key == 'newMessageCount') {
                            this.getCountFromStorge();
                        }
                    }.bind(this));
                }

                // 本页面内数据更新靠getCountFromStorge事件
                $('body').on('getCountFromStorge', this.getCountFromStorge);
            },
            methods: {
                click: function (index) {
                    window.open(this.item[index]);
                },
                getCountFromStorge: function () {
                    var manyCountArr = (localStorage.getItem('newMessageCount') || '').split('-');
                    this.noticeCount = manyCountArr[0] * 1 || 0;
                    this.inviteCount = manyCountArr[1] * 1 || 0;
                    this.diggCount = manyCountArr[2] * 1 || 0;
                    this.commentCount = manyCountArr[3] * 1 || 0;
                    this.followCount = manyCountArr[4] * 1 || 0;
                },
                getFinalCount: function (count) {
                    return count > 99 ? 99 : count;
                }
            }
        });
    }, {"./new-layer.tpl": 84}],
    84: [function (require, module, exports) {
        module.exports = "<div class=\"w-new-layer layer-wrapper\">\n    <i class=\"triangle\"></i>\n    <a class=\"notice\" @click=\"click(0)\">\n        <span>通知</span>\n        <span class=\"circle\" v-if=\"noticeCount > 0\"></span>\n    </a>\n    <a class=\"invite\" @click=\"click(1)\">\n        <span>邀请</span>\n        <span class=\"number\" v-if=\"inviteCount > 0\">{{getFinalCount(inviteCount)}}</span>\n    </a>\n    <a class=\"digg\" @click=\"click(2)\">\n        <span>点赞</span>\n        <span class=\"number\" v-if=\"diggCount > 0\">{{getFinalCount(diggCount)}}</span>\n    </a>\n    <a class=\"comment\" @click=\"click(3)\">\n        <span>评论</span>\n        <span class=\"number\" v-if=\"commentCount > 0\">{{getFinalCount(commentCount)}}</span>\n    </a>\n    <a class=\"follow\" @click=\"click(4)\">\n        <span>关注</span>\n        <span class=\"number\" v-if=\"followCount > 0\">{{getFinalCount(followCount)}}</span>\n    </a>\n</div>";

    }, {}],
    85: [function (require, module, exports) {
        var tpl = require('./new-message-btn.tpl');
        require('./new-layer/new-layer');
        var extraMessageLayer = require('./extra-message/extra-message-layer');

        module.exports = Vue.component('w-new-message-btn', {
            template: tpl,
            components: {
                'w-extra-message-layer': extraMessageLayer
            },
            data: function () {
                return {
                    showDot: false,
                    totalCount: 0,
                    showStrongMsg: false,
                    strongMsg: {},
                    showListMsg: true
                };
            },
            props: ['query'],
            computed: {
                isNotice: function () {
                    return this.query == 'notice';
                }
            },
            created: function () {
                var _this = this;
                this.urlRoot = '/wenda/web/';
                this.$on('close_strong_msg', function () {
                    this.showStrongMsg = false;
                    setTimeout(function () {
                        _this.showListMsg = true;
                    }, 100);
                });
            },
            mounted: function () {
                var _this = this;

                // 初次数据从storage里面取值
                this.getCountFromStorge();

                // 监听其他页面对storage的改变
                if (!this.isNotice) {
                    this.loadNewNum();
                    $(window).on('storage', function (e) {
                        switch (e.key) {
                            case 'newMessageCount':
                                _this.getCountFromStorge();
                                break;
                            case 'strongMessageFlag':
                                var flag = localStorage.getItem('strongMessageFlag') == '0' ? false : true;
                                _this.showStrongMsg = flag;
                                _this.showListMsg = !flag;
                                break;
                        }
                    });
                }

                $('body').on('getCountFromStorge', _this.getCountFromStorge);
                setInterval(this.loadNewNum.bind(this), 60 * 1000);
            },
            methods: {
                getCountFromStorge: function () {
                    var _this = this;
                    var oldCountArr = (localStorage.getItem('newMessageCount') || '').split('-');
                    _this.totalCount = oldCountArr.reduce(function (pre, value, index) {
                        if (index == 0) {
                            _this.showDot = value || 0;
                            value = 0;
                        }
                        // 转换成数字
                        return pre + value * 1;
                    }, 0) || 0;
                },
                isLogin: function () {
                    if (this.$store) {
                        return this.$store.state.userData.is_login;
                    } else {
                        return wenda.userData.is_login;
                    }
                },
                loadNewNum: function (type) {
                    if (this.isLogin() == 0) {
                        return;
                    }

                    $.ajax(this.urlRoot + 'msg/count/', {
                        type: 'GET',
                        dataType: 'json',
                        data: {
                            rn: new Date().getTime()
                        },
                        success: function (res) {
                            if (res.err_no == 0) {
                                var _this = this;
                                var newMessageCount = [0, 0, 0, 0, 0]; // notice，invite, digg，comment，follow
                                res.data.count_list.map(function (item, idx) {
                                    switch (item.count_type) {
                                        // 是否展示首页红点
                                        case 0:
                                            break;

                                        // 评论
                                        case 1:
                                            if (item.show_type == 1) {
                                                newMessageCount[3] = item.count;
                                            }
                                            break;

                                        // 点赞
                                        case 2:
                                            if (item.show_type == 1) {
                                                newMessageCount[2] = item.count;
                                            }
                                            break;

                                        // 通知
                                        case 3:
                                            if (item.show_type == 1) {
                                                newMessageCount[0] = item.count;
                                            }
                                            break;

                                        // 邀请
                                        case 4:
                                            if (item.show_type == 1) {
                                                newMessageCount[1] = item.count;
                                            }
                                            break;

                                        // 关注
                                        case 5:
                                            if (item.show_type == 1) {
                                                newMessageCount[4] = item.count;
                                            }
                                            break;
                                    }
                                });
                                if (res.strong_msg_data && res.strong_msg_data.text.length > 0) {
                                    _this.showStrongMsg = true;
                                    _this.showListMsg = false;
                                    _this.strongMsg = res.strong_msg_data;
                                    $.localStorage.setItem('strongMessageFlag', res.strong_msg_data.text.length);
                                }
                                var now = new Date().getTime();
                                var lastSetTime = localStorage.getItem('lastSetTime');
                                var lastCount = localStorage.getItem('newMessageCount');
                                var newCount = newMessageCount.join('-');
                                if (now - lastSetTime > 1000 * 60 && lastCount != newCount) {
                                    $.localStorage.setItem('newMessageCount', newCount);
                                    $.localStorage.setItem('lastSetTime', now);
                                }
                                $('body').trigger('getCountFromStorge');
                            }
                        }.bind(this)
                    });
                },
                click: function () {
                    if (window.collectEvent) {
                        window.collectEvent('notice_tab_click');
                        window.collectEvent('send');
                    }
                    window.open('/notice/');
                },
                getTotoalCount: function () {
                    return this.totalCount > 99 ? 99 : this.totalCount;
                }
            }
        });

    }, {"./extra-message/extra-message-layer": 81, "./new-layer/new-layer": 83, "./new-message-btn.tpl": 86}],
    86: [function (require, module, exports) {
        module.exports = "<span class=\"w-new-msg-btn\" :class=\"{selected:isNotice}\">\n    <span @click=\"click\" >消息</span><i v-if=\"totalCount == 0 && showDot > 0\" class=\"w-new-msg-btn-dot\"></i><span v-if=\"totalCount > 0\" class=\"total-number\">{{getTotoalCount()}}</span>\n   <w-new-layer :isNotice=\"isNotice\" v-show=\"showListMsg\"></w-new-layer>\n   <w-extra-message-layer v-if=\"showStrongMsg\" :data=\"strongMsg\"></w-extra-message-layer>\n</span>";

    }, {}],
    87: [function (require, module, exports) {
        var tpl = require('./outside-link-editor.tpl');

        module.exports = Vue.extend({
            template: tpl,
            data: function () {
                return {
                    step: 2,
                    tip: '',
                    url: '',
                    placeholder: '',
                    committing: false
                };
            },
            computed: {},
            beforeCreate: function () {
                this.$options.el = $('<div></div>').appendTo('#modal-outside-link-layer')[0];
            },
            beforeMount: function () {
                $('#modal-outside-link-layer').show();
                $('body').css('overflow', 'hidden');
                this.urlChanged = false;
            },
            methods: {
                nextStep: function () {
                    this.step = 2;
                },
                commit: function () {
                    if (this.urlChanged) {
                        if (this.committing) {
                            return;
                        }
                        if (this.url == '') {
                            this.tip = '请输入扩展链接';
                            return;
                        }
                        this.committing = true;
                        // if (!/^http:\/\/|https:\/\/.*/.test(this.url)) {
                        //     this.tip = '您的链接格式不正确，请检查是否缺少http:// 或https://';
                        //     return;
                        // }
                        var url = /^http:\/\/|https:\/\/.*/.test(this.url) ? this.url : 'http://' + this.url;
                        $.ajax({
                            url: '/wenda/icp/check/',
                            type: 'POST',
                            dataType: 'json',
                            data: {
                                url: url
                            },
                            success: function (data) {
                                if (data.ipc_check == 1) {
                                    this.$emit('outsideLinkCommit', url);
                                    this.close();
                                    $('body').toast({
                                        status: 'success',
                                        text: '已添加，发布后可见'
                                    });
                                } else {
                                    this.tip = '域名未接入ICP备案，请重试';
                                }
                                this.committing = false;
                            }.bind(this),
                            error: function () {
                                this.committing = false;
                            }.bind(this)
                        });
                    } else {
                        this.close();
                    }
                },
                close: function () {
                    // 关闭浮层
                    $('#modal-outside-link-layer').hide().html('');
                    // 禁止背景的滚动
                    $('body').css('overflow', 'auto');
                    // this.$destroy();
                },
                cancle: function () {
                    this.$emit('outsideLinkCancle');
                    this.close();
                },
                textChanged: function () {
                    this.urlChanged = true;
                }
            }
        });


    }, {"./outside-link-editor.tpl": 88}],
    88: [function (require, module, exports) {
        module.exports = "<div class=\"outside-link-editor\">\n    <div class=\"title\">\n        <i class=\"iconfont icon-dislike_icon_new\" @click=\"close\"></i>\n    </div>\n    <div class=\"\"main-content>\n        <div class=\"step1\" v-if=\"step==1\">\n            <h3>扩展链接说明</h3>\n            <ul>\n                <li>1.引导用户跳转到头条号文章、活动H5、企业官方网站等。</li>\n                <li>2.仅向部分优质作者开放，违反法律法规会被封禁。</li>\n            </ul>\n        </div>\n        <div class=\"step2\" v-if=\"step==2\">\n            <h3>添加扩展链接</h3>\n            <input type=\"text\" v-model=\"url\" :placeholder=\"placeholder?placeholder:'请输入链接'\" @change=\"textChanged\">\n        </div>\n        <div class=\"step3\" v-if=\"step==3\">\n            <h3>扩展链接</h3>\n            <input type=\"text\" v-model=\"url\" :placeholder=\"placeholder?placeholder:'请输入链接'\" @change=\"textChanged\">\n        </div>\n    </div>\n    <div class=\"tip\">{{tip}}</div>\n    <div class=\"btn-container\">\n        <input type=\"button\" value=\"下一步\" @click=\"nextStep\" v-if=\"step==1\" class=\"next\">\n        <input type=\"button\" value=\"不想添加了\" @click=\"cancle\" v-if=\"step==3\" class=\"cancle\">\n        <input type=\"button\" value=\"确认\" @click=\"commit\" v-if=\"step==2||step==3\" class=\"confirm\">\n    </div>\n</div>";

    }, {}],
    89: [function (require, module, exports) {
        var tpl = require('./btn.tpl');

        module.exports = Vue.component('w-question-nointerest', {
            template: tpl,
            data: function () {
                return {};
            },
            props: ['question'],
            methods: {
                doit: function () {

                    var url = '/wenda/web/commit/dislike/';

                    $.Ajax(url, {
                        type: 'POST',
                        data: {
                            id_type: '1',
                            group_id: this.question.qid
                        },
                        success: function () {
                            this.$emit('question.nointerest', {
                                qid: this.question.qid
                            });
                        }.bind(this)
                    });
                }
            }
        });
    }, {"./btn.tpl": 90}],
    90: [function (require, module, exports) {
        module.exports = "<a class=\"w-question-nointerest-btn\" href=\"javascript:\" @click=\"doit\"><i class=\"iconfont icon-ask_close\"></i></a>";

    }, {}],
    91: [function (require, module, exports) {
        (function (global) {
            /**
             * created by dudapeng on 16.11.15
             * feed回答的单个view
             */

            var tpl = require('./answer-item-v3.tpl');
            var wLike = require('../like/like');
            var wUnlike = require('../like/unlike');
            var wAnswerNointerestBtn = require('../answer-nointerest/btn');
            var shareGroup = require('../sharegroup/sharegroup');

            var detail = require('../detail/answer_detail');
            var setting = require('../answer/setting/setting');
            var answer_modal = require('../answer/answer');
            var login = require('../login/login');
            var toast = require('../../ui/toast/toast.js');
            var util = require('../util');

            var model_feed_question = require('../model/feed_question');

            const qingyunStatusMapping = {
                3: '自荐审核中',
                4: '自荐已获奖',
                5: '自荐未获奖',
                6: '不符合自荐要求'
            };
            const qingyunStyleMapping = {
                3: 'auditing',
                4: 'succeed',
                5: 'failed',
                6: 'rejected'
            };

            toast();
            module.exports = Vue.component('w-answer-item', {
                template: tpl,
                data: function () {
                    return {
                        // answer:{},
                        isHover: false,
                        answerType: 0, // 0:没有图片和视频，1:有图片，2:有视频
                        videoData: null,
                        show_qingyun_status: false,
                        qingyun_status_desc: '',
                        qingyun_status_style: ''
                    };
                },
                props: ['answer', 'origin_source'],
                computed: {
                    isMyAnswer: function () {
                        return this.$store ? this.$store.state.userData.user_id == this.answer.user.user_id : false;
                    },
                    image_url: function () {
                        var image_url = this.answer.content_abstract ? this.answer.content_abstract.image_url.replace('list', 'list/190x124') : '';
                        if (/(p1|p2|p3).pstatp.com/.test(image_url)) {
                            image_url = image_url.replace('http://', '//');
                        }
                        return image_url;
                    },
                    content_abstract: function () {
                        if (!this.answer.content_abstract) {
                            return '';
                        }
                        var limit = 115;
                        if (this.answerType != 0) {
                            limit = 90;
                        }
                        if (this.answer.content_abstract.text.length > limit) {
                            return this.answer.content_abstract.text.substring(0, limit) + '...<span class="answer-item-whole">全文</span>';
                        } else {
                            return this.answer.content_abstract.text;
                        }
                    },
                    formatedTime: function () {
                        var time = this.videoData.video_duration;
                        var result = '';
                        if (time) {
                            var minute = Math.floor(time / 60).toFixed(0);
                            var secend = Math.floor(time % 60).toFixed(0);
                            result += minute < 10 ? '0' + minute : minute;
                            result += ':';
                            result += secend < 10 ? '0' + secend : secend;
                        }
                        return result;
                    },
                    showV: function () {
                        var authInfo = this.answer.user.user_auth_info;
                        var authType;
                        if (authInfo) {
                            try {
                                authType = JSON.parse(authInfo).auth_type;
                            } catch (e) {
                            }
                        }
                        return authType && authType != 3;
                    },
                    formattedBrowCount: function () {
                        return util.formatNumber(this.answer.brow_count);
                    },
                    formattedShowCount: function () {
                        return util.formatNumber(this.answer.show_count);
                    },
                    formattedDiggCount: function () {
                        return util.formatNumber(this.answer.digg_count);
                    }
                },
                created: function () {
                    this.answerType = this.hasImgOrVedio();
                    if (this.answerType === 2) {
                        this.getVideoData();
                    }
                },
                mounted: function () {
                    // const { pathname } = window.location;
                    // const { qingyun_status } = this.answer;
                    // if(/\/user/.test(pathname) && qingyun_status && qingyun_status > 2 && qingyun_status < 7) {
                    //     this.show_qingyun_status = true;
                    //     this.qingyun_status_desc = qingyunStatusMapping[qingyun_status];
                    //     this.qingyun_status_style = 'answer-info-status answer-info-status-' + qingyunStyleMapping[qingyun_status];
                    // }
                    this.shareGroup = new shareGroup();
                    var $el = $(this.$el);
                    $el.find('.lazy-image').each(function (i, item) {
                        loadImage(item);
                    });
                },
                methods: {
                    mouseenter: function () {
                        this.isHover = true;
                        // $(this.$el).addClass('hover');
                    },
                    mouseleave: function () {
                        this.isHover = false;
                        // $(this.$el).removeClass('hover');
                    },
                    expand: function (ev, toComment) {
                        ev.preventDefault();
                        var qid = this.answer.question.qid;
                        //埋点
                        var tagname = $('.tag-item.current').text();
                        var params = {
                            category_name: tagname || '',
                            enter_from: 'click_category',
                            group_id: this.answer.ansid
                        };
                        window.collectEvent && window.collectEvent('go_detail', params);
                        localStorage.setItem('go_detail', JSON.stringify(params));
                        new detail({
                            el: $('<div></div>').appendTo('#modal-layer')[0],
                            data: {
                                data: new model_feed_question({
                                    question: this.answer.question,
                                    answer: this.answer
                                }),
                                toComment: toComment,
                                origin_source: this.origin_source
                            }
                        });
                    },
                    expandAndAutoPlay: function (ev) {
                        ev.preventDefault();
                        var qid = this.answer.question.qid;

                        new detail({
                            el: $('<div></div>').appendTo('#modal-layer')[0],
                            data: {
                                data: new model_feed_question({
                                    question: this.answer.question,
                                    answer: this.answer
                                }),
                                autoPlay: 'autoplay',
                                origin_source: this.origin_source
                            }
                        });
                    },
                    showComment: function (ev) {
                        this.expand(ev, true);
                    },
                    edit: function (ev) {
                        var question = this.answer.question;
                        if (question.is_slave == 1) {
                            $('body').toast({
                                status: 'fail',
                                text: '该问题已经被合并'
                            });
                            return;
                        }
                        if (this.answer.status == 0) {
                            $('body').toast({
                                status: 'fail',
                                text: '回答未通过审核，不可编辑'
                            });
                            return;
                        } else if (this.answer.display_status == 3) {
                            $('body').toast({
                                status: 'fail',
                                text: '回答审核中，不可编辑'
                            });
                            return;
                        }
                        //也可以编辑->又不可以
                        if (this.answer && this.answer.disable_edit) {
                            $('body').toast({status: 'success', text: this.answer.edit_tips || '该内容无法修改', keep: 3000});
                            return;
                        }
                        var qid = question.qid;
                        var abstractImage = '';
                        var pic_uri_list = question.content.pic_uri_list;
                        if (pic_uri_list.length > 0) {
                            abstractImage = pic_uri_list[0].web_uri;
                        }

                        var data = {
                            qid: qid,
                            ansid: this.answer.ansid,
                            title: question.title,
                            abstractText: question.content.text,
                            abstractImage: abstractImage,
                            concern_tags: question.concern_tags,
                            isEdit: true,
                            initContent: this.answer.content,
                            url: this.answer.link_url,
                            star_order_id: this.answer.star_order_id
                        };

                        if (window.wenda.userData.is_login == 0) {
                            login.getLogin();
                            return false;
                        }

                        new answer_modal({
                            data: {
                                answer: data
                            }
                        });
                    },
                    doDelete: function () {

                    },
                    openShareGroup: function () {
                        var question = this.answer.question;
                        if (question.is_slave == 1) {
                            $('body').toast({
                                status: 'fail',
                                text: '该问题已经合并'
                            });
                            return;
                        }
                        this.shareGroup.show({
                            'wap-url': 'https://www.wukong.com/answer/' + this.answer.ansid + '/?from=pcshare',
                            'web-url': 'https://www.wukong.com/answer/' + this.answer.ansid + '/?from=pcshare',
                            title: '悟空问答-' + question.title + '(' + this.answer.user.uname + '的回答,' + this.answer.digg_count + '赞)',
                            image: this.answer.content_abstract.image_url || 'http://s0.pstatp.com/toutiao/resource/forum_wap/static/image/logo_366c1b5.png',
                            summary: this.answer.content_abstract.text.substr(0, 200) + '...',
                            showQrAtOnce: 0
                        }, $(this.$el).find('.w-shareBtn'));
                    },
                    closeShareGroup: function () {
                        this.shareGroup.hide();
                    },
                    hasImgOrVedio: function () {
                        if (!this.answer.content_abstract) {
                            return 0;
                        }
                        var content = this.answer.content;
                        var reg = /\{!\-\- PGC_VIDEO\:(.+?)\-\-\}/gi;
                        var result = reg.exec(content);
                        if (result && result.length > 1 && this.parsevideoData(result[1])) {
                            return 2;
                        } else if (this.answer.content_abstract.image_url) {
                            return 1;
                        } else {
                            return 0;
                        }
                    },
                    parsevideoData: function (stringData) {
                        try {
                            this.videoData = JSON.parse(stringData);
                        } catch (e) {
                            return false;
                        }
                        return true;
                    },
                    getVideoData: function () {
                        // 服务端不取video数据
                        if (!global.window) {
                            return;
                        }
                        $.getVideoData(this.videoData.vid, function (data) {
                            this.$set(this.videoData, 'video_duration', data.video_duration);
                        }.bind(this));
                    }
                },
                filters: {
                    protocal: function (url = '') {
                        return url.replace(/^http(s)?:\/\//g, '//');
                    }
                }
            });

        }).call(this, typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
    }, {
        "../../ui/toast/toast.js": 18,
        "../answer-nointerest/btn": 20,
        "../answer/answer": 24,
        "../answer/setting/setting": 28,
        "../detail/answer_detail": 48,
        "../like/like": 71,
        "../like/unlike": 73,
        "../login/login": 75,
        "../model/feed_question": 77,
        "../sharegroup/sharegroup": 99,
        "../util": 127,
        "./answer-item-v3.tpl": 92
    }],
    92: [function (require, module, exports) {
        module.exports = "<div class=\"answer-item-v3\" :class=\"{'has-pic': answerType != 0,hover:isHover}\" @mouseenter=\"mouseenter\" @mouseleave=\"mouseleave\">\n    <div class=\"answer-item-pic\" v-if=\"answerType == 1\" @click=\"expand\">\n        <a href=\"javascript:\"><img class=\"\" :src=\"image_url | protocal\" /></a>\n    </div>\n    <div class='answer-item-pic answer-item-video' v-if='answerType == 2' @click=\"expandAndAutoPlay\">\n        <a href=\"javascript:\"><img class=\"\" :src=\"videoData.vposter\" /></a>\n        <div class='video-time'>\n            <i class='iconfont icon-Triangle'></i>\n            <span>{{formatedTime}}</span>\n        </div>\n    </div>\n    <div class=\"answer-info\">\n        <div class=\"answer-info-user\">\n            <a target=\"_blank\" :href=\"'/user/?uid=' + answer.user.user_id\" class=\"answer-info-user-avatar\" data-log=\"Visit_Profile|From_ProfilePic\"><img class=\"\" alt=\"\" :src=\"answer.user.avatar_url | protocal\" />\n                <span class=\"answer-info-user-name\">{{answer.user.uname}}\n                    <i class=\"iconfont icon-all_newv\" style=\"font-size: 12px;color: #ffc41c;\" v-if=\"showV\"></i>\n                </span>\n            </a>\n            <span class=\"answer-info-user-title\" v-if=\"answer.user.user_intro\">{{answer.user.user_intro}}</span>\n        </div>\n    </div>\n    <div class=\"answer-item-content\" @click=\"expand\">\n        <p><a :href=\"'/answer/' + answer.ansid + '/?origin_source=' + origin_source\" data-log=\"PopUp_AnswerContent|From_\" v-html=\"content_abstract\"></a>\n        </p>\n    </div>\n    <div class=\"answer-oper-my\" v-if=\"isMyAnswer\">\n        <!--<a class=\"delete\" href=\"javascript:\">删除</a>-->\n        <w-answer-setting :answer=\"answer\" :is_star_order_accepted=\"answer.is_star_order_accepted\" v-if=\"answer.can_edit\"></w-answer-setting>\n        <a :class=\" {'edit': true, 'no-edit': !!answer.disable_edit} \" href=\"javascript:\" v-if=\"answer.can_edit\" @click=\"edit\">编辑</a>\n        <span class=\"read-count\">{{formattedShowCount}}{{answer.show_text || '阅读'}}</span>\n        <span class=\"like-count\">{{formattedDiggCount}}赞</span>\n        <span class=\"comment-count\">{{answer.comment_count}}评论</span>\n        <a class=\"w-shareBtn\" href=\"javascript:\" @mouseenter=\"openShareGroup\" @mouseleave=\"closeShareGroup\">\n            <!--<i class=\"iconfont icon-share-home\"></i>-->\n            <span>分享</span>\n        </a>\n    </div>\n    <div class=\"answer-oper\" v-else>\n        <w-like :answer=\"answer\"></w-like>\n        <w-unlike :answer=\"answer\"></w-unlike>\n        <!--<w-answer-nointerest :answer=\"answer\"></w-answer-nointerest>-->\n        <!--<w-like :answer=\"answer\"></w-like>-->\n        <a class=\"answer-oper-comments\" href=\"javascript:\" data-log=\"Visit_Comment|From_\" @click=\"showComment\"><i class=\"iconfont icon-ask_comment\"></i>\n        <span class=\"comment-count\">{{answer.comment_count}}</span>\n        <span>评论</span></a>\n        <a class=\"w-shareBtn\" href=\"javascript:\" @mouseenter=\"openShareGroup\" @mouseleave=\"closeShareGroup\">\n            <i class=\"iconfont icon-share-home\"></i>\n            <span>分享</span>\n        </a>\n    </div>\n\n</div>\n";

    }, {}],
    93: [function (require, module, exports) {
        /**
         * created by dudapeng on 16.11.15
         * feed中单个问题view
         */

        var util = require('../util');
        var tpl = require('./question-v3.tpl');
        var view_answer = require('./answer-item-v3');
        var wQuestionNointerestBtn = require('../question-nointerest/btn');
        var shareGroup = require('../sharegroup/sharegroup');
        var login = require('../login/login');
        var toast = require('../../ui/toast/toast.js');

        /* 问题实例 */
        var answer = require('../answer/answer');
        toast();
        const qingyunStatusMapping = {
            1: '自荐已获奖',
            3: '自荐审核中',
            4: '自荐审核中',
            5: '自荐未获奖',
            6: '不符合自荐要求'
        };
        const qingyunStyleMapping = {
            1: 'succeed',
            3: 'auditing',
            4: 'auditing',
            5: 'failed',
            6: 'rejected'
        };

        module.exports = Vue.component('w-question-item', {
            template: tpl,
            data: function () {
                return {
                    isHovering: false,
                    // show_qingyun_status: false,
                    // qingyun_status_desc: '',
                    // qingyun_status_style: ''
                };
            },
            props: ['question', 'answer', 'extra_tag', 'query', 'origin_source'],
            computed: {
                isMain: function () {
                    return this.question.is_slave == 0 ? true : false;
                },
                pic: function () {
                    if (this.question.content.display_big_pic) {
                        return this.question.content.pic_uri_list[this.question.content.big_pic_index];
                    } else {
                        return this.question.content.pic_uri_list[0];
                    }
                },
                question_image: function () {
                    var question_image;
                    var content = this.question.content;
                    if (content.pic_uri_list && content.pic_uri_list.length > 0) {
                        var web_uri;
                        if (content.display_big_pic) {
                            web_uri = content.pic_uri_list[content.big_pic_index].web_uri;
                            question_image = '//p3.pstatp.com/large/' + web_uri;
                        } else {
                            web_uri = content.pic_uri_list[0].web_uri;
                            question_image = '//p3.pstatp.com/list/190x124/' + web_uri;
                        }
                    } else {
                        question_image = '';
                    }
                    return question_image;
                },
                showQuestionPic: function () {
                    return (this.question.show_answer === false || !this.question.hasAnswer) && this.question_image;
                },
                question_url: function () {
                    var question_url = '/question/' + this.question.qid + '/';
                    if (!(this.question.show_answer === false) && this.ansid) {
                        question_url = '/answer/' + this.ansid + '/';
                    }
                    if (this.query === 'winner') {
                        question_url = question_url + '?extra_tag=answer_get_bonus';
                    } else if (this.extra_tag) { // 如果有extra_tag在连接上打上标记用于统计
                        question_url = question_url + '?extra_tag=' + this.extra_tag
                    }
                    // https://bytedance.feishu.cn/docs/doccnvgmEtr6TtFGqiZisBSqNFX 加上来源，上报
                    if (this.origin_source) {
                        question_url = question_url + (question_url.indexOf('?') !== -1 ? '&' : '?') + 'origin_source=' + this.origin_source
                    }
                    return question_url;
                },
                text: function () {
                    var text = this.question.title;
                    if (this.question.highlight && this.question.highlight.title) {
                        text = util.highlight(text, this.question.highlight.title);
                    } else {
                        text = _.escape(this.question.title);
                    }
                    return text;
                },
                totalAnsCount: function () {
                    var total = this.question.normal_ans_count + this.question.nice_ans_count;
                    total = total || '暂无';
                    return total;
                },
                follow_text: function () {
                    if (this.question.follow_count) {
                        return this.question.follow_count + '人';
                    } else {
                        return '暂无';
                    }
                },
                isExpired() {
                    return false //this.question.is_expired == 1 // 暂时先下掉
                },
                bonus() {
                    let bonus = '';
                    if (this.query === 'winner' && this.question.bonus && this.question.bonus !== '0') {
                        bonus = `${Number.parseInt(this.question.bonus) / 100}元`;
                    }
                    return bonus;
                },
                bonusStatus() {
                    let bonusStatus = '';
                    if (this.query === 'user_answer' && this.answer.answer_bonus_value && this.answer.answer_get_bonus_status) {
                        const num = Number.parseInt(this.answer.answer_bonus_value) / 100;
                        switch (this.answer.answer_get_bonus_status) {
                            case 'pass':
                                return `答题得红包 审核通过 · 已获得 ${num}元 红包`;
                            case 'auditing':
                                return `答题得红包 审核中`;
                            case 'deny':
                                return `答题得红包 审核未通过`;
                        }
                    }
                },
                bonusObj() {
                    if (this.query === 'user_answer' && this.answer.answer_bonus_value && this.answer.answer_get_bonus_status) {
                        return {
                            'deny': this.answer.answer_get_bonus_status === 'deny',
                            'pass': this.answer.answer_get_bonus_status === 'pass',
                            'auditing': this.answer.answer_get_bonus_status === 'auditing'
                        }
                    } else {
                        return {};
                    }
                },
                show_status() {
                    return !!this.bonusStatus || this.show_qingyun_status;
                },
                status_wrapper_style() {
                    return {
                        'status-wrapper': true,
                        'list-style': !!this.bonusStatus && this.show_qingyun_status
                    }
                },
                show_qingyun_status() {
                    if (this.answer) {
                        const {qingyun_status} = this.answer;
                        // const qingyun_status = 3;
                        if (qingyun_status && !!qingyunStatusMapping[qingyun_status] && typeof window !== 'undefined' && /\/user/.test(window.location.pathname)) {
                            return true;
                        }
                    }
                    return false;
                },
                qingyun_status_desc() {
                    if (this.answer) {
                        const {qingyun_status} = this.answer;
                        // const qingyun_status = 3;
                        return qingyunStatusMapping[qingyun_status];
                    }
                    return '';
                },
                qingyun_status_style() {
                    if (this.answer) {
                        const {qingyun_status} = this.answer;
                        // const qingyun_status = 3;
                        return 'answer-info-status answer-info-status-' + qingyunStyleMapping[qingyun_status];
                    }
                    return '';
                }
            },
            created: function () {
                this.$on('question.nointerest', this.questionNointerest.bind(this));
                this.$on('answer.nointerest', this.answerNointerest.bind(this));
                this.$on('answer.deleted', this.answerDeleted.bind(this));
            },
            mounted: function () {
                this.shareGroup = new shareGroup();
                $(this.$el).find('.lazy-image').each(function (i, item) {
                    loadImage(item);
                });
            },
            methods: {
                teaRecord: function () {
                    if (window.collectEvent && (this.query === 'winner' || this.query === 'invitequest')) {
                        const tab_name = this.query === 'winner' ? 'winner_tab' : 'myquest_tab';
                        window.collectEvent('answer_cell_click', {
                            qid: this.question.qid,
                            tab_name
                        });
                        window.collectEvent('send');
                    }
                    this.reportTabChange();
                },
                reportTabChange: function () {
                    //埋点
                    var tagname = $('.tag-item.current').text() || $('.search-tab-item.active').text() || $('.nav-wrapper>.nav>.current').text() || '';
                    var params = {
                        category_name: tagname || '',
                        enter_from: 'click_category',
                        group_id: this.question.qid
                    };
                    window.collectEvent && window.collectEvent('go_detail', params);
                    localStorage.setItem('go_detail', JSON.stringify(params));
                },
                questionNointerest: function () {
                    $(this.$el).hide();
                },
                answerNointerest: function () {
                    $(this.$el).hide();
                },
                answerDeleted: function () {
                    $(this.$el).hide();
                },
                mouseenter: function () {
                    this.isHovering = true;
                },
                mouseleave: function () {
                    this.isHovering = false;
                },
                answerIt: function () {
                    if (!this.isMain) {
                        $('body').toast({
                            status: 'fail',
                            text: '该问题已经被合并'
                        });
                        return;
                    }

                    var qid = this.question.qid;
                    if (this.query === 'winner') {
                        window.open(`/question/${qid}/?extra_tag=answer_get_bonus`);
                        return;
                    }
                    var abstractImage = '';
                    var pic_uri_list = this.question.content.pic_uri_list;
                    if (pic_uri_list.length > 0) {
                        abstractImage = pic_uri_list[0].web_uri;
                    }
                    var data = {
                        qid: qid,
                        title: this.question.title,
                        abstractText: this.question.content.text
                    };

                    if (window.collectEvent && (this.query === 'winner' || this.query === 'invitequest')) {
                        const tab_name = this.query === 'winner' ? 'winner_tab' : 'myquest_tab';
                        window.collectEvent('answer_cell_click', {
                            qid: qid,
                            tab_name
                        });
                        window.collectEvent('send');
                    }

                    if (window.wenda.userData.is_login == 0) {
                        login.getLogin();
                        return false;
                    }

                    new answer({
                        data: {
                            answer: data,
                            origin_source: this.origin_source
                        }
                    });
                },
                openShareGroup: function () {
                    if (!this.isMain) {
                        $('body').toast({
                            status: 'fail',
                            text: '该问题已经被合并'
                        });
                        return;
                    }
                    var content = this.question.content;
                    var question_image;
                    if (content.pic_uri_list && content.pic_uri_list.length > 0) {
                        var web_uri = content.pic_uri_list[0].web_uri;
                        question_image = 'http://p3.pstatp.com/list/640x360/' + web_uri;
                    } else {
                        question_image = 'http://s0.pstatp.com/toutiao/resource/forum_wap/static/image/logo_366c1b5.png';
                    }
                    this.shareGroup.show({
                        'wap-url': 'https://www.wukong.com/question/' + this.question.qid + '/?from=pcshare',
                        'web-url': 'https://www.wukong.com/question/' + this.question.qid + '/?from=pcshare',
                        title: this.question.title,
                        image: question_image,
                        summary: this.question.content.text,
                        showQrAtOnce: 1
                    }, $(this.$el).find('.question-oper-share'));
                },
                closeShareGroup: function () {
                    this.shareGroup.hide();
                }
            }
        });

    }, {
        "../../ui/toast/toast.js": 18,
        "../answer/answer": 24,
        "../login/login": 75,
        "../question-nointerest/btn": 89,
        "../sharegroup/sharegroup": 99,
        "../util": 127,
        "./answer-item-v3": 91,
        "./question-v3.tpl": 94
    }],
    94: [function (require, module, exports) {
        module.exports = "<div class=\"question-v3\" :class=\"{'has-pic':showQuestionPic && !question.content.display_big_pic,hover:isHovering}\" data-log-from=\"Feed\" @mouseenter=\"mouseenter\" @mouseleave=\"mouseleave\">\n    <div class=\"question-pic\" v-if=\"showQuestionPic && !question.content.display_big_pic\">\n        <a :href=\"question_url\" target=\"_blank\" data-log=\"Visit_Question|From_QuestionPic\">\n            <img class=\"\" :src=\"question_image\" />\n        </a>\n    </div>\n    <div class=\"question-title\">\n        <div v-if=\"show_status\" :class=\"status_wrapper_style\">\n            <li v-if=\"!!bonusStatus\" :class=\"bonusObj\">\n                {{bonusStatus}}\n            </li>\n            <li :class=\"qingyun_status_style\" v-if=\"show_qingyun_status\">\n                {{qingyun_status_desc}}\n            </li>\n        </div>\n        <h2>\n            <a :href=\"question_url\" @click=\"teaRecord()\" target=\"_blank\" data-log=\"Visit_Question|From_Link\" v-html=\"text\"></a>\n        </h2>\n        <div class=\"question-info\">\n            <span class=\"question-answer-num\">{{ totalAnsCount }}回答</span>\n            <span class=\"question-follow-num\">{{ follow_text }}收藏</span>\n            <span class=\"question-follow-num\" v-if=\"isExpired\">问题已过期</span>\n        </div>\n    </div>\n    <div class=\"question-pic-big\" :class=\"{'super-wide':(pic.width / pic.height) > 660/273}\" v-if=\"showQuestionPic && question.content.display_big_pic\">\n        <a :href=\"question_url\" data-log=\"Visit_Question|From_QuestionLargePic\" target=\"_blank\">\n            <img class=\"\" :src=\"question_image\" />\n        </a>\n    </div>\n    <div class=\"question-answers\" v-if=\"question.show_answer !== false && question.hasAnswer\">\n        <w-answer-item :answer=\"answer\" :origin_source=\"origin_source\"></w-answer-item>\n    </div>\n    <div class=\"question-oper\" v-if=\"question.show_answer === false || !question.hasAnswer\">\n        <!--<w-question-nointerest :question=\"question\"></w-question-nointerest>-->\n        <a class=\"question-oper-answer\" href=\"javascript:\" data-log=\"PopUp_Answer|From_\" PopUp_Answer @click=\"answerIt\"><i class=\"iconfont icon-ask_write\"></i>回答</a>\n        <a class=\"question-oper-share\" href=\"javascript:\" @mouseenter=\"openShareGroup\" @mouseleave=\"closeShareGroup\"><i class=\"iconfont icon-share-home\"></i>分享</a>\n    </div>\n</div>\n";

    }, {}],
    95: [function (require, module, exports) {
        var tpl = require('./tag.tpl');
        require('../../../ui/toast/toast');

        module.exports = Vue.extend({
            template: tpl,
            data: function () {
                return {
                    question: {},
                    concern_tags: [],
                    tagSug: [],
                    tag_list: {},
                    tagInput: ''
                };
            },
            computed: {},
            beforeCreate: function () {
                var $dom = $('<div></div>').appendTo('#modal-layer');
                this.$options.el = $dom[0];
            },
            created: function () {
                this.concern_tags = this.question.concern_tags.slice(0);
                var _this = this;
                this.concern_tags.forEach(function (tag) {
                    _this.tag_list[tag.concern_id] = true;
                });

                this.$watch('tagInput', this.editTag.bind(this));
            },
            mounted: function () {
                $('#modal-layer').show();
                $('body').css('overflow', 'hidden');
            },
            methods: {
                editTag: function (e) {
                    clearTimeout(this.editTagInterval);
                    var _this = this;
                    var name = this.tagInput;
                    if (name.trim() !== '') {
                        this.editTagInterval = setTimeout(function () {
                            $.Ajax('/wenda/web/search/concerntag/', {
                                type: 'GET',
                                data: {
                                    name: name.replace(/^\s+/, ''),
                                    t: new Date().getTime()
                                },
                                success: function (e, r) {
                                    _this.tagSug = r.concern_tag_list;
                                }
                            });
                        }, 500);
                    }
                },
                addTag: function (tag) {
                    var id = tag.concern_id;
                    if (!this.tag_list[id]) {
                        this.tag_list[id] = true;
                        this.concern_tags.push(tag);
                    }
                    this.tagSug.splice(0);
                    this.tagInput = '';
                },
                delTag: function (tag) {
                    var _this = this;
                    this.concern_tags.some(function (tagInList, index) {
                        if (tag.concern_id === tagInList.concern_id) {
                            _this.concern_tags.splice(index, 1);
                            _this.tag_list[tag.concern_id] = false;
                            return true;
                        }
                    });
                },
                doit: function () {
                    var concernIds = [];
                    if (this.concern_tags.length === 0) {
                        $('body').toast({status: 'fail', text: '请至少录入一个标签'});
                        return;
                    }
                    this.concern_tags.forEach(function (tag) {
                        concernIds.push(tag.concern_id);
                    });
                    $.ajax('/wenda/web/commit/editquestiontag/', {
                        type: 'post',
                        dataType: 'json',
                        data: {
                            qid: this.question.qid,
                            concern_ids: concernIds.join(',')
                        },
                        success: function (data) {
                            if (data.err_no === 0) {
                                this.$emit('question.concern_tags.change', this.concern_tags);
                                this.close();
                            } else {
                                $('body').toast({status: 'fail', text: data.err_tips});
                            }
                        }.bind(this)
                    });
                },
                close: function () {
                    this.destroy();
                },
                destroy: function () {
                    $('#modal-layer').hide().html('');
                    this.$destroy();
                    $('body').css('overflow', 'auto');
                }
            }
        });
    }, {"../../../ui/toast/toast": 18, "./tag.tpl": 96}],
    96: [function (require, module, exports) {
        module.exports = "<div class=\"question-tag-edit-outer\">\n    <div class=\"question-tag-edit\">\n        <div class=\"header\">\n            <h3>\n                标签\n                <a href=\"javascript:;\" data-node=\"close\" class=\"close\" @click=\"close\">\n                    <i class=\"iconfont icon-dislike_icon_new\"></i>\n                </a>\n            </h3>\n        </div>\n        <div class=\"qte-container\">\n            <div class=\"qte-title\">{{ question.title }}</div>\n            <div class=\"input-box clearfix\">\n                <div class=\"qte-tags clearfix\">\n                    <div class=\"qte-tag\" v-for=\"item in concern_tags\">\n                        <span>{{ item.name }}</span>\n                        <a href=\"javascript:;\" data-node=\"del-tag\" :data-cid=\"item.concern_id\" @click=\"delTag(item)\">\n                            <i class=\"iconfont icon-dislike_icon_new\"></i>\n                        </a>\n                    </div>\n\n                    <div class=\"qte-new-input\" v-show=\"concern_tags.length < 5\">\n                        <input type=\"text\" class=\"tag-input\" data-node=\"tag-input\" placeholder=\"添加标签\" v-model=\"tagInput\" />\n                        <ul class=\"tag-sug\" v-show=\"tagSug.length\">\n                            <li v-for=\"item in tagSug\" :data-id=\"item.concern_id\" @click=\"addTag(item)\">{{item.name}}</li>\n                        </ul>\n                    </div>\n                    <span class=\"qte-tag-tip\" v-show=\"concern_tags.length >= 5\">最多5个标签</span>\n                </div>\n            </div>\n\n            <div class=\"footer\">\n                <a type=\"button\" class=\"qte-btn btn-cancel\" @click=\"close\">取消</a>\n                <a type=\"button\" class=\"qte-btn btn-primary\" @click=\"doit\">提交</a>\n            </div>\n        </div>\n    </div>\n</div>";

    }, {}],
    97: [function (require, module, exports) {
        /**
         * Created by fenghongyu on 15/12/9.
         */
        var tpl = require('./search-input.tpl');
        var ask = require('../ask/ask');
        module.exports = Vue.component('w-search-input', {
            template: tpl,
            data: function () {
                return {
                    type: '',
                    list: [],
                    isShowSug: false,
                    keyword: '',
                    inputIsFocused: false
                };
            },
            props: ['searchWord'],
            created: function () {
                this.keyword = this.searchWord || '';
                var sugTimer;
                var _this = this;
                this.$watch('keyword', function () {
                    clearTimeout(sugTimer);
                    sugTimer = setTimeout(function () {
                        _this.showSug();
                    }, 10);
                });
            },
            mounted: function () {
                // 同步失去焦点事件
                $('body').on('isblur', this.isblur);
            },
            beforeDestroy: function () {
                $('body').off('isblur', this.isblur);
            },
            watch: {
                keyword: function () {
                    this.$emit('updateSearchWord', this.keyword);
                },
                searchWord: function () {
                    this.keyword = this.searchWord;
                }
            },
            methods: {
                ask: function () {
                    var _this = this;
                    //埋点
                    window.collectEvent && window.collectEvent('question_ask_click');
                    new ask({
                        el: $('<div></div>').appendTo('#modal-layer')[0],
                        data: {
                            title: _this.keyword
                        }
                    });
                    $.log.event('PopUp_CreateQuestion', 'From_SearchBox');
                },
                isblur: function () {
                    this.blur(1);
                },
                getSearchSug: function (title, callback) {
                    $.Ajax('/wenda/web/question/association/', {
                        type: 'GET',
                        data: {
                            title: title
                        },
                        success: function (data, res) {
                            callback && callback(res);
                        }
                    });
                },
                setHistoryToInput: function (text) {
                    this.keyword = text;
                    this.hideSug();
                    $(this.$el).find('[data-node="searchInput"]').focus();
                },

                deleteHistoryItem: function (text) {
                    var my_question = localStorage.getItem('my_question');
                    if (my_question) {
                        my_question = my_question + '###';
                        my_question = my_question.replace('###' + text + '###', '###');
                        var l = my_question.length;
                        my_question = my_question.substr(0, l - 3);
                    }
                    $.localStorage.setItem('my_question', my_question);
                    for (var i = 0; i < this.list.length; i++) {
                        if (this.list[i].title == text) {
                            this.list.splice(i, 1);
                            break;
                        }
                    }
                    clearTimeout(this.blurTimer);
                    this.isShowSug = true;
                },
                setQuestionToHistory: function () {
                    var text = this.keyword;
                    if (text) {
                        this.saveToLocal(text);
                    }
                    this.hideSug();
                },


                hideSug: function (e) {
                    this.isShowSug = false;
                },
                clearHistory: function () {
                    this.hideSug();
                    $.localStorage.removeItem('my_question');

                },
                focus: function () {
                    clearTimeout(this.blurTimer);
                    $.log.event('Click_Search', 'From_Nav');
                    this.showSug();
                    this.$emit('inputFocused');
                    this.inputIsFocused = true;
                },
                blur: function (data) {
                    clearTimeout(this.blurTimer);
                    this.hideSug();
                    if (data != 1) {
                        $('body').trigger('isblur');
                    }
                    this.$emit('inputBlured');
                    this.inputIsFocused = false;
                },
                open: function (qid) {
                    window.open('/question/' + qid + '/');
                },
                showSug: function () {
                    var _this = this;
                    var data = [];
                    if (this.keyword === '') {
                        var my_question = localStorage.getItem('my_question') || '';
                        var my_question_list = my_question.split('###');
                        for (var ii = 0; ii < my_question_list.length; ii++) {
                            if (my_question_list[ii]) {
                                data.push({
                                    title: my_question_list[ii]
                                });
                            }
                        }
                        if (data.length > 0) {
                            this.type = 'history';
                            this.list = data;
                            this.isShowSug = true;
                        }
                    } else {
                        var title = this.keyword;
                        this.getSearchSug(title, function (r) {
                            if (title === _this.keyword) {
                                _this.type = 'sug';
                                _this.list = r.question_list;
                                _this.isShowSug = true;
                            }
                        });
                    }
                },

                saveToLocal: function (question) {
                    var my_question = localStorage.getItem('my_question');
                    my_question = my_question || '';
                    var my_question_list = my_question.split('###');
                    if (my_question_list.indexOf(question) > -1) {
                        return;
                        // 不写入已有的历史
                    }
                    my_question_list.push(question);

                    if (my_question_list.length > 10) {
                        my_question_list.shift();
                    }
                    $.localStorage.setItem('my_question', my_question_list.join('###'));
                },

                gotoSearchPage: function (e) {
                    e.preventDefault();
                    //埋点
                    window.collectEvent && window.collectEvent('question_search_click', {
                        search_words: this.keyword
                    });
                    $.log.event('Search_Request', 'From_Nav');

                    var word = this.keyword;

                    if (word) {
                        this.saveToLocal(word);
                        location.href = '/search/?keyword=' + encodeURIComponent(word);
                    }
                }
            }
        });
    }, {"../ask/ask": 40, "./search-input.tpl": 98}],
    98: [function (require, module, exports) {
        module.exports = "<div data-node=\"searchBox\" class=\"widget-search-input\" @click.stop data-log-from=\"SearchBox\">\n    <form action=\"/search/\" method=\"get\" data-node=\"searchForm\" target=\"_blank\">\n        <div class=\"input-group clearfix\" :class=\"{'input-focused': inputIsFocused}\">\n            <input autocomplete=\"off\" ga_event=\"nav_search_input\" data-node=\"searchInput\" name=\"keyword\" type=\"text\" placeholder=\"搜索你感兴趣的问题\"\n                v-model=\"keyword\" @focus=\"focus\" @blur=\"blur\"/>\n                <div class=\"btn-submit\" :class=\"{'input-focused': inputIsFocused}\" @click=\"gotoSearchPage\">\n                    <button ga_event=\"nav_search\" type=\"submit\" href=\"javascript:;\">\n                        <i class=\"iconfont icon-ask_search\"></i>\n                    </button>\n                </div>\n        </div>\n    </form>\n    <div class=\"layer layer-suspension\" data-node=\"sug-layer\" v-if=\"isShowSug\" :class=\"{hasKeyword: keyword.length > 0 || type != 'history'}\">\n        <ul>\n            <template v-for=\"item in list\">\n                <li class=\"item\" v-if=\"type == 'history'\">\n                    <a :href=\"'/search/?keyword=' + encodeURIComponent(item.title)\" class=\"item-inner\" data-type=\"history\" @mousedown=\"setHistoryToInput(item.title)\">\n                        {{ item.title }}\n                    </a>\n                    <a href=\"javascript:;\" class=\"dislike\" data-type=\"delete-history\" @mousedown=\"deleteHistoryItem(item.title)\">\n                        <i class=\"iconfont icon-dislike\"></i>\n                    </a>\n                </li>\n                <li class=\"item\" data-type=\"sug\" v-else  @mousedown=\"setQuestionToHistory\">\n                    <a class=\"item-inner\" @mousedown=\"open(item.qid)\">\n                        <span class=\"ans_count\" v-if=\"item.ans_count>0\">{{ item.ans_count }}回答</span>\n                        <span class=\"ans_count\" v-else>暂无回答</span>\n                        {{ item.title }}\n                       \n                        \n                        <!-- <i class=\"iconfont icon-ask_arrow_right\"></i> -->\n                    </a>\n                </li>\n            </template>\n            <li class=\"sep\" v-if=\"list.length > 0\"></li>\n            <li class=\"item\" data-type=\"clearhistory\" v-if=\"type == 'history' && list.length > 0\" @mousedown=\"clearHistory\">\n                <span class=\"item-inner  last-item\">清除搜索历史</span>\n            </li>\n            <li class=\"item\" data-type=\"sug-search\" v-else>\n                <a class=\"item-inner  last-item\" href=\"javascript:;\" @mousedown=\"ask\">\n                    <span class=\"ask-text\" v-if=\"keyword.length > 0\">\n                        立即提问“{{ keyword }}”\n                        <i class=\"iconfont icon-ask_write ask-pen\"></i>    \n                    </span>\n                    <span class=\"ask-text\" v-else>\n                            立即提问\n                            <i class=\"iconfont icon-ask_write ask-pen\"></i>    \n                    </span>\n                </a>\n            </li>\n        </ul>\n    </div>\n</div>";

    }, {}],
    99: [function (require, module, exports) {
        var tpl = require('./sharegroup.tpl');
        var instanceDefault;

        function addParams(url, params) {
            var paramStr = '';
            for (var key in params) {
                paramStr += key + '=' + params[key] + '&';
            }
            paramStr = paramStr.substring(0, paramStr.length - 1);
            if (url.indexOf('?') > -1) {
                return url + '&' + paramStr;
            } else {
                return url + '?' + paramStr;
            }
        }

        function shareToWeibo(shareData) {
            var url = 'http://service.weibo.com/share/share.php?';
            url += 'url=' + encodeURIComponent(addParams(shareData['web-url'], {
                platform: 'weibo'
            }));
            url += '&appkey=2504490989';
            if (shareData.image.trim() !== '') {
                url += '&pic=' + encodeURIComponent(shareData.image);
            }
            url += '&title=' + encodeURIComponent(shareData.title);
            url += '&searchPic=true';
            var login_url = 'https://passport.weibo.cn/signin/login?';
            window.open(url);
        }

        function shareToQzone(shareData) {
            var url = 'http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?';
            url += 'url=' + encodeURIComponent(addParams(shareData['web-url'], {
                platform: 'Qzone'
            }));
            // url += "&appkey=2504490989";
            url += '&pics=' + encodeURIComponent(shareData.image);
            url += '&title=' + encodeURIComponent(shareData.title);
            url += '&summary=' + encodeURIComponent(shareData.summary || ' ');
            window.open(url);
        }

        var sharegroup = Vue.component('w-sharegroup', {
            template: tpl,
            data: function () {
                return {};
            },
            props: ['shareData'],
            computed: {},
            // 测试二维码
            // mounted: function () {
            //     var $qr = $(this.$el).find('.qr');
            //     $qr.show();
            // },
            methods: {

                hide: function () {
                    // this.$el.hide();
                },
                show: function (shareOpt, $dom) {
                    $dom.append(this.$el);
                    this.shareData = shareOpt;
                    if (shareOpt.showQrAtOnce) {
                        this.shareWeixin(1);
                    }
                },
                getShareData: function ($target) {
                    return this.shareData;
                },
                shareWeibo: function (e) {
                    var shareData = this.getShareData();
                    shareToWeibo(shareData);
                },
                shareWeixin: function (e) {
                    if (!e) {
                        return;
                    }
                    var shareData = this.shareData;
                    var url = shareData['wap-url'];
                    var $qr = $(this.$el).find('.qr');
                    var ori_url = $qr.attr('data-url');
                    if (url !== ori_url) {
                        $qr.html('').show().qrcode({
                            render: 'div',
                            ecLevel: 'L',
                            text: addParams(shareData['wap-url'], {
                                platform: 'weixin'
                            }),
                            fill: '#000000',
                            size: 110
                        });
                        $qr.attr('data-url', url);
                    } else {
                        $qr.show();
                    }
                },
                hideWeixin: function () {
                    $(this.$el).find('.qr').hide();
                },
                shareQzone: function (e) {
                    var shareData = this.getShareData();
                    shareToQzone(shareData);
                }
            }

        });


        module.exports = function (options) {
            if (options) {
                return new sharegroup(options);
            } else {
                if (instanceDefault) {
                    return instanceDefault;
                } else {
                    options = {};
                    options.el = $('<div></div>').appendTo('body')[0];
                    instanceDefault = new sharegroup(options);
                    return instanceDefault;
                }
            }
        };
    }, {"./sharegroup.tpl": 100}],
    100: [function (require, module, exports) {
        module.exports = "<div class=\"widget-share-group\" data-node=\"widget-share-group\">\n    <div class=\"share-group-content clearfix\">\n        <div class=\"qr\">\n        </div>\n        <div class=\"share-link weixin\" data-node=\"weixin\" data-url=\"\" data-desc=\"\" data-log=\"Share_Weixin|From_\" @mouseover=\"shareWeixin\" @mouseleave=\"hideWeixin\">\n            <i class=\"iconfont icon-wechat_share\"></i>\n            <!-- <span>微信</span> -->\n            <!-- <img src=\"/static/style/image/share/vote_wap_weixin_share.png\" alt=\"\"> -->\n        </div>\n        <div class=\"share-link weibo\" data-node=\"weibo\" data-url=\"\" data-desc=\"\" data-log=\"Share_Weibo|From_\" @click=\"shareWeibo\">\n            <i class=\"iconfont icon-weibo_share\"></i>\n            <!-- <span>微博</span> -->\n            <!-- <img src=\"/static/style/image/share/vote_wap_sina_share.png\" alt=\"\"> -->\n        </div>\n        <div class=\"share-link qq\" data-node=\"qzone\" data-url=\"\" data-desc=\"\" data-log=\"Share_Qzone|From_\" @click=\"shareQzone\">\n            <i class=\"iconfont icon-qzone_share\"></i>\n            <!-- <span>QQ空间</span> -->\n            <!-- <img src=\"/static/style/image/share/vote_wap_qzone_share.png\" alt=\"\"> -->\n        </div>\n    </div>\n    <div class=\"share-group-arrow\">\n    <i></i>\n    </div>\n</div>\n";

    }, {}],
    101: [function (require, module, exports) {
        var tpl = require('./board.tpl');

        module.exports = Vue.component('w-sidebar-board', {
            template: tpl,
            data: function () {
                return {
                    data: []
                }
            },
            props: [],
            computed: {
                boardList: function () {
                    return this.$store ? this.$store.state.board : null
                }
            },
            created: function () {
                this.init()
            },
            mounted: function () {
                if (this.data.length == 0) {
                    this.load()
                }
            },
            updated: function () {
                if (this.data.length) {
                    $(this.$el)
                        .find('.banner')
                        .unslider({
                            speed: 500, //  滚动速度
                            autoplay: true,
                            delay: 8000, //  动画延迟
                            infinite: true,
                            dots: true,
                            arrows: {}
                        })
                }
            },
            methods: {
                load: function () {
                    $.Ajax('/wenda/web/announcement/brow/', {
                        type: 'GET',
                        data: {
                            t: new Date().getTime(),
                            count: 10
                        },
                        success: function (e, r) {
                            this.data = r.anno_data || [];
                            this.$nextTick(function () {
                                $(document).trigger('hot_board_load_finish')
                            })
                        }.bind(this)
                    })
                },
                init: function () {
                    if (this.boardList) {
                        this.data = this.boardList.anno_data || []
                    }
                },
                dadian(content, index) {
                    window.collectEvent('right_banner_click', {
                        banner_type: content,
                        banner_order: index + 1,
                        tab_name:
                            location.pathname === '/'
                                ? 'homepage_tab'
                                : location.pathname === '/myquest/'
                                ? 'myquest_tab'
                                : 'winner_tab'
                    });
                    window.collectEvent('send')
                }
            }
        })

    }, {"./board.tpl": 102}],
    102: [function (require, module, exports) {
        module.exports = "<div class=\"hot-board\" data-node=\"hot-board\" data-log-from=\"!Campaign\" v-if=\"data.length\">\n    <div class=\"banner\">\n        <ul>\n            <li v-for=\"(item, index) in data\" @click=\"dadian(item.Content, index)\">\n                <template v-if=\"item.ImageUrl\">\n                    <div class='anno-content'>\n                        {{ item.Content }}\n                    </div>\n                    <a :href=\"item.OpenUrl\" class=\"wenda-board\" target=\"_blank\" :title='item.Content' data-log=\"Visit_Campaign|From_\">\n                        <img :src=\"item.ImageUrl\" alt=\"\" />\n                    </a>\n                </template>\n                <template v-else>\n                    <a :href=\"item.OpenUrl\" class=\"wenda-board\" target=\"_blank\" data-log=\"Visit_Campaign|From_\">\n                            {{ item.Content }}\n                        </a>\n                </template>\n            </li>\n        </ul>\n    </div>\n</div>\n";

    }, {}],
    103: [function (require, module, exports) {
        module.exports = Vue.component('w-sidebar-contact', {
            template: require('./contact.tpl')
        });
    }, {"./contact.tpl": 104}],
    104: [function (require, module, exports) {
        module.exports = "<div class=\"w-contact\">\n    <h4><span class=\"no-text\"></span></h4>\n    <div class=\"contact-info\">\n        <p>\n            © 2019 今日头条\n        </p>\n        <p class=\"cooperate\">\n            悟空问答合作邮箱：wendahz@toutiao.com\n        </p>\n        <p>\n            悟空问答侵权投诉通道：jubao@toutiao.com\n        </p>\n        <p>\n            京ICP备12025439号-14\n        </p>\n        <p>\n            京公网安备11000002002030号\n        </p>\n       <p>\n            网络文化经营许可证\n       </p>\n       <p>\n           跟帖评论自律管理承诺书\n       </p>\n       <p>\n            违法和不良信息举报电话：400-140-2108\n       </p>\n       <p>\n            公司名称：北京字节跳动科技有限公司/北京字\n       </p>\n       <p>\n            节跳动网络技术有限公司\n       </p>\n        <p>\n            <a href='//s2.pstatp.com/site_new/promotion/landing_page/img/0001_16eff507ed67d3426823881655c6e7d5.jpg' target='_blank' >\n                营业执照\n            </a>\n        </p>\n    </div>\n</div>\n";

    }, {}],
    105: [function (require, module, exports) {
        module.exports = Vue.component('w-sidebar-guess', {
            template: require('./guess.tpl'),
            data: function () {
                return {
                    lists: (this.$store && this.$store.state.guess) ? this.$store.state.guess : []
                };
            }
        });
    }, {"./guess.tpl": 106}],
    106: [function (require, module, exports) {
        module.exports = "<div class=\"guess-wrapper\" v-if=\"lists.length > 0\">\n<div class=\"sidebar-guess\"  data-log-from=\"Guess\">\n    <h4>\n        <span>猜你喜欢</span>\n    </h4>\n    <div class=\"guess-list-wrapper\">\n        <div class=\"guess-list\" v-show=\"index <= 6\" v-for=\"(item, index) in lists\">\n            <a :href=\"'/question/'+item.qid+'/'\" target=\"_blank\" class=\"preview-img\" data-log=\"Visit_Question|From_\">\n                <img v-if=\"item.content.thumb_image_list[0]\" :src=\"item.content.thumb_image_list[0].url\" alt=\"\"/>\n            </a>\n            <a :href=\"'/question/'+item.qid+'/'\" target=\"_blank\"class=\"item-link\" data-log=\"Visit_Question|From_\">\n                <h2 class=\"title\">{{item.title}}</h2>\n            </a>\n            <div class=\"answer-read\">\n                <span class=\"answer\">{{item.all_ans_count}}回答</span>\n            </div>\n        </div>\n    </div>\n</div>\n</div>\n\n";

    }, {}],
    107: [function (require, module, exports) {
        var acrawler = require('byted-acrawler');

        module.exports = Vue.component('w-sidebar-hot', {
            template: require('./hot.tpl'),
            data: function () {
                return {
                    data: []
                };
            },
            props: [],
            created: function () {

            },
            mounted: function () {
                this.load();
            },
            methods: {
                setHotConcern: function () {
                    $.cookie('wenda_last_concern_id', '6300775428692904450', {path: '/'});
                },
                replaceImage: function (url) {
                    if (/(p1|p2|p3)\.pstatp\.com/.test(url)) {
                        return url.replace('http://', '//');
                    } else {
                        return url;
                    }
                },
                load: function () {
                    var _this = this;
                    var data = {
                        concern_id: '6300775428692904450',
                        t: new Date().getTime() - 10000, // 非常trick的做法为了错开和feed相同请求数据
                    };
                    data._signature = acrawler.sign('6300775428692904450');

                    $.Ajax('/wenda/web/nativefeed/brow/', {
                        type: 'GET',
                        data: data,
                        success: function (e, r) {
                            var data = [];
                            if (r.data && r.data.length) {
                                for (var i = 0; i < r.data.length; i++) {
                                    if (r.data[i].cell_type === 36 && r.data[i].question && r.data[i].answer) {
                                        data.push(r.data[i]);
                                    }
                                    if (data.length >= 3) {
                                        break;
                                    }
                                }
                                this.data = data;
                            }
                        }.bind(this)
                    });
                },
                showV: function (authInfo) {
                    var authType;
                    if (authInfo) {
                        try {
                            authType = JSON.parse(authInfo).auth_type;
                        } catch (e) {
                        }
                    }
                    return authType && authType != 3;
                }
            },
            filters: {
                protocal: function (url = '') {
                    return url.replace(/^http(s)?:\/\//g, '//');
                }
            }
        });

    }, {"./hot.tpl": 108, "byted-acrawler": 1}],
    108: [function (require, module, exports) {
        module.exports = "<div class=\"hot-wenda\"  data-node=\"hot-wenda\" v-if=\"data.length\">\n<div class=\"hot-qa\" data-log-from=\"Recommended\">\n    <h4>\n        <span>热门推荐</span>\n        <a href=\"/\" data-node=\"recommand-feed\" target=\"_blank\" @click=\"setHotConcern\">更多\n            <i class=\"iconfont icon-ask_arrow_right\"></i>\n        </a>\n    </h4>\n    <div class=\"hot-qa-list\">\n        <div class=\"hot-item hottest\" v-for=\"(item,index) in data\" v-if=\"index < 3 && item\">\n            <a :href=\"'/question/' + item.question.qid + '/' + '?origin_source=question_click_write_answer_hot'\" class=\"\" target=\"_blank\" data-log=\"Visit_Question|From_\">\n                <h2 class=\"title\">{{ item.question.title }}</h2>\n            </a>\n            <div class=\"answer-user\">\n                <div class=\"user-info\">\n                    <div data-node=\"like\" class=\"answer-like\" :class=\"{like:item.answer.is_digg}\" data-log=\"Like|From_\">\n                        <span data-node=\"like-count\">{{ item.answer.digg_count }}赞</span>\n                        <i class=\"answer-like-icon\"></i>\n                    </div>\n                    <span class=\"arrow\"></span>\n                    <div class=\"user-link\">\n                        <a class=\"answer-user-avatar\" :href=\"'/user/?uid=' + item.answer.user.user_id\" target=\"_blank\" data-log=\"Visit_Profile|From_\">\n                            <img class=\"\" :src=\"item.answer.user.avatar_url | protocal\" alt=\"\" />\n                        </a>\n                        <a class=\"answer-user-name\" v-if=\"item.answer.user.user_intro\" :href=\"'/user/?uid=' + item.answer.user.user_id\" target=\"_blank\"\n                            data-log=\"Visit_Profile|From_\">\n                            <span class=\"uname\" style=\"color:#333\"> {{ item.answer.user.uname }}\n                                <i class=\"iconfont icon-all_newv\" style=\"font-size: 12px;color: #ffc41c;\" v-if=\"showV(item.answer.user.user_auth_info)\"></i>\n                            </span>\n                            <em>|</em>\n                            <span style=\"color:#777;\" :title=\"item.answer.user.user_intro\">{{ item.answer.user.user_intro }}</span>\n                        </a>\n                        <a class=\"answer-user-name no-title\" v-else :href=\"'/user/?uid=' + item.answer.user.user_id\" target=\"_blank\" data-log=\"Visit_Profile|From_\">\n                            <span class=\"uname\" style=\"color:#333\">{{ item.answer.user.uname }}</span>\n                        </a>\n                    </div>\n                </div>\n            </div>\n            <a :href=\"'/answer/' + item.answer.ansid + '/' + '?origin_source=question_click_write_answer_hot'\" class=\"\" target=\"_blank\" data-log=\"Visit_Question|From_\">\n                <div class=\"preview\">\n                    <div class=\"preview-image\" v-if=\"item.answer.content_abstract.image_url\">\n                        <img :src=\"replaceImage(item.answer.content_abstract.image_url)\" alt=\"\">\n                    </div>\n                    <p class=\"content\">{{ item.answer.content_abstract.text }}</p>\n                </div>\n            </a>\n        </div>\n    </div>\n</div>\n</div>\n";

    }, {}],
    109: [function (require, module, exports) {
        var tpl = require('./invite.tpl');
        var answer = require('../../answer/answer');
        var login = require('../../login/login');
        var toast = require('../../../ui/toast/toast.js');

        toast();
        module.exports = Vue.component('w-sidebar-invite', {
            template: tpl,
            data: function () {
                return {
                    data: []
                };
            },
            created: function () {
                this.init();
            },
            mounted: function () {
                if (this.data.length == 0) {
                    this.load();
                }
            },
            methods: {
                answer: function (question) {
                    if (question.is_slave == 1) {
                        $('body').toast({
                            status: 'fail',
                            text: '该问题已经被合并'
                        });
                        return;
                    }
                    var abstractImage = '';
                    if (question.content.pic_uri_list.length > 0) {
                        abstractImage = question.content.pic_uri_list[0].web_uri;
                    }
                    var data = {
                        qid: question.qid,
                        title: question.title,
                        abstractText: question.content.text,
                        abstractImage: abstractImage,
                        concern_tags: question.concern_tags
                    };

                    /* 未登录情况触发登录 */
                    if (window.wenda.userData.is_login == 0) {
                        login.getLogin();
                        return false;
                    }

                    /* 回答弹层,可更改为单页面 */
                    new answer({
                        data: {
                            answer: data,
                            extra_tag: 'from_wenda_list',
                            origin_source: 'answer_requesting_right'// 需求：https://bytedance.feishu.cn/docs/doccnvgmEtr6TtFGqiZisBSqNFX
                        }
                    });
                },
                load: function () {
                    $.Ajax('/wenda/web/ugcinvited/question/brow_v2/', {
                        type: 'GET',
                        data: {
                            fix_count: 3,
                            source: 'rightbottom',
                            t: new Date().getTime()
                        },
                        success: function (e, r) {
                            this.data = r.wenda_invited_question_list;
                            this.$nextTick(function () {
                                $(document).trigger('invited_question_load_finish');
                            });
                        }.bind(this)
                    });
                },
                init: function () {
                    if (this.inviteList) {
                        this.data = this.inviteList.wenda_invited_question_list;
                    }
                }
            },
            computed: {
                inviteList: function () {
                    return this.$store ? this.$store.state.invite : null;
                }
            }
        });

    }, {"../../../ui/toast/toast.js": 18, "../../answer/answer": 24, "../../login/login": 75, "./invite.tpl": 110}],
    110: [function (require, module, exports) {
        module.exports = "<div class=\"invite-quest\"  data-log-from=\"Invited\" v-if=\"data && data.length\">\n<h4 style=\"margin-top:40px;\">\n<span>等我来答</span>\n<a href=\"/myquest/\" target=\"_blank\" data-log=\"Visit_QuestionInvited|From_\">更多\n        <i class=\"iconfont icon-ask_arrow_right\"></i>\n    </a>\n</h4>\n<div class=\"invite-list\">\n    <div class=\"item clearfix\" v-for=\"(item,index) in data\" v-if=\"index < 3\">\n        <h3 v-if=\"item.invited_question_desc\">{{ item.invited_question_desc }}</h3>\n        <div class=\"preview-image\" v-if=\"item.content.pic_uri_list&&item.content.pic_uri_list.length>0\">\n            <img :src=\"'//p3.pstatp.com/list/' + item.content.pic_uri_list[0].web_uri\" alt=\"\">\n        </div>\n        <a :href=\"'/question/' + item.qid + '/?extra_tag=from_wenda_list&origin_source=answer_requesting_right'\" class=\"item-link\" target=\"_blank\" data-log=\"Visit_Question|From_\">\n            <h2 class=\"title\">{{ item.title }}</h2>\n        </a>\n        <a data-node=\"answer\" class=\"answer-btn\" href=\"javascript:;\" data-log=\"PopUp_Answer|From_\" @click=\"answer(item)\">\n            <i class=\"iconfont icon-ask_write\"></i>回答\n        </a>\n    </div>\n</div>\n</div>\n";

    }, {}],
    111: [function (require, module, exports) {
        var tpl = require('./qrcode.tpl');

        module.exports = Vue.component('w-sider-qrcode', {
            template: tpl,
            mounted: function () {
                $(this.$el).find('.qrcode').qrcode({
                    render: 'canvas',
                    ecLevel: 'H',
                    text: 'https://d.toutiao.com/RSxY/',
                    fill: '#000000',
                    size: 78
                });
            }
        });

    }, {"./qrcode.tpl": 112}],
    112: [function (require, module, exports) {
        module.exports = "<div class='qrcode-sidebar clearfix'> \n    <h4>\n        <span>手机版下载</span>\n    </h4>\n    <div class='qrcode-container'>\n        <div class='qrcode'><img src='//s3.pstatp.com/toutiao/resource/wenda/wenda_web/static/style/image/wukong_qrcode_logo_eb03a64.png'></div>\n    </div>\n    <div class='content'>\n        <h5>悟空问答App全新上线</h5>\n        <p>看热点讨论 问明星专家</p>\n    </div>\n</div>";

    }, {}],
    113: [function (require, module, exports) {
        var hot = require('./hot/hot');
        var invite = require('./invite/invite');
        var board = require('./board/board');
        require('../user-card/user-card');
        require('./qrcode/qrcode');
        require('./guess/guess');
        require('./contact/contact');
        require('./winner/winner');

        module.exports = Vue.component('w-sidebar', {
            template: require('./sidebar.tpl'),
            props: ['showInviteQuest', 'showUserCard', 'showHotBoard', 'showContact', 'showHot', 'showQrcode', 'showGuess', 'guessTitle', 'showWinner'],
            methods: {
                showInvite: function () {
                    return this.showInviteQuest && (this.$isServer ? this.$store.state.userData.is_login : wenda.userData.is_login);
                },
                // showWinner: function(){
                //     return true;
                // }
            },
            mounted: function () {
                if (this.$store) {
                    // !this.$store.state.hot && this.$refs.hot && this.$refs.hot.load();
                    // !this.$store.state.board && this.$refs.board && this.$refs.board.load();
                    // !this.$store.state.invite && this.$refs.invite && this.$refs.invite.load();
                } else {
                    // this.$refs.hot && this.$refs.hot.load();
                    // this.$refs.board && this.$refs.board.load();
                    // this.$refs.invite && this.$refs.invite.load();
                }
            }
        });

// 此组件有的地方实现了静态化，有的地方没有，修改时需要全部考虑到
    }, {
        "../user-card/user-card": 125,
        "./board/board": 101,
        "./contact/contact": 103,
        "./guess/guess": 105,
        "./hot/hot": 107,
        "./invite/invite": 109,
        "./qrcode/qrcode": 111,
        "./sidebar.tpl": 114,
        "./winner/winner": 115
    }],
    114: [function (require, module, exports) {
        module.exports = "<div>\n    <div class=\"user-card\" id=\"user-card\">\n        <w-user-card v-if=\"showUserCard\" ref='userCard'></w-user-card>\n    </div>\n    <w-sidebar-board v-if=\"showHotBoard || showHotBoard === undefined\" ref='board'></w-sidebar-board>\n    <!-- <w-sider-qrcode v-if='showQrcode || showQrcode === undefined'></w-sider-qrcode> -->\n    <w-sidebar-hot v-if=\"showHot || showHot === undefined\" ref='hot'></w-sidebar-hot>\n    <w-sidebar-invite v-if=\"showInvite()\" ref='invite'></w-sidebar-invite>\n    <w-sidebar-guess v-show=\"showGuess\"></w-sidebar-guess>\n    <w-sidebar-contact v-show=\"showContact\"></w-sidebar-contact>\n    <!-- <w-sidebar-winner v-show=\"showWinner\"></w-sidebar-winner> -->\n</div>";

    }, {}],
    115: [function (require, module, exports) {
        var acrawler = require('byted-acrawler');

        module.exports = Vue.component('w-sidebar-winner', {
            template: require('./winner.tpl'),
            data: function () {
                return {
                    data: []
                };
            },
            props: [],
            created: function () {

            },
            mounted: function () {
                this.load();
            },
            methods: {
                reportClickMore: function () {
                    window.collectEvent('right_view_more', {
                        // tab_name（所在悟空问答PC站tab）:string:homepage_tab（首页）,myquest_tab（等我来答）,winner_tab（答题赢钱）
                        tab_name: 'winner_tab',
                    });
                },
                reportClickUser: function (item) {
                    window.collectEvent('enter_homepage', {
                        to_user_id: item.user_info.uid, //（作者uid）:int;
                        rank: item.rank_idx,//（当前排名）:int;
                        from_page: 'right_list',//（点击位置）:string: right_list（右侧本周优秀答题官列表页）,view_more_list（周优秀答题官列表）
                    });
                },
                setWinnerConcern: function () {
                    $.cookie('wenda_last_concern_id', '6300775428692904450', {path: '/'});
                },
                replaceImage: function (url) {
                    if (/(p1|p2|p3)\.pstatp\.com/.test(url)) {
                        return url.replace('http://', '//');
                    } else {
                        return url;
                    }
                },
                load: function () {
                    // this.data = [
                    //     {
                    //         "rank_idx": 1,
                    //         "user_info":
                    //         {
                    //             "uid": 1111,
                    //             "name": "瞎写的",
                    //             "avatar_url": "http://p3.pstatp.com/thumb/aae300191ca4fa3146be",
                    //             "auth_type": "1",  //0-黄v 1-金v 2-蓝v
                    //         },
                    //         "bonus": 3,   //奖金数
                    //         "great_answer_num": 6,   //优质回答数
                    //         "score": 100,   //积分
                    //     },
                    //     {
                    //         "rank_idx": 2,
                    //         "user_info":
                    //         {
                    //             "uid": 222,
                    //             "name": "瞎写的",
                    //             "avatar_url": "http://p3.pstatp.com/thumb/aae300191ca4fa3146be",
                    //             "auth_type": "",
                    //         },
                    //         "bonus": 3,   //奖金数
                    //         "great_answer_num": 6,   //优质回答数
                    //         "score": 80,   //积分
                    //     }
                    // ];
                    var _this = this;
                    var data = {
                        // ?count=20&offset=20
                        count: 10,
                        offset: 0,
                    };
                    data._signature = acrawler.sign('6300775428692904450');
                    $.Ajax('/wenda/web/winner/ranking/', {
                        type: 'GET',
                        data: data,
                        success: function (e, r) {
                            var data = [];
                            // ranking_list
                            this.data = r.ranking_list;
                        }.bind(this)
                    });
                },
                showV: function (authInfo) {
                    var authType;
                    if (authInfo) {
                        try {
                            authType = JSON.parse(authInfo).auth_type;
                        } catch (e) {
                        }
                    }
                    return authType && authType != 3;
                }
            }
        });

    }, {"./winner.tpl": 116, "byted-acrawler": 1}],
    116: [function (require, module, exports) {
        module.exports = "<div class=\"winner-wenda\"  data-node=\"winner-wenda\">\n    <div class=\"winner-qa\">\n        <h4>\n            <span>本周优秀答题官</span>\n            <a href=\"/winner_list/\" target=\"_blank\" @click=\"reportClickMore\">更多\n                <i class=\"iconfont icon-ask_arrow_right\">\n                </i>\n            </a>\n        </h4>\n        <div class=\"users\">\n            <div v-for=\"(item,index) in data\" class=\"w-winner-item clearfix\">\n                <i :class=\"index<3?'index red':'index' \">{{item.rank_idx}}</i>\n                <a :href=\"'/user/?uid='+item.user_info.uid\" target=\"_blank\" class=\"avatar\" @click=\"reportClickUser(item)\">\n                    <img :src=\"item.user_info.avatar_url\">\n                </a>\n                <div class=\"desc\">\n                    <a :href=\"'/user/?uid='+item.user_info.uid\" target=\"_blank\" class=\"username only-username\" @click=\"reportClickUser(item)\">\n                        {{item.user_info.name}}\n                        <!--金标-->\n                        <i class=\"iconfont icon-all_newv\" style=\"font-size: 12px; color: rgb(255, 196, 28); vertical-align: 2px;\" v-show=\"item.user_info.auth_type && item.user_info.auth_type != 3\"></i>\n                    </a>\n                    <!--<p>获得{{item.bonus}}元奖金</p>-->\n                </div>\n                <!--\n                <div class=\"number\">\n                    <span><i>{{item.great_answer_num}}</i>个</span>\n                    <p>优秀回答数</p>\n                </div>\n                -->\n            </div>\n        </div>\n    </div>\n</div>\n";

    }, {}],
    117: [function (require, module, exports) {
        var app = new Vue({
            data: function () {
                return {
                    star_order_list: []
                };
            },
            created: function () {
                this.$on('userInfoReady', this.getStartOrderList); // 初始化star_order_list
            },
            methods: {
                getStartOrderList: function () { // 获取星图任务列表
                    var _this = this;
                    if (window.wenda.userData.is_star_writer !== undefined && (+window.wenda.userData.is_star_writer >> 1) & 1) {
                        $.ajax({ // 获取星图任务列表
                            url: '/pluto/v1/star/task/list/?task_type=14',
                            type: 'get',
                            success: function (resp) {
                                if (resp.code === 0 && resp.message === 'success' && resp.data && resp.data.tasks && resp.data.tasks instanceof Array) {
                                    _this.star_order_list = resp.data.tasks;
                                    _this.$emit('starOrderListReady', _this.star_order_list);
                                }
                            }
                        })
                    }
                }
            },
            beforeDestroy: function () {
                this.$off('userInfoReady', this.getStartOrderList);
            }
        });

        module.exports = app;

    }, {}],
    118: [function (require, module, exports) {
        module.exports = Vue.component('base-toast', {
            data: function () {
                return {
                    show: false
                };
            },
            props: {
                existTime: {
                    type: Number,
                    default: 5000
                }
            },
            mounted: function () {
                setTimeout(function () {
                    this.show = true;
                }.bind(this), 0);
                if (this.existTime > 0) {
                    setTimeout(this.disappear, this.existTime);
                }
            },
            methods: {
                disappear: function () {
                    this.show = false;
                    setTimeout(this.remove.bind(this), 1000);
                },
                remove: function () {
                    $(this.$el).remove();
                    this.$destroy();
                }
            }
        });

    }, {}],
    119: [function (require, module, exports) {
        var tpl = require('./toast-tip.tpl');
        var base = require('../base-toast');
        var instance;
        module.exports = base.extend({
            template: tpl,
            props: {
                text: {
                    type: String,
                    default: '暂无更新'
                }
            },
            beforeCreate: function () {
                // this.$options.el = $('<div></div>').prependTo('#main-index-question-list')[0];
            }
        });

    }, {"../base-toast": 118, "./toast-tip.tpl": 120}],
    120: [function (require, module, exports) {
        module.exports = "<div class=\"toast-tip\" :class=\"{show:show}\">\n    <div class=\"toast-tip-inner\">\n        <div class=\"content\" v-show=\"show\">\n            <span>{{text}}</span>\n        </div>\n        <div class=\"close\" @click=\"disappear\" v-show=\"show\">\n            <i class=\"iconfont icon-ask_close\"></i>\n        </div>\n    </div>\n</div>";

    }, {}],
    121: [function (require, module, exports) {
        var tpl = require('./top-toast.tpl');
        var base = require('../base-toast.js');

        module.exports = base.extend({
            template: tpl,
            data: function () {
                return {
                    normalMessage: '',
                    linkMessage: '',
                    linkUrl: ''
                };
            },
            beforeCreate: function () {
                this.$options.el = $('<div></div>').appendTo('body')[0];
            }
        });

    }, {"../base-toast.js": 118, "./top-toast.tpl": 122}],
    122: [function (require, module, exports) {
        module.exports = "<div class='top-toast' :class='{\"show\":show}'>\n    <div class='top-toast-inner'>\n        <a class='top-toast-href' :href='linkUrl' target='_blank'>\n            <i class='iconfont icon-successful'></i>\n            <span>{{linkMessage}}</span>\n        </a>\n    </div>\n</div>\n";

    }, {}],
    123: [function (require, module, exports) {

        var login = require('../widget/login/login');
        var app = new Vue({
            data: function () {
                return {
                    uids: []
                }
            },
            created: function () {
                login.$on('login', this.getNewBtnStatus);
            },
            methods: {
                getNewBtnStatus: function () {
                    if (this.uids.length < 1) {
                        return;
                    }
                    var uidsStr = this.uids.join(',');
                    $.ajax('/wenda/web/user/relation/brow/', {
                        type: 'GET',
                        data: {
                            uid_list: uidsStr
                        },
                        success: function (result) {
                            var relation_list = result.relation_list;
                            var followObj = {};
                            //  将数组转化成对象
                            relation_list.forEach(function (relation) {
                                followObj[relation.uid] = relation.followed;
                            });
                            this.$emit('newBtnStatus', followObj);
                        }.bind(this)
                    });
                }
            }
        });

        module.exports = app;
    }, {"../widget/login/login": 75}],
    124: [function (require, module, exports) {
        var app = new Vue({
            data: function () {
                return {
                    draftData: {}
                };
            },
            created: function () {
                this.$on('initDraftInline', this.initDraftInline); // 初始化草稿answer_inline草稿信息
                this.$on('initDraftAnswer', this.initDraftAnswer); // 初始化草稿answer信息，打开回答弹框
                this.$on('updateDraftContent', this.updateDraftContent); // 更新草稿内容
                this.$on('deleteLocalDraftAfterPost', this.deleteLocalDraftAfterPost); // 用户提交之后删除存储的草稿
            },
            methods: {
                deleteLocalDraftAfterPost: function (qid) {
                    localStorage.getItem(qid) && localStorage.removeItem(qid);
                    this.draftData[qid] && delete (this.draftData[qid]);
                },
                postToDeleteDraft: function (qid) {
                    this.draftData[qid] = {};
                    $.ajax({
                        type: 'POST',
                        dataType: 'json',
                        url: '/wenda/web/commit/deletedraft/',
                        data: {
                            qid: qid,
                        },
                        success: function () {
                            localStorage.getItem(qid) && localStorage.removeItem(qid);
                            this.$emit('postDraftSuccess', qid, '');
                        }.bind(this),
                        error: function () {
                            this.$emit('postDraftFail', qid, '');
                        }.bind(this)
                    });
                },
                postDraft: function (qid, content, url, answerLeave, ansId) {
                    if (window.wenda.userData.is_login == 0) {
                        return false;
                    }
                    var _this = this;
                    var theSame = this.draftData[qid] && this.draftData[qid].lastContent == content && this.draftData[qid].url == url;
                    if (!answerLeave && (theSame)) {
                        this.$emit('theSame', qid);
                        return;
                    } else {
                        if (!_this.draftData[qid]) {
                            _this.draftData[qid] = {};
                        }
                        this.draftData[qid].lastContent = content;
                        this.draftData[qid].url = url;
                    }
                    if (content == '<p><span class="placeholder">我有靠谱回答</span></p>'
                        || content == '<p class="placeholder profit-type"><span class="text">原创回答得现金</span></p>') {
                        this.$emit('withoutContent', qid);
                        return;
                    }
                    var formdata = {
                        qid: qid,
                        content: content,
                    };
                    if (url) {
                        formdata.url = url;
                    }
                    if (ansId) {
                        formdata.ansid = ansId;
                    }
                    var urlToPost = '/wenda/web/commit/postdraft/';
                    $.ajax(urlToPost, {
                        type: 'POST',
                        data: formdata,
                        context: _this,
                        success: function (result) {
                            if (result.err_no == 0) {
                                localStorage.getItem(qid) && localStorage.removeItem(qid);
                                _this.$emit('postDraftSuccess', qid, content, url, answerLeave, ansId);
                            }
                        },
                        error: function () {
                            this.$emit('postDraftFail', qid, content, url, answerLeave, ansId);
                        }.bind(this)
                    });
                },
                updateDraftContent: function (qid, content, url, answerLeave, ansId) {
                    if (window.wenda.userData.is_login == 1) {
                        if (content.length == 0 && url.length == 0) {
                            this.postToDeleteDraft(qid);
                        } else {
                            this.postDraft(qid, content, url, answerLeave, ansId);
                        }
                    } else {
                        var obj = {
                            content: content,
                            url: url
                        };
                        localStorage.setItem(qid, JSON.stringify(obj));
                        this.draftData[qid] = {
                            lastContent: content,
                            url: url
                        };
                        this.$emit('postDraftSuccess', qid, content, url, answerLeave, ansId);
                    }
                },
                initDraftInline: function (qid) {
                    this.initDraft(qid, 'initContentInline');
                },
                initDraftAnswer: function (qid) {
                    this.initDraft(qid, 'initContentAnswer');
                },
                initDraft: function (qid, type) {
                    // var initContentStr, initContentObj, initContent, initURl;
                    if (window.wenda.userData.is_login == 0) {
                        // initContentStr = localStorage.getItem(qid);
                        // if (initContentStr) {
                        //     initContentObj = JSON.parse(initContentStr);
                        //     initContent = initContentObj.content;
                        //     initURl = initContentObj.url;
                        // }
                        // if (!this.draftData[qid]) {
                        //     this.draftData[qid] = {};
                        // }
                        // this.draftData[qid].lastContent = initContent;
                        // this.draftData[qid].url = initURl;
                        // this.$emit(type, qid, {
                        //     content: initContent,
                        //     url: initURl
                        // });
                        this.getLocalContent(qid, type);
                    } else {
                        this.getInitContentByRequest(qid, type);
                    }
                },
                getInitContentByRequest: function (qid, type) {
                    if (window.wenda.userData.is_login == 0) {
                        return;
                    }
                    var _this = this;
                    var clearCache = Math.random();
                    $.ajax({
                        url: '/wenda/web/draft/detail/brow/?qid=' + qid + '&clearCache=' + clearCache,
                        type: 'GET',
                        dataType: 'json',
                        success: function (result) {
                            if (result.err_no == 0) {
                                var draftAndQuestion = result.question_draft;
                                if (!_this.draftData[qid]) {
                                    _this.draftData[qid] = {};
                                }
                                _this.draftData[qid].lastContent = draftAndQuestion ? draftAndQuestion.draft.content : '';
                                _this.draftData[qid].url = draftAndQuestion ? draftAndQuestion.draft.link_url : '';
                                localStorage.getItem(qid) && localStorage.removeItem(qid);
                                var sendData = {};
                                if (draftAndQuestion) {
                                    sendData = draftAndQuestion.draft;
                                    sendData.url = sendData.link_url;
                                }
                                _this.$emit(type, qid, sendData);
                            } else {
                                _this.getLocalContent(qid, type);
                            }
                        }
                    });
                },
                getLocalContent: function (qid, type) {
                    var initContentObj, initContentStr, initContent, initURl;
                    initContentStr = $.localStorage.getItem(qid);
                    if (initContentStr) {
                        initContentObj = JSON.parse(initContentStr);
                        initContent = initContentObj.content;
                        initURl = initContentObj.url;
                    }
                    if (!this.draftData[qid]) {
                        this.draftData[qid] = {};
                    }
                    this.draftData[qid].lastContent = initContent;
                    this.draftData[qid].url = initURl;
                    this.$emit(type, qid, {
                        content: initContent,
                        url: initURl
                    });
                }
            },
            beforeDestroy: function () {
                this.$off('initDraftInline', this.initDraftInline); // 初始化草稿answer_inline草稿信息
                this.$off('initDraftAnswer', this.initDraftAnswer); // 打开回答弹框
                this.$off('updateDraftContent', this.updateDraftContent); // 更新草稿内容
                this.$off('deleteLocalDraftAfterPost', this.deleteLocalDraftAfterPost);
            }
        });

        module.exports = app;
    }, {}],
    125: [function (require, module, exports) {
        var tpl = require('./user-card.tpl');
        var wFollowBtn = require('../follow-btn/btn');

        module.exports = Vue.component('w-user-card', {
            template: tpl,
            data: function () {
                return {
                    init: false,
                    userData: {},
                    oldDiggedCount: 999999999,
                    oldFansCount: 999999999,
                    total_ans_count: 0,
                    digged_count: 0,
                    fans: 0,
                    anonymous_fans: 0
                };
            },
            computed: {
                showFollowBtn: function () {
                    return this.uid && this.uid != this.$store.state.userData.user_id;
                },
                userCard: function () {
                    if (this.$store && this.$store.state.userCard) {
                        return this.$store.state.userCard;
                    } else {
                        return this.$isServer ? {} : wenda.userCard || {};
                    }
                },
                isMine: function () {
                    var user_id = this.$store ? this.$store.state.userData.user_id : wenda.userData.user_id;
                    return this.uid == user_id || this.userData.user_id == user_id;
                },
                personCenterText: function () {
                    return this.isMine ? '个人主页' : 'Ta的主页';
                },
                showV: function () {
                    var authInfo = this.userData.user_auth_info;
                    var authType;
                    if (authInfo) {
                        try {
                            authType = JSON.parse(authInfo).auth_type;
                        } catch (e) {
                        }
                    }
                    return authType && authType != 3;
                }
            },
            props: ['uid', 'attentionPage', 'editUserPage'],

            methods: {
                handleDiggAndFansCount: function (uidForLogin) {
                    if (wenda.userData.user_id && this.uid && wenda.userData.user_id != this.uid) {
                        return;
                    }
                    var uid = this.uid || this.userCard.user_id || wenda.userData.user_id || uidForLogin;
                    var str = 'addFansAndDigCount_' + uid;
                    var oldData = localStorage.getItem(str);
                    var oldDataObj = oldData ? JSON.parse(oldData) : {};
                    this.oldDiggedCount = (oldDataObj.oldDiggedCount >= 0) ? oldDataObj.oldDiggedCount : this.userData.digged_count;
                    this.oldFansCount = (oldDataObj.oldFansCount >= 0) ? oldDataObj.oldFansCount : (this.userData.fans + this.userData.anonymous_fans);

                    oldDataObj.oldDiggedCount = this.userData.digged_count;
                    oldDataObj.oldFansCount = this.userData.fans + this.userData.anonymous_fans;
                    oldData = JSON.stringify(oldDataObj);
                    localStorage.setItem(str, oldData);
                }
            },
            created: function () {
                if (this.$store && this.userCard.user_id == this.uid && this.uid != undefined) {
                    this.userData = this.userCard;
                    this.init = true;
                }
            },
            mounted: function () {
                var _this = this;

                function logined() {
                    if (_this.init) {
                        _this.handleDiggAndFansCount();
                        return;
                    }
                    $.Ajax('/wenda/web/user/card/', {
                        type: 'GET',
                        data: {
                            other_uid: _this.uid,
                            _: new Date().getTime()
                        },
                        success: function (e, r) {
                            _this.userData = r.user_info;
                            _this.$set(_this.userData, 'media_id', r.media_id);
                            _this.$set(_this.userData, 'total_ans_count', r.total_ans_count);
                            _this.$set(_this.userData, 'digged_count', r.digged_count);
                            _this.$set(_this.userData, 'fans', r.fans);
                            _this.$set(_this.userData, 'anonymous_fans', r.anonymous_fans);
                            _this.$set(_this.userData, 'follow_question_count', r.follow_question_count);
                            _this.handleDiggAndFansCount(r.user_info.user_id);
                            _this.init = true;
                        }
                    });
                }

                if (this.uid || wenda.userData.user_id || this.userCard.user_id) {
                    logined();
                } else {
                    $('body').on('login', logined);
                }
            },
            filters: {
                protocal: function (url = '') {
                    return url.replace(/^http(s)?:\/\//g, '//');
                }
            }
        });

    }, {"../follow-btn/btn": 52, "./user-card.tpl": 126}],
    126: [function (require, module, exports) {
        module.exports = "<div id=\"widget-usercard\" class=\"w-usercard\" data-log-from=\"ProfileCard\" v-if=\"init\">\n    <a class=\"userinfo clearfix\" target=\"_blank\" :href=\"'/user/?uid=' + userData.user_id\" data-log=\"Visit_Profile|From_\">\n        <div class=\"avatar\">\n            <img :src=\"userData.avatar_url | protocal\" alt=\"\">\n        </div>\n        <div class=\"user-desc\">\n            <h2 class=\"user-name\">\n                {{userData.uname}}\n                <i class=\"iconfont icon-all_newv\" style=\"font-size: 12px;color: #ffc41c;font-weight: normal;\" v-if=\"showV\"></i>\n            </h2>\n            <div class=\"user-intro\" :class=\"{'start-width-「':/^「/.test(userData.user_intro)}\">\n                {{userData.user_intro}}\n            </div>\n            <div class=\"user-title\">\n                {{userData.description || '我很懒什么都不留下'}}\n            </div>\n            <w-follow-btn v-if=\"showFollowBtn\" :userData=\"userData\"></w-follow-btn>\n        </div>\n    </a>\n    <div class=\"user-data clearfix\">\n        <div class=\"user-data-single user-data-answer\">\n            <a href=\"/user/?type=0\" target=\"_blank\">\n            <h3>\n                {{init ? userData.total_ans_count : '--'}}\n            </h3>\n            <span>回答</span>\n            </a>\n        </div>\n        <a class=\"user-data-single user-data-digg\" href=\"/user/?type=0\" target=\"_blank\">\n            <h3>\n            {{init ? userData.digged_count :'--'}}\n            </h3>\n            <span>收到赞</span>\n            <div class=\"add-follow-fans\" v-if=\"(userData.digged_count > oldDiggedCount) && isMine\">\n                   +{{userData.digged_count - oldDiggedCount}}\n            </div>\n        </a>\n        <a class=\"user-data-single user-data-follow\" href=\"/attention/?type=2\" target=\"_blank\" data-log=\"Visit_FansTab|From_\">\n            <h3>\n                {{ init ? userData.fans +  userData.anonymous_fans: '--' }}\n            </h3>\n            <span>粉丝</span>\n            <div class=\"add-follow-fans\" v-if=\"(userData.fans + userData.anonymous_fans > oldFansCount) && isMine\">\n                +{{userData.fans + userData.anonymous_fans - oldFansCount}}\n            </div>\n        </a>\n    </div>\n</div>\n";

    }, {}],
    127: [function (require, module, exports) {

        var base64EncodeChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
        var base64DecodeChars = [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 62, -1, -1, -1, 63, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, -1, -1, -1, -1, -1, -1, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, -1, -1, -1, -1, -1, -1, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, -1, -1, -1, -1, -1];
        var urlParam = {};

        /**
         * base64编码
         * @param {Object} str
         */
        function base64encode(str) {
            var out, i, len;
            var c1, c2, c3;
            len = str.length;
            i = 0;
            out = '';
            while (i < len) {
                c1 = str.charCodeAt(i++) & 0xff;
                if (i == len) {
                    out += base64EncodeChars.charAt(c1 >> 2);
                    out += base64EncodeChars.charAt((c1 & 0x3) << 4);
                    out += '==';
                    break;
                }
                c2 = str.charCodeAt(i++);
                if (i == len) {
                    out += base64EncodeChars.charAt(c1 >> 2);
                    out += base64EncodeChars.charAt(((c1 & 0x3) << 4) | ((c2 & 0xF0) >> 4));
                    out += base64EncodeChars.charAt((c2 & 0xF) << 2);
                    out += '=';
                    break;
                }
                c3 = str.charCodeAt(i++);
                out += base64EncodeChars.charAt(c1 >> 2);
                out += base64EncodeChars.charAt(((c1 & 0x3) << 4) | ((c2 & 0xF0) >> 4));
                out += base64EncodeChars.charAt(((c2 & 0xF) << 2) | ((c3 & 0xC0) >> 6));
                out += base64EncodeChars.charAt(c3 & 0x3F);
            }
            return out;
        }

        /**
         * base64解码
         * @param {Object} str
         */
        function base64decode(str) {
            var c1, c2, c3, c4;
            var i, len, out;
            len = str.length;
            i = 0;
            out = '';
            while (i < len) {

                /* c1 */
                do {
                    c1 = base64DecodeChars[str.charCodeAt(i++) & 0xff];
                }
                while (i < len && c1 == -1);
                if (c1 == -1) {
                    break;
                }

                /* c2 */
                do {
                    c2 = base64DecodeChars[str.charCodeAt(i++) & 0xff];
                }
                while (i < len && c2 == -1);
                if (c2 == -1) {
                    break;
                }
                out += String.fromCharCode((c1 << 2) | ((c2 & 0x30) >> 4));

                /* c3 */
                do {
                    c3 = str.charCodeAt(i++) & 0xff;
                    if (c3 == 61) {
                        return out;
                    }
                    c3 = base64DecodeChars[c3];
                }
                while (i < len && c3 == -1);
                if (c3 == -1) {
                    break;
                }
                out += String.fromCharCode(((c2 & 0XF) << 4) | ((c3 & 0x3C) >> 2));

                /* c4 */
                do {
                    c4 = str.charCodeAt(i++) & 0xff;
                    if (c4 == 61) {
                        return out;
                    }
                    c4 = base64DecodeChars[c4];
                }
                while (i < len && c4 == -1);
                if (c4 == -1) {
                    break;
                }
                out += String.fromCharCode(((c3 & 0x03) << 6) | c4);
            }
            return out;
        }

        /**
         * utf16转utf8
         * @param {Object} str
         */
        function utf16to8(str) {
            var out, i, len, c;
            out = '';
            len = str.length;
            for (i = 0; i < len; i++) {
                c = str.charCodeAt(i);
                if ((c >= 0x0001) && (c <= 0x007F)) {
                    out += str.charAt(i);
                } else if (c > 0x07FF) {
                    out += String.fromCharCode(0xE0 | ((c >> 12) & 0x0F));
                    out += String.fromCharCode(0x80 | ((c >> 6) & 0x3F));
                    out += String.fromCharCode(0x80 | ((c >> 0) & 0x3F));
                } else {
                    out += String.fromCharCode(0xC0 | ((c >> 6) & 0x1F));
                    out += String.fromCharCode(0x80 | ((c >> 0) & 0x3F));
                }
            }
            return out;
        }

        /**
         * utf8转utf16
         * @param {Object} str
         */
        function utf8to16(str) {
            var out, i, len, c;
            var char2, char3;
            out = '';
            len = str.length;
            i = 0;
            while (i < len) {
                c = str.charCodeAt(i++);
                switch (c >> 4) {
                    case 0:
                    case 1:
                    case 2:
                    case 3:
                    case 4:
                    case 5:
                    case 6:
                    case 7:
                        // 0xxxxxxx
                        out += str.charAt(i - 1);
                        break;
                    case 12:
                    case 13:
                        // 110x xxxx 10xx xxxx
                        char2 = str.charCodeAt(i++);
                        out += String.fromCharCode(((c & 0x1F) << 6) | (char2 & 0x3F));
                        break;
                    case 14:
                        // 1110 xxxx10xx xxxx10xx xxxx
                        char2 = str.charCodeAt(i++);
                        char3 = str.charCodeAt(i++);
                        out += String.fromCharCode(((c & 0x0F) << 12) | ((char2 & 0x3F) << 6) | ((char3 & 0x3F) << 0));
                        break;
                }
            }
            return out;
        }

        function getOriginSource(queryObj = {}) {
            // 从query取， 并且判断用户是否在浏览器直接粘贴链接
            // 需求：https://bytedance.feishu.cn/docs/doccnvgmEtr6TtFGqiZisBSqNFX
            return (document && document.referrer) === '' ? 'question_click_write_answer_link' : (queryObj.origin_source || '')
            // var queryObj = $.querystringParse(location.search.replace('?', '')) || {};
            //         // 从query取， 并且判断用户是否在浏览器直接粘贴链接
            //         // 需求：https://bytedance.feishu.cn/docs/doccnvgmEtr6TtFGqiZisBSqNFX
            //         var origin_source = document.referrer === '' ? 'question_click_write_answer_link' : (queryObj.origin_source || '');
        }

        module.exports = {
            // 格式化数字
            formatNumber: function (n) {
                if (n < 1e4) {
                    return n;
                }
                if (n < 1e5) {
                    var res = (n / 1e4).toFixed(1);
                    return res.split('.')[1] == '0' ? res.split('.')[0] + '万' : res + '万';
                }
                if (n < 1e8) {
                    return Math.floor(n / 1e4) + '万';
                }
                if (n < 1e9) {
                    var res = (n / 1e8).toFixed(1);
                    return res.split('.')[1] == '0' ? res.split('.')[0] + '亿' : res + '亿';
                }
                return Math.floor(n / 1e8) + '亿';
            },
            // 格式化日期为所需的格式
            formatDate: function (source, pattern) {
                if ('string' !== typeof pattern) {
                    return source.toString();
                }

                function replacer(patternPart, result) {
                    pattern = pattern.replace(patternPart, result);
                }

                var pad = function (source, length) {
                        var pre = '',
                            negative = (source < 0),
                            string = String(Math.abs(source));

                        if (string.length < length) {
                            pre = (new Array(length - string.length + 1)).join('0');
                        }

                        return (negative ? '-' : '') + pre + string;
                    },

                    year = source.getFullYear(),
                    month = source.getMonth() + 1,
                    date2 = source.getDate(),
                    hours = source.getHours(),
                    minutes = source.getMinutes(),
                    seconds = source.getSeconds();

                replacer(/yyyy/g, pad(year, 4));
                replacer(/yy/g, pad(parseInt(year.toString().slice(2), 10), 2));
                replacer(/MM/g, pad(month, 2));
                replacer(/M/g, month);
                replacer(/dd/g, pad(date2, 2));
                replacer(/d/g, date2);

                replacer(/HH/g, pad(hours, 2));
                replacer(/H/g, hours);
                replacer(/hh/g, pad(hours % 12, 2));
                replacer(/h/g, hours % 12);
                replacer(/mm/g, pad(minutes, 2));
                replacer(/m/g, minutes);
                replacer(/ss/g, pad(seconds, 2));
                replacer(/s/g, seconds);

                return pattern;
            },
            getRelateTime: function (time, now) {
                var diff = now - time;
                if (diff < 60) {
                    return '刚刚';
                } else if (diff < 3600) {
                    return Math.floor(diff / 60) + '分钟前';
                } else if (diff < 3600 * 24) {
                    return Math.floor(diff / 60 / 60) + '小时前';
                } else if (diff < 3600 * 24 * 7) {
                    return Math.floor(diff / 60 / 60 / 24) + '天前';
                } else {
                    return this.formatDate2(new Date(time * 1000), 'Y-m-d');
                }
            },
            highlight: function (content, highList) {
                var text = '';
                var length = content.length;
                var origin = 0;
                highList = highList.sort(function (a, b) {
                    return a[0] - b[0];
                });
                highList.forEach(function (v, i) {
                    var start = v[0];
                    var l = v[1];
                    text += (_.escape(content.substring(origin, start)) + '<span style="color:#FF6534">' + _.escape(content.substr(start, l)) + '</span>');
                    origin = start + l;

                });
                text += _.escape(content.substring(origin, length));
                return text;
            },
            formatDate2: function (a, b) {
                b = b || 'm月d日 H:i:s';
                return b.replace('Y', a.getFullYear()).replace('y', (a.getFullYear() % 100).preFull()).replace('m', (a.getMonth() + 1).preFull()).replace('d', a.getDate().preFull()).replace('H', a.getHours().preFull()).replace('i', a.getMinutes().preFull()).replace('s', a.getSeconds().preFull());
            },
            maxLength: function (text, limit) {
                if (text.length > limit) {
                    return text.substring(0, limit) + '...';
                } else {
                    return text;
                }
            },
            getUrlParam: function getUrlParam(key) {
                if (!urlParam.__inited) {
                    var search = location.search.substr(1);
                    var keyAndValue;
                    search.split('&').forEach(function (item) {
                        keyAndValue = item.split('=');
                        if (keyAndValue.length > 1) {
                            urlParam[keyAndValue[0]] = keyAndValue[1];
                        } else {
                            urlParam[keyAndValue[0]] = keyAndValue[0];
                        }
                    });
                    urlParam.__inited = true;
                }
                return urlParam[key];
            },
            foldImage: function (content, aid) {
                var reg = /(<img[^>]+?fold="1"[^>]*)>/ig;
                // var reg = /(<img.[^>]*)>/ig;
                var template = '<i class="iconfont icon-img" data-log="UnfoldImage|From_" data-log-label="' + aid + '"></i><a target="_blank" href="/notebook/?tab=3&question=answer" class="fold-btn" style="display:none" data-log="SeeFoldReason|From_"><i class="iconfont icon-prompt"></i>点此查看图片折叠原因</a>';
                return content.replace(reg, function ($0, $1) {
                    return $1 + ' style="display:none">' + template;
                });
            },
            bindfoldImageEvent: function (content) {
                var doms = content.querySelectorAll('.rich-text img[fold="1"]');
                for (var i = 0; i < doms.length; i++) {
                    var item = doms[i];
                    var unfoldBtn = item.nextSibling;
                    var foldBtn = unfoldBtn && unfoldBtn.nextSibling;
                    if (unfoldBtn && foldBtn) {
                        unfoldBtn.onclick = unfold.bind(null, item, unfoldBtn, foldBtn);
                    }
                }

                function unfold(item, unfoldBtn, foldBtn) {
                    item.style.display = 'block';
                    unfoldBtn.style.display = 'none';
                    foldBtn.style.display = 'block';
                }
            },

            base64encode: base64encode,
            base64decode: base64decode,
            utf16to8: utf16to8,
            utf8to16: utf8to16,
            getOriginSource: getOriginSource,
        };
        String.prototype.preFull = function (a, b) {
            var c = this.toString();
            for (a = a || 2,
                     b = b || '0'; c.length < a;) {
                c = b + c;
            }
            return c;
        };
        Number.prototype.preFull = function (a, b) {
            return (this + '').preFull(a, b);
        };

        if (typeof window !== 'undefined' && window.__INITIAL_STATE__ && window.__INITIAL_STATE__.userData) {
            document.cookie = 'cookie_tt_page=' + (__INITIAL_STATE__.userData.cookie_tt_page || '') + ';path=/';
        }
    }, {}],
    128: [function (require, module, exports) {
        module.exports = Vue.component('w-white-list-card', {
            template: require('./white-list-card.tpl'),
            props: ['user']
        });
    }, {"./white-list-card.tpl": 129}],
    129: [function (require, module, exports) {
        module.exports = "<div class=\"w-white-list-card\">\n    <div class=\"title\">悟空问答官方战略合作伙伴</div>\n    <div class=\"cooperation-content\">\n        <a class=\"cooperation-avatar\" :href=\"'/user/?uid=' + user.user_id\">\n            <img id=\"cooperation-img\" :src=\"user.avatar_url\"/>\n        </a>\n        <a class=\"cooperation-detail\">\n            <a class=\"cooperation-name\" :href=\"'/user/?uid=' + user.user_id\">{{user.uname}}</a>\n            <i class=\"iconfont icon-all_newv\" v-if=\"user.is_verify\"></i>\n            <a class=\"link\" :href=\"user.strategy_cooperation.link.indexOf('http') < 0 ? ('http://' + user.strategy_cooperation.link) : user.strategy_cooperation.link\">查看官方网站</a>\n            <a class=\"cooperation-intro\">{{user.strategy_cooperation.profile}}</a>\n        </a>\n    </div>\n</div>";

    }, {}]
}, {}, [17]);
