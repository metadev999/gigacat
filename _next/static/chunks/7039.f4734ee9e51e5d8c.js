"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7039],{23104:(e,t,i)=>{i.d(t,{T:()=>a});let a={URLS:{FAQ:"https://walletconnect.com/faq"}}},37458:(e,t,i)=>{i.d(t,{Up:()=>h});var a=i(69485),o=i(12543),r=i(9921),n=i(66699),s=i(83503),l=i(10840),c=i(59085),u=i(38623);async function d(){s.I.push("ConnectingFarcaster");let e=r.a.getAuthConnector();if(e&&!a.U.state.farcasterUrl)try{let{url:t}=await e.provider.getFarcasterUri();a.U.setFarcasterUrl(t,o.W.state.activeChain)}catch(e){s.I.goBack(),l.P.showError(e)}}async function p(e){s.I.push("ConnectingSocial");let t=r.a.getAuthConnector(),i=null;try{let r=setTimeout(()=>{throw Error("Social login timed out. Please try again.")},45e3);if(t&&e){if(c.w.isTelegram()||(i=function(){try{return c.w.returnOpenHref("","popupWindow","width=600,height=800,scrollbars=yes")}catch(e){throw Error("Could not open social popup")}}()),i)a.U.setSocialWindow(i,o.W.state.activeChain);else if(!c.w.isTelegram())throw Error("Could not create social popup");let{uri:n}=await t.provider.getSocialRedirectUri({provider:e});if(!n)throw i?.close(),Error("Could not fetch the social redirect uri");if(i&&(i.location.href=n),c.w.isTelegram()){u.i.setTelegramSocialProvider(e);let t=c.w.formatTelegramSocialLoginUrl(n);c.w.openHref(t,"_top")}clearTimeout(r)}}catch(e){i?.close(),l.P.showError(e?.message)}}async function h(e){a.U.setSocialProvider(e,o.W.state.activeChain),n.E.sendEvent({type:"track",event:"SOCIAL_LOGIN_STARTED",properties:{provider:e}}),"farcaster"===e?await d():await p(e)}},7039:(e,t,i)=>{i.r(t),i.d(t,{AppKitAccountButton:()=>E,AppKitButton:()=>W,AppKitConnectButton:()=>D,AppKitNetworkButton:()=>V,W3mAccountButton:()=>I,W3mAccountSettingsView:()=>eu,W3mAccountView:()=>eJ,W3mAllWalletsView:()=>tN,W3mButton:()=>R,W3mChooseAccountNameView:()=>i7,W3mConnectButton:()=>q,W3mConnectView:()=>iS,W3mConnectWalletsView:()=>an,W3mConnectingExternalView:()=>iZ,W3mConnectingMultiChainView:()=>iL,W3mConnectingWcBasicView:()=>i5,W3mConnectingWcView:()=>i3,W3mDownloadsView:()=>i8,W3mGetWalletView:()=>i9,W3mNetworkButton:()=>F,W3mNetworkSwitchView:()=>af,W3mNetworksView:()=>ak,W3mProfileView:()=>e3,W3mRouter:()=>J.J,W3mSIWXSignMessageView:()=>aB,W3mSwitchActiveChainView:()=>aE,W3mSwitchAddressView:()=>e7,W3mUnsupportedChainView:()=>aW,W3mWalletCompatibleNetworksView:()=>aq,W3mWhatIsANetworkView:()=>aT,W3mWhatIsAWalletView:()=>aa});var a=i(80291),o=i(32827),r=i(56778),n=i(12543),s=i(17826),l=i(68129),c=i(57754),u=i(69485),d=i(59085),p=i(25315),h=i(97778),w=i(71726),g=i(79346),f=i(98255);i(55602),i(88337),i(13076),i(7202);var b=i(67998),m=i(49231),v=i(45857);i(76178),i(38542);let y=(0,w.AH)`
  :host {
    display: block;
  }

  button {
    border-radius: var(--wui-border-radius-3xl);
    background: var(--wui-color-gray-glass-002);
    display: flex;
    gap: var(--wui-spacing-xs);
    padding: var(--wui-spacing-3xs) var(--wui-spacing-xs) var(--wui-spacing-3xs)
      var(--wui-spacing-xs);
    border: 1px solid var(--wui-color-gray-glass-005);
  }

  button:disabled {
    background: var(--wui-color-gray-glass-015);
  }

  button:disabled > wui-text {
    color: var(--wui-color-gray-glass-015);
  }

  button:disabled > wui-flex > wui-text {
    color: var(--wui-color-gray-glass-015);
  }

  button:disabled > wui-image,
  button:disabled > wui-flex > wui-avatar {
    filter: grayscale(1);
  }

  button:has(wui-image) {
    padding: var(--wui-spacing-3xs) var(--wui-spacing-3xs) var(--wui-spacing-3xs)
      var(--wui-spacing-xs);
  }

  wui-text {
    color: var(--wui-color-fg-100);
  }

  wui-flex > wui-text {
    color: var(--wui-color-fg-200);
  }

  wui-image,
  wui-icon-box {
    border-radius: var(--wui-border-radius-3xl);
    width: 24px;
    height: 24px;
    box-shadow: 0 0 0 2px var(--wui-color-gray-glass-005);
  }

  wui-flex {
    border-radius: var(--wui-border-radius-3xl);
    border: 1px solid var(--wui-color-gray-glass-005);
    background: var(--wui-color-gray-glass-005);
    padding: 4px var(--wui-spacing-m) 4px var(--wui-spacing-xxs);
  }

  button.local-no-balance {
    border-radius: 0px;
    border: none;
    background: transparent;
  }

  wui-avatar {
    width: 20px;
    height: 20px;
    box-shadow: 0 0 0 2px var(--wui-color-accent-glass-010);
  }

  @media (max-width: 500px) {
    button {
      gap: 0px;
      padding: var(--wui-spacing-3xs) var(--wui-spacing-xs) !important;
      height: 32px;
    }
    wui-image,
    wui-icon-box,
    button > wui-text {
      visibility: hidden;
      width: 0px;
      height: 0px;
    }
    button {
      border-radius: 0px;
      border: none;
      background: transparent;
      padding: 0px;
    }
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled > wui-flex > wui-text {
      color: var(--wui-color-fg-175);
    }

    button:active:enabled > wui-flex > wui-text {
      color: var(--wui-color-fg-175);
    }
  }
`;var x=function(e,t,i,a){var o,r=arguments.length,n=r<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,i):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,a);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(n=(r<3?o(n):r>3?o(t,i,n):o(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let k=class extends w.WF{constructor(){super(...arguments),this.networkSrc=void 0,this.avatarSrc=void 0,this.balance=void 0,this.isUnsupportedChain=void 0,this.disabled=!1,this.loading=!1,this.address="",this.profileName="",this.charsStart=4,this.charsEnd=6}render(){return(0,w.qy)`
      <button
        ?disabled=${this.disabled}
        class=${(0,f.J)(this.balance?void 0:"local-no-balance")}
      >
        ${this.balanceTemplate()}
        <wui-flex gap="xxs" alignItems="center">
          <wui-avatar
            .imageSrc=${this.avatarSrc}
            alt=${this.address}
            address=${this.address}
          ></wui-avatar>
          <wui-text variant="paragraph-600" color="inherit">
            ${this.address?m.Z.getTruncateString({string:this.profileName||this.address,charsStart:this.profileName?18:this.charsStart,charsEnd:this.profileName?0:this.charsEnd,truncate:this.profileName?"end":"middle"}):null}
          </wui-text>
        </wui-flex>
      </button>
    `}balanceTemplate(){if(this.isUnsupportedChain)return(0,w.qy)` <wui-icon-box
          size="sm"
          iconColor="error-100"
          backgroundColor="error-100"
          icon="warningCircle"
        ></wui-icon-box>
        <wui-text variant="paragraph-600" color="inherit"> Switch Network</wui-text>`;if(this.balance){let e=this.networkSrc?(0,w.qy)`<wui-image src=${this.networkSrc}></wui-image>`:(0,w.qy)`
            <wui-icon-box
              size="sm"
              iconColor="fg-200"
              backgroundColor="fg-300"
              icon="networkPlaceholder"
            ></wui-icon-box>
          `,t=this.loading?(0,w.qy)`<wui-loading-spinner size="md" color="fg-200"></wui-loading-spinner>`:(0,w.qy)`<wui-text variant="paragraph-600" color="inherit"> ${this.balance}</wui-text>`;return(0,w.qy)`${e} ${t}`}return null}};k.styles=[b.W5,b.fD,y],x([(0,g.MZ)()],k.prototype,"networkSrc",void 0),x([(0,g.MZ)()],k.prototype,"avatarSrc",void 0),x([(0,g.MZ)()],k.prototype,"balance",void 0),x([(0,g.MZ)({type:Boolean})],k.prototype,"isUnsupportedChain",void 0),x([(0,g.MZ)({type:Boolean})],k.prototype,"disabled",void 0),x([(0,g.MZ)({type:Boolean})],k.prototype,"loading",void 0),x([(0,g.MZ)()],k.prototype,"address",void 0),x([(0,g.MZ)()],k.prototype,"profileName",void 0),x([(0,g.MZ)()],k.prototype,"charsStart",void 0),x([(0,g.MZ)()],k.prototype,"charsEnd",void 0),k=x([(0,v.E)("wui-account-button")],k);var C=function(e,t,i,a){var o,r=arguments.length,n=r<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,i):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,a);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(n=(r<3?o(n):r>3?o(t,i,n):o(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};class $ extends a.WF{constructor(){super(...arguments),this.unsubscribe=[],this.disabled=!1,this.balance="show",this.charsStart=4,this.charsEnd=6,this.namespace=void 0,this.caipAddress=n.W.getAccountData(this.namespace)?.caipAddress,this.balanceVal=n.W.getAccountData(this.namespace)?.balance,this.balanceSymbol=n.W.getAccountData(this.namespace)?.balanceSymbol,this.profileName=n.W.getAccountData(this.namespace)?.profileName,this.profileImage=n.W.getAccountData(this.namespace)?.profileImage,this.network=n.W.getNetworkData(this.namespace)?.caipNetwork,this.networkImage=s.$.getNetworkImage(this.network),this.isSupported=!!l.H.state.allowUnsupportedChain||!n.W.state.activeChain||n.W.checkIfSupportedNetwork(n.W.state.activeChain)}firstUpdated(){let e=this.namespace;e?this.unsubscribe.push(n.W.subscribeChainProp("accountState",e=>{this.caipAddress=e?.caipAddress,this.balanceVal=e?.balance,this.balanceSymbol=e?.balanceSymbol,this.profileName=e?.profileName,this.profileImage=e?.profileImage},e),n.W.subscribeChainProp("networkState",t=>{this.network=t?.caipNetwork,this.isSupported=n.W.checkIfSupportedNetwork(e,t?.caipNetwork),this.networkImage=s.$.getNetworkImage(t?.caipNetwork)},e)):this.unsubscribe.push(c.j.subscribeNetworkImages(()=>{this.networkImage=s.$.getNetworkImage(this.network)}),n.W.subscribeKey("activeCaipAddress",e=>{this.caipAddress=e}),u.U.subscribeKey("balance",e=>this.balanceVal=e),u.U.subscribeKey("balanceSymbol",e=>this.balanceSymbol=e),u.U.subscribeKey("profileName",e=>this.profileName=e),u.U.subscribeKey("profileImage",e=>this.profileImage=e),n.W.subscribeKey("activeCaipNetwork",e=>{this.network=e,this.networkImage=s.$.getNetworkImage(e),this.isSupported=!e?.chainNamespace||n.W.checkIfSupportedNetwork(e?.chainNamespace),this.fetchNetworkImage(e)}))}updated(){this.fetchNetworkImage(this.network)}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){if(!n.W.state.activeChain)return null;let e="show"===this.balance,t="string"!=typeof this.balanceVal;return(0,a.qy)`
      <wui-account-button
        .disabled=${!!this.disabled}
        .isUnsupportedChain=${!l.H.state.allowUnsupportedChain&&!this.isSupported}
        address=${(0,r.J)(d.w.getPlainAddress(this.caipAddress))}
        profileName=${(0,r.J)(this.profileName)}
        networkSrc=${(0,r.J)(this.networkImage)}
        avatarSrc=${(0,r.J)(this.profileImage)}
        balance=${e?d.w.formatBalance(this.balanceVal,this.balanceSymbol):""}
        @click=${this.onClick.bind(this)}
        data-testid=${`account-button${this.namespace?`-${this.namespace}`:""}`}
        .charsStart=${this.charsStart}
        .charsEnd=${this.charsEnd}
        ?loading=${t}
      >
      </wui-account-button>
    `}async onClick(){await n.W.switchActiveNamespace(this.namespace),this.isSupported||l.H.state.allowUnsupportedChain?p.W.open():p.W.open({view:"UnsupportedChain"})}async fetchNetworkImage(e){e?.assets?.imageId&&(this.networkImage=await s.$.fetchNetworkImage(e?.assets?.imageId))}}C([(0,o.MZ)({type:Boolean})],$.prototype,"disabled",void 0),C([(0,o.MZ)()],$.prototype,"balance",void 0),C([(0,o.MZ)()],$.prototype,"charsStart",void 0),C([(0,o.MZ)()],$.prototype,"charsEnd",void 0),C([(0,o.MZ)()],$.prototype,"namespace",void 0),C([(0,o.wk)()],$.prototype,"caipAddress",void 0),C([(0,o.wk)()],$.prototype,"balanceVal",void 0),C([(0,o.wk)()],$.prototype,"balanceSymbol",void 0),C([(0,o.wk)()],$.prototype,"profileName",void 0),C([(0,o.wk)()],$.prototype,"profileImage",void 0),C([(0,o.wk)()],$.prototype,"network",void 0),C([(0,o.wk)()],$.prototype,"networkImage",void 0),C([(0,o.wk)()],$.prototype,"isSupported",void 0);let I=class extends ${};I=C([(0,h.EM)("w3m-account-button")],I);let E=class extends ${};E=C([(0,h.EM)("appkit-account-button")],E);let A=(0,a.AH)`
  :host {
    display: block;
    width: max-content;
  }
`;var T=function(e,t,i,a){var o,r=arguments.length,n=r<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,i):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,a);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(n=(r<3?o(n):r>3?o(t,i,n):o(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};class S extends a.WF{constructor(){super(...arguments),this.unsubscribe=[],this.disabled=!1,this.balance=void 0,this.size=void 0,this.label=void 0,this.loadingLabel=void 0,this.charsStart=4,this.charsEnd=6,this.namespace=void 0,this.caipAddress=n.W.state.activeCaipAddress}firstUpdated(){this.namespace?this.unsubscribe.push(n.W.subscribeChainProp("accountState",e=>{this.caipAddress=e?.caipAddress},this.namespace)):this.unsubscribe.push(n.W.subscribeKey("activeCaipAddress",e=>this.caipAddress=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return this.caipAddress?(0,a.qy)`
          <appkit-account-button
            .disabled=${!!this.disabled}
            balance=${(0,r.J)(this.balance)}
            .charsStart=${(0,r.J)(this.charsStart)}
            .charsEnd=${(0,r.J)(this.charsEnd)}
            namespace=${(0,r.J)(this.namespace)}
          >
          </appkit-account-button>
        `:(0,a.qy)`
          <appkit-connect-button
            size=${(0,r.J)(this.size)}
            label=${(0,r.J)(this.label)}
            loadingLabel=${(0,r.J)(this.loadingLabel)}
            namespace=${(0,r.J)(this.namespace)}
          ></appkit-connect-button>
        `}}S.styles=A,T([(0,o.MZ)({type:Boolean})],S.prototype,"disabled",void 0),T([(0,o.MZ)()],S.prototype,"balance",void 0),T([(0,o.MZ)()],S.prototype,"size",void 0),T([(0,o.MZ)()],S.prototype,"label",void 0),T([(0,o.MZ)()],S.prototype,"loadingLabel",void 0),T([(0,o.MZ)()],S.prototype,"charsStart",void 0),T([(0,o.MZ)()],S.prototype,"charsEnd",void 0),T([(0,o.MZ)()],S.prototype,"namespace",void 0),T([(0,o.wk)()],S.prototype,"caipAddress",void 0);let R=class extends S{};R=T([(0,h.EM)("w3m-button")],R);let W=class extends S{};W=T([(0,h.EM)("appkit-button")],W);let O=(0,w.AH)`
  :host {
    position: relative;
    display: block;
  }

  button {
    background: var(--wui-color-accent-100);
    border: 1px solid var(--wui-color-gray-glass-010);
    border-radius: var(--wui-border-radius-m);
    gap: var(--wui-spacing-xs);
  }

  button.loading {
    background: var(--wui-color-gray-glass-010);
    border: 1px solid var(--wui-color-gray-glass-010);
    pointer-events: none;
  }

  button:disabled {
    background-color: var(--wui-color-gray-glass-015);
    border: 1px solid var(--wui-color-gray-glass-010);
  }

  button:disabled > wui-text {
    color: var(--wui-color-gray-glass-015);
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled {
      background-color: var(--wui-color-accent-090);
    }

    button:active:enabled {
      background-color: var(--wui-color-accent-080);
    }
  }

  button:focus-visible {
    border: 1px solid var(--wui-color-gray-glass-010);
    background-color: var(--wui-color-accent-090);
    -webkit-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    -moz-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
  }

  button[data-size='sm'] {
    padding: 6.75px 10px 7.25px;
  }

  ::slotted(*) {
    transition: opacity var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: opacity;
    opacity: var(--local-opacity-100);
  }

  button > wui-text {
    transition: opacity var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: opacity;
    opacity: var(--local-opacity-100);
    color: var(--wui-color-inverse-100);
  }

  button[data-size='md'] {
    padding: 9px var(--wui-spacing-l) 9px var(--wui-spacing-l);
  }

  button[data-size='md'] + wui-text {
    padding-left: var(--wui-spacing-3xs);
  }

  @media (max-width: 500px) {
    button[data-size='md'] {
      height: 32px;
      padding: 5px 12px;
    }

    button[data-size='md'] > wui-text > slot {
      font-size: 14px !important;
    }
  }

  wui-loading-spinner {
    width: 14px;
    height: 14px;
  }

  wui-loading-spinner::slotted(svg) {
    width: 10px !important;
    height: 10px !important;
  }

  button[data-size='sm'] > wui-loading-spinner {
    width: 12px;
    height: 12px;
  }
`;var N=function(e,t,i,a){var o,r=arguments.length,n=r<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,i):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,a);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(n=(r<3?o(n):r>3?o(t,i,n):o(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let j=class extends w.WF{constructor(){super(...arguments),this.size="md",this.loading=!1}render(){let e="md"===this.size?"paragraph-600":"small-600";return(0,w.qy)`
      <button data-size=${this.size} ?disabled=${this.loading}>
        ${this.loadingTemplate()}
        <wui-text variant=${e} color=${this.loading?"accent-100":"inherit"}>
          <slot></slot>
        </wui-text>
      </button>
    `}loadingTemplate(){return this.loading?(0,w.qy)`<wui-loading-spinner size=${this.size} color="accent-100"></wui-loading-spinner>`:null}};j.styles=[b.W5,b.fD,O],N([(0,g.MZ)()],j.prototype,"size",void 0),N([(0,g.MZ)({type:Boolean})],j.prototype,"loading",void 0),j=N([(0,v.E)("wui-connect-button")],j);var M=function(e,t,i,a){var o,r=arguments.length,n=r<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,i):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,a);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(n=(r<3?o(n):r>3?o(t,i,n):o(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};class P extends a.WF{constructor(){super(),this.unsubscribe=[],this.size="md",this.label="Connect Wallet",this.loadingLabel="Connecting...",this.open=p.W.state.open,this.loading=this.namespace?p.W.state.loadingNamespaceMap.get(this.namespace):p.W.state.loading,this.unsubscribe.push(p.W.subscribe(e=>{this.open=e.open,this.loading=this.namespace?e.loadingNamespaceMap.get(this.namespace):e.loading}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return(0,a.qy)`
      <wui-connect-button
        size=${(0,r.J)(this.size)}
        .loading=${this.loading}
        @click=${this.onClick.bind(this)}
        data-testid=${`connect-button${this.namespace?`-${this.namespace}`:""}`}
      >
        ${this.loading?this.loadingLabel:this.label}
      </wui-connect-button>
    `}onClick(){this.open?p.W.close():this.loading||p.W.open({view:"Connect",namespace:this.namespace})}}M([(0,o.MZ)()],P.prototype,"size",void 0),M([(0,o.MZ)()],P.prototype,"label",void 0),M([(0,o.MZ)()],P.prototype,"loadingLabel",void 0),M([(0,o.MZ)()],P.prototype,"namespace",void 0),M([(0,o.wk)()],P.prototype,"open",void 0),M([(0,o.wk)()],P.prototype,"loading",void 0);let q=class extends P{};q=M([(0,h.EM)("w3m-connect-button")],q);let D=class extends P{};D=M([(0,h.EM)("appkit-connect-button")],D);var U=i(66699);let Z=(0,w.AH)`
  :host {
    display: block;
  }

  button {
    border-radius: var(--wui-border-radius-3xl);
    display: flex;
    gap: var(--wui-spacing-xs);
    padding: var(--wui-spacing-2xs) var(--wui-spacing-s) var(--wui-spacing-2xs)
      var(--wui-spacing-xs);
    border: 1px solid var(--wui-color-gray-glass-010);
    background-color: var(--wui-color-gray-glass-005);
    color: var(--wui-color-fg-100);
  }

  button:disabled {
    border: 1px solid var(--wui-color-gray-glass-005);
    background-color: var(--wui-color-gray-glass-015);
    color: var(--wui-color-gray-glass-015);
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled {
      background-color: var(--wui-color-gray-glass-010);
    }

    button:active:enabled {
      background-color: var(--wui-color-gray-glass-015);
    }
  }

  wui-image,
  wui-icon-box {
    border-radius: var(--wui-border-radius-3xl);
    width: 24px;
    height: 24px;
    box-shadow: 0 0 0 2px var(--wui-color-gray-glass-005);
  }
`;var z=function(e,t,i,a){var o,r=arguments.length,n=r<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,i):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,a);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(n=(r<3?o(n):r>3?o(t,i,n):o(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let _=class extends w.WF{constructor(){super(...arguments),this.imageSrc=void 0,this.isUnsupportedChain=void 0,this.disabled=!1}render(){return(0,w.qy)`
      <button data-testid="wui-network-button" ?disabled=${this.disabled}>
        ${this.visualTemplate()}
        <wui-text variant="paragraph-600" color="inherit">
          <slot></slot>
        </wui-text>
      </button>
    `}visualTemplate(){return this.isUnsupportedChain?(0,w.qy)`
        <wui-icon-box
          size="sm"
          iconColor="error-100"
          backgroundColor="error-100"
          icon="warningCircle"
        ></wui-icon-box>
      `:this.imageSrc?(0,w.qy)`<wui-image src=${this.imageSrc}></wui-image>`:(0,w.qy)`
      <wui-icon-box
        size="sm"
        iconColor="inverse-100"
        backgroundColor="fg-100"
        icon="networkPlaceholder"
      ></wui-icon-box>
    `}};_.styles=[b.W5,b.fD,Z],z([(0,g.MZ)()],_.prototype,"imageSrc",void 0),z([(0,g.MZ)({type:Boolean})],_.prototype,"isUnsupportedChain",void 0),z([(0,g.MZ)({type:Boolean})],_.prototype,"disabled",void 0),_=z([(0,v.E)("wui-network-button")],_);let L=(0,a.AH)`
  :host {
    display: block;
    width: max-content;
  }
`;var H=function(e,t,i,a){var o,r=arguments.length,n=r<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,i):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,a);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(n=(r<3?o(n):r>3?o(t,i,n):o(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};class B extends a.WF{constructor(){super(),this.unsubscribe=[],this.disabled=!1,this.network=n.W.state.activeCaipNetwork,this.networkImage=s.$.getNetworkImage(this.network),this.caipAddress=n.W.state.activeCaipAddress,this.loading=p.W.state.loading,this.isSupported=!!l.H.state.allowUnsupportedChain||!n.W.state.activeChain||n.W.checkIfSupportedNetwork(n.W.state.activeChain),this.unsubscribe.push(c.j.subscribeNetworkImages(()=>{this.networkImage=s.$.getNetworkImage(this.network)}),n.W.subscribeKey("activeCaipAddress",e=>{this.caipAddress=e}),n.W.subscribeKey("activeCaipNetwork",e=>{this.network=e,this.networkImage=s.$.getNetworkImage(e),this.isSupported=!e?.chainNamespace||n.W.checkIfSupportedNetwork(e.chainNamespace),s.$.fetchNetworkImage(e?.assets?.imageId)}),p.W.subscribeKey("loading",e=>this.loading=e))}firstUpdated(){s.$.fetchNetworkImage(this.network?.assets?.imageId)}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){let e=!this.network||n.W.checkIfSupportedNetwork(this.network.chainNamespace);return(0,a.qy)`
      <wui-network-button
        .disabled=${!!(this.disabled||this.loading)}
        .isUnsupportedChain=${!l.H.state.allowUnsupportedChain&&!e}
        imageSrc=${(0,r.J)(this.networkImage)}
        @click=${this.onClick.bind(this)}
        data-testid="w3m-network-button"
      >
        ${this.getLabel()}
        <slot></slot>
      </wui-network-button>
    `}getLabel(){return this.network?this.isSupported||l.H.state.allowUnsupportedChain?this.network.name:"Switch Network":this.label?this.label:this.caipAddress?"Unknown Network":"Select Network"}onClick(){this.loading||(U.E.sendEvent({type:"track",event:"CLICK_NETWORKS"}),p.W.open({view:"Networks"}))}}B.styles=L,H([(0,o.MZ)({type:Boolean})],B.prototype,"disabled",void 0),H([(0,o.MZ)({type:String})],B.prototype,"label",void 0),H([(0,o.wk)()],B.prototype,"network",void 0),H([(0,o.wk)()],B.prototype,"networkImage",void 0),H([(0,o.wk)()],B.prototype,"caipAddress",void 0),H([(0,o.wk)()],B.prototype,"loading",void 0),H([(0,o.wk)()],B.prototype,"isSupported",void 0);let F=class extends B{};F=H([(0,h.EM)("w3m-network-button")],F);let V=class extends B{};V=H([(0,h.EM)("appkit-network-button")],V);var J=i(68588),K=i(11731),G=i(9921),Y=i(88515),X=i(10840),Q=i(83503),ee=i(8226),et=i(85722);i(58301),i(56560),i(77749),i(43666),i(64001);let ei=(0,w.AH)`
  :host {
    display: block;
  }

  button {
    width: 100%;
    display: block;
    padding-top: var(--wui-spacing-l);
    padding-bottom: var(--wui-spacing-l);
    padding-left: var(--wui-spacing-s);
    padding-right: var(--wui-spacing-2l);
    border-radius: var(--wui-border-radius-s);
    background-color: var(--wui-color-accent-glass-010);
  }

  button:hover {
    background-color: var(--wui-color-accent-glass-015) !important;
  }

  button:active {
    background-color: var(--wui-color-accent-glass-020) !important;
  }
`;var ea=function(e,t,i,a){var o,r=arguments.length,n=r<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,i):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,a);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(n=(r<3?o(n):r>3?o(t,i,n):o(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let eo=class extends w.WF{constructor(){super(...arguments),this.label="",this.description="",this.icon="wallet"}render(){return(0,w.qy)`
      <button>
        <wui-flex gap="m" alignItems="center" justifyContent="space-between">
          <wui-icon-box
            size="lg"
            iconcolor="accent-100"
            backgroundcolor="accent-100"
            icon=${this.icon}
            background="transparent"
          ></wui-icon-box>

          <wui-flex flexDirection="column" gap="3xs">
            <wui-text variant="paragraph-500" color="fg-100">${this.label}</wui-text>
            <wui-text variant="small-400" color="fg-200">${this.description}</wui-text>
          </wui-flex>

          <wui-icon size="md" color="fg-200" name="chevronRight"></wui-icon>
        </wui-flex>
      </button>
    `}};eo.styles=[b.W5,b.fD,ei],ea([(0,g.MZ)()],eo.prototype,"label",void 0),ea([(0,g.MZ)()],eo.prototype,"description",void 0),ea([(0,g.MZ)()],eo.prototype,"icon",void 0),eo=ea([(0,v.E)("wui-notice-card")],eo),i(85893);var er=i(32375),en=i(38623),es=function(e,t,i,a){var o,r=arguments.length,n=r<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,i):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,a);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(n=(r<3?o(n):r>3?o(t,i,n):o(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let el=class extends a.WF{constructor(){super(),this.unsubscribe=[],this.socialProvider=en.i.getConnectedSocialProvider(),this.socialUsername=en.i.getConnectedSocialUsername(),this.namespace=n.W.state.activeChain,this.unsubscribe.push(n.W.subscribeKey("activeChain",e=>{this.namespace=e}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){let e=G.a.getConnectorId(this.namespace),t=G.a.getAuthConnector();if(!t||e!==K.o.CONNECTOR_ID.AUTH)return this.style.cssText="display: none",null;let i=t.provider.getEmail()??"";return i||this.socialUsername?(0,a.qy)`
      <wui-list-item
        variant="icon"
        iconVariant="overlay"
        icon=${this.socialProvider??"mail"}
        iconSize=${this.socialProvider?"xxl":"sm"}
        data-testid="w3m-account-email-update"
        ?chevron=${!this.socialProvider}
        @click=${()=>{this.onGoToUpdateEmail(i,this.socialProvider)}}
      >
        <wui-text variant="paragraph-500" color="fg-100">${this.getAuthName(i)}</wui-text>
      </wui-list-item>
    `:(this.style.cssText="display: none",null)}onGoToUpdateEmail(e,t){t||Q.I.push("UpdateEmailWallet",{email:e,redirectView:"Account"})}getAuthName(e){return this.socialUsername?"discord"===this.socialProvider&&this.socialUsername.endsWith("0")?this.socialUsername.slice(0,-1):this.socialUsername:e.length>30?`${e.slice(0,-3)}...`:e}};es([(0,o.wk)()],el.prototype,"namespace",void 0),el=es([(0,h.EM)("w3m-account-auth-button")],el);var ec=function(e,t,i,a){var o,r=arguments.length,n=r<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,i):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,a);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(n=(r<3?o(n):r>3?o(t,i,n):o(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let eu=class extends a.WF{constructor(){super(),this.usubscribe=[],this.networkImages=c.j.state.networkImages,this.address=u.U.state.address,this.profileImage=u.U.state.profileImage,this.profileName=u.U.state.profileName,this.network=n.W.state.activeCaipNetwork,this.preferredAccountTypes=u.U.state.preferredAccountTypes,this.disconnecting=!1,this.loading=!1,this.switched=!1,this.text="",this.usubscribe.push(u.U.subscribe(e=>{e.address?(this.address=e.address,this.profileImage=e.profileImage,this.profileName=e.profileName,this.preferredAccountTypes=e.preferredAccountTypes):p.W.close()}),u.U.subscribeKey("preferredAccountTypes",e=>this.preferredAccountTypes=e),n.W.subscribeKey("activeCaipNetwork",e=>{e?.id&&(this.network=e)}))}disconnectedCallback(){this.usubscribe.forEach(e=>e())}render(){if(!this.address)throw Error("w3m-account-settings-view: No account provided");let e=this.networkImages[this.network?.assets?.imageId??""];return(0,a.qy)`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        gap="l"
        .padding=${["0","xl","m","xl"]}
      >
        <wui-avatar
          alt=${this.address}
          address=${this.address}
          imageSrc=${(0,r.J)(this.profileImage)}
          size="2lg"
        ></wui-avatar>
        <wui-flex flexDirection="column" alignItems="center">
          <wui-flex gap="3xs" alignItems="center" justifyContent="center">
            <wui-text variant="title-6-600" color="fg-100" data-testid="account-settings-address">
              ${h.Zv.getTruncateString({string:this.address,charsStart:4,charsEnd:6,truncate:"middle"})}
            </wui-text>
            <wui-icon-link
              size="md"
              icon="copy"
              iconColor="fg-200"
              @click=${this.onCopyAddress}
            ></wui-icon-link>
          </wui-flex>
        </wui-flex>
      </wui-flex>
      <wui-flex flexDirection="column" gap="m">
        <wui-flex flexDirection="column" gap="xs" .padding=${["0","l","m","l"]}>
          ${this.authCardTemplate()}
          <w3m-account-auth-button></w3m-account-auth-button>
          <wui-list-item
            .variant=${e?"image":"icon"}
            iconVariant="overlay"
            icon="networkPlaceholder"
            imageSrc=${(0,r.J)(e)}
            ?chevron=${this.isAllowedNetworkSwitch()}
            @click=${this.onNetworks.bind(this)}
            data-testid="account-switch-network-button"
          >
            <wui-text variant="paragraph-500" color="fg-100">
              ${this.network?.name??"Unknown"}
            </wui-text>
          </wui-list-item>
          ${this.togglePreferredAccountBtnTemplate()} ${this.chooseNameButtonTemplate()}
          <wui-list-item
            variant="icon"
            iconVariant="overlay"
            icon="disconnect"
            ?chevron=${!1}
            .loading=${this.disconnecting}
            @click=${this.onDisconnect.bind(this)}
            data-testid="disconnect-button"
          >
            <wui-text variant="paragraph-500" color="fg-200">Disconnect</wui-text>
          </wui-list-item>
        </wui-flex>
      </wui-flex>
    `}chooseNameButtonTemplate(){let e=this.network?.chainNamespace,t=G.a.getConnectorId(e),i=G.a.getAuthConnector();return n.W.checkIfNamesSupported()&&i&&t===K.o.CONNECTOR_ID.AUTH&&!this.profileName?(0,a.qy)`
      <wui-list-item
        variant="icon"
        iconVariant="overlay"
        icon="id"
        iconSize="sm"
        ?chevron=${!0}
        @click=${this.onChooseName.bind(this)}
        data-testid="account-choose-name-button"
      >
        <wui-text variant="paragraph-500" color="fg-100">Choose account name </wui-text>
      </wui-list-item>
    `:null}authCardTemplate(){let e=this.network?.chainNamespace,t=G.a.getConnectorId(e),i=G.a.getAuthConnector(),{origin:o}=location;return!i||t!==K.o.CONNECTOR_ID.AUTH||o.includes(Y.oU.SECURE_SITE)?null:(0,a.qy)`
      <wui-notice-card
        @click=${this.onGoToUpgradeView.bind(this)}
        label="Upgrade your wallet"
        description="Transition to a self-custodial wallet"
        icon="wallet"
        data-testid="w3m-wallet-upgrade-card"
      ></wui-notice-card>
    `}isAllowedNetworkSwitch(){let e=n.W.getAllRequestedCaipNetworks(),t=!!e&&e.length>1,i=e?.find(({id:e})=>e===this.network?.id);return t||!i}onCopyAddress(){try{this.address&&(d.w.copyToClopboard(this.address),X.P.showSuccess("Address copied"))}catch{X.P.showError("Failed to copy")}}togglePreferredAccountBtnTemplate(){let e=this.network?.chainNamespace,t=n.W.checkIfSmartAccountEnabled(),i=G.a.getConnectorId(e);return G.a.getAuthConnector()&&i===K.o.CONNECTOR_ID.AUTH&&t?(this.switched||(this.text=this.preferredAccountTypes?.[e]===er.Vl.ACCOUNT_TYPES.SMART_ACCOUNT?"Switch to your EOA":"Switch to your smart account"),(0,a.qy)`
      <wui-list-item
        variant="icon"
        iconVariant="overlay"
        icon="swapHorizontalBold"
        iconSize="sm"
        ?chevron=${!0}
        ?loading=${this.loading}
        @click=${this.changePreferredAccountType.bind(this)}
        data-testid="account-toggle-preferred-account-type"
      >
        <wui-text variant="paragraph-500" color="fg-100">${this.text}</wui-text>
      </wui-list-item>
    `):null}onChooseName(){Q.I.push("ChooseAccountName")}async changePreferredAccountType(){let e=this.network?.chainNamespace,t=n.W.checkIfSmartAccountEnabled(),i=this.preferredAccountTypes?.[e]!==er.Vl.ACCOUNT_TYPES.SMART_ACCOUNT&&t?er.Vl.ACCOUNT_TYPES.SMART_ACCOUNT:er.Vl.ACCOUNT_TYPES.EOA;G.a.getAuthConnector()&&(this.loading=!0,await ee.x.setPreferredAccountType(i,e),this.text=i===er.Vl.ACCOUNT_TYPES.SMART_ACCOUNT?"Switch to your EOA":"Switch to your smart account",this.switched=!0,et.R.resetSend(),this.loading=!1,this.requestUpdate())}onNetworks(){this.isAllowedNetworkSwitch()&&Q.I.push("Networks")}async onDisconnect(){try{this.disconnecting=!0,await ee.x.disconnect(),p.W.close()}catch{U.E.sendEvent({type:"track",event:"DISCONNECT_ERROR"}),X.P.showError("Failed to disconnect")}finally{this.disconnecting=!1}}onGoToUpgradeView(){U.E.sendEvent({type:"track",event:"EMAIL_UPGRADE_FROM_MODAL"}),Q.I.push("UpgradeEmailWallet")}};ec([(0,o.wk)()],eu.prototype,"address",void 0),ec([(0,o.wk)()],eu.prototype,"profileImage",void 0),ec([(0,o.wk)()],eu.prototype,"profileName",void 0),ec([(0,o.wk)()],eu.prototype,"network",void 0),ec([(0,o.wk)()],eu.prototype,"preferredAccountTypes",void 0),ec([(0,o.wk)()],eu.prototype,"disconnecting",void 0),ec([(0,o.wk)()],eu.prototype,"loading",void 0),ec([(0,o.wk)()],eu.prototype,"switched",void 0),ec([(0,o.wk)()],eu.prototype,"text",void 0),eu=ec([(0,h.EM)("w3m-account-settings-view")],eu),i(83066),i(66571);let ed=(0,w.AH)`
  button {
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-3xl);
    border: 1px solid var(--wui-color-gray-glass-002);
    padding: var(--wui-spacing-xs) var(--wui-spacing-s) var(--wui-spacing-xs) var(--wui-spacing-xs);
    position: relative;
  }

  wui-avatar {
    width: 32px;
    height: 32px;
    box-shadow: 0 0 0 0;
    outline: 3px solid var(--wui-color-gray-glass-005);
  }

  wui-icon-box,
  wui-image {
    width: 16px;
    height: 16px;
    border-radius: var(--wui-border-radius-3xl);
    position: absolute;
    left: 26px;
    top: 24px;
  }

  wui-image {
    outline: 2px solid var(--wui-color-bg-125);
  }

  wui-icon-box {
    outline: 2px solid var(--wui-color-bg-200);
    background-color: var(--wui-color-bg-250);
  }
`;var ep=function(e,t,i,a){var o,r=arguments.length,n=r<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,i):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,a);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(n=(r<3?o(n):r>3?o(t,i,n):o(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let eh=class extends w.WF{constructor(){super(...arguments),this.avatarSrc=void 0,this.profileName="",this.address="",this.icon="mail"}render(){let e=n.W.state.activeChain,t=G.a.getConnectorId(e)===K.o.CONNECTOR_ID.AUTH;return(0,w.qy)`<button data-testid="wui-profile-button" @click=${this.handleClick}>
      <wui-flex gap="xs" alignItems="center">
        <wui-avatar
          .imageSrc=${this.avatarSrc}
          alt=${this.address}
          address=${this.address}
        ></wui-avatar>
        ${t?this.getIconTemplate(this.icon):""}
        <wui-flex gap="xs" alignItems="center">
          <wui-text variant="large-600" color="fg-100">
            ${m.Z.getTruncateString({string:this.profileName||this.address,charsStart:this.profileName?18:4,charsEnd:this.profileName?0:4,truncate:this.profileName?"end":"middle"})}
          </wui-text>
          <wui-icon size="sm" color="fg-200" name="copy" id="copy-address"></wui-icon>
        </wui-flex>
      </wui-flex>
    </button>`}handleClick(e){if(e.target instanceof HTMLElement&&"copy-address"===e.target.id){this.onCopyClick?.(e);return}this.onProfileClick?.(e)}getIconTemplate(e){return(0,w.qy)`
      <wui-icon-box
        size="xxs"
        iconColor="fg-200"
        backgroundColor="bg-100"
        icon="${e||"networkPlaceholder"}"
      ></wui-icon-box>
    `}};eh.styles=[b.W5,b.fD,ed],ep([(0,g.MZ)()],eh.prototype,"avatarSrc",void 0),ep([(0,g.MZ)()],eh.prototype,"profileName",void 0),ep([(0,g.MZ)()],eh.prototype,"address",void 0),ep([(0,g.MZ)()],eh.prototype,"icon",void 0),ep([(0,g.MZ)()],eh.prototype,"onProfileClick",void 0),ep([(0,g.MZ)()],eh.prototype,"onCopyClick",void 0),eh=ep([(0,v.E)("wui-profile-button-v2")],eh);let ew=(0,w.AH)`
  :host {
    display: inline-flex;
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-3xl);
    padding: var(--wui-spacing-3xs);
    position: relative;
    height: 36px;
    min-height: 36px;
    overflow: hidden;
  }

  :host::before {
    content: '';
    position: absolute;
    pointer-events: none;
    top: 4px;
    left: 4px;
    display: block;
    width: var(--local-tab-width);
    height: 28px;
    border-radius: var(--wui-border-radius-3xl);
    background-color: var(--wui-color-gray-glass-002);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-002);
    transform: translateX(calc(var(--local-tab) * var(--local-tab-width)));
    transition: transform var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: background-color, opacity;
  }

  :host([data-type='flex'])::before {
    left: 3px;
    transform: translateX(calc((var(--local-tab) * 34px) + (var(--local-tab) * 4px)));
  }

  :host([data-type='flex']) {
    display: flex;
    padding: 0px 0px 0px 12px;
    gap: 4px;
  }

  :host([data-type='flex']) > button > wui-text {
    position: absolute;
    left: 18px;
    opacity: 0;
  }

  button[data-active='true'] > wui-icon,
  button[data-active='true'] > wui-text {
    color: var(--wui-color-fg-100);
  }

  button[data-active='false'] > wui-icon,
  button[data-active='false'] > wui-text {
    color: var(--wui-color-fg-200);
  }

  button[data-active='true']:disabled,
  button[data-active='false']:disabled {
    background-color: transparent;
    opacity: 0.5;
    cursor: not-allowed;
  }

  button[data-active='true']:disabled > wui-text {
    color: var(--wui-color-fg-200);
  }

  button[data-active='false']:disabled > wui-text {
    color: var(--wui-color-fg-300);
  }

  button > wui-icon,
  button > wui-text {
    pointer-events: none;
    transition: color var(--wui-e ase-out-power-1) var(--wui-duration-md);
    will-change: color;
  }

  button {
    width: var(--local-tab-width);
    transition: background-color var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: background-color;
  }

  :host([data-type='flex']) > button {
    width: 34px;
    position: relative;
    display: flex;
    justify-content: flex-start;
  }

  button:hover:enabled,
  button:active:enabled {
    background-color: transparent !important;
  }

  button:hover:enabled > wui-icon,
  button:active:enabled > wui-icon {
    transition: all var(--wui-ease-out-power-1) var(--wui-duration-lg);
    color: var(--wui-color-fg-125);
  }

  button:hover:enabled > wui-text,
  button:active:enabled > wui-text {
    transition: all var(--wui-ease-out-power-1) var(--wui-duration-lg);
    color: var(--wui-color-fg-125);
  }

  button {
    border-radius: var(--wui-border-radius-3xl);
  }
`;var eg=function(e,t,i,a){var o,r=arguments.length,n=r<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,i):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,a);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(n=(r<3?o(n):r>3?o(t,i,n):o(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let ef=class extends w.WF{constructor(){super(...arguments),this.tabs=[],this.onTabChange=()=>null,this.buttons=[],this.disabled=!1,this.localTabWidth="100px",this.activeTab=0,this.isDense=!1}render(){return this.isDense=this.tabs.length>3,this.style.cssText=`
      --local-tab: ${this.activeTab};
      --local-tab-width: ${this.localTabWidth};
    `,this.dataset.type=this.isDense?"flex":"block",this.tabs.map((e,t)=>{let i=t===this.activeTab;return(0,w.qy)`
        <button
          ?disabled=${this.disabled}
          @click=${()=>this.onTabClick(t)}
          data-active=${i}
          data-testid="tab-${e.label?.toLowerCase()}"
        >
          ${this.iconTemplate(e)}
          <wui-text variant="small-600" color="inherit"> ${e.label} </wui-text>
        </button>
      `})}firstUpdated(){this.shadowRoot&&this.isDense&&(this.buttons=[...this.shadowRoot.querySelectorAll("button")],setTimeout(()=>{this.animateTabs(0,!0)},0))}iconTemplate(e){return e.icon?(0,w.qy)`<wui-icon size="xs" color="inherit" name=${e.icon}></wui-icon>`:null}onTabClick(e){this.buttons&&this.animateTabs(e,!1),this.activeTab=e,this.onTabChange(e)}animateTabs(e,t){let i=this.buttons[this.activeTab],a=this.buttons[e],o=i?.querySelector("wui-text"),r=a?.querySelector("wui-text"),n=a?.getBoundingClientRect(),s=r?.getBoundingClientRect();i&&o&&!t&&e!==this.activeTab&&(o.animate([{opacity:0}],{duration:50,easing:"ease",fill:"forwards"}),i.animate([{width:"34px"}],{duration:500,easing:"ease",fill:"forwards"})),a&&n&&s&&r&&(e!==this.activeTab||t)&&(this.localTabWidth=`${Math.round(n.width+s.width)+6}px`,a.animate([{width:`${n.width+s.width}px`}],{duration:t?0:500,fill:"forwards",easing:"ease"}),r.animate([{opacity:1}],{duration:t?0:125,delay:t?0:200,fill:"forwards",easing:"ease"}))}};ef.styles=[b.W5,b.fD,ew],eg([(0,g.MZ)({type:Array})],ef.prototype,"tabs",void 0),eg([(0,g.MZ)()],ef.prototype,"onTabChange",void 0),eg([(0,g.MZ)({type:Array})],ef.prototype,"buttons",void 0),eg([(0,g.MZ)({type:Boolean})],ef.prototype,"disabled",void 0),eg([(0,g.MZ)()],ef.prototype,"localTabWidth",void 0),eg([(0,g.wk)()],ef.prototype,"activeTab",void 0),eg([(0,g.wk)()],ef.prototype,"isDense",void 0),ef=eg([(0,v.E)("wui-tabs")],ef),i(23166);let eb=(0,a.AH)`
  wui-flex {
    width: 100%;
  }

  :host > wui-flex:first-child {
    transform: translateY(calc(var(--wui-spacing-xxs) * -1));
  }

  wui-icon-link {
    margin-right: calc(var(--wui-icon-box-size-md) * -1);
  }

  wui-notice-card {
    margin-bottom: var(--wui-spacing-3xs);
  }

  wui-list-item > wui-text {
    flex: 1;
  }

  w3m-transactions-view {
    max-height: 200px;
  }

  .tab-content-container {
    height: 300px;
    overflow-y: auto;
    overflow-x: hidden;
    scrollbar-width: none;
  }

  .tab-content-container::-webkit-scrollbar {
    display: none;
  }

  .account-button {
    width: auto;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: var(--wui-spacing-s);
    height: 48px;
    padding: var(--wui-spacing-xs);
    padding-right: var(--wui-spacing-s);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-002);
    background-color: var(--wui-color-gray-glass-002);
    border-radius: 24px;
    transition: background-color 0.2s linear;
  }

  .account-button:hover {
    background-color: var(--wui-color-gray-glass-005);
  }

  .avatar-container {
    position: relative;
  }

  wui-avatar.avatar {
    width: 32px;
    height: 32px;
    box-shadow: 0 0 0 2px var(--wui-color-gray-glass-005);
  }

  wui-avatar.network-avatar {
    width: 16px;
    height: 16px;
    position: absolute;
    left: 100%;
    top: 100%;
    transform: translate(-75%, -75%);
    box-shadow: 0 0 0 2px var(--wui-color-gray-glass-005);
  }

  .account-links {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .account-links wui-flex {
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;
    background: red;
    align-items: center;
    justify-content: center;
    height: 48px;
    padding: 10px;
    flex: 1 0 0;
    border-radius: var(--XS, 16px);
    border: 1px solid var(--dark-accent-glass-010, rgba(71, 161, 255, 0.1));
    background: var(--dark-accent-glass-010, rgba(71, 161, 255, 0.1));
    transition:
      background-color var(--wui-ease-out-power-1) var(--wui-duration-md),
      opacity var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: background-color, opacity;
  }

  .account-links wui-flex:hover {
    background: var(--dark-accent-glass-015, rgba(71, 161, 255, 0.15));
  }

  .account-links wui-flex wui-icon {
    width: var(--S, 20px);
    height: var(--S, 20px);
  }

  .account-links wui-flex wui-icon svg path {
    stroke: #667dff;
  }
`;var em=function(e,t,i,a){var o,r=arguments.length,n=r<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,i):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,a);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(n=(r<3?o(n):r>3?o(t,i,n):o(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let ev=class extends a.WF{constructor(){super(),this.unsubscribe=[],this.caipAddress=u.U.state.caipAddress,this.address=d.w.getPlainAddress(u.U.state.caipAddress),this.allAccounts=u.U.state.allAccounts,this.profileImage=u.U.state.profileImage,this.profileName=u.U.state.profileName,this.disconnecting=!1,this.balance=u.U.state.balance,this.balanceSymbol=u.U.state.balanceSymbol,this.features=l.H.state.features,this.namespace=n.W.state.activeChain,this.chainId=n.W.state.activeCaipNetwork?.id,this.unsubscribe.push(u.U.subscribeKey("caipAddress",e=>{this.address=d.w.getPlainAddress(e),this.caipAddress=e}),u.U.subscribeKey("balance",e=>this.balance=e),u.U.subscribeKey("balanceSymbol",e=>this.balanceSymbol=e),u.U.subscribeKey("profileName",e=>this.profileName=e),u.U.subscribeKey("profileImage",e=>this.profileImage=e),l.H.subscribeKey("features",e=>this.features=e),u.U.subscribeKey("allAccounts",e=>{this.allAccounts=e}),n.W.subscribeKey("activeChain",e=>this.namespace=e),n.W.subscribeKey("activeCaipNetwork",e=>{if(e){let[t,i]=e?.caipNetworkId?.split(":")||[];t&&i&&(this.namespace=t,this.chainId=i)}}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){if(!this.caipAddress)return null;let e=n.W.state.activeChain!==K.o.CHAIN.SOLANA&&this.allAccounts.length>1;return(0,a.qy)`<wui-flex
        flexDirection="column"
        .padding=${["0","xl","m","xl"]}
        alignItems="center"
        gap="l"
      >
        ${e?this.multiAccountTemplate():this.singleAccountTemplate()}
        <wui-flex flexDirection="column" alignItems="center">
          <wui-text variant="paragraph-500" color="fg-200">
            ${d.w.formatBalance(this.balance,this.balanceSymbol)}
          </wui-text>
        </wui-flex>
        ${this.explorerBtnTemplate()}
      </wui-flex>

      <wui-flex flexDirection="column" gap="xs" .padding=${["0","s","s","s"]}>
        ${this.authCardTemplate()} <w3m-account-auth-button></w3m-account-auth-button>
        ${this.orderedFeaturesTemplate()} ${this.activityTemplate()}
        <wui-list-item
          variant="icon"
          iconVariant="overlay"
          icon="disconnect"
          ?chevron=${!1}
          .loading=${this.disconnecting}
          @click=${this.onDisconnect.bind(this)}
          data-testid="disconnect-button"
        >
          <wui-text variant="paragraph-500" color="fg-200">Disconnect</wui-text>
        </wui-list-item>
      </wui-flex>`}onrampTemplate(){if(!this.namespace)return null;let e=this.features?.onramp,t=Y.oU.ONRAMP_SUPPORTED_CHAIN_NAMESPACES.includes(this.namespace);return e&&t?(0,a.qy)`
      <wui-list-item
        data-testid="w3m-account-default-onramp-button"
        iconVariant="blue"
        icon="card"
        ?chevron=${!0}
        @click=${this.handleClickPay.bind(this)}
      >
        <wui-text variant="paragraph-500" color="fg-100">Buy crypto</wui-text>
      </wui-list-item>
    `:null}orderedFeaturesTemplate(){return(this.features?.walletFeaturesOrder||Y.oU.DEFAULT_FEATURES.walletFeaturesOrder).map(e=>{switch(e){case"onramp":return this.onrampTemplate();case"swaps":return this.swapsTemplate();case"send":return this.sendTemplate();default:return null}})}activityTemplate(){return this.namespace&&this.features?.history&&Y.oU.ACTIVITY_ENABLED_CHAIN_NAMESPACES.includes(this.namespace)?(0,a.qy)` <wui-list-item
          iconVariant="blue"
          icon="clock"
          iconSize="sm"
          ?chevron=${!0}
          @click=${this.onTransactions.bind(this)}
          data-testid="w3m-account-default-activity-button"
        >
          <wui-text variant="paragraph-500" color="fg-100">Activity</wui-text>
        </wui-list-item>`:null}swapsTemplate(){let e=this.features?.swaps,t=n.W.state.activeChain===K.o.CHAIN.EVM;return e&&t?(0,a.qy)`
      <wui-list-item
        iconVariant="blue"
        icon="recycleHorizontal"
        ?chevron=${!0}
        @click=${this.handleClickSwap.bind(this)}
      >
        <wui-text variant="paragraph-500" color="fg-100">Swap</wui-text>
      </wui-list-item>
    `:null}sendTemplate(){let e=this.features?.send,t=n.W.state.activeChain===K.o.CHAIN.EVM;return e&&t?(0,a.qy)`
      <wui-list-item
        iconVariant="blue"
        icon="send"
        ?chevron=${!0}
        @click=${this.handleClickSend.bind(this)}
      >
        <wui-text variant="paragraph-500" color="fg-100">Send</wui-text>
      </wui-list-item>
    `:null}authCardTemplate(){let e=n.W.state.activeChain,t=G.a.getConnectorId(e),i=G.a.getAuthConnector(),{origin:o}=location;return!i||t!==K.o.CONNECTOR_ID.AUTH||o.includes(Y.oU.SECURE_SITE)?null:(0,a.qy)`
      <wui-notice-card
        @click=${this.onGoToUpgradeView.bind(this)}
        label="Upgrade your wallet"
        description="Transition to a self-custodial wallet"
        icon="wallet"
        data-testid="w3m-wallet-upgrade-card"
      ></wui-notice-card>
    `}handleSwitchAccountsView(){Q.I.push("SwitchAddress")}handleClickPay(){Q.I.push("OnRampProviders")}handleClickSwap(){Q.I.push("Swap")}handleClickSend(){Q.I.push("WalletSend")}explorerBtnTemplate(){return u.U.state.addressExplorerUrl?(0,a.qy)`
      <wui-button size="md" variant="neutral" @click=${this.onExplorer.bind(this)}>
        <wui-icon size="sm" color="inherit" slot="iconLeft" name="compass"></wui-icon>
        Block Explorer
        <wui-icon size="sm" color="inherit" slot="iconRight" name="externalLink"></wui-icon>
      </wui-button>
    `:null}singleAccountTemplate(){return(0,a.qy)`
      <wui-avatar
        alt=${(0,r.J)(this.caipAddress)}
        address=${(0,r.J)(d.w.getPlainAddress(this.caipAddress))}
        imageSrc=${(0,r.J)(null===this.profileImage?void 0:this.profileImage)}
        data-testid="single-account-avatar"
      ></wui-avatar>
      <wui-flex flexDirection="column" alignItems="center">
        <wui-flex gap="3xs" alignItems="center" justifyContent="center">
          <wui-text variant="large-600" color="fg-100">
            ${this.profileName?h.Zv.getTruncateString({string:this.profileName,charsStart:20,charsEnd:0,truncate:"end"}):h.Zv.getTruncateString({string:this.address||"",charsStart:4,charsEnd:4,truncate:"middle"})}
          </wui-text>
          <wui-icon-link
            size="md"
            icon="copy"
            iconColor="fg-200"
            @click=${this.onCopyAddress}
          ></wui-icon-link> </wui-flex
      ></wui-flex>
    `}multiAccountTemplate(){if(!this.address)throw Error("w3m-account-view: No account provided");let e=this.allAccounts.find(e=>e.address===this.address),t=u.U.state.addressLabels.get(this.address);return"bip122"===this.namespace?this.btcAccountsTemplate():(0,a.qy)`
      <wui-profile-button-v2
        .onProfileClick=${this.handleSwitchAccountsView.bind(this)}
        address=${(0,r.J)(this.address)}
        icon="${e?.type===er.Vl.ACCOUNT_TYPES.SMART_ACCOUNT&&n.W.state.activeChain===K.o.CHAIN.EVM?"lightbulb":"mail"}"
        avatarSrc=${(0,r.J)(this.profileImage?this.profileImage:void 0)}
        profileName=${(0,r.J)(t||this.profileName)}
        .onCopyClick=${this.onCopyAddress.bind(this)}
      ></wui-profile-button-v2>
    `}btcAccountsTemplate(){return(0,a.qy)`<wui-flex gap="m" alignItems="center" flexDirection="column">
      <wui-avatar
        .imageSrc=${(0,r.J)(this.profileImage?this.profileImage:void 0)}
        alt=${this.address}
        address=${this.address}
      ></wui-avatar>
      <wui-tabs
        .tabs=${[{label:"Payment"},{label:"Ordinals"}]}
        .onTabChange=${e=>u.U.setCaipAddress(`bip122:${this.chainId}:${this.allAccounts[e]?.address||""}`,this.namespace)}
      ></wui-tabs>
      <wui-flex gap="xs" alignItems="center" justifyContent="center">
        <wui-text variant="large-600" color="fg-100">
          ${h.Zv.getTruncateString({string:this.profileName||this.address||"",charsStart:this.profileName?18:4,charsEnd:this.profileName?0:4,truncate:this.profileName?"end":"middle"})}
        </wui-text>
        <wui-icon-link
          size="md"
          icon="copy"
          iconColor="fg-200"
          @click=${this.onCopyAddress}
        ></wui-icon-link>
      </wui-flex>
    </wui-flex>`}onCopyAddress(){try{this.address&&(d.w.copyToClopboard(this.address),X.P.showSuccess("Address copied"))}catch{X.P.showError("Failed to copy")}}onTransactions(){let e=n.W.state.activeChain;U.E.sendEvent({type:"track",event:"CLICK_TRANSACTIONS",properties:{isSmartAccount:u.U.state.preferredAccountTypes?.[e]===er.Vl.ACCOUNT_TYPES.SMART_ACCOUNT}}),Q.I.push("Transactions")}async onDisconnect(){try{this.disconnecting=!0,await ee.x.disconnect(),p.W.close()}catch{U.E.sendEvent({type:"track",event:"DISCONNECT_ERROR"}),X.P.showError("Failed to disconnect")}finally{this.disconnecting=!1}}onExplorer(){let e=u.U.state.addressExplorerUrl;e&&d.w.openHref(e,"_blank")}onGoToUpgradeView(){U.E.sendEvent({type:"track",event:"EMAIL_UPGRADE_FROM_MODAL"}),Q.I.push("UpgradeEmailWallet")}};ev.styles=eb,em([(0,o.wk)()],ev.prototype,"caipAddress",void 0),em([(0,o.wk)()],ev.prototype,"address",void 0),em([(0,o.wk)()],ev.prototype,"allAccounts",void 0),em([(0,o.wk)()],ev.prototype,"profileImage",void 0),em([(0,o.wk)()],ev.prototype,"profileName",void 0),em([(0,o.wk)()],ev.prototype,"disconnecting",void 0),em([(0,o.wk)()],ev.prototype,"balance",void 0),em([(0,o.wk)()],ev.prototype,"balanceSymbol",void 0),em([(0,o.wk)()],ev.prototype,"features",void 0),em([(0,o.wk)()],ev.prototype,"namespace",void 0),em([(0,o.wk)()],ev.prototype,"chainId",void 0),ev=em([(0,h.EM)("w3m-account-default-widget")],ev);let ey=(0,w.AH)`
  span {
    font-weight: 500;
    font-size: 40px;
    color: var(--wui-color-fg-100);
    line-height: 130%; /* 52px */
    letter-spacing: -1.6px;
    text-align: center;
  }

  .pennies {
    color: var(--wui-color-fg-200);
  }
`;var ex=function(e,t,i,a){var o,r=arguments.length,n=r<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,i):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,a);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(n=(r<3?o(n):r>3?o(t,i,n):o(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let ek=class extends w.WF{constructor(){super(...arguments),this.dollars="0",this.pennies="00"}render(){return(0,w.qy)`<span>$${this.dollars}<span class="pennies">.${this.pennies}</span></span>`}};ek.styles=[b.W5,ey],ex([(0,g.MZ)()],ek.prototype,"dollars",void 0),ex([(0,g.MZ)()],ek.prototype,"pennies",void 0),ek=ex([(0,v.E)("wui-balance")],ek);let eC=(0,w.AH)`
  :host {
    position: relative;
  }

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 48px;
    width: 100%;
    background-color: var(--wui-color-accent-glass-010);
    border-radius: var(--wui-border-radius-xs);
    border: 1px solid var(--wui-color-accent-glass-010);
    transition: background-color var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: background-color;
  }

  wui-tooltip {
    padding: 7px var(--wui-spacing-s) 8px var(--wui-spacing-s);
    position: absolute;
    top: -8px;
    left: 50%;
    transform: translate(-50%, -100%);
    opacity: 0;
    display: none;
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled {
      background-color: var(--wui-color-accent-glass-015);
    }

    button:active:enabled {
      background-color: var(--wui-color-accent-glass-020);
    }
  }
`;var e$=function(e,t,i,a){var o,r=arguments.length,n=r<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,i):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,a);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(n=(r<3?o(n):r>3?o(t,i,n):o(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let eI=class extends w.WF{constructor(){super(...arguments),this.text="",this.icon="card"}render(){return(0,w.qy)`<button>
      <wui-icon color="accent-100" name=${this.icon} size="lg"></wui-icon>
    </button>`}};eI.styles=[b.W5,b.fD,eC],e$([(0,g.MZ)()],eI.prototype,"text",void 0),e$([(0,g.MZ)()],eI.prototype,"icon",void 0),eI=e$([(0,v.E)("wui-icon-button")],eI);let eE=(0,w.AH)`
  button {
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-3xl);
    border: 1px solid var(--wui-color-gray-glass-002);
    padding: var(--wui-spacing-xs) var(--wui-spacing-s) var(--wui-spacing-xs) var(--wui-spacing-xs);
    position: relative;
  }

  wui-avatar {
    width: 32px;
    height: 32px;
    box-shadow: 0 0 0 0;
    outline: 3px solid var(--wui-color-gray-glass-005);
  }

  wui-icon-box,
  wui-image {
    width: 16px;
    height: 16px;
    border-radius: var(--wui-border-radius-3xl);
    position: absolute;
    left: 26px;
    top: 24px;
  }

  wui-image {
    outline: 2px solid var(--wui-color-bg-125);
  }

  wui-icon-box {
    outline: 2px solid var(--wui-color-bg-200);
    background-color: var(--wui-color-bg-250);
  }
`;var eA=function(e,t,i,a){var o,r=arguments.length,n=r<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,i):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,a);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(n=(r<3?o(n):r>3?o(t,i,n):o(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let eT=class extends w.WF{constructor(){super(...arguments),this.networkSrc=void 0,this.avatarSrc=void 0,this.profileName="",this.address="",this.icon="chevronBottom"}render(){return(0,w.qy)`<button data-testid="wui-profile-button">
      <wui-flex gap="xs" alignItems="center">
        <wui-avatar
          .imageSrc=${this.avatarSrc}
          alt=${this.address}
          address=${this.address}
        ></wui-avatar>
        ${this.networkImageTemplate()}
        <wui-flex gap="xs" alignItems="center">
          <wui-text variant="large-600" color="fg-100">
            ${m.Z.getTruncateString({string:this.profileName||this.address,charsStart:this.profileName?18:4,charsEnd:this.profileName?0:4,truncate:this.profileName?"end":"middle"})}
          </wui-text>
          <wui-icon size="sm" color="fg-200" name=${this.icon}></wui-icon>
        </wui-flex>
      </wui-flex>
    </button>`}networkImageTemplate(){return this.networkSrc?(0,w.qy)`<wui-image src=${this.networkSrc}></wui-image>`:(0,w.qy)`
      <wui-icon-box
        size="xxs"
        iconColor="fg-200"
        backgroundColor="bg-100"
        icon="networkPlaceholder"
      ></wui-icon-box>
    `}};eT.styles=[b.W5,b.fD,eE],eA([(0,g.MZ)()],eT.prototype,"networkSrc",void 0),eA([(0,g.MZ)()],eT.prototype,"avatarSrc",void 0),eA([(0,g.MZ)()],eT.prototype,"profileName",void 0),eA([(0,g.MZ)()],eT.prototype,"address",void 0),eA([(0,g.MZ)()],eT.prototype,"icon",void 0),eT=eA([(0,v.E)("wui-profile-button")],eT);let eS=(0,w.AH)`
  :host {
    display: block;
    padding: 9px var(--wui-spacing-s) 10px var(--wui-spacing-s);
    border-radius: var(--wui-border-radius-xxs);

    color: var(--wui-color-bg-100);
    position: relative;
  }

  :host([data-variant='shade']) {
    background-color: var(--wui-color-bg-150);
    border: 1px solid var(--wui-color-gray-glass-005);
  }

  :host([data-variant='shade']) > wui-text {
    color: var(--wui-color-fg-150);
  }

  :host([data-variant='fill']) {
    background-color: var(--wui-color-fg-100);
    border: none;
  }

  wui-icon {
    position: absolute;
    width: 12px !important;
    height: 4px !important;
  }

  wui-icon[data-placement='top'] {
    bottom: 0px;
    left: 50%;
    transform: translate(-50%, 95%);
  }

  wui-icon[data-placement='bottom'] {
    top: 0;
    left: 50%;
    transform: translate(-50%, -95%) rotate(180deg);
  }

  wui-icon[data-placement='right'] {
    top: 50%;
    left: 0;
    transform: translate(-65%, -50%) rotate(90deg);
  }

  wui-icon[data-placement='left'] {
    top: 50%;
    right: 0%;
    transform: translate(65%, -50%) rotate(270deg);
  }
`;var eR=function(e,t,i,a){var o,r=arguments.length,n=r<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,i):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,a);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(n=(r<3?o(n):r>3?o(t,i,n):o(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let eW=class extends w.WF{constructor(){super(...arguments),this.placement="top",this.variant="fill",this.message=""}render(){return this.dataset.variant=this.variant,(0,w.qy)`<wui-icon
        data-placement=${this.placement}
        color="fg-100"
        size="inherit"
        name=${"fill"===this.variant?"cursor":"cursorTransparent"}
      ></wui-icon>
      <wui-text color="inherit" variant="small-500">${this.message}</wui-text>`}};eW.styles=[b.W5,b.fD,eS],eR([(0,g.MZ)()],eW.prototype,"placement",void 0),eR([(0,g.MZ)()],eW.prototype,"variant",void 0),eR([(0,g.MZ)()],eW.prototype,"message",void 0),eW=eR([(0,v.E)("wui-tooltip")],eW);var eO=i(35437);let eN={getTabsByNamespace:e=>e&&e===K.o.CHAIN.EVM?eO.o.ACCOUNT_TABS:[]};i(12477);let ej=(0,a.AH)`
  :host {
    width: 100%;
    max-height: 280px;
    overflow: scroll;
    scrollbar-width: none;
  }

  :host::-webkit-scrollbar {
    display: none;
  }
`,eM=class extends a.WF{render(){return(0,a.qy)`<w3m-activity-list page="account"></w3m-activity-list>`}};eM.styles=ej,eM=function(e,t,i,a){var o,r=arguments.length,n=r<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,i):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,a);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(n=(r<3?o(n):r>3?o(t,i,n):o(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n}([(0,h.EM)("w3m-account-activity-widget")],eM),i(46783),i(51482);let eP=(0,a.AH)`
  .contentContainer {
    height: 280px;
  }

  .contentContainer > wui-icon-box {
    width: 40px;
    height: 40px;
    border-radius: var(--wui-border-radius-xxs);
  }

  .contentContainer > .textContent {
    width: 65%;
  }
`,eq=class extends a.WF{render(){return(0,a.qy)`${this.nftTemplate()}`}nftTemplate(){return(0,a.qy)` <wui-flex
      class="contentContainer"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
      gap="l"
    >
      <wui-icon-box
        icon="wallet"
        size="inherit"
        iconColor="fg-200"
        backgroundColor="fg-200"
        iconSize="lg"
      ></wui-icon-box>
      <wui-flex
        class="textContent"
        gap="xs"
        flexDirection="column"
        justifyContent="center"
        flexDirection="column"
      >
        <wui-text
          variant="paragraph-500"
          align="center"
          color="fg-100"
          data-testid="nft-template-title"
          >Coming soon</wui-text
        >
        <wui-text
          variant="small-400"
          align="center"
          color="fg-200"
          data-testid="nft-template-description"
          >Stay tuned for our upcoming NFT feature</wui-text
        >
      </wui-flex>
      <wui-link @click=${this.onReceiveClick.bind(this)} data-testid="link-receive-funds"
        >Receive funds</wui-link
      >
    </wui-flex>`}onReceiveClick(){Q.I.push("WalletReceive")}};eq.styles=eP,eq=function(e,t,i,a){var o,r=arguments.length,n=r<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,i):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,a);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(n=(r<3?o(n):r>3?o(t,i,n):o(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n}([(0,h.EM)("w3m-account-nfts-widget")],eq),i(58037);let eD=(0,w.AH)`
  button {
    width: 100%;
    display: flex;
    gap: var(--wui-spacing-s);
    align-items: center;
    justify-content: flex-start;
    padding: var(--wui-spacing-s) var(--wui-spacing-m) var(--wui-spacing-s) var(--wui-spacing-s);
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
  }

  wui-icon-box {
    width: var(--wui-spacing-2xl);
    height: var(--wui-spacing-2xl);
  }

  wui-flex {
    width: auto;
  }
`;var eU=function(e,t,i,a){var o,r=arguments.length,n=r<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,i):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,a);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(n=(r<3?o(n):r>3?o(t,i,n):o(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let eZ=class extends w.WF{constructor(){super(...arguments),this.icon="card",this.text="",this.description="",this.tag=void 0,this.iconBackgroundColor="accent-100",this.iconColor="accent-100",this.disabled=!1}render(){return(0,w.qy)`
      <button ?disabled=${this.disabled}>
        <wui-icon-box
          iconColor=${this.iconColor}
          backgroundColor=${this.iconBackgroundColor}
          size="inherit"
          icon=${this.icon}
          iconSize="md"
        ></wui-icon-box>
        <wui-flex flexDirection="column" justifyContent="spaceBetween">
          ${this.titleTemplate()}
          <wui-text variant="small-400" color="fg-200"> ${this.description}</wui-text></wui-flex
        >
      </button>
    `}titleTemplate(){return this.tag?(0,w.qy)` <wui-flex alignItems="center" gap="xxs"
        ><wui-text variant="paragraph-500" color="fg-100">${this.text}</wui-text
        ><wui-tag tagType="main" size="md">${this.tag}</wui-tag>
      </wui-flex>`:(0,w.qy)`<wui-text variant="paragraph-500" color="fg-100">${this.text}</wui-text>`}};eZ.styles=[b.W5,b.fD,eD],eU([(0,g.MZ)()],eZ.prototype,"icon",void 0),eU([(0,g.MZ)()],eZ.prototype,"text",void 0),eU([(0,g.MZ)()],eZ.prototype,"description",void 0),eU([(0,g.MZ)()],eZ.prototype,"tag",void 0),eU([(0,g.MZ)()],eZ.prototype,"iconBackgroundColor",void 0),eU([(0,g.MZ)()],eZ.prototype,"iconColor",void 0),eU([(0,g.MZ)({type:Boolean})],eZ.prototype,"disabled",void 0),eZ=eU([(0,v.E)("wui-list-description")],eZ),i(62156);let ez=(0,a.AH)`
  :host {
    width: 100%;
  }

  wui-flex {
    width: 100%;
  }

  .contentContainer {
    max-height: 280px;
    overflow: scroll;
    scrollbar-width: none;
  }

  .contentContainer::-webkit-scrollbar {
    display: none;
  }
`;var e_=function(e,t,i,a){var o,r=arguments.length,n=r<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,i):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,a);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(n=(r<3?o(n):r>3?o(t,i,n):o(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let eL=class extends a.WF{constructor(){super(),this.unsubscribe=[],this.tokenBalance=u.U.state.tokenBalance,this.unsubscribe.push(u.U.subscribe(e=>{this.tokenBalance=e.tokenBalance}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return(0,a.qy)`${this.tokenTemplate()}`}tokenTemplate(){return this.tokenBalance&&this.tokenBalance?.length>0?(0,a.qy)`<wui-flex class="contentContainer" flexDirection="column" gap="xs">
        ${this.tokenItemTemplate()}
      </wui-flex>`:(0,a.qy)` <wui-flex flexDirection="column" gap="xs"
      ><wui-list-description
        @click=${this.onBuyClick.bind(this)}
        text="Buy Crypto"
        description="Easy with card or bank account"
        icon="card"
        iconColor="success-100"
        iconBackgroundColor="success-100"
        tag="popular"
        data-testid="buy-crypto"
      ></wui-list-description
      ><wui-list-description
        @click=${this.onReceiveClick.bind(this)}
        text="Receive funds"
        description="Transfer tokens on your wallet"
        icon="arrowBottomCircle"
        iconColor="fg-200"
        iconBackgroundColor="fg-200"
        data-testid="receive-funds"
      ></wui-list-description
    ></wui-flex>`}tokenItemTemplate(){return this.tokenBalance?.map(e=>a.qy`<wui-list-token
          tokenName=${e.name}
          tokenImageUrl=${e.iconUrl}
          tokenAmount=${e.quantity.numeric}
          tokenValue=${e.value}
          tokenCurrency=${e.symbol}
        ></wui-list-token>`)}onReceiveClick(){Q.I.push("WalletReceive")}onBuyClick(){let e=n.W.state.activeChain;U.E.sendEvent({type:"track",event:"SELECT_BUY_CRYPTO",properties:{isSmartAccount:u.U.state.preferredAccountTypes?.[e]===er.Vl.ACCOUNT_TYPES.SMART_ACCOUNT}}),Q.I.push("OnRampProviders")}};eL.styles=ez,e_([(0,o.wk)()],eL.prototype,"tokenBalance",void 0),eL=e_([(0,h.EM)("w3m-account-tokens-widget")],eL),i(10968),i(50499);let eH=(0,a.AH)`
  wui-flex {
    width: 100%;
  }

  wui-promo {
    position: absolute;
    top: -32px;
  }

  wui-profile-button {
    margin-top: calc(-1 * var(--wui-spacing-2l));
  }

  wui-promo + wui-profile-button {
    margin-top: var(--wui-spacing-2l);
  }

  wui-tabs {
    width: 100%;
  }

  .contentContainer {
    height: 280px;
  }

  .contentContainer > wui-icon-box {
    width: 40px;
    height: 40px;
    border-radius: var(--wui-border-radius-xxs);
  }

  .contentContainer > .textContent {
    width: 65%;
  }
`;var eB=function(e,t,i,a){var o,r=arguments.length,n=r<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,i):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,a);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(n=(r<3?o(n):r>3?o(t,i,n):o(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let eF=class extends a.WF{constructor(){super(),this.unsubscribe=[],this.address=u.U.state.address,this.profileImage=u.U.state.profileImage,this.profileName=u.U.state.profileName,this.network=n.W.state.activeCaipNetwork,this.currentTab=u.U.state.currentTab,this.tokenBalance=u.U.state.tokenBalance,this.features=l.H.state.features,this.networkImage=s.$.getNetworkImage(this.network),this.unsubscribe.push(c.j.subscribeNetworkImages(()=>{this.networkImage=s.$.getNetworkImage(this.network)}),u.U.subscribe(e=>{e.address?(this.address=e.address,this.profileImage=e.profileImage,this.profileName=e.profileName,this.currentTab=e.currentTab,this.tokenBalance=e.tokenBalance):p.W.close()}),n.W.subscribeKey("activeCaipNetwork",e=>this.network=e),l.H.subscribeKey("features",e=>this.features=e)),this.watchSwapValues()}disconnectedCallback(){this.unsubscribe.forEach(e=>e()),clearInterval(this.watchTokenBalance)}firstUpdated(){u.U.fetchTokenBalance()}render(){if(!this.address)throw Error("w3m-account-view: No account provided");return(0,a.qy)`<wui-flex
      flexDirection="column"
      .padding=${["0","xl","m","xl"]}
      alignItems="center"
      gap="m"
      data-testid="w3m-account-wallet-features-widget"
    >
      <wui-profile-button
        @click=${this.onProfileButtonClick.bind(this)}
        address=${(0,r.J)(this.address)}
        networkSrc=${(0,r.J)(this.networkImage)}
        icon="chevronBottom"
        avatarSrc=${(0,r.J)(this.profileImage?this.profileImage:void 0)}
        profileName=${(0,r.J)(this.profileName??void 0)}
        data-testid="w3m-profile-button"
      ></wui-profile-button>

      ${this.tokenBalanceTemplate()} ${this.orderedWalletFeatures()} ${this.tabsTemplate()}
      ${this.listContentTemplate()}
    </wui-flex>`}orderedWalletFeatures(){let e=this.features?.walletFeaturesOrder||Y.oU.DEFAULT_FEATURES.walletFeaturesOrder;return e.every(e=>!this.features?.[e])?null:(0,a.qy)`<wui-flex gap="s">
      ${e.map(e=>{switch(e){case"onramp":return this.onrampTemplate();case"swaps":return this.swapsTemplate();case"receive":return this.receiveTemplate();case"send":return this.sendTemplate();default:return null}})}
    </wui-flex>`}onrampTemplate(){return this.features?.onramp?(0,a.qy)`
      <w3m-tooltip-trigger text="Buy">
        <wui-icon-button
          data-testid="wallet-features-onramp-button"
          @click=${this.onBuyClick.bind(this)}
          icon="card"
        ></wui-icon-button>
      </w3m-tooltip-trigger>
    `:null}swapsTemplate(){let e=this.features?.swaps,t=n.W.state.activeChain===K.o.CHAIN.EVM;return e&&t?(0,a.qy)`
      <w3m-tooltip-trigger text="Swap">
        <wui-icon-button
          data-testid="wallet-features-swaps-button"
          @click=${this.onSwapClick.bind(this)}
          icon="recycleHorizontal"
        >
        </wui-icon-button>
      </w3m-tooltip-trigger>
    `:null}receiveTemplate(){return this.features?.receive?(0,a.qy)`
      <w3m-tooltip-trigger text="Receive">
        <wui-icon-button
          data-testid="wallet-features-receive-button"
          @click=${this.onReceiveClick.bind(this)}
          icon="arrowBottomCircle"
        >
        </wui-icon-button>
      </w3m-tooltip-trigger>
    `:null}sendTemplate(){let e=this.features?.send,t=n.W.state.activeChain===K.o.CHAIN.EVM;return e&&t?(0,a.qy)`
      <w3m-tooltip-trigger text="Send">
        <wui-icon-button
          data-testid="wallet-features-send-button"
          @click=${this.onSendClick.bind(this)}
          icon="send"
        ></wui-icon-button>
      </w3m-tooltip-trigger>
    `:null}watchSwapValues(){this.watchTokenBalance=setInterval(()=>u.U.fetchTokenBalance(e=>this.onTokenBalanceError(e)),1e4)}onTokenBalanceError(e){e instanceof Error&&e.cause instanceof Response&&e.cause.status===K.o.HTTP_STATUS_CODES.SERVICE_UNAVAILABLE&&clearInterval(this.watchTokenBalance)}listContentTemplate(){return 0===this.currentTab?(0,a.qy)`<w3m-account-tokens-widget></w3m-account-tokens-widget>`:1===this.currentTab?(0,a.qy)`<w3m-account-nfts-widget></w3m-account-nfts-widget>`:2===this.currentTab?(0,a.qy)`<w3m-account-activity-widget></w3m-account-activity-widget>`:(0,a.qy)`<w3m-account-tokens-widget></w3m-account-tokens-widget>`}tokenBalanceTemplate(){if(this.tokenBalance&&this.tokenBalance?.length>=0){let e=d.w.calculateBalance(this.tokenBalance),{dollars:t="0",pennies:i="00"}=d.w.formatTokenBalance(e);return(0,a.qy)`<wui-balance dollars=${t} pennies=${i}></wui-balance>`}return(0,a.qy)`<wui-balance dollars="0" pennies="00"></wui-balance>`}tabsTemplate(){let e=eN.getTabsByNamespace(n.W.state.activeChain);return 0===e.length?null:(0,a.qy)`<wui-tabs
      .onTabChange=${this.onTabChange.bind(this)}
      .activeTab=${this.currentTab}
      localTabWidth=${d.w.isMobile()&&window.innerWidth<430?`${(window.innerWidth-48)/3}px`:"104px"}
      .tabs=${e}
    ></wui-tabs>`}onTabChange(e){u.U.setCurrentTab(e)}onProfileButtonClick(){let{allAccounts:e}=u.U.state;e.length>1?Q.I.push("Profile"):Q.I.push("AccountSettings")}onBuyClick(){Q.I.push("OnRampProviders")}onSwapClick(){let e=n.W.state.activeChain;this.network?.caipNetworkId&&!Y.oU.SWAP_SUPPORTED_NETWORKS.includes(this.network?.caipNetworkId)?Q.I.push("UnsupportedChain",{swapUnsupportedChain:!0}):(U.E.sendEvent({type:"track",event:"OPEN_SWAP",properties:{network:this.network?.caipNetworkId||"",isSmartAccount:u.U.state.preferredAccountTypes?.[e]===er.Vl.ACCOUNT_TYPES.SMART_ACCOUNT}}),Q.I.push("Swap"))}onReceiveClick(){Q.I.push("WalletReceive")}onSendClick(){let e=n.W.state.activeChain;U.E.sendEvent({type:"track",event:"OPEN_SEND",properties:{network:this.network?.caipNetworkId||"",isSmartAccount:u.U.state.preferredAccountTypes?.[e]===er.Vl.ACCOUNT_TYPES.SMART_ACCOUNT}}),Q.I.push("WalletSend")}};eF.styles=eH,eB([(0,o.wk)()],eF.prototype,"watchTokenBalance",void 0),eB([(0,o.wk)()],eF.prototype,"address",void 0),eB([(0,o.wk)()],eF.prototype,"profileImage",void 0),eB([(0,o.wk)()],eF.prototype,"profileName",void 0),eB([(0,o.wk)()],eF.prototype,"network",void 0),eB([(0,o.wk)()],eF.prototype,"currentTab",void 0),eB([(0,o.wk)()],eF.prototype,"tokenBalance",void 0),eB([(0,o.wk)()],eF.prototype,"features",void 0),eB([(0,o.wk)()],eF.prototype,"networkImage",void 0),eF=eB([(0,h.EM)("w3m-account-wallet-features-widget")],eF);var eV=function(e,t,i,a){var o,r=arguments.length,n=r<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,i):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,a);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(n=(r<3?o(n):r>3?o(t,i,n):o(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let eJ=class extends a.WF{constructor(){super(),this.unsubscribe=[],this.namespace=n.W.state.activeChain,this.unsubscribe.push(n.W.subscribeKey("activeChain",e=>{this.namespace=e}))}render(){if(!this.namespace)return null;let e=G.a.getConnectorId(this.namespace),t=G.a.getAuthConnector();return(0,a.qy)`
      ${t&&e===K.o.CONNECTOR_ID.AUTH?this.walletFeaturesTemplate():this.defaultTemplate()}
    `}walletFeaturesTemplate(){return(0,a.qy)`<w3m-account-wallet-features-widget></w3m-account-wallet-features-widget>`}defaultTemplate(){return(0,a.qy)`<w3m-account-default-widget></w3m-account-default-widget>`}};eV([(0,o.wk)()],eJ.prototype,"namespace",void 0),eJ=eV([(0,h.EM)("w3m-account-view")],eJ);var eK=i(636);let eG=(0,w.AH)`
  button {
    padding: 6.5px var(--wui-spacing-l) 6.5px var(--wui-spacing-xs);
    display: flex;
    justify-content: space-between;
    width: 100%;
    border-radius: var(--wui-border-radius-xs);
    background-color: var(--wui-color-gray-glass-002);
  }

  button[data-clickable='false'] {
    pointer-events: none;
    background-color: transparent;
  }

  wui-image {
    width: var(--wui-spacing-3xl);
    height: var(--wui-spacing-3xl);
    border-radius: var(--wui-border-radius-3xl);
  }

  wui-avatar {
    width: var(--wui-spacing-3xl);
    height: var(--wui-spacing-3xl);
    box-shadow: 0 0 0 0;
  }
  .address {
    color: var(--wui-color-fg-base-100);
  }
  .address-description {
    text-transform: capitalize;
    color: var(--wui-color-fg-base-200);
  }

  wui-icon-box {
    position: relative;
    right: 15px;
    top: 15px;
    border: 2px solid var(--wui-color-bg-150);
    background-color: var(--wui-color-bg-125);
  }
`;var eY=function(e,t,i,a){var o,r=arguments.length,n=r<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,i):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,a);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(n=(r<3?o(n):r>3?o(t,i,n):o(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let eX=class extends w.WF{constructor(){super(...arguments),this.accountAddress="",this.accountType="",this.labels=u.U.state.addressLabels,this.caipNetwork=n.W.state.activeCaipNetwork,this.socialProvider=en.i.getConnectedSocialProvider(),this.balance=0,this.fetchingBalance=!0,this.shouldShowIcon=!1,this.selected=!1}connectedCallback(){super.connectedCallback(),eK.T.getBalance(this.accountAddress,this.caipNetwork?.caipNetworkId).then(e=>{let t=this.balance;e.balances.length>0&&(t=e.balances.reduce((e,t)=>e+(t?.value||0),0)),this.balance=t,this.fetchingBalance=!1,this.requestUpdate()}).catch(()=>{this.fetchingBalance=!1,this.requestUpdate()})}render(){let e=this.getLabel(),t=n.W.state.activeChain,i=G.a.getConnectorId(t);return this.shouldShowIcon=i===K.o.CONNECTOR_ID.AUTH,(0,w.qy)`
      <wui-flex
        flexDirection="row"
        justifyContent="space-between"
        .padding=${["0","0","s","1xs"]}
      >
        <wui-flex gap="md" alignItems="center">
          <wui-avatar address=${this.accountAddress}></wui-avatar>
          ${this.shouldShowIcon?(0,w.qy)`<wui-icon-box
                size="sm"
                iconcolor="fg-200"
                backgroundcolor="fg-300"
                icon=${this.accountType===er.Vl.ACCOUNT_TYPES.EOA?this.socialProvider??"mail":"lightbulb"}
                background="fg-300"
              ></wui-icon-box>`:(0,w.qy)`<wui-flex .padding="${["0","0","0","s"]}"></wui-flex>`}
          <wui-flex flexDirection="column">
            <wui-text class="address" variant="paragraph-500" color="fg-100"
              >${m.Z.getTruncateString({string:this.accountAddress,charsStart:4,charsEnd:6,truncate:"middle"})}</wui-text
            >
            <wui-text class="address-description" variant="small-400">${e}</wui-text></wui-flex
          >
        </wui-flex>
        <wui-flex gap="s" alignItems="center">
          <slot name="action"></slot>
          ${this.fetchingBalance?(0,w.qy)`<wui-loading-spinner size="sm" color="accent-100"></wui-loading-spinner>`:(0,w.qy)` <wui-text variant="small-400">$${this.balance.toFixed(2)}</wui-text>`}
        </wui-flex>
      </wui-flex>
    `}getLabel(){let e=this.labels?.get(this.accountAddress),t=n.W.state.activeChain,i=G.a.getConnectorId(t);return e||i!==K.o.CONNECTOR_ID.AUTH?e||(e="EOA"):e=`${"eoa"===this.accountType?this.socialProvider??"Email":"Smart"} Account`,e}};eX.styles=[b.W5,b.fD,eG],eY([(0,g.MZ)()],eX.prototype,"accountAddress",void 0),eY([(0,g.MZ)()],eX.prototype,"accountType",void 0),eY([(0,g.MZ)({type:Boolean})],eX.prototype,"selected",void 0),eY([(0,g.MZ)({type:Function})],eX.prototype,"onSelect",void 0),eX=eY([(0,v.E)("wui-list-account")],eX);let eQ=(0,a.AH)`
  wui-flex {
    width: 100%;
  }

  wui-icon-link {
    margin-right: calc(var(--wui-icon-box-size-md) * -1);
  }

  .account-links {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .account-links wui-flex {
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;
    background: red;
    align-items: center;
    justify-content: center;
    height: 48px;
    padding: 10px;
    flex: 1 0 0;

    border-radius: var(--XS, 16px);
    border: 1px solid var(--dark-accent-glass-010, rgba(71, 161, 255, 0.1));
    background: var(--dark-accent-glass-010, rgba(71, 161, 255, 0.1));
    transition: background-color var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: background-color;
  }

  .account-links wui-flex:hover {
    background: var(--dark-accent-glass-015, rgba(71, 161, 255, 0.15));
  }

  .account-links wui-flex wui-icon {
    width: var(--S, 20px);
    height: var(--S, 20px);
  }

  .account-links wui-flex wui-icon svg path {
    stroke: #47a1ff;
  }

  .account-settings-button {
    padding: calc(var(--wui-spacing-m) - 1px) var(--wui-spacing-2l);
    height: 40px;
    border-radius: var(--wui-border-radius-xxs);
    border: 1px solid var(--wui-color-gray-glass-002);
    background: var(--wui-color-gray-glass-002);
    cursor: pointer;
  }

  .account-settings-button:hover {
    background: var(--wui-color-gray-glass-005);
  }
`;var e0=function(e,t,i,a){var o,r=arguments.length,n=r<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,i):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,a);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(n=(r<3?o(n):r>3?o(t,i,n):o(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let e3=class extends a.WF{constructor(){super(),this.usubscribe=[],this.address=u.U.state.address,this.profileImage=u.U.state.profileImage,this.profileName=u.U.state.profileName,this.accounts=u.U.state.allAccounts,this.loading=!1,this.usubscribe.push(u.U.subscribeKey("address",e=>{e?this.address=e:p.W.close()})),this.usubscribe.push(u.U.subscribeKey("profileImage",e=>{this.profileImage=e})),this.usubscribe.push(u.U.subscribeKey("profileName",e=>{this.profileName=e}))}disconnectedCallback(){this.usubscribe.forEach(e=>e())}render(){if(!this.address)throw Error("w3m-profile-view: No account provided");return(0,a.qy)`
      <wui-flex flexDirection="column" gap="l" .padding=${["0","xl","m","xl"]}>
        <wui-flex flexDirection="column" alignItems="center" gap="l">
          <wui-avatar
            alt=${this.address}
            address=${this.address}
            imageSrc=${(0,r.J)(this.profileImage)}
            size="2lg"
          ></wui-avatar>
          <wui-flex flexDirection="column" alignItems="center">
            <wui-flex gap="3xs" alignItems="center" justifyContent="center">
              <wui-text variant="title-6-600" color="fg-100" data-testid="account-settings-address">
                ${this.profileName?h.Zv.getTruncateString({string:this.profileName,charsStart:20,charsEnd:0,truncate:"end"}):h.Zv.getTruncateString({string:this.address,charsStart:4,charsEnd:6,truncate:"middle"})}
              </wui-text>
              <wui-icon-link
                size="md"
                icon="copy"
                iconColor="fg-200"
                @click=${this.onCopyAddress}
              ></wui-icon-link>
            </wui-flex>
          </wui-flex>
        </wui-flex>
        <wui-flex
          data-testid="account-settings-button"
          justifyContent="center"
          alignItems="center"
          class="account-settings-button"
          @click=${()=>Q.I.push("AccountSettings")}
        >
          <wui-text variant="paragraph-500" color="fg-100">Account Settings</wui-text>
        </wui-flex>
        ${this.accountsTemplate()}
      </wui-flex>
    `}accountsTemplate(){return(0,a.qy)`<wui-flex flexDirection="column">
      <wui-flex .padding=${["3xs","m","s","s"]}>
        <wui-text color="fg-200" variant="paragraph-400">Your accounts</wui-text>
      </wui-flex>
      <wui-flex flexDirection="column" gap="xxs">
        ${this.accounts.map(e=>this.accountTemplate(e))}
      </wui-flex>
    </wui-flex>`}async onSwitchAccount(e){let t=n.W.state.activeCaipNetwork?.chainNamespace;if(this.loading=!0,G.a.getAuthConnector()){let i=e.type;await ee.x.setPreferredAccountType(i,t)}u.U.setShouldUpdateToAddress(e.address,t),this.loading=!1}accountTemplate(e){return(0,a.qy)`<wui-list-account accountAddress=${e.address} accountType=${e.type}>
      ${e.address===this.address?"":(0,a.qy)`<wui-button
            slot="action"
            textVariant="small-600"
            size="md"
            variant="accent"
            @click=${()=>this.onSwitchAccount(e)}
            .loading=${this.loading}
            >Switch</wui-button
          >`}
    </wui-list-account>`}onCopyAddress(){try{this.address&&(d.w.copyToClopboard(this.address),X.P.showSuccess("Address copied"))}catch{X.P.showError("Failed to copy")}}};e3.styles=eQ,e0([(0,o.wk)()],e3.prototype,"address",void 0),e0([(0,o.wk)()],e3.prototype,"profileImage",void 0),e0([(0,o.wk)()],e3.prototype,"profileName",void 0),e0([(0,o.wk)()],e3.prototype,"accounts",void 0),e0([(0,o.wk)()],e3.prototype,"loading",void 0),e3=e0([(0,h.EM)("w3m-profile-view")],e3);let e1=(0,w.AH)`
  wui-flex {
    width: 100%;
    background-color: var(--wui-color-gray-glass-005);
    border-radius: var(--wui-border-radius-m);
    padding: var(--wui-spacing-1xs) var(--wui-spacing-s) var(--wui-spacing-1xs)
      var(--wui-spacing-1xs);
  }
`;var e5=function(e,t,i,a){var o,r=arguments.length,n=r<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,i):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,a);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(n=(r<3?o(n):r>3?o(t,i,n):o(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let e2=class extends w.WF{constructor(){super(...arguments),this.imageSrc="",this.text="",this.size=""}render(){return(0,w.qy)`
      <wui-flex gap="1xs" alignItems="center">
        <wui-avatar size=${this.size} imageSrc=${this.imageSrc}></wui-avatar>
        <wui-text variant="small-400" color="fg-200">${this.text}</wui-text>
      </wui-flex>
    `}};e2.styles=[b.W5,b.fD,e1],e5([(0,g.MZ)()],e2.prototype,"imageSrc",void 0),e5([(0,g.MZ)()],e2.prototype,"text",void 0),e5([(0,g.MZ)()],e2.prototype,"size",void 0),e2=e5([(0,v.E)("wui-banner-img")],e2);let e6=(0,a.AH)`
  wui-avatar {
    width: var(--wui-spacing-3xl);
    height: var(--wui-spacing-3xl);
    box-shadow: 0 0 0 0;
  }

  wui-icon-box {
    position: relative;
    right: 15px;
    top: 15px;
    border: 2px solid var(--wui-color-bg-150);
    background-color: var(--wui-color-bg-125);
  }
`;var e4=function(e,t,i,a){var o,r=arguments.length,n=r<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,i):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,a);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(n=(r<3?o(n):r>3?o(t,i,n):o(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let e7=class extends a.WF{constructor(){super(),this.metadata=l.H.state.metadata,this.allAccounts=u.U.state.allAccounts||[],this.balances={},this.labels=u.U.state.addressLabels,this.currentAddress=u.U.state.address||"",this.caipNetwork=n.W.state.activeCaipNetwork,u.U.subscribeKey("allAccounts",e=>{this.allAccounts=e})}connectedCallback(){super.connectedCallback(),this.allAccounts.forEach(e=>{eK.T.getBalance(e.address,this.caipNetwork?.caipNetworkId).then(t=>{let i=this.balances[e.address]||0;t.balances.length>0&&(i=t.balances.reduce((e,t)=>e+(t?.value||0),0)),this.balances[e.address]=i,this.requestUpdate()})})}getAddressIcon(e){return"smartAccount"===e?"lightbulb":"mail"}render(){return(0,a.qy)`
      <wui-flex justifyContent="center" .padding=${["xl","0","xl","0"]}>
        <wui-banner-img
          imageSrc=${(0,r.J)(this.metadata?.icons[0])}
          text=${(0,r.J)(this.metadata?.url)}
          size="sm"
        ></wui-banner-img>
      </wui-flex>
      <wui-flex flexDirection="column" gap="xxl" .padding=${["l","xl","xl","xl"]}>
        ${this.allAccounts.map((e,t)=>this.getAddressTemplate(e,t))}
      </wui-flex>
    `}getAddressTemplate(e,t){let i=this.labels?.get(e.address),o=n.W.state.activeChain,r=G.a.getConnectorId(o)===K.o.CONNECTOR_ID.AUTH;return(0,a.qy)`
      <wui-flex
        flexDirection="row"
        justifyContent="space-between"
        data-testid="switch-address-item"
      >
        <wui-flex alignItems="center">
          <wui-avatar address=${e.address}></wui-avatar>
          ${r?(0,a.qy)`<wui-icon-box
                size="sm"
                iconcolor="fg-200"
                backgroundcolor="glass-002"
                background="gray"
                icon="${this.getAddressIcon(e.type)}"
                ?border=${!0}
              ></wui-icon-box>`:(0,a.qy)`<wui-flex .padding="${["0","0","0","s"]}"></wui-flex>`}
          <wui-flex flexDirection="column">
            <wui-text class="address" variant="paragraph-500" color="fg-100"
              >${i||h.Zv.getTruncateString({string:e.address,charsStart:4,charsEnd:6,truncate:"middle"})}</wui-text
            >
            <wui-text class="address-description" variant="small-400">
              ${"number"==typeof this.balances[e.address]?`$${this.balances[e.address]?.toFixed(2)}`:(0,a.qy)`<wui-loading-spinner size="sm" color="accent-100"></wui-loading-spinner>`}
            </wui-text>
          </wui-flex>
        </wui-flex>
        <wui-flex gap="s" alignItems="center">
          ${e.address?.toLowerCase()===this.currentAddress?.toLowerCase()?"":(0,a.qy)`
                <wui-button
                  data-testid=${`w3m-switch-address-button-${t}`}
                  textVariant="small-600"
                  size="md"
                  variant="accent"
                  @click=${()=>this.onSwitchAddress(e.address)}
                  >Switch to</wui-button
                >
              `}
        </wui-flex>
      </wui-flex>
    `}onSwitchAddress(e){let t=n.W.state.activeCaipNetwork,i=t?.chainNamespace,a=`${i}:${t?.id}:${e}`;u.U.setCaipAddress(a,i),p.W.close()}};e7.styles=e6,e4([(0,o.wk)()],e7.prototype,"allAccounts",void 0),e4([(0,o.wk)()],e7.prototype,"balances",void 0),e7=e4([(0,h.EM)("w3m-switch-address-view")],e7);var e8=i(70562);let e9=(0,w.AH)`
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  label {
    position: relative;
    display: inline-block;
    width: 32px;
    height: 22px;
  }

  input {
    width: 0;
    height: 0;
    opacity: 0;
  }

  span {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: var(--wui-color-blue-100);
    border-width: 1px;
    border-style: solid;
    border-color: var(--wui-color-gray-glass-002);
    border-radius: 999px;
    transition:
      background-color var(--wui-ease-inout-power-1) var(--wui-duration-md),
      border-color var(--wui-ease-inout-power-1) var(--wui-duration-md);
    will-change: background-color, border-color;
  }

  span:before {
    position: absolute;
    content: '';
    height: 16px;
    width: 16px;
    left: 3px;
    top: 2px;
    background-color: var(--wui-color-inverse-100);
    transition: transform var(--wui-ease-inout-power-1) var(--wui-duration-lg);
    will-change: transform;
    border-radius: 50%;
  }

  input:checked + span {
    border-color: var(--wui-color-gray-glass-005);
    background-color: var(--wui-color-blue-100);
  }

  input:not(:checked) + span {
    background-color: var(--wui-color-gray-glass-010);
  }

  input:checked + span:before {
    transform: translateX(calc(100% - 7px));
  }
`;var te=function(e,t,i,a){var o,r=arguments.length,n=r<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,i):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,a);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(n=(r<3?o(n):r>3?o(t,i,n):o(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let tt=class extends w.WF{constructor(){super(...arguments),this.inputElementRef=(0,e8._)(),this.checked=void 0}render(){return(0,w.qy)`
      <label>
        <input
          ${(0,e8.K)(this.inputElementRef)}
          type="checkbox"
          ?checked=${(0,f.J)(this.checked)}
          @change=${this.dispatchChangeEvent.bind(this)}
        />
        <span></span>
      </label>
    `}dispatchChangeEvent(){this.dispatchEvent(new CustomEvent("switchChange",{detail:this.inputElementRef.value?.checked,bubbles:!0,composed:!0}))}};tt.styles=[b.W5,b.fD,b.ck,e9],te([(0,g.MZ)({type:Boolean})],tt.prototype,"checked",void 0),tt=te([(0,v.E)("wui-switch")],tt);let ti=(0,w.AH)`
  :host {
    height: 100%;
  }

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    column-gap: var(--wui-spacing-1xs);
    padding: var(--wui-spacing-xs) var(--wui-spacing-s);
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-002);
    transition: background-color var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: background-color;
    cursor: pointer;
  }

  wui-switch {
    pointer-events: none;
  }
`;var ta=function(e,t,i,a){var o,r=arguments.length,n=r<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,i):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,a);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(n=(r<3?o(n):r>3?o(t,i,n):o(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let to=class extends w.WF{constructor(){super(...arguments),this.checked=void 0}render(){return(0,w.qy)`
      <button>
        <wui-icon size="xl" name="walletConnectBrown"></wui-icon>
        <wui-switch ?checked=${(0,f.J)(this.checked)}></wui-switch>
      </button>
    `}};to.styles=[b.W5,b.fD,ti],ta([(0,g.MZ)({type:Boolean})],to.prototype,"checked",void 0),to=ta([(0,v.E)("wui-certified-switch")],to);let tr=(0,w.AH)`
  button {
    background-color: var(--wui-color-fg-300);
    border-radius: var(--wui-border-radius-4xs);
    width: 16px;
    height: 16px;
  }

  button:disabled {
    background-color: var(--wui-color-bg-300);
  }

  wui-icon {
    color: var(--wui-color-bg-200) !important;
  }

  button:focus-visible {
    background-color: var(--wui-color-fg-250);
    border: 1px solid var(--wui-color-accent-100);
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled {
      background-color: var(--wui-color-fg-250);
    }

    button:active:enabled {
      background-color: var(--wui-color-fg-225);
    }
  }
`;var tn=function(e,t,i,a){var o,r=arguments.length,n=r<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,i):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,a);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(n=(r<3?o(n):r>3?o(t,i,n):o(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let ts=class extends w.WF{constructor(){super(...arguments),this.icon="copy"}render(){return(0,w.qy)`
      <button>
        <wui-icon color="inherit" size="xxs" name=${this.icon}></wui-icon>
      </button>
    `}};ts.styles=[b.W5,b.fD,tr],tn([(0,g.MZ)()],ts.prototype,"icon",void 0),ts=tn([(0,v.E)("wui-input-element")],ts),i(60665);let tl=(0,w.AH)`
  :host {
    position: relative;
    display: inline-block;
    width: 100%;
  }
`,tc=class extends w.WF{constructor(){super(...arguments),this.inputComponentRef=(0,e8._)()}render(){return(0,w.qy)`
      <wui-input-text
        ${(0,e8.K)(this.inputComponentRef)}
        placeholder="Search wallet"
        icon="search"
        type="search"
        enterKeyHint="search"
        size="sm"
      >
        <wui-input-element @click=${this.clearValue} icon="close"></wui-input-element>
      </wui-input-text>
    `}clearValue(){let e=this.inputComponentRef.value,t=e?.inputElementRef.value;t&&(t.value="",t.focus(),t.dispatchEvent(new Event("input")))}};tc.styles=[b.W5,tl],tc=function(e,t,i,a){var o,r=arguments.length,n=r<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,i):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,a);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(n=(r<3?o(n):r>3?o(t,i,n):o(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n}([(0,v.E)("wui-search-bar")],tc);var tu=i(62586);let td=(0,w.JW)`<svg  viewBox="0 0 48 54" fill="none">
  <path
    d="M43.4605 10.7248L28.0485 1.61089C25.5438 0.129705 22.4562 0.129705 19.9515 1.61088L4.53951 10.7248C2.03626 12.2051 0.5 14.9365 0.5 17.886V36.1139C0.5 39.0635 2.03626 41.7949 4.53951 43.2752L19.9515 52.3891C22.4562 53.8703 25.5438 53.8703 28.0485 52.3891L43.4605 43.2752C45.9637 41.7949 47.5 39.0635 47.5 36.114V17.8861C47.5 14.9365 45.9637 12.2051 43.4605 10.7248Z"
  />
</svg>`;i(36e3);let tp=(0,w.AH)`
  :host {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 104px;
    row-gap: var(--wui-spacing-xs);
    padding: var(--wui-spacing-xs) 10px;
    background-color: var(--wui-color-gray-glass-002);
    border-radius: clamp(0px, var(--wui-border-radius-xs), 20px);
    position: relative;
  }

  wui-shimmer[data-type='network'] {
    border: none;
    -webkit-clip-path: var(--wui-path-network);
    clip-path: var(--wui-path-network);
  }

  svg {
    position: absolute;
    width: 48px;
    height: 54px;
    z-index: 1;
  }

  svg > path {
    stroke: var(--wui-color-gray-glass-010);
    stroke-width: 1px;
  }

  @media (max-width: 350px) {
    :host {
      width: 100%;
    }
  }
`;var th=function(e,t,i,a){var o,r=arguments.length,n=r<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,i):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,a);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(n=(r<3?o(n):r>3?o(t,i,n):o(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let tw=class extends w.WF{constructor(){super(...arguments),this.type="wallet"}render(){return(0,w.qy)`
      ${this.shimmerTemplate()}
      <wui-shimmer width="56px" height="20px" borderRadius="xs"></wui-shimmer>
    `}shimmerTemplate(){return"network"===this.type?(0,w.qy)` <wui-shimmer
          data-type=${this.type}
          width="48px"
          height="54px"
          borderRadius="xs"
        ></wui-shimmer>
        ${td}`:(0,w.qy)`<wui-shimmer width="56px" height="56px" borderRadius="xs"></wui-shimmer>`}};tw.styles=[b.W5,b.fD,tp],th([(0,g.MZ)()],tw.prototype,"type",void 0),tw=th([(0,v.E)("wui-card-select-loader")],tw);let tg=(0,w.AH)`
  :host {
    display: grid;
    width: inherit;
    height: inherit;
  }
`;var tf=function(e,t,i,a){var o,r=arguments.length,n=r<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,i):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,a);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(n=(r<3?o(n):r>3?o(t,i,n):o(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let tb=class extends w.WF{render(){return this.style.cssText=`
      grid-template-rows: ${this.gridTemplateRows};
      grid-template-columns: ${this.gridTemplateColumns};
      justify-items: ${this.justifyItems};
      align-items: ${this.alignItems};
      justify-content: ${this.justifyContent};
      align-content: ${this.alignContent};
      column-gap: ${this.columnGap&&`var(--wui-spacing-${this.columnGap})`};
      row-gap: ${this.rowGap&&`var(--wui-spacing-${this.rowGap})`};
      gap: ${this.gap&&`var(--wui-spacing-${this.gap})`};
      padding-top: ${this.padding&&m.Z.getSpacingStyles(this.padding,0)};
      padding-right: ${this.padding&&m.Z.getSpacingStyles(this.padding,1)};
      padding-bottom: ${this.padding&&m.Z.getSpacingStyles(this.padding,2)};
      padding-left: ${this.padding&&m.Z.getSpacingStyles(this.padding,3)};
      margin-top: ${this.margin&&m.Z.getSpacingStyles(this.margin,0)};
      margin-right: ${this.margin&&m.Z.getSpacingStyles(this.margin,1)};
      margin-bottom: ${this.margin&&m.Z.getSpacingStyles(this.margin,2)};
      margin-left: ${this.margin&&m.Z.getSpacingStyles(this.margin,3)};
    `,(0,w.qy)`<slot></slot>`}};tb.styles=[b.W5,tg],tf([(0,g.MZ)()],tb.prototype,"gridTemplateRows",void 0),tf([(0,g.MZ)()],tb.prototype,"gridTemplateColumns",void 0),tf([(0,g.MZ)()],tb.prototype,"justifyItems",void 0),tf([(0,g.MZ)()],tb.prototype,"alignItems",void 0),tf([(0,g.MZ)()],tb.prototype,"justifyContent",void 0),tf([(0,g.MZ)()],tb.prototype,"alignContent",void 0),tf([(0,g.MZ)()],tb.prototype,"columnGap",void 0),tf([(0,g.MZ)()],tb.prototype,"rowGap",void 0),tf([(0,g.MZ)()],tb.prototype,"gap",void 0),tf([(0,g.MZ)()],tb.prototype,"padding",void 0),tf([(0,g.MZ)()],tb.prototype,"margin",void 0),tb=tf([(0,v.E)("wui-grid")],tb);var tm=i(36037);i(817);let tv=(0,w.AH)`
  :host {
    position: relative;
    background-color: var(--wui-color-gray-glass-002);
    display: flex;
    justify-content: center;
    align-items: center;
    width: var(--local-size);
    height: var(--local-size);
    border-radius: inherit;
    border-radius: var(--local-border-radius);
  }

  :host > wui-flex {
    overflow: hidden;
    border-radius: inherit;
    border-radius: var(--local-border-radius);
  }

  :host::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    border-radius: inherit;
    border: 1px solid var(--wui-color-gray-glass-010);
    pointer-events: none;
  }

  :host([name='Extension'])::after {
    border: 1px solid var(--wui-color-accent-glass-010);
  }

  :host([data-wallet-icon='allWallets']) {
    background-color: var(--wui-all-wallets-bg-100);
  }

  :host([data-wallet-icon='allWallets'])::after {
    border: 1px solid var(--wui-color-accent-glass-010);
  }

  wui-icon[data-parent-size='inherit'] {
    width: 75%;
    height: 75%;
    align-items: center;
  }

  wui-icon[data-parent-size='sm'] {
    width: 18px;
    height: 18px;
  }

  wui-icon[data-parent-size='md'] {
    width: 24px;
    height: 24px;
  }

  wui-icon[data-parent-size='lg'] {
    width: 42px;
    height: 42px;
  }

  wui-icon[data-parent-size='full'] {
    width: 100%;
    height: 100%;
  }

  :host > wui-icon-box {
    position: absolute;
    overflow: hidden;
    right: -1px;
    bottom: -2px;
    z-index: 1;
    border: 2px solid var(--wui-color-bg-150, #1e1f1f);
    padding: 1px;
  }
`;var ty=function(e,t,i,a){var o,r=arguments.length,n=r<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,i):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,a);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(n=(r<3?o(n):r>3?o(t,i,n):o(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let tx=class extends w.WF{constructor(){super(...arguments),this.size="md",this.name="",this.installed=!1,this.badgeSize="xs"}render(){let e="xxs";return e="lg"===this.size?"m":"md"===this.size?"xs":"xxs",this.style.cssText=`
       --local-border-radius: var(--wui-border-radius-${e});
       --local-size: var(--wui-wallet-image-size-${this.size});
   `,this.walletIcon&&(this.dataset.walletIcon=this.walletIcon),(0,w.qy)`
      <wui-flex justifyContent="center" alignItems="center"> ${this.templateVisual()} </wui-flex>
    `}templateVisual(){return this.imageSrc?(0,w.qy)`<wui-image src=${this.imageSrc} alt=${this.name}></wui-image>`:this.walletIcon?(0,w.qy)`<wui-icon
        data-parent-size="md"
        size="md"
        color="inherit"
        name=${this.walletIcon}
      ></wui-icon>`:(0,w.qy)`<wui-icon
      data-parent-size=${this.size}
      size="inherit"
      color="inherit"
      name="walletPlaceholder"
    ></wui-icon>`}};tx.styles=[b.fD,b.W5,tv],ty([(0,g.MZ)()],tx.prototype,"size",void 0),ty([(0,g.MZ)()],tx.prototype,"name",void 0),ty([(0,g.MZ)()],tx.prototype,"imageSrc",void 0),ty([(0,g.MZ)()],tx.prototype,"walletIcon",void 0),ty([(0,g.MZ)({type:Boolean})],tx.prototype,"installed",void 0),ty([(0,g.MZ)()],tx.prototype,"badgeSize",void 0),tx=ty([(0,v.E)("wui-wallet-image")],tx);let tk=(0,a.AH)`
  button {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    width: 104px;
    row-gap: var(--wui-spacing-xs);
    padding: var(--wui-spacing-s) var(--wui-spacing-0);
    background-color: var(--wui-color-gray-glass-002);
    border-radius: clamp(0px, var(--wui-border-radius-xs), 20px);
    transition:
      color var(--wui-duration-lg) var(--wui-ease-out-power-1),
      background-color var(--wui-duration-lg) var(--wui-ease-out-power-1),
      border-radius var(--wui-duration-lg) var(--wui-ease-out-power-1);
    will-change: background-color, color, border-radius;
    outline: none;
    border: none;
  }

  button > wui-flex > wui-text {
    color: var(--wui-color-fg-100);
    max-width: 86px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    justify-content: center;
  }

  button > wui-flex > wui-text.certified {
    max-width: 66px;
  }

  button:hover:enabled {
    background-color: var(--wui-color-gray-glass-005);
  }

  button:disabled > wui-flex > wui-text {
    color: var(--wui-color-gray-glass-015);
  }

  [data-selected='true'] {
    background-color: var(--wui-color-accent-glass-020);
  }

  @media (hover: hover) and (pointer: fine) {
    [data-selected='true']:hover:enabled {
      background-color: var(--wui-color-accent-glass-015);
    }
  }

  [data-selected='true']:active:enabled {
    background-color: var(--wui-color-accent-glass-010);
  }

  @media (max-width: 350px) {
    button {
      width: 100%;
    }
  }
`;var tC=function(e,t,i,a){var o,r=arguments.length,n=r<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,i):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,a);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(n=(r<3?o(n):r>3?o(t,i,n):o(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let t$=class extends a.WF{constructor(){super(),this.observer=new IntersectionObserver(()=>void 0),this.visible=!1,this.imageSrc=void 0,this.imageLoading=!1,this.wallet=void 0,this.observer=new IntersectionObserver(e=>{e.forEach(e=>{e.isIntersecting?(this.visible=!0,this.fetchImageSrc()):this.visible=!1})},{threshold:.01})}firstUpdated(){this.observer.observe(this)}disconnectedCallback(){this.observer.disconnect()}render(){let e=this.wallet?.badge_type==="certified";return(0,a.qy)`
      <button>
        ${this.imageTemplate()}
        <wui-flex flexDirection="row" alignItems="center" justifyContent="center" gap="3xs">
          <wui-text
            variant="tiny-500"
            color="inherit"
            class=${(0,r.J)(e?"certified":void 0)}
            >${this.wallet?.name}</wui-text
          >
          ${e?(0,a.qy)`<wui-icon size="sm" name="walletConnectBrown"></wui-icon>`:null}
        </wui-flex>
      </button>
    `}imageTemplate(){return(this.visible||this.imageSrc)&&!this.imageLoading?(0,a.qy)`
      <wui-wallet-image
        size="md"
        imageSrc=${(0,r.J)(this.imageSrc)}
        name=${this.wallet?.name}
        .installed=${this.wallet?.installed}
        badgeSize="sm"
      >
      </wui-wallet-image>
    `:this.shimmerTemplate()}shimmerTemplate(){return(0,a.qy)`<wui-shimmer width="56px" height="56px" borderRadius="xs"></wui-shimmer>`}async fetchImageSrc(){this.wallet&&(this.imageSrc=s.$.getWalletImage(this.wallet),this.imageSrc||(this.imageLoading=!0,this.imageSrc=await s.$.fetchWalletImage(this.wallet.image_id),this.imageLoading=!1))}};t$.styles=tk,tC([(0,o.wk)()],t$.prototype,"visible",void 0),tC([(0,o.wk)()],t$.prototype,"imageSrc",void 0),tC([(0,o.wk)()],t$.prototype,"imageLoading",void 0),tC([(0,o.MZ)()],t$.prototype,"wallet",void 0),t$=tC([(0,h.EM)("w3m-all-wallets-list-item")],t$);let tI=(0,a.AH)`
  wui-grid {
    max-height: clamp(360px, 400px, 80vh);
    overflow: scroll;
    scrollbar-width: none;
    grid-auto-rows: min-content;
    grid-template-columns: repeat(auto-fill, 104px);
  }

  @media (max-width: 350px) {
    wui-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  wui-grid[data-scroll='false'] {
    overflow: hidden;
  }

  wui-grid::-webkit-scrollbar {
    display: none;
  }

  wui-loading-spinner {
    padding-top: var(--wui-spacing-l);
    padding-bottom: var(--wui-spacing-l);
    justify-content: center;
    grid-column: 1 / span 4;
  }
`;var tE=function(e,t,i,a){var o,r=arguments.length,n=r<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,i):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,a);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(n=(r<3?o(n):r>3?o(t,i,n):o(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let tA="local-paginator",tT=class extends a.WF{constructor(){super(),this.unsubscribe=[],this.paginationObserver=void 0,this.loading=!tu.N.state.wallets.length,this.wallets=tu.N.state.wallets,this.recommended=tu.N.state.recommended,this.featured=tu.N.state.featured,this.unsubscribe.push(tu.N.subscribeKey("wallets",e=>this.wallets=e),tu.N.subscribeKey("recommended",e=>this.recommended=e),tu.N.subscribeKey("featured",e=>this.featured=e))}firstUpdated(){this.initialFetch(),this.createPaginationObserver()}disconnectedCallback(){this.unsubscribe.forEach(e=>e()),this.paginationObserver?.disconnect()}render(){return(0,a.qy)`
      <wui-grid
        data-scroll=${!this.loading}
        .padding=${["0","s","s","s"]}
        columnGap="xxs"
        rowGap="l"
        justifyContent="space-between"
      >
        ${this.loading?this.shimmerTemplate(16):this.walletsTemplate()}
        ${this.paginationLoaderTemplate()}
      </wui-grid>
    `}async initialFetch(){this.loading=!0;let e=this.shadowRoot?.querySelector("wui-grid");e&&(await tu.N.fetchWalletsByPage({page:1}),await e.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.loading=!1,e.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"}))}shimmerTemplate(e,t){return[...Array(e)].map(()=>(0,a.qy)`
        <wui-card-select-loader type="wallet" id=${(0,r.J)(t)}></wui-card-select-loader>
      `)}walletsTemplate(){let e=d.w.uniqueBy([...this.featured,...this.recommended,...this.wallets],"id");return tm.A.markWalletsAsInstalled(e).map(e=>(0,a.qy)`
        <w3m-all-wallets-list-item
          @click=${()=>this.onConnectWallet(e)}
          .wallet=${e}
        ></w3m-all-wallets-list-item>
      `)}paginationLoaderTemplate(){let{wallets:e,recommended:t,featured:i,count:a}=tu.N.state,o=window.innerWidth<352?3:4,r=e.length+t.length,n=Math.ceil(r/o)*o-r+o;return(n-=e.length?i.length%o:0,0===a&&i.length>0)?null:0===a||[...i,...e,...t].length<a?this.shimmerTemplate(n,tA):null}createPaginationObserver(){let e=this.shadowRoot?.querySelector(`#${tA}`);e&&(this.paginationObserver=new IntersectionObserver(([e])=>{if(e?.isIntersecting&&!this.loading){let{page:e,count:t,wallets:i}=tu.N.state;i.length<t&&tu.N.fetchWalletsByPage({page:e+1})}}),this.paginationObserver.observe(e))}onConnectWallet(e){G.a.selectWalletConnector(e)}};tT.styles=tI,tE([(0,o.wk)()],tT.prototype,"loading",void 0),tE([(0,o.wk)()],tT.prototype,"wallets",void 0),tE([(0,o.wk)()],tT.prototype,"recommended",void 0),tE([(0,o.wk)()],tT.prototype,"featured",void 0),tT=tE([(0,h.EM)("w3m-all-wallets-list")],tT),i(93278);let tS=(0,a.AH)`
  wui-grid,
  wui-loading-spinner,
  wui-flex {
    height: 360px;
  }

  wui-grid {
    overflow: scroll;
    scrollbar-width: none;
    grid-auto-rows: min-content;
    grid-template-columns: repeat(auto-fill, 104px);
  }

  wui-grid[data-scroll='false'] {
    overflow: hidden;
  }

  wui-grid::-webkit-scrollbar {
    display: none;
  }

  wui-loading-spinner {
    justify-content: center;
    align-items: center;
  }

  @media (max-width: 350px) {
    wui-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }
`;var tR=function(e,t,i,a){var o,r=arguments.length,n=r<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,i):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,a);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(n=(r<3?o(n):r>3?o(t,i,n):o(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let tW=class extends a.WF{constructor(){super(...arguments),this.prevQuery="",this.prevBadge=void 0,this.loading=!0,this.query=""}render(){return this.onSearch(),this.loading?(0,a.qy)`<wui-loading-spinner color="accent-100"></wui-loading-spinner>`:this.walletsTemplate()}async onSearch(){(this.query.trim()!==this.prevQuery.trim()||this.badge!==this.prevBadge)&&(this.prevQuery=this.query,this.prevBadge=this.badge,this.loading=!0,await tu.N.searchWallet({search:this.query,badge:this.badge}),this.loading=!1)}walletsTemplate(){let{search:e}=tu.N.state,t=tm.A.markWalletsAsInstalled(e);return e.length?(0,a.qy)`
      <wui-grid
        data-testid="wallet-list"
        .padding=${["0","s","s","s"]}
        rowGap="l"
        columnGap="xs"
        justifyContent="space-between"
      >
        ${t.map(e=>(0,a.qy)`
            <w3m-all-wallets-list-item
              @click=${()=>this.onConnectWallet(e)}
              .wallet=${e}
              data-testid="wallet-search-item-${e.id}"
            ></w3m-all-wallets-list-item>
          `)}
      </wui-grid>
    `:(0,a.qy)`
        <wui-flex
          data-testid="no-wallet-found"
          justifyContent="center"
          alignItems="center"
          gap="s"
          flexDirection="column"
        >
          <wui-icon-box
            size="lg"
            iconColor="fg-200"
            backgroundColor="fg-300"
            icon="wallet"
            background="transparent"
          ></wui-icon-box>
          <wui-text data-testid="no-wallet-found-text" color="fg-200" variant="paragraph-500">
            No Wallet found
          </wui-text>
        </wui-flex>
      `}onConnectWallet(e){G.a.selectWalletConnector(e)}};tW.styles=tS,tR([(0,o.wk)()],tW.prototype,"loading",void 0),tR([(0,o.MZ)()],tW.prototype,"query",void 0),tR([(0,o.MZ)()],tW.prototype,"badge",void 0),tW=tR([(0,h.EM)("w3m-all-wallets-search")],tW);var tO=function(e,t,i,a){var o,r=arguments.length,n=r<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,i):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,a);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(n=(r<3?o(n):r>3?o(t,i,n):o(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let tN=class extends a.WF{constructor(){super(...arguments),this.search="",this.onDebouncedSearch=d.w.debounce(e=>{this.search=e})}render(){let e=this.search.length>=2;return(0,a.qy)`
      <wui-flex .padding=${["0","s","s","s"]} gap="xs">
        <wui-search-bar @inputChange=${this.onInputChange.bind(this)}></wui-search-bar>
        <wui-certified-switch
          ?checked=${this.badge}
          @click=${this.onClick.bind(this)}
          data-testid="wui-certified-switch"
        ></wui-certified-switch>
        ${this.qrButtonTemplate()}
      </wui-flex>
      ${e||this.badge?(0,a.qy)`<w3m-all-wallets-search
            query=${this.search}
            badge=${(0,r.J)(this.badge)}
          ></w3m-all-wallets-search>`:(0,a.qy)`<w3m-all-wallets-list badge=${(0,r.J)(this.badge)}></w3m-all-wallets-list>`}
    `}onInputChange(e){this.onDebouncedSearch(e.detail)}onClick(){if("certified"===this.badge){this.badge=void 0;return}this.badge="certified",X.P.showSvg("Only WalletConnect certified",{icon:"walletConnectBrown",iconColor:"accent-100"})}qrButtonTemplate(){return d.w.isMobile()?(0,a.qy)`
        <wui-icon-box
          size="lg"
          iconSize="xl"
          iconColor="accent-100"
          backgroundColor="accent-100"
          icon="qrCode"
          background="transparent"
          border
          borderColor="wui-accent-glass-010"
          @click=${this.onWalletConnectQr.bind(this)}
        ></wui-icon-box>
      `:null}onWalletConnectQr(){Q.I.push("ConnectingWalletConnect")}};tO([(0,o.wk)()],tN.prototype,"search",void 0),tO([(0,o.wk)()],tN.prototype,"badge",void 0),tN=tO([(0,h.EM)("w3m-all-wallets-view")],tN);var tj=i(96118),tM=i(81914),tP=i(27388);let tq=(0,tP.u$)(class extends tP.WL{constructor(e){if(super(e),e.type!==tP.OA.ATTRIBUTE||"class"!==e.name||e.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter(t=>e[t]).join(" ")+" "}update(e,[t]){if(void 0===this.st){for(let i in this.st=new Set,void 0!==e.strings&&(this.nt=new Set(e.strings.join(" ").split(/\s/).filter(e=>""!==e))),t)t[i]&&!this.nt?.has(i)&&this.st.add(i);return this.render(t)}let i=e.element.classList;for(let e of this.st)e in t||(i.remove(e),this.st.delete(e));for(let e in t){let a=!!t[e];a===this.st.has(e)||this.nt?.has(e)||(a?(i.add(e),this.st.add(e)):(i.remove(e),this.st.delete(e)))}return tM.c0}});var tD=i(5185);let tU=(0,w.AH)`
  button {
    column-gap: var(--wui-spacing-s);
    padding: 16.5px var(--wui-spacing-l) 16.5px var(--wui-spacing-xs);
    width: 100%;
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
    color: var(--wui-color-fg-100);
    justify-content: center;
    align-items: center;
  }

  button:disabled {
    background-color: var(--wui-color-gray-glass-015);
    color: var(--wui-color-gray-glass-015);
  }
`;var tZ=function(e,t,i,a){var o,r=arguments.length,n=r<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,i):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,a);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(n=(r<3?o(n):r>3?o(t,i,n):o(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let tz=class extends w.WF{constructor(){super(...arguments),this.text="",this.disabled=!1,this.tabIdx=void 0}render(){return(0,w.qy)`
      <button ?disabled=${this.disabled} tabindex=${(0,f.J)(this.tabIdx)}>
        <wui-text align="center" variant="paragraph-500" color="inherit">${this.text}</wui-text>
      </button>
    `}};tz.styles=[b.W5,b.fD,tU],tZ([(0,g.MZ)()],tz.prototype,"text",void 0),tZ([(0,g.MZ)({type:Boolean})],tz.prototype,"disabled",void 0),tZ([(0,g.MZ)()],tz.prototype,"tabIdx",void 0),tz=tZ([(0,v.E)("wui-list-button")],tz),i(33575);var t_=i(153),tL=i(86230);i(38878);let tH=(0,a.AH)`
  wui-separator {
    margin: var(--wui-spacing-s) calc(var(--wui-spacing-s) * -1);
    width: calc(100% + var(--wui-spacing-s) * 2);
  }

  wui-email-input {
    width: 100%;
  }

  form {
    width: 100%;
    display: block;
    position: relative;
  }

  wui-icon-link,
  wui-loading-spinner {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }

  wui-icon-link {
    right: var(--wui-spacing-xs);
  }

  wui-loading-spinner {
    right: var(--wui-spacing-m);
  }

  wui-text {
    margin: var(--wui-spacing-xxs) var(--wui-spacing-m) var(--wui-spacing-0) var(--wui-spacing-m);
  }
`;var tB=function(e,t,i,a){var o,r=arguments.length,n=r<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,i):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,a);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(n=(r<3?o(n):r>3?o(t,i,n):o(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let tF=class extends a.WF{constructor(){super(...arguments),this.unsubscribe=[],this.formRef=(0,tL._)(),this.email="",this.loading=!1,this.error=""}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}firstUpdated(){this.formRef.value?.addEventListener("keydown",e=>{"Enter"===e.key&&this.onSubmitEmail(e)})}render(){return(0,a.qy)`
      <form ${(0,tL.K)(this.formRef)} @submit=${this.onSubmitEmail.bind(this)}>
        <wui-email-input
          @focus=${this.onFocusEvent.bind(this)}
          .disabled=${this.loading}
          @inputChange=${this.onEmailInputChange.bind(this)}
          tabIdx=${(0,r.J)(this.tabIdx)}
        >
        </wui-email-input>

        ${this.submitButtonTemplate()}${this.loadingTemplate()}
        <input type="submit" hidden />
      </form>
      ${this.templateError()}
    `}submitButtonTemplate(){return!this.loading&&this.email.length>3?(0,a.qy)`
          <wui-icon-link
            size="sm"
            icon="chevronRight"
            iconcolor="accent-100"
            @click=${this.onSubmitEmail.bind(this)}
          >
          </wui-icon-link>
        `:null}loadingTemplate(){return this.loading?(0,a.qy)`<wui-loading-spinner size="md" color="accent-100"></wui-loading-spinner>`:null}templateError(){return this.error?(0,a.qy)`<wui-text variant="tiny-500" color="error-100">${this.error}</wui-text>`:null}onEmailInputChange(e){this.email=e.detail.trim(),this.error=""}async onSubmitEmail(e){if(!K.o.AUTH_CONNECTOR_SUPPORTED_CHAINS.find(e=>e===n.W.state.activeChain)){let e=n.W.getFirstCaipNetworkSupportsAuthConnector();if(e){Q.I.push("SwitchNetwork",{network:e});return}}try{if(this.loading)return;this.loading=!0,e.preventDefault();let t=G.a.getAuthConnector();if(!t)throw Error("w3m-email-login-widget: Auth connector not found");let{action:i}=await t.provider.connectEmail({email:this.email});U.E.sendEvent({type:"track",event:"EMAIL_SUBMITTED"}),"VERIFY_OTP"===i?(U.E.sendEvent({type:"track",event:"EMAIL_VERIFICATION_CODE_SENT"}),Q.I.push("EmailVerifyOtp",{email:this.email})):"VERIFY_DEVICE"===i?Q.I.push("EmailVerifyDevice",{email:this.email}):"CONNECT"===i&&(await ee.x.connectExternal(t,n.W.state.activeChain),Q.I.replace("Account"))}catch(t){let e=d.w.parseError(t);e?.includes("Invalid email")?this.error="Invalid email. Try again.":X.P.showError(t)}finally{this.loading=!1}}onFocusEvent(){U.E.sendEvent({type:"track",event:"EMAIL_LOGIN_SELECTED"})}};tF.styles=tH,tB([(0,o.MZ)()],tF.prototype,"tabIdx",void 0),tB([(0,o.wk)()],tF.prototype,"email",void 0),tB([(0,o.wk)()],tF.prototype,"loading",void 0),tB([(0,o.wk)()],tF.prototype,"error",void 0),tF=tB([(0,h.EM)("w3m-email-login-widget")],tF),i(61735),i(20669);var tV=i(37458);i(12716),i(88944);let tJ=(0,w.AH)`
  :host {
    display: block;
    width: 100%;
  }

  button {
    width: 100%;
    height: 56px;
    background: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
  }
`;var tK=function(e,t,i,a){var o,r=arguments.length,n=r<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,i):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,a);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(n=(r<3?o(n):r>3?o(t,i,n):o(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let tG=class extends w.WF{constructor(){super(...arguments),this.logo="google",this.disabled=!1,this.tabIdx=void 0}render(){return(0,w.qy)`
      <button ?disabled=${this.disabled} tabindex=${(0,f.J)(this.tabIdx)}>
        <wui-logo logo=${this.logo}></wui-logo>
      </button>
    `}};tG.styles=[b.W5,b.fD,tJ],tK([(0,g.MZ)()],tG.prototype,"logo",void 0),tK([(0,g.MZ)({type:Boolean})],tG.prototype,"disabled",void 0),tK([(0,g.MZ)()],tG.prototype,"tabIdx",void 0),tG=tK([(0,v.E)("wui-logo-select")],tG);let tY=(0,a.AH)`
  wui-separator {
    margin: var(--wui-spacing-m) calc(var(--wui-spacing-m) * -1) var(--wui-spacing-m)
      calc(var(--wui-spacing-m) * -1);
    width: calc(100% + var(--wui-spacing-s) * 2);
  }
`;var tX=function(e,t,i,a){var o,r=arguments.length,n=r<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,i):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,a);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(n=(r<3?o(n):r>3?o(t,i,n):o(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let tQ=class extends a.WF{constructor(){super(),this.unsubscribe=[],this.walletGuide="get-started",this.tabIdx=void 0,this.connectors=G.a.state.connectors,this.features=l.H.state.features,this.authConnector=this.connectors.find(e=>"AUTH"===e.type),this.unsubscribe.push(G.a.subscribeKey("connectors",e=>{this.connectors=e,this.authConnector=this.connectors.find(e=>"AUTH"===e.type)}),l.H.subscribeKey("features",e=>this.features=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return(0,a.qy)`
      <wui-flex
        class="container"
        flexDirection="column"
        gap="xs"
        data-testid="w3m-social-login-widget"
      >
        ${this.topViewTemplate()}${this.bottomViewTemplate()}
      </wui-flex>
    `}topViewTemplate(){let e="explore"===this.walletGuide,t=this.features?.socials;return!t&&e?(t=Y.oU.DEFAULT_FEATURES.socials,this.renderTopViewContent(t)):t?this.renderTopViewContent(t):null}renderTopViewContent(e){return 2===e.length?(0,a.qy)` <wui-flex gap="xs">
        ${e.slice(0,2).map(e=>(0,a.qy)`<wui-logo-select
              data-testid=${`social-selector-${e}`}
              @click=${()=>{this.onSocialClick(e)}}
              logo=${e}
              tabIdx=${(0,r.J)(this.tabIdx)}
            ></wui-logo-select>`)}
      </wui-flex>`:(0,a.qy)` <wui-list-social
      data-testid=${`social-selector-${e[0]}`}
      @click=${()=>{this.onSocialClick(e[0])}}
      logo=${(0,r.J)(e[0])}
      align="center"
      name=${`Continue with ${e[0]}`}
      tabIdx=${(0,r.J)(this.tabIdx)}
    ></wui-list-social>`}bottomViewTemplate(){let e=this.features?.socials,t="explore"===this.walletGuide;return(this.authConnector&&e&&e?.length||!t||(e=Y.oU.DEFAULT_FEATURES.socials),!e||e.length<=2)?null:e&&e.length>6?(0,a.qy)`<wui-flex gap="xs">
        ${e.slice(1,5).map(e=>(0,a.qy)`<wui-logo-select
              data-testid=${`social-selector-${e}`}
              @click=${()=>{this.onSocialClick(e)}}
              logo=${e}
              tabIdx=${(0,r.J)(this.tabIdx)}
            ></wui-logo-select>`)}
        <wui-logo-select
          logo="more"
          tabIdx=${(0,r.J)(this.tabIdx)}
          @click=${this.onMoreSocialsClick.bind(this)}
        ></wui-logo-select>
      </wui-flex>`:e?(0,a.qy)`<wui-flex gap="xs">
      ${e.slice(1,e.length).map(e=>(0,a.qy)`<wui-logo-select
            data-testid=${`social-selector-${e}`}
            @click=${()=>{this.onSocialClick(e)}}
            logo=${e}
            tabIdx=${(0,r.J)(this.tabIdx)}
          ></wui-logo-select>`)}
    </wui-flex>`:null}onMoreSocialsClick(){Q.I.push("ConnectSocials")}async onSocialClick(e){if(!K.o.AUTH_CONNECTOR_SUPPORTED_CHAINS.find(e=>e===n.W.state.activeChain)){let e=n.W.getFirstCaipNetworkSupportsAuthConnector();if(e){Q.I.push("SwitchNetwork",{network:e});return}}e&&await (0,tV.Up)(e)}};tQ.styles=tY,tX([(0,o.MZ)()],tQ.prototype,"walletGuide",void 0),tX([(0,o.MZ)()],tQ.prototype,"tabIdx",void 0),tX([(0,o.wk)()],tQ.prototype,"connectors",void 0),tX([(0,o.wk)()],tQ.prototype,"features",void 0),tX([(0,o.wk)()],tQ.prototype,"authConnector",void 0),tQ=tX([(0,h.EM)("w3m-social-login-widget")],tQ),i(49577);let t0=(0,a.AH)`
  :host {
    padding-bottom: var(--wui-spacing-s);
  }
  wui-flex {
    width: 100%;
  }

  .wallet-guide {
    width: 100%;
  }

  .chip-box {
    width: fit-content;
    background-color: var(--wui-color-gray-glass-005);
    border-radius: var(--wui-border-radius-3xl);
  }
`;var t3=function(e,t,i,a){var o,r=arguments.length,n=r<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,i):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,a);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(n=(r<3?o(n):r>3?o(t,i,n):o(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let t1=class extends a.WF{constructor(){super(...arguments),this.walletGuide="get-started"}render(){return"explore"===this.walletGuide?(0,a.qy)`<wui-flex
          class="wallet-guide"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          rowGap="xs"
          data-testid="w3m-wallet-guide-explore"
        >
          <wui-text variant="small-400" color="fg-200" align="center">
            Looking for a self-custody wallet?
          </wui-text>

          <wui-flex class="chip-box">
            <wui-chip
              imageIcon="walletConnectLightBrown"
              icon="externalLink"
              variant="transparent"
              href="https://walletguide.walletconnect.network"
              title="Find one on WalletGuide"
            ></wui-chip>
          </wui-flex>
        </wui-flex>`:(0,a.qy)`<wui-flex
          columnGap="4xs"
          flexDirection="row"
          alignItems="center"
          justifyContent="center"
          .padding=${["s","0","s","0"]}
        >
          <wui-text variant="small-400" class="title" color="fg-200"
            >Haven't got a wallet?</wui-text
          >
          <wui-link
            data-testid="w3m-wallet-guide-get-started"
            color="blue-100"
            class="get-started-link"
            @click=${this.onGetStarted}
            tabIdx=${(0,r.J)(this.tabIdx)}
          >
            Get started
          </wui-link>
        </wui-flex>`}onGetStarted(){Q.I.push("Create")}};t1.styles=t0,t3([(0,o.MZ)()],t1.prototype,"tabIdx",void 0),t3([(0,o.MZ)()],t1.prototype,"walletGuide",void 0),t1=t3([(0,h.EM)("w3m-wallet-guide")],t1);let t5=(0,w.AH)`
  :host {
    position: relative;
    border-radius: var(--wui-border-radius-xxs);
    width: 40px;
    height: 40px;
    overflow: hidden;
    background: var(--wui-color-gray-glass-002);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: var(--wui-spacing-4xs);
    padding: 3.75px !important;
  }

  :host::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    border-radius: inherit;
    border: 1px solid var(--wui-color-gray-glass-010);
    pointer-events: none;
  }

  :host > wui-wallet-image {
    width: 14px;
    height: 14px;
    border-radius: var(--wui-border-radius-5xs);
  }

  :host > wui-flex {
    padding: 2px;
    position: fixed;
    overflow: hidden;
    left: 34px;
    bottom: 8px;
    background: var(--dark-background-150, #1e1f1f);
    border-radius: 50%;
    z-index: 2;
    display: flex;
  }
`;var t2=function(e,t,i,a){var o,r=arguments.length,n=r<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,i):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,a);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(n=(r<3?o(n):r>3?o(t,i,n):o(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let t6=class extends w.WF{constructor(){super(...arguments),this.walletImages=[]}render(){let e=this.walletImages.length<4;return(0,w.qy)`${this.walletImages.slice(0,4).map(({src:e,walletName:t})=>(0,w.qy)`
            <wui-wallet-image
              size="inherit"
              imageSrc=${e}
              name=${(0,f.J)(t)}
            ></wui-wallet-image>
          `)}
      ${e?[...Array(4-this.walletImages.length)].map(()=>(0,w.qy)` <wui-wallet-image size="inherit" name=""></wui-wallet-image>`):null}
      <wui-flex>
        <wui-icon-box
          size="xxs"
          iconSize="xxs"
          iconcolor="success-100"
          backgroundcolor="success-100"
          icon="checkmark"
          background="opaque"
        ></wui-icon-box>
      </wui-flex>`}};t6.styles=[b.W5,t5],t2([(0,g.MZ)({type:Array})],t6.prototype,"walletImages",void 0),t6=t2([(0,v.E)("wui-all-wallets-image")],t6);let t4=(0,w.AH)`
  button {
    column-gap: var(--wui-spacing-s);
    padding: 7px var(--wui-spacing-l) 7px var(--wui-spacing-xs);
    width: 100%;
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
    color: var(--wui-color-fg-100);
  }

  button > wui-text:nth-child(2) {
    display: flex;
    flex: 1;
  }

  button:disabled {
    background-color: var(--wui-color-gray-glass-015);
    color: var(--wui-color-gray-glass-015);
  }

  button:disabled > wui-tag {
    background-color: var(--wui-color-gray-glass-010);
    color: var(--wui-color-fg-300);
  }

  wui-icon {
    color: var(--wui-color-fg-200) !important;
  }
`;var t7=function(e,t,i,a){var o,r=arguments.length,n=r<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,i):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,a);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(n=(r<3?o(n):r>3?o(t,i,n):o(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let t8=class extends w.WF{constructor(){super(...arguments),this.walletImages=[],this.imageSrc="",this.name="",this.tabIdx=void 0,this.installed=!1,this.disabled=!1,this.showAllWallets=!1,this.loading=!1,this.loadingSpinnerColor="accent-100"}render(){return(0,w.qy)`
      <button ?disabled=${this.disabled} tabindex=${(0,f.J)(this.tabIdx)}>
        ${this.templateAllWallets()} ${this.templateWalletImage()}
        <wui-text variant="paragraph-500" color="inherit">${this.name}</wui-text>
        ${this.templateStatus()}
      </button>
    `}templateAllWallets(){return this.showAllWallets&&this.imageSrc?(0,w.qy)` <wui-all-wallets-image .imageeSrc=${this.imageSrc}> </wui-all-wallets-image> `:this.showAllWallets&&this.walletIcon?(0,w.qy)` <wui-wallet-image .walletIcon=${this.walletIcon} size="sm"> </wui-wallet-image> `:null}templateWalletImage(){return!this.showAllWallets&&this.imageSrc?(0,w.qy)`<wui-wallet-image
        size="sm"
        imageSrc=${this.imageSrc}
        name=${this.name}
        .installed=${this.installed}
      ></wui-wallet-image>`:this.showAllWallets||this.imageSrc?null:(0,w.qy)`<wui-wallet-image size="sm" name=${this.name}></wui-wallet-image>`}templateStatus(){return this.loading?(0,w.qy)`<wui-loading-spinner
        size="lg"
        color=${this.loadingSpinnerColor}
      ></wui-loading-spinner>`:this.tagLabel&&this.tagVariant?(0,w.qy)`<wui-tag variant=${this.tagVariant}>${this.tagLabel}</wui-tag>`:this.icon?(0,w.qy)`<wui-icon color="inherit" size="sm" name=${this.icon}></wui-icon>`:null}};t8.styles=[b.W5,b.fD,t4],t7([(0,g.MZ)({type:Array})],t8.prototype,"walletImages",void 0),t7([(0,g.MZ)()],t8.prototype,"imageSrc",void 0),t7([(0,g.MZ)()],t8.prototype,"name",void 0),t7([(0,g.MZ)()],t8.prototype,"tagLabel",void 0),t7([(0,g.MZ)()],t8.prototype,"tagVariant",void 0),t7([(0,g.MZ)()],t8.prototype,"icon",void 0),t7([(0,g.MZ)()],t8.prototype,"walletIcon",void 0),t7([(0,g.MZ)()],t8.prototype,"tabIdx",void 0),t7([(0,g.MZ)({type:Boolean})],t8.prototype,"installed",void 0),t7([(0,g.MZ)({type:Boolean})],t8.prototype,"disabled",void 0),t7([(0,g.MZ)({type:Boolean})],t8.prototype,"showAllWallets",void 0),t7([(0,g.MZ)({type:Boolean})],t8.prototype,"loading",void 0),t7([(0,g.MZ)({type:String})],t8.prototype,"loadingSpinnerColor",void 0),t8=t7([(0,v.E)("wui-list-wallet")],t8);var t9=function(e,t,i,a){var o,r=arguments.length,n=r<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,i):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,a);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(n=(r<3?o(n):r>3?o(t,i,n):o(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let ie=class extends a.WF{constructor(){super(),this.unsubscribe=[],this.tabIdx=void 0,this.connectors=G.a.state.connectors,this.count=tu.N.state.count,this.isFetchingRecommendedWallets=tu.N.state.isFetchingRecommendedWallets,this.unsubscribe.push(G.a.subscribeKey("connectors",e=>this.connectors=e),tu.N.subscribeKey("count",e=>this.count=e),tu.N.subscribeKey("isFetchingRecommendedWallets",e=>this.isFetchingRecommendedWallets=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){let e=this.connectors.find(e=>"walletConnect"===e.id),{allWallets:t}=l.H.state;if(!e||"HIDE"===t||"ONLY_MOBILE"===t&&!d.w.isMobile())return null;let i=tu.N.state.featured.length,o=this.count+i,n=o<10?o:10*Math.floor(o/10),s=n<o?`${n}+`:`${n}`;return(0,a.qy)`
      <wui-list-wallet
        name="All Wallets"
        walletIcon="allWallets"
        showAllWallets
        @click=${this.onAllWallets.bind(this)}
        tagLabel=${s}
        tagVariant="shade"
        data-testid="all-wallets"
        tabIdx=${(0,r.J)(this.tabIdx)}
        .loading=${this.isFetchingRecommendedWallets}
        loadingSpinnerColor=${this.isFetchingRecommendedWallets?"fg-300":"accent-100"}
      ></wui-list-wallet>
    `}onAllWallets(){U.E.sendEvent({type:"track",event:"CLICK_ALL_WALLETS"}),Q.I.push("AllWallets")}};t9([(0,o.MZ)()],ie.prototype,"tabIdx",void 0),t9([(0,o.wk)()],ie.prototype,"connectors",void 0),t9([(0,o.wk)()],ie.prototype,"count",void 0),t9([(0,o.wk)()],ie.prototype,"isFetchingRecommendedWallets",void 0),ie=t9([(0,h.EM)("w3m-all-wallets-widget")],ie);var it=i(2867),ii=function(e,t,i,a){var o,r=arguments.length,n=r<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,i):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,a);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(n=(r<3?o(n):r>3?o(t,i,n):o(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let ia=class extends a.WF{constructor(){super(),this.unsubscribe=[],this.tabIdx=void 0,this.connectors=G.a.state.connectors,this.unsubscribe.push(G.a.subscribeKey("connectors",e=>this.connectors=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){let e=this.connectors.filter(e=>"ANNOUNCED"===e.type);return e?.length?(0,a.qy)`
      <wui-flex flexDirection="column" gap="xs">
        ${e.filter(it.g.showConnector).map(e=>(0,a.qy)`
              <wui-list-wallet
                imageSrc=${(0,r.J)(s.$.getConnectorImage(e))}
                name=${e.name??"Unknown"}
                @click=${()=>this.onConnector(e)}
                tagVariant="success"
                tagLabel="installed"
                data-testid=${`wallet-selector-${e.id}`}
                .installed=${!0}
                tabIdx=${(0,r.J)(this.tabIdx)}
              >
              </wui-list-wallet>
            `)}
      </wui-flex>
    `:(this.style.cssText="display: none",null)}onConnector(e){"walletConnect"===e.id?d.w.isMobile()?Q.I.push("AllWallets"):Q.I.push("ConnectingWalletConnect"):Q.I.push("ConnectingExternal",{connector:e})}};ii([(0,o.MZ)()],ia.prototype,"tabIdx",void 0),ii([(0,o.wk)()],ia.prototype,"connectors",void 0),ia=ii([(0,h.EM)("w3m-connect-announced-widget")],ia);var io=function(e,t,i,a){var o,r=arguments.length,n=r<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,i):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,a);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(n=(r<3?o(n):r>3?o(t,i,n):o(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let ir=class extends a.WF{constructor(){super(),this.unsubscribe=[],this.tabIdx=void 0,this.connectors=G.a.state.connectors,this.loading=!1,this.unsubscribe.push(G.a.subscribeKey("connectors",e=>this.connectors=e)),d.w.isTelegram()&&d.w.isIos()&&(this.loading=!ee.x.state.wcUri,this.unsubscribe.push(ee.x.subscribeKey("wcUri",e=>this.loading=!e)))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){let{customWallets:e}=l.H.state;if(!e?.length)return this.style.cssText="display: none",null;let t=this.filterOutDuplicateWallets(e);return(0,a.qy)`<wui-flex flexDirection="column" gap="xs">
      ${t.map(e=>(0,a.qy)`
          <wui-list-wallet
            imageSrc=${(0,r.J)(s.$.getWalletImage(e))}
            name=${e.name??"Unknown"}
            @click=${()=>this.onConnectWallet(e)}
            data-testid=${`wallet-selector-${e.id}`}
            tabIdx=${(0,r.J)(this.tabIdx)}
            ?loading=${this.loading}
          >
          </wui-list-wallet>
        `)}
    </wui-flex>`}filterOutDuplicateWallets(e){let t=en.i.getRecentWallets(),i=this.connectors.map(e=>e.info?.rdns).filter(Boolean),a=t.map(e=>e.rdns).filter(Boolean),o=i.concat(a);if(o.includes("io.metamask.mobile")&&d.w.isMobile()){let e=o.indexOf("io.metamask.mobile");o[e]="io.metamask"}return e.filter(e=>!o.includes(String(e?.rdns)))}onConnectWallet(e){this.loading||Q.I.push("ConnectingWalletConnect",{wallet:e})}};io([(0,o.MZ)()],ir.prototype,"tabIdx",void 0),io([(0,o.wk)()],ir.prototype,"connectors",void 0),io([(0,o.wk)()],ir.prototype,"loading",void 0),ir=io([(0,h.EM)("w3m-connect-custom-widget")],ir);var is=function(e,t,i,a){var o,r=arguments.length,n=r<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,i):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,a);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(n=(r<3?o(n):r>3?o(t,i,n):o(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let il=class extends a.WF{constructor(){super(),this.unsubscribe=[],this.tabIdx=void 0,this.connectors=G.a.state.connectors,this.unsubscribe.push(G.a.subscribeKey("connectors",e=>this.connectors=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){let e=this.connectors.filter(e=>"EXTERNAL"===e.type).filter(it.g.showConnector).filter(e=>e.id!==K.o.CONNECTOR_ID.COINBASE_SDK);return e?.length?(0,a.qy)`
      <wui-flex flexDirection="column" gap="xs">
        ${e.map(e=>(0,a.qy)`
            <wui-list-wallet
              imageSrc=${(0,r.J)(s.$.getConnectorImage(e))}
              .installed=${!0}
              name=${e.name??"Unknown"}
              data-testid=${`wallet-selector-external-${e.id}`}
              @click=${()=>this.onConnector(e)}
              tabIdx=${(0,r.J)(this.tabIdx)}
            >
            </wui-list-wallet>
          `)}
      </wui-flex>
    `:(this.style.cssText="display: none",null)}onConnector(e){Q.I.push("ConnectingExternal",{connector:e})}};is([(0,o.MZ)()],il.prototype,"tabIdx",void 0),is([(0,o.wk)()],il.prototype,"connectors",void 0),il=is([(0,h.EM)("w3m-connect-external-widget")],il);var ic=function(e,t,i,a){var o,r=arguments.length,n=r<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,i):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,a);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(n=(r<3?o(n):r>3?o(t,i,n):o(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let iu=class extends a.WF{constructor(){super(...arguments),this.tabIdx=void 0,this.wallets=[]}render(){return this.wallets.length?(0,a.qy)`
      <wui-flex flexDirection="column" gap="xs">
        ${this.wallets.map(e=>(0,a.qy)`
            <wui-list-wallet
              data-testid=${`wallet-selector-featured-${e.id}`}
              imageSrc=${(0,r.J)(s.$.getWalletImage(e))}
              name=${e.name??"Unknown"}
              @click=${()=>this.onConnectWallet(e)}
              tabIdx=${(0,r.J)(this.tabIdx)}
            >
            </wui-list-wallet>
          `)}
      </wui-flex>
    `:(this.style.cssText="display: none",null)}onConnectWallet(e){G.a.selectWalletConnector(e)}};ic([(0,o.MZ)()],iu.prototype,"tabIdx",void 0),ic([(0,o.MZ)()],iu.prototype,"wallets",void 0),iu=ic([(0,h.EM)("w3m-connect-featured-widget")],iu);var id=function(e,t,i,a){var o,r=arguments.length,n=r<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,i):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,a);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(n=(r<3?o(n):r>3?o(t,i,n):o(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let ip=class extends a.WF{constructor(){super(...arguments),this.tabIdx=void 0,this.connectors=[]}render(){let e=this.connectors;return e?.length&&(1!==e.length||e[0]?.name!=="Browser Wallet"||d.w.isMobile())?(0,a.qy)`
      <wui-flex flexDirection="column" gap="xs">
        ${e.map(e=>{let t=e.info?.rdns;return d.w.isMobile()||"Browser Wallet"!==e.name?t||ee.x.checkInstalled()?it.g.showConnector(e)?(0,a.qy)`
            <wui-list-wallet
              imageSrc=${(0,r.J)(s.$.getConnectorImage(e))}
              .installed=${!0}
              name=${e.name??"Unknown"}
              tagVariant="success"
              tagLabel="installed"
              data-testid=${`wallet-selector-${e.id}`}
              @click=${()=>this.onConnector(e)}
              tabIdx=${(0,r.J)(this.tabIdx)}
            >
            </wui-list-wallet>
          `:null:(this.style.cssText="display: none",null):null})}
      </wui-flex>
    `:(this.style.cssText="display: none",null)}onConnector(e){G.a.setActiveConnector(e),Q.I.push("ConnectingExternal",{connector:e})}};id([(0,o.MZ)()],ip.prototype,"tabIdx",void 0),id([(0,o.MZ)()],ip.prototype,"connectors",void 0),ip=id([(0,h.EM)("w3m-connect-injected-widget")],ip);var ih=function(e,t,i,a){var o,r=arguments.length,n=r<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,i):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,a);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(n=(r<3?o(n):r>3?o(t,i,n):o(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let iw=class extends a.WF{constructor(){super(),this.unsubscribe=[],this.tabIdx=void 0,this.connectors=G.a.state.connectors,this.unsubscribe.push(G.a.subscribeKey("connectors",e=>this.connectors=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){let e=this.connectors.filter(e=>"MULTI_CHAIN"===e.type&&"WalletConnect"!==e.name);return e?.length?(0,a.qy)`
      <wui-flex flexDirection="column" gap="xs">
        ${e.map(e=>(0,a.qy)`
            <wui-list-wallet
              imageSrc=${(0,r.J)(s.$.getConnectorImage(e))}
              .installed=${!0}
              name=${e.name??"Unknown"}
              tagVariant="shade"
              tagLabel="multichain"
              data-testid=${`wallet-selector-${e.id}`}
              @click=${()=>this.onConnector(e)}
              tabIdx=${(0,r.J)(this.tabIdx)}
            >
            </wui-list-wallet>
          `)}
      </wui-flex>
    `:(this.style.cssText="display: none",null)}onConnector(e){G.a.setActiveConnector(e),Q.I.push("ConnectingMultiChain")}};ih([(0,o.MZ)()],iw.prototype,"tabIdx",void 0),ih([(0,o.wk)()],iw.prototype,"connectors",void 0),iw=ih([(0,h.EM)("w3m-connect-multi-chain-widget")],iw);var ig=function(e,t,i,a){var o,r=arguments.length,n=r<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,i):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,a);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(n=(r<3?o(n):r>3?o(t,i,n):o(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let ib=class extends a.WF{constructor(){super(),this.unsubscribe=[],this.tabIdx=void 0,this.connectors=G.a.state.connectors,this.loading=!1,this.unsubscribe.push(G.a.subscribeKey("connectors",e=>this.connectors=e)),d.w.isTelegram()&&d.w.isIos()&&(this.loading=!ee.x.state.wcUri,this.unsubscribe.push(ee.x.subscribeKey("wcUri",e=>this.loading=!e)))}render(){let e=en.i.getRecentWallets().filter(e=>!tm.A.isExcluded(e)).filter(e=>!this.hasWalletConnector(e)).filter(e=>this.isWalletCompatibleWithCurrentChain(e));return e.length?(0,a.qy)`
      <wui-flex flexDirection="column" gap="xs">
        ${e.map(e=>(0,a.qy)`
            <wui-list-wallet
              imageSrc=${(0,r.J)(s.$.getWalletImage(e))}
              name=${e.name??"Unknown"}
              @click=${()=>this.onConnectWallet(e)}
              tagLabel="recent"
              tagVariant="shade"
              tabIdx=${(0,r.J)(this.tabIdx)}
              ?loading=${this.loading}
            >
            </wui-list-wallet>
          `)}
      </wui-flex>
    `:(this.style.cssText="display: none",null)}onConnectWallet(e){this.loading||G.a.selectWalletConnector(e)}hasWalletConnector(e){return this.connectors.some(t=>t.id===e.id||t.name===e.name)}isWalletCompatibleWithCurrentChain(e){let t=n.W.state.activeChain;return!t||!e.chains||e.chains.some(e=>t===e.split(":")[0])}};ig([(0,o.MZ)()],ib.prototype,"tabIdx",void 0),ig([(0,o.wk)()],ib.prototype,"connectors",void 0),ig([(0,o.wk)()],ib.prototype,"loading",void 0),ib=ig([(0,h.EM)("w3m-connect-recent-widget")],ib);var im=function(e,t,i,a){var o,r=arguments.length,n=r<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,i):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,a);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(n=(r<3?o(n):r>3?o(t,i,n):o(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let iv=class extends a.WF{constructor(){super(),this.unsubscribe=[],this.tabIdx=void 0,this.wallets=[],this.loading=!1,d.w.isTelegram()&&d.w.isIos()&&(this.loading=!ee.x.state.wcUri,this.unsubscribe.push(ee.x.subscribeKey("wcUri",e=>this.loading=!e)))}render(){let{connectors:e}=G.a.state,{customWallets:t,featuredWalletIds:i}=l.H.state,o=en.i.getRecentWallets(),n=e.find(e=>"walletConnect"===e.id),c=e.filter(e=>"INJECTED"===e.type||"ANNOUNCED"===e.type||"MULTI_CHAIN"===e.type).filter(e=>"Browser Wallet"!==e.name);if(!n)return null;if(i||t||!this.wallets.length)return this.style.cssText="display: none",null;let u=Math.max(0,2-(c.length+o.length)),d=tm.A.filterOutDuplicateWallets(this.wallets).slice(0,u);return d.length?(0,a.qy)`
      <wui-flex flexDirection="column" gap="xs">
        ${d.map(e=>(0,a.qy)`
            <wui-list-wallet
              imageSrc=${(0,r.J)(s.$.getWalletImage(e))}
              name=${e?.name??"Unknown"}
              @click=${()=>this.onConnectWallet(e)}
              tabIdx=${(0,r.J)(this.tabIdx)}
              ?loading=${this.loading}
            >
            </wui-list-wallet>
          `)}
      </wui-flex>
    `:(this.style.cssText="display: none",null)}onConnectWallet(e){if(this.loading)return;let t=G.a.getConnector(e.id,e.rdns);t?Q.I.push("ConnectingExternal",{connector:t}):Q.I.push("ConnectingWalletConnect",{wallet:e})}};im([(0,o.MZ)()],iv.prototype,"tabIdx",void 0),im([(0,o.MZ)()],iv.prototype,"wallets",void 0),im([(0,o.wk)()],iv.prototype,"loading",void 0),iv=im([(0,h.EM)("w3m-connect-recommended-widget")],iv);var iy=function(e,t,i,a){var o,r=arguments.length,n=r<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,i):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,a);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(n=(r<3?o(n):r>3?o(t,i,n):o(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let ix=class extends a.WF{constructor(){super(),this.unsubscribe=[],this.tabIdx=void 0,this.connectors=G.a.state.connectors,this.connectorImages=c.j.state.connectorImages,this.unsubscribe.push(G.a.subscribeKey("connectors",e=>this.connectors=e),c.j.subscribeKey("connectorImages",e=>this.connectorImages=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){if(d.w.isMobile())return this.style.cssText="display: none",null;let e=this.connectors.find(e=>"walletConnect"===e.id);if(!e)return this.style.cssText="display: none",null;let t=e.imageUrl||this.connectorImages[e?.imageId??""];return(0,a.qy)`
      <wui-list-wallet
        imageSrc=${(0,r.J)(t)}
        name=${e.name??"Unknown"}
        @click=${()=>this.onConnector(e)}
        tagLabel="qr code"
        tagVariant="main"
        tabIdx=${(0,r.J)(this.tabIdx)}
        data-testid="wallet-selector-walletconnect"
      >
      </wui-list-wallet>
    `}onConnector(e){G.a.setActiveConnector(e),Q.I.push("ConnectingWalletConnect")}};iy([(0,o.MZ)()],ix.prototype,"tabIdx",void 0),iy([(0,o.wk)()],ix.prototype,"connectors",void 0),iy([(0,o.wk)()],ix.prototype,"connectorImages",void 0),ix=iy([(0,h.EM)("w3m-connect-walletconnect-widget")],ix);let ik=(0,a.AH)`
  :host {
    margin-top: var(--wui-spacing-3xs);
  }
  wui-separator {
    margin: var(--wui-spacing-m) calc(var(--wui-spacing-m) * -1) var(--wui-spacing-xs)
      calc(var(--wui-spacing-m) * -1);
    width: calc(100% + var(--wui-spacing-s) * 2);
  }
`;var iC=function(e,t,i,a){var o,r=arguments.length,n=r<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,i):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,a);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(n=(r<3?o(n):r>3?o(t,i,n):o(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let i$=class extends a.WF{constructor(){super(),this.unsubscribe=[],this.tabIdx=void 0,this.connectors=G.a.state.connectors,this.recommended=tu.N.state.recommended,this.featured=tu.N.state.featured,this.unsubscribe.push(G.a.subscribeKey("connectors",e=>this.connectors=e),tu.N.subscribeKey("recommended",e=>this.recommended=e),tu.N.subscribeKey("featured",e=>this.featured=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return(0,a.qy)`
      <wui-flex flexDirection="column" gap="xs"> ${this.connectorListTemplate()} </wui-flex>
    `}connectorListTemplate(){let{custom:e,recent:t,announced:i,injected:o,multiChain:n,recommended:s,featured:l,external:c}=it.g.getConnectorsByType(this.connectors,this.recommended,this.featured);return it.g.getConnectorTypeOrder({custom:e,recent:t,announced:i,injected:o,multiChain:n,recommended:s,featured:l,external:c}).map(e=>{switch(e){case"injected":return(0,a.qy)`
            ${n.length?(0,a.qy)`<w3m-connect-multi-chain-widget
                  tabIdx=${(0,r.J)(this.tabIdx)}
                ></w3m-connect-multi-chain-widget>`:null}
            ${i.length?(0,a.qy)`<w3m-connect-announced-widget
                  tabIdx=${(0,r.J)(this.tabIdx)}
                ></w3m-connect-announced-widget>`:null}
            ${o.length?(0,a.qy)`<w3m-connect-injected-widget
                  .connectors=${o}
                  tabIdx=${(0,r.J)(this.tabIdx)}
                ></w3m-connect-injected-widget>`:null}
          `;case"walletConnect":return(0,a.qy)`<w3m-connect-walletconnect-widget
            tabIdx=${(0,r.J)(this.tabIdx)}
          ></w3m-connect-walletconnect-widget>`;case"recent":return(0,a.qy)`<w3m-connect-recent-widget
            tabIdx=${(0,r.J)(this.tabIdx)}
          ></w3m-connect-recent-widget>`;case"featured":return(0,a.qy)`<w3m-connect-featured-widget
            .wallets=${l}
            tabIdx=${(0,r.J)(this.tabIdx)}
          ></w3m-connect-featured-widget>`;case"custom":return(0,a.qy)`<w3m-connect-custom-widget
            tabIdx=${(0,r.J)(this.tabIdx)}
          ></w3m-connect-custom-widget>`;case"external":return(0,a.qy)`<w3m-connect-external-widget
            tabIdx=${(0,r.J)(this.tabIdx)}
          ></w3m-connect-external-widget>`;case"recommended":return(0,a.qy)`<w3m-connect-recommended-widget
            .wallets=${s}
            tabIdx=${(0,r.J)(this.tabIdx)}
          ></w3m-connect-recommended-widget>`;default:return console.warn(`Unknown connector type: ${e}`),null}})}};i$.styles=ik,iC([(0,o.MZ)()],i$.prototype,"tabIdx",void 0),iC([(0,o.wk)()],i$.prototype,"connectors",void 0),iC([(0,o.wk)()],i$.prototype,"recommended",void 0),iC([(0,o.wk)()],i$.prototype,"featured",void 0),i$=iC([(0,h.EM)("w3m-connector-list")],i$);var iI=function(e,t,i,a){var o,r=arguments.length,n=r<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,i):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,a);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(n=(r<3?o(n):r>3?o(t,i,n):o(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let iE=class extends a.WF{constructor(){super(...arguments),this.tabIdx=void 0}render(){return(0,a.qy)`
      <wui-flex flexDirection="column" gap="xs">
        <w3m-connector-list tabIdx=${(0,r.J)(this.tabIdx)}></w3m-connector-list>
        <w3m-all-wallets-widget tabIdx=${(0,r.J)(this.tabIdx)}></w3m-all-wallets-widget>
      </wui-flex>
    `}};iI([(0,o.MZ)()],iE.prototype,"tabIdx",void 0),iE=iI([(0,h.EM)("w3m-wallet-login-list")],iE);let iA=(0,a.AH)`
  :host {
    --connect-scroll--top-opacity: 0;
    --connect-scroll--bottom-opacity: 0;
    --connect-mask-image: none;
  }

  .connect {
    max-height: clamp(360px, 470px, 80vh);
    scrollbar-width: none;
    overflow-y: scroll;
    overflow-x: hidden;
    transition: opacity var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: opacity;
    mask-image: var(--connect-mask-image);
  }

  .guide {
    transition: opacity var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: opacity;
  }

  .connect::-webkit-scrollbar {
    display: none;
  }

  .all-wallets {
    flex-flow: column;
  }

  .connect.disabled,
  .guide.disabled {
    opacity: 0.3;
    pointer-events: none;
    user-select: none;
  }

  wui-separator {
    margin: var(--wui-spacing-s) calc(var(--wui-spacing-s) * -1);
    width: calc(100% + var(--wui-spacing-s) * 2);
  }
`;var iT=function(e,t,i,a){var o,r=arguments.length,n=r<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,i):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,a);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(n=(r<3?o(n):r>3?o(t,i,n):o(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let iS=class extends a.WF{constructor(){super(),this.unsubscribe=[],this.connectors=G.a.state.connectors,this.authConnector=this.connectors.find(e=>"AUTH"===e.type),this.features=l.H.state.features,this.enableWallets=l.H.state.enableWallets,this.noAdapters=n.W.state.noAdapters,this.walletGuide="get-started",this.checked=tD.o.state.isLegalCheckboxChecked,this.isEmailEnabled=this.features?.email&&!n.W.state.noAdapters,this.isSocialEnabled=this.features?.socials&&this.features.socials.length>0&&!n.W.state.noAdapters,this.isAuthEnabled=this.checkIfAuthEnabled(this.connectors),this.unsubscribe.push(G.a.subscribeKey("connectors",e=>{this.connectors=e,this.authConnector=this.connectors.find(e=>"AUTH"===e.type),this.isAuthEnabled=this.checkIfAuthEnabled(this.connectors)}),l.H.subscribeKey("features",e=>this.setEmailAndSocialEnableCheck(e,this.noAdapters)),l.H.subscribeKey("enableWallets",e=>this.enableWallets=e),n.W.subscribeKey("noAdapters",e=>this.setEmailAndSocialEnableCheck(this.features,e)),tD.o.subscribeKey("isLegalCheckboxChecked",e=>this.checked=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e()),this.resizeObserver?.disconnect();let e=this.shadowRoot?.querySelector(".connect");e?.removeEventListener("scroll",this.handleConnectListScroll.bind(this))}firstUpdated(){let e=this.shadowRoot?.querySelector(".connect");e&&(requestAnimationFrame(this.handleConnectListScroll.bind(this)),e?.addEventListener("scroll",this.handleConnectListScroll.bind(this)),this.resizeObserver=new ResizeObserver(()=>{this.handleConnectListScroll()}),this.resizeObserver?.observe(e),this.handleConnectListScroll())}render(){let{termsConditionsUrl:e,privacyPolicyUrl:t}=l.H.state,i=l.H.state.features?.legalCheckbox,o=!!(e||t)&&!!i&&"get-started"===this.walletGuide&&!this.checked,r=l.H.state.enableWalletGuide,n=this.enableWallets,s=this.isSocialEnabled||this.authConnector,c=o?-1:void 0;return(0,a.qy)`
      <wui-flex flexDirection="column">
        ${this.legalCheckboxTemplate()}
        <wui-flex
          data-testid="w3m-connect-scroll-view"
          flexDirection="column"
          class=${tq({connect:!0,disabled:o})}
        >
          <wui-flex
            class="connect-methods"
            flexDirection="column"
            gap="s"
            .padding=${s&&n&&r&&"get-started"===this.walletGuide?["3xs","s","0","s"]:["3xs","s","s","s"]}
          >
            ${this.renderConnectMethod(c)}
          </wui-flex>
        </wui-flex>
        ${this.guideTemplate(o)}
        <w3m-legal-footer></w3m-legal-footer>
      </wui-flex>
    `}setEmailAndSocialEnableCheck(e,t){this.isEmailEnabled=e?.email&&!t,this.isSocialEnabled=e?.socials&&e.socials.length>0&&!t,this.features=e,this.noAdapters=t}checkIfAuthEnabled(e){let t=e.filter(e=>e.type===t_.o.CONNECTOR_TYPE_AUTH).map(e=>e.chain);return K.o.AUTH_CONNECTOR_SUPPORTED_CHAINS.some(e=>t.includes(e))}renderConnectMethod(e){let t=tm.A.getConnectOrderMethod(this.features,this.connectors);return(0,a.qy)`${t.map((t,i)=>{switch(t){case"email":return(0,a.qy)`${this.emailTemplate(e)} ${this.separatorTemplate(i,"email")}`;case"social":return(0,a.qy)`${this.socialListTemplate(e)}
          ${this.separatorTemplate(i,"social")}`;case"wallet":return(0,a.qy)`${this.walletListTemplate(e)}
          ${this.separatorTemplate(i,"wallet")}`;default:return null}})}`}checkMethodEnabled(e){switch(e){case"wallet":return this.enableWallets;case"social":return this.isSocialEnabled&&this.isAuthEnabled;case"email":return this.isEmailEnabled&&this.isAuthEnabled;default:return null}}checkIsThereNextMethod(e){let t=tm.A.getConnectOrderMethod(this.features,this.connectors)[e+1];return t?this.checkMethodEnabled(t)?t:this.checkIsThereNextMethod(e+1):void 0}separatorTemplate(e,t){let i=this.checkIsThereNextMethod(e),o="explore"===this.walletGuide;switch(t){case"wallet":return this.enableWallets&&i&&!o?(0,a.qy)`<wui-separator data-testid="wui-separator" text="or"></wui-separator>`:null;case"email":return this.isAuthEnabled&&this.isEmailEnabled&&"social"!==i&&i?(0,a.qy)`<wui-separator
              data-testid="w3m-email-login-or-separator"
              text="or"
            ></wui-separator>`:null;case"social":return this.isAuthEnabled&&this.isSocialEnabled&&"email"!==i&&i?(0,a.qy)`<wui-separator data-testid="wui-separator" text="or"></wui-separator>`:null;default:return null}}emailTemplate(e){return this.isEmailEnabled&&this.isAuthEnabled?(0,a.qy)`<w3m-email-login-widget
      walletGuide=${this.walletGuide}
      tabIdx=${(0,r.J)(e)}
    ></w3m-email-login-widget>`:null}socialListTemplate(e){return this.isSocialEnabled&&this.isAuthEnabled?(0,a.qy)`<w3m-social-login-widget
      walletGuide=${this.walletGuide}
      tabIdx=${(0,r.J)(e)}
    ></w3m-social-login-widget>`:null}walletListTemplate(e){let t=this.enableWallets,i=this.features?.emailShowWallets===!1,o=this.features?.collapseWallets;return t?((d.w.isTelegram()||d.w.isSafari())&&d.w.isIos()&&ee.x.connectWalletConnect().catch(e=>({})),"explore"===this.walletGuide)?null:this.isAuthEnabled&&(this.isEmailEnabled||this.isSocialEnabled)&&(i||o)?(0,a.qy)`<wui-list-button
        data-testid="w3m-collapse-wallets-button"
        tabIdx=${(0,r.J)(e)}
        @click=${this.onContinueWalletClick.bind(this)}
        text="Continue with a wallet"
      ></wui-list-button>`:(0,a.qy)`<w3m-wallet-login-list tabIdx=${(0,r.J)(e)}></w3m-wallet-login-list>`:null}guideTemplate(e=!1){return l.H.state.enableWalletGuide&&(this.authConnector||this.isSocialEnabled)?(0,a.qy)`
      ${"explore"!==this.walletGuide||n.W.state.noAdapters?null:(0,a.qy)`<wui-separator data-testid="wui-separator" id="explore" text="or"></wui-separator>`}
      <wui-flex flexDirection="column" .padding=${["l","0","0","0"]} class=${tq({guide:!0,disabled:e})}>
        <w3m-wallet-guide
          tabIdx=${(0,r.J)(e?-1:void 0)}
          walletGuide=${this.walletGuide}
        ></w3m-wallet-guide>
      </wui-flex>
    `:null}legalCheckboxTemplate(){return"explore"===this.walletGuide?null:(0,a.qy)`<w3m-legal-checkbox data-testid="w3m-legal-checkbox"></w3m-legal-checkbox>`}handleConnectListScroll(){let e=this.shadowRoot?.querySelector(".connect");e&&(e.scrollHeight>470?(e.style.setProperty("--connect-mask-image",`linear-gradient(
          to bottom,
          rgba(0, 0, 0, calc(1 - var(--connect-scroll--top-opacity))) 0px,
          rgba(200, 200, 200, calc(1 - var(--connect-scroll--top-opacity))) 1px,
          black 40px,
          black calc(100% - 40px),
          rgba(155, 155, 155, calc(1 - var(--connect-scroll--bottom-opacity))) calc(100% - 1px),
          rgba(0, 0, 0, calc(1 - var(--connect-scroll--bottom-opacity))) 100%
        )`),e.style.setProperty("--connect-scroll--top-opacity",h.z8.interpolate([0,50],[0,1],e.scrollTop).toString()),e.style.setProperty("--connect-scroll--bottom-opacity",h.z8.interpolate([0,50],[0,1],e.scrollHeight-e.scrollTop-e.offsetHeight).toString())):(e.style.setProperty("--connect-mask-image","none"),e.style.setProperty("--connect-scroll--top-opacity","0"),e.style.setProperty("--connect-scroll--bottom-opacity","0")))}onContinueWalletClick(){Q.I.push("ConnectWallets")}};iS.styles=iA,iT([(0,tj.w)()],iS.prototype,"connectors",void 0),iT([(0,tj.w)()],iS.prototype,"authConnector",void 0),iT([(0,tj.w)()],iS.prototype,"features",void 0),iT([(0,tj.w)()],iS.prototype,"enableWallets",void 0),iT([(0,tj.w)()],iS.prototype,"noAdapters",void 0),iT([(0,o.MZ)()],iS.prototype,"walletGuide",void 0),iT([(0,tj.w)()],iS.prototype,"checked",void 0),iT([(0,tj.w)()],iS.prototype,"isEmailEnabled",void 0),iT([(0,tj.w)()],iS.prototype,"isSocialEnabled",void 0),iT([(0,tj.w)()],iS.prototype,"isAuthEnabled",void 0),iS=iT([(0,h.EM)("w3m-connect-view")],iS);var iR=i(39519);i(39515),i(11778);let iW=(0,w.AH)`
  wui-flex {
    width: 100%;
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
  }
`;var iO=function(e,t,i,a){var o,r=arguments.length,n=r<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,i):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,a);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(n=(r<3?o(n):r>3?o(t,i,n):o(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let iN=class extends w.WF{constructor(){super(...arguments),this.disabled=!1,this.label="",this.buttonLabel=""}render(){return(0,w.qy)`
      <wui-flex
        justifyContent="space-between"
        alignItems="center"
        .padding=${["1xs","2l","1xs","2l"]}
      >
        <wui-text variant="paragraph-500" color="fg-200">${this.label}</wui-text>
        <wui-chip-button size="sm" variant="shade" text=${this.buttonLabel} icon="chevronRight">
        </wui-chip-button>
      </wui-flex>
    `}};iN.styles=[b.W5,b.fD,iW],iO([(0,g.MZ)({type:Boolean})],iN.prototype,"disabled",void 0),iO([(0,g.MZ)()],iN.prototype,"label",void 0),iO([(0,g.MZ)()],iN.prototype,"buttonLabel",void 0),iN=iO([(0,v.E)("wui-cta-button")],iN);let ij=(0,a.AH)`
  :host {
    display: block;
    padding: 0 var(--wui-spacing-xl) var(--wui-spacing-xl);
  }
`;var iM=function(e,t,i,a){var o,r=arguments.length,n=r<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,i):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,a);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(n=(r<3?o(n):r>3?o(t,i,n):o(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let iP=class extends a.WF{constructor(){super(...arguments),this.wallet=void 0}render(){if(!this.wallet)return this.style.display="none",null;let{name:e,app_store:t,play_store:i,chrome_store:o,homepage:r}=this.wallet,n=d.w.isMobile(),s=d.w.isIos(),l=d.w.isAndroid(),c=[t,i,r,o].filter(Boolean).length>1,u=h.Zv.getTruncateString({string:e,charsStart:12,charsEnd:0,truncate:"end"});return c&&!n?(0,a.qy)`
        <wui-cta-button
          label=${`Don't have ${u}?`}
          buttonLabel="Get"
          @click=${()=>Q.I.push("Downloads",{wallet:this.wallet})}
        ></wui-cta-button>
      `:!c&&r?(0,a.qy)`
        <wui-cta-button
          label=${`Don't have ${u}?`}
          buttonLabel="Get"
          @click=${this.onHomePage.bind(this)}
        ></wui-cta-button>
      `:t&&s?(0,a.qy)`
        <wui-cta-button
          label=${`Don't have ${u}?`}
          buttonLabel="Get"
          @click=${this.onAppStore.bind(this)}
        ></wui-cta-button>
      `:i&&l?(0,a.qy)`
        <wui-cta-button
          label=${`Don't have ${u}?`}
          buttonLabel="Get"
          @click=${this.onPlayStore.bind(this)}
        ></wui-cta-button>
      `:(this.style.display="none",null)}onAppStore(){this.wallet?.app_store&&d.w.openHref(this.wallet.app_store,"_blank")}onPlayStore(){this.wallet?.play_store&&d.w.openHref(this.wallet.play_store,"_blank")}onHomePage(){this.wallet?.homepage&&d.w.openHref(this.wallet.homepage,"_blank")}};iP.styles=[ij],iM([(0,o.MZ)({type:Object})],iP.prototype,"wallet",void 0),iP=iM([(0,h.EM)("w3m-mobile-download-links")],iP);let iq=(0,a.AH)`
  @keyframes shake {
    0% {
      transform: translateX(0);
    }
    25% {
      transform: translateX(3px);
    }
    50% {
      transform: translateX(-3px);
    }
    75% {
      transform: translateX(3px);
    }
    100% {
      transform: translateX(0);
    }
  }

  wui-flex:first-child:not(:only-child) {
    position: relative;
  }

  wui-loading-thumbnail {
    position: absolute;
  }

  wui-icon-box {
    position: absolute;
    right: calc(var(--wui-spacing-3xs) * -1);
    bottom: calc(var(--wui-spacing-3xs) * -1);
    opacity: 0;
    transform: scale(0.5);
    transition-property: opacity, transform;
    transition-duration: var(--wui-duration-lg);
    transition-timing-function: var(--wui-ease-out-power-2);
    will-change: opacity, transform;
  }

  wui-text[align='center'] {
    width: 100%;
    padding: 0px var(--wui-spacing-l);
  }

  [data-error='true'] wui-icon-box {
    opacity: 1;
    transform: scale(1);
  }

  [data-error='true'] > wui-flex:first-child {
    animation: shake 250ms cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
  }

  [data-retry='false'] wui-link {
    display: none;
  }

  [data-retry='true'] wui-link {
    display: block;
    opacity: 1;
  }
`;var iD=function(e,t,i,a){var o,r=arguments.length,n=r<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,i):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,a);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(n=(r<3?o(n):r>3?o(t,i,n):o(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};class iU extends a.WF{constructor(){super(),this.wallet=Q.I.state.data?.wallet,this.connector=Q.I.state.data?.connector,this.timeout=void 0,this.secondaryBtnIcon="refresh",this.onConnect=void 0,this.onRender=void 0,this.onAutoConnect=void 0,this.isWalletConnect=!0,this.unsubscribe=[],this.imageSrc=s.$.getWalletImage(this.wallet)??s.$.getConnectorImage(this.connector),this.name=this.wallet?.name??this.connector?.name??"Wallet",this.isRetrying=!1,this.uri=ee.x.state.wcUri,this.error=ee.x.state.wcError,this.ready=!1,this.showRetry=!1,this.secondaryBtnLabel="Try again",this.secondaryLabel="Accept connection request in the wallet",this.buffering=!1,this.isLoading=!1,this.isMobile=!1,this.onRetry=void 0,this.unsubscribe.push(ee.x.subscribeKey("wcUri",e=>{this.uri=e,this.isRetrying&&this.onRetry&&(this.isRetrying=!1,this.onConnect?.())}),ee.x.subscribeKey("wcError",e=>this.error=e),ee.x.subscribeKey("buffering",e=>this.buffering=e)),(d.w.isTelegram()||d.w.isSafari())&&d.w.isIos()&&ee.x.state.wcUri&&this.onConnect?.()}firstUpdated(){this.onAutoConnect?.(),this.showRetry=!this.onAutoConnect}disconnectedCallback(){this.unsubscribe.forEach(e=>e()),clearTimeout(this.timeout)}render(){this.onRender?.(),this.onShowRetry();let e=this.error?"Connection can be declined if a previous request is still active":this.secondaryLabel,t=`Continue in ${this.name}`;return this.buffering&&(t="Connecting..."),this.error&&(t="Connection declined"),(0,a.qy)`
      <wui-flex
        data-error=${(0,r.J)(this.error)}
        data-retry=${this.showRetry}
        flexDirection="column"
        alignItems="center"
        .padding=${["3xl","xl","xl","xl"]}
        gap="xl"
      >
        <wui-flex justifyContent="center" alignItems="center">
          <wui-wallet-image size="lg" imageSrc=${(0,r.J)(this.imageSrc)}></wui-wallet-image>

          ${this.error?null:this.loaderTemplate()}

          <wui-icon-box
            backgroundColor="error-100"
            background="opaque"
            iconColor="error-100"
            icon="close"
            size="sm"
            border
            borderColor="wui-color-bg-125"
          ></wui-icon-box>
        </wui-flex>

        <wui-flex flexDirection="column" alignItems="center" gap="xs">
          <wui-text variant="paragraph-500" color=${this.error?"error-100":"fg-100"}>
            ${t}
          </wui-text>
          <wui-text align="center" variant="small-500" color="fg-200">${e}</wui-text>
        </wui-flex>

        ${this.secondaryBtnLabel?(0,a.qy)`
              <wui-button
                variant="accent"
                size="md"
                ?disabled=${this.isRetrying||!this.error&&this.buffering||this.isLoading}
                @click=${this.onTryAgain.bind(this)}
                data-testid="w3m-connecting-widget-secondary-button"
              >
                <wui-icon color="inherit" slot="iconLeft" name=${this.secondaryBtnIcon}></wui-icon>
                ${this.secondaryBtnLabel}
              </wui-button>
            `:null}
      </wui-flex>

      ${this.isWalletConnect?(0,a.qy)`
            <wui-flex .padding=${["0","xl","xl","xl"]} justifyContent="center">
              <wui-link @click=${this.onCopyUri} color="fg-200" data-testid="wui-link-copy">
                <wui-icon size="xs" color="fg-200" slot="iconLeft" name="copy"></wui-icon>
                Copy link
              </wui-link>
            </wui-flex>
          `:null}

      <w3m-mobile-download-links .wallet=${this.wallet}></w3m-mobile-download-links>
    `}onShowRetry(){if(this.error&&!this.showRetry){this.showRetry=!0;let e=this.shadowRoot?.querySelector("wui-button");e?.animate([{opacity:0},{opacity:1}],{fill:"forwards",easing:"ease"})}}onTryAgain(){this.buffering||(ee.x.setWcError(!1),this.onRetry?(this.isRetrying=!0,this.onRetry?.()):this.onConnect?.())}loaderTemplate(){let e=iR.W.state.themeVariables["--w3m-border-radius-master"],t=e?parseInt(e.replace("px",""),10):4;return(0,a.qy)`<wui-loading-thumbnail radius=${9*t}></wui-loading-thumbnail>`}onCopyUri(){try{this.uri&&(d.w.copyToClopboard(this.uri),X.P.showSuccess("Link copied"))}catch{X.P.showError("Failed to copy")}}}iU.styles=iq,iD([(0,o.wk)()],iU.prototype,"isRetrying",void 0),iD([(0,o.wk)()],iU.prototype,"uri",void 0),iD([(0,o.wk)()],iU.prototype,"error",void 0),iD([(0,o.wk)()],iU.prototype,"ready",void 0),iD([(0,o.wk)()],iU.prototype,"showRetry",void 0),iD([(0,o.wk)()],iU.prototype,"secondaryBtnLabel",void 0),iD([(0,o.wk)()],iU.prototype,"secondaryLabel",void 0),iD([(0,o.wk)()],iU.prototype,"buffering",void 0),iD([(0,o.wk)()],iU.prototype,"isLoading",void 0),iD([(0,o.MZ)({type:Boolean})],iU.prototype,"isMobile",void 0),iD([(0,o.MZ)()],iU.prototype,"onRetry",void 0);let iZ=class extends iU{constructor(){if(super(),this.externalViewUnsubscribe=[],!this.connector)throw Error("w3m-connecting-view: No connector provided");U.E.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.connector.name??"Unknown",platform:"browser"}}),this.onConnect=this.onConnectProxy.bind(this),this.onAutoConnect=this.onConnectProxy.bind(this),this.isWalletConnect=!1,this.externalViewUnsubscribe.push(n.W.subscribeKey("activeCaipAddress",e=>{e&&p.W.close()}))}disconnectedCallback(){this.externalViewUnsubscribe.forEach(e=>e())}async onConnectProxy(){try{this.error=!1,this.connector&&(this.connector.id!==K.o.CONNECTOR_ID.COINBASE_SDK||!this.error)&&(await ee.x.connectExternal(this.connector,this.connector.chain),U.E.sendEvent({type:"track",event:"CONNECT_SUCCESS",properties:{method:"browser",name:this.connector.name||"Unknown"}}))}catch(e){U.E.sendEvent({type:"track",event:"CONNECT_ERROR",properties:{message:e?.message??"Unknown"}}),this.error=!0}}};iZ=function(e,t,i,a){var o,r=arguments.length,n=r<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,i):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,a);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(n=(r<3?o(n):r>3?o(t,i,n):o(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n}([(0,h.EM)("w3m-connecting-external-view")],iZ);let iz=(0,a.AH)`
  wui-flex,
  wui-list-wallet {
    width: 100%;
  }
`;var i_=function(e,t,i,a){var o,r=arguments.length,n=r<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,i):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,a);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(n=(r<3?o(n):r>3?o(t,i,n):o(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let iL=class extends a.WF{constructor(){super(),this.unsubscribe=[],this.activeConnector=G.a.state.activeConnector,this.unsubscribe.push(G.a.subscribeKey("activeConnector",e=>this.activeConnector=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return(0,a.qy)`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${["m","xl","xl","xl"]}
        gap="xl"
      >
        <wui-flex justifyContent="center" alignItems="center">
          <wui-wallet-image
            size="lg"
            imageSrc=${(0,r.J)(s.$.getConnectorImage(this.activeConnector))}
          ></wui-wallet-image>
        </wui-flex>
        <wui-flex
          flexDirection="column"
          alignItems="center"
          gap="xs"
          .padding=${["0","s","0","s"]}
        >
          <wui-text variant="paragraph-500" color="fg-100">
            Select Chain for ${this.activeConnector?.name}
          </wui-text>
          <wui-text align="center" variant="small-500" color="fg-200"
            >Select which chain to connect to your multi chain wallet</wui-text
          >
        </wui-flex>
        <wui-flex
          flexGrow="1"
          flexDirection="column"
          alignItems="center"
          gap="xs"
          .padding=${["xs","0","xs","0"]}
        >
          ${this.networksTemplate()}
        </wui-flex>
      </wui-flex>
    `}networksTemplate(){return this.activeConnector?.connectors?.map(e=>e.name?a.qy`
            <wui-list-wallet
              imageSrc=${r.J(s.$.getChainImage(e.chain))}
              name=${K.o.CHAIN_NAME_MAP[e.chain]}
              @click=${()=>this.onConnector(e)}
              data-testid="wui-list-chain-${e.chain}"
            ></wui-list-wallet>
          `:null)}onConnector(e){let t=this.activeConnector?.connectors?.find(t=>t.chain===e.chain);if(!t){X.P.showError("Failed to find connector");return}"walletConnect"===t.id?d.w.isMobile()?Q.I.push("AllWallets"):Q.I.push("ConnectingWalletConnect"):Q.I.push("ConnectingExternal",{connector:t})}};iL.styles=iz,i_([(0,o.wk)()],iL.prototype,"activeConnector",void 0),iL=i_([(0,h.EM)("w3m-connecting-multi-chain-view")],iL);var iH=function(e,t,i,a){var o,r=arguments.length,n=r<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,i):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,a);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(n=(r<3?o(n):r>3?o(t,i,n):o(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let iB=class extends a.WF{constructor(){super(),this.platformTabs=[],this.unsubscribe=[],this.platforms=[],this.onSelectPlatfrom=void 0,this.buffering=!1,this.unsubscribe.push(ee.x.subscribeKey("buffering",e=>this.buffering=e))}disconnectCallback(){this.unsubscribe.forEach(e=>e())}render(){let e=this.generateTabs();return(0,a.qy)`
      <wui-flex justifyContent="center" .padding=${["0","0","l","0"]}>
        <wui-tabs
          ?disabled=${this.buffering}
          .tabs=${e}
          .onTabChange=${this.onTabChange.bind(this)}
        ></wui-tabs>
      </wui-flex>
    `}generateTabs(){let e=this.platforms.map(e=>"browser"===e?{label:"Browser",icon:"extension",platform:"browser"}:"mobile"===e?{label:"Mobile",icon:"mobile",platform:"mobile"}:"qrcode"===e?{label:"Mobile",icon:"mobile",platform:"qrcode"}:"web"===e?{label:"Webapp",icon:"browser",platform:"web"}:"desktop"===e?{label:"Desktop",icon:"desktop",platform:"desktop"}:{label:"Browser",icon:"extension",platform:"unsupported"});return this.platformTabs=e.map(({platform:e})=>e),e}onTabChange(e){let t=this.platformTabs[e];t&&this.onSelectPlatfrom?.(t)}};iH([(0,o.MZ)({type:Array})],iB.prototype,"platforms",void 0),iH([(0,o.MZ)()],iB.prototype,"onSelectPlatfrom",void 0),iH([(0,o.wk)()],iB.prototype,"buffering",void 0),iB=iH([(0,h.EM)("w3m-connecting-header")],iB);let iF=class extends iU{constructor(){if(super(),!this.wallet)throw Error("w3m-connecting-wc-browser: No wallet provided");this.onConnect=this.onConnectProxy.bind(this),this.onAutoConnect=this.onConnectProxy.bind(this),U.E.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"browser"}})}async onConnectProxy(){try{this.error=!1;let{connectors:e}=G.a.state,t=e.find(e=>"ANNOUNCED"===e.type&&e.info?.rdns===this.wallet?.rdns||"INJECTED"===e.type||e.name===this.wallet?.name);if(t)await ee.x.connectExternal(t,t.chain);else throw Error("w3m-connecting-wc-browser: No connector found");p.W.close(),U.E.sendEvent({type:"track",event:"CONNECT_SUCCESS",properties:{method:"browser",name:this.wallet?.name||"Unknown"}})}catch(e){U.E.sendEvent({type:"track",event:"CONNECT_ERROR",properties:{message:e?.message??"Unknown"}}),this.error=!0}}};iF=function(e,t,i,a){var o,r=arguments.length,n=r<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,i):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,a);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(n=(r<3?o(n):r>3?o(t,i,n):o(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n}([(0,h.EM)("w3m-connecting-wc-browser")],iF);let iV=class extends iU{constructor(){if(super(),!this.wallet)throw Error("w3m-connecting-wc-desktop: No wallet provided");this.onConnect=this.onConnectProxy.bind(this),this.onRender=this.onRenderProxy.bind(this),U.E.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"desktop"}})}onRenderProxy(){!this.ready&&this.uri&&(this.ready=!0,this.onConnect?.())}onConnectProxy(){if(this.wallet?.desktop_link&&this.uri)try{this.error=!1;let{desktop_link:e,name:t}=this.wallet,{redirect:i,href:a}=d.w.formatNativeUrl(e,this.uri);ee.x.setWcLinking({name:t,href:a}),ee.x.setRecentWallet(this.wallet),d.w.openHref(i,"_blank")}catch{this.error=!0}}};iV=function(e,t,i,a){var o,r=arguments.length,n=r<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,i):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,a);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(n=(r<3?o(n):r>3?o(t,i,n):o(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n}([(0,h.EM)("w3m-connecting-wc-desktop")],iV);let iJ=class extends iU{constructor(){if(super(),this.btnLabelTimeout=void 0,this.labelTimeout=void 0,this.onRender=()=>{!this.ready&&this.uri&&(this.ready=!0,this.onConnect?.())},this.onConnect=()=>{if(this.wallet?.mobile_link&&this.uri)try{this.error=!1;let{mobile_link:e,name:t}=this.wallet,{redirect:i,href:a}=d.w.formatNativeUrl(e,this.uri);ee.x.setWcLinking({name:t,href:a}),ee.x.setRecentWallet(this.wallet);let o=d.w.isIframe()?"_top":"_self";d.w.openHref(i,o),clearTimeout(this.labelTimeout),this.secondaryLabel=Y.oU.CONNECT_LABELS.MOBILE}catch(e){U.E.sendEvent({type:"track",event:"CONNECT_PROXY_ERROR",properties:{message:e instanceof Error?e.message:"Error parsing the deeplink",uri:this.uri,mobile_link:this.wallet.mobile_link,name:this.wallet.name}}),this.error=!0}},!this.wallet)throw Error("w3m-connecting-wc-mobile: No wallet provided");this.initializeStateAndTimers(),document.addEventListener("visibilitychange",this.onBuffering.bind(this)),U.E.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"mobile"}})}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("visibilitychange",this.onBuffering.bind(this)),clearTimeout(this.btnLabelTimeout),clearTimeout(this.labelTimeout)}initializeStateAndTimers(){this.secondaryBtnLabel=void 0,this.secondaryLabel=Y.oU.CONNECT_LABELS.MOBILE,this.btnLabelTimeout=setTimeout(()=>{this.secondaryBtnLabel="Try again",this.secondaryLabel=Y.oU.CONNECT_LABELS.MOBILE},Y.oU.FIVE_SEC_MS),this.labelTimeout=setTimeout(()=>{this.secondaryLabel="Hold tight... it's taking longer than expected"},Y.oU.THREE_SEC_MS)}onBuffering(){let e=d.w.isIos();document?.visibilityState==="visible"&&!this.error&&e&&(ee.x.setBuffering(!0),setTimeout(()=>{ee.x.setBuffering(!1)},5e3))}onTryAgain(){this.buffering||(clearTimeout(this.btnLabelTimeout),clearTimeout(this.labelTimeout),this.initializeStateAndTimers(),ee.x.setWcError(!1),this.onConnect())}};iJ=function(e,t,i,a){var o,r=arguments.length,n=r<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,i):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,a);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(n=(r<3?o(n):r>3?o(t,i,n):o(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n}([(0,h.EM)("w3m-connecting-wc-mobile")],iJ),i(68146),i(19291);let iK=(0,a.AH)`
  @keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  wui-shimmer {
    width: 100%;
    aspect-ratio: 1 / 1;
    border-radius: clamp(0px, var(--wui-border-radius-l), 40px) !important;
  }

  wui-qr-code {
    opacity: 0;
    animation-duration: 200ms;
    animation-timing-function: ease;
    animation-name: fadein;
    animation-fill-mode: forwards;
  }
`,iG=class extends iU{constructor(){super(),this.forceUpdate=()=>{this.requestUpdate()},window.addEventListener("resize",this.forceUpdate),U.E.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet?.name??"WalletConnect",platform:"qrcode"}})}disconnectedCallback(){super.disconnectedCallback(),this.unsubscribe?.forEach(e=>e()),window.removeEventListener("resize",this.forceUpdate)}render(){return this.onRenderProxy(),(0,a.qy)`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${["0","xl","xl","xl"]}
        gap="xl"
      >
        <wui-shimmer borderRadius="l" width="100%"> ${this.qrCodeTemplate()} </wui-shimmer>

        <wui-text variant="paragraph-500" color="fg-100">
          Scan this QR Code with your phone
        </wui-text>
        ${this.copyTemplate()}
      </wui-flex>
      <w3m-mobile-download-links .wallet=${this.wallet}></w3m-mobile-download-links>
    `}onRenderProxy(){!this.ready&&this.uri&&(this.timeout=setTimeout(()=>{this.ready=!0},200))}qrCodeTemplate(){if(!this.uri||!this.ready)return null;let e=this.getBoundingClientRect().width-40,t=this.wallet?this.wallet.name:void 0;return ee.x.setWcLinking(void 0),ee.x.setRecentWallet(this.wallet),(0,a.qy)` <wui-qr-code
      size=${e}
      theme=${iR.W.state.themeMode}
      uri=${this.uri}
      imageSrc=${(0,r.J)(s.$.getWalletImage(this.wallet))}
      color=${(0,r.J)(iR.W.state.themeVariables["--w3m-qr-color"])}
      alt=${(0,r.J)(t)}
      data-testid="wui-qr-code"
    ></wui-qr-code>`}copyTemplate(){let e=!this.uri||!this.ready;return(0,a.qy)`<wui-link
      .disabled=${e}
      @click=${this.onCopyUri}
      color="fg-200"
      data-testid="copy-wc2-uri"
    >
      <wui-icon size="xs" color="fg-200" slot="iconLeft" name="copy"></wui-icon>
      Copy link
    </wui-link>`}};iG.styles=iK,iG=function(e,t,i,a){var o,r=arguments.length,n=r<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,i):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,a);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(n=(r<3?o(n):r>3?o(t,i,n):o(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n}([(0,h.EM)("w3m-connecting-wc-qrcode")],iG);let iY=class extends a.WF{constructor(){if(super(),this.wallet=Q.I.state.data?.wallet,!this.wallet)throw Error("w3m-connecting-wc-unsupported: No wallet provided");U.E.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"browser"}})}render(){return(0,a.qy)`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${["3xl","xl","xl","xl"]}
        gap="xl"
      >
        <wui-wallet-image
          size="lg"
          imageSrc=${(0,r.J)(s.$.getWalletImage(this.wallet))}
        ></wui-wallet-image>

        <wui-text variant="paragraph-500" color="fg-100">Not Detected</wui-text>
      </wui-flex>

      <w3m-mobile-download-links .wallet=${this.wallet}></w3m-mobile-download-links>
    `}};iY=function(e,t,i,a){var o,r=arguments.length,n=r<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,i):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,a);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(n=(r<3?o(n):r>3?o(t,i,n):o(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n}([(0,h.EM)("w3m-connecting-wc-unsupported")],iY);var iX=function(e,t,i,a){var o,r=arguments.length,n=r<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,i):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,a);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(n=(r<3?o(n):r>3?o(t,i,n):o(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let iQ=class extends iU{constructor(){if(super(),this.isLoading=!0,!this.wallet)throw Error("w3m-connecting-wc-web: No wallet provided");this.onConnect=this.onConnectProxy.bind(this),this.secondaryBtnLabel="Open",this.secondaryLabel="Open and continue in a new browser tab",this.secondaryBtnIcon="externalLink",this.updateLoadingState(),this.unsubscribe.push(ee.x.subscribeKey("wcUri",()=>{this.updateLoadingState()})),U.E.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"web"}})}updateLoadingState(){this.isLoading=!this.uri}onConnectProxy(){if(this.wallet?.webapp_link&&this.uri)try{this.error=!1;let{webapp_link:e,name:t}=this.wallet,{redirect:i,href:a}=d.w.formatUniversalUrl(e,this.uri);ee.x.setWcLinking({name:t,href:a}),ee.x.setRecentWallet(this.wallet),d.w.openHref(i,"_blank")}catch{this.error=!0}}};iX([(0,o.wk)()],iQ.prototype,"isLoading",void 0),iQ=iX([(0,h.EM)("w3m-connecting-wc-web")],iQ);var i0=function(e,t,i,a){var o,r=arguments.length,n=r<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,i):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,a);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(n=(r<3?o(n):r>3?o(t,i,n):o(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let i3=class extends a.WF{constructor(){super(),this.wallet=Q.I.state.data?.wallet,this.platform=void 0,this.platforms=[],this.isSiwxEnabled=!!l.H.state.siwx,this.determinePlatforms(),this.initializeConnection()}render(){return(0,a.qy)`
      ${this.headerTemplate()}
      <div>${this.platformTemplate()}</div>
      <wui-ux-by-reown></wui-ux-by-reown>
    `}async initializeConnection(e=!1){if("browser"!==this.platform&&(!l.H.state.manualWCControl||e))try{let{wcPairingExpiry:t,status:i}=ee.x.state;(e||l.H.state.enableEmbedded||d.w.isPairingExpired(t)||"connecting"===i)&&(await ee.x.connectWalletConnect(),this.isSiwxEnabled||p.W.close())}catch(e){U.E.sendEvent({type:"track",event:"CONNECT_ERROR",properties:{message:e?.message??"Unknown"}}),ee.x.setWcError(!0),X.P.showError(e.message??"Connection error"),ee.x.resetWcConnection(),Q.I.goBack()}}determinePlatforms(){if(!this.wallet){this.platforms.push("qrcode"),this.platform="qrcode";return}if(this.platform)return;let{mobile_link:e,desktop_link:t,webapp_link:i,injected:a,rdns:o}=this.wallet,r=a?.map(({injected_id:e})=>e).filter(Boolean),s=[...o?[o]:r??[]],c=!l.H.state.isUniversalProvider&&s.length,u=ee.x.checkInstalled(s),p=c&&u,h=t&&!d.w.isMobile();p&&!n.W.state.noAdapters&&this.platforms.push("browser"),e&&this.platforms.push(d.w.isMobile()?"mobile":"qrcode"),i&&this.platforms.push("web"),h&&this.platforms.push("desktop"),p||!c||n.W.state.noAdapters||this.platforms.push("unsupported"),this.platform=this.platforms[0]}platformTemplate(){switch(this.platform){case"browser":return(0,a.qy)`<w3m-connecting-wc-browser></w3m-connecting-wc-browser>`;case"web":return(0,a.qy)`<w3m-connecting-wc-web></w3m-connecting-wc-web>`;case"desktop":return(0,a.qy)`
          <w3m-connecting-wc-desktop .onRetry=${()=>this.initializeConnection(!0)}>
          </w3m-connecting-wc-desktop>
        `;case"mobile":return(0,a.qy)`
          <w3m-connecting-wc-mobile isMobile .onRetry=${()=>this.initializeConnection(!0)}>
          </w3m-connecting-wc-mobile>
        `;case"qrcode":return(0,a.qy)`<w3m-connecting-wc-qrcode></w3m-connecting-wc-qrcode>`;default:return(0,a.qy)`<w3m-connecting-wc-unsupported></w3m-connecting-wc-unsupported>`}}headerTemplate(){return this.platforms.length>1?(0,a.qy)`
      <w3m-connecting-header
        .platforms=${this.platforms}
        .onSelectPlatfrom=${this.onSelectPlatform.bind(this)}
      >
      </w3m-connecting-header>
    `:null}async onSelectPlatform(e){let t=this.shadowRoot?.querySelector("div");t&&(await t.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.platform=e,t.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"}))}};i0([(0,o.wk)()],i3.prototype,"platform",void 0),i0([(0,o.wk)()],i3.prototype,"platforms",void 0),i0([(0,o.wk)()],i3.prototype,"isSiwxEnabled",void 0),i3=i0([(0,h.EM)("w3m-connecting-wc-view")],i3);var i1=function(e,t,i,a){var o,r=arguments.length,n=r<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,i):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,a);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(n=(r<3?o(n):r>3?o(t,i,n):o(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let i5=class extends a.WF{constructor(){super(...arguments),this.isMobile=d.w.isMobile()}render(){if(this.isMobile){let{featured:e,recommended:t}=tu.N.state,{customWallets:i}=l.H.state,o=en.i.getRecentWallets(),r=e.length||t.length||i?.length||o.length;return(0,a.qy)`<wui-flex
        flexDirection="column"
        gap="xs"
        .margin=${["3xs","s","s","s"]}
      >
        ${r?(0,a.qy)`<w3m-connector-list></w3m-connector-list>`:null}
        <w3m-all-wallets-widget></w3m-all-wallets-widget>
      </wui-flex>`}return(0,a.qy)`<wui-flex flexDirection="column" .padding=${["0","0","l","0"]}>
      <w3m-connecting-wc-view></w3m-connecting-wc-view>
      <wui-flex flexDirection="column" .padding=${["0","m","0","m"]}>
        <w3m-all-wallets-widget></w3m-all-wallets-widget> </wui-flex
    ></wui-flex>`}};i1([(0,o.wk)()],i5.prototype,"isMobile",void 0),i5=i1([(0,h.EM)("w3m-connecting-wc-basic-view")],i5);var i2=i(23104);let i6=(0,a.AH)`
  .continue-button-container {
    width: 100%;
  }
`;var i4=function(e,t,i,a){var o,r=arguments.length,n=r<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,i):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,a);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(n=(r<3?o(n):r>3?o(t,i,n):o(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let i7=class extends a.WF{constructor(){super(...arguments),this.loading=!1}render(){return(0,a.qy)`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        gap="xxl"
        .padding=${["0","0","l","0"]}
      >
        ${this.onboardingTemplate()} ${this.buttonsTemplate()}
        <wui-link
          @click=${()=>{d.w.openHref(i2.T.URLS.FAQ,"_blank")}}
        >
          Learn more about names
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
          icon="id"
          size="xl"
          iconSize="xxl"
          iconColor="fg-200"
          backgroundColor="fg-200"
        ></wui-icon-box>
      </wui-flex>
      <wui-flex flexDirection="column" alignItems="center" gap="s">
        <wui-text align="center" variant="medium-600" color="fg-100">
          Choose your account name
        </wui-text>
        <wui-text align="center" variant="paragraph-400" color="fg-100">
          Finally say goodbye to 0x addresses, name your account to make it easier to exchange
          assets
        </wui-text>
      </wui-flex>
    </wui-flex>`}buttonsTemplate(){return(0,a.qy)`<wui-flex
      .padding=${["0","2l","0","2l"]}
      gap="s"
      class="continue-button-container"
    >
      <wui-button
        fullWidth
        .loading=${this.loading}
        size="lg"
        borderRadius="xs"
        @click=${this.handleContinue.bind(this)}
        >Choose name
      </wui-button>
    </wui-flex>`}handleContinue(){let e=n.W.state.activeChain;Q.I.push("RegisterAccountName"),U.E.sendEvent({type:"track",event:"OPEN_ENS_FLOW",properties:{isSmartAccount:u.U.state.preferredAccountTypes?.[e]===er.Vl.ACCOUNT_TYPES.SMART_ACCOUNT}})}};i7.styles=i6,i4([(0,o.wk)()],i7.prototype,"loading",void 0),i7=i4([(0,h.EM)("w3m-choose-account-name-view")],i7);let i8=class extends a.WF{constructor(){super(...arguments),this.wallet=Q.I.state.data?.wallet}render(){if(!this.wallet)throw Error("w3m-downloads-view");return(0,a.qy)`
      <wui-flex gap="xs" flexDirection="column" .padding=${["s","s","l","s"]}>
        ${this.chromeTemplate()} ${this.iosTemplate()} ${this.androidTemplate()}
        ${this.homepageTemplate()}
      </wui-flex>
    `}chromeTemplate(){return this.wallet?.chrome_store?(0,a.qy)`<wui-list-item
      variant="icon"
      icon="chromeStore"
      iconVariant="square"
      @click=${this.onChromeStore.bind(this)}
      chevron
    >
      <wui-text variant="paragraph-500" color="fg-100">Chrome Extension</wui-text>
    </wui-list-item>`:null}iosTemplate(){return this.wallet?.app_store?(0,a.qy)`<wui-list-item
      variant="icon"
      icon="appStore"
      iconVariant="square"
      @click=${this.onAppStore.bind(this)}
      chevron
    >
      <wui-text variant="paragraph-500" color="fg-100">iOS App</wui-text>
    </wui-list-item>`:null}androidTemplate(){return this.wallet?.play_store?(0,a.qy)`<wui-list-item
      variant="icon"
      icon="playStore"
      iconVariant="square"
      @click=${this.onPlayStore.bind(this)}
      chevron
    >
      <wui-text variant="paragraph-500" color="fg-100">Android App</wui-text>
    </wui-list-item>`:null}homepageTemplate(){return this.wallet?.homepage?(0,a.qy)`
      <wui-list-item
        variant="icon"
        icon="browser"
        iconVariant="square-blue"
        @click=${this.onHomePage.bind(this)}
        chevron
      >
        <wui-text variant="paragraph-500" color="fg-100">Website</wui-text>
      </wui-list-item>
    `:null}onChromeStore(){this.wallet?.chrome_store&&d.w.openHref(this.wallet.chrome_store,"_blank")}onAppStore(){this.wallet?.app_store&&d.w.openHref(this.wallet.app_store,"_blank")}onPlayStore(){this.wallet?.play_store&&d.w.openHref(this.wallet.play_store,"_blank")}onHomePage(){this.wallet?.homepage&&d.w.openHref(this.wallet.homepage,"_blank")}};i8=function(e,t,i,a){var o,r=arguments.length,n=r<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,i):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,a);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(n=(r<3?o(n):r>3?o(t,i,n):o(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n}([(0,h.EM)("w3m-downloads-view")],i8);let i9=class extends a.WF{render(){return(0,a.qy)`
      <wui-flex flexDirection="column" .padding=${["0","s","s","s"]} gap="xs">
        ${this.recommendedWalletsTemplate()}
        <wui-list-wallet
          name="Explore all"
          showAllWallets
          walletIcon="allWallets"
          icon="externalLink"
          @click=${()=>{d.w.openHref("https://walletconnect.com/explorer?type=wallet","_blank")}}
        ></wui-list-wallet>
      </wui-flex>
    `}recommendedWalletsTemplate(){let{recommended:e,featured:t}=tu.N.state,{customWallets:i}=l.H.state;return[...t,...i??[],...e].slice(0,4).map(e=>(0,a.qy)`
        <wui-list-wallet
          name=${e.name??"Unknown"}
          tagVariant="main"
          imageSrc=${(0,r.J)(s.$.getWalletImage(e))}
          @click=${()=>{d.w.openHref(e.homepage??"https://walletconnect.com/explorer","_blank")}}
        ></wui-list-wallet>
      `)}};i9=function(e,t,i,a){var o,r=arguments.length,n=r<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,i):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,a);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(n=(r<3?o(n):r>3?o(t,i,n):o(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n}([(0,h.EM)("w3m-get-wallet-view")],i9),i(97363);var ae=function(e,t,i,a){var o,r=arguments.length,n=r<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,i):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,a);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(n=(r<3?o(n):r>3?o(t,i,n):o(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let at=class extends a.WF{constructor(){super(...arguments),this.data=[]}render(){return(0,a.qy)`
      <wui-flex flexDirection="column" alignItems="center" gap="l">
        ${this.data.map(e=>(0,a.qy)`
            <wui-flex flexDirection="column" alignItems="center" gap="xl">
              <wui-flex flexDirection="row" justifyContent="center" gap="1xs">
                ${e.images.map(e=>(0,a.qy)`<wui-visual name=${e}></wui-visual>`)}
              </wui-flex>
            </wui-flex>
            <wui-flex flexDirection="column" alignItems="center" gap="xxs">
              <wui-text variant="paragraph-500" color="fg-100" align="center">
                ${e.title}
              </wui-text>
              <wui-text variant="small-500" color="fg-200" align="center">${e.text}</wui-text>
            </wui-flex>
          `)}
      </wui-flex>
    `}};ae([(0,o.MZ)({type:Array})],at.prototype,"data",void 0),at=ae([(0,h.EM)("w3m-help-widget")],at);let ai=[{images:["login","profile","lock"],title:"One login for all of web3",text:"Log in to any app by connecting your wallet. Say goodbye to countless passwords!"},{images:["defi","nft","eth"],title:"A home for your digital assets",text:"A wallet lets you store, send and receive digital assets like cryptocurrencies and NFTs."},{images:["browser","noun","dao"],title:"Your gateway to a new web",text:"With your wallet, you can explore and interact with DeFi, NFTs, DAOs, and much more."}],aa=class extends a.WF{render(){return(0,a.qy)`
      <wui-flex
        flexDirection="column"
        .padding=${["xxl","xl","xl","xl"]}
        alignItems="center"
        gap="xl"
      >
        <w3m-help-widget .data=${ai}></w3m-help-widget>
        <wui-button variant="main" size="md" @click=${this.onGetWallet.bind(this)}>
          <wui-icon color="inherit" slot="iconLeft" name="wallet"></wui-icon>
          Get a wallet
        </wui-button>
      </wui-flex>
    `}onGetWallet(){U.E.sendEvent({type:"track",event:"CLICK_GET_WALLET"}),Q.I.push("GetWallet")}};aa=function(e,t,i,a){var o,r=arguments.length,n=r<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,i):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,a);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(n=(r<3?o(n):r>3?o(t,i,n):o(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n}([(0,h.EM)("w3m-what-is-a-wallet-view")],aa);let ao=(0,a.AH)`
  wui-flex {
    max-height: clamp(360px, 540px, 80vh);
    overflow: scroll;
    scrollbar-width: none;
    transition: opacity var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: opacity;
  }
  wui-flex::-webkit-scrollbar {
    display: none;
  }
  wui-flex.disabled {
    opacity: 0.3;
    pointer-events: none;
    user-select: none;
  }
`;var ar=function(e,t,i,a){var o,r=arguments.length,n=r<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,i):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,a);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(n=(r<3?o(n):r>3?o(t,i,n):o(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let an=class extends a.WF{constructor(){super(),this.unsubscribe=[],this.checked=tD.o.state.isLegalCheckboxChecked,this.unsubscribe.push(tD.o.subscribeKey("isLegalCheckboxChecked",e=>{this.checked=e}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){let{termsConditionsUrl:e,privacyPolicyUrl:t}=l.H.state,i=l.H.state.features?.legalCheckbox,o=!!(e||t)&&!!i,n=o&&!this.checked;return(0,a.qy)`
      <w3m-legal-checkbox></w3m-legal-checkbox>
      <wui-flex
        flexDirection="column"
        .padding=${o?["0","s","s","s"]:"s"}
        gap="xs"
        class=${(0,r.J)(n?"disabled":void 0)}
      >
        <w3m-wallet-login-list tabIdx=${(0,r.J)(n?-1:void 0)}></w3m-wallet-login-list>
      </wui-flex>
      <w3m-legal-footer></w3m-legal-footer>
    `}};an.styles=ao,ar([(0,o.wk)()],an.prototype,"checked",void 0),an=ar([(0,h.EM)("w3m-connect-wallets-view")],an);let as=(0,w.AH)`
  :host {
    display: block;
    width: var(--wui-box-size-lg);
    height: var(--wui-box-size-lg);
  }

  svg {
    width: var(--wui-box-size-lg);
    height: var(--wui-box-size-lg);
    fill: none;
    stroke: transparent;
    stroke-linecap: round;
  }

  use {
    stroke: var(--wui-color-accent-100);
    stroke-width: 2px;
    stroke-dasharray: 54, 118;
    stroke-dashoffset: 172;
    animation: dash 1s linear infinite;
  }

  @keyframes dash {
    to {
      stroke-dashoffset: 0px;
    }
  }
`,al=class extends w.WF{render(){return(0,w.qy)`
      <svg viewBox="0 0 54 59">
        <path
          id="wui-loader-path"
          d="M17.22 5.295c3.877-2.277 5.737-3.363 7.72-3.726a11.44 11.44 0 0 1 4.12 0c1.983.363 3.844 1.45 7.72 3.726l6.065 3.562c3.876 2.276 5.731 3.372 7.032 4.938a11.896 11.896 0 0 1 2.06 3.63c.683 1.928.688 4.11.688 8.663v7.124c0 4.553-.005 6.735-.688 8.664a11.896 11.896 0 0 1-2.06 3.63c-1.3 1.565-3.156 2.66-7.032 4.937l-6.065 3.563c-3.877 2.276-5.737 3.362-7.72 3.725a11.46 11.46 0 0 1-4.12 0c-1.983-.363-3.844-1.449-7.72-3.726l-6.065-3.562c-3.876-2.276-5.731-3.372-7.032-4.938a11.885 11.885 0 0 1-2.06-3.63c-.682-1.928-.688-4.11-.688-8.663v-7.124c0-4.553.006-6.735.688-8.664a11.885 11.885 0 0 1 2.06-3.63c1.3-1.565 3.156-2.66 7.032-4.937l6.065-3.562Z"
        />
        <use xlink:href="#wui-loader-path"></use>
      </svg>
    `}};al.styles=[b.W5,as],al=function(e,t,i,a){var o,r=arguments.length,n=r<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,i):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,a);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(n=(r<3?o(n):r>3?o(t,i,n):o(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n}([(0,v.E)("wui-loading-hexagon")],al);let ac=(0,w.JW)`<svg width="86" height="96" fill="none">
  <path
    d="M78.3244 18.926L50.1808 2.45078C45.7376 -0.150261 40.2624 -0.150262 35.8192 2.45078L7.6756 18.926C3.23322 21.5266 0.5 26.3301 0.5 31.5248V64.4752C0.5 69.6699 3.23322 74.4734 7.6756 77.074L35.8192 93.5492C40.2624 96.1503 45.7376 96.1503 50.1808 93.5492L78.3244 77.074C82.7668 74.4734 85.5 69.6699 85.5 64.4752V31.5248C85.5 26.3301 82.7668 21.5266 78.3244 18.926Z"
  />
</svg>`,au=(0,w.JW)`
  <svg fill="none" viewBox="0 0 36 40">
    <path
      d="M15.4 2.1a5.21 5.21 0 0 1 5.2 0l11.61 6.7a5.21 5.21 0 0 1 2.61 4.52v13.4c0 1.87-1 3.59-2.6 4.52l-11.61 6.7c-1.62.93-3.6.93-5.22 0l-11.6-6.7a5.21 5.21 0 0 1-2.61-4.51v-13.4c0-1.87 1-3.6 2.6-4.52L15.4 2.1Z"
    />
  </svg>
`,ad=(0,w.AH)`
  :host {
    position: relative;
    border-radius: inherit;
    display: flex;
    justify-content: center;
    align-items: center;
    width: var(--local-width);
    height: var(--local-height);
  }

  :host([data-round='true']) {
    background: var(--wui-color-gray-glass-002);
    border-radius: 100%;
    outline: 1px solid var(--wui-color-gray-glass-005);
  }

  svg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    fill: var(--wui-color-gray-glass-002);
  }

  svg > path {
    stroke: var(--local-stroke);
  }

  wui-image {
    width: 100%;
    height: 100%;
    -webkit-clip-path: var(--local-path);
    clip-path: var(--local-path);
    background: var(--wui-color-gray-glass-002);
  }

  wui-icon {
    transform: translateY(-5%);
    width: var(--local-icon-size);
    height: var(--local-icon-size);
  }
`;var ap=function(e,t,i,a){var o,r=arguments.length,n=r<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,i):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,a);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(n=(r<3?o(n):r>3?o(t,i,n):o(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let ah=class extends w.WF{constructor(){super(...arguments),this.size="md",this.name="uknown",this.networkImagesBySize={sm:au,md:td,lg:ac},this.selected=!1,this.round=!1}render(){return this.round?(this.dataset.round="true",this.style.cssText=`
      --local-width: var(--wui-spacing-3xl);
      --local-height: var(--wui-spacing-3xl);
      --local-icon-size: var(--wui-spacing-l);
    `):this.style.cssText=`

      --local-path: var(--wui-path-network-${this.size});
      --local-width:  var(--wui-width-network-${this.size});
      --local-height:  var(--wui-height-network-${this.size});
      --local-icon-size:  var(--wui-icon-size-network-${this.size});
    `,(0,w.qy)`${this.templateVisual()} ${this.svgTemplate()} `}svgTemplate(){return this.round?null:this.networkImagesBySize[this.size]}templateVisual(){return this.imageSrc?(0,w.qy)`<wui-image src=${this.imageSrc} alt=${this.name}></wui-image>`:(0,w.qy)`<wui-icon size="inherit" color="fg-200" name="networkPlaceholder"></wui-icon>`}};ah.styles=[b.W5,ad],ap([(0,g.MZ)()],ah.prototype,"size",void 0),ap([(0,g.MZ)()],ah.prototype,"name",void 0),ap([(0,g.MZ)({type:Object})],ah.prototype,"networkImagesBySize",void 0),ap([(0,g.MZ)()],ah.prototype,"imageSrc",void 0),ap([(0,g.MZ)({type:Boolean})],ah.prototype,"selected",void 0),ap([(0,g.MZ)({type:Boolean})],ah.prototype,"round",void 0),ah=ap([(0,v.E)("wui-network-image")],ah);let aw=(0,a.AH)`
  @keyframes shake {
    0% {
      transform: translateX(0);
    }
    25% {
      transform: translateX(3px);
    }
    50% {
      transform: translateX(-3px);
    }
    75% {
      transform: translateX(3px);
    }
    100% {
      transform: translateX(0);
    }
  }

  wui-flex:first-child:not(:only-child) {
    position: relative;
  }

  wui-loading-hexagon {
    position: absolute;
  }

  wui-icon-box {
    position: absolute;
    right: 4px;
    bottom: 0;
    opacity: 0;
    transform: scale(0.5);
    z-index: 1;
  }

  wui-button {
    display: none;
  }

  [data-error='true'] wui-icon-box {
    opacity: 1;
    transform: scale(1);
  }

  [data-error='true'] > wui-flex:first-child {
    animation: shake 250ms cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
  }

  wui-button[data-retry='true'] {
    display: block;
    opacity: 1;
  }
`;var ag=function(e,t,i,a){var o,r=arguments.length,n=r<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,i):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,a);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(n=(r<3?o(n):r>3?o(t,i,n):o(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let af=class extends a.WF{constructor(){super(),this.network=Q.I.state.data?.network,this.unsubscribe=[],this.showRetry=!1,this.error=!1}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}firstUpdated(){this.onSwitchNetwork()}render(){if(!this.network)throw Error("w3m-network-switch-view: No network provided");this.onShowRetry();let e=this.getLabel(),t=this.getSubLabel();return(0,a.qy)`
      <wui-flex
        data-error=${this.error}
        flexDirection="column"
        alignItems="center"
        .padding=${["3xl","xl","3xl","xl"]}
        gap="xl"
      >
        <wui-flex justifyContent="center" alignItems="center">
          <wui-network-image
            size="lg"
            imageSrc=${(0,r.J)(s.$.getNetworkImage(this.network))}
          ></wui-network-image>

          ${this.error?null:(0,a.qy)`<wui-loading-hexagon></wui-loading-hexagon>`}

          <wui-icon-box
            backgroundColor="error-100"
            background="opaque"
            iconColor="error-100"
            icon="close"
            size="sm"
            ?border=${!0}
            borderColor="wui-color-bg-125"
          ></wui-icon-box>
        </wui-flex>

        <wui-flex flexDirection="column" alignItems="center" gap="xs">
          <wui-text align="center" variant="paragraph-500" color="fg-100">${e}</wui-text>
          <wui-text align="center" variant="small-500" color="fg-200">${t}</wui-text>
        </wui-flex>

        <wui-button
          data-retry=${this.showRetry}
          variant="accent"
          size="md"
          .disabled=${!this.error}
          @click=${this.onSwitchNetwork.bind(this)}
        >
          <wui-icon color="inherit" slot="iconLeft" name="refresh"></wui-icon>
          Try again
        </wui-button>
      </wui-flex>
    `}getSubLabel(){let e=n.W.state.activeChain,t=G.a.getConnectorId(e);return G.a.getAuthConnector()&&t===K.o.CONNECTOR_ID.AUTH?"":this.error?"Switch can be declined if chain is not supported by a wallet or previous request is still active":"Accept connection request in your wallet"}getLabel(){let e=n.W.state.activeChain,t=G.a.getConnectorId(e);return G.a.getAuthConnector()&&t===K.o.CONNECTOR_ID.AUTH?`Switching to ${this.network?.name??"Unknown"} network...`:this.error?"Switch declined":"Approve in wallet"}onShowRetry(){if(this.error&&!this.showRetry){this.showRetry=!0;let e=this.shadowRoot?.querySelector("wui-button");e?.animate([{opacity:0},{opacity:1}],{fill:"forwards",easing:"ease"})}}async onSwitchNetwork(){try{this.error=!1,n.W.state.activeChain!==this.network?.chainNamespace&&n.W.setIsSwitchingNamespace(!0),this.network&&await n.W.switchActiveNetwork(this.network)}catch(e){this.error=!0}}};af.styles=aw,ag([(0,o.wk)()],af.prototype,"showRetry",void 0),ag([(0,o.wk)()],af.prototype,"error",void 0),af=ag([(0,h.EM)("w3m-network-switch-view")],af),i(98082);let ab=(0,w.AH)`
  button {
    column-gap: var(--wui-spacing-s);
    padding: 7px var(--wui-spacing-l) 7px var(--wui-spacing-xs);
    width: 100%;
    transition: all var(--wui-ease-out-power-1) var(--wui-duration-md);
    border-radius: var(--wui-border-radius-xs);
    color: var(--wui-color-fg-100);
  }

  button > wui-text:nth-child(2) {
    display: flex;
    flex: 1;
  }

  button[data-transparent='true'] {
    pointer-events: none;
    background-color: transparent;
  }

  button:hover {
    background-color: var(--wui-color-gray-glass-002);
  }

  button:active {
    background-color: var(--wui-color-gray-glass-005);
  }

  wui-image {
    width: var(--wui-spacing-3xl);
    height: var(--wui-spacing-3xl);
    border-radius: 100%;
  }

  button:disabled {
    background-color: var(--wui-color-gray-glass-002);
    opacity: 0.5;
    cursor: not-allowed;
  }

  button:disabled > wui-tag {
    background-color: var(--wui-color-gray-glass-010);
    color: var(--wui-color-fg-300);
  }
`;var am=function(e,t,i,a){var o,r=arguments.length,n=r<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,i):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,a);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(n=(r<3?o(n):r>3?o(t,i,n):o(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let av=class extends w.WF{constructor(){super(...arguments),this.imageSrc="",this.name="",this.disabled=!1,this.selected=!1,this.transparent=!1}render(){return(0,w.qy)`
      <button data-transparent=${this.transparent} ?disabled=${this.disabled}>
        <wui-flex gap="s" alignItems="center">
          ${this.templateNetworkImage()}
          <wui-text variant="paragraph-500" color="inherit">${this.name}</wui-text></wui-flex
        >
        ${this.checkmarkTemplate()}
      </button>
    `}checkmarkTemplate(){return this.selected?(0,w.qy)`<wui-icon size="sm" color="accent-100" name="checkmarkBold"></wui-icon>`:null}templateNetworkImage(){return this.imageSrc?(0,w.qy)`<wui-image size="sm" src=${this.imageSrc} name=${this.name}></wui-image>`:this.imageSrc?null:(0,w.qy)`<wui-network-image
        ?round=${!0}
        size="md"
        name=${this.name}
      ></wui-network-image>`}};av.styles=[b.W5,b.fD,ab],am([(0,g.MZ)()],av.prototype,"imageSrc",void 0),am([(0,g.MZ)()],av.prototype,"name",void 0),am([(0,g.MZ)({type:Boolean})],av.prototype,"disabled",void 0),am([(0,g.MZ)({type:Boolean})],av.prototype,"selected",void 0),am([(0,g.MZ)({type:Boolean})],av.prototype,"transparent",void 0),av=am([(0,v.E)("wui-list-network")],av);let ay=(0,a.AH)`
  .container {
    max-height: 360px;
    overflow: auto;
  }

  .container::-webkit-scrollbar {
    display: none;
  }
`;var ax=function(e,t,i,a){var o,r=arguments.length,n=r<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,i):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,a);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(n=(r<3?o(n):r>3?o(t,i,n):o(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let ak=class extends a.WF{constructor(){super(),this.unsubscribe=[],this.network=n.W.state.activeCaipNetwork,this.requestedCaipNetworks=n.W.getAllRequestedCaipNetworks(),this.search="",this.onDebouncedSearch=d.w.debounce(e=>{this.search=e},100),this.unsubscribe.push(c.j.subscribeNetworkImages(()=>this.requestUpdate()),n.W.subscribeKey("activeCaipNetwork",e=>this.network=e),n.W.subscribeKey("chains",()=>this.requestedCaipNetworks=n.W.getAllRequestedCaipNetworks()))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return(0,a.qy)`
      ${this.templateSearchInput()}
      <wui-flex
        class="container"
        .padding=${["0","s","s","s"]}
        flexDirection="column"
        gap="xs"
      >
        ${this.networksTemplate()}
      </wui-flex>

      <wui-separator></wui-separator>

      <wui-flex padding="s" flexDirection="column" gap="m" alignItems="center">
        <wui-text variant="small-400" color="fg-300" align="center">
          Your connected wallet may not support some of the networks available for this dApp
        </wui-text>
        <wui-link @click=${this.onNetworkHelp.bind(this)}>
          <wui-icon size="xs" color="accent-100" slot="iconLeft" name="helpCircle"></wui-icon>
          What is a network
        </wui-link>
      </wui-flex>
    `}templateSearchInput(){return(0,a.qy)`
      <wui-flex gap="xs" .padding=${["0","s","s","s"]}>
        <wui-input-text
          @inputChange=${this.onInputChange.bind(this)}
          class="network-search-input"
          size="md"
          placeholder="Search network"
          icon="search"
        ></wui-input-text>
      </wui-flex>
    `}onInputChange(e){this.onDebouncedSearch(e.detail)}onNetworkHelp(){U.E.sendEvent({type:"track",event:"CLICK_NETWORK_HELP"}),Q.I.push("WhatIsANetwork")}networksTemplate(){let e=n.W.getAllRequestedCaipNetworks(),t=n.W.getAllApprovedCaipNetworkIds(),i=d.w.sortRequestedNetworks(t,e);return this.search?this.filteredNetworks=i?.filter(e=>e?.name?.toLowerCase().includes(this.search.toLowerCase())):this.filteredNetworks=i,this.filteredNetworks?.map(e=>a.qy`
        <wui-list-network
          .selected=${this.network?.id===e.id}
          imageSrc=${r.J(s.$.getNetworkImage(e))}
          type="network"
          name=${e.name??e.id}
          @click=${()=>this.onSwitchNetwork(e)}
          .disabled=${this.getNetworkDisabled(e)}
          data-testid=${`w3m-network-switch-${e.name??e.id}`}
        ></wui-list-network>
      `)}getNetworkDisabled(e){let t=e.chainNamespace,i=u.U.getCaipAddress(t),a=n.W.getAllApprovedCaipNetworkIds(),o=!1!==n.W.getNetworkProp("supportsAllNetworks",t),r=G.a.getConnectorId(t),s=G.a.getAuthConnector(),l=r===K.o.CONNECTOR_ID.AUTH&&s;return!!i&&!o&&!l&&!a?.includes(e.caipNetworkId)}onSwitchNetwork(e){let t=Q.I.state.data;if(e.id===this.network?.id)return;let i=e.chainNamespace!==n.W.state.activeChain,a=u.U.state.caipAddress,o=u.U.getCaipAddress(e.chainNamespace),r=G.a.getConnectorId(n.W.state.activeChain)===K.o.CONNECTOR_ID.AUTH,s=K.o.AUTH_CONNECTOR_SUPPORTED_CHAINS.find(t=>t===e.chainNamespace);a?r&&s?Q.I.push("SwitchNetwork",{...t,network:e}):r&&!s||i&&!o?Q.I.push("SwitchActiveChain",{switchToChain:e.chainNamespace,navigateTo:"Connect",navigateWithReplace:!0,network:e}):Q.I.push("SwitchNetwork",{...t,network:e}):Q.I.push("SwitchNetwork",{...t,network:e})}};ak.styles=ay,ax([(0,o.wk)()],ak.prototype,"network",void 0),ax([(0,o.wk)()],ak.prototype,"requestedCaipNetworks",void 0),ax([(0,o.wk)()],ak.prototype,"filteredNetworks",void 0),ax([(0,o.wk)()],ak.prototype,"search",void 0),ak=ax([(0,h.EM)("w3m-networks-view")],ak);let aC=(0,a.AH)`
  @keyframes shake {
    0% {
      transform: translateX(0);
    }
    25% {
      transform: translateX(3px);
    }
    50% {
      transform: translateX(-3px);
    }
    75% {
      transform: translateX(3px);
    }
    100% {
      transform: translateX(0);
    }
  }

  wui-flex:first-child:not(:only-child) {
    position: relative;
  }

  wui-loading-thumbnail {
    position: absolute;
  }

  wui-visual {
    width: var(--wui-wallet-image-size-lg);
    height: var(--wui-wallet-image-size-lg);
    border-radius: calc(var(--wui-border-radius-5xs) * 9 - var(--wui-border-radius-xxs));
    position: relative;
    overflow: hidden;
  }

  wui-visual::after {
    content: '';
    display: block;
    width: 100%;
    height: 100%;
    position: absolute;
    inset: 0;
    border-radius: calc(var(--wui-border-radius-5xs) * 9 - var(--wui-border-radius-xxs));
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-005);
  }

  wui-icon-box {
    position: absolute;
    right: calc(var(--wui-spacing-3xs) * -1);
    bottom: calc(var(--wui-spacing-3xs) * -1);
    opacity: 0;
    transform: scale(0.5);
    transition:
      opacity var(--wui-ease-out-power-2) var(--wui-duration-lg),
      transform var(--wui-ease-out-power-2) var(--wui-duration-lg);
    will-change: opacity, transform;
  }

  wui-text[align='center'] {
    width: 100%;
    padding: 0px var(--wui-spacing-l);
  }

  [data-error='true'] wui-icon-box {
    opacity: 1;
    transform: scale(1);
  }

  [data-error='true'] > wui-flex:first-child {
    animation: shake 250ms cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
  }

  [data-retry='false'] wui-link {
    display: none;
  }

  [data-retry='true'] wui-link {
    display: block;
    opacity: 1;
  }

  wui-link {
    padding: var(--wui-spacing-4xs) var(--wui-spacing-xxs);
  }

  .capitalize {
    text-transform: capitalize;
  }
`;var a$=function(e,t,i,a){var o,r=arguments.length,n=r<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,i):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,a);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(n=(r<3?o(n):r>3?o(t,i,n):o(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let aI={eip155:"eth",solana:"solana",bip122:"bitcoin",polkadot:void 0},aE=class extends a.WF{constructor(){super(...arguments),this.unsubscribe=[],this.switchToChain=Q.I.state.data?.switchToChain,this.caipNetwork=Q.I.state.data?.network,this.activeChain=n.W.state.activeChain}firstUpdated(){this.unsubscribe.push(n.W.subscribeKey("activeChain",e=>this.activeChain=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){let e=this.switchToChain?K.o.CHAIN_NAME_MAP[this.switchToChain]:"supported";if(!this.switchToChain)return null;let t=K.o.CHAIN_NAME_MAP[this.switchToChain];return(0,a.qy)`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${["3xl","xl","xl","xl"]}
        gap="xl"
      >
        <wui-flex justifyContent="center" flexDirection="column" alignItems="center" gap="xl">
          <wui-visual name=${(0,r.J)(aI[this.switchToChain])}></wui-visual>
          <wui-text
            data-testid=${`w3m-switch-active-chain-to-${t}`}
            variant="paragraph-500"
            color="fg-100"
            align="center"
            >Switch to <span class="capitalize">${t}</span></wui-text
          >
          <wui-text variant="small-400" color="fg-200" align="center">
            Connected wallet doesn't support connecting to ${e} chain. You
            need to connect with a different wallet.
          </wui-text>
          <wui-button
            data-testid="w3m-switch-active-chain-button"
            size="md"
            @click=${this.switchActiveChain.bind(this)}
            >Switch</wui-button
          >
        </wui-flex>
      </wui-flex>
    `}async switchActiveChain(){this.switchToChain&&(n.W.setIsSwitchingNamespace(!0),G.a.setFilterByNamespace(this.switchToChain),this.caipNetwork?await n.W.switchActiveNetwork(this.caipNetwork):n.W.setActiveNamespace(this.switchToChain),Q.I.reset("Connect"))}};aE.styles=aC,a$([(0,o.MZ)()],aE.prototype,"activeChain",void 0),aE=a$([(0,h.EM)("w3m-switch-active-chain-view")],aE);let aA=[{images:["network","layers","system"],title:"The system’s nuts and bolts",text:"A network is what brings the blockchain to life, as this technical infrastructure allows apps to access the ledger and smart contract services."},{images:["noun","defiAlt","dao"],title:"Designed for different uses",text:"Each network is designed differently, and may therefore suit certain apps and experiences."}],aT=class extends a.WF{render(){return(0,a.qy)`
      <wui-flex
        flexDirection="column"
        .padding=${["xxl","xl","xl","xl"]}
        alignItems="center"
        gap="xl"
      >
        <w3m-help-widget .data=${aA}></w3m-help-widget>
        <wui-button
          variant="main"
          size="md"
          @click=${()=>{d.w.openHref("https://ethereum.org/en/developers/docs/networks/","_blank")}}
        >
          Learn more
          <wui-icon color="inherit" slot="iconRight" name="externalLink"></wui-icon>
        </wui-button>
      </wui-flex>
    `}};aT=function(e,t,i,a){var o,r=arguments.length,n=r<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,i):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,a);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(n=(r<3?o(n):r>3?o(t,i,n):o(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n}([(0,h.EM)("w3m-what-is-a-network-view")],aT);let aS=(0,a.AH)`
  :host > wui-flex {
    max-height: clamp(360px, 540px, 80vh);
    overflow: scroll;
    scrollbar-width: none;
  }

  :host > wui-flex::-webkit-scrollbar {
    display: none;
  }
`;var aR=function(e,t,i,a){var o,r=arguments.length,n=r<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,i):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,a);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(n=(r<3?o(n):r>3?o(t,i,n):o(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let aW=class extends a.WF{constructor(){super(),this.swapUnsupportedChain=Q.I.state.data?.swapUnsupportedChain,this.unsubscribe=[],this.disconecting=!1,this.unsubscribe.push(c.j.subscribeNetworkImages(()=>this.requestUpdate()))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return(0,a.qy)`
      <wui-flex class="container" flexDirection="column" gap="0">
        <wui-flex
          class="container"
          flexDirection="column"
          .padding=${["m","xl","xs","xl"]}
          alignItems="center"
          gap="xl"
        >
          ${this.descriptionTemplate()}
        </wui-flex>

        <wui-flex flexDirection="column" padding="s" gap="xs">
          ${this.networksTemplate()}
        </wui-flex>

        <wui-separator text="or"></wui-separator>
        <wui-flex flexDirection="column" padding="s" gap="xs">
          <wui-list-item
            variant="icon"
            iconVariant="overlay"
            icon="disconnect"
            ?chevron=${!1}
            .loading=${this.disconecting}
            @click=${this.onDisconnect.bind(this)}
            data-testid="disconnect-button"
          >
            <wui-text variant="paragraph-500" color="fg-200">Disconnect</wui-text>
          </wui-list-item>
        </wui-flex>
      </wui-flex>
    `}descriptionTemplate(){return this.swapUnsupportedChain?(0,a.qy)`
        <wui-text variant="small-400" color="fg-200" align="center">
          The swap feature doesn’t support your current network. Switch to an available option to
          continue.
        </wui-text>
      `:(0,a.qy)`
      <wui-text variant="small-400" color="fg-200" align="center">
        This app doesn’t support your current network. Switch to an available option to continue.
      </wui-text>
    `}networksTemplate(){let e=n.W.getAllRequestedCaipNetworks(),t=n.W.getAllApprovedCaipNetworkIds(),i=d.w.sortRequestedNetworks(t,e);return(this.swapUnsupportedChain?i.filter(e=>Y.oU.SWAP_SUPPORTED_NETWORKS.includes(e.caipNetworkId)):i).map(e=>(0,a.qy)`
        <wui-list-network
          imageSrc=${(0,r.J)(s.$.getNetworkImage(e))}
          name=${e.name??"Unknown"}
          @click=${()=>this.onSwitchNetwork(e)}
        >
        </wui-list-network>
      `)}async onDisconnect(){try{this.disconecting=!0,await ee.x.disconnect(),p.W.close()}catch{U.E.sendEvent({type:"track",event:"DISCONNECT_ERROR"}),X.P.showError("Failed to disconnect")}finally{this.disconecting=!1}}async onSwitchNetwork(e){let t=u.U.state.caipAddress,i=n.W.getAllApprovedCaipNetworkIds(),a=(n.W.getNetworkProp("supportsAllNetworks",e.chainNamespace),Q.I.state.data);t?i?.includes(e.caipNetworkId)?await n.W.switchActiveNetwork(e):Q.I.push("SwitchNetwork",{...a,network:e}):t||(n.W.setActiveCaipNetwork(e),Q.I.push("Connect"))}};aW.styles=aS,aR([(0,o.wk)()],aW.prototype,"disconecting",void 0),aW=aR([(0,h.EM)("w3m-unsupported-chain-view")],aW);let aO=(0,w.AH)`
  wui-flex {
    width: 100%;
    background-color: var(--wui-color-gray-glass-005);
    border-radius: var(--wui-border-radius-s);
    padding: var(--wui-spacing-1xs) var(--wui-spacing-s) var(--wui-spacing-1xs)
      var(--wui-spacing-1xs);
  }
`;var aN=function(e,t,i,a){var o,r=arguments.length,n=r<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,i):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,a);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(n=(r<3?o(n):r>3?o(t,i,n):o(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let aj=class extends w.WF{constructor(){super(...arguments),this.icon="externalLink",this.text=""}render(){return(0,w.qy)`
      <wui-flex gap="1xs" alignItems="center">
        <wui-icon-box
          size="sm"
          iconcolor="fg-200"
          backgroundcolor="fg-200"
          icon=${this.icon}
          background="transparent"
        ></wui-icon-box>
        <wui-text variant="small-400" color="fg-200">${this.text}</wui-text>
      </wui-flex>
    `}};aj.styles=[b.W5,b.fD,aO],aN([(0,g.MZ)()],aj.prototype,"icon",void 0),aN([(0,g.MZ)()],aj.prototype,"text",void 0),aj=aN([(0,v.E)("wui-banner")],aj);let aM=(0,a.AH)`
  :host > wui-flex {
    max-height: clamp(360px, 540px, 80vh);
    overflow: scroll;
    scrollbar-width: none;
  }

  :host > wui-flex::-webkit-scrollbar {
    display: none;
  }
`;var aP=function(e,t,i,a){var o,r=arguments.length,n=r<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,i):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,a);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(n=(r<3?o(n):r>3?o(t,i,n):o(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let aq=class extends a.WF{constructor(){super(),this.unsubscribe=[],this.preferredAccountTypes=u.U.state.preferredAccountTypes,this.unsubscribe.push(u.U.subscribeKey("preferredAccountTypes",e=>{this.preferredAccountTypes=e}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return(0,a.qy)` <wui-flex
      flexDirection="column"
      .padding=${["xs","s","m","s"]}
      gap="xs"
    >
      <wui-banner
        icon="warningCircle"
        text="You can only receive assets on these networks"
      ></wui-banner>
      ${this.networkTemplate()}
    </wui-flex>`}networkTemplate(){let e=n.W.getAllRequestedCaipNetworks(),t=n.W.getAllApprovedCaipNetworkIds(),i=n.W.state.activeCaipNetwork,o=n.W.checkIfSmartAccountEnabled(),l=d.w.sortRequestedNetworks(t,e);if(o&&this.preferredAccountTypes?.[i?.chainNamespace]===er.Vl.ACCOUNT_TYPES.SMART_ACCOUNT){if(!i)return null;l=[i]}return l.map(e=>(0,a.qy)`
        <wui-list-network
          imageSrc=${(0,r.J)(s.$.getNetworkImage(e))}
          name=${e.name??"Unknown"}
          ?transparent=${!0}
        >
        </wui-list-network>
      `)}};aq.styles=aM,aP([(0,o.wk)()],aq.prototype,"preferredAccountTypes",void 0),aq=aP([(0,h.EM)("w3m-wallet-compatible-networks-view")],aq);var aD=i(69737);let aU=(0,w.AH)`
  :host {
    display: flex;
    justify-content: center;
    align-items: center;
    width: var(--wui-icon-box-size-xl);
    height: var(--wui-icon-box-size-xl);
    box-shadow: 0 0 0 8px var(--wui-thumbnail-border);
    border-radius: var(--local-border-radius);
    overflow: hidden;
  }

  wui-icon {
    width: 32px;
    height: 32px;
  }
`;var aZ=function(e,t,i,a){var o,r=arguments.length,n=r<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,i):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,a);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(n=(r<3?o(n):r>3?o(t,i,n):o(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let az=class extends w.WF{render(){return this.style.cssText=`--local-border-radius: ${this.borderRadiusFull?"1000px":"20px"}; background-color: var(--wui-color-modal-bg);`,(0,w.qy)`${this.templateVisual()}`}templateVisual(){return this.imageSrc?(0,w.qy)`<wui-image src=${this.imageSrc} alt=${this.alt??""}></wui-image>`:(0,w.qy)`<wui-icon
      data-parent-size="md"
      size="inherit"
      color="inherit"
      name="walletPlaceholder"
    ></wui-icon>`}};az.styles=[b.W5,aU],aZ([(0,g.MZ)()],az.prototype,"imageSrc",void 0),aZ([(0,g.MZ)()],az.prototype,"alt",void 0),aZ([(0,g.MZ)({type:Boolean})],az.prototype,"borderRadiusFull",void 0),az=aZ([(0,v.E)("wui-visual-thumbnail")],az);let a_=(0,a.AH)`
  :host {
    display: flex;
    justify-content: center;
    gap: var(--wui-spacing-2xl);
  }

  wui-visual-thumbnail:nth-child(1) {
    z-index: 1;
  }
`,aL=class extends a.WF{constructor(){super(...arguments),this.dappImageUrl=l.H.state.metadata?.icons,this.walletImageUrl=u.U.state.connectedWalletInfo?.icon}firstUpdated(){let e=this.shadowRoot?.querySelectorAll("wui-visual-thumbnail");e?.[0]&&this.createAnimation(e[0],"translate(18px)"),e?.[1]&&this.createAnimation(e[1],"translate(-18px)")}render(){return(0,a.qy)`
      <wui-visual-thumbnail
        ?borderRadiusFull=${!0}
        .imageSrc=${this.dappImageUrl?.[0]}
      ></wui-visual-thumbnail>
      <wui-visual-thumbnail .imageSrc=${this.walletImageUrl}></wui-visual-thumbnail>
    `}createAnimation(e,t){e.animate([{transform:"translateX(0px)"},{transform:t}],{duration:1600,easing:"cubic-bezier(0.56, 0, 0.48, 1)",direction:"alternate",iterations:1/0})}};aL.styles=a_,aL=function(e,t,i,a){var o,r=arguments.length,n=r<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,i):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,a);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(n=(r<3?o(n):r>3?o(t,i,n):o(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n}([(0,h.EM)("w3m-siwx-sign-message-thumbnails")],aL);var aH=function(e,t,i,a){var o,r=arguments.length,n=r<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,i):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,a);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(n=(r<3?o(n):r>3?o(t,i,n):o(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let aB=class extends a.WF{constructor(){super(...arguments),this.dappName=l.H.state.metadata?.name,this.isCancelling=!1,this.isSigning=!1}render(){return(0,a.qy)`
      <wui-flex justifyContent="center" .padding=${["2xl","0","xxl","0"]}>
        <w3m-siwx-sign-message-thumbnails></w3m-siwx-sign-message-thumbnails>
      </wui-flex>
      <wui-flex
        .padding=${["0","4xl","l","4xl"]}
        gap="s"
        justifyContent="space-between"
      >
        <wui-text variant="paragraph-500" align="center" color="fg-100"
          >${this.dappName??"Dapp"} needs to connect to your wallet</wui-text
        >
      </wui-flex>
      <wui-flex
        .padding=${["0","3xl","l","3xl"]}
        gap="s"
        justifyContent="space-between"
      >
        <wui-text variant="small-400" align="center" color="fg-200"
          >Sign this message to prove you own this wallet and proceed. Canceling will disconnect
          you.</wui-text
        >
      </wui-flex>
      <wui-flex .padding=${["l","xl","xl","xl"]} gap="s" justifyContent="space-between">
        <wui-button
          size="lg"
          borderRadius="xs"
          fullWidth
          variant="neutral"
          ?loading=${this.isCancelling}
          @click=${this.onCancel.bind(this)}
          data-testid="w3m-connecting-siwe-cancel"
        >
          ${this.isCancelling?"Cancelling...":"Cancel"}
        </wui-button>
        <wui-button
          size="lg"
          borderRadius="xs"
          fullWidth
          variant="main"
          @click=${this.onSign.bind(this)}
          ?loading=${this.isSigning}
          data-testid="w3m-connecting-siwe-sign"
        >
          ${this.isSigning?"Signing...":"Sign"}
        </wui-button>
      </wui-flex>
    `}async onSign(){this.isSigning=!0,await aD.U.requestSignMessage().finally(()=>this.isSigning=!1)}async onCancel(){this.isCancelling=!0,await aD.U.cancelSignMessage().finally(()=>this.isCancelling=!1)}};aH([(0,o.wk)()],aB.prototype,"isCancelling",void 0),aH([(0,o.wk)()],aB.prototype,"isSigning",void 0),aB=aH([(0,h.EM)("w3m-siwx-sign-message-view")],aB)},10968:(e,t,i)=>{var a=i(80291),o=i(32827),r=i(64129),n=i(83503),s=i(25315),l=i(97778);let c=(0,a.AH)`
  :host {
    width: 100%;
    display: block;
  }
`;var u=function(e,t,i,a){var o,r=arguments.length,n=r<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,i):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,a);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(n=(r<3?o(n):r>3?o(t,i,n):o(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let d=class extends a.WF{constructor(){super(),this.unsubscribe=[],this.text="",this.open=r.I.state.open,this.unsubscribe.push(n.I.subscribeKey("view",()=>{r.I.hide()}),s.W.subscribeKey("open",e=>{e||r.I.hide()}),r.I.subscribeKey("open",e=>{this.open=e}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e()),r.I.hide()}render(){return(0,a.qy)`
      <div
        @pointermove=${this.onMouseEnter.bind(this)}
        @pointerleave=${this.onMouseLeave.bind(this)}
      >
        ${this.renderChildren()}
      </div>
    `}renderChildren(){return(0,a.qy)`<slot></slot> `}onMouseEnter(){let e=this.getBoundingClientRect();this.open||r.I.showTooltip({message:this.text,triggerRect:{width:e.width,height:e.height,left:e.left,top:e.top},variant:"shade"})}onMouseLeave(e){this.contains(e.relatedTarget)||r.I.hide()}};d.styles=[c],u([(0,o.MZ)()],d.prototype,"text",void 0),u([(0,o.wk)()],d.prototype,"open",void 0),d=u([(0,l.EM)("w3m-tooltip-trigger")],d)},27388:(e,t,i)=>{i.d(t,{OA:()=>a,WL:()=>r,u$:()=>o});let a={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},o=e=>(...t)=>({_$litDirective$:e,values:t});class r{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,i){this._$Ct=e,this._$AM=t,this._$Ci=i}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}}},86230:(e,t,i)=>{i.d(t,{_:()=>w,K:()=>b});var a=i(81914);let{I:o}=a.ge,r=e=>void 0===e.strings;var n=i(27388);let s=(e,t)=>{let i=e._$AN;if(void 0===i)return!1;for(let e of i)e._$AO?.(t,!1),s(e,t);return!0},l=e=>{let t,i;do{if(void 0===(t=e._$AM))break;(i=t._$AN).delete(e),e=t}while(0===i?.size)},c=e=>{for(let t;t=e._$AM;e=t){let i=t._$AN;if(void 0===i)t._$AN=i=new Set;else if(i.has(e))break;i.add(e),p(t)}};function u(e){void 0!==this._$AN?(l(this),this._$AM=e,c(this)):this._$AM=e}function d(e,t=!1,i=0){let a=this._$AH,o=this._$AN;if(void 0!==o&&0!==o.size){if(t){if(Array.isArray(a))for(let e=i;e<a.length;e++)s(a[e],!1),l(a[e]);else null!=a&&(s(a,!1),l(a))}else s(this,e)}}let p=e=>{e.type==n.OA.CHILD&&(e._$AP??=d,e._$AQ??=u)};class h extends n.WL{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,t,i){super._$AT(e,t,i),c(this),this.isConnected=e._$AU}_$AO(e,t=!0){e!==this.isConnected&&(this.isConnected=e,e?this.reconnected?.():this.disconnected?.()),t&&(s(this,e),l(this))}setValue(e){if(r(this._$Ct))this._$Ct._$AI(e,this);else{let t=[...this._$Ct._$AH];t[this._$Ci]=e,this._$Ct._$AI(t,this,0)}}disconnected(){}reconnected(){}}let w=()=>new g;class g{}let f=new WeakMap,b=(0,n.u$)(class extends h{render(e){return a.s6}update(e,[t]){let i=t!==this.G;return i&&void 0!==this.G&&this.rt(void 0),(i||this.lt!==this.ct)&&(this.G=t,this.ht=e.options?.host,this.rt(this.ct=e.element)),a.s6}rt(e){if(this.isConnected||(e=void 0),"function"==typeof this.G){let t=this.ht??globalThis,i=f.get(t);void 0===i&&(i=new WeakMap,f.set(t,i)),void 0!==i.get(this.G)&&this.G.call(this.ht,void 0),i.set(this.G,e),void 0!==e&&this.G.call(this.ht,e)}else this.G.value=e}get lt(){return"function"==typeof this.G?f.get(this.ht??globalThis)?.get(this.G):this.G?.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}})},49577:(e,t,i)=>{var a=i(71726),o=i(79346);i(43666),i(55602),i(13076);var r=i(67998),n=i(49231),s=i(45857);let l=(0,a.AH)`
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
`;var c=function(e,t,i,a){var o,r=arguments.length,n=r<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,i):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,a);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(n=(r<3?o(n):r>3?o(t,i,n):o(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let u=class extends a.WF{constructor(){super(...arguments),this.variant="fill",this.imageSrc=void 0,this.imageIcon=void 0,this.imageIconSize="md",this.disabled=!1,this.icon="externalLink",this.href="",this.text=void 0}render(){let e="success"===this.variant||"transparent"===this.variant||"shadeSmall"===this.variant;return(0,a.qy)`
      <a
        rel="noreferrer"
        target="_blank"
        href=${this.href}
        class=${this.disabled?"disabled":""}
        data-variant=${this.variant}
      >
        ${this.imageTemplate()}
        <wui-text variant=${e?"small-600":"paragraph-600"} color="inherit">
          ${this.title?this.title:n.Z.getHostName(this.href)}
        </wui-text>
        <wui-icon name=${this.icon} color="inherit" size="inherit"></wui-icon>
      </a>
    `}imageTemplate(){return this.imageSrc?(0,a.qy)`<wui-image src=${this.imageSrc}></wui-image>`:this.imageIcon?(0,a.qy)`<wui-icon
        name=${this.imageIcon}
        color="inherit"
        size=${this.imageIconSize}
        class="image-icon"
      ></wui-icon>`:null}};u.styles=[r.W5,r.fD,l],c([(0,o.MZ)()],u.prototype,"variant",void 0),c([(0,o.MZ)()],u.prototype,"imageSrc",void 0),c([(0,o.MZ)()],u.prototype,"imageIcon",void 0),c([(0,o.MZ)()],u.prototype,"imageIconSize",void 0),c([(0,o.MZ)({type:Boolean})],u.prototype,"disabled",void 0),c([(0,o.MZ)()],u.prototype,"icon",void 0),c([(0,o.MZ)()],u.prototype,"href",void 0),c([(0,o.MZ)()],u.prototype,"text",void 0),u=c([(0,s.E)("wui-chip")],u)},38878:(e,t,i)=>{var a=i(71726),o=i(79346),r=i(98255);i(13076);var n=i(67998),s=i(45857);i(60665);let l=(0,a.AH)`
  :host {
    position: relative;
    display: inline-block;
  }

  wui-text {
    margin: var(--wui-spacing-xxs) var(--wui-spacing-m) var(--wui-spacing-0) var(--wui-spacing-m);
  }
`;var c=function(e,t,i,a){var o,r=arguments.length,n=r<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,i):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,a);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(n=(r<3?o(n):r>3?o(t,i,n):o(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let u=class extends a.WF{constructor(){super(...arguments),this.disabled=!1}render(){return(0,a.qy)`
      <wui-input-text
        type="email"
        placeholder="Email"
        icon="mail"
        size="mdl"
        .disabled=${this.disabled}
        .value=${this.value}
        data-testid="wui-email-input"
        tabIdx=${(0,r.J)(this.tabIdx)}
      ></wui-input-text>
      ${this.templateError()}
    `}templateError(){return this.errorMessage?(0,a.qy)`<wui-text variant="tiny-500" color="error-100">${this.errorMessage}</wui-text>`:null}};u.styles=[n.W5,l],c([(0,o.MZ)()],u.prototype,"errorMessage",void 0),c([(0,o.MZ)({type:Boolean})],u.prototype,"disabled",void 0),c([(0,o.MZ)()],u.prototype,"value",void 0),c([(0,o.MZ)()],u.prototype,"tabIdx",void 0),u=c([(0,s.E)("wui-email-input")],u)},12716:(e,t,i)=>{var a=i(71726),o=i(79346),r=i(98255);i(13076);var n=i(67998),s=i(45857);i(88944);let l=(0,a.AH)`
  button {
    column-gap: var(--wui-spacing-s);
    padding: 7px var(--wui-spacing-l) 7px var(--wui-spacing-xs);
    width: 100%;
    justify-content: flex-start;
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
    color: var(--wui-color-fg-100);
  }

  wui-text {
    text-transform: capitalize;
  }

  wui-text[data-align='left'] {
    display: flex;
    flex: 1;
  }

  wui-text[data-align='center'] {
    display: flex;
    flex: 1;
    justify-content: center;
  }

  .invisible {
    opacity: 0;
    pointer-events: none;
  }

  button:disabled {
    background-color: var(--wui-color-gray-glass-015);
    color: var(--wui-color-gray-glass-015);
  }
`;var c=function(e,t,i,a){var o,r=arguments.length,n=r<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,i):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,a);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(n=(r<3?o(n):r>3?o(t,i,n):o(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let u=class extends a.WF{constructor(){super(...arguments),this.logo="google",this.name="Continue with google",this.align="left",this.disabled=!1}render(){return(0,a.qy)`
      <button ?disabled=${this.disabled} tabindex=${(0,r.J)(this.tabIdx)}>
        <wui-logo logo=${this.logo}></wui-logo>
        <wui-text
          data-align=${this.align}
          variant="paragraph-500"
          color="inherit"
          align=${this.align}
          >${this.name}</wui-text
        >
        ${this.templatePlacement()}
      </button>
    `}templatePlacement(){return"center"===this.align?(0,a.qy)` <wui-logo class="invisible" logo=${this.logo}></wui-logo>`:null}};u.styles=[n.W5,n.fD,l],c([(0,o.MZ)()],u.prototype,"logo",void 0),c([(0,o.MZ)()],u.prototype,"name",void 0),c([(0,o.MZ)()],u.prototype,"align",void 0),c([(0,o.MZ)()],u.prototype,"tabIdx",void 0),c([(0,o.MZ)({type:Boolean})],u.prototype,"disabled",void 0),u=c([(0,s.E)("wui-list-social")],u)},62156:(e,t,i)=>{var a=i(71726),o=i(79346);i(43666),i(55602),i(13076),i(7202);var r=i(67998),n=i(49231),s=i(45857);let l=(0,a.AH)`
  button {
    padding: 6.5px var(--wui-spacing-l) 6.5px var(--wui-spacing-xs);
    display: flex;
    justify-content: space-between;
    width: 100%;
    border-radius: var(--wui-border-radius-xs);
    background-color: var(--wui-color-gray-glass-002);
  }

  button[data-clickable='false'] {
    pointer-events: none;
    background-color: transparent;
  }

  wui-image,
  wui-icon {
    width: var(--wui-spacing-3xl);
    height: var(--wui-spacing-3xl);
  }

  wui-image {
    border-radius: var(--wui-border-radius-3xl);
  }
`;var c=function(e,t,i,a){var o,r=arguments.length,n=r<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,i):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,a);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(n=(r<3?o(n):r>3?o(t,i,n):o(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let u=class extends a.WF{constructor(){super(...arguments),this.tokenName="",this.tokenImageUrl="",this.tokenValue=0,this.tokenAmount="0.0",this.tokenCurrency="",this.clickable=!1}render(){return(0,a.qy)`
      <button data-clickable=${String(this.clickable)}>
        <wui-flex gap="s" alignItems="center">
          ${this.visualTemplate()}
          <wui-flex flexDirection="column" justifyContent="spaceBetween">
            <wui-text variant="paragraph-500" color="fg-100">${this.tokenName}</wui-text>
            <wui-text variant="small-400" color="fg-200">
              ${n.Z.formatNumberToLocalString(this.tokenAmount,4)} ${this.tokenCurrency}
            </wui-text>
          </wui-flex>
        </wui-flex>
        <wui-text variant="paragraph-500" color="fg-100">$${this.tokenValue.toFixed(2)}</wui-text>
      </button>
    `}visualTemplate(){return this.tokenName&&this.tokenImageUrl?(0,a.qy)`<wui-image alt=${this.tokenName} src=${this.tokenImageUrl}></wui-image>`:(0,a.qy)`<wui-icon name="coinPlaceholder" color="fg-100"></wui-icon>`}};u.styles=[r.W5,r.fD,l],c([(0,o.MZ)()],u.prototype,"tokenName",void 0),c([(0,o.MZ)()],u.prototype,"tokenImageUrl",void 0),c([(0,o.MZ)({type:Number})],u.prototype,"tokenValue",void 0),c([(0,o.MZ)()],u.prototype,"tokenAmount",void 0),c([(0,o.MZ)()],u.prototype,"tokenCurrency",void 0),c([(0,o.MZ)({type:Boolean})],u.prototype,"clickable",void 0),u=c([(0,s.E)("wui-list-token")],u)},33575:(e,t,i)=>{var a=i(71726),o=i(79346);i(13076);var r=i(67998),n=i(45857);let s=(0,a.AH)`
  :host {
    position: relative;
    display: flex;
    width: 100%;
    height: 1px;
    background-color: var(--wui-color-gray-glass-005);
    justify-content: center;
    align-items: center;
  }

  :host > wui-text {
    position: absolute;
    padding: 0px 10px;
    background-color: var(--wui-color-modal-bg);
    transition: background-color var(--wui-duration-lg) var(--wui-ease-out-power-1);
    will-change: background-color;
  }
`;var l=function(e,t,i,a){var o,r=arguments.length,n=r<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,i):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,a);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(n=(r<3?o(n):r>3?o(t,i,n):o(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let c=class extends a.WF{constructor(){super(...arguments),this.text=""}render(){return(0,a.qy)`${this.template()}`}template(){return this.text?(0,a.qy)`<wui-text variant="small-500" color="fg-200">${this.text}</wui-text>`:null}};c.styles=[r.W5,s],l([(0,o.MZ)()],c.prototype,"text",void 0),c=l([(0,n.E)("wui-separator")],c)},817:(e,t,i)=>{i(36e3)},76178:(e,t,i)=>{var a=i(71726),o=i(79346);i(55602);var r=i(67998),n=i(49231),s=i(45857);let l=(0,a.AH)`
  :host {
    display: block;
    width: var(--local-width);
    height: var(--local-height);
    border-radius: var(--wui-border-radius-3xl);
    box-shadow: 0 0 0 8px var(--wui-color-gray-glass-005);
    overflow: hidden;
    position: relative;
  }

  :host([data-variant='generated']) {
    --mixed-local-color-1: var(--local-color-1);
    --mixed-local-color-2: var(--local-color-2);
    --mixed-local-color-3: var(--local-color-3);
    --mixed-local-color-4: var(--local-color-4);
    --mixed-local-color-5: var(--local-color-5);
  }

  @supports (background: color-mix(in srgb, white 50%, black)) {
    :host([data-variant='generated']) {
      --mixed-local-color-1: color-mix(
        in srgb,
        var(--w3m-color-mix) var(--w3m-color-mix-strength),
        var(--local-color-1)
      );
      --mixed-local-color-2: color-mix(
        in srgb,
        var(--w3m-color-mix) var(--w3m-color-mix-strength),
        var(--local-color-2)
      );
      --mixed-local-color-3: color-mix(
        in srgb,
        var(--w3m-color-mix) var(--w3m-color-mix-strength),
        var(--local-color-3)
      );
      --mixed-local-color-4: color-mix(
        in srgb,
        var(--w3m-color-mix) var(--w3m-color-mix-strength),
        var(--local-color-4)
      );
      --mixed-local-color-5: color-mix(
        in srgb,
        var(--w3m-color-mix) var(--w3m-color-mix-strength),
        var(--local-color-5)
      );
    }
  }

  :host([data-variant='generated']) {
    box-shadow: 0 0 0 8px var(--wui-color-gray-glass-005);
    background: radial-gradient(
      var(--local-radial-circle),
      #fff 0.52%,
      var(--mixed-local-color-5) 31.25%,
      var(--mixed-local-color-3) 51.56%,
      var(--mixed-local-color-2) 65.63%,
      var(--mixed-local-color-1) 82.29%,
      var(--mixed-local-color-4) 100%
    );
  }

  :host([data-variant='default']) {
    box-shadow: 0 0 0 8px var(--wui-color-gray-glass-005);
    background: radial-gradient(
      75.29% 75.29% at 64.96% 24.36%,
      #fff 0.52%,
      #f5ccfc 31.25%,
      #dba4f5 51.56%,
      #9a8ee8 65.63%,
      #6493da 82.29%,
      #6ebdea 100%
    );
  }
`;var c=function(e,t,i,a){var o,r=arguments.length,n=r<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,i):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,a);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(n=(r<3?o(n):r>3?o(t,i,n):o(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let u=class extends a.WF{constructor(){super(...arguments),this.imageSrc=void 0,this.alt=void 0,this.address=void 0,this.size="xl"}render(){return this.style.cssText=`
    --local-width: var(--wui-icon-box-size-${this.size});
    --local-height: var(--wui-icon-box-size-${this.size});
    `,(0,a.qy)`${this.visualTemplate()}`}visualTemplate(){if(this.imageSrc)return this.dataset.variant="image",(0,a.qy)`<wui-image src=${this.imageSrc} alt=${this.alt??"avatar"}></wui-image>`;if(this.address){this.dataset.variant="generated";let e=n.Z.generateAvatarColors(this.address);return this.style.cssText+=`
 ${e}`,null}return this.dataset.variant="default",null}};u.styles=[r.W5,l],c([(0,o.MZ)()],u.prototype,"imageSrc",void 0),c([(0,o.MZ)()],u.prototype,"alt",void 0),c([(0,o.MZ)()],u.prototype,"address",void 0),c([(0,o.MZ)()],u.prototype,"size",void 0),u=c([(0,s.E)("wui-avatar")],u)},11778:(e,t,i)=>{var a=i(71726),o=i(79346);i(43666),i(55602),i(13076);var r=i(67998),n=i(45857);let s=(0,a.AH)`
  button {
    border: none;
    border-radius: var(--wui-border-radius-3xl);
  }

  button[data-variant='main'] {
    background-color: var(--wui-color-accent-100);
    color: var(--wui-color-inverse-100);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-010);
  }

  button[data-variant='accent'] {
    background-color: var(--wui-color-accent-glass-010);
    color: var(--wui-color-accent-100);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-005);
  }

  button[data-variant='gray'] {
    background-color: transparent;
    color: var(--wui-color-fg-200);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-010);
  }

  button[data-variant='shade'] {
    background-color: transparent;
    color: var(--wui-color-accent-100);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-010);
  }

  button[data-size='sm'] {
    height: 32px;
    padding: 0 var(--wui-spacing-s);
  }

  button[data-size='md'] {
    height: 40px;
    padding: 0 var(--wui-spacing-l);
  }

  button[data-size='sm'] > wui-image {
    width: 16px;
    height: 16px;
  }

  button[data-size='md'] > wui-image {
    width: 24px;
    height: 24px;
  }

  button[data-size='sm'] > wui-icon {
    width: 12px;
    height: 12px;
  }

  button[data-size='md'] > wui-icon {
    width: 14px;
    height: 14px;
  }

  wui-image {
    border-radius: var(--wui-border-radius-3xl);
    overflow: hidden;
  }

  button.disabled > wui-icon,
  button.disabled > wui-image {
    filter: grayscale(1);
  }

  button[data-variant='main'] > wui-image {
    box-shadow: inset 0 0 0 1px var(--wui-color-accent-090);
  }

  button[data-variant='shade'] > wui-image,
  button[data-variant='gray'] > wui-image {
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-010);
  }

  @media (hover: hover) and (pointer: fine) {
    button[data-variant='main']:focus-visible {
      background-color: var(--wui-color-accent-090);
    }

    button[data-variant='main']:hover:enabled {
      background-color: var(--wui-color-accent-090);
    }

    button[data-variant='main']:active:enabled {
      background-color: var(--wui-color-accent-080);
    }

    button[data-variant='accent']:hover:enabled {
      background-color: var(--wui-color-accent-glass-015);
    }

    button[data-variant='accent']:active:enabled {
      background-color: var(--wui-color-accent-glass-020);
    }

    button[data-variant='shade']:focus-visible,
    button[data-variant='gray']:focus-visible,
    button[data-variant='shade']:hover,
    button[data-variant='gray']:hover {
      background-color: var(--wui-color-gray-glass-002);
    }

    button[data-variant='gray']:active,
    button[data-variant='shade']:active {
      background-color: var(--wui-color-gray-glass-005);
    }
  }

  button.disabled {
    color: var(--wui-color-gray-glass-020);
    background-color: var(--wui-color-gray-glass-002);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-002);
    pointer-events: none;
  }
`;var l=function(e,t,i,a){var o,r=arguments.length,n=r<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,i):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,a);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(n=(r<3?o(n):r>3?o(t,i,n):o(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let c=class extends a.WF{constructor(){super(...arguments),this.variant="accent",this.imageSrc="",this.disabled=!1,this.icon="externalLink",this.size="md",this.text=""}render(){let e="sm"===this.size?"small-600":"paragraph-600";return(0,a.qy)`
      <button
        class=${this.disabled?"disabled":""}
        data-variant=${this.variant}
        data-size=${this.size}
      >
        ${this.imageSrc?(0,a.qy)`<wui-image src=${this.imageSrc}></wui-image>`:null}
        <wui-text variant=${e} color="inherit"> ${this.text} </wui-text>
        <wui-icon name=${this.icon} color="inherit" size="inherit"></wui-icon>
      </button>
    `}};c.styles=[r.W5,r.fD,s],l([(0,o.MZ)()],c.prototype,"variant",void 0),l([(0,o.MZ)()],c.prototype,"imageSrc",void 0),l([(0,o.MZ)({type:Boolean})],c.prototype,"disabled",void 0),l([(0,o.MZ)()],c.prototype,"icon",void 0),l([(0,o.MZ)()],c.prototype,"size",void 0),l([(0,o.MZ)()],c.prototype,"text",void 0),c=l([(0,n.E)("wui-chip-button")],c)},88944:(e,t,i)=>{var a=i(71726),o=i(79346);i(43666);var r=i(67998),n=i(45857);let s=(0,a.AH)`
  :host {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    border-radius: var(--wui-border-radius-3xl);
    border: 1px solid var(--wui-color-gray-glass-005);
    overflow: hidden;
  }

  wui-icon {
    width: 100%;
    height: 100%;
  }
`;var l=function(e,t,i,a){var o,r=arguments.length,n=r<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,i):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,a);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(n=(r<3?o(n):r>3?o(t,i,n):o(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let c=class extends a.WF{constructor(){super(...arguments),this.logo="google"}render(){return(0,a.qy)`<wui-icon color="inherit" size="inherit" name=${this.logo}></wui-icon> `}};c.styles=[r.W5,s],l([(0,o.MZ)()],c.prototype,"logo",void 0),c=l([(0,n.E)("wui-logo")],c)}}]);