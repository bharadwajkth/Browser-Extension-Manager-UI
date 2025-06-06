document.addEventListener("DOMContentLoaded", () => {
      fetch('data.json')
        .then(res => res.json())
        .then(data => {
          const container = document.getElementById("dataDisplay");
          let currentFilter = "all";

          function render() {
            container.innerHTML = "";
            const filtered = data.filter(item => {
              if (currentFilter === "active") return item.isActive;
              if (currentFilter === "inactive") return !item.isActive;
              return true;
            });

            filtered.forEach(extension => {
              const card = document.createElement("div");
              card.className = "extension-card";

              const logo = document.createElement("img");
              logo.src = extension.logo;
              logo.alt = extension.name;

              const name = document.createElement("h3");
              name.textContent = extension.name;

              const desc = document.createElement("p");
              desc.textContent = extension.description;

              const actions = document.createElement("div");
              actions.className = "actions";

              const removeBtn = document.createElement("button");
              removeBtn.textContent = "Remove";
              removeBtn.className = "remove-btn";
              removeBtn.onclick = () => card.remove();

              const toggle = document.createElement("div");
              toggle.className = "toggle";
              if (extension.isActive) toggle.classList.add("active");

              toggle.addEventListener("click", () => {
                toggle.classList.toggle("active");
                extension.isActive = !extension.isActive;
              });

              actions.appendChild(removeBtn);
              actions.appendChild(toggle);

              card.appendChild(logo);
              card.appendChild(name);
              card.appendChild(desc);
              card.appendChild(actions);

              container.appendChild(card);
            });
          }

          // Filters
          document.querySelectorAll(".filters button").forEach(btn => {
            btn.addEventListener("click", () => {
              document.querySelectorAll(".filters button").forEach(b => b.classList.remove("active"));
              btn.classList.add("active");
              currentFilter = btn.dataset.filter;
              render();
            });
          });

          render();
        });

      // Theme toggle handler
      document.getElementById("themeToggle").addEventListener("click", () => {
        document.body.classList.toggle("dark");
        document.body.classList.toggle("light");
      });
    });