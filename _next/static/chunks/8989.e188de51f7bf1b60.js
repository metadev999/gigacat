"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8989],{5185:(e,t,r)=>{r.d(t,{o:()=>c});var o=r(20513),i=r(6751);let a=(0,o.BX)({isLegalCheckboxChecked:!1}),c={state:a,subscribe:e=>(0,o.B1)(a,()=>e(a)),subscribeKey:(e,t)=>(0,i.u$)(a,e,t),setIsLegalCheckboxChecked(e){a.isLegalCheckboxChecked=e}}},61735:(e,t,r)=>{var o=r(80291),i=r(32827),a=r(5185),c=r(68129),l=r(97778),n=r(71726),s=r(79346),u=r(98255),d=r(70562);r(43666);var h=r(67998),p=r(45857);let b=(0,n.AH)`
  label {
    display: flex;
    align-items: center;
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    column-gap: var(--wui-spacing-1xs);
  }

  label > input[type='checkbox'] {
    height: 0;
    width: 0;
    opacity: 0;
    pointer-events: none;
    position: absolute;
  }

  label > span {
    width: var(--wui-spacing-xl);
    height: var(--wui-spacing-xl);
    min-width: var(--wui-spacing-xl);
    min-height: var(--wui-spacing-xl);
    border-radius: var(--wui-border-radius-3xs);
    border-width: 1px;
    border-style: solid;
    border-color: var(--wui-color-gray-glass-010);
    display: flex;
    align-items: center;
    justify-content: center;
    transition: background-color var(--wui-ease-out-power-1) var(--wui-duration-lg);
    will-change: background-color;
  }

  label > span:hover,
  label > input[type='checkbox']:focus-visible + span {
    background-color: var(--wui-color-gray-glass-010);
  }

  label input[type='checkbox']:checked + span {
    background-color: var(--wui-color-blue-base-90);
  }

  label > span > wui-icon {
    opacity: 0;
    transition: opacity var(--wui-ease-out-power-1) var(--wui-duration-lg);
    will-change: opacity;
  }

  label > input[type='checkbox']:checked + span wui-icon {
    opacity: 1;
  }
`;var g=function(e,t,r,o){var i,a=arguments.length,c=a<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,r,o);else for(var l=e.length-1;l>=0;l--)(i=e[l])&&(c=(a<3?i(c):a>3?i(t,r,c):i(t,r))||c);return a>3&&c&&Object.defineProperty(t,r,c),c};let f=class extends n.WF{constructor(){super(...arguments),this.inputElementRef=(0,d._)(),this.checked=void 0}render(){return(0,n.qy)`
      <label>
        <input
          ${(0,d.K)(this.inputElementRef)}
          ?checked=${(0,u.J)(this.checked)}
          type="checkbox"
          @change=${this.dispatchChangeEvent}
        />
        <span>
          <wui-icon name="checkmarkBold" color="inverse-100" size="xxs"></wui-icon>
        </span>
        <slot></slot>
      </label>
    `}dispatchChangeEvent(){this.dispatchEvent(new CustomEvent("checkboxChange",{detail:this.inputElementRef.value?.checked,bubbles:!0,composed:!0}))}};f.styles=[h.W5,b],g([(0,s.MZ)({type:Boolean})],f.prototype,"checked",void 0),f=g([(0,p.E)("wui-checkbox")],f),r(85893);let w=(0,o.AH)`
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  wui-checkbox {
    padding: var(--wui-spacing-s);
  }
  a {
    text-decoration: none;
    color: var(--wui-color-fg-150);
    font-weight: 500;
  }
`;var v=function(e,t,r,o){var i,a=arguments.length,c=a<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,r,o);else for(var l=e.length-1;l>=0;l--)(i=e[l])&&(c=(a<3?i(c):a>3?i(t,r,c):i(t,r))||c);return a>3&&c&&Object.defineProperty(t,r,c),c};let y=class extends o.WF{constructor(){super(),this.unsubscribe=[],this.checked=a.o.state.isLegalCheckboxChecked,this.unsubscribe.push(a.o.subscribeKey("isLegalCheckboxChecked",e=>{this.checked=e}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){let{termsConditionsUrl:e,privacyPolicyUrl:t}=c.H.state,r=c.H.state.features?.legalCheckbox;return(e||t)&&r?(0,o.qy)`
      <wui-checkbox
        ?checked=${this.checked}
        @checkboxChange=${this.onCheckboxChange.bind(this)}
        data-testid="wui-checkbox"
      >
        <wui-text color="fg-250" variant="small-400" align="left">
          I agree to our ${this.termsTemplate()} ${this.andTemplate()} ${this.privacyTemplate()}
        </wui-text>
      </wui-checkbox>
    `:null}andTemplate(){let{termsConditionsUrl:e,privacyPolicyUrl:t}=c.H.state;return e&&t?"and":""}termsTemplate(){let{termsConditionsUrl:e}=c.H.state;return e?(0,o.qy)`<a rel="noreferrer" target="_blank" href=${e}>terms of service</a>`:null}privacyTemplate(){let{privacyPolicyUrl:e}=c.H.state;return e?(0,o.qy)`<a rel="noreferrer" target="_blank" href=${e}>privacy policy</a>`:null}onCheckboxChange(){a.o.setIsLegalCheckboxChecked(!this.checked)}};y.styles=[w],v([(0,i.wk)()],y.prototype,"checked",void 0),y=v([(0,l.EM)("w3m-legal-checkbox")],y)},20669:(e,t,r)=>{var o=r(80291),i=r(68129),a=r(97778);r(58301),r(85893),r(19291);let c=(0,o.AH)`
  :host > wui-flex {
    background-color: var(--wui-color-gray-glass-005);
    margin-top: var(--wui-spacing-s);
  }

  a {
    text-decoration: none;
    color: var(--wui-color-fg-175);
    font-weight: 500;
  }
`,l=class extends o.WF{render(){let{termsConditionsUrl:e,privacyPolicyUrl:t}=i.H.state,r=i.H.state.features?.legalCheckbox;return(e||t)&&!r?(0,o.qy)`
      <wui-flex flexDirection="column">
        <wui-flex .padding=${["m","s","s","s"]} justifyContent="center">
          <wui-text color="fg-250" variant="small-400" align="center">
            By connecting your wallet, you agree to our <br />
            ${this.termsTemplate()} ${this.andTemplate()} ${this.privacyTemplate()}
          </wui-text>
        </wui-flex>
        <wui-ux-by-reown></wui-ux-by-reown>
      </wui-flex>
    `:null}andTemplate(){let{termsConditionsUrl:e,privacyPolicyUrl:t}=i.H.state;return e&&t?"and":""}termsTemplate(){let{termsConditionsUrl:e}=i.H.state;return e?(0,o.qy)`<a href=${e}>Terms of Service</a>`:null}privacyTemplate(){let{privacyPolicyUrl:e}=i.H.state;return e?(0,o.qy)`<a href=${e}>Privacy Policy</a>`:null}};l.styles=[c],l=function(e,t,r,o){var i,a=arguments.length,c=a<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,r,o);else for(var l=e.length-1;l>=0;l--)(i=e[l])&&(c=(a<3?i(c):a>3?i(t,r,c):i(t,r))||c);return a>3&&c&&Object.defineProperty(t,r,c),c}([(0,a.EM)("w3m-legal-footer")],l)},46783:(e,t,r)=>{r(38542)},66571:(e,t,r)=>{r(43666)},51482:(e,t,r)=>{var o=r(71726),i=r(79346),a=r(98255);r(13076);var c=r(67998),l=r(45857);let n=(0,o.AH)`
  button {
    padding: var(--wui-spacing-4xs) var(--wui-spacing-xxs);
    border-radius: var(--wui-border-radius-3xs);
    background-color: transparent;
    color: var(--wui-color-accent-100);
  }

  button:disabled {
    background-color: transparent;
    color: var(--wui-color-gray-glass-015);
  }

  button:hover {
    background-color: var(--wui-color-gray-glass-005);
  }
`;var s=function(e,t,r,o){var i,a=arguments.length,c=a<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,r,o);else for(var l=e.length-1;l>=0;l--)(i=e[l])&&(c=(a<3?i(c):a>3?i(t,r,c):i(t,r))||c);return a>3&&c&&Object.defineProperty(t,r,c),c};let u=class extends o.WF{constructor(){super(...arguments),this.tabIdx=void 0,this.disabled=!1,this.color="inherit"}render(){return(0,o.qy)`
      <button ?disabled=${this.disabled} tabindex=${(0,a.J)(this.tabIdx)}>
        <slot name="iconLeft"></slot>
        <wui-text variant="small-600" color=${this.color}>
          <slot></slot>
        </wui-text>
        <slot name="iconRight"></slot>
      </button>
    `}};u.styles=[c.W5,c.fD,n],s([(0,i.MZ)()],u.prototype,"tabIdx",void 0),s([(0,i.MZ)({type:Boolean})],u.prototype,"disabled",void 0),s([(0,i.MZ)()],u.prototype,"color",void 0),u=s([(0,l.E)("wui-link")],u)},39515:(e,t,r)=>{var o=r(71726),i=r(79346),a=r(67998),c=r(45857);let l=(0,o.AH)`
  :host {
    display: block;
    width: var(--wui-box-size-md);
    height: var(--wui-box-size-md);
  }

  svg {
    width: var(--wui-box-size-md);
    height: var(--wui-box-size-md);
  }

  rect {
    fill: none;
    stroke: var(--wui-color-accent-100);
    stroke-width: 4px;
    stroke-linecap: round;
    animation: dash 1s linear infinite;
  }

  @keyframes dash {
    to {
      stroke-dashoffset: 0px;
    }
  }
`;var n=function(e,t,r,o){var i,a=arguments.length,c=a<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,r,o);else for(var l=e.length-1;l>=0;l--)(i=e[l])&&(c=(a<3?i(c):a>3?i(t,r,c):i(t,r))||c);return a>3&&c&&Object.defineProperty(t,r,c),c};let s=class extends o.WF{constructor(){super(...arguments),this.radius=36}render(){return this.svgLoaderTemplate()}svgLoaderTemplate(){let e=this.radius>50?50:this.radius,t=36-e;return(0,o.qy)`
      <svg viewBox="0 0 110 110" width="110" height="110">
        <rect
          x="2"
          y="2"
          width="106"
          height="106"
          rx=${e}
          stroke-dasharray="${116+t} ${245+t}"
          stroke-dashoffset=${360+1.75*t}
        />
      </svg>
    `}};s.styles=[a.W5,l],n([(0,i.MZ)({type:Number})],s.prototype,"radius",void 0),s=n([(0,c.E)("wui-loading-thumbnail")],s)},19291:(e,t,r)=>{var o=r(71726);r(43666),r(13076),r(7202);var i=r(67998),a=r(45857);let c=(0,o.AH)`
  .reown-logo {
    height: var(--wui-spacing-xxl);
  }
`,l=class extends o.WF{render(){return(0,o.qy)`
      <wui-flex
        justifyContent="center"
        alignItems="center"
        gap="xs"
        .padding=${["0","0","l","0"]}
      >
        <wui-text variant="small-500" color="fg-100"> UX by </wui-text>
        <wui-icon name="reown" size="xxxl" class="reown-logo"></wui-icon>
      </wui-flex>
    `}};l.styles=[i.W5,i.fD,c],l=function(e,t,r,o){var i,a=arguments.length,c=a<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,r,o);else for(var l=e.length-1;l>=0;l--)(i=e[l])&&(c=(a<3?i(c):a>3?i(t,r,c):i(t,r))||c);return a>3&&c&&Object.defineProperty(t,r,c),c}([(0,a.E)("wui-ux-by-reown")],l)},36e3:(e,t,r)=>{var o=r(71726),i=r(79346),a=r(45857);let c=(0,o.AH)`
  :host {
    display: block;
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-005);
    background: linear-gradient(
      120deg,
      var(--wui-color-bg-200) 5%,
      var(--wui-color-bg-200) 48%,
      var(--wui-color-bg-300) 55%,
      var(--wui-color-bg-300) 60%,
      var(--wui-color-bg-300) calc(60% + 10px),
      var(--wui-color-bg-200) calc(60% + 12px),
      var(--wui-color-bg-200) 100%
    );
    background-size: 250%;
    animation: shimmer 3s linear infinite reverse;
  }

  :host([variant='light']) {
    background: linear-gradient(
      120deg,
      var(--wui-color-bg-150) 5%,
      var(--wui-color-bg-150) 48%,
      var(--wui-color-bg-200) 55%,
      var(--wui-color-bg-200) 60%,
      var(--wui-color-bg-200) calc(60% + 10px),
      var(--wui-color-bg-150) calc(60% + 12px),
      var(--wui-color-bg-150) 100%
    );
    background-size: 250%;
  }

  @keyframes shimmer {
    from {
      background-position: -250% 0;
    }
    to {
      background-position: 250% 0;
    }
  }
`;var l=function(e,t,r,o){var i,a=arguments.length,c=a<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,r,o);else for(var l=e.length-1;l>=0;l--)(i=e[l])&&(c=(a<3?i(c):a>3?i(t,r,c):i(t,r))||c);return a>3&&c&&Object.defineProperty(t,r,c),c};let n=class extends o.WF{constructor(){super(...arguments),this.width="",this.height="",this.borderRadius="m",this.variant="default"}render(){return this.style.cssText=`
      width: ${this.width};
      height: ${this.height};
      border-radius: clamp(0px,var(--wui-border-radius-${this.borderRadius}), 40px);
    `,(0,o.qy)`<slot></slot>`}};n.styles=[c],l([(0,i.MZ)()],n.prototype,"width",void 0),l([(0,i.MZ)()],n.prototype,"height",void 0),l([(0,i.MZ)()],n.prototype,"borderRadius",void 0),l([(0,i.MZ)()],n.prototype,"variant",void 0),n=l([(0,a.E)("wui-shimmer")],n)}}]);