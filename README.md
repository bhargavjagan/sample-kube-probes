# Sample Kubernetes Probes Project 🚀

Welcome to the **Sample Kubernetes Probes Project** repository! This project provides a hands-on example of Kubernetes probes, helping you understand how they work and their importance in managing containerized applications.

📖 **Table of Contents**
- [Getting Started](#getting-started)
- [Understanding Kubernetes Probes](#understanding-kubernetes-probes)
- [Experimenting with Probes](#experimenting-with-probes)
- [Contributing](#contributing)
- [License](#license)

## Getting Started 🚀

To get started with this project, follow these steps:

1. **Clone the Repository** 📂
   ```bash
   git clone https://github.com/bhargavjagan/sample-kube-probes.git
   ```

2. **Navigate to the Project Directory** 📁
   ```bash
   cd sample-kube-probes
   ```

3. **Explore the Code** 👀
   - Examine the provided Node.js application code and Kubernetes configurations to understand how probes are implemented.

4. **Experiment with Kubernetes Probes** 🧪
   - Modify the application's health status using the `/health` endpoint and observe how Kubernetes reacts.

## Understanding Kubernetes Probes ℹ️

Kubernetes probes are essential for managing the health of containerized applications. This project demonstrates three types of probes:

- **Liveness Probe**: Determines if the container is alive and automatically restarts it if needed.
- **Readiness Probe**: Ensures the container is ready to accept traffic, improving service reliability.
- **Startup Probe**: Handles the initial startup phase, delaying readiness checks until the application initializes.


### Liveness Probe

The Liveness Probe serves as a heartbeat for the containerized application. Its primary purpose is to inform Kubernetes whether the container is running successfully. By default, if a liveness probe is not provided, Kubernetes assumes that the container is always alive (`true`).

In our sample application, we utilize the liveness probe to periodically ping external dependencies such as MongoDB and Redis. If the probe detects that these dependencies are unreachable or the ping fails, Kubernetes will consider the container as unhealthy and attempt to restart it automatically.

### Readiness Probe

The Readiness Probe is used to notify Kubernetes that the container is ready to accept incoming traffic and serve requests. It is particularly valuable in scenarios where a containerized application depends on other services or components.

For example, consider a frontend application that relies on a backend service. If the backend service experiences downtime for any reason, you can set the readiness probe to fail. When the probe fails, Kubernetes removes the container from the service's pool. The container remains out of service until it can successfully re-establish a connection with the backend, ensuring that only healthy containers serve traffic.

### Startup Probe

The Startup Probe is designed to handle the initial startup phase of an application. During startup, an application may require some time to initialize its components and become fully operational. The readiness and liveness probes are temporarily skipped while the startup probe is active.

In our sample application, we configure the startup probe to run only once at the beginning of the application's lifecycle. This allows Kubernetes to delay readiness and liveness checks until the application is ready to handle traffic, preventing premature traffic routing to an application that is still initializing.


## Experimenting with Probes 🧪

To experiment with Kubernetes probes using this project:

1. Access the application's health endpoints:
   - `/health`: Overall health status.
   - `/health/readiness`: Readiness status.
   - `/health/liveness`: Liveness status.
   - `/health/startup`: Startup status.

2. Modify the probe behavior by updating the `health` object in the Node.js application code.
   - Observe how Kubernetes responds to changes in probe statuses.

## Contributing 🤝

Contributions are welcome! If you are interested in making code contributions to the project, we encourage you to fork the repository, make your changes, and submit a pull request (PR). Please follow the guidelines below for code contributions.

## License 📜

This project is licensed under the MIT License - see the [LICENSE](./README.md)file for details.

---

Made with ❤️ by [Bhargav Dadi](https://github.com/bhargavjagan) 👩‍💻