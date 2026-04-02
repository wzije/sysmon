import si from "systeminformation";
import os from "os";
export const getSystemData = async () => {
    const [cpu, mem, disk, time, osInfo, net, loaded, procs] = await Promise.all([
        si.currentLoad(),
        si.mem(),
        si.fsSize(),
        si.time(),
        si.osInfo(),
        si.networkInterfaces(),
        si.currentLoad(),
        si.processes()
    ]);
    //disk info
    const disks = disk.map(d => ({
        fs: d.fs,
        size: (d.size / 1024 / 1024 / 1024).toFixed(2) + " GB",
        used: (d.used / 1024 / 1024 / 1024).toFixed(2) + " GB",
        free: ((d.size - d.used) / 1024 / 1024 / 1024).toFixed(2) + " GB",
        usage: d.use.toFixed(2) + "%"
    }));
    return {
        system: {
            hostname: os.hostname(),
            platform: osInfo.platform,
            distro: osInfo.distro,
            kernel: osInfo.kernel,
            arch: os.arch()
        },
        cpu: {
            usage: cpu.currentLoad.toFixed(2) + "%",
            cores: cpu.cpus.length
        },
        memory: {
            usage: ((mem.used / mem.total) * 100).toFixed(2) + "%",
            total: (mem.total / 1024 / 1024 / 1024).toFixed(2) + " GB",
            used: (mem.used / 1024 / 1024 / 1024).toFixed(2) + " GB"
        },
        disk: disks,
        network: net.map(n => ({
            iface: n.iface,
            ip: n.ip4,
            mac: n.mac
        })),
        uptime: (time.uptime / 3600).toFixed(2) + " hours",
        processes: {
            all: procs.all,
            running: procs.running
        }
    };
};
//# sourceMappingURL=system.service.js.map