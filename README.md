# Sample kubernetes Probes

It is a sample application to test and run the kubernetes probes

## Liveness Probe

The liveness probe is to tell the kube that the container had created successfully. If the liveness probe is not provided then by default it considers it as `true`.

In this application, we are using the liveness to ping the external dependencies such as mongo and redis. If the ping is sending false at the pod or the container gets restarted.

## Readiness Probe

The readines probe is to tell the kube that the container is ready to accept the traffic and serve the request.

It can be used for the frontend which has dependencies on the backend, and the backend is down for some reason. In the case, we will make the readiness to fail so that the container is removed from the service and it try to re-connect with the backend and wait till the connection.

## Startup Probe

The startup probe is required to tell the container that the application requires some time to startup the app. The readiness and the liveness will be skipped till the startup is up. This will be called only once at the start of the application.
