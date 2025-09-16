"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5273],{55273:(t,e,i)=>{i.r(e),i.d(e,{W3mEmailLoginView:()=>q,W3mEmailVerifyDeviceView:()=>P,W3mEmailVerifyOtpView:()=>R,W3mUpdateEmailPrimaryOtpView:()=>j,W3mUpdateEmailSecondaryOtpView:()=>F,W3mUpdateEmailWalletView:()=>L});var r=i(66699),o=i(12543),n=i(8226),a=i(68129),s=i(25315),l=i(59085),c=i(97778),u=i(80291),d=i(32827),h=i(83503),p=i(9921),m=i(10840);i(58301),i(51482),i(93278);var w=i(71726),f=i(79346);i(7202);var v=i(67998),g=i(49231),y=i(45857);let b=(0,w.AH)`
  :host {
    position: relative;
    display: inline-block;
  }

  input {
    width: 50px;
    height: 50px;
    background: var(--wui-color-gray-glass-010);
    border-radius: var(--wui-border-radius-xs);
    border: 1px solid var(--wui-color-gray-glass-005);
    font-family: var(--wui-font-family);
    font-size: var(--wui-font-size-large);
    font-weight: var(--wui-font-weight-regular);
    letter-spacing: var(--wui-letter-spacing-large);
    text-align: center;
    color: var(--wui-color-fg-100);
    caret-color: var(--wui-color-accent-100);
    transition:
      background-color var(--wui-ease-inout-power-1) var(--wui-duration-md),
      border-color var(--wui-ease-inout-power-1) var(--wui-duration-md),
      box-shadow var(--wui-ease-inout-power-1) var(--wui-duration-md);
    will-change: background-color, border-color, box-shadow;
    box-sizing: border-box;
    -webkit-appearance: none;
    -moz-appearance: textfield;
    padding: 0px;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input[type='number'] {
    -moz-appearance: textfield;
  }

  input:disabled {
    cursor: not-allowed;
    border: 1px solid var(--wui-color-gray-glass-010);
    background: var(--wui-color-gray-glass-005);
  }

  input:focus:enabled {
    background-color: var(--wui-color-gray-glass-015);
    border: 1px solid var(--wui-color-accent-100);
    -webkit-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    -moz-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
  }

  @media (hover: hover) and (pointer: fine) {
    input:hover:enabled {
      background-color: var(--wui-color-gray-glass-015);
    }
  }
`;var E=function(t,e,i,r){var o,n=arguments.length,a=n<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,i,r);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(a=(n<3?o(a):n>3?o(e,i,a):o(e,i))||a);return n>3&&a&&Object.defineProperty(e,i,a),a};let x=class extends w.WF{constructor(){super(...arguments),this.disabled=!1,this.value=""}render(){return(0,w.qy)`<input
      type="number"
      maxlength="1"
      inputmode="numeric"
      autofocus
      ?disabled=${this.disabled}
      value=${this.value}
    /> `}};x.styles=[v.W5,v.fD,b],E([(0,f.MZ)({type:Boolean})],x.prototype,"disabled",void 0),E([(0,f.MZ)({type:String})],x.prototype,"value",void 0),x=E([(0,y.E)("wui-input-numeric")],x);let I=(0,w.AH)`
  :host {
    position: relative;
    display: block;
  }
`;var A=function(t,e,i,r){var o,n=arguments.length,a=n<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,i,r);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(a=(n<3?o(a):n>3?o(e,i,a):o(e,i))||a);return n>3&&a&&Object.defineProperty(e,i,a),a};let O=class extends w.WF{constructor(){super(...arguments),this.length=6,this.otp="",this.values=Array.from({length:this.length}).map(()=>""),this.numerics=[],this.shouldInputBeEnabled=t=>this.values.slice(0,t).every(t=>""!==t),this.handleKeyDown=(t,e)=>{let i=t.target,r=this.getInputElement(i);if(!r)return;["ArrowLeft","ArrowRight","Shift","Delete"].includes(t.key)&&t.preventDefault();let o=r.selectionStart;switch(t.key){case"ArrowLeft":o&&r.setSelectionRange(o+1,o+1),this.focusInputField("prev",e);break;case"ArrowRight":case"Shift":this.focusInputField("next",e);break;case"Delete":case"Backspace":""===r.value?this.focusInputField("prev",e):this.updateInput(r,e,"")}},this.focusInputField=(t,e)=>{if("next"===t){let t=e+1;if(!this.shouldInputBeEnabled(t))return;let i=this.numerics[t<this.length?t:e],r=i?this.getInputElement(i):void 0;r&&(r.disabled=!1,r.focus())}if("prev"===t){let t=e-1,i=this.numerics[t>-1?t:e],r=i?this.getInputElement(i):void 0;r&&r.focus()}}}firstUpdated(){this.otp&&(this.values=this.otp.split(""));let t=this.shadowRoot?.querySelectorAll("wui-input-numeric");t&&(this.numerics=Array.from(t)),this.numerics[0]?.focus()}render(){return(0,w.qy)`
      <wui-flex gap="xxs" data-testid="wui-otp-input">
        ${Array.from({length:this.length}).map((t,e)=>(0,w.qy)`
            <wui-input-numeric
              @input=${t=>this.handleInput(t,e)}
              @click=${t=>this.selectInput(t)}
              @keydown=${t=>this.handleKeyDown(t,e)}
              .disabled=${!this.shouldInputBeEnabled(e)}
              .value=${this.values[e]||""}
            >
            </wui-input-numeric>
          `)}
      </wui-flex>
    `}updateInput(t,e,i){let r=this.numerics[e],o=t||(r?this.getInputElement(r):void 0);o&&(o.value=i,this.values=this.values.map((t,r)=>r===e?i:t))}selectInput(t){let e=t.target;if(e){let t=this.getInputElement(e);t?.select()}}handleInput(t,e){let i=t.target,r=this.getInputElement(i);if(r){let i=r.value;"insertFromPaste"===t.inputType?this.handlePaste(r,i,e):g.Z.isNumber(i)&&t.data?(this.updateInput(r,e,t.data),this.focusInputField("next",e)):this.updateInput(r,e,"")}this.dispatchInputChangeEvent()}handlePaste(t,e,i){let r=e[0];if(r&&g.Z.isNumber(r)){this.updateInput(t,i,r);let o=e.substring(1);if(i+1<this.length&&o.length){let t=this.numerics[i+1],e=t?this.getInputElement(t):void 0;e&&this.handlePaste(e,o,i+1)}else this.focusInputField("next",i)}else this.updateInput(t,i,"")}getInputElement(t){return t.shadowRoot?.querySelector("input")?t.shadowRoot.querySelector("input"):null}dispatchInputChangeEvent(){let t=this.values.join("");this.dispatchEvent(new CustomEvent("inputChange",{detail:t,bubbles:!0,composed:!0}))}};O.styles=[v.W5,I],A([(0,f.MZ)({type:Number})],O.prototype,"length",void 0),A([(0,f.MZ)({type:String})],O.prototype,"otp",void 0),A([(0,f.wk)()],O.prototype,"values",void 0),O=A([(0,y.E)("wui-otp")],O),i(85893);var C=i(34809);let $=(0,u.AH)`
  wui-loading-spinner {
    margin: 9px auto;
  }

  .email-display,
  .email-display wui-text {
    max-width: 100%;
  }
`;var _=function(t,e,i,r){var o,n=arguments.length,a=n<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,i,r);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(a=(n<3?o(a):n>3?o(e,i,a):o(e,i))||a);return n>3&&a&&Object.defineProperty(e,i,a),a};let k=class extends u.WF{firstUpdated(){this.startOTPTimeout()}disconnectedCallback(){clearTimeout(this.OTPTimeout)}constructor(){super(),this.loading=!1,this.timeoutTimeLeft=C.Q.getTimeToNextEmailLogin(),this.error="",this.otp="",this.email=h.I.state.data?.email,this.authConnector=p.a.getAuthConnector()}render(){if(!this.email)throw Error("w3m-email-otp-widget: No email provided");let t=!!this.timeoutTimeLeft,e=this.getFooterLabels(t);return(0,u.qy)`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${["l","0","l","0"]}
        gap="l"
      >
        <wui-flex
          class="email-display"
          flexDirection="column"
          alignItems="center"
          .padding=${["0","xl","0","xl"]}
        >
          <wui-text variant="paragraph-400" color="fg-100" align="center">
            Enter the code we sent to
          </wui-text>
          <wui-text variant="paragraph-500" color="fg-100" lineClamp="1" align="center">
            ${this.email}
          </wui-text>
        </wui-flex>

        <wui-text variant="small-400" color="fg-200">The code expires in 20 minutes</wui-text>

        ${this.loading?(0,u.qy)`<wui-loading-spinner size="xl" color="accent-100"></wui-loading-spinner>`:(0,u.qy)` <wui-flex flexDirection="column" alignItems="center" gap="xs">
              <wui-otp
                dissabled
                length="6"
                @inputChange=${this.onOtpInputChange.bind(this)}
                .otp=${this.otp}
              ></wui-otp>
              ${this.error?(0,u.qy)`
                    <wui-text variant="small-400" align="center" color="error-100">
                      ${this.error}. Try Again
                    </wui-text>
                  `:null}
            </wui-flex>`}

        <wui-flex alignItems="center" gap="xs">
          <wui-text variant="small-400" color="fg-200">${e.title}</wui-text>
          <wui-link @click=${this.onResendCode.bind(this)} .disabled=${t}>
            ${e.action}
          </wui-link>
        </wui-flex>
      </wui-flex>
    `}startOTPTimeout(){this.timeoutTimeLeft=C.Q.getTimeToNextEmailLogin(),this.OTPTimeout=setInterval(()=>{this.timeoutTimeLeft>0?this.timeoutTimeLeft=C.Q.getTimeToNextEmailLogin():clearInterval(this.OTPTimeout)},1e3)}async onOtpInputChange(t){try{!this.loading&&(this.otp=t.detail,this.authConnector&&6===this.otp.length&&(this.loading=!0,await this.onOtpSubmit?.(this.otp)))}catch(t){this.error=l.w.parseError(t),this.loading=!1}}async onResendCode(){try{if(this.onOtpResend){if(!this.loading&&!this.timeoutTimeLeft){if(this.error="",this.otp="",!p.a.getAuthConnector()||!this.email)throw Error("w3m-email-otp-widget: Unable to resend email");this.loading=!0,await this.onOtpResend(this.email),this.startOTPTimeout(),m.P.showSuccess("Code email resent")}}else this.onStartOver&&this.onStartOver()}catch(t){m.P.showError(t)}finally{this.loading=!1}}getFooterLabels(t){return this.onStartOver?{title:"Something wrong?",action:`Try again ${t?`in ${this.timeoutTimeLeft}s`:""}`}:{title:"Didn't receive it?",action:`Resend ${t?`in ${this.timeoutTimeLeft}s`:"Code"}`}}};k.styles=$,_([(0,d.wk)()],k.prototype,"loading",void 0),_([(0,d.wk)()],k.prototype,"timeoutTimeLeft",void 0),_([(0,d.wk)()],k.prototype,"error",void 0),k=_([(0,c.EM)("w3m-email-otp-widget")],k);let R=class extends k{constructor(){super(...arguments),this.onOtpSubmit=async t=>{try{if(this.authConnector){if(await this.authConnector.provider.connectOtp({otp:t}),r.E.sendEvent({type:"track",event:"EMAIL_VERIFICATION_CODE_PASS"}),o.W.state.activeChain)await n.x.connectExternal(this.authConnector,o.W.state.activeChain);else throw Error("Active chain is not set on ChainControll");r.E.sendEvent({type:"track",event:"CONNECT_SUCCESS",properties:{method:"email",name:this.authConnector.name||"Unknown"}}),a.H.state.siwx||s.W.close()}}catch(t){throw r.E.sendEvent({type:"track",event:"EMAIL_VERIFICATION_CODE_FAIL",properties:{message:l.w.parseError(t)}}),t}},this.onOtpResend=async t=>{this.authConnector&&(await this.authConnector.provider.connectEmail({email:t}),r.E.sendEvent({type:"track",event:"EMAIL_VERIFICATION_CODE_SENT"}))}}};R=function(t,e,i,r){var o,n=arguments.length,a=n<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,i,r);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(a=(n<3?o(a):n>3?o(e,i,a):o(e,i))||a);return n>3&&a&&Object.defineProperty(e,i,a),a}([(0,c.EM)("w3m-email-verify-otp-view")],R),i(46783);let T=(0,u.AH)`
  wui-icon-box {
    height: var(--wui-icon-box-size-xl);
    width: var(--wui-icon-box-size-xl);
  }
`;var D=function(t,e,i,r){var o,n=arguments.length,a=n<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,i,r);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(a=(n<3?o(a):n>3?o(e,i,a):o(e,i))||a);return n>3&&a&&Object.defineProperty(e,i,a),a};let P=class extends u.WF{constructor(){super(),this.email=h.I.state.data?.email,this.authConnector=p.a.getAuthConnector(),this.loading=!1,this.listenForDeviceApproval()}render(){if(!this.email)throw Error("w3m-email-verify-device-view: No email provided");if(!this.authConnector)throw Error("w3m-email-verify-device-view: No auth connector provided");return(0,u.qy)`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${["xxl","s","xxl","s"]}
        gap="l"
      >
        <wui-icon-box
          size="xl"
          iconcolor="accent-100"
          backgroundcolor="accent-100"
          icon="verify"
          background="opaque"
        ></wui-icon-box>

        <wui-flex flexDirection="column" alignItems="center" gap="s">
          <wui-flex flexDirection="column" alignItems="center">
            <wui-text variant="paragraph-400" color="fg-100">
              Approve the login link we sent to
            </wui-text>
            <wui-text variant="paragraph-400" color="fg-100"><b>${this.email}</b></wui-text>
          </wui-flex>

          <wui-text variant="small-400" color="fg-200" align="center">
            The code expires in 20 minutes
          </wui-text>

          <wui-flex alignItems="center" id="w3m-resend-section" gap="xs">
            <wui-text variant="small-400" color="fg-100" align="center">
              Didn't receive it?
            </wui-text>
            <wui-link @click=${this.onResendCode.bind(this)} .disabled=${this.loading}>
              Resend email
            </wui-link>
          </wui-flex>
        </wui-flex>
      </wui-flex>
    `}async listenForDeviceApproval(){if(this.authConnector)try{await this.authConnector.provider.connectDevice(),r.E.sendEvent({type:"track",event:"DEVICE_REGISTERED_FOR_EMAIL"}),r.E.sendEvent({type:"track",event:"EMAIL_VERIFICATION_CODE_SENT"}),h.I.replace("EmailVerifyOtp",{email:this.email})}catch(t){h.I.goBack()}}async onResendCode(){try{if(!this.loading){if(!this.authConnector||!this.email)throw Error("w3m-email-login-widget: Unable to resend email");this.loading=!0,await this.authConnector.provider.connectEmail({email:this.email}),this.listenForDeviceApproval(),m.P.showSuccess("Code email resent")}}catch(t){m.P.showError(t)}finally{this.loading=!1}}};P.styles=T,D([(0,d.wk)()],P.prototype,"loading",void 0),P=D([(0,c.EM)("w3m-email-verify-device-view")],P);var S=i(86230);i(83066),i(38878);let M=(0,u.AH)`
  wui-email-input {
    width: 100%;
  }

  form {
    width: 100%;
    display: block;
    position: relative;
  }
`;var N=function(t,e,i,r){var o,n=arguments.length,a=n<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,i,r);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(a=(n<3?o(a):n>3?o(e,i,a):o(e,i))||a);return n>3&&a&&Object.defineProperty(e,i,a),a};let L=class extends u.WF{constructor(){super(...arguments),this.formRef=(0,S._)(),this.initialEmail=h.I.state.data?.email??"",this.redirectView=h.I.state.data?.redirectView,this.email="",this.loading=!1}firstUpdated(){this.formRef.value?.addEventListener("keydown",t=>{"Enter"===t.key&&this.onSubmitEmail(t)})}render(){return(0,u.qy)`
      <wui-flex flexDirection="column" padding="m" gap="m">
        <form ${(0,S.K)(this.formRef)} @submit=${this.onSubmitEmail.bind(this)}>
          <wui-email-input
            value=${this.initialEmail}
            .disabled=${this.loading}
            @inputChange=${this.onEmailInputChange.bind(this)}
          >
          </wui-email-input>
          <input type="submit" hidden />
        </form>
        ${this.buttonsTemplate()}
      </wui-flex>
    `}onEmailInputChange(t){this.email=t.detail}async onSubmitEmail(t){try{if(this.loading)return;this.loading=!0,t.preventDefault();let e=p.a.getAuthConnector();if(!e)throw Error("w3m-update-email-wallet: Auth connector not found");let i=await e.provider.updateEmail({email:this.email});r.E.sendEvent({type:"track",event:"EMAIL_EDIT"}),"VERIFY_SECONDARY_OTP"===i.action?h.I.push("UpdateEmailSecondaryOtp",{email:this.initialEmail,newEmail:this.email,redirectView:this.redirectView}):h.I.push("UpdateEmailPrimaryOtp",{email:this.initialEmail,newEmail:this.email,redirectView:this.redirectView})}catch(t){m.P.showError(t),this.loading=!1}}buttonsTemplate(){let t=!this.loading&&this.email.length>3&&this.email!==this.initialEmail;return this.redirectView?(0,u.qy)`
      <wui-flex gap="s">
        <wui-button size="md" variant="neutral" fullWidth @click=${h.I.goBack}>
          Cancel
        </wui-button>

        <wui-button
          size="md"
          variant="main"
          fullWidth
          @click=${this.onSubmitEmail.bind(this)}
          .disabled=${!t}
          .loading=${this.loading}
        >
          Save
        </wui-button>
      </wui-flex>
    `:(0,u.qy)`
        <wui-button
          size="md"
          variant="main"
          fullWidth
          @click=${this.onSubmitEmail.bind(this)}
          .disabled=${!t}
          .loading=${this.loading}
        >
          Save
        </wui-button>
      `}};L.styles=M,N([(0,d.wk)()],L.prototype,"email",void 0),N([(0,d.wk)()],L.prototype,"loading",void 0),L=N([(0,c.EM)("w3m-update-email-wallet-view")],L);let j=class extends k{constructor(){super(),this.email=h.I.state.data?.email,this.onOtpSubmit=async t=>{try{this.authConnector&&(await this.authConnector.provider.updateEmailPrimaryOtp({otp:t}),r.E.sendEvent({type:"track",event:"EMAIL_VERIFICATION_CODE_PASS"}),h.I.replace("UpdateEmailSecondaryOtp",h.I.state.data))}catch(t){throw r.E.sendEvent({type:"track",event:"EMAIL_VERIFICATION_CODE_FAIL",properties:{message:l.w.parseError(t)}}),t}},this.onStartOver=()=>{h.I.replace("UpdateEmailWallet",h.I.state.data)}}};j=function(t,e,i,r){var o,n=arguments.length,a=n<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,i,r);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(a=(n<3?o(a):n>3?o(e,i,a):o(e,i))||a);return n>3&&a&&Object.defineProperty(e,i,a),a}([(0,c.EM)("w3m-update-email-primary-otp-view")],j);let F=class extends k{constructor(){super(),this.email=h.I.state.data?.newEmail,this.redirectView=h.I.state.data?.redirectView,this.onOtpSubmit=async t=>{try{this.authConnector&&(await this.authConnector.provider.updateEmailSecondaryOtp({otp:t}),r.E.sendEvent({type:"track",event:"EMAIL_VERIFICATION_CODE_PASS"}),this.redirectView&&h.I.reset(this.redirectView))}catch(t){throw r.E.sendEvent({type:"track",event:"EMAIL_VERIFICATION_CODE_FAIL",properties:{message:l.w.parseError(t)}}),t}},this.onStartOver=()=>{h.I.replace("UpdateEmailWallet",h.I.state.data)}}};F=function(t,e,i,r){var o,n=arguments.length,a=n<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,i,r);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(a=(n<3?o(a):n>3?o(e,i,a):o(e,i))||a);return n>3&&a&&Object.defineProperty(e,i,a),a}([(0,c.EM)("w3m-update-email-secondary-otp-view")],F);var V=i(11731),W=i(153),U=function(t,e,i,r){var o,n=arguments.length,a=n<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,i,r);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(a=(n<3?o(a):n>3?o(e,i,a):o(e,i))||a);return n>3&&a&&Object.defineProperty(e,i,a),a};let q=class extends u.WF{constructor(){super(),this.authConnector=p.a.getAuthConnector(),this.isEmailEnabled=a.H.state.features?.email,this.isAuthEnabled=this.checkIfAuthEnabled(p.a.state.connectors),this.connectors=p.a.state.connectors,p.a.subscribeKey("connectors",t=>{this.connectors=t,this.isAuthEnabled=this.checkIfAuthEnabled(this.connectors)})}render(){if(!this.isEmailEnabled)throw Error("w3m-email-login-view: Email is not enabled");if(!this.isAuthEnabled)throw Error("w3m-email-login-view: No auth connector provided");return(0,u.qy)`<wui-flex
      flexDirection="column"
      .padding=${["3xs","m","m","m"]}
      gap="l"
    >
      <w3m-email-login-widget></w3m-email-login-widget>
    </wui-flex> `}checkIfAuthEnabled(t){let e=t.filter(t=>t.type===W.o.CONNECTOR_TYPE_AUTH).map(t=>t.chain);return V.o.AUTH_CONNECTOR_SUPPORTED_CHAINS.some(t=>e.includes(t))}};U([(0,d.wk)()],q.prototype,"connectors",void 0),q=U([(0,c.EM)("w3m-email-login-view")],q)},27388:(t,e,i)=>{i.d(e,{OA:()=>r,WL:()=>n,u$:()=>o});let r={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},o=t=>(...e)=>({_$litDirective$:t,values:e});class n{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,i){this._$Ct=t,this._$AM=e,this._$Ci=i}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}},86230:(t,e,i)=>{i.d(e,{_:()=>m,K:()=>v});var r=i(81914);let{I:o}=r.ge,n=t=>void 0===t.strings;var a=i(27388);let s=(t,e)=>{let i=t._$AN;if(void 0===i)return!1;for(let t of i)t._$AO?.(e,!1),s(t,e);return!0},l=t=>{let e,i;do{if(void 0===(e=t._$AM))break;(i=e._$AN).delete(t),t=e}while(0===i?.size)},c=t=>{for(let e;e=t._$AM;t=e){let i=e._$AN;if(void 0===i)e._$AN=i=new Set;else if(i.has(t))break;i.add(t),h(e)}};function u(t){void 0!==this._$AN?(l(this),this._$AM=t,c(this)):this._$AM=t}function d(t,e=!1,i=0){let r=this._$AH,o=this._$AN;if(void 0!==o&&0!==o.size){if(e){if(Array.isArray(r))for(let t=i;t<r.length;t++)s(r[t],!1),l(r[t]);else null!=r&&(s(r,!1),l(r))}else s(this,t)}}let h=t=>{t.type==a.OA.CHILD&&(t._$AP??=d,t._$AQ??=u)};class p extends a.WL{constructor(){super(...arguments),this._$AN=void 0}_$AT(t,e,i){super._$AT(t,e,i),c(this),this.isConnected=t._$AU}_$AO(t,e=!0){t!==this.isConnected&&(this.isConnected=t,t?this.reconnected?.():this.disconnected?.()),e&&(s(this,t),l(this))}setValue(t){if(n(this._$Ct))this._$Ct._$AI(t,this);else{let e=[...this._$Ct._$AH];e[this._$Ci]=t,this._$Ct._$AI(e,this,0)}}disconnected(){}reconnected(){}}let m=()=>new w;class w{}let f=new WeakMap,v=(0,a.u$)(class extends p{render(t){return r.s6}update(t,[e]){let i=e!==this.G;return i&&void 0!==this.G&&this.rt(void 0),(i||this.lt!==this.ct)&&(this.G=e,this.ht=t.options?.host,this.rt(this.ct=t.element)),r.s6}rt(t){if(this.isConnected||(t=void 0),"function"==typeof this.G){let e=this.ht??globalThis,i=f.get(e);void 0===i&&(i=new WeakMap,f.set(e,i)),void 0!==i.get(this.G)&&this.G.call(this.ht,void 0),i.set(this.G,t),void 0!==t&&this.G.call(this.ht,t)}else this.G.value=t}get lt(){return"function"==typeof this.G?f.get(this.ht??globalThis)?.get(this.G):this.G?.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}})},38878:(t,e,i)=>{var r=i(71726),o=i(79346),n=i(98255);i(13076);var a=i(67998),s=i(45857);i(60665);let l=(0,r.AH)`
  :host {
    position: relative;
    display: inline-block;
  }

  wui-text {
    margin: var(--wui-spacing-xxs) var(--wui-spacing-m) var(--wui-spacing-0) var(--wui-spacing-m);
  }
`;var c=function(t,e,i,r){var o,n=arguments.length,a=n<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,i,r);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(a=(n<3?o(a):n>3?o(e,i,a):o(e,i))||a);return n>3&&a&&Object.defineProperty(e,i,a),a};let u=class extends r.WF{constructor(){super(...arguments),this.disabled=!1}render(){return(0,r.qy)`
      <wui-input-text
        type="email"
        placeholder="Email"
        icon="mail"
        size="mdl"
        .disabled=${this.disabled}
        .value=${this.value}
        data-testid="wui-email-input"
        tabIdx=${(0,n.J)(this.tabIdx)}
      ></wui-input-text>
      ${this.templateError()}
    `}templateError(){return this.errorMessage?(0,r.qy)`<wui-text variant="tiny-500" color="error-100">${this.errorMessage}</wui-text>`:null}};u.styles=[a.W5,l],c([(0,o.MZ)()],u.prototype,"errorMessage",void 0),c([(0,o.MZ)({type:Boolean})],u.prototype,"disabled",void 0),c([(0,o.MZ)()],u.prototype,"value",void 0),c([(0,o.MZ)()],u.prototype,"tabIdx",void 0),u=c([(0,s.E)("wui-email-input")],u)},46783:(t,e,i)=>{i(38542)},51482:(t,e,i)=>{var r=i(71726),o=i(79346),n=i(98255);i(13076);var a=i(67998),s=i(45857);let l=(0,r.AH)`
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
`;var c=function(t,e,i,r){var o,n=arguments.length,a=n<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,i,r);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(a=(n<3?o(a):n>3?o(e,i,a):o(e,i))||a);return n>3&&a&&Object.defineProperty(e,i,a),a};let u=class extends r.WF{constructor(){super(...arguments),this.tabIdx=void 0,this.disabled=!1,this.color="inherit"}render(){return(0,r.qy)`
      <button ?disabled=${this.disabled} tabindex=${(0,n.J)(this.tabIdx)}>
        <slot name="iconLeft"></slot>
        <wui-text variant="small-600" color=${this.color}>
          <slot></slot>
        </wui-text>
        <slot name="iconRight"></slot>
      </button>
    `}};u.styles=[a.W5,a.fD,l],c([(0,o.MZ)()],u.prototype,"tabIdx",void 0),c([(0,o.MZ)({type:Boolean})],u.prototype,"disabled",void 0),c([(0,o.MZ)()],u.prototype,"color",void 0),u=c([(0,s.E)("wui-link")],u)},93278:(t,e,i)=>{i(88337)}}]);