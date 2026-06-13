async function getOrderData(orderId, token) {
  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/todos/${orderId}`,
      {
        headers: { Authorization: token },
      },
    );

    if (!response.ok) {
      throw new Error("Failed to fetch order details");
    }

    const data = await response.json();

    return {
      id: data.id,
      status: data.completed ? "Delivered" : "Processing",
    };
  } catch (error) {
    console.error("Error fetching data:", error);
    return null;
  }
}

function renderOrderDetails({ id, status }) {
  const detailsDiv = document.getElementById("orderDetails");
  detailsDiv.innerHTML = "";

  const header = document.createElement("h3");
  header.textContent = `Order ID: ${id}`;

  const statusEl = document.createElement("p");
  statusEl.textContent = `Status: ${status}`;

  detailsDiv.append(header, statusEl);
}

function setupModalListeners({ id, status }, token) {
  const modal = document.getElementById("orderModal");
  const closeBtn = modal.querySelector(".close");
  const confirmBtn = document.getElementById("confirmOrderBtn");

  closeBtn.onclick = () => {
    modal.style.display = "none";
  };

  if (status === "Delivered") {
    confirmBtn.style.display = "none";
  } else {
    confirmBtn.style.display = "block";
    confirmBtn.onclick = () => confirmOrder(id, token);
  }
}

async function showOrderModal(orderId, token) {
  const order = await getOrderData(orderId, token);

  if (order) {
    renderOrderDetails(order);
    setupModalListeners(order, token);

    const modal = document.getElementById("orderModal");
    modal.style.display = "block";
  }
}