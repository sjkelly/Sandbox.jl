var documenterSearchIndex = {"docs":
[{"location":"#Sandbox.jl-Documentation","page":"Sandbox.jl Documentation","title":"Sandbox.jl Documentation","text":"","category":"section"},{"location":"","page":"Sandbox.jl Documentation","title":"Sandbox.jl Documentation","text":"Sandbox.jl provides basic containerization tools for running Linux guests on a variety of platforms.","category":"page"},{"location":"#Index","page":"Sandbox.jl Documentation","title":"Index","text":"","category":"section"},{"location":"","page":"Sandbox.jl Documentation","title":"Sandbox.jl Documentation","text":"","category":"page"},{"location":"#Types","page":"Sandbox.jl Documentation","title":"Types","text":"","category":"section"},{"location":"","page":"Sandbox.jl Documentation","title":"Sandbox.jl Documentation","text":"Modules = [Sandbox]\nOrder = [:type]","category":"page"},{"location":"#Sandbox.SandboxConfig","page":"Sandbox.jl Documentation","title":"Sandbox.SandboxConfig","text":"SandboxConfig(read_only_maps, read_write_maps, env)\n\nSandbox executors require a configuration to set up the environment properly.\n\nread_only_maps: Directories that are mapped into the sandbox as read-only mappings.\nSpecified as pairs, e.g. sandbox_path => host_path.  All paths must be absolute.\nMust always include a mapping for root, e.g. \"/\" => rootfs_path.\nread_write_maps: Directories that are mapped into the sandbox as read-write mappings.\nSpecified as pairs, e.g. sandbox_path => host_path.  All paths must be absolute.\nNote that some executors may not show perfect live updates; consistency is guaranteed only after execution is finished.\nenv: Dictionary mapping of environment variables that should be set within the sandbox.\nentrypoint: Executable that gets passed the actual command being run.\nThis is a path within the sandbox, and must be absolute.\nDefaults to nothing, which causes the command to be executed directly.\npwd: Set the working directory of the command that will be run.\nThis is a path within the sandbox, and must be absolute.\npersist: Tell the executor object to persist changes made to the rootfs.\nThis is a boolean value, it is up to interpretation by the executor.\nPersistence is a property of an individual executor and changes live only as long as the executor object itself.\nYou cannot transfer persistent changes from one executor to another.\nstdin, stdout, stderr: input/output streams for the sandboxed process.\nCan be any kind of IO, TTY, devnull, etc...\nverbose: Set whether the sandbox construction process should be more or less verbose.\n\n\n\n\n\n","category":"type"},{"location":"#Sandbox.SandboxExecutor","page":"Sandbox.jl Documentation","title":"Sandbox.SandboxExecutor","text":"SandboxExecutor\n\nThis represents the base type for all execution backends within this package. Valid concrete subtypes must implement at least the following methods:\n\nT(): no-argument constructor to ready an execution engine with all defaults.\nexecutor_available(::DataType{T}): Checks whether executor type T is available on this system.  For example, UserNamespacesExecutors are only available on Linux, and even then only on certain kernels.  Availablility checks may run a program to determine whether that executor is actually available.\nbuild_executor_command(exe::T, config::SandboxConfig, cmd::Cmd): Builds the Cmd object that, when run, executes the user's desired command within the given sandbox.  The config object contains all necessary metadata such as shard mappings, environment variables, stdin/stdout/stderr redirection, etc...\ncleanup(exe::T): Cleans up any persistent data storage that this executor may have built up over the course of its execution.\n\nNote that while you can manually construct and cleanup an executor, it is recommended that users instead make use of the with_executor() convenience function:\n\nwith_executor(UnprivilegedUserNamespacesExecutor) do exe\n    run(exe, config, ...)\nend\n\n\n\n\n\n","category":"type"},{"location":"#Functions","page":"Sandbox.jl Documentation","title":"Functions","text":"","category":"section"},{"location":"","page":"Sandbox.jl Documentation","title":"Sandbox.jl Documentation","text":"Modules = [Sandbox]\nOrder = [:function]","category":"page"},{"location":"#Sandbox.build_docker_image-Tuple{String}","page":"Sandbox.jl Documentation","title":"Sandbox.build_docker_image","text":"build_docker_image(root_path::String)\n\nDocker doesn't like volume mounts within volume mounts, like we do with sandbox. So we do things \"the docker way\", where we construct a rootfs docker image, then mount things on top of that, with no recursive mounting.  We cut down on unnecessary work somewhat by quick-scanning the directory for changes and only rebuilding if changes are detected.\n\n\n\n\n\n","category":"method"},{"location":"#Sandbox.get_kernel_version-Tuple{}","page":"Sandbox.jl Documentation","title":"Sandbox.get_kernel_version","text":"get_kernel_version(;verbose::Bool = false)\n\nUse uname() to get the kernel version and parse it out as a VersionNumber, returning nothing if parsing fails or this is not Linux.\n\n\n\n\n\n","category":"method"},{"location":"#Sandbox.getuid-Tuple{}","page":"Sandbox.jl Documentation","title":"Sandbox.getuid","text":"getuid()\n\nWrapper around libc's getuid() function\n\n\n\n\n\n","category":"method"},{"location":"#Sandbox.is_ecryptfs-Tuple{AbstractString}","page":"Sandbox.jl Documentation","title":"Sandbox.is_ecryptfs","text":"is_ecryptfs(path::AbstractString; verbose::Bool=false)\n\nChecks to see if the given path (or any parent directory) is placed upon an ecryptfs mount.  This is known not to work on current kernels, see this bug for more details: https://bugzilla.kernel.org/show_bug.cgi?id=197603\n\nThis method returns whether it is encrypted or not, and what mountpoint it used to make that decision.\n\n\n\n\n\n","category":"method"},{"location":"#Sandbox.max_directory_ctime-Tuple{String}","page":"Sandbox.jl Documentation","title":"Sandbox.max_directory_ctime","text":"max_directory_ctime(prefix::String)\n\nTakes the stat() of all files in a directory root, keeping the maximum ctime, recursively.  Comparing just this value allows for quick directory change detection.\n\n\n\n\n\n","category":"method"},{"location":"#Sandbox.uname-Tuple{}","page":"Sandbox.jl Documentation","title":"Sandbox.uname","text":"uname()\n\nOn Linux systems, return the strings returned by the uname() function in libc.\n\n\n\n\n\n","category":"method"}]
}
