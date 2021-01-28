(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{267:function(a,e,s){"use strict";s.r(e);var t=s(37),r=Object(t.a)({},function(){var a=this,e=a.$createElement,s=a._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"development-guide"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#development-guide","aria-hidden":"true"}},[a._v("#")]),a._v(" Development Guide")]),a._v(" "),s("p",[a._v("This document describes how to build, test and run Flagger from source.")]),a._v(" "),s("h2",{attrs:{id:"setup-dev-environment"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#setup-dev-environment","aria-hidden":"true"}},[a._v("#")]),a._v(" Setup dev environment")]),a._v(" "),s("p",[a._v("Flagger is written in Go and uses Go modules for dependency management.")]),a._v(" "),s("p",[a._v("On your dev machine install the following tools:")]),a._v(" "),s("ul",[s("li",[a._v("go >= 1.13")]),a._v(" "),s("li",[a._v("git >= 2.20")]),a._v(" "),s("li",[a._v("bash >= 5.0")]),a._v(" "),s("li",[a._v("make >= 3.81")]),a._v(" "),s("li",[a._v("kubectl >= 1.16")]),a._v(" "),s("li",[a._v("kustomize >= 3.5")]),a._v(" "),s("li",[a._v("helm >= 3.0")]),a._v(" "),s("li",[a._v("docker >= 19.03")])]),a._v(" "),s("p",[a._v("You'll also need a Kubernetes cluster for testing Flagger.\nYou can use Minikube, Kind, Docker desktop or any remote cluster\n(AKS/EKS/GKE/etc) Kubernetes version 1.14 or newer.")]),a._v(" "),s("p",[a._v("To start contributing to Flagger, fork the "),s("a",{attrs:{href:"https://github.com/weaveworks/flagger",target:"_blank",rel:"noopener noreferrer"}},[a._v("repository"),s("OutboundLink")],1),a._v(" on GitHub.")]),a._v(" "),s("p",[a._v("Create a dir inside your "),s("code",[a._v("GOPATH")]),a._v(":")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("mkdir")]),a._v(" -p "),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$GOPATH")]),a._v("/src/github.com/weaveworks\n")])])]),s("p",[a._v("Clone your fork:")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("cd")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$GOPATH")]),a._v("/src/github.com/weaveworks\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" clone https://github.com/YOUR_USERNAME/flagger\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("cd")]),a._v(" flagger\n")])])]),s("p",[a._v("Set Flagger repository as upstream:")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" remote "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("add")]),a._v(" upstream https://github.com/weaveworks/flagger.git\n")])])]),s("p",[a._v("Sync your fork regularly to keep it up-to-date with upstream:")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" fetch upstream\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" checkout master\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" merge upstream/master\n")])])]),s("h2",{attrs:{id:"build"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#build","aria-hidden":"true"}},[a._v("#")]),a._v(" Build")]),a._v(" "),s("p",[a._v("Download Go modules:")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("go mod download\n")])])]),s("p",[a._v("Build Flagger binary and container image:")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("make")]),a._v(" build\n")])])]),s("p",[a._v("Build load tester binary and container image:")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("make")]),a._v(" loadtester-build\n")])])]),s("h2",{attrs:{id:"code-changes"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#code-changes","aria-hidden":"true"}},[a._v("#")]),a._v(" Code changes")]),a._v(" "),s("p",[a._v("Before submitting a PR, make sure your changes are covered by unit tests.")]),a._v(" "),s("p",[a._v("If you made changes to "),s("code",[a._v("go.mod")]),a._v(" run:")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("go mod tidy\n")])])]),s("p",[a._v("If you made changes to "),s("code",[a._v("pkg/apis")]),a._v(" regenerate Kubernetes client sets with:")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("make")]),a._v(" codegen\n")])])]),s("p",[a._v("Run code formatters:")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("make")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("fmt")]),a._v("\n")])])]),s("p",[a._v("Run unit tests:")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("make")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("test")]),a._v("\n")])])]),s("h2",{attrs:{id:"api-changes"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#api-changes","aria-hidden":"true"}},[a._v("#")]),a._v(" API changes")]),a._v(" "),s("p",[a._v("If you made changes to "),s("code",[a._v("pkg/apis")]),a._v(" regenerate the Kubernetes client sets with:")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("make")]),a._v(" codegen\n")])])]),s("p",[a._v("Update the validation spec in "),s("code",[a._v("artifacts/flagger/crd.yaml")]),a._v(" and run:")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("make")]),a._v(" crd\n")])])]),s("p",[a._v("Note that any change to the CRDs must be accompanied by an update to the Open API schema.")]),a._v(" "),s("h2",{attrs:{id:"manual-testing"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#manual-testing","aria-hidden":"true"}},[a._v("#")]),a._v(" Manual testing")]),a._v(" "),s("p",[a._v("Install a service mesh and/or an ingress controller on your cluster and deploy Flagger\nusing one of the install options "),s("a",{attrs:{href:"../install/flagger-install-on-kubernetes"}},[a._v("listed here")]),a._v(".")]),a._v(" "),s("p",[a._v("If you made changes to the CRDs, apply your local copy with:")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("kubectl apply -f artifacts/flagger/crd.yaml\n")])])]),s("p",[a._v("Shutdown the Flagger instance installed on your cluster (replace the namespace with your mesh/ingress one):")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("kubectl -n istio-system scale deployment/flagger --replicas"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("0")]),a._v("\n")])])]),s("p",[a._v("Port forward to your Prometheus instance:")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("kubectl -n istio-system port-forward svc/prometheus "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("9090")]),a._v(":9090\n")])])]),s("p",[a._v("Run Flagger locally against your remote cluster by specifying a kubeconfig path:")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("go run cmd/flagger/ -kubeconfig"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token environment constant"}},[a._v("$HOME")]),a._v("/.kube/config "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n-log-level"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("info "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n-mesh-provider"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("istio "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n-metrics-server"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("http://localhost:9090\n")])])]),s("p",[a._v("Another option to manually test your changes is to build and push the image to your container registry:")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("make")]),a._v(" build\ndocker tag weaveworks/flagger:latest "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("YOUR-DOCKERHUB-USERNAME"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("/flagger:"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("YOUR-TAG"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\ndocker push "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("YOUR-DOCKERHUB-USERNAME"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("/flagger:"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("YOUR-TAG"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n")])])]),s("p",[a._v("Deploy your image on the cluster and scale up Flagger:")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("kubectl -n istio-system "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("set")]),a._v(" image deployment/flagger "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("flagger")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("YOUR-DOCKERHUB-USERNAME"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("/flagger:"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("YOUR-TAG"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\nkubectl -n istio-system scale deployment/flagger --replicas"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),a._v("\n")])])]),s("p",[a._v("Now you can use one of the "),s("router-link",{attrs:{to:"/intro/"}},[a._v("tutorials")]),a._v(" to manually test your changes.")],1),a._v(" "),s("h2",{attrs:{id:"integration-testing"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#integration-testing","aria-hidden":"true"}},[a._v("#")]),a._v(" Integration testing")]),a._v(" "),s("p",[a._v("Flagger end-to-end tests can be run locally with "),s("a",{attrs:{href:"https://github.com/kubernetes-sigs/kind",target:"_blank",rel:"noopener noreferrer"}},[a._v("Kubernetes Kind"),s("OutboundLink")],1),a._v(".")]),a._v(" "),s("p",[a._v("Create a Kind cluster:")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("kind create cluster\n")])])]),s("p",[a._v("Install a service mesh and/or an ingress controller in Kind.")]),a._v(" "),s("p",[a._v("Linkerd example:")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("linkerd "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" kubectl apply -f -\nlinkerd check\n")])])]),s("p",[a._v("Build Flagger container image and load it on the cluster:")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("make")]),a._v(" build\ndocker tag weaveworks/flagger:latest test/flagger:latest\nkind load docker-image test/flagger:latest\n")])])]),s("p",[a._v("Install Flagger on the cluster and set the test image:")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("kubectl apply -k ./kustomize/linkerd\nkubectl -n linkerd "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("set")]),a._v(" image deployment/flagger "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("flagger")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("test/flagger:latest\nkubectl -n linkerd rollout status deployment/flagger\n")])])]),s("p",[a._v("Run the Linkerd e2e tests:")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("./test/e2e-linkerd-tests.sh\n")])])]),s("p",[a._v("For each service mesh and ingress controller there is a dedicated e2e test suite,\nchose one that matches your changes from this "),s("a",{attrs:{href:"https://github.com/weaveworks/flagger/tree/master/test",target:"_blank",rel:"noopener noreferrer"}},[a._v("list"),s("OutboundLink")],1),a._v(".")]),a._v(" "),s("p",[a._v("When you open a pull request on Flagger repo, the unit and integration tests will be run in CI.")])])},[],!1,null,null,null);e.default=r.exports}}]);