
# ---
# Checks
# ---
.PHONY: check
check: ## Run all checks
	pre-commit run --all-files

# ---
# Frontend
# ---
.PHONY: run-frontend
run-dev-frontend:  ## Run the app frontend in dev mode
	npm run dev

run-dev-css: ## Run the tailwind compiler in dev mode
	tailwindcss -i main.css -o style.css --watch
