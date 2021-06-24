<script>
	import { navigate } from "svelte-routing";
	import { store } from "../../stores/store";
	import { origin, databasesArray } from "../../stores/headers";
	import { onMount } from "svelte";
	import Loading from "../loading/Loading.svelte";
    import { isLogin } from "../../stores/login";
	let json = {
		db: "Alajuela",
		user: "admin",
		password: "admin",
	};
	let msg = "";
	let infoDiv = false;
	let checkStateLogin = false;
	let handle_login = async () => {
		let data;
		try {
			let token = localStorage.getItem("token");
			let originUrl = $origin;
			let tokenData = !(
				token == "" ||
				token == undefined ||
				token == "undefine" ||
				token == null
			)
				? `bearer ${token}`
				: "";
			infoDiv = false;
			const data = await fetch("http://localhost:80/api/login", {
				method: "POST",
				headers: {
					Authorization: tokenData,
					origin: originUrl,
				},
				body: JSON.stringify(json),
			});
			let newJson = await data.json();
			if (newJson.error) {
				infoDiv = true;
				msg = newJson.msg;
			} else {
				infoDiv = true;
				msg = "Login Exitoso";
				localStorage.setItem("token", newJson.token);
				store.set(newJson.userInfo.data);
				setTimeout(function () {
					isLogin.set(true);
					navigate("/dashboard", { replace: true });
                    location.reload()
				}, 2000);
			}
			console.log({ errorStatus: newJson.error });
		} catch (error) {
			console.log({ errorStatus: error });
			msg = error;
			infoDiv = true;
		}
	};
	onMount(async () => {
        
		let token = localStorage.getItem("token");
		let originUrl = $origin;
		let tokenData = !(
			token == "" ||
			token == undefined ||
			token == "undefine" ||
			token == null
		)
			? `bearer ${token}`
			: "";
		console.log("Token On mount", tokenData);
		const res = await fetch(`http://localhost/api/verify`, {
			method: "POST",
			headers: {
				Authorization: tokenData,
				origin: originUrl,
			},
		});
		let data = await res.json();
		if (data.auth) {
            isLogin.set(true);
			setTimeout(function () {
				navigate("/dashboard", { replace: true });
                location.reload()
			}, 500);
		} else {
            isLogin.set(false);
			checkStateLogin = true;
			localStorage.removeItem("token");
		}
	});
	$: infoDiv;
</script>

<div class=".wrapper">
	<div class="container">
		<h1>Lumiere</h1>
		{#if checkStateLogin}
			<form
				class="form"
				id="formLogin"
				on:submit|preventDefault={handle_login}
			>
				<input
					type="text"
					name="usuario"
					placeholder="Usuario"
					bind:value={json.user}
				/>
				<input
					type="password"
					name="pass"
					placeholder="Contraseña"
					bind:value={json.password}
				/>
				<select id="selected" bind:value={json.db} name="db">
					{#each $databasesArray as question}
						<option value={question.id}>
							{question.text}
						</option>
					{/each}
				</select>
				<button type="submit" id="login-button"
					>Iniciar Sesion</button
				>
			</form>
			<div id="msg" style={infoDiv || "display: none;"}>
				<h3 id="msgText" class="error">{msg}</h3>
				{#if checkStateLogin}
					<Loading />
				{/if}
			</div>
		{:else}
			<main>
				<Loading />
			</main>
		{/if}
	</div>
</div>

<style>
	
	main {
		padding-top: 30px;
	}
	* {
		box-sizing: border-box;
		margin: 0;
		padding: 0;
	}
	::placeholder {
		/* Chrome, Firefox, Opera, Safari 10.1+ */
		color: white;
		opacity: 1; /* Firefox */
	}

	:-ms-input-placeholder {
		/* Internet Explorer 10-11 */
		color: white;
	}

	::-ms-input-placeholder {
		/* Microsoft Edge */
		color: white;
	}

	.container {
		max-width: 600px;
		margin: 0 auto;
		padding: 80px 0;
		height: 400px;
		text-align: center;
	}

	.container h1 {
		font-size: 40px;
		-webkit-transition-duration: 1s;
		transition-duration: 1s;
		-webkit-transition-timing-function: ease-in-put;
		transition-timing-function: ease-in-put;
		font-weight: 200;
		color: #fff;
	}
	h3 {
		color: white;
		font-weight: 300;
	}
	form {
		padding: 20px 0;
		position: relative;
		z-index: 2;
	}

	form input {
		-webkit-appearance: none;
		-moz-appearance: none;
		appearance: none;
		outline: 0;
		border: 1px solid rgba(255, 255, 255, 0.4);
		background-color: rgba(255, 255, 255, 0.2);
		width: 250px;
		border-radius: 3px;
		padding: 10px 15px;
		margin: 0 auto 10px auto;
		display: block;
		text-align: center;
		font-size: 18px;
		color: white;
		-webkit-transition-duration: 0.25s;
		transition-duration: 0.25s;
		font-weight: 300;
	}

	form #selected {
		-webkit-appearance: none;
		-moz-appearance: none;
		appearance: none;
		outline: 0;
		border: 1px solid rgba(255, 255, 255, 0.4);
		background-color: rgba(255, 255, 255, 0.2);
		width: 250px;
		border-radius: 3px;
		padding: 10px 15px;
		margin: 0 auto 10px auto;
		display: block;
		text-align: center;
		font-size: 18px;
		color: white;
		-webkit-transition-duration: 0.25s;
		transition-duration: 0.25s;
		font-weight: 300;
	}

	form #selected {
		text-align-last: center;
	}

	form #selected:hover {
		text-align-last: center;
	}

	form #selected option {
		text-align-last: center;
		color: #14a6ff;
	}

	form input:hover {
		background-color: rgba(255, 255, 255, 0.4);
	}

	form input:focus {
		background-color: white;
		width: 260px;
		color: #14a6ff;
	}

	form button {
		-webkit-appearance: none;
		-moz-appearance: none;
		appearance: none;
		outline: 0;
		background-color: white;
		border: 0;
		padding: 10px 15px;
		color: #409aff;
		border-radius: 3px;
		width: 250px;
		cursor: pointer;
		font-size: 18px;
		-webkit-transition-duration: 0.25s;
		transition-duration: 0.25s;
	}

	form button:hover {
		background-color: #f5f7f9;
	}
</style>
