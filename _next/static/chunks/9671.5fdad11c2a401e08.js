"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9671],{23104:(e,t,i)=>{i.d(t,{T:()=>a});let a={URLS:{FAQ:"https://walletconnect.com/faq"}}},99671:(e,t,i)=>{i.r(t),i.d(t,{W3mApproveTransactionView:()=>g,W3mRegisterAccountNameSuccess:()=>U,W3mRegisterAccountNameView:()=>z,W3mUpgradeWalletView:()=>v});var a=i(80291),r=i(32827),o=i(86995),s=i(25315),n=i(83503),l=i(9921),c=i(39519),u=i(97778);let d=(0,a.AH)`
  div {
    width: 100%;
  }

  [data-ready='false'] {
    transform: scale(1.05);
  }

  @media (max-width: 430px) {
    [data-ready='false'] {
      transform: translateY(-50px);
    }
  }
`;var h=function(e,t,i,a){var r,o=arguments.length,s=o<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,i):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,a);else for(var n=e.length-1;n>=0;n--)(r=e[n])&&(s=(o<3?r(s):o>3?r(t,i,s):r(t,i))||s);return o>3&&s&&Object.defineProperty(t,i,s),s};let g=class extends a.WF{constructor(){super(),this.bodyObserver=void 0,this.unsubscribe=[],this.iframe=document.getElementById("w3m-iframe"),this.ready=!1,this.unsubscribe.push(s.W.subscribeKey("open",e=>{e||(this.onHideIframe(),n.I.popTransactionStack())}),s.W.subscribeKey("shake",e=>{e?this.iframe.style.animation="w3m-shake 500ms var(--wui-ease-out-power-2)":this.iframe.style.animation="none"}))}disconnectedCallback(){this.onHideIframe(),this.unsubscribe.forEach(e=>e()),this.bodyObserver?.unobserve(window.document.body)}async firstUpdated(){await this.syncTheme(),this.iframe.style.display="block";let e=this?.renderRoot?.querySelector("div");this.bodyObserver=new ResizeObserver(t=>{let i=t?.[0]?.contentBoxSize,a=i?.[0]?.inlineSize;this.iframe.style.height="600px",e.style.height="600px",a&&a<=430?(this.iframe.style.width="100%",this.iframe.style.left="0px",this.iframe.style.bottom="0px",this.iframe.style.top="unset"):(this.iframe.style.width="360px",this.iframe.style.left="calc(50% - 180px)",this.iframe.style.top="calc(50% - 300px + 32px)",this.iframe.style.bottom="unset"),this.ready=!0,this.onShowIframe()}),this.bodyObserver.observe(window.document.body)}render(){return(0,a.qy)`<div data-ready=${this.ready} id="w3m-frame-container"></div>`}onShowIframe(){let e=window.innerWidth<=430;this.iframe.style.animation=e?"w3m-iframe-zoom-in-mobile 200ms var(--wui-ease-out-power-2)":"w3m-iframe-zoom-in 200ms var(--wui-ease-out-power-2)"}onHideIframe(){this.iframe.style.display="none",this.iframe.style.animation="w3m-iframe-fade-out 200ms var(--wui-ease-out-power-2)"}async syncTheme(){let e=l.a.getAuthConnector();if(e){let t=c.W.getSnapshot().themeMode,i=c.W.getSnapshot().themeVariables;await e.provider.syncTheme({themeVariables:i,w3mThemeVariables:(0,o.o)(i,t)})}}};g.styles=d,h([(0,r.wk)()],g.prototype,"ready",void 0),g=h([(0,u.EM)("w3m-approve-transaction-view")],g);var p=i(88515);i(49577),i(58301),i(85893);let v=class extends a.WF{render(){return(0,a.qy)`
      <wui-flex flexDirection="column" alignItems="center" gap="xl" padding="xl">
        <wui-text variant="paragraph-400" color="fg-100">Follow the instructions on</wui-text>
        <wui-chip
          icon="externalLink"
          variant="fill"
          href=${p.oU.SECURE_SITE_DASHBOARD}
          imageSrc=${p.oU.SECURE_SITE_FAVICON}
          data-testid="w3m-secure-website-button"
        >
        </wui-chip>
        <wui-text variant="small-400" color="fg-200">
          You will have to reconnect for security reasons
        </wui-text>
      </wui-flex>
    `}};v=function(e,t,i,a){var r,o=arguments.length,s=o<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,i):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,a);else for(var n=e.length-1;n>=0;n--)(r=e[n])&&(s=(o<3?r(s):o>3?r(t,i,s):r(t,i))||s);return o>3&&s&&Object.defineProperty(t,i,s),s}([(0,u.EM)("w3m-upgrade-wallet-view")],v);var w=i(86230),m=i(11731),f=i(66897),b=i(69485),y=i(59085),x=i(12543),$=i(66699),k=i(10840),A=i(71726),S=i(79346),T=i(98255);i(88337),i(13076);var _=i(67998),E=i(45857);i(60665);let R=(0,A.AH)`
  :host {
    position: relative;
    width: 100%;
    display: inline-block;
    color: var(--wui-color-fg-275);
  }

  .error {
    margin: var(--wui-spacing-xxs) var(--wui-spacing-m) var(--wui-spacing-0) var(--wui-spacing-m);
  }

  .base-name {
    position: absolute;
    right: 45px;
    top: 15px;
    text-align: right;
  }
`;var N=function(e,t,i,a){var r,o=arguments.length,s=o<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,i):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,a);else for(var n=e.length-1;n>=0;n--)(r=e[n])&&(s=(o<3?r(s):o>3?r(t,i,s):r(t,i))||s);return o>3&&s&&Object.defineProperty(t,i,s),s};let C=class extends A.WF{constructor(){super(...arguments),this.disabled=!1,this.loading=!1}render(){return(0,A.qy)`
      <wui-input-text
        value=${(0,T.J)(this.value)}
        ?disabled=${this.disabled}
        .value=${this.value||""}
        data-testid="wui-ens-input"
        inputRightPadding="5xl"
      >
        ${this.baseNameTemplate()} ${this.errorTemplate()}${this.loadingTemplate()}
      </wui-input-text>
    `}baseNameTemplate(){return(0,A.qy)`<wui-text variant="paragraph-400" color="fg-200" class="base-name">
      ${m.o.WC_NAME_SUFFIX}
    </wui-text>`}loadingTemplate(){return this.loading?(0,A.qy)`<wui-loading-spinner size="md" color="accent-100"></wui-loading-spinner>`:null}errorTemplate(){return this.errorMessage?(0,A.qy)`<wui-text variant="tiny-500" color="error-100" class="error"
        >${this.errorMessage}</wui-text
      >`:null}};C.styles=[_.W5,R],N([(0,S.MZ)()],C.prototype,"errorMessage",void 0),N([(0,S.MZ)({type:Boolean})],C.prototype,"disabled",void 0),N([(0,S.MZ)()],C.prototype,"value",void 0),N([(0,S.MZ)({type:Boolean})],C.prototype,"loading",void 0),C=N([(0,E.E)("wui-ens-input")],C),i(66571),i(56560),i(93278),i(23166);var M=i(32375);let I=(0,a.AH)`
  wui-flex {
    width: 100%;
  }

  .suggestion {
    background: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
  }

  .suggestion:hover {
    background-color: var(--wui-color-gray-glass-005);
    cursor: pointer;
  }

  .suggested-name {
    max-width: 75%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  form {
    width: 100%;
  }

  wui-icon-link {
    position: absolute;
    right: 20px;
    transform: translateY(11px);
  }
`;var O=function(e,t,i,a){var r,o=arguments.length,s=o<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,i):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,a);else for(var n=e.length-1;n>=0;n--)(r=e[n])&&(s=(o<3?r(s):o>3?r(t,i,s):r(t,i))||s);return o>3&&s&&Object.defineProperty(t,i,s),s};let z=class extends a.WF{constructor(){super(),this.formRef=(0,w._)(),this.usubscribe=[],this.name="",this.error="",this.loading=f.f.state.loading,this.suggestions=f.f.state.suggestions,this.registered=!1,this.profileName=b.U.state.profileName,this.onDebouncedNameInputChange=y.w.debounce(e=>{f.f.validateName(e)?(this.error="",this.name=e,f.f.getSuggestions(e),f.f.isNameRegistered(e).then(e=>{this.registered=e})):e.length<4?this.error="Name must be at least 4 characters long":this.error="Can only contain letters, numbers and - characters"}),this.usubscribe.push(f.f.subscribe(e=>{this.suggestions=e.suggestions,this.loading=e.loading}),b.U.subscribeKey("profileName",e=>{this.profileName=e,e&&(this.error="You already own a name")}))}firstUpdated(){this.formRef.value?.addEventListener("keydown",this.onEnterKey.bind(this))}disconnectedCallback(){super.disconnectedCallback(),this.usubscribe.forEach(e=>e()),this.formRef.value?.removeEventListener("keydown",this.onEnterKey.bind(this))}render(){return(0,a.qy)`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        gap="m"
        .padding=${["0","s","m","s"]}
      >
        <form ${(0,w.K)(this.formRef)} @submit=${this.onSubmitName.bind(this)}>
          <wui-ens-input
            @inputChange=${this.onNameInputChange.bind(this)}
            .errorMessage=${this.error}
            .value=${this.name}
          >
          </wui-ens-input>
          ${this.submitButtonTemplate()}
          <input type="submit" hidden />
        </form>
        ${this.templateSuggestions()}
      </wui-flex>
    `}submitButtonTemplate(){return this.isAllowedToSubmit()?(0,a.qy)`
          <wui-icon-link
            size="sm"
            icon="chevronRight"
            iconcolor="accent-100"
            @click=${this.onSubmitName.bind(this)}
          >
          </wui-icon-link>
        `:null}onSelectSuggestion(e){return()=>{this.name=e,this.registered=!1,this.requestUpdate()}}onNameInputChange(e){this.onDebouncedNameInputChange(e.detail)}nameSuggestionTagTemplate(){return this.loading?(0,a.qy)`<wui-loading-spinner size="lg" color="fg-100"></wui-loading-spinner>`:this.registered?(0,a.qy)`<wui-tag variant="shade" size="lg">Registered</wui-tag>`:(0,a.qy)`<wui-tag variant="success" size="lg">Available</wui-tag>`}templateSuggestions(){if(!this.name||this.name.length<4||this.error)return null;let e=this.registered?this.suggestions.filter(e=>e.name!==this.name):[];return(0,a.qy)`<wui-flex flexDirection="column" gap="xxs" alignItems="center">
      <wui-flex
        data-testid="account-name-suggestion"
        .padding=${["m","m","m","m"]}
        justifyContent="space-between"
        class="suggestion"
        @click=${this.onSubmitName.bind(this)}
      >
        <wui-text color="fg-100" variant="paragraph-400" class="suggested-name">
          ${this.name}</wui-text
        >${this.nameSuggestionTagTemplate()}
      </wui-flex>
      ${e.map(e=>this.availableNameTemplate(e.name))}
    </wui-flex>`}availableNameTemplate(e){return(0,a.qy)` <wui-flex
      data-testid="account-name-suggestion"
      .padding=${["m","m","m","m"]}
      justifyContent="space-between"
      class="suggestion"
      @click=${this.onSelectSuggestion(e)}
    >
      <wui-text color="fg-100" variant="paragraph-400" class="suggested-name">
        ${e}
      </wui-text>
      <wui-tag variant="success" size="lg">Available</wui-tag>
    </wui-flex>`}isAllowedToSubmit(){return!this.loading&&!this.registered&&!this.error&&!this.profileName&&f.f.validateName(this.name)}async onSubmitName(){let e=x.W.state.activeChain;try{if(!this.isAllowedToSubmit())return;let t=`${this.name}${m.o.WC_NAME_SUFFIX}`;$.E.sendEvent({type:"track",event:"REGISTER_NAME_INITIATED",properties:{isSmartAccount:b.U.state.preferredAccountTypes?.[e]===M.Vl.ACCOUNT_TYPES.SMART_ACCOUNT,ensName:t}}),await f.f.registerName(t),$.E.sendEvent({type:"track",event:"REGISTER_NAME_SUCCESS",properties:{isSmartAccount:b.U.state.preferredAccountTypes?.[e]===M.Vl.ACCOUNT_TYPES.SMART_ACCOUNT,ensName:t}})}catch(t){k.P.showError(t.message),$.E.sendEvent({type:"track",event:"REGISTER_NAME_ERROR",properties:{isSmartAccount:b.U.state.preferredAccountTypes?.[e]===M.Vl.ACCOUNT_TYPES.SMART_ACCOUNT,ensName:`${this.name}${m.o.WC_NAME_SUFFIX}`,error:t?.message||"Unknown error"}})}}onEnterKey(e){"Enter"===e.key&&this.isAllowedToSubmit()&&this.onSubmitName()}};z.styles=I,O([(0,r.MZ)()],z.prototype,"errorMessage",void 0),O([(0,r.wk)()],z.prototype,"name",void 0),O([(0,r.wk)()],z.prototype,"error",void 0),O([(0,r.wk)()],z.prototype,"loading",void 0),O([(0,r.wk)()],z.prototype,"suggestions",void 0),O([(0,r.wk)()],z.prototype,"registered",void 0),O([(0,r.wk)()],z.prototype,"profileName",void 0),z=O([(0,u.EM)("w3m-register-account-name-view")],z);var j=i(23104);i(83066),i(46783),i(51482);let W=(0,a.AH)`
  .continue-button-container {
    width: 100%;
  }
`,U=class extends a.WF{render(){return(0,a.qy)`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        gap="xxl"
        .padding=${["0","0","l","0"]}
      >
        ${this.onboardingTemplate()} ${this.buttonsTemplate()}
        <wui-link
          @click=${()=>{y.w.openHref(j.T.URLS.FAQ,"_blank")}}
        >
          Learn more
          <wui-icon color="inherit" slot="iconRight" name="externalLink"></wui-icon>
        </wui-link>
      </wui-flex>
    `}onboardingTemplate(){return(0,a.qy)` <wui-flex
      flexDirection="column"
      gap="xxl"
      alignItems="center"
      .padding=${["0","xxl","0","xxl"]}
    >
      <wui-flex gap="s" alignItems="center" justifyContent="center">
        <wui-icon-box
          size="xl"
          iconcolor="success-100"
          backgroundcolor="success-100"
          icon="checkmark"
          background="opaque"
        ></wui-icon-box>
      </wui-flex>
      <wui-flex flexDirection="column" alignItems="center" gap="s">
        <wui-text align="center" variant="medium-600" color="fg-100">
          Account name chosen successfully
        </wui-text>
        <wui-text align="center" variant="paragraph-400" color="fg-100">
          You can now fund your account and trade crypto
        </wui-text>
      </wui-flex>
    </wui-flex>`}buttonsTemplate(){return(0,a.qy)`<wui-flex
      .padding=${["0","2l","0","2l"]}
      gap="s"
      class="continue-button-container"
    >
      <wui-button fullWidth size="lg" borderRadius="xs" @click=${this.redirectToAccount.bind(this)}
        >Let's Go!
      </wui-button>
    </wui-flex>`}redirectToAccount(){n.I.replace("Account")}};U.styles=W,U=function(e,t,i,a){var r,o=arguments.length,s=o<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,i):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,a);else for(var n=e.length-1;n>=0;n--)(r=e[n])&&(s=(o<3?r(s):o>3?r(t,i,s):r(t,i))||s);return o>3&&s&&Object.defineProperty(t,i,s),s}([(0,u.EM)("w3m-register-account-name-success-view")],U)},27388:(e,t,i)=>{i.d(t,{OA:()=>a,WL:()=>o,u$:()=>r});let a={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},r=e=>(...t)=>({_$litDirective$:e,values:t});class o{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,i){this._$Ct=e,this._$AM=t,this._$Ci=i}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}}},86230:(e,t,i)=>{i.d(t,{_:()=>p,K:()=>m});var a=i(81914);let{I:r}=a.ge,o=e=>void 0===e.strings;var s=i(27388);let n=(e,t)=>{let i=e._$AN;if(void 0===i)return!1;for(let e of i)e._$AO?.(t,!1),n(e,t);return!0},l=e=>{let t,i;do{if(void 0===(t=e._$AM))break;(i=t._$AN).delete(e),e=t}while(0===i?.size)},c=e=>{for(let t;t=e._$AM;e=t){let i=t._$AN;if(void 0===i)t._$AN=i=new Set;else if(i.has(e))break;i.add(e),h(t)}};function u(e){void 0!==this._$AN?(l(this),this._$AM=e,c(this)):this._$AM=e}function d(e,t=!1,i=0){let a=this._$AH,r=this._$AN;if(void 0!==r&&0!==r.size){if(t){if(Array.isArray(a))for(let e=i;e<a.length;e++)n(a[e],!1),l(a[e]);else null!=a&&(n(a,!1),l(a))}else n(this,e)}}let h=e=>{e.type==s.OA.CHILD&&(e._$AP??=d,e._$AQ??=u)};class g extends s.WL{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,t,i){super._$AT(e,t,i),c(this),this.isConnected=e._$AU}_$AO(e,t=!0){e!==this.isConnected&&(this.isConnected=e,e?this.reconnected?.():this.disconnected?.()),t&&(n(this,e),l(this))}setValue(e){if(o(this._$Ct))this._$Ct._$AI(e,this);else{let t=[...this._$Ct._$AH];t[this._$Ci]=e,this._$Ct._$AI(t,this,0)}}disconnected(){}reconnected(){}}let p=()=>new v;class v{}let w=new WeakMap,m=(0,s.u$)(class extends g{render(e){return a.s6}update(e,[t]){let i=t!==this.G;return i&&void 0!==this.G&&this.rt(void 0),(i||this.lt!==this.ct)&&(this.G=t,this.ht=e.options?.host,this.rt(this.ct=e.element)),a.s6}rt(e){if(this.isConnected||(e=void 0),"function"==typeof this.G){let t=this.ht??globalThis,i=w.get(t);void 0===i&&(i=new WeakMap,w.set(t,i)),void 0!==i.get(this.G)&&this.G.call(this.ht,void 0),i.set(this.G,e),void 0!==e&&this.G.call(this.ht,e)}else this.G.value=e}get lt(){return"function"==typeof this.G?w.get(this.ht??globalThis)?.get(this.G):this.G?.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}})},49577:(e,t,i)=>{var a=i(71726),r=i(79346);i(43666),i(55602),i(13076);var o=i(67998),s=i(49231),n=i(45857);let l=(0,a.AH)`
  a {
    border: 1px solid var(--wui-color-gray-glass-010);
    border-radius: var(--wui-border-radius-3xl);
  }

  wui-image {
    border-radius: var(--wui-border-radius-3xl);
    overflow: hidden;
  }

  a.disabled > wui-icon:not(.image-icon),
  a.disabled > wui-image {
    filter: grayscale(1);
  }

  a[data-variant='fill'] {
    color: var(--wui-color-inverse-100);
    background-color: var(--wui-color-accent-100);
  }

  a[data-variant='shade'],
  a[data-variant='shadeSmall'] {
    background-color: transparent;
    background-color: var(--wui-color-gray-glass-010);
    color: var(--wui-color-fg-200);
  }

  a[data-variant='success'] {
    column-gap: var(--wui-spacing-xxs);
    border: 1px solid var(--wui-color-success-glass-010);
    background-color: var(--wui-color-success-glass-010);
    color: var(--wui-color-success-100);
  }

  a[data-variant='error'] {
    column-gap: var(--wui-spacing-xxs);
    border: 1px solid var(--wui-color-error-glass-010);
    background-color: var(--wui-color-error-glass-010);
    color: var(--wui-color-error-100);
  }

  a[data-variant='transparent'] {
    column-gap: var(--wui-spacing-xxs);
    background-color: transparent;
    color: var(--wui-color-fg-150);
  }

  a[data-variant='transparent'],
  a[data-variant='success'],
  a[data-variant='shadeSmall'],
  a[data-variant='error'] {
    padding: 7px var(--wui-spacing-s) 7px 10px;
  }

  a[data-variant='transparent']:has(wui-text:first-child),
  a[data-variant='success']:has(wui-text:first-child),
  a[data-variant='shadeSmall']:has(wui-text:first-child),
  a[data-variant='error']:has(wui-text:first-child) {
    padding: 7px var(--wui-spacing-s);
  }

  a[data-variant='fill'],
  a[data-variant='shade'] {
    column-gap: var(--wui-spacing-xs);
    padding: var(--wui-spacing-xxs) var(--wui-spacing-m) var(--wui-spacing-xxs)
      var(--wui-spacing-xs);
  }

  a[data-variant='fill']:has(wui-text:first-child),
  a[data-variant='shade']:has(wui-text:first-child) {
    padding: 9px var(--wui-spacing-m) 9px var(--wui-spacing-m);
  }

  a[data-variant='fill'] > wui-image,
  a[data-variant='shade'] > wui-image {
    width: 24px;
    height: 24px;
  }

  a[data-variant='fill'] > wui-image {
    box-shadow: inset 0 0 0 1px var(--wui-color-accent-090);
  }

  a[data-variant='shade'] > wui-image,
  a[data-variant='shadeSmall'] > wui-image {
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-010);
  }

  a[data-variant='fill'] > wui-icon:not(.image-icon),
  a[data-variant='shade'] > wui-icon:not(.image-icon) {
    width: 14px;
    height: 14px;
  }

  a[data-variant='transparent'] > wui-image,
  a[data-variant='success'] > wui-image,
  a[data-variant='shadeSmall'] > wui-image,
  a[data-variant='error'] > wui-image {
    width: 14px;
    height: 14px;
  }

  a[data-variant='transparent'] > wui-icon:not(.image-icon),
  a[data-variant='success'] > wui-icon:not(.image-icon),
  a[data-variant='shadeSmall'] > wui-icon:not(.image-icon),
  a[data-variant='error'] > wui-icon:not(.image-icon) {
    width: 12px;
    height: 12px;
  }

  a[data-variant='fill']:focus-visible {
    background-color: var(--wui-color-accent-090);
  }

  a[data-variant='shade']:focus-visible,
  a[data-variant='shadeSmall']:focus-visible {
    background-color: var(--wui-color-gray-glass-015);
  }

  a[data-variant='transparent']:focus-visible {
    background-color: var(--wui-color-gray-glass-005);
  }

  a[data-variant='success']:focus-visible {
    background-color: var(--wui-color-success-glass-015);
  }

  a[data-variant='error']:focus-visible {
    background-color: var(--wui-color-error-glass-015);
  }

  a.disabled {
    color: var(--wui-color-gray-glass-015);
    background-color: var(--wui-color-gray-glass-015);
    pointer-events: none;
  }

  @media (hover: hover) and (pointer: fine) {
    a[data-variant='fill']:hover {
      background-color: var(--wui-color-accent-090);
    }

    a[data-variant='shade']:hover,
    a[data-variant='shadeSmall']:hover {
      background-color: var(--wui-color-gray-glass-015);
    }

    a[data-variant='transparent']:hover {
      background-color: var(--wui-color-gray-glass-005);
    }

    a[data-variant='success']:hover {
      background-color: var(--wui-color-success-glass-015);
    }

    a[data-variant='error']:hover {
      background-color: var(--wui-color-error-glass-015);
    }
  }

  a[data-variant='fill']:active {
    background-color: var(--wui-color-accent-080);
  }

  a[data-variant='shade']:active,
  a[data-variant='shadeSmall']:active {
    background-color: var(--wui-color-gray-glass-020);
  }

  a[data-variant='transparent']:active {
    background-color: var(--wui-color-gray-glass-010);
  }

  a[data-variant='success']:active {
    background-color: var(--wui-color-success-glass-020);
  }

  a[data-variant='error']:active {
    background-color: var(--wui-color-error-glass-020);
  }
`;var c=function(e,t,i,a){var r,o=arguments.length,s=o<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,i):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,a);else for(var n=e.length-1;n>=0;n--)(r=e[n])&&(s=(o<3?r(s):o>3?r(t,i,s):r(t,i))||s);return o>3&&s&&Object.defineProperty(t,i,s),s};let u=class extends a.WF{constructor(){super(...arguments),this.variant="fill",this.imageSrc=void 0,this.imageIcon=void 0,this.imageIconSize="md",this.disabled=!1,this.icon="externalLink",this.href="",this.text=void 0}render(){let e="success"===this.variant||"transparent"===this.variant||"shadeSmall"===this.variant;return(0,a.qy)`
      <a
        rel="noreferrer"
        target="_blank"
        href=${this.href}
        class=${this.disabled?"disabled":""}
        data-variant=${this.variant}
      >
        ${this.imageTemplate()}
        <wui-text variant=${e?"small-600":"paragraph-600"} color="inherit">
          ${this.title?this.title:s.Z.getHostName(this.href)}
        </wui-text>
        <wui-icon name=${this.icon} color="inherit" size="inherit"></wui-icon>
      </a>
    `}imageTemplate(){return this.imageSrc?(0,a.qy)`<wui-image src=${this.imageSrc}></wui-image>`:this.imageIcon?(0,a.qy)`<wui-icon
        name=${this.imageIcon}
        color="inherit"
        size=${this.imageIconSize}
        class="image-icon"
      ></wui-icon>`:null}};u.styles=[o.W5,o.fD,l],c([(0,r.MZ)()],u.prototype,"variant",void 0),c([(0,r.MZ)()],u.prototype,"imageSrc",void 0),c([(0,r.MZ)()],u.prototype,"imageIcon",void 0),c([(0,r.MZ)()],u.prototype,"imageIconSize",void 0),c([(0,r.MZ)({type:Boolean})],u.prototype,"disabled",void 0),c([(0,r.MZ)()],u.prototype,"icon",void 0),c([(0,r.MZ)()],u.prototype,"href",void 0),c([(0,r.MZ)()],u.prototype,"text",void 0),u=c([(0,n.E)("wui-chip")],u)},46783:(e,t,i)=>{i(38542)},56560:(e,t,i)=>{var a=i(71726),r=i(79346);i(43666);var o=i(67998),s=i(45857);let n=(0,a.AH)`
  button {
    border-radius: var(--local-border-radius);
    color: var(--wui-color-fg-100);
    padding: var(--local-padding);
  }

  @media (max-width: 700px) {
    button {
      padding: var(--wui-spacing-s);
    }
  }

  button > wui-icon {
    pointer-events: none;
  }

  button:disabled > wui-icon {
    color: var(--wui-color-bg-300) !important;
  }

  button:disabled {
    background-color: transparent;
  }
`;var l=function(e,t,i,a){var r,o=arguments.length,s=o<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,i):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,a);else for(var n=e.length-1;n>=0;n--)(r=e[n])&&(s=(o<3?r(s):o>3?r(t,i,s):r(t,i))||s);return o>3&&s&&Object.defineProperty(t,i,s),s};let c=class extends a.WF{constructor(){super(...arguments),this.size="md",this.disabled=!1,this.icon="copy",this.iconColor="inherit"}render(){let e="lg"===this.size?"--wui-border-radius-xs":"--wui-border-radius-xxs",t="lg"===this.size?"--wui-spacing-1xs":"--wui-spacing-2xs";return this.style.cssText=`
    --local-border-radius: var(${e});
    --local-padding: var(${t});
`,(0,a.qy)`
      <button ?disabled=${this.disabled}>
        <wui-icon color=${this.iconColor} size=${this.size} name=${this.icon}></wui-icon>
      </button>
    `}};c.styles=[o.W5,o.fD,o.ck,n],l([(0,r.MZ)()],c.prototype,"size",void 0),l([(0,r.MZ)({type:Boolean})],c.prototype,"disabled",void 0),l([(0,r.MZ)()],c.prototype,"icon",void 0),l([(0,r.MZ)()],c.prototype,"iconColor",void 0),c=l([(0,s.E)("wui-icon-link")],c)},66571:(e,t,i)=>{i(43666)},51482:(e,t,i)=>{var a=i(71726),r=i(79346),o=i(98255);i(13076);var s=i(67998),n=i(45857);let l=(0,a.AH)`
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
`;var c=function(e,t,i,a){var r,o=arguments.length,s=o<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,i):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,a);else for(var n=e.length-1;n>=0;n--)(r=e[n])&&(s=(o<3?r(s):o>3?r(t,i,s):r(t,i))||s);return o>3&&s&&Object.defineProperty(t,i,s),s};let u=class extends a.WF{constructor(){super(...arguments),this.tabIdx=void 0,this.disabled=!1,this.color="inherit"}render(){return(0,a.qy)`
      <button ?disabled=${this.disabled} tabindex=${(0,o.J)(this.tabIdx)}>
        <slot name="iconLeft"></slot>
        <wui-text variant="small-600" color=${this.color}>
          <slot></slot>
        </wui-text>
        <slot name="iconRight"></slot>
      </button>
    `}};u.styles=[s.W5,s.fD,l],c([(0,r.MZ)()],u.prototype,"tabIdx",void 0),c([(0,r.MZ)({type:Boolean})],u.prototype,"disabled",void 0),c([(0,r.MZ)()],u.prototype,"color",void 0),u=c([(0,n.E)("wui-link")],u)},93278:(e,t,i)=>{i(88337)},23166:(e,t,i)=>{i(58037)},55602:(e,t,i)=>{var a=i(71726),r=i(79346),o=i(67998),s=i(45857);let n=(0,a.AH)`
  :host {
    display: block;
    width: var(--local-width);
    height: var(--local-height);
  }

  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center center;
    border-radius: inherit;
  }
`;var l=function(e,t,i,a){var r,o=arguments.length,s=o<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,i):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,a);else for(var n=e.length-1;n>=0;n--)(r=e[n])&&(s=(o<3?r(s):o>3?r(t,i,s):r(t,i))||s);return o>3&&s&&Object.defineProperty(t,i,s),s};let c=class extends a.WF{constructor(){super(...arguments),this.src="./path/to/image.jpg",this.alt="Image",this.size=void 0}render(){return this.style.cssText=`
      --local-width: ${this.size?`var(--wui-icon-size-${this.size});`:"100%"};
      --local-height: ${this.size?`var(--wui-icon-size-${this.size});`:"100%"};
      `,(0,a.qy)`<img src=${this.src} alt=${this.alt} @error=${this.handleImageError} />`}handleImageError(){this.dispatchEvent(new CustomEvent("onLoadError",{bubbles:!0,composed:!0}))}};c.styles=[o.W5,o.ck,n],l([(0,r.MZ)()],c.prototype,"src",void 0),l([(0,r.MZ)()],c.prototype,"alt",void 0),l([(0,r.MZ)()],c.prototype,"size",void 0),c=l([(0,s.E)("wui-image")],c)},58037:(e,t,i)=>{var a=i(71726),r=i(79346);i(13076);var o=i(67998),s=i(45857);let n=(0,a.AH)`
  :host {
    display: flex;
    justify-content: center;
    align-items: center;
    height: var(--wui-spacing-m);
    padding: 0 var(--wui-spacing-3xs) !important;
    border-radius: var(--wui-border-radius-5xs);
    transition:
      border-radius var(--wui-duration-lg) var(--wui-ease-out-power-1),
      background-color var(--wui-duration-lg) var(--wui-ease-out-power-1);
    will-change: border-radius, background-color;
  }

  :host > wui-text {
    transform: translateY(5%);
  }

  :host([data-variant='main']) {
    background-color: var(--wui-color-accent-glass-015);
    color: var(--wui-color-accent-100);
  }

  :host([data-variant='shade']) {
    background-color: var(--wui-color-gray-glass-010);
    color: var(--wui-color-fg-200);
  }

  :host([data-variant='success']) {
    background-color: var(--wui-icon-box-bg-success-100);
    color: var(--wui-color-success-100);
  }

  :host([data-variant='error']) {
    background-color: var(--wui-icon-box-bg-error-100);
    color: var(--wui-color-error-100);
  }

  :host([data-size='lg']) {
    padding: 11px 5px !important;
  }

  :host([data-size='lg']) > wui-text {
    transform: translateY(2%);
  }
`;var l=function(e,t,i,a){var r,o=arguments.length,s=o<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,i):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,a);else for(var n=e.length-1;n>=0;n--)(r=e[n])&&(s=(o<3?r(s):o>3?r(t,i,s):r(t,i))||s);return o>3&&s&&Object.defineProperty(t,i,s),s};let c=class extends a.WF{constructor(){super(...arguments),this.variant="main",this.size="lg"}render(){this.dataset.variant=this.variant,this.dataset.size=this.size;let e="md"===this.size?"mini-700":"micro-700";return(0,a.qy)`
      <wui-text data-variant=${this.variant} variant=${e} color="inherit">
        <slot></slot>
      </wui-text>
    `}};c.styles=[o.W5,n],l([(0,r.MZ)()],c.prototype,"variant",void 0),l([(0,r.MZ)()],c.prototype,"size",void 0),c=l([(0,s.E)("wui-tag")],c)}}]);